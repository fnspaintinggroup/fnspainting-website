import { galleryCollections } from "@/lib/gallery";
import { projects } from "@/lib/projects";
import { createUrlSlug } from "@/lib/url-slug";

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
    summary: "Finished interior sash window joinery in the Mona Vale heritage home.",
  },
  {
    slug: "north-willoughby-exterior-house-repaint-gallery",
    imageTitles: ["Front Window Detail"],
    anchor: "sash-window-painting",
    summary: "Finished exterior sash window and frame painting in North Willoughby.",
  },
  {
    slug: "chatswood-exterior-house-painting",
    imageTitles: ["Upper Roofline Detail"],
    anchor: "sash-window-painting",
    summary: "Finished upper sash windows and painted frames in Chatswood.",
  },
  {
    slug: "chatswood-timber-window-repair-painting",
    imageTitles: null,
    anchor: null,
    summary: "Fourteen photos of localised repairs, preparation, and completed timber window painting in Chatswood.",
  },
  {
    slug: "lindfield-exterior-window-trim-repaint",
    imageTitles: ["Verandah Window Painting", "French Door and Window Painting"],
    anchor: "Verandah Window Painting",
    summary: "Finished verandah and side-window frames from the Lindfield exterior repaint.",
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
  if (selection.anchor === "sash-window-painting" && !collection.sashWindowEvidence) {
    throw new Error(`Missing sash window detail section: ${selection.slug}`);
  }
  const anchorIndex = selection.anchor && selection.anchor !== "sash-window-painting"
    ? collection.images.findIndex((image) => image.title === selection.anchor)
    : -1;
  if (selection.anchor && selection.anchor !== "sash-window-painting" && anchorIndex < 0) {
    throw new Error(`Missing timber window photo anchor: ${selection.slug}`);
  }
  const anchor = selection.anchor === "sash-window-painting"
    ? selection.anchor
    : selection.anchor
      ? `${createUrlSlug(selection.anchor)}-${anchorIndex + 1}`
      : null;
  return {
    ...collection,
    images,
    cardImage: selection.slug === "chatswood-timber-window-repair-painting"
      ? collection.coverImage
      : images[0].image,
    cardAlt: selection.slug === "chatswood-timber-window-repair-painting"
      ? collection.coverAlt
      : images[0].alt,
    cardSummary: selection.summary,
    galleryHref: `/painting-gallery/${collection.slug}${anchor ? `#${anchor}` : ""}`,
  };
});

export const timberWindowCollectionSlugs = new Set<string>(
  photoSelections.map((selection) => selection.slug),
);
