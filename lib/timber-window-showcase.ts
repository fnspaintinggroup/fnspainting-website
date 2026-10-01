import { galleryCollections } from "@/lib/gallery";
import { projects } from "@/lib/projects";

const pairSlugs = [
  "lindfield-exterior-window-trim-repaint",
  "north-strathfield-exterior-window-restoration",
] as const;

const standardPairs = pairSlugs.map((slug) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing timber window project: ${slug}`);
  return { ...project, detailHref: `/projects/${slug}` };
});

const willoughbyProject = projects.find(
  (item) => item.slug === "exterior-facade-trim-repaint",
);
const willoughbyWindow = willoughbyProject?.additionalBeforeAfterViews?.find(
  (view) => view.id === "timber-window-frame-trim",
);
if (!willoughbyProject || !willoughbyWindow) {
  throw new Error("Missing North Willoughby timber window pair");
}

export const timberWindowPairs = [
  ...standardPairs,
  {
    ...willoughbyProject,
    title: "North Willoughby Timber Window Frame and Trim",
    beforeImage: willoughbyWindow.beforeImage,
    afterImage: willoughbyWindow.afterImage,
    beforeImageAlt: willoughbyWindow.beforeImageAlt,
    afterImageAlt: willoughbyWindow.afterImageAlt,
    description: willoughbyWindow.caption,
    detailHref: "/projects/exterior-facade-trim-repaint#timber-window-frame-trim",
  },
];

export const photoSelections = [
  {
    slug: "mona-vale-heritage-interior-painting",
    imageTitles: ["Formal Room and Bay Window", "Formal Room Archway", "Heritage Room Overview"],
    summary: "Three selected window and heritage interior views in Mona Vale.",
  },
  {
    slug: "north-willoughby-exterior-house-repaint-gallery",
    imageTitles: ["Front Window Detail", "Side Eaves and Windows", "Window and Eaves Detail", "Front Facade Painting"],
    summary: "Four selected window, eaves, and facade views in North Willoughby.",
  },
  {
    slug: "chatswood-exterior-house-painting",
    imageTitles: ["Upper Roofline Detail", "Side Gate and Porch View", "Rear Yard View", "Outbuilding Painting", "Rear Facade Wide View", "Rear Entry Painting"],
    summary: "Six selected window and exterior site views in Chatswood.",
  },
  {
    slug: "chatswood-timber-window-repair-painting",
    imageTitles: null,
    summary: "Fourteen photos of localised repairs, preparation, and completed timber window painting in Chatswood.",
  },
  {
    slug: "lindfield-exterior-window-trim-repaint",
    imageTitles: ["Verandah Window Painting", "French Door and Window Painting"],
    summary: "Finished verandah and side-window frames from the Lindfield exterior repaint.",
  },
] as const;

export const timberWindowCollections = photoSelections.map((selection) => {
  const collection = galleryCollections.find((item) => item.slug === selection.slug);
  if (!collection) throw new Error(`Missing timber window gallery: ${selection.slug}`);
  const images = selection.imageTitles
    ? selection.imageTitles.map((title) =>
        collection.images.find((image) => image.title === title),
      )
    : collection.images;
  if (images.some((image) => !image)) {
    throw new Error(`Missing selected timber window photos: ${selection.slug}`);
  }
  const selectedImages = images.filter((image): image is NonNullable<typeof image> => Boolean(image));
  return {
    ...collection,
    images: selectedImages,
    cardImage: selection.slug === "chatswood-timber-window-repair-painting"
      ? collection.coverImage
      : selectedImages[0].image,
    cardAlt: selection.slug === "chatswood-timber-window-repair-painting"
      ? collection.coverAlt
      : selectedImages[0].alt,
    cardSummary: selection.summary,
    galleryHref: `/painting-gallery/${collection.slug}${selection.imageTitles ? "#timber-window-painting" : ""}`,
  };
});

export const timberWindowCollectionSlugs = new Set<string>(
  photoSelections.map((selection) => selection.slug),
);
