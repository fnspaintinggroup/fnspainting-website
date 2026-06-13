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
    title: "Interior Wall Repaint in Sydney Home",
    slug: "interior-wall-repaint-sydney-home",
    location: "Sydney home",
    serviceType: "Interior Painting",
    beforeImage: "/images/projects/interior-repaint-before.svg",
    afterImage: "/images/projects/interior-repaint-after.svg",
    beforeImageAlt: "Scuffed interior wall before repainting in a Sydney home",
    afterImageAlt: "Freshly repainted interior wall in a Sydney home",
    description:
      "Interior walls were patched, sanded, and repainted with a clean neutral finish to brighten the room and improve day-to-day durability.",
    materials: "Low-sheen interior wall paint, gap filler, patching compound, primer where required, and trim touch-up materials.",
    completionDate: "2026-02-16",
    seoTitle: "Interior Wall Repaint in Sydney Home | F&S Painting",
    seoDescription:
      "Before and after interior wall repaint project in a Sydney home, showing preparation, low-sheen paint, and a clean finish.",
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
