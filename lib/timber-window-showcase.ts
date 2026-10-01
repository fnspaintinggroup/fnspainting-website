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

const photoSelections = [
  {
    slug: "mona-vale-heritage-interior-painting",
    imageTitles: ["Formal Room and Bay Window"],
    anchor: "sash-window-painting",
  },
  {
    slug: "north-willoughby-exterior-house-repaint-gallery",
    imageTitles: ["Front Window Detail"],
    anchor: "sash-window-painting",
  },
  {
    slug: "chatswood-exterior-house-painting",
    imageTitles: ["Upper Roofline Detail"],
    anchor: "sash-window-painting",
  },
  {
    slug: "chatswood-timber-window-repair-painting",
    imageTitles: null,
    anchor: null,
  },
  {
    slug: "lindfield-exterior-window-trim-repaint",
    imageTitles: ["Verandah Window Painting", "French Door and Window Painting"],
    anchor: null,
  },
] as const;

export const timberWindowCollections = photoSelections.map((selection) => {
  const collection = galleryCollections.find((item) => item.slug === selection.slug);
  if (!collection) throw new Error(`Missing timber window gallery: ${selection.slug}`);
  const images = selection.imageTitles
    ? collection.images.filter((image) =>
        (selection.imageTitles as readonly string[]).includes(image.title),
      )
    : collection.images;
  if (images.length !== (selection.imageTitles?.length ?? collection.images.length)) {
    throw new Error(`Missing selected timber window photos: ${selection.slug}`);
  }
  return {
    ...collection,
    images,
    galleryHref: `/painting-gallery/${collection.slug}${selection.anchor ? `#${selection.anchor}` : ""}`,
    fullGalleryHref: `/painting-gallery/${collection.slug}`,
  };
});

export const timberWindowCollectionSlugs = new Set<string>(
  photoSelections.map((selection) => selection.slug),
);
