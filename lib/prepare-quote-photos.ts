import { type PreparedQuotePhoto } from "@/lib/quote-uploads";

function readBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(new Error("This photo could not be read. Please select it again."));
    reader.readAsDataURL(blob);
  });
}

export async function prepareQuotePhoto(file: File): Promise<PreparedQuotePhoto> {
  if (!file.size || file.size > 20 * 1024 * 1024) {
    throw new Error("Please choose photos smaller than 20 MB each.");
  }
  const heic = /\.(heic|heif)$/i.test(file.name) || /image\/hei[cf]/i.test(file.type);
  if (heic) {
    if (file.size > 3 * 1024 * 1024) {
      throw new Error("This HEIC photo is too large. Please choose a JPG version or email the original to us.");
    }
    return {
      id: crypto.randomUUID(), filename: file.name.replace(/[^a-zA-Z0-9._-]/g, "_") || "photo.heic",
      content: await readBase64(file), bytes: file.size,
    };
  }
  if (!/image\/(jpeg|png|webp)/i.test(file.type)) {
    throw new Error("Please select JPG, PNG, WebP or HEIC photos.");
  }
  const url = URL.createObjectURL(file);
  try {
    const image = new window.Image();
    image.src = url;
    await image.decode();
    if (!image.naturalWidth || image.naturalWidth * image.naturalHeight > 40_000_000) {
      throw new Error("Please choose a smaller photo or email the original to us.");
    }
    const scale = Math.min(1, 1600 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Photo preparation is unavailable. Please email your photos instead.");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(
      (result) => result ? resolve(result) : reject(new Error("This photo could not be prepared. Please try another image.")),
      "image/jpeg", 0.8,
    ));
    const content = await readBase64(blob);
    return {
      id: crypto.randomUUID(), filename: file.name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9._-]/g, "_") + ".jpg",
      content, bytes: blob.size, preview: "data:image/jpeg;base64," + content,
    };
  } finally {
    URL.revokeObjectURL(url);
  }
}
