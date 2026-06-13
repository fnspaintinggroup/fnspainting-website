export type Project = {
  title: string;
  slug: string;
  location: string;
  serviceType: string;
  beforeImage: string;
  afterImage: string;
  beforeImageAlt: string;
  afterImageAlt: string;
  description: string;
  materials: string;
  completionDate: string;
  seoTitle: string;
  seoDescription: string;
};

export const projects: Project[] = [
  {
    title: "Mould-Damaged Ceiling Restoration in Sydney",
    slug: "mould-damaged-ceiling-restoration-sydney",
    location: "Sydney, NSW",
    serviceType: "Mould-Damaged Ceiling Restoration",
    beforeImage: "/images/projects/mould-ceiling-case-1-before.jpg",
    afterImage: "/images/projects/mould-ceiling-case-1-after.jpg",
    beforeImageAlt: "Severely mould-damaged ceiling before restoration in a Sydney property",
    afterImageAlt: "Clean restored ceiling after mould-damaged ceiling repainting in a Sydney property",
    description:
      "A heavily moisture-affected ceiling with visible mould staining and damaged coating was prepared, sealed, patched, and repainted to restore a clean finish.",
    materials: "Stain-blocking primer, mould-resistant ceiling paint, patching compound, sanding and surface preparation materials.",
    completionDate: "2026-01-24",
    seoTitle: "Mould-Damaged Ceiling Restoration in Sydney | F&S Painting",
    seoDescription:
      "Before and after mould-damaged ceiling restoration project in Sydney by F&S Painting, including preparation, sealing, and repainting.",
  },
  {
    title: "Bathroom Ceiling Mould and Peeling Paint Restoration",
    slug: "bathroom-ceiling-mould-peeling-paint-restoration",
    location: "Sydney, NSW",
    serviceType: "Mould-Damaged Ceiling Restoration",
    beforeImage: "/images/projects/mould-ceiling-case-2-before.jpg",
    afterImage: "/images/projects/mould-ceiling-case-2-after.jpg",
    beforeImageAlt: "Bathroom ceiling with peeling paint and moisture damage before restoration",
    afterImageAlt: "Bathroom ceiling restored with a smooth clean repaint after mould damage",
    description:
      "A bathroom ceiling with peeling paint, moisture damage, and mould-affected areas was scraped back, prepared, sealed, and repainted for a smooth, clean result.",
    materials: "Moisture-resistant ceiling paint, stain-blocking primer, patching compound, sanding materials, and detailed surface preparation.",
    completionDate: "2026-02-08",
    seoTitle: "Bathroom Ceiling Mould and Peeling Paint Restoration | F&S Painting Sydney",
    seoDescription:
      "Before and after bathroom ceiling mould and peeling paint restoration by F&S Painting in Sydney, including surface preparation, sealing, and repainting.",
  },
  {
    title: "Interior Garage Wall Repaint in Sydney",
    slug: "interior-garage-wall-repaint-sydney",
    location: "Sydney, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/interior-garage-before.jpg",
    afterImage: "/images/projects/interior-garage-after.jpg",
    beforeImageAlt: "Garage interior walls before preparation and repainting in Sydney",
    afterImageAlt: "Freshly repainted garage interior walls after preparation in Sydney",
    description:
      "Garage interior walls were repaired, prepared, sealed, and repainted to create a cleaner, brighter, and more durable finish.",
    materials: "Interior acrylic wall paint, primer, patching compound, sanding materials, gap filler, and detailed surface preparation.",
    completionDate: "2023-10-12",
    seoTitle: "Interior Garage Wall Repaint in Sydney | F&S Painting",
    seoDescription:
      "Before and after garage interior wall repaint project in Sydney by F&S Painting, showing preparation, repairs, and a clean finish.",
  },
  {
    title: "Interior Stairwell Repaint in Sydney Home",
    slug: "interior-stairwell-repaint-sydney-home",
    location: "Sydney, NSW",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/interior-stair-before.jpg",
    afterImage: "/images/projects/interior-stair-after.jpg",
    beforeImageAlt: "Interior stairwell walls before repainting in a Sydney home",
    afterImageAlt: "Interior stairwell walls freshly repainted in a Sydney home",
    description:
      "A Sydney home stairwell and surrounding walls were prepared and repainted with a fresh neutral finish for a brighter interior.",
    materials: "Washable low-sheen interior wall paint, primer, patching compound, sanding materials, and trim touch-up products.",
    completionDate: "2023-10-12",
    seoTitle: "Interior Stairwell Repaint in Sydney Home | F&S Painting",
    seoDescription:
      "Before and after interior stairwell repaint by F&S Painting in Sydney, including wall preparation, patching, and repainting.",
  },
  {
    title: "Commercial Office Interior Repaint",
    slug: "commercial-office-interior-repaint",
    location: "Sydney, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/commercial-reception-before.jpg",
    afterImage: "/images/projects/commercial-reception-after.jpg",
    beforeImageAlt: "Commercial office reception area before interior repainting",
    afterImageAlt: "Commercial office reception area after fresh interior repainting",
    description:
      "A commercial reception area was prepared and repainted to create a cleaner, more professional first impression for staff and visitors.",
    materials: "Commercial interior acrylic paint, primer, patching compound, sanding materials, and masking protection.",
    completionDate: "2024-05-01",
    seoTitle: "Commercial Office Interior Repaint Sydney | F&S Painting",
    seoDescription:
      "Before and after commercial office interior repaint project in Sydney by F&S Painting, showing a cleaner reception finish.",
  },
  {
    title: "Office Room Interior Painting Refresh",
    slug: "office-room-interior-painting-refresh",
    location: "Sydney, NSW",
    serviceType: "Commercial Painting",
    beforeImage: "/images/projects/interior-office-room-before.jpg",
    afterImage: "/images/projects/interior-office-room-after.jpg",
    beforeImageAlt: "Office room protected and prepared before interior painting",
    afterImageAlt: "Office room after clean interior painting refresh",
    description:
      "An office room was protected, prepared, and repainted with a clean neutral finish suitable for daily commercial use.",
    materials: "Commercial low-sheen interior paint, primer where required, sanding materials, drop sheets, and masking protection.",
    completionDate: "2023-06-24",
    seoTitle: "Office Room Interior Painting Refresh Sydney | F&S Painting",
    seoDescription:
      "Before and after office room interior painting refresh in Sydney by F&S Painting, including preparation and commercial repainting.",
  },
  {
    title: "Exterior House Painting Refresh",
    slug: "exterior-house-painting-refresh",
    location: "Sydney suburbs",
    serviceType: "Exterior Painting",
    beforeImage: "/images/projects/exterior-refresh-before.svg",
    afterImage: "/images/projects/exterior-refresh-after.svg",
    beforeImageAlt: "Faded house exterior before painting refresh",
    afterImageAlt: "Freshly painted exterior house after painting refresh",
    description:
      "A weathered exterior was washed, prepared, and repainted to refresh street appeal and improve protection against Sydney conditions.",
    materials: "Exterior acrylic paint system, exterior primer, sealant, sanding materials, and weather-exposed surface preparation products.",
    completionDate: "2026-03-22",
    seoTitle: "Exterior House Painting Refresh | F&S Painting Sydney",
    seoDescription:
      "Before and after exterior house painting refresh by F&S Painting, including surface preparation and exterior paint system details.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
