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
    title: "Balgowlah Heights Interior Finish",
    category: "Interior Painting",
    image: "/images/projects/balgowlah-heights-hallway-stairs.jpg",
    alt: "Balgowlah Heights home hallway and stair area after interior painting by F&S Painting",
    caption:
      "A location gallery showing bright interior wall, stairwell, living room, and upper-level finishes.",
    suburb: "Balgowlah Heights, NSW",
    collectionSlug: "balgowlah-heights-interior",
    photoCount: 6,
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
    title: "Dee Why Strata Common Area Repaint",
    category: "Strata / Common Areas",
    image: "/images/projects/dee-why-strata-lift-lobby-work-1.jpg",
    alt: "Dee Why strata common area and lift lobby during repainting by F&S Painting",
    caption:
      "A location gallery showing Dee Why strata lift lobby, corridor, common area, wall, ceiling, and trim finishes.",
    suburb: "Dee Why, NSW",
    collectionSlug: "dee-why-strata-common-areas",
    photoCount: 5,
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
    slug: "dee-why-strata-common-areas",
    title: "Dee Why Strata Common Area Painting",
    category: "Strata / Common Areas",
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
];

export function getGalleryCollection(slug: string) {
  return galleryCollections.find((collection) => collection.slug === slug);
}
