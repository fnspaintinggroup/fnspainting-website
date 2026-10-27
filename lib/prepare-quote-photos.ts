import { MAX_QUOTE_PHOTO_BYTES, MAX_QUOTE_PHOTOS, type PreparedQuotePhoto } from "@/lib/quote-uploads";

export const MAX_ORIGINAL_PHOTO_BYTES = 20 * 1024 * 1024;
// Reserve space for all five photos and request fields, independently of selection order.
const EMAIL_PHOTO_BUDGET = Math.floor(MAX_QUOTE_PHOTO_BYTES / MAX_QUOTE_PHOTOS) - 16_384;

function readBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(new Error("This photo could not be read. Please select it again."));
    reader.readAsDataURL(blob);
  });
}

async function openImage(blob: Blob): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(blob);
  try {
    const image = new window.Image();
    image.src = url;
    await image.decode();
    return image;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function prepareQuotePhoto(file: File): Promise<PreparedQuotePhoto> {
  if (!file.size || file.size > MAX_ORIGINAL_PHOTO_BYTES) {
    throw new Error(`${file.name}: please choose a photo up to 20 MB.`);
  }
  const heic = /\.(heic|heif)$/i.test(file.name) || /image\/hei[cf]/i.test(file.type);
  if (!heic && !/^image\/(jpeg|png|webp)$/i.test(file.type) && !/\.(jpe?g|png|webp)$/i.test(file.name)) {
    throw new Error(`${file.name}: please select JPG, PNG, WebP or HEIC photos.`);
  }
  let image: HTMLImageElement;
  try {
    // Safari may decode HEIC itself; other browsers load the converter only when needed.
    image = await openImage(file);
  } catch {
    if (!heic) throw new Error(`${file.name}: this photo could not be opened. Please select another image.`);
    try {
      const { heicTo } = await import("heic-to/csp");
      const converted = await heicTo({ blob: file, type: "image/jpeg", quality: 0.9 });
      if (!(converted instanceof Blob)) throw new Error("Conversion unavailable");
      image = await openImage(converted);
    } catch {
      throw new Error(`${file.name}: this HEIC version could not be converted. Please choose a JPG copy, or email the original to us.`);
    }
  }
  if (!image.naturalWidth || image.naturalWidth * image.naturalHeight > 60_000_000) {
    throw new Error(`${file.name}: please choose a photo up to 60 megapixels.`);
  }
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Photo preparation is unavailable. Please email your photos instead.");
  for (const edge of [1600, 1280, 1024, 800, 640]) {
    const scale = Math.min(1, edge / Math.max(image.naturalWidth, image.naturalHeight));
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    for (const quality of [0.82, 0.68, 0.52]) {
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(
        (result) => result ? resolve(result) : reject(new Error("This photo could not be prepared. Please try another image.")),
        "image/jpeg", quality,
      ));
      if (blob.size > EMAIL_PHOTO_BUDGET) continue;
      const content = await readBase64(blob);
      return {
        id: crypto.randomUUID(), filename: file.name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9._-]/g, "_") + ".jpg",
        content, bytes: blob.size, preview: "data:image/jpeg;base64," + content,
      };
    }
  }
  throw new Error(`${file.name}: this photo could not be prepared for email. Please choose another photo or email the original to us.`);
}
