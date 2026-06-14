export type GalleryCategory =
  | "Interior Painting"
  | "Exterior Painting"
  | "Ceiling Restoration"
  | "Commercial Painting"
  | "Strata / Common Areas"
  | "Doors, Trims & Details";

export type GalleryImage = {
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  caption: string;
  suburb?: string;
  collectionSlug?: string;
  photoCount?: number;
};

export type GalleryCollectionImage = {
  title: string;
  image: string;
  alt: string;
  caption: string;
};

export type GalleryCollection = {
  slug: string;
  title: string;
  category: GalleryCategory;
  suburb: string;
  summary: string;
  coverImage: string;
  coverAlt: string;
  images: GalleryCollectionImage[];
};

export const galleryCategories: GalleryCategory[] = [
  "Interior Painting",
  "Exterior Painting",
  "Ceiling Restoration",
  "Commercial Painting",
  "Strata / Common Areas",
  "Doors, Trims & Details",
];

export const galleryImages: GalleryImage[] = [
  {
    title: "Parramatta Medical Centre Interior Finish",
    category: "Commercial Painting",
    image: "/images/projects/parramatta-medical-centre-reception.jpg",
    alt: "Parramatta Medical Centre reception area after commercial interior painting by F&S Painting",
    caption:
      "A location gallery showing clean commercial finishes across reception, waiting, treatment, and office areas.",
    suburb: "Parramatta, NSW",
    collectionSlug: "parramatta-medical-centre",
    photoCount: 5,
  },
  {
    title: "Fresh Interior Stairwell Finish",
    category: "Interior Painting",
    image: "/images/projects/interior-stair-after.jpg",
    alt: "Freshly repainted interior stairwell walls in a Sydney home by F&S Painting",
    caption: "Clean neutral stairwell repaint with sharp wall and trim presentation.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Interior Feature Wall and Ceiling",
    category: "Interior Painting",
    image: "/images/projects/interior-feature-wall-after.jpg",
    alt: "Interior feature wall and ceiling after professional repainting in Sydney",
    caption: "Detailed interior repaint with a darker ceiling finish and tidy edges.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Garage Wall Repaint",
    category: "Interior Painting",
    image: "/images/projects/interior-garage-after.jpg",
    alt: "Freshly repainted garage interior walls after preparation in Sydney",
    caption: "Prepared and repainted garage walls for a brighter, cleaner finish.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Exterior House Front Refresh",
    category: "Exterior Painting",
    image: "/images/projects/exterior-house-main-after.jpg",
    alt: "Front of a Sydney house after exterior repainting with fresh trim and facade finishes",
    caption: "Full exterior refresh improving street appeal and weather protection.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Exterior Facade and Trim",
    category: "Exterior Painting",
    image: "/images/projects/exterior-facade-after.jpg",
    alt: "House facade and trim after exterior repainting in Sydney",
    caption: "Fresh facade and trim repaint with a crisp, well-prepared finish.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Balcony Deck and Lattice",
    category: "Exterior Painting",
    image: "/images/projects/exterior-balcony-deck-after.jpg",
    alt: "Balcony decking and lattice after exterior repainting in Sydney",
    caption: "Exterior timber and lattice areas refreshed for a cleaner outdoor space.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Mould-Damaged Ceiling Restored",
    category: "Ceiling Restoration",
    image: "/images/projects/mould-ceiling-case-1-after.jpg",
    alt: "Clean restored ceiling after mould-damaged ceiling repainting in a Sydney property",
    caption: "Ceiling sealed, prepared, and repainted for a smooth clean result.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Bathroom Ceiling Restoration",
    category: "Ceiling Restoration",
    image: "/images/projects/mould-ceiling-case-2-after.jpg",
    alt: "Bathroom ceiling restored with a smooth clean repaint after mould damage",
    caption: "Moisture-affected bathroom ceiling restored with a fresh coating system.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Commercial Reception Finish",
    category: "Commercial Painting",
    image: "/images/projects/commercial-reception-after.jpg",
    alt: "Commercial office reception area after fresh interior repainting",
    caption: "Professional reception repaint for a cleaner first impression.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Commercial Salon Interior",
    category: "Commercial Painting",
    image: "/images/projects/commercial-salon-interior-after.jpg",
    alt: "Commercial salon interior after repainting with a clean modern finish",
    caption: "Salon interior prepared and repainted for a polished customer-facing space.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Office Room Refresh",
    category: "Commercial Painting",
    image: "/images/projects/interior-office-room-after.jpg",
    alt: "Office room after clean interior painting refresh",
    caption: "Neutral commercial repaint suitable for daily office use.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Common Area Style Finish",
    category: "Strata / Common Areas",
    image: "/images/projects/interior-stair-after.jpg",
    alt: "Repainted stairwell style common area finish suitable for Sydney strata painting",
    caption: "A clean stairwell-style finish suited to strata and shared spaces.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Dee Why Lift Lobby Repaint",
    category: "Strata / Common Areas",
    image: "/images/projects/dee-why-strata-lift-lobby-work-1.jpg",
    alt: "Dee Why strata lift lobby during repainting with protected floors and fresh wall finish",
    caption: "Lift lobby walls and common area surfaces protected, prepared, and repainted.",
    suburb: "Dee Why, NSW",
  },
  {
    title: "Dee Why Common Area Finish",
    category: "Strata / Common Areas",
    image: "/images/projects/dee-why-strata-lift-lobby-work-2.jpg",
    alt: "Dee Why strata common area repaint near lift doors",
    caption: "Shared corridor and lift area repainted with a clean, consistent finish.",
    suburb: "Dee Why, NSW",
  },
  {
    title: "Dee Why Strata Corridor Detail",
    category: "Strata / Common Areas",
    image: "/images/projects/dee-why-strata-corridor-finish.jpg",
    alt: "Dee Why strata corridor after repainting with clean walls, trims, and ceiling",
    caption: "Finished corridor detail showing fresh walls, trims, ceiling, and shared-space presentation.",
    suburb: "Dee Why, NSW",
  },
  {
    title: "Fire Exit Door Detail",
    category: "Doors, Trims & Details",
    image: "/images/projects/interior-fire-door-after.jpg",
    alt: "Commercial fire exit door after repainting in a black finish",
    caption: "Door and surrounding trim repainted for a durable, tidy finish.",
    suburb: "Sydney, NSW",
  },
  {
    title: "Exterior Timber Window Detail",
    category: "Doors, Trims & Details",
    image: "/images/projects/north-strathfield-window-after.jpg",
    alt: "Exterior timber window after restoration and repainting in North Strathfield",
    caption: "Timber window scraped, filled, primed, and repainted.",
    suburb: "North Strathfield, NSW",
  },
  {
    title: "Concord West Eaves and Fascia",
    category: "Doors, Trims & Details",
    image: "/images/projects/concord-west-eaves-after.jpg",
    alt: "Concord West eaves and fascia after exterior repainting",
    caption: "Eaves and fascia repainted after careful exterior preparation.",
    suburb: "Concord West, NSW",
  },
];

