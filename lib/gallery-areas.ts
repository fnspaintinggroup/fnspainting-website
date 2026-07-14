const galleryAreaSuburbs = {
  Chatswood: ["Chatswood"],
  "Northern Beaches": ["Balgowlah Heights", "Dee Why", "Mona Vale"],
  "Mona Vale": ["Mona Vale"],
  "North Shore": [
    "Artamon",
    "Artarmon",
    "Chatswood",
    "Chatswood West",
    "East Lindfield",
    "Lindfield",
    "North Bridge",
    "North Willoughby",
    "Roseville",
    "Willoughby",
  ],
  Carlingford: ["Carlingford"],
  "Dee Why": ["Dee Why"],
  Marrickville: ["Marrickville"],
  "North Ryde": ["North Ryde"],
  Parramatta: ["Parramatta"],
  Roseville: ["Roseville"],
  Silverwater: ["Silverwater"],
  Willoughby: ["Willoughby"],
} as const;

export type GalleryArea = keyof typeof galleryAreaSuburbs;

function normalizeSuburb(value: string) {
  return value
    .toLowerCase()
    .replace(/\bnsw\b/g, "")
    .replace(/\b\d{4}\b/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

export function getGalleryArea(value: string | undefined): GalleryArea | undefined {
  if (!value) {
    return undefined;
  }

  return Object.prototype.hasOwnProperty.call(galleryAreaSuburbs, value)
    ? (value as GalleryArea)
    : undefined;
}

export function getGalleryAreaHref(area: string) {
  return getGalleryArea(area)
    ? `/painting-gallery?area=${encodeURIComponent(area)}#gallery-results`
    : undefined;
}

export function gallerySuburbMatchesArea(suburb: string | undefined, area: GalleryArea) {
  if (!suburb) {
    return false;
  }

  const normalizedSuburb = normalizeSuburb(suburb);

  return galleryAreaSuburbs[area].some(
    (areaSuburb) => normalizeSuburb(areaSuburb) === normalizedSuburb,
  );
}
