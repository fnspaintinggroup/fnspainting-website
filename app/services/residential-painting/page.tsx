import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getProjectList } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";

const path = "/services/residential-painting";

export const metadata: Metadata = pageMetadata({
  title: "Residential Painting Sydney | F&S Painting",
  description:
    "Licensed residential painters in Sydney for houses, apartments, interiors, exteriors, ceilings, trims, and complete repaints. Free on-site quotes.",
  path,
  image: "/images/projects/east-lindfield-exterior-front-facade-finish.jpg",
});

const faqs = [
  {
    question: "What residential painting work do you provide?",
    answer:
      "We paint houses, apartments, units, interiors, exteriors, walls, ceilings, trims, doors, feature areas, and other surfaces included in an agreed residential repaint scope.",
  },
  {
    question: "Can you paint while we are living in the house?",
    answer:
      "Yes. We protect floors, furniture, and fixtures and can plan the work in stages to reduce disruption while you remain at home.",
  },
  {
    question: "Can residential painting be completed before we move in?",
    answer:
      "Yes. Share your move-in date early and we will plan the preparation and painting schedule around the available access and agreed scope.",
  },
  {
    question: "Do you provide free residential painting quotes?",
    answer:
      "Yes. We provide free on-site quotes so we can inspect the surfaces, access, preparation needs, and timing before confirming the estimate.",
  },
];

export default async function ResidentialPaintingPage() {
  const projects = await getProjectList();
  const preferredSlugs = [
    "east-lindfield-exterior-house-repaint",
    "chatswood-apartment-interior-repaint",
    "roseville-bedroom-wall-repaint",
  ];
  const relatedProjects = preferredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <ServiceDetailPage
      name="Residential Painting"
      path={path}
      eyebrow="Residential Painting Sydney"
      heading="Residential painting for homes that feel renewed"
      intro="F&S Painting prepares and repaints Sydney houses, apartments, interiors, exteriors, ceilings, trims, and detailed residential surfaces."
      description="Residential painting for Sydney houses, apartments, units, interiors, exteriors, ceilings, trims, doors, and complete repaints."
      quoteLabel="Get a Residential Painting Quote"
      workTitle="Careful painting for lived-in and move-in-ready homes"
      workIntro="Each quote considers the condition of the property, protection requirements, preparation, access, paint system, and timing."
      features={[
        "House, apartment, and unit painting",
        "Interior walls, ceilings, trims, doors, and feature areas",
        "Exterior facades, eaves, fascia, gutters, fences, and decks",
        "Surface repairs, sanding, patching, sealing, and priming",
        "Dulux paint systems selected for the surface and room use",
        "Staged work planning to reduce disruption at home",
      ]}
      projects={relatedProjects}
      faqs={faqs}
    />
  );
}
