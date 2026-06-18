export type GalleryCategory =
  | "Interior Painting"
  | "Exterior Painting"
  | "Ceiling Restoration"
  | "Commercial Painting"
  | "Strata Painting";

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
  "Strata Painting",
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
    title: "Marrickville Salon Interior Painting",
    category: "Commercial Painting",
    image: "/images/projects/marrickville-salon-feature-wall-finish.jpg",
    alt: "Marrickville salon feature wall and ceiling after commercial interior painting",
    caption:
      "A location gallery showing feature wall, ceiling, wash station, reception, counter, and shopfront painting for a Marrickville salon.",
    suburb: "Marrickville, NSW",
    collectionSlug: "marrickville-salon-interior-painting",
    photoCount: 5,
  },
  {
    title: "Balgowlah Heights Interior Finish",
    category: "Interior Painting",
    image: "/images/projects/balgowlah-heights-hallway-stairs.jpg",
    alt: "Balgowlah Heights home hallway and stair area after interior painting by F&S Painting",
    caption:
      "A location gallery showing bright interior wall, stairwell, living room, upper-level, and garage wall finishes.",
    suburb: "Balgowlah Heights, NSW",
    collectionSlug: "balgowlah-heights-interior",
    photoCount: 8,
  },
  {
    title: "North Bridge Interior Painting",
    category: "Interior Painting",
    image: "/images/projects/north-bridge-dining-feature-wall-finish.jpg",
    alt: "North Bridge home dining and living area after professional interior painting by F&S Painting",
    caption:
      "A location gallery showing interior painting finishes across living, kitchen, bedroom, bathroom, stairwell, door, and detail areas.",
    suburb: "North Bridge, NSW",
    collectionSlug: "north-bridge-interior",
    photoCount: 10,
  },
  {
    title: "Carlingford Exterior House Painting",
    category: "Exterior Painting",
    image: "/images/projects/carlingford-front-driveway-finish.jpg",
    alt: "Carlingford house exterior after professional repainting by F&S Painting",
    caption:
      "A location gallery showing exterior painting finishes across the facade, trims, entry, side walls, patio, and driveway areas.",
    suburb: "Carlingford, NSW",
    collectionSlug: "carlingford-exterior-house-painting",
    photoCount: 11,
  },
  {
    title: "Exterior House Front Refresh",
    category: "Exterior Painting",
    image: "/images/projects/exterior-house-main-after.jpg",
    alt: "Front of a Sydney house after exterior repainting with fresh trim and facade finishes",
    caption:
      "A location gallery showing Earlwood exterior painting finishes across the front facade, side walls, verandah, entry, garage, and outbuilding areas.",
    suburb: "Earlwood, NSW",
    collectionSlug: "earlwood-exterior-house-refresh",
    photoCount: 14,
  },
  {
    title: "Exterior Facade and Trim",
    category: "Exterior Painting",
    image: "/images/projects/exterior-facade-after.jpg",
    alt: "North Willoughby house facade and trim after exterior repainting by F&S Painting",
    caption:
      "North Willoughby exterior facade, trim, porch, windows, verandah, and side wall finishes.",
    suburb: "North Willoughby, NSW",
    collectionSlug: "north-willoughby-exterior-facade-trim",
    photoCount: 8,
  },
  {
    title: "Mould-Damaged Ceiling Restored",
    category: "Ceiling Restoration",
    image: "/images/projects/mould-ceiling-case-1-after.jpg",
    alt: "Clean restored ceiling after mould-damaged ceiling repainting in a Sydney property",
    caption: "Ceiling sealed, prepared, and repainted for a smooth clean result.",
    suburb: "Chatswood, NSW",
  },
  {
    title: "Bathroom Ceiling Restoration",
    category: "Ceiling Restoration",
    image: "/images/projects/mould-ceiling-case-2-after.jpg",
    alt: "Bathroom ceiling restored with a smooth clean repaint after mould damage",
    caption: "Moisture-affected bathroom ceiling restored with a fresh coating system.",
    suburb: "Willoughby, NSW",
  },
  {
    title: "Chatswood Commercial Reception Finish",
    category: "Commercial Painting",
    image: "/images/projects/commercial-reception-after.jpg",
    alt: "Chatswood commercial office reception area after fresh interior repainting",
    caption: "Professional reception repaint for a cleaner first impression in a Chatswood office.",
    suburb: "Artamon, NSW",
    collectionSlug: "chatswood-commercial-reception-finish",
    photoCount: 6,
  },
  {
    title: "Chatswood Exterior House Painting",
    category: "Exterior Painting",
    image: "/images/projects/chatswood-exterior-front-facade-wide.jpg",
    alt: "Chatswood brick house exterior with refreshed trims and facade details after painting",
    caption:
      "A location gallery showing exterior painting finishes across the entry door, verandah posts, gables, rear facade, garage side, roofline details, and surrounding outdoor areas.",
    suburb: "Chatswood, NSW",
    collectionSlug: "chatswood-exterior-house-painting",
    photoCount: 13,
  },
  {
    title: "Blakehurst Interior House Painting",
    category: "Interior Painting",
    image: "/images/projects/blakehurst-stairwell-chandelier.jpg",
    alt: "Blakehurst stairwell and chandelier after interior painting",
    caption:
      "A location gallery showing dining, stairwell, entry, and living-area interior finishes in a Blakehurst home.",
    suburb: "Blakehurst, NSW",
    collectionSlug: "blakehurst-interior-house-painting",
    photoCount: 4,
  },
  {
    title: "Silverwater Commercial Painting",
    category: "Commercial Painting",
    image: "/images/projects/silverwater-commercial-entry-finish.jpg",
    alt: "Silverwater commercial exterior painting finish with F&S Painting service van",
    caption:
      "A location gallery showing commercial exterior painting finishes across warehouse cladding, brickwork, entry, roller door, and awning areas.",
    suburb: "Silverwater, NSW",
    collectionSlug: "silverwater-commercial-painting",
    photoCount: 6,
  },
  {
    title: "Office Room Refresh",
    category: "Commercial Painting",
    image: "/images/projects/interior-office-room-after.jpg",
    alt: "Office room after clean interior painting refresh",
    caption:
      "A location gallery showing meeting room, waiting area, reception, corridor, and office finishes in a Chatswood commercial space.",
    suburb: "Chatswood, NSW",
    collectionSlug: "chatswood-office-room-refresh",
    photoCount: 7,
  },
  {
    title: "Chatswood Apartment Interior Repaint",
    category: "Interior Painting",
    image: "/images/projects/chatswood-apartment-living-room-finish.jpg",
    alt: "Chatswood apartment living room after interior repainting by F&S Painting",
    caption:
      "A location gallery showing Chatswood apartment living room, bedroom, entry, kitchen-side, and bathroom ceiling repainting finishes.",
    suburb: "Chatswood, NSW",
    collectionSlug: "chatswood-apartment-interior-repaint",
    photoCount: 4,
  },
  {
    title: "Lindfield Exterior Window and Trim Repaint",
    category: "Exterior Painting",
    image: "/images/projects/lindfield-door-trim-finish.jpg",
    alt: "Lindfield exterior door and trim after repainting by F&S Painting",
    caption:
      "A location gallery showing Lindfield exterior window, door, trim, verandah, and rear wall painting finishes.",
    suburb: "Lindfield, NSW",
    collectionSlug: "lindfield-exterior-window-trim-repaint",
    photoCount: 4,
  },
  {
    title: "Dee Why Strata Common Area Repaint",
    category: "Strata Painting",
    image: "/images/projects/dee-why-strata-lift-lobby-work-1.jpg",
    alt: "Dee Why strata common area and lift lobby during repainting by F&S Painting",
    caption:
      "A location gallery showing Dee Why strata lift lobby, corridor, common area, wall, ceiling, and trim finishes.",
    suburb: "Dee Why, NSW",
    collectionSlug: "dee-why-strata-common-areas",
    photoCount: 5,
  },
  {
    title: "Dee Why Monash Parade Strata Painting",
    category: "Strata Painting",
    image: "/images/projects/dee-why-monash-strata-rear-balcony.jpg",
    alt: "Dee Why Monash Parade strata balcony exterior after painting work by F&S Painting",
    caption:
      "A location gallery showing Dee Why strata exterior balcony, fascia, access, and facade painting details.",
    suburb: "Dee Why, NSW",
    collectionSlug: "dee-why-monash-parade-strata-painting",
    photoCount: 5,
  },
  {
    title: "Narwee Strata Common Area Painting",
    category: "Strata Painting",
    image: "/images/projects/narwee-strata-main-front-view.jpg",
    alt: "Narwee strata building exterior after common area painting refresh",
    caption:
      "A location gallery showing Narwee strata exterior walls, balconies, soffits, garage areas, paths, and shared entry finishes.",
    suburb: "Narwee, NSW",
    collectionSlug: "narwee-strata-common-areas",
    photoCount: 22,
  },
];