export const featuredGalleryImages = galleryImages.slice(0, 4);

export const galleryCollections: GalleryCollection[] = [
  {
    slug: "parramatta-medical-centre",
    title: "Parramatta Medical Centre Interior Painting",
    category: "Commercial Painting",
    suburb: "Parramatta, NSW",
    summary:
      "Finished commercial interior painting across the reception, waiting area, treatment rooms, consultation rooms, and office spaces at Parramatta Medical Centre.",
    coverImage: "/images/projects/parramatta-medical-centre-reception.jpg",
    coverAlt:
      "Parramatta Medical Centre reception area with freshly finished commercial interior walls",
    images: [
      {
        title: "Reception Area Finish",
        image: "/images/projects/parramatta-medical-centre-reception.jpg",
        alt: "Parramatta Medical Centre reception area after professional commercial interior painting",
        caption: "Reception walls and customer-facing areas finished for a clean first impression.",
      },
      {
        title: "Treatment Room Finish",
        image: "/images/projects/parramatta-medical-centre-treatment-room.jpg",
        alt: "Medical centre treatment room with freshly painted neutral walls in Parramatta",
        caption: "Treatment room walls repainted with a practical, clean commercial finish.",
      },
      {
        title: "Office Wall Finish",
        image: "/images/projects/parramatta-medical-centre-office.jpg",
        alt: "Parramatta medical office room after interior wall repainting",
        caption: "Office wall finish refreshed while keeping the workspace professional and tidy.",
      },
      {
        title: "Consultation Room Finish",
        image: "/images/projects/parramatta-medical-centre-consult-room.jpg",
        alt: "Medical consultation room after commercial repainting in Parramatta",
        caption: "Consultation room repaint with a smooth neutral wall finish.",
      },
      {
        title: "Waiting Area Finish",
        image: "/images/projects/parramatta-medical-centre-waiting-area.jpg",
        alt: "Parramatta Medical Centre waiting area after commercial interior painting",
        caption: "Waiting area and shared patient space finished with a clean commercial look.",
      },
    ],
  },
];

export function getGalleryCollection(slug: string) {
  return galleryCollections.find((collection) => collection.slug === slug);
}
