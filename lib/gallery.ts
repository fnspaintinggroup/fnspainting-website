export type GalleryCategory =
  | "Interior Painting"
  | "Exterior Painting"
  | "Ceiling Restoration"
  | "Commercial Painting"
  | "Strata / Common Areas"
  | "Doors, Trims & Details"
  | "Before & After Highlights";

export type GalleryImage = {
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  caption: string;
  suburb?: string;
};

export const galleryCategories: GalleryCategory[] = [
  "Interior Painting",
  "Exterior Painting",
  "Ceiling Restoration",
  "Commercial Painting",
  "Strata / Common Areas",
  "Doors, Trims & Details",
  "Before & After Highlights",
];

export const galleryImages: GalleryImage[] = [
  {
    title: "Fresh Interior Stairwell Finish",
    category: "Interior Painting",
    image: "/images/projects/interior-stair-after.jpg",
    alt: "Freshly repainted interior stairwell walls in a Sydney home by F&S Painting",
    caption: "Clean neutral stairwell repaint with sharp wall and trim presentation.",
    suburb: "Sydney",
  },
  {
    title: "Interior Feature Wall and Ceiling",
    category: "Interior Painting",
    image: "/images/projects/interior-feature-wall-after.jpg",
    alt: "Interior feature wall and ceiling after professional repainting in Sydney",
    caption: "Detailed interior repaint with a darker ceiling finish and tidy edges.",
    suburb: "Sydney",
  },
  {
    title: "Garage Wall Repaint",
    category: "Interior Painting",
    image: "/images/projects/interior-garage-after.jpg",
    alt: "Freshly repainted garage interior walls after preparation in Sydney",
    caption: "Prepared and repainted garage walls for a brighter, cleaner finish.",
    suburb: "Sydney",
  },
  {
    title: "Exterior House Front Refresh",
    category: "Exterior Painting",
    image: "/images/projects/exterior-house-main-after.jpg",
    alt: "Front of a Sydney house after exterior repainting with fresh trim and facade finishes",
    caption: "Full exterior refresh improving street appeal and weather protection.",
    suburb: "Sydney",
  },
  {
    title: "Exterior Facade and Trim",
    category: "Exterior Painting",
    image: "/images/projects/exterior-facade-after.jpg",
    alt: "House facade and trim after exterior repainting in Sydney",
    caption: "Fresh facade and trim repaint with a crisp, well-prepared finish.",
    suburb: "Sydney",
  },
  {
    title: "Balcony Deck and Lattice",
    category: "Exterior Painting",
    image: "/images/projects/exterior-balcony-deck-after.jpg",
    alt: "Balcony decking and lattice after exterior repainting in Sydney",
    caption: "Exterior timber and lattice areas refreshed for a cleaner outdoor space.",
    suburb: "Sydney",
  },
  {
    title: "Mould-Damaged Ceiling Restored",
    category: "Ceiling Restoration",
    image: "/images/projects/mould-ceiling-case-1-after.jpg",
    alt: "Clean restored ceiling after mould-damaged ceiling repainting in a Sydney property",
    caption: "Ceiling sealed, prepared, and repainted for a smooth clean result.",
    suburb: "Sydney",
  },
  {
    title: "Bathroom Ceiling Restoration",
    category: "Ceiling Restoration",
    image: "/images/projects/mould-ceiling-case-2-after.jpg",
    alt: "Bathroom ceiling restored with a smooth clean repaint after mould damage",
    caption: "Moisture-affected bathroom ceiling restored with a fresh coating system.",
    suburb: "Sydney",
  },
  {
    title: "Commercial Reception Finish",
    category: "Commercial Painting",
    image: "/images/projects/commercial-reception-after.jpg",
    alt: "Commercial office reception area after fresh interior repainting",
    caption: "Professional reception repaint for a cleaner first impression.",
    suburb: "Sydney",
  },
  {
    title: "Commercial Salon Interior",
    category: "Commercial Painting",
    image: "/images/projects/commercial-salon-interior-after.jpg",
    alt: "Commercial salon interior after repainting with a clean modern finish",
    caption: "Salon interior prepared and repainted for a polished customer-facing space.",
    suburb: "Sydney",
  },
  {
    title: "Office Room Refresh",
    category: "Commercial Painting",
    image: "/images/projects/interior-office-room-after.jpg",
    alt: "Office room after clean interior painting refresh",
    caption: "Neutral commercial repaint suitable for daily office use.",
    suburb: "Sydney",
  },
  {
    title: "Common Area Style Finish",
    category: "Strata / Common Areas",
    image: "/images/projects/interior-stair-after.jpg",
    alt: "Repainted stairwell style common area finish suitable for Sydney strata painting",
    caption: "A clean stairwell-style finish suited to strata and shared spaces.",
    suburb: "Sydney",
  },
  {
    title: "Fire Exit Door Detail",
    category: "Doors, Trims & Details",
    image: "/images/projects/interior-fire-door-after.jpg",
    alt: "Commercial fire exit door after repainting in a black finish",
    caption: "Door and surrounding trim repainted for a durable, tidy finish.",
    suburb: "Sydney",
  },
  {
    title: "Exterior Timber Window Detail",
    category: "Doors, Trims & Details",
    image: "/images/projects/north-strathfield-window-after.jpg",
    alt: "Exterior timber window after restoration and repainting in North Strathfield",
    caption: "Timber window scraped, filled, primed, and repainted.",
    suburb: "North Strathfield",
  },
  {
    title: "Concord West Eaves and Fascia",
    category: "Doors, Trims & Details",
    image: "/images/projects/concord-west-eaves-after.jpg",
    alt: "Concord West eaves and fascia after exterior repainting",
    caption: "Eaves and fascia repainted after careful exterior preparation.",
    suburb: "Concord West",
  },
  {
    title: "Exterior Boundary Wall",
    category: "Before & After Highlights",
    image: "/images/projects/exterior-boundary-wall-after.jpg",
    alt: "Boundary wall after exterior painting with grey weather-resistant coating",
    caption: "Boundary wall repaired and coated for a cleaner, more durable result.",
    suburb: "Sydney",
  },
  {
    title: "Mosman Exterior Entry",
    category: "Before & After Highlights",
    image: "/images/projects/mosman-exterior-entry-after.jpg",
    alt: "Mosman exterior entry trim after repainting",
    caption: "Entry trim and decorative mouldings refreshed for stronger presentation.",
    suburb: "Mosman",
  },
  {
    title: "North Strathfield Exterior Wall",
    category: "Before & After Highlights",
    image: "/images/projects/north-strathfield-exterior-after.jpg",
    alt: "North Strathfield exterior wall and windows after repainting",
    caption: "Exterior wall and window area restored with a cleaner painted finish.",
    suburb: "North Strathfield",
  },
];

export const featuredGalleryImages = galleryImages.slice(0, 4);