const featuredGalleryTitles = [
  "Carlingford Exterior House Painting",
  "North Bridge Interior Painting",
  "Silverwater Commercial Painting",
  "Dee Why Strata Common Area Repaint",
  "Dee Why Monash Parade Strata Painting",
  "Narwee Strata Common Area Painting",
  "Chatswood Exterior House Painting",
  "Exterior House Front Refresh",
];

export const featuredGalleryImages = featuredGalleryTitles
  .map((title) => galleryImages.find((item) => item.title === title))
  .filter((item): item is GalleryImage => Boolean(item));

export const galleryCollections: GalleryCollection[] = [
  {
    slug: "dee-why-strata-common-areas",
    title: "Dee Why Strata Common Area Painting",
    category: "Strata Painting",
    suburb: "Dee Why, NSW",
    summary:
      "Finished strata common area painting across Dee Why lift lobbies, corridors, high wall and ceiling areas, trims, and shared-space details.",
    coverImage: "/images/projects/dee-why-strata-lift-lobby-work-1.jpg",
    coverAlt:
      "Dee Why strata lift lobby and common area during repainting with protected floors",
    images: [
      {
        title: "Lift Lobby Repaint",
        image: "/images/projects/dee-why-strata-lift-lobby-work-1.jpg",
        alt: "Dee Why strata lift lobby during repainting with protected floors and fresh wall finish",
        caption: "Lift lobby walls and common area surfaces protected, prepared, and repainted.",
      },
      {
        title: "Common Area Finish",
        image: "/images/projects/dee-why-strata-lift-lobby-work-2.jpg",
        alt: "Dee Why strata common area repaint near lift doors",
        caption: "Shared corridor and lift area repainted with a clean, consistent finish.",
      },
      {
        title: "Corridor Detail Finish",
        image: "/images/projects/dee-why-strata-corridor-finish.jpg",
        alt: "Dee Why strata corridor after repainting with clean walls, trims, and ceiling",
        caption:
          "Finished corridor detail showing fresh walls, trims, ceiling, and shared-space presentation.",
      },
      {
        title: "High Ceiling and Wall Finish",
        image: "/images/projects/dee-why-strata-ceiling-after.jpg",
        alt: "Dee Why strata high ceiling and wall area after repainting",
        caption: "High wall and ceiling surfaces finished for a brighter shared-space result.",
      },
      {
        title: "Hallway Finish",
        image: "/images/projects/dee-why-strata-hallway-after.jpg",
        alt: "Dee Why strata hallway after fresh wall, ceiling, and trim repainting",
        caption: "Hallway walls, ceilings, and trims repainted for a clean common area finish.",
      },
    ],
  },
  {
    slug: "dee-why-monash-parade-strata-painting",
    title: "Dee Why Monash Parade Strata Painting",
    category: "Strata Painting",
    suburb: "Dee Why, NSW",
    summary:
      "Strata painting in Dee Why across exterior balcony faces, fascia areas, access points, and shared building elevations.",
    coverImage: "/images/projects/dee-why-monash-strata-rear-balcony.jpg",
    coverAlt: "Dee Why strata rear balcony and exterior facade after painting work",
    images: [
      {
        title: "Rear Balcony Exterior",
        image: "/images/projects/dee-why-monash-strata-rear-balcony.jpg",
        alt: "Dee Why strata rear balcony exterior after painting work",
        caption: "Rear balcony face and shared exterior areas refreshed for a cleaner strata presentation.",
      },
      {
        title: "Fascia Preparation",
        image: "/images/projects/dee-why-monash-strata-fascia-prep.jpg",
        alt: "Dee Why strata fascia preparation with ladder access",
        caption: "Upper fascia area prepared and coated as part of the strata exterior painting work.",
      },
      {
        title: "Upper Fascia Access",
        image: "/images/projects/dee-why-monash-strata-upper-fascia-prep.jpg",
        alt: "Dee Why strata upper fascia painting access from balcony",
        caption: "Balcony-level access used for careful preparation and painting of higher exterior details.",
      },
      {
        title: "Front Access View",
        image: "/images/projects/dee-why-monash-strata-front-access.jpg",
        alt: "Dee Why strata front access with F&S Painting van during exterior work",
        caption: "Front access area showing strata exterior work across the shared building frontage.",
      },
      {
        title: "Balcony Finish",
        image: "/images/projects/dee-why-monash-strata-balcony-finish.jpg",
        alt: "Dee Why strata balcony and soffit after exterior painting finish",
        caption: "Balcony face, soffit, and surrounding exterior areas finished for a neater shared-space look.",
      },
    ],
  },
  {
    slug: "narwee-strata-common-areas",
    title: "Narwee Strata Common Area Painting",
    category: "Strata Painting",
    suburb: "Narwee, NSW",
    summary:
      "Finished strata painting across Narwee common exterior walls, balconies, soffits, garage surrounds, entry stairs, side paths, and shared outdoor areas.",
    coverImage: "/images/projects/narwee-strata-main-front-view.jpg",
    coverAlt: "Narwee strata building exterior after common area painting refresh",
    images: [
      {
        title: "Entry Stair Finish",
        image: "/images/projects/narwee-strata-entry-stair-finish.jpg",
        alt: "Narwee strata entry stair and balcony area after painting refresh",
        caption: "Entry stair and balcony-facing common area finished for a tidier shared approach.",
      },
      {
        title: "Courtyard View",
        image: "/images/projects/narwee-strata-courtyard-view.jpg",
        alt: "Narwee strata courtyard and parking-side building view after painting refresh",
        caption: "Shared courtyard and parking-side walls refreshed for a cleaner strata presentation.",
      },
      {
        title: "Soffit Detail",
        image: "/images/projects/narwee-strata-soffit-detail.jpg",
        alt: "Narwee strata soffit and wall detail after repainting",
        caption: "Common soffit and adjoining wall detail finished with a neat, durable coating.",
      },
      {
        title: "Balcony Corner",
        image: "/images/projects/narwee-strata-balcony-corner.jpg",
        alt: "Narwee strata balcony corner and wall finish after painting refresh",
        caption: "Balcony corner and surrounding brickwork presented with a cleaner common area look.",
      },
      {
        title: "Rear Lawn View",
        image: "/images/projects/narwee-strata-rear-lawn-view.jpg",
        alt: "Narwee strata rear lawn side building view after painting refresh",
        caption: "Rear lawn side and shared exterior walls refreshed to lift the overall building appearance.",
      },
      {
        title: "Front Elevation",
        image: "/images/projects/narwee-strata-front-elevation.jpg",
        alt: "Narwee strata front elevation after common area painting refresh",
        caption: "Front elevation finished for a brighter and better-kept strata street presence.",
      },
      {
        title: "Garage Doors Detail",
        image: "/images/projects/narwee-strata-garage-doors-detail.jpg",
        alt: "Narwee strata garage doors and surrounding common area after painting refresh",
        caption: "Garage surrounds and common access zone tidied up for a more consistent finish.",
      },
      {
        title: "Undercover Garage",
        image: "/images/projects/narwee-strata-undercover-garage.jpg",
        alt: "Narwee strata undercover garage area after painting refresh",
        caption: "Undercover garage common area presented with a cleaner, more maintained appearance.",
      },
      {
        title: "Upper Balconies",
        image: "/images/projects/narwee-strata-upper-balconies.jpg",
        alt: "Narwee strata upper balconies after exterior painting refresh",
        caption: "Upper balconies and surrounding walls refreshed for a tidy shared exterior finish.",
      },
      {
        title: "Wall Upward Detail",
        image: "/images/projects/narwee-strata-wall-upward-detail.jpg",
        alt: "Narwee strata exterior wall and upper facade detail after painting refresh",
        caption: "Vertical wall detail shows the cleaner finish across higher common exterior surfaces.",
      },
      {
        title: "Street Front View",
        image: "/images/projects/narwee-strata-street-front-view.jpg",
        alt: "Narwee strata building viewed from the street after painting refresh",
        caption: "Street-front presentation improved with a neater overall strata exterior appearance.",
      },
      {
        title: "Entry Door Detail",
        image: "/images/projects/narwee-strata-entry-door-detail.jpg",
        alt: "Narwee strata lower entry door and stair area after painting refresh",
        caption: "Shared lower entry area finished for a cleaner and more welcoming arrival point.",
      },
      {
        title: "Main Front View",
        image: "/images/projects/narwee-strata-main-front-view.jpg",
        alt: "Narwee strata main front exterior after common area painting refresh",
        caption: "Main front view showing the overall refreshed look across the strata facade.",
      },
      {
        title: "Balcony Upward View",
        image: "/images/projects/narwee-strata-balcony-upward-view.jpg",
        alt: "Narwee strata balcony and soffit viewed upward after painting refresh",
        caption: "Balcony underside and upper details finished for a more complete common area result.",
      },
      {
        title: "Side Path View",
        image: "/images/projects/narwee-strata-side-path-view.jpg",
        alt: "Narwee strata side path and exterior wall after painting refresh",
        caption: "Side path walls and building edge refreshed to keep shared access areas looking neat.",
      },
      {
        title: "Courtyard Wide View",
        image: "/images/projects/narwee-strata-courtyard-wide-view.jpg",
        alt: "Narwee strata courtyard wide view after painting refresh",
        caption: "Wide courtyard view showing cleaner presentation across shared outdoor building faces.",
      },
      {
        title: "Tree Side Elevation",
        image: "/images/projects/narwee-strata-tree-side-elevation.jpg",
        alt: "Narwee strata elevation beside tree line after painting refresh",
        caption: "Tree-side elevation finished to keep the exterior looking even from every angle.",
      },
      {
        title: "Rear Building View",
        image: "/images/projects/narwee-strata-rear-building-view.jpg",
        alt: "Narwee strata rear building and courtyard side after painting refresh",
        caption: "Rear building face and shared yard side refreshed for a cleaner strata finish.",
      },
      {
        title: "Side Entry Door",
        image: "/images/projects/narwee-strata-side-entry-door.jpg",
        alt: "Narwee strata side entry door area after painting refresh",
        caption: "Side entry nook cleaned up to keep smaller shared access points looking maintained.",
      },
      {
        title: "Balustrade Upward Detail",
        image: "/images/projects/narwee-strata-balustrade-upward-detail.jpg",
        alt: "Narwee strata balustrade and upper wall detail after painting refresh",
        caption: "Balustrade and upper wall detail presented with a sharper, more cared-for finish.",
      },
      {
        title: "Mailbox Front View",
        image: "/images/projects/narwee-strata-mailbox-front-view.jpg",
        alt: "Narwee strata front garden and mailbox area after painting refresh",
        caption: "Front garden edge and mailbox-side view show the improved overall building presentation.",
      },
      {
        title: "Front Building Angle",
        image: "/images/projects/narwee-strata-building-after.jpg",
        alt: "Narwee strata building front angle after exterior painting refresh",
        caption: "Front angle view highlights the freshened finish across shared exterior areas.",
      },
    ],
  },
  {
    slug: "silverwater-commercial-painting",
    title: "Commercial Painting Silverwater",
    category: "Commercial Painting",
    suburb: "Silverwater, NSW",
    summary:
      "Finished commercial exterior painting across warehouse metal cladding, brickwork, roller doors, awning areas, entry details, and street-facing elevations in Silverwater.",
    coverImage: "/images/projects/silverwater-commercial-entry-finish.jpg",
    coverAlt:
      "Silverwater commercial exterior painting finish with updated entry, awning, and facade colours",
    images: [
      {
        title: "Commercial Entry Finish",
        image: "/images/projects/silverwater-commercial-entry-finish.jpg",
        alt: "Silverwater commercial entry after exterior painting with F&S Painting van",
        caption: "Entry, planter edges, awning, and adjacent exterior surfaces finished cleanly.",
      },
      {
        title: "Street Facade Finish",
        image: "/images/projects/silverwater-commercial-street-facade.jpg",
        alt: "Silverwater commercial warehouse street facade after exterior repainting",
        caption: "Street-facing cladding and masonry refreshed with a strong commercial colour scheme.",
      },
      {
        title: "Roller Door Finish",
        image: "/images/projects/silverwater-commercial-roller-door-finish.jpg",
        alt: "Silverwater commercial roller door and facade after painting",
        caption: "Roller door, surrounding cladding, and masonry finished in a consistent exterior coating.",
      },
      {
        title: "Under Awning Finish",
        image: "/images/projects/silverwater-commercial-under-awning.jpg",
        alt: "Silverwater commercial under awning and brick wall after repainting",
        caption: "Under-awning areas and brickwork repainted for a cleaner visitor-facing finish.",
      },
      {
        title: "Side Wall Detail",
        image: "/images/projects/silverwater-commercial-side-detail.jpg",
        alt: "Silverwater commercial side wall detail after exterior painting",
        caption: "Side wall detail showing the transition between painted cladding and brickwork.",
      },
      {
        title: "Rear Facade Finish",
        image: "/images/projects/silverwater-commercial-rear-facade.jpg",
        alt: "Silverwater commercial rear facade after yellow exterior painting",
        caption: "Rear facade and roller door surrounds repainted with a clean, durable exterior finish.",
      },
    ],
  },
  {
    slug: "north-willoughby-exterior-facade-trim",
    title: "North Willoughby Exterior Facade and Trim",
    category: "Exterior Painting",
    suburb: "North Willoughby, NSW",
    summary:
      "Finished exterior painting across the North Willoughby facade, upper gable, entry porch, window trims, verandah, side walls, and exterior details.",
    coverImage: "/images/projects/exterior-facade-after.jpg",
    coverAlt:
      "North Willoughby house facade and trim after professional exterior repainting by F&S Painting",
    images: [
      {
        title: "Facade and Trim Finish",
        image: "/images/projects/exterior-facade-after.jpg",
        alt: "North Willoughby exterior facade and trim after repainting",
        caption: "Finished facade and trim with a clean, consistent exterior presentation.",
      },
      {
        title: "Front Entry Finish",
        image: "/images/projects/north-willoughby-exterior-front-entry-finish.jpg",
        alt: "North Willoughby front entry facade after exterior painting",
        caption:
          "Front entry facade, gable trim, and surrounding surfaces finished with crisp exterior lines.",
      },
      {
        title: "Upper Gable Finish",
        image: "/images/projects/north-willoughby-exterior-upper-gable-finish.jpg",
        alt: "North Willoughby upper gable wall and trim after exterior painting",
        caption:
          "Upper gable wall, trim lines, and eaves finished cleanly with a bright exterior coating.",
      },
      {
        title: "Side Wall Preparation",
        image: "/images/projects/north-willoughby-exterior-side-wall-prep.jpg",
        alt: "North Willoughby side wall protected and prepared during exterior painting",
        caption:
          "Side wall and covered outdoor area protected and prepared before the final exterior finish.",
      },
      {
        title: "Street View Finish",
        image: "/images/projects/north-willoughby-exterior-street-view-finish.jpg",
        alt: "North Willoughby street view after exterior house painting",
        caption:
          "Street-facing view showing the refreshed facade, trim, and front garden presentation.",
      },
      {
        title: "Window and Trim Finish",
        image: "/images/projects/north-willoughby-exterior-window-trim-finish.jpg",
        alt: "North Willoughby exterior windows and trim after repainting",
        caption:
          "Window surrounds, exterior wall surfaces, and trim finished with a tidy, even coating.",
      },
      {
        title: "Front Porch Finish",
        image: "/images/projects/north-willoughby-exterior-front-porch-finish.jpg",
        alt: "North Willoughby front porch and entry doors after exterior painting",
        caption:
          "Front porch, entry doors, masonry, and trim refreshed for a polished entry detail.",
      },
      {
        title: "Verandah Detail Finish",
        image: "/images/projects/north-willoughby-exterior-verandah-finish.jpg",
        alt: "North Willoughby verandah and side entry after exterior painting",
        caption:
          "Verandah walls, ceiling lines, and surrounding trim finished with clean detail work.",
      },
    ],
  },
  {
    slug: "carlingford-exterior-house-painting",
    title: "Carlingford Exterior House Painting",
    category: "Exterior Painting",
    suburb: "Carlingford, NSW",
    summary:
      "Finished exterior house painting across the Carlingford facade, Tudor-style trim, garage area, entry corners, patio walls, side walls, gutters, and exterior details.",
    coverImage: "/images/projects/carlingford-front-driveway-finish.jpg",
    coverAlt:
      "Carlingford house exterior with freshly painted white walls, black trim, and garage facade",
    images: [
      {
        title: "Front Facade Finish",
        image: "/images/projects/carlingford-front-driveway-finish.jpg",
        alt: "Carlingford front house facade after exterior repainting",
        caption: "Front facade, garage area, and Tudor-style trim finished in a clean exterior colour scheme.",
      },
      {
        title: "Driveway and Trim Finish",
        image: "/images/projects/carlingford-front-van-finish.jpg",
        alt: "Carlingford driveway and front facade after exterior painting with F&S Painting van",
        caption: "Driveway-facing walls and trims refreshed with crisp black and white detailing.",
      },
      {
        title: "Entry Corner Finish",
        image: "/images/projects/carlingford-entry-corner-finish.jpg",
        alt: "Carlingford entry corner after repainting with black doors and white exterior walls",
        caption: "Entry doors, gutters, trims, and surrounding masonry finished for a tidy exterior detail.",
      },
      {
        title: "Rear Patio Finish",
        image: "/images/projects/carlingford-rear-patio-finish.jpg",
        alt: "Carlingford rear patio exterior wall after repainting",
        caption: "Rear patio walls, eaves, and black trim repainted for a consistent outdoor finish.",
      },
      {
        title: "Brick Patio Finish",
        image: "/images/projects/carlingford-brick-patio-finish.jpg",
        alt: "Carlingford enclosed patio brick wall after grey exterior painting",
        caption: "Brick patio walls coated in a durable grey finish with clean trim lines.",
      },
      {
        title: "Side Wall Finish",
        image: "/images/projects/carlingford-side-wall-finish.jpg",
        alt: "Carlingford side wall after exterior repainting beside utility area",
        caption: "Side wall and eaves repainted for a clean, even finish around service areas.",
      },
      {
        title: "Side Gate Finish",
        image: "/images/projects/carlingford-side-gate-finish.jpg",
        alt: "Carlingford side passage after exterior repainting with black gate and white downpipes",
        caption: "Side passage details finished with sharp black trim and clean white downpipes.",
      },
      {
        title: "Wide Front Finish",
        image: "/images/projects/carlingford-front-wide-finish.jpg",
        alt: "Carlingford wide front facade after exterior house repainting",
        caption: "Wide front view showing the refreshed masonry, roofline trim, and facade presentation.",
      },
      {
        title: "Side Lawn Finish",
        image: "/images/projects/carlingford-side-lawn-finish.jpg",
        alt: "Carlingford side lawn elevation after exterior repainting",
        caption: "Side elevation finished with a fresh exterior coating and tidy trim contrast.",
      },
      {
        title: "Driveway Van Finish",
        image: "/images/projects/carlingford-driveway-van-finish.jpg",
        alt: "Carlingford driveway facade after repainting with F&S Painting van",
        caption: "Finished driveway facade with bright walls, black trim, and clean entry presentation.",
      },
      {
        title: "Front Work Progress",
        image: "/images/projects/carlingford-work-progress-front.jpg",
        alt: "Carlingford exterior repainting in progress with painters preparing front facade",
        caption: "Front facade work in progress during preparation and exterior repainting.",
      },
    ],
  },
  {
    slug: "earlwood-exterior-house-refresh",
    title: "Earlwood Exterior House Refresh",
    category: "Exterior Painting",
    suburb: "Earlwood, NSW",
    summary:
      "Finished exterior house painting across an Earlwood front facade, side elevations, verandah, entry door, garage, outbuilding, trim, gutters, and painted detail areas.",
    coverImage: "/images/projects/earlwood-exterior-front-facade.jpg",
    coverAlt: "Earlwood house front facade after exterior painting refresh",
    images: [
      {
        title: "Side Wall Finish",
        image: "/images/projects/earlwood-exterior-side-wall-finish.jpg",
        alt: "Earlwood side wall after exterior painting refresh",
        caption: "Side wall, trims, gutters, and service-area details finished with a clean exterior coating.",
      },
      {
        title: "Side Wall Detail",
        image: "/images/projects/earlwood-exterior-side-wall-detail.jpg",
        alt: "Earlwood side wall detail after exterior repainting",
        caption: "Close side-wall view showing neat trim, sill, pipe, and wall finish work.",
      },
      {
        title: "Front Angle Finish",
        image: "/images/projects/earlwood-exterior-front-angle.jpg",
        alt: "Earlwood front house angle after exterior painting",
        caption: "Front angle showing refreshed brickwork details, gables, gutters, and painted trim.",
      },
      {
        title: "Front Site View",
        image: "/images/projects/earlwood-exterior-front-with-van.jpg",
        alt: "Earlwood exterior painting site with F&S Painting van",
        caption: "Front site view showing the completed exterior palette and protected work area.",
      },
      {
        title: "Front Facade Finish",
        image: "/images/projects/earlwood-exterior-front-facade.jpg",
        alt: "Earlwood house front facade after exterior painting refresh",
        caption: "Front facade, porch, gables, and trim finished for a sharper street presentation.",
      },
      {
        title: "Side Window Finish",
        image: "/images/projects/earlwood-exterior-side-window.jpg",
        alt: "Earlwood side window and exterior wall after repainting",
        caption: "Side window surrounds, brick column detail, wall finish, and eaves repainted cleanly.",
      },
      {
        title: "Verandah Soffit Finish",
        image: "/images/projects/earlwood-exterior-verandah-soffit.jpg",
        alt: "Earlwood verandah soffit after exterior painting",
        caption: "Verandah ceiling, moulding, entry surrounds, and brick details refreshed.",
      },
      {
        title: "Entry Door Finish",
        image: "/images/projects/earlwood-exterior-entry-door.jpg",
        alt: "Earlwood entry door and trim after exterior painting",
        caption: "Entry door, frame, trim, and sheltered porch details finished with clean lines.",
      },
      {
        title: "F&S Painting Site View",
        image: "/images/projects/earlwood-exterior-site-van.jpg",
        alt: "F&S Painting van outside Earlwood exterior house painting project",
        caption: "Site view with F&S Painting van and exterior work completed around the house frontage.",
      },
      {
        title: "Side Elevation Finish",
        image: "/images/projects/earlwood-exterior-side-elevation.jpg",
        alt: "Earlwood side elevation and window trims after exterior painting",
        caption: "Side elevation, windows, downpipes, and garage-facing details refreshed.",
      },
      {
        title: "Garage Finish",
        image: "/images/projects/earlwood-exterior-garage-finish.jpg",
        alt: "Earlwood garage doors after exterior painting refresh",
        caption: "Garage doors, trim, and surrounding painted surfaces finished in a neat dark contrast.",
      },
      {
        title: "Rear Sunroom Finish",
        image: "/images/projects/earlwood-exterior-rear-sunroom.jpg",
        alt: "Earlwood rear sunroom exterior after repainting",
        caption: "Rear sunroom wall, window frames, fascia, and adjoining exterior surfaces refreshed.",
      },
      {
        title: "Outbuilding Front Finish",
        image: "/images/projects/earlwood-exterior-outbuilding-front.jpg",
        alt: "Earlwood outbuilding front after exterior painting",
        caption: "Outbuilding front wall, roofline, gutter, and painted cladding completed.",
      },
      {
        title: "Outbuilding Side Finish",
        image: "/images/projects/earlwood-exterior-outbuilding-side.jpg",
        alt: "Earlwood outbuilding side after exterior painting",
        caption: "Outbuilding side elevation finished to match the refreshed exterior colour scheme.",
      },
    ],
  },
  {
    slug: "balgowlah-heights-interior",
    title: "Balgowlah Heights Interior Painting",
    category: "Interior Painting",
    suburb: "Balgowlah Heights, NSW",
    summary:
      "Finished residential interior painting across the hallway, living area, stairwell, upper landing, and feature rooms in a Balgowlah Heights home.",
    coverImage: "/images/projects/balgowlah-heights-hallway-stairs.jpg",
    coverAlt:
      "Balgowlah Heights hallway and stairs with freshly finished white interior walls",
    images: [
      {
        title: "Hallway and Stair Finish",
        image: "/images/projects/balgowlah-heights-hallway-stairs.jpg",
        alt: "Balgowlah Heights hallway and stair area after fresh interior painting",
        caption: "Hallway and stair walls finished cleanly around timber floors and stair details.",
      },
      {
        title: "Living Room Finish",
        image: "/images/projects/balgowlah-heights-living-room.jpg",
        alt: "Balgowlah Heights living room after interior repainting with balcony doors",
        caption: "Living area repainted for a bright, open finish with clean wall and ceiling lines.",
      },
      {
        title: "Upper Stairwell Finish",
        image: "/images/projects/balgowlah-heights-upper-stairwell.jpg",
        alt: "Upper stairwell and landing after interior painting in Balgowlah Heights",
        caption: "Tall stairwell and upper landing areas finished with a consistent white coating.",
      },
      {
        title: "Stair Void Wall Finish",
        image: "/images/projects/balgowlah-heights-stair-void.jpg",
        alt: "Balgowlah Heights stair void wall and railing area after interior repainting",
        caption: "Stair void walls repainted carefully around timber stairs and stainless railing.",
      },
      {
        title: "Upper Room Finish",
        image: "/images/projects/balgowlah-heights-view-room.jpg",
        alt: "Upper room in Balgowlah Heights home after interior painting with harbour view",
        caption: "Upper-level room finished with clean walls beside large windows and built-in storage.",
      },
      {
        title: "Stair Detail Finish",
        image: "/images/projects/balgowlah-heights-stair-detail.jpg",
        alt: "Balgowlah Heights stair detail after repainting beside timber stairs",
        caption: "Detailed stair wall finish with crisp lines beside timber steps and metal balustrade.",
      },
      {
        title: "Interior Stairwell Finish",
        image: "/images/projects/interior-stair-after.jpg",
        alt: "Freshly repainted interior stairwell walls by F&S Painting",
        caption: "Clean neutral stairwell repaint with sharp wall and trim presentation.",
      },
      {
        title: "Garage Wall Repaint",
        image: "/images/projects/interior-garage-after.jpg",
        alt: "Freshly repainted garage interior walls after preparation in Sydney",
        caption: "Prepared and repainted garage walls for a brighter, cleaner finish.",
      },
    ],
  },
  {
    slug: "north-bridge-interior",
    title: "North Bridge Interior Painting",
    category: "Interior Painting",
    suburb: "North Bridge, NSW",
    summary:
      "Finished residential interior painting across living, kitchen, bedroom, bathroom, stairwell, door, wardrobe, laundry, and detailed interior surfaces in a North Bridge home.",
    coverImage: "/images/projects/north-bridge-dining-feature-wall-finish.jpg",
    coverAlt:
      "North Bridge dining and living interior after fresh wall and feature wall painting",
    images: [
      {
        title: "Dining Feature Wall Finish",
        image: "/images/projects/north-bridge-dining-feature-wall-finish.jpg",
        alt: "North Bridge dining area after interior painting with dark feature wall and timber floors",
        caption: "Dining and feature wall surfaces repainted for a clean, polished interior finish.",
      },
      {
        title: "Kitchen Finish",
        image: "/images/projects/north-bridge-kitchen-finish.jpg",
        alt: "North Bridge kitchen area after interior painting with fresh ceiling and wall finishes",
        caption: "Kitchen walls and high ceiling areas finished around cabinetry and natural light.",
      },
      {
        title: "High Ceiling Kitchen Finish",
        image: "/images/projects/north-bridge-high-ceiling-kitchen-finish.jpg",
        alt: "North Bridge high ceiling kitchen area after repainting",
        caption: "High ceiling and upper wall surfaces repainted for a brighter kitchen and dining space.",
      },
      {
        title: "Laundry Finish",
        image: "/images/projects/north-bridge-laundry-finish.jpg",
        alt: "North Bridge laundry after interior repainting with clean white walls and trim",
        caption: "Laundry walls and trims refreshed around cabinets, appliances, and wet area details.",
      },
      {
        title: "Bedroom Wardrobe Finish",
        image: "/images/projects/north-bridge-bedroom-wardrobe-finish.jpg",
        alt: "North Bridge bedroom wardrobe wall after fresh interior repainting",
        caption: "Bedroom walls and wardrobe surrounds finished with a clean neutral coating.",
      },
      {
        title: "Bedroom Window Finish",
        image: "/images/projects/north-bridge-bedroom-window-finish.jpg",
        alt: "North Bridge bedroom window and wall after interior painting",
        caption: "Bedroom wall, trim, and window surrounds repainted for a tidy finish.",
      },
      {
        title: "Bedroom Fireplace Detail",
        image: "/images/projects/north-bridge-bedroom-fireplace-before.jpg",
        alt: "North Bridge bedroom fireplace and ceiling detail before interior repainting",
        caption: "Bedroom fireplace, ceiling edge, and surrounding wall detail documented as part of the interior work.",
      },
      {
        title: "Bathroom Finish",
        image: "/images/projects/north-bridge-bathroom-finish.jpg",
        alt: "North Bridge bathroom after interior painting with clean ceiling and trim",
        caption: "Bathroom ceiling, door trim, and surrounding surfaces refreshed with a clean finish.",
      },
      {
        title: "Stairwell Finish",
        image: "/images/projects/north-bridge-stairwell-finish.jpg",
        alt: "North Bridge stairwell after repainting with clean walls and timber stair details",
        caption: "Stairwell walls and surrounding details repainted around timber rail and stairs.",
      },
      {
        title: "Entry Door Finish",
        image: "/images/projects/north-bridge-entry-door-finish.jpg",
        alt: "North Bridge entry door and trim after painting",
        caption: "Entry door, trim, and surrounding detail finished with a clean interior coating.",
      },
    ],
  },
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
  {
    slug: "chatswood-commercial-reception-finish",
    title: "Chatswood Commercial Reception Finish",
    category: "Commercial Painting",
    suburb: "Artamon, NSW",
    summary:
      "Commercial interior painting across the reception counter, office corridor, hallway, storage room, and client-facing entry areas in a Chatswood office.",
    coverImage: "/images/projects/commercial-reception-after.jpg",
    coverAlt:
      "Chatswood commercial office reception area after fresh interior repainting by F&S Painting",
    images: [
      {
        title: "Reception Finish",
        image: "/images/projects/commercial-reception-after.jpg",
        alt: "Chatswood commercial office reception area after fresh interior repainting",
        caption: "Reception area repainted for a cleaner and more professional first impression.",
      },
      {
        title: "Reception Counter Detail",
        image: "/images/projects/chatswood-commercial-reception-counter.jpg",
        alt: "Chatswood office reception counter and work surface after interior painting",
        caption: "Reception counter, work surface, and surrounding walls finished with a clean commercial look.",
      },
      {
        title: "Office Corridor Finish",
        image: "/images/projects/chatswood-commercial-office-corridor.jpg",
        alt: "Chatswood office corridor and room entries after commercial interior painting",
        caption: "Corridor walls, door frames, and room entries repainted for a brighter office finish.",
      },
      {
        title: "Hallway Door Finish",
        image: "/images/projects/chatswood-commercial-hallway-doors.jpg",
        alt: "Chatswood office hallway with white doors and painted walls after repainting",
        caption: "Hallway, column, doors, and wall surfaces refreshed with a neat neutral finish.",
      },
      {
        title: "Storage Room Detail",
        image: "/images/projects/chatswood-commercial-storage-room.jpg",
        alt: "Chatswood office storage room and shelving area after painting",
        caption: "Storage room walls, shelves, and trims repainted to keep the back-of-house area tidy.",
      },
      {
        title: "Wide Reception View",
        image: "/images/projects/chatswood-commercial-reception-wide.jpg",
        alt: "Wide view of Chatswood office reception and glass entry after commercial painting",
        caption: "Wide reception view showing the refreshed counter, entry glazing, and office presentation.",
      },
    ],
  },
  {
    slug: "chatswood-office-room-refresh",
    title: "Office Room Refresh",
    category: "Commercial Painting",
    suburb: "Chatswood, NSW",
    summary:
      "Commercial interior painting across a private office, boardroom, waiting area, reception zone, corridor, and meeting room spaces in a Chatswood office.",
    coverImage: "/images/projects/interior-office-room-after.jpg",
    coverAlt:
      "Chatswood office room with fresh neutral commercial interior painting",
    images: [
      {
        title: "Private Office Finish",
        image: "/images/projects/interior-office-room-after.jpg",
        alt: "Chatswood private office room after neutral commercial interior painting",
        caption:
          "Private office walls and work area refreshed with a clean neutral finish for everyday use.",
      },
      {
        title: "Waiting Area Finish",
        image: "/images/projects/chatswood-office-waiting-area-finish.jpg",
        alt: "Chatswood office waiting area and corridor after commercial repainting",
        caption:
          "Waiting area, hallway, and glass-partition entry finished for a brighter client-facing presentation.",
      },
      {
        title: "Boardroom Finish",
        image: "/images/projects/chatswood-office-boardroom-finish.jpg",
        alt: "Chatswood office boardroom after commercial interior painting",
        caption:
          "Boardroom walls and window-side meeting space repainted for a clean professional look.",
      },
      {
        title: "Reception Hallway Finish",
        image: "/images/projects/chatswood-office-reception-hallway-finish.jpg",
        alt: "Chatswood office reception hallway after commercial repainting",
        caption:
          "Reception-side hallway and shared entry path refreshed with a neat commercial finish.",
      },
      {
        title: "Meeting Room Finish",
        image: "/images/projects/chatswood-office-meeting-room-finish.jpg",
        alt: "Chatswood office meeting room after commercial interior painting",
        caption:
          "Meeting room walls, cabinetry surrounds, and work surfaces presented with a tidy neutral repaint.",
      },
      {
        title: "Glass Corridor Finish",
        image: "/images/projects/chatswood-office-glass-corridor-finish.jpg",
        alt: "Chatswood office glass corridor and boardroom entry after repainting",
        caption:
          "Glass-partition corridor and room entries repainted to keep the office feeling bright and consistent.",
      },
      {
        title: "Lobby Finish",
        image: "/images/projects/chatswood-office-lobby-finish.jpg",
        alt: "Chatswood office lobby and lift-side seating area after commercial painting",
        caption:
          "Lobby seating area and lift-side walls finished for a cleaner first impression.",
      },
    ],
  },
  {
    slug: "chatswood-apartment-interior-repaint",
    title: "Chatswood Apartment Interior Repaint",
    category: "Interior Painting",
    suburb: "Chatswood, NSW",
    summary:
      "Finished apartment interior repaint across Chatswood living areas, bedroom, entry, kitchen-side walls, and bathroom ceiling details.",
    coverImage: "/images/projects/chatswood-apartment-living-room-finish.jpg",
    coverAlt: "Chatswood apartment living room after fresh interior repainting",
    images: [
      {
        title: "Living Room Finish",
        image: "/images/projects/chatswood-apartment-living-room-finish.jpg",
        alt: "Chatswood apartment living room after interior wall and ceiling repainting",
        caption: "Living room walls and ceiling refreshed after preparation and repainting.",
      },
      {
        title: "Entry and Kitchen-Side Finish",
        image: "/images/projects/chatswood-apartment-entry-kitchen-finish.jpg",
        alt: "Chatswood apartment entry and kitchen-side walls after repainting",
        caption: "Entry and kitchen-side walls repainted for a cleaner apartment presentation.",
      },
      {
        title: "Bathroom Ceiling Finish",
        image: "/images/projects/chatswood-apartment-bathroom-ceiling-finish.jpg",
        alt: "Chatswood apartment bathroom ceiling after repainting",
        caption: "Bathroom ceiling and surrounding wall areas repainted with a neat finish.",
      },
      {
        title: "Bedroom Finish",
        image: "/images/projects/chatswood-apartment-bedroom-finish.jpg",
        alt: "Chatswood apartment bedroom after interior repainting",
        caption: "Bedroom walls and trims refreshed as part of the apartment repaint.",
      },
    ],
  },
  {
    slug: "lindfield-exterior-window-trim-repaint",
    title: "Lindfield Exterior Window and Trim Repaint",
    category: "Exterior Painting",
    suburb: "Lindfield, NSW",
    summary:
      "Finished Lindfield exterior repainting across timber windows, door trim, verandah details, and rear exterior wall areas.",
    coverImage: "/images/projects/lindfield-door-trim-finish.jpg",
    coverAlt: "Lindfield exterior door and trim after fresh repainting",
    images: [
      {
        title: "Door Trim Finish",
        image: "/images/projects/lindfield-door-trim-finish.jpg",
        alt: "Lindfield exterior door and surrounding trim after repainting",
        caption: "Exterior door and surrounding trim refreshed with a clean painted finish.",
      },
      {
        title: "Verandah Window Finish",
        image: "/images/projects/lindfield-verandah-window-finish.jpg",
        alt: "Lindfield verandah window and frame after exterior repainting",
        caption: "Verandah window frames and trim repainted for a brighter exterior presentation.",
      },
      {
        title: "French Door and Window Finish",
        image: "/images/projects/lindfield-french-door-window-finish.jpg",
        alt: "Lindfield French door and side windows after exterior trim repainting",
        caption: "French door, side windows, and surrounding trim finished neatly after preparation.",
      },
      {
        title: "Rear Exterior Wall Finish",
        image: "/images/projects/lindfield-rear-exterior-wall-finish.jpg",
        alt: "Lindfield rear exterior wall and window trim after repainting",
        caption: "Rear exterior wall, window frames, and trim repainted as part of the Lindfield refresh.",
      },
    ],
  },
  {
    slug: "chatswood-exterior-house-painting",
    title: "Chatswood Exterior House Painting",
    category: "Exterior Painting",
    suburb: "Chatswood, NSW",
    summary:
      "Finished exterior painting across the front entry, verandah posts, decorative trim, gables, garage-facing elevation, rear facade, and detached outdoor structure of a Chatswood home.",
    coverImage: "/images/projects/chatswood-exterior-front-facade-wide.jpg",
    coverAlt:
      "Chatswood brick house exterior with refreshed trims, gables, and garage frontage after painting",
    images: [
      {
        title: "Front Facade Wide View",
        image: "/images/projects/chatswood-exterior-front-facade-wide.jpg",
        alt: "Chatswood front facade and garage elevation after exterior painting",
        caption: "Wide front view showing the refreshed brick facade, trims, gables, and garage frontage.",
      },
      {
        title: "Entry Door Finish",
        image: "/images/projects/chatswood-exterior-entry-door-finish.jpg",
        alt: "Chatswood front entry door and stained glass surround after exterior painting",
        caption: "Front entry door, sidelight trims, and surrounding details finished with a clean exterior presentation.",
      },
      {
        title: "Front Verandah Detail",
        image: "/images/projects/chatswood-exterior-front-verandah-finish.jpg",
        alt: "Chatswood verandah posts, soffit, and brick entry porch after exterior painting",
        caption: "Verandah posts, soffit lines, and entry porch details repainted neatly along the front elevation.",
      },
      {
        title: "Site Preparation View",
        image: "/images/projects/chatswood-exterior-site-preparation.jpg",
        alt: "Chatswood house exterior during preparation with F&S Painting van on site",
        caption: "On-site preparation view showing access setup and protection before final exterior finishing.",
      },
      {
        title: "Front Yard Finish",
        image: "/images/projects/chatswood-exterior-front-yard-view.jpg",
        alt: "Chatswood front yard and brick house exterior after painting work",
        caption: "Front yard perspective showing the completed exterior trim work across the facade and gables.",
      },
      {
        title: "Side Elevation Finish",
        image: "/images/projects/chatswood-exterior-side-elevation.jpg",
        alt: "Chatswood side elevation with refreshed trims and brick exterior after painting",
        caption: "Side elevation and upper trim lines finished cleanly for a consistent exterior result.",
      },
      {
        title: "Street Garage View",
        image: "/images/projects/chatswood-exterior-street-garage-view.jpg",
        alt: "Chatswood street view with garage frontage and painted exterior details",
        caption: "Street-facing view showing the garage frontage, gable detail, and completed trim presentation.",
      },
      {
        title: "Side Gate and Porch View",
        image: "/images/projects/chatswood-exterior-side-gate-finish.jpg",
        alt: "Chatswood side gate, side wall, and porch entry after exterior painting",
        caption: "Side gate, wall surfaces, and porch connection finished with sharp trim contrast and tidy lines.",
      },
      {
        title: "Rear Yard View",
        image: "/images/projects/chatswood-exterior-rear-yard-view.jpg",
        alt: "Chatswood rear yard and back exterior walls after painting",
        caption: "Rear yard view showing the painted exterior surfaces around the back of the home.",
      },
      {
        title: "Outbuilding Finish",
        image: "/images/projects/chatswood-exterior-outbuilding-finish.jpg",
        alt: "Chatswood detached outdoor structure with repainted walls and trims",
        caption: "Detached outdoor structure refreshed with clean wall, trim, and eave finishes.",
      },
      {
        title: "Rear Facade Wide View",
        image: "/images/projects/chatswood-exterior-rear-facade-wide.jpg",
        alt: "Chatswood rear facade and garden side exterior after painting",
        caption: "Wide rear facade view showing the completed trim work across upper and lower exterior sections.",
      },
      {
        title: "Rear Entry Finish",
        image: "/images/projects/chatswood-exterior-rear-entry-finish.jpg",
        alt: "Chatswood rear entry and window surrounds after exterior painting",
        caption: "Rear entry, window surrounds, and adjacent trim finished for a neat and durable outdoor result.",
      },
      {
        title: "Upper Roofline Detail",
        image: "/images/projects/chatswood-exterior-upper-roofline-detail.jpg",
        alt: "Chatswood upper roofline and window trim detail after exterior painting",
        caption: "Upper roofline, window trims, and eave details finished cleanly along the second-storey elevation.",
      },
    ],
  },
  {
    slug: "blakehurst-interior-house-painting",
    title: "Blakehurst Interior House Painting",
    category: "Interior Painting",
    suburb: "Blakehurst, NSW",
    summary:
      "Interior painting finishes across the dining area, stairwell, entry, and living spaces of a Blakehurst home.",
    coverImage: "/images/projects/blakehurst-stairwell-chandelier.jpg",
    coverAlt:
      "Blakehurst stairwell and chandelier after interior painting by F&S Painting",
    images: [
      {
        title: "Stairwell Chandelier View",
        image: "/images/projects/blakehurst-stairwell-chandelier.jpg",
        alt: "Blakehurst stairwell and chandelier after interior painting",
        caption: "Tall stairwell walls and upper landing finished cleanly around chandelier and trim details.",
      },
      {
        title: "Entry Staircase Finish",
        image: "/images/projects/blakehurst-entry-staircase.jpg",
        alt: "Blakehurst entry staircase and skylight area after interior painting",
        caption: "Entry staircase, skylight surround, and upper-level walls refreshed with a neat neutral finish.",
      },
      {
        title: "Dining Room Finish",
        image: "/images/projects/blakehurst-dining-room-finish.jpg",
        alt: "Blakehurst dining room after interior repainting",
        caption: "Dining room walls and trim repainted to brighten the main living area.",
      },
      {
        title: "Living Room Finish",
        image: "/images/projects/blakehurst-living-room-finish.jpg",
        alt: "Blakehurst living room and high wall area after interior painting",
        caption: "Living room walls and high feature surfaces repainted for a cleaner open-plan presentation.",
      },
    ],
  },
  {
    slug: "marrickville-salon-interior-painting",
    title: "Marrickville Salon Interior Painting",
    category: "Commercial Painting",
    suburb: "Marrickville, NSW",
    summary:
      "Commercial interior painting across the feature wall, ceiling, wash station, reception, counter, and shopfront areas of a Marrickville salon.",
    coverImage: "/images/projects/marrickville-salon-feature-wall-finish.jpg",
    coverAlt:
      "Marrickville salon feature wall and ceiling after commercial interior painting",
    images: [
      {
        title: "Feature Wall and Ceiling Finish",
        image: "/images/projects/marrickville-salon-feature-wall-finish.jpg",
        alt: "Marrickville salon feature wall, mirrors, and dark ceiling after repainting",
        caption:
          "Feature wall, ceiling, and styling station surfaces finished with a clean commercial repaint.",
      },
      {
        title: "Wash Station Finish",
        image: "/images/projects/marrickville-salon-wash-station-finish.jpg",
        alt: "Marrickville salon wash station area after interior painting",
        caption:
          "Wash station wall, shelving area, and ceiling detail refreshed for a neat salon finish.",
      },
      {
        title: "Reception Wall Finish",
        image: "/images/projects/marrickville-salon-reception-finish.jpg",
        alt: "Marrickville salon reception wall and ceiling after interior painting",
        caption:
          "Reception wall and ceiling repainted to brighten the front customer area.",
      },
      {
        title: "Counter Detail",
        image: "/images/projects/marrickville-salon-counter-detail.jpg",
        alt: "Marrickville salon counter and feature wall detail after painting",
        caption:
          "Counter area and wall colour detail showing the finished salon palette.",
      },
      {
        title: "Shopfront View",
        image: "/images/projects/marrickville-salon-shopfront.jpg",
        alt: "Marrickville salon shopfront and window display after painting work",
        caption:
          "Street-facing salon view showing the refreshed interior and customer-facing presentation.",
      },
    ],
  },
];

export function getGalleryCollection(slug: string) {
  return galleryCollections.find((collection) => collection.slug === slug);
}
