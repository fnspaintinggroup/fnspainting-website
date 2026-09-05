export type Project = {
  title: string;
  slug: string;
  location: string;
  serviceType: string;
  beforeImage: string;
  afterImage: string;
  beforeImageAlt: string;
  afterImageAlt: string;
  additionalImages?: Array<{
    image: string;
    alt: string;
    label: "Before" | "After";
  }>;
  description: string;
  materials: string;
  completionDate: string;
  seoTitle: string;
  seoDescription: string;
  featuredOnExteriorService?: boolean;
};

export const projects: Project[] = [
  {
    title: "Willoughby Ceiling Restoration and Interior Repaint",
    slug: "willoughby-ceiling-restoration-interior-repaint",
    location: "Willoughby, NSW",
    serviceType: "Ceiling Restoration",
    beforeImage: "/images/projects/willoughby-office-ceiling-before.jpg",
    afterImage: "/images/projects/willoughby-office-ceiling-after.jpg",
    beforeImageAlt:
      "Willoughby ceiling with damaged and uneven coating before restoration",
    afterImageAlt:
      "Willoughby ceiling after surface restoration and a clean repainting finish",
    description:
      "A damaged, mould-affected ceiling and surrounding interior areas were protected, prepared, restored, and repainted for a clean and consistent finish.",
    materials:
      "Ceiling paint, primer and sealer where required, patching compound, gap filler, sanding materials, masking protection, and detailed surface preparation.",
    completionDate: "2026-07-22",
    seoTitle: "Ceiling Restoration Willoughby | F&S Painting",
    seoDescription:
      "Before and after ceiling restoration in Willoughby by F&S Painting, showing damaged coating preparation and a clean finished ceiling repaint.",
  },
  {
    title: "Shed Exterior Repaint in Chatswood West",
    slug: "chatswood-west-shed-exterior-repaint",
    location: "Chatswood West, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/chatswood-west-shed-exterior-before.jpg",
    afterImage: "/images/projects/chatswood-west-shed-exterior-after.jpg",
    beforeImageAlt:
      "Grey garden shed exterior and contrasting doors before painting in Chatswood West",
    afterImageAlt:
      "Garden shed exterior and doors after repainting with a clean light finish in Chatswood West",
    additionalImages: [
      {
        image: "/images/projects/chatswood-west-shed-front-before.jpg",
        alt: "Front view of the garden shed and doors before exterior painting in Chatswood West",
        label: "Before",
      },
      {
        image: "/images/projects/chatswood-west-shed-front-after.jpg",
        alt: "Completed garden shed front and doors after exterior painting in Chatswood West",
        label: "After",
      },
    ],
    description:
      "F&S Painting completed a small exterior repaint in Chatswood West, covering the front and right sides of a garden shed and both sides of its two doors. The project refreshed the grey exterior and contrasting doors with a clean, consistent light finish.",
    materials:
      "Project records confirm the painted scope; specific paint product and colour details are not published.",
    completionDate: "2023-05-27",
    seoTitle: "Shed Exterior Repaint Chatswood West | F&S Painting",
    seoDescription:
      "Before and after a Chatswood West shed exterior repaint by F&S Painting, including the front, right side, and both sides of two doors.",
    featuredOnExteriorService: true,
  },
  {
    title: "Mona Vale Heritage Interior Repaint",
    slug: "mona-vale-heritage-interior-repaint",
    location: "Mona Vale, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/mona-vale-heritage-before.jpg",
    afterImage: "/images/projects/mona-vale-heritage-after.png",
    beforeImageAlt:
      "Mona Vale heritage living room before interior repainting preparation",
    afterImageAlt:
      "Mona Vale heritage living room after professional interior repainting",
    description:
      "A heritage-style Mona Vale home was carefully prepared and repainted across the formal rooms, hallway, bedroom, and attic spaces while preserving its ornate ceilings, arches, timber floors, and detailed joinery.",
    materials:
      "Interior acrylic wall paint, ceiling paint, trim enamel, patching compound, sanding materials, masking protection, and detailed surface preparation.",
    completionDate: "2026-03-18",
    seoTitle: "Interior Painting Mona Vale | F&S Painting",
    seoDescription:
      "Before and after interior painting in a Mona Vale heritage home by F&S Painting, including careful preparation and repainting around ornate ceilings, arches, timber floors, and trim.",
  },
  {
    title: "North Bridge Interior Repaint",
    slug: "north-bridge-interior-repaint",
    location: "North Bridge, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/north-bridge-interior-before.jpg",
    afterImage: "/images/projects/north-bridge-interior-after.jpg",
    beforeImageAlt: "North Bridge interior living and kitchen area before repainting with surfaces protected",
    afterImageAlt: "North Bridge interior living and kitchen area after fresh wall and feature wall repainting",
    description:
      "A North Bridge home interior was protected, prepared, and repainted across living, kitchen, bedroom, bathroom, stairwell, and detailed trim areas for a cleaner, brighter finish.",
    materials:
      "Interior acrylic wall paint, ceiling paint, trim enamel, patching compound, sanding materials, masking protection, and detailed surface preparation.",
    completionDate: "2017-12-14",
    seoTitle: "Interior Painting North Bridge | F&S Painting",
    seoDescription:
      "Before and after North Bridge interior painting by F&S Painting, showing a residential interior repaint with clean walls, feature areas, and detailed finishes.",
  },
  {
    title: "North Ryde Interior House Repaint",
    slug: "north-ryde-interior-house-repaint",
    location: "North Ryde, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/north-ryde-interior-before.jpg",
    afterImage: "/images/projects/north-ryde-interior-after.jpg",
    beforeImageAlt: "North Ryde interior walls before repainting with floors and timber railing protected",
    afterImageAlt: "North Ryde interior walls after repainting with a clean neutral finish",
    description:
      "A North Ryde home interior was protected, prepared, and repainted across stairwell, hallway, bedroom, landing, ceiling, and wall areas for a cleaner and more consistent finish.",
    materials:
      "Interior acrylic wall paint, ceiling paint, patching compound, sanding materials, masking protection, drop sheets, and detailed surface preparation.",
    completionDate: "2018-10-13",
    seoTitle: "Interior House Painting North Ryde | F&S Painting",
    seoDescription:
      "Before and after interior house painting in North Ryde by F&S Painting, showing stairwell, hallway, bedroom, ceiling, and wall repainting finishes.",
  },
  {
    title: "Carlingford Exterior House Repaint",
    slug: "carlingford-exterior-house-repaint",
    location: "Carlingford, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/carlingford-exterior-before.jpg",
    afterImage: "/images/projects/carlingford-exterior-after.jpg",
    beforeImageAlt: "Carlingford house exterior before repainting with brick facade and dark trim",
    afterImageAlt: "Carlingford house exterior after repainting with fresh white walls and black trim",
    description:
      "A Carlingford home exterior was prepared and repainted to refresh the brickwork, render, trims, eaves, gutters, and Tudor-style facade details.",
    materials:
      "Exterior acrylic paint system, masonry preparation materials, exterior trim coating, primers where required, sealant, sanding materials, masking protection, and detailed exterior surface preparation.",
    completionDate: "2024-04-15",
    seoTitle: "Exterior House Painting Carlingford | F&S Painting",
    seoDescription:
      "Before and after exterior house painting in Carlingford by F&S Painting, showing a brick home refreshed with white walls and black trim.",
    featuredOnExteriorService: true,
  },
  {
    title: "Newington Interior Repaint",
    slug: "newington-interior-repaint",
    location: "Newington, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/newington-interior-living-before.jpg",
    afterImage: "/images/projects/newington-interior-living-after.jpg",
    beforeImageAlt: "Newington living area before interior repainting with furniture and floors protected",
    afterImageAlt: "Newington living area after interior repainting with clean walls and ceiling finish",
    description:
      "A Newington home interior was protected, prepared, and repainted across living, dining, kitchen, window, and bedroom areas for a cleaner, brighter finish.",
    materials:
      "Interior acrylic wall paint, ceiling paint, trim coating, patching compound, sanding materials, masking protection, and careful furniture covering.",
    completionDate: "2018-11-05",
    seoTitle: "Interior Painting Newington | F&S Painting",
    seoDescription:
      "Before and after Newington interior painting by F&S Painting, showing protected preparation and a clean finished living area repaint.",
  },
  {
    title: "Silverwater Commercial Exterior Facade Repaint",
    slug: "silverwater-commercial-exterior-facade-repaint",
    location: "Silverwater, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/silverwater-commercial-facade-before.jpg",
    afterImage: "/images/projects/silverwater-commercial-facade-after.jpg",
    beforeImageAlt: "Silverwater commercial warehouse facade before exterior repainting",
    afterImageAlt: "Silverwater commercial warehouse facade after yellow exterior repainting",
    description:
      "A Silverwater commercial warehouse exterior was prepared and repainted to refresh the facade, roller door, metal cladding, and brickwork presentation.",
    materials:
      "Commercial exterior acrylic coating system, metal cladding preparation materials, masonry coating, masking protection, access equipment, and exterior surface preparation products.",
    completionDate: "2022-04-14",
    seoTitle: "Commercial Painting Silverwater | Exterior Facade Repaint",
    seoDescription:
      "Before and after commercial painting in Silverwater by F&S Painting, showing a warehouse exterior facade and roller door repaint.",
  },
  {
    title: "Silverwater Commercial Side Wall Repaint",
    slug: "silverwater-commercial-side-wall-repaint",
    location: "Silverwater, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/silverwater-commercial-side-before.jpg",
    afterImage: "/images/projects/silverwater-commercial-side-after.jpg",
    beforeImageAlt: "Silverwater commercial side wall before exterior repainting",
    afterImageAlt: "Silverwater commercial side wall after bright exterior repainting",
    description:
      "The side elevation of a Silverwater commercial building was prepared and repainted for a brighter, cleaner, and more visible exterior finish.",
    materials:
      "Commercial exterior paint, metal cladding preparation, masonry preparation, primers where required, masking protection, and access equipment.",
    completionDate: "2022-04-14",
    seoTitle: "Silverwater Commercial Side Wall Repaint | F&S Painting",
    seoDescription:
      "Before and after Silverwater commercial side wall repaint by F&S Painting, showing exterior cladding and masonry preparation with a fresh finish.",
  },
  {
    title: "Wetherill Park Commercial Facade Repaint",
    slug: "wetherill-park-commercial-facade-repaint",
    location: "Wetherill Park, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/wetherill-park-commercial-facade-before.jpg",
    afterImage: "/images/projects/wetherill-park-commercial-facade-after.jpg",
    beforeImageAlt: "Wetherill Park commercial building facade before repainting with preparation underway",
    afterImageAlt: "Wetherill Park commercial building facade after exterior repainting",
    description:
      "A Wetherill Park commercial building exterior was prepared and repainted across the main facade, wall panels, trims, and entry-facing areas for a cleaner business presentation.",
    materials:
      "Commercial exterior acrylic coating system, masonry preparation materials, exterior trim coating, primers where required, masking protection, ladders, and detailed surface preparation.",
    completionDate: "2018-11-30",
    seoTitle: "Commercial Painting Wetherill Park | F&S Painting",
    seoDescription:
      "Before and after commercial facade painting in Wetherill Park by F&S Painting, showing exterior preparation and a cleaner finished warehouse presentation.",
  },
  {
    title: "Wetherill Park Commercial Roller Door Repaint",
    slug: "wetherill-park-commercial-roller-door-repaint",
    location: "Wetherill Park, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/wetherill-park-commercial-roller-doors-before.jpg",
    afterImage: "/images/projects/wetherill-park-commercial-roller-doors-after.jpg",
    beforeImageAlt: "Wetherill Park commercial roller doors before repainting",
    afterImageAlt: "Wetherill Park commercial roller doors after dark exterior repainting",
    description:
      "Commercial roller doors and surrounding exterior wall areas were prepared and repainted to match the updated facade and improve the overall warehouse finish.",
    materials:
      "Commercial exterior coating, roller door surface preparation, metal primer where required, sanding materials, masking protection, drop sheets, and access equipment.",
    completionDate: "2018-11-30",
    seoTitle: "Commercial Roller Door Painting Wetherill Park | F&S Painting",
    seoDescription:
      "Before and after commercial roller door repaint in Wetherill Park by F&S Painting, showing preparation and a dark finished exterior coating.",
  },
  {
    title: "Dee Why Strata High Ceiling and Wall Repaint",
    slug: "dee-why-strata-high-ceiling-wall-repaint",
    location: "Dee Why, NSW",
    serviceType: "Strata Painting",
    beforeImage: "/images/projects/dee-why-strata-ceiling-before.jpg",
    afterImage: "/images/projects/dee-why-strata-ceiling-after.jpg",
    beforeImageAlt: "Dee Why strata high ceiling and wall area before repainting",
    afterImageAlt: "Dee Why strata high ceiling and wall area after repainting",
    description:
      "A high Dee Why strata interior wall and ceiling area was accessed, prepared, patched, and repainted for a brighter common area finish.",
    materials:
      "Interior acrylic wall paint, ceiling paint, patching compound, sanding materials, masking protection, and access equipment for high common area surfaces.",
    completionDate: "2025-01-15",
    seoTitle: "Dee Why Strata High Ceiling and Wall Repaint | F&S Painting",
    seoDescription:
      "Before and after Dee Why strata high ceiling and wall repaint by F&S Painting, showing preparation, patching, and a clean common area finish.",
  },
  {
    title: "Dee Why Strata Hallway Repaint",
    slug: "dee-why-strata-hallway-repaint",
    location: "Dee Why, NSW",
    serviceType: "Strata Painting",
    beforeImage: "/images/projects/dee-why-strata-hallway-before.jpg",
    afterImage: "/images/projects/dee-why-strata-hallway-after.jpg",
    beforeImageAlt: "Dee Why strata hallway before repainting",
    afterImageAlt: "Dee Why strata hallway after fresh wall, ceiling, and trim repainting",
    description:
      "A Dee Why strata hallway was prepared, patched, and repainted across walls, ceilings, trims, and common area details for a cleaner, brighter shared-space finish.",
    materials:
      "Interior acrylic wall paint, ceiling paint, trim enamel, patching compound, sanding materials, masking protection, and access equipment for common area hallway work.",
    completionDate: "2025-01-15",
    seoTitle: "Dee Why Strata Hallway Repaint | F&S Painting",
    seoDescription:
      "Before and after Dee Why strata hallway repaint by F&S Painting, showing wall, ceiling, trim, and common area preparation with a clean finish.",
  },
  {
    title: "Narwee Strata Exterior Refresh",
    slug: "narwee-strata-exterior-refresh",
    location: "Narwee, NSW",
    serviceType: "Strata Painting",
    beforeImage: "/images/projects/narwee-strata-building-before.jpg",
    afterImage: "/images/projects/narwee-strata-building-after.jpg",
    beforeImageAlt: "Narwee strata building before exterior painting refresh",
    afterImageAlt: "Narwee strata building after exterior painting refresh",
    description:
      "A Narwee strata building exterior was prepared and refreshed across common walls, balcony details, soffits, entry areas, and garage surrounds for a cleaner overall presentation.",
    materials:
      "Exterior masonry paint, soffit and trim coatings, primers where required, patching materials, sanding preparation, masking protection, and access equipment for strata common areas.",
    completionDate: "2023-10-01",
    seoTitle: "Narwee Strata Exterior Refresh | F&S Painting",
    seoDescription:
      "Before and after Narwee strata exterior refresh by F&S Painting, showing cleaner common area presentation across walls, balconies, soffits, and entry areas.",
  },
  {
    title: "Newington Exterior House Repaint",
    slug: "newington-exterior-house-repaint",
    location: "Newington, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/newington-exterior-house-before.jpg",
    afterImage: "/images/projects/newington-front-facade-after-final.jpg",
    beforeImageAlt: "Newington house exterior before repainting with preparation patches on the front facade",
    afterImageAlt: "Newington house front facade after exterior repainting with refreshed wall and trim finishes",
    description:
      "A Newington home exterior was prepared and repainted across the front facade, side elevations, rear wall areas, patio surrounds, boundary walls, and trim details for a cleaner, more consistent finish.",
    materials:
      "Exterior acrylic paint system, masonry preparation materials, exterior trim coating, primers where required, patching compound, sanding materials, masking protection, and detailed surface preparation.",
    completionDate: "2016-10-10",
    seoTitle: "Exterior House Painting Newington | F&S Painting",
    seoDescription:
      "Before and after exterior house painting in Newington by F&S Painting, showing facade preparation, wall repainting, and refreshed exterior finishes.",
  },
  {
    title: "Mould-Damaged Ceiling Restoration in Chatswood",
    slug: "mould-damaged-ceiling-restoration-sydney",
    location: "Chatswood, NSW",
    serviceType: "Mould-Damaged Ceiling Restoration",
    beforeImage: "/images/projects/mould-ceiling-case-1-before.jpg",
    afterImage: "/images/projects/mould-ceiling-case-1-after.jpg",
    beforeImageAlt: "Severely mould-damaged ceiling before restoration in a Chatswood property",
    afterImageAlt: "Clean restored ceiling after mould-damaged ceiling repainting in a Chatswood property",
    description:
      "A heavily moisture-affected ceiling with visible mould staining and damaged coating was prepared, sealed, patched, and repainted to restore a clean finish.",
    materials: "Stain-blocking primer, mould-resistant ceiling paint, patching compound, sanding and surface preparation materials.",
    completionDate: "2016-05-01",
    seoTitle: "Mould-Damaged Ceiling Restoration in Chatswood | F&S Painting",
    seoDescription:
      "Before and after mould-damaged ceiling restoration project in Chatswood by F&S Painting, including preparation, sealing, and repainting.",
  },
  {
    title: "Bathroom Ceiling Mould and Peeling Paint Restoration",
    slug: "bathroom-ceiling-mould-peeling-paint-restoration",
    location: "Willoughby, NSW",
    serviceType: "Mould-Damaged Ceiling Restoration",
    beforeImage: "/images/projects/mould-ceiling-case-2-before.jpg",
    afterImage: "/images/projects/mould-ceiling-case-2-after.jpg",
    beforeImageAlt: "Bathroom ceiling with peeling paint and moisture damage before restoration",
    afterImageAlt: "Bathroom ceiling restored with a smooth clean repaint after mould damage",
    description:
      "A bathroom ceiling with peeling paint, moisture damage, and mould-affected areas was scraped back, prepared, sealed, and repainted for a smooth, clean result.",
    materials: "Moisture-resistant ceiling paint, stain-blocking primer, patching compound, sanding materials, and detailed surface preparation.",
    completionDate: "2022-09-01",
    seoTitle: "Bathroom Ceiling Mould and Peeling Paint Restoration | F&S Painting Willoughby",
    seoDescription:
      "Before and after bathroom ceiling mould and peeling paint restoration by F&S Painting in Willoughby, including surface preparation, sealing, and repainting.",
  },
  {
    title: "Interior Garage Wall Repaint in Clontarf",
    slug: "interior-garage-wall-repaint-sydney",
    location: "Clontarf, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/interior-garage-before.jpg",
    afterImage: "/images/projects/interior-garage-after.jpg",
    beforeImageAlt: "Garage interior walls before preparation and repainting in Clontarf",
    afterImageAlt: "Freshly repainted garage interior walls after preparation in Clontarf",
    description:
      "Garage interior walls were repaired, prepared, sealed, and repainted to create a cleaner, brighter, and more durable finish.",
    materials: "Interior acrylic wall paint, primer, patching compound, sanding materials, gap filler, and detailed surface preparation.",
    completionDate: "2023-10-12",
    seoTitle: "Interior Garage Wall Repaint in Clontarf | F&S Painting",
    seoDescription:
      "Before and after garage interior wall repaint project in Clontarf by F&S Painting, showing preparation, repairs, and a clean finish.",
  },
  {
    title: "Interior Stairwell Repaint in Balgowlah Heights Home",
    slug: "interior-stairwell-repaint-sydney-home",
    location: "Balgowlah Heights, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/interior-stair-before.jpg",
    afterImage: "/images/projects/interior-stair-after.jpg",
    beforeImageAlt: "Interior stairwell walls before repainting in a Balgowlah Heights home",
    afterImageAlt: "Interior stairwell walls freshly repainted in a Balgowlah Heights home",
    description:
      "A Balgowlah Heights home stairwell and surrounding walls were prepared and repainted with a fresh neutral finish for a brighter interior.",
    materials: "Washable low-sheen interior wall paint, primer, patching compound, sanding materials, and trim touch-up products.",
    completionDate: "2023-10-12",
    seoTitle: "Interior Stairwell Repaint in Balgowlah Heights Home | F&S Painting",
    seoDescription:
      "Before and after interior stairwell repaint by F&S Painting in Balgowlah Heights, including wall preparation, patching, and repainting.",
  },
  {
    title: "Commercial Office Interior Repaint",
    slug: "commercial-office-interior-repaint",
    location: "Artarmon, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/commercial-reception-before.jpg",
    afterImage: "/images/projects/commercial-reception-after.jpg",
    beforeImageAlt: "Commercial office reception area before interior repainting",
    afterImageAlt: "Commercial office reception area after fresh interior repainting",
    description:
      "A commercial reception area was prepared and repainted to create a cleaner, more professional first impression for staff and visitors.",
    materials: "Commercial interior acrylic paint, primer, patching compound, sanding materials, and masking protection.",
    completionDate: "2024-05-01",
    seoTitle: "Commercial Office Interior Repaint Artarmon | F&S Painting",
    seoDescription:
      "Before and after commercial office interior repaint project in Artarmon by F&S Painting, showing a cleaner reception finish.",
  },
  {
    title: "Office Room Interior Painting Refresh",
    slug: "office-room-interior-painting-refresh",
    location: "Chatswood, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/interior-office-room-before.jpg",
    afterImage: "/images/projects/interior-office-room-after.jpg",
    beforeImageAlt: "Office room protected and prepared before interior painting",
    afterImageAlt: "Office room after clean interior painting refresh",
    description:
      "An office room was protected, prepared, and repainted with a clean neutral finish suitable for daily commercial use.",
    materials: "Commercial low-sheen interior paint, primer where required, sanding materials, drop sheets, and masking protection.",
    completionDate: "2023-06-24",
    seoTitle: "Office Room Interior Painting Refresh Chatswood | F&S Painting",
    seoDescription:
      "Before and after office room interior painting refresh in Chatswood by F&S Painting, including preparation and commercial repainting.",
  },
  {
    title: "Chatswood Apartment Interior Repaint",
    slug: "chatswood-apartment-interior-repaint",
    location: "Chatswood, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/chatswood-apartment-before.webp",
    afterImage: "/images/projects/chatswood-apartment-after.webp",
    beforeImageAlt: "Chatswood apartment bathroom and hallway before interior repainting",
    afterImageAlt: "Chatswood apartment bathroom and hallway after interior repainting",
    description:
      "F&S Painting completed a full interior refresh for this Chatswood apartment, covering ceilings and walls together with selected doors, windows, and frames. Careful protection, scraping, minor patching, gap filling, sanding, and priming where required created a cleaner, brighter finish while selected timber elements retained their original warmth and character.",
    materials:
      "Dulux Professional Ceiling, Aquanamel in Lexicon Quarter, Total Prep in Antique White USA, Sikkens Cetol HLSe, primers where required, patching compound, sanding materials, masking, and protective coverings.",
    completionDate: "2026-07-31",
    seoTitle: "Chatswood Apartment Interior Repaint | F&S Painting",
    seoDescription:
      "A real Chatswood apartment interior repaint by F&S Painting, showing careful preparation and completed ceilings, walls, doors, windows, frames, bedrooms, hallway, and bathroom finishes.",
  },
  {
    title: "Chatswood Exterior Gable and Trim Repaint",
    slug: "chatswood-exterior-gable-trim-repaint",
    location: "Chatswood, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/chatswood-blakesley-exterior-gable-before.jpg",
    afterImage: "/images/projects/chatswood-blakesley-exterior-gable-after.jpg",
    beforeImageAlt: "Chatswood exterior gable and trim before repainting with peeling paint and preparation work",
    afterImageAlt: "Chatswood exterior gable and trim after repainting with refreshed green and cream finishes",
    description:
      "A Chatswood home exterior was prepared and repainted across the front gables, fascia, trim, roofline details, and decorative timber areas for a cleaner street presentation.",
    materials:
      "Exterior acrylic paint system, exterior trim coating, primers where required, sanding materials, fillers, masking protection, drop sheets, and detailed surface preparation.",
    completionDate: "2025-07-22",
    seoTitle: "Exterior House Painting Chatswood | F&S Painting",
    seoDescription:
      "Before and after exterior house painting in Chatswood by F&S Painting, showing gable, fascia, roofline, and trim repainting on a brick home.",
    featuredOnExteriorService: true,
  },
  {
    title: "Roseville Bedroom Wall Repaint",
    slug: "roseville-bedroom-wall-repaint",
    location: "Roseville, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/roseville-bedroom-blue-wall-before.jpg",
    afterImage: "/images/projects/roseville-bedroom-neutral-wall-after.jpg",
    beforeImageAlt: "Roseville bedroom before repainting with blue feature walls and furniture in the room",
    afterImageAlt: "Roseville bedroom after repainting with neutral walls, white trim, and a cleaner finish",
    description:
      "A Roseville bedroom was prepared and repainted from a strong blue feature-wall finish to a softer neutral colour, with trim and wall details refreshed for a cleaner interior presentation.",
    materials:
      "Interior low-sheen wall paint, trim enamel, patching compound, sanding materials, masking tape, and drop-sheet protection.",
    completionDate: "2023-03-04",
    seoTitle: "Bedroom Painting Roseville | F&S Painting",
    seoDescription:
      "Before and after bedroom painting in Roseville by F&S Painting, showing blue feature walls refreshed with a clean neutral interior finish.",
  },
  {
    title: "Roseville Ornate Ceiling Restoration",
    slug: "roseville-ornate-ceiling-restoration",
    location: "Roseville, NSW",
    serviceType: "Ceiling Restoration",
    beforeImage: "/images/projects/roseville-ornate-ceiling-before.jpg",
    afterImage: "/images/projects/roseville-ornate-ceiling-after.jpg",
    beforeImageAlt: "Roseville ornate ceiling before restoration with peeling paint and damaged coating",
    afterImageAlt: "Roseville ornate ceiling after restoration and repainting with a smooth clean finish",
    description:
      "An ornate Roseville ceiling with peeling paint and damaged coating was prepared, repaired, sealed where required, and repainted to restore the decorative ceiling detail.",
    materials:
      "Ceiling paint, stain-blocking primer where required, patching compound, sanding materials, scraping tools, masking protection, and detailed ceiling preparation.",
    completionDate: "2023-03-04",
    seoTitle: "Ornate Ceiling Restoration Roseville | F&S Painting",
    seoDescription:
      "Before and after ornate ceiling restoration in Roseville by F&S Painting, showing peeling ceiling paint repaired and repainted.",
  },
  {
    title: "Lindfield Exterior Window and Trim Repaint",
    slug: "lindfield-exterior-window-trim-repaint",
    location: "Lindfield, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/lindfield-window-trim-before.jpg",
    afterImage: "/images/projects/lindfield-window-trim-after.png",
    beforeImageAlt: "Lindfield exterior timber window and trim before repainting",
    afterImageAlt: "Lindfield exterior timber window and trim after fresh repainting",
    description:
      "A Lindfield exterior window, door, trim, verandah, and rear wall area was prepared and repainted to refresh the timber details and improve the overall exterior presentation.",
    materials:
      "Exterior trim paint, timber preparation materials, primer where required, sanding materials, gap filler, masking protection, and detailed surface preparation.",
    completionDate: "2025-12-10",
    seoTitle: "Lindfield Exterior Window and Trim Repaint | F&S Painting",
    seoDescription:
      "Before and after Lindfield exterior window, door, and trim repaint by F&S Painting, showing refreshed timber details and exterior finishes.",
  },
  {
    title: "East Lindfield Exterior House Repaint",
    slug: "east-lindfield-exterior-house-repaint",
    location: "East Lindfield, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/east-lindfield-exterior-outbuilding-before.jpg",
    afterImage: "/images/projects/east-lindfield-exterior-outbuilding-after.jpg",
    beforeImageAlt: "East Lindfield exterior outbuilding before repainting with weathered cladding and trim",
    afterImageAlt: "East Lindfield exterior outbuilding after repainting with fresh wall, roofline, and trim finishes",
    description:
      "An East Lindfield home exterior was prepared and repainted across the outbuilding, facade, verandah, balcony, side walls, eaves, gutters, trims, and detailed timber areas for a clean updated finish.",
    materials:
      "Exterior acrylic paint system, exterior trim coating, primers where required, sanding materials, fillers, masking protection, drop sheets, and detailed surface preparation.",
    completionDate: "2025-12-05",
    seoTitle: "Exterior House Painting East Lindfield | F&S Painting",
    seoDescription:
      "Before and after exterior house painting in East Lindfield by F&S Painting, showing exterior cladding, facade, verandah, eaves, gutters, and trim repainting.",
  },
  {
    title: "Blakehurst Interior House Painting",
    slug: "blakehurst-interior-house-painting",
    location: "Blakehurst, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/blakehurst-kitchen-before.jpg",
    afterImage: "/images/projects/blakehurst-kitchen-after.jpg",
    beforeImageAlt: "Blakehurst kitchen and dining area during preparation before interior repainting",
    afterImageAlt: "Blakehurst kitchen and dining area after fresh interior repainting",
    description:
      "This Blakehurst interior repaint refreshed the kitchen and adjoining living spaces with clean wall and ceiling finishes, while protecting cabinetry, lighting, and surrounding surfaces during preparation.",
    materials: "Interior low-sheen wall paint, ceiling paint, primer where needed, patching compound, sanding materials, masking, and drop-sheet protection.",
    completionDate: "2024-05-12",
    seoTitle: "Blakehurst Interior House Painting | F&S Painting",
    seoDescription:
      "Before and after interior house painting project in Blakehurst by F&S Painting, including kitchen, dining, stairwell, and living area finishes.",
  },
  {
    title: "Exterior House Painting Refresh",
    slug: "exterior-house-painting-refresh",
    location: "Earlwood, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/exterior-house-main-before.jpg",
    afterImage: "/images/projects/exterior-house-main-after.jpg",
    beforeImageAlt: "Front of an Earlwood house exterior before repainting",
    afterImageAlt: "Front of an Earlwood house exterior after repainting with fresh trim and facade finishes",
    description:
      "A full exterior house repaint refreshed the front facade, trim, gables, and painted surfaces for a sharper street presentation.",
    materials: "Exterior acrylic paint system, exterior primer, sealant, sanding materials, masking protection, and weather-exposed surface preparation products.",
    completionDate: "2024-12-01",
    seoTitle: "Exterior House Painting Refresh Earlwood | F&S Painting",
    seoDescription:
      "Before and after exterior house painting refresh in Earlwood by F&S Painting, including surface preparation and exterior repainting.",
  },
  {
    title: "North Willoughby Timber Window Painting",
    slug: "exterior-facade-trim-repaint",
    location: "North Willoughby, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/exterior-facade-before.jpg",
    afterImage: "/images/projects/exterior-facade-after.jpg",
    beforeImageAlt: "North Willoughby timber window surrounds and exterior trim before repainting",
    afterImageAlt: "North Willoughby timber window surrounds and exterior trim after repainting",
    description:
      "Timber window surrounds, exterior trim, facade panels, posts, and entry details were prepared and repainted for a cleaner, brighter finish.",
    materials: "Exterior acrylic paint, exterior primer, gap sealant, sanding materials, and detailed trim preparation.",
    completionDate: "2024-06-01",
    seoTitle: "Timber Window Painting North Willoughby | F&S Painting",
    seoDescription:
      "Before and after timber window surrounds and exterior trim repainting by F&S Painting in North Willoughby, showing a refreshed exterior finish.",
  },
  {
    title: "North Willoughby Exterior House Repaint",
    slug: "north-willoughby-exterior-house-repaint",
    location: "North Willoughby, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/north-willoughby-exterior-house-repaint-before.jpg",
    afterImage: "/images/projects/north-willoughby-exterior-house-repaint-after.jpg",
    beforeImageAlt: "North Willoughby house exterior before repainting",
    afterImageAlt: "North Willoughby house exterior after repainting",
    description:
      "Exterior walls, facade details, trim, windows, eaves, verandah, and covered areas were carefully prepared and repainted for a consistent finished result.",
    materials:
      "Exterior acrylic paint, exterior primer, gap sealant, sanding materials, and detailed surface preparation.",
    completionDate: "2024-02-23",
    seoTitle: "Exterior House Repaint North Willoughby | F&S Painting",
    seoDescription:
      "Before and after exterior house repaint in North Willoughby by F&S Painting, showing finished facade, trim, window, eaves, verandah, and side-wall details.",
    featuredOnExteriorService: true,
  },
  {
    title: "Exterior Gable and Roofline Painting",
    slug: "exterior-gable-roofline-painting",
    location: "North Willoughby, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/north-willoughby-gable-roofline-before.jpg",
    afterImage: "/images/projects/north-willoughby-gable-roofline-after.jpg",
    beforeImageAlt: "North Willoughby gable timber detail and roofline before exterior repainting",
    afterImageAlt: "North Willoughby gable timber detail and roofline after exterior repainting",
    description:
      "High exterior gable and roofline areas were accessed carefully, prepared, primed where needed, and repainted with a durable exterior finish.",
    materials: "Exterior trim paint, primer, sanding materials, fillers, sealant, and ladder-access preparation materials.",
    completionDate: "2024-08-01",
    seoTitle: "Exterior Gable and Roofline Painting North Willoughby | F&S Painting",
    seoDescription:
      "Before and after exterior gable and roofline painting in North Willoughby by F&S Painting, including preparation and trim repainting.",
  },
  {
    title: "Exterior Boundary Wall Repaint",
    slug: "exterior-boundary-wall-repaint",
    location: "Earlwood, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/exterior-boundary-wall-before.jpg",
    afterImage: "/images/projects/exterior-boundary-wall-after.jpg",
    beforeImageAlt: "Boundary wall before exterior painting and coating",
    afterImageAlt: "Boundary wall after exterior painting with grey weather-resistant coating",
    description:
      "A boundary wall was patched, prepared, and coated with a weather-resistant exterior finish for a cleaner look and better protection.",
    materials: "Dulux Weathershield exterior paint, masonry preparation materials, patching compound, primer, and rollers.",
    completionDate: "2024-12-01",
    seoTitle: "Exterior Boundary Wall Repaint Earlwood | F&S Painting",
    seoDescription:
      "Before and after exterior boundary wall repaint by F&S Painting in Earlwood, showing masonry preparation and weather-resistant coating.",
  },
  {
    title: "Exterior Shed Door and Trim Repaint",
    slug: "exterior-shed-door-trim-repaint",
    location: "Earlwood, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/exterior-shed-before.jpg",
    afterImage: "/images/projects/exterior-shed-after.jpg",
    beforeImageAlt: "Exterior shed doors and trim before repainting",
    afterImageAlt: "Exterior shed doors and trim after repainting in charcoal grey",
    description:
      "Weathered shed doors and trim were prepared and repainted in a charcoal grey finish to improve durability and appearance.",
    materials: "Exterior timber paint, primer, sanding materials, patching products, and weather-exposed trim preparation materials.",
    completionDate: "2024-12-01",
    seoTitle: "Exterior Shed Door and Trim Repaint Earlwood | F&S Painting",
    seoDescription:
      "Before and after exterior shed door and trim repaint in Earlwood by F&S Painting, showing preparation and charcoal grey finish.",
  },
  {
    title: "Exterior Balcony Deck and Lattice Repaint",
    slug: "exterior-balcony-deck-lattice-repaint",
    location: "Frenchs Forest, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/exterior-balcony-deck-before.jpg",
    afterImage: "/images/projects/exterior-balcony-deck-after.jpg",
    beforeImageAlt: "Balcony decking and lattice before exterior repainting in Frenchs Forest",
    afterImageAlt: "Balcony decking and lattice after exterior repainting in Frenchs Forest",
    description:
      "Balcony decking and lattice areas were prepared and repainted for a cleaner finish with better weather resistance.",
    materials: "Exterior timber coating, exterior acrylic paint, sanding materials, surface cleaner, primer, and weather-exposed preparation products.",
    completionDate: "2023-03-01",
    seoTitle: "Exterior Balcony Deck and Lattice Repaint Frenchs Forest | F&S Painting",
    seoDescription:
      "Before and after exterior balcony deck and lattice repaint project in Frenchs Forest by F&S Painting, showing preparation and fresh exterior coating.",
  },
  {
    title: "Fire Exit Door Repaint in Sydney",
    slug: "fire-exit-door-repaint-sydney",
    location: "Sydney, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/interior-fire-door-before.jpg",
    afterImage: "/images/projects/interior-fire-door-after.jpg",
    beforeImageAlt: "Commercial fire exit door before repainting in Sydney",
    afterImageAlt: "Commercial fire exit door after repainting in a black finish",
    description:
      "A marked commercial fire exit door and surrounding trim were prepared and repainted for a cleaner, more durable finish.",
    materials: "Commercial enamel paint, metal primer, sanding materials, masking protection, and detailed door preparation.",
    completionDate: "2024-08-01",
    seoTitle: "Fire Exit Door Repaint Sydney | F&S Painting",
    seoDescription:
      "Before and after commercial fire exit door repaint in Sydney by F&S Painting, showing preparation and a clean durable finish.",
  },
  {
    title: "Commercial Salon Interior Repaint",
    slug: "commercial-salon-interior-repaint",
    location: "Sydney, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/commercial-salon-interior-before.jpg",
    afterImage: "/images/projects/commercial-salon-interior-after.jpg",
    beforeImageAlt: "Commercial salon interior during preparation before repainting",
    afterImageAlt: "Commercial salon interior after repainting with a clean modern finish",
    description:
      "A commercial salon interior was patched, prepared, and repainted to create a cleaner and more polished customer-facing space.",
    materials: "Commercial interior acrylic paint, primer, patching compound, sanding materials, masking, and drop sheet protection.",
    completionDate: "2012-05-01",
    seoTitle: "Commercial Salon Interior Repaint Sydney | F&S Painting",
    seoDescription:
      "Before and after commercial salon interior repaint in Sydney by F&S Painting, including wall preparation and professional repainting.",
  },
  {
    title: "Interior Feature Wall and Ceiling Repaint",
    slug: "interior-feature-wall-ceiling-repaint",
    location: "Marrickville, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/interior-feature-wall-before.jpg",
    afterImage: "/images/projects/interior-feature-wall-after.jpg",
    beforeImageAlt: "Interior feature wall and ceiling before repainting in Sydney",
    afterImageAlt: "Interior feature wall and ceiling after repainting with a darker ceiling finish",
    description:
      "An interior feature wall and ceiling area was prepared and repainted to refresh the room and create a cleaner contrast finish.",
    materials: "Interior wall paint, ceiling paint, primer, patching compound, sanding materials, and masking protection.",
    completionDate: "2012-04-01",
    seoTitle: "Interior Feature Wall and Ceiling Repaint Sydney | F&S Painting",
    seoDescription:
      "Before and after interior feature wall and ceiling repaint project in Sydney by F&S Painting, showing preparation and a refreshed finish.",
  },
  {
    title: "Mosman Exterior Entry Repaint",
    slug: "mosman-exterior-entry-repaint",
    location: "Mosman, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/mosman-exterior-entry-before.jpg",
    afterImage: "/images/projects/mosman-exterior-entry-after.jpg",
    beforeImageAlt: "Mosman exterior entry trim before repainting",
    afterImageAlt: "Mosman exterior entry trim after repainting",
    description:
      "Exterior entry trim, window surrounds, and decorative mouldings were prepared and repainted to refresh the front presentation.",
    materials: "Exterior acrylic paint, trim enamel, primer, fillers, sanding materials, and weather-exposed preparation products.",
    completionDate: "2012-07-01",
    seoTitle: "Mosman Exterior Entry Repaint | F&S Painting Sydney",
    seoDescription:
      "Before and after Mosman exterior entry repaint by F&S Painting, including trim preparation, window surrounds, and exterior repainting.",
  },
  {
    title: "North Strathfield Exterior Window Restoration",
    slug: "north-strathfield-exterior-window-restoration",
    location: "North Strathfield, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/north-strathfield-window-before.jpg",
    afterImage: "/images/projects/north-strathfield-window-after.jpg",
    beforeImageAlt: "Weathered exterior timber window before restoration in North Strathfield",
    afterImageAlt: "Exterior timber window after restoration and repainting in North Strathfield",
    description:
      "Weathered timber window frames were scraped, sanded, filled, primed, and repainted to protect the surface and improve appearance.",
    materials: "Exterior timber primer, exterior enamel, wood filler, sanding materials, scraper preparation, and sealant.",
    completionDate: "2012-03-01",
    seoTitle: "North Strathfield Exterior Window Restoration | F&S Painting",
    seoDescription:
      "Before and after exterior timber window restoration in North Strathfield by F&S Painting, including scraping, priming, and repainting.",
  },
  {
    title: "North Strathfield Exterior Wall and Window Repaint",
    slug: "north-strathfield-exterior-wall-window-repaint",
    location: "North Strathfield, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/north-strathfield-exterior-before.jpg",
    afterImage: "/images/projects/north-strathfield-exterior-after.jpg",
    beforeImageAlt: "North Strathfield exterior wall and windows before repainting",
    afterImageAlt: "North Strathfield exterior wall and windows after repainting",
    description:
      "An older exterior wall and timber window area was repaired, prepared, and repainted for a cleaner and more weather-resistant finish.",
    materials: "Exterior acrylic paint, exterior timber coating, primer, fillers, sanding materials, and surface preparation products.",
    completionDate: "2012-03-01",
    seoTitle: "North Strathfield Exterior Wall and Window Repaint | F&S Painting",
    seoDescription:
      "Before and after exterior wall and window repaint in North Strathfield by F&S Painting, showing repair, preparation, and repainting.",
  },
  {
    title: "Concord West Eaves and Fascia Repaint",
    slug: "concord-west-eaves-fascia-repaint",
    location: "Concord West, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/concord-west-eaves-before.jpg",
    afterImage: "/images/projects/concord-west-eaves-after.jpg",
    beforeImageAlt: "Concord West eaves and fascia before exterior repainting",
    afterImageAlt: "Concord West eaves and fascia after exterior repainting",
    description:
      "Weathered eaves and fascia areas were repaired, prepared, sealed, and repainted to improve durability and presentation.",
    materials: "Exterior acrylic paint, primer, gap filler, patching compound, sanding materials, and eaves preparation products.",
    completionDate: "2012-04-01",
    seoTitle: "Concord West Eaves and Fascia Repaint | F&S Painting",
    seoDescription:
      "Before and after Concord West eaves and fascia repaint by F&S Painting, including surface preparation, sealing, and exterior repainting.",
  },
  {
    title: "Concord West Exterior Soffit and Trim Repaint",
    slug: "concord-west-exterior-soffit-trim-repaint",
    location: "Concord West, NSW",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/concord-west-fascia-before.jpg",
    afterImage: "/images/projects/concord-west-fascia-after.jpg",
    beforeImageAlt: "Concord West exterior soffit and trim before repainting",
    afterImageAlt: "Concord West exterior soffit and trim after repainting",
    description:
      "Exterior soffit, fascia, and trim areas were prepared and repainted to refresh the property and protect exposed surfaces.",
    materials: "Exterior trim paint, exterior primer, sanding materials, gap filler, patching compound, and masking protection.",
    completionDate: "2012-04-01",
    seoTitle: "Concord West Exterior Soffit and Trim Repaint | F&S Painting",
    seoDescription:
      "Before and after exterior soffit and trim repaint in Concord West by F&S Painting, showing preparation and fresh exterior finish.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
