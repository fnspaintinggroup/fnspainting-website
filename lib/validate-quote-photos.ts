import { MAX_QUOTE_PHOTOS, MAX_QUOTE_PHOTO_BYTES } from "@/lib/quote-uploads";

function imageExtension(bytes: Buffer): string | null {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpg";
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return "png";
  if (bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") return "webp";
  if (bytes.toString("ascii", 4, 8) === "ftyp" && /hei[cf]|heix|hevc|hevx/.test(bytes.toString("ascii", 8, 80))) return "heic";
  return null;
}

export function validateQuotePhotos(value: unknown) {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.length > MAX_QUOTE_PHOTOS) throw new Error("You can attach up to 5 photos.");
  let total = 0;
  return value.map((item, index) => {
    if (!item || typeof item !== "object" || typeof item.content !== "string" || !item.content
      || item.content.length > Math.ceil(MAX_QUOTE_PHOTO_BYTES / 3) * 4
      || ! /^[A-Za-z0-9+/]+={0,2}$/.test(item.content) || item.content.length % 4 !== 0) {
      throw new Error("A photo could not be read. Please choose the photo again.");
    }
    const bytes = Buffer.from(item.content, "base64");
    if (bytes.toString("base64") !== item.content) throw new Error("Invalid photo data.");
    total += bytes.length;
    if (total > MAX_QUOTE_PHOTO_BYTES) throw new Error("The prepared photos are too large. Please select fewer photos or email the originals.");
    const extension = imageExtension(bytes);
    if (!extension) throw new Error("Please attach JPG, PNG, WebP or HEIC photos only.");
    // Use a generated safe filename; never trust paths or executable extensions from the browser.
    return { filename: `site-photo-${index + 1}.${extension}`, content: bytes.toString("base64") };
  });
}
