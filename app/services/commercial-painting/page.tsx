import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getProjectList } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";

const path = "/services/commercial-painting";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Painting Sydney | F&S Painting",
  description:
    "Commercial painters in Sydney for offices, shops, salons, medical spaces, warehouses, facades, interiors, and planned repainting. Free quotes.",
  path,
  image: "/images/projects/commercial-medical-reception-hero.png",
});

const faqs = [
  {
    question: "What commercial properties do you paint?",
    answer:
      "We paint offices, shops, salons, medical spaces, warehouses, reception areas, commercial interiors, facades, doors, and other agreed business areas.",
  },
  {
    question: "Can commercial painting be planned around business hours?",
    answer:
      "Where the scope and access allow, we can discuss staged scheduling that reduces disruption to staff, customers, tenants, and daily operations.",
  },
  {
    question: "Can you repaint both interiors and exteriors?",
    answer:
      "Yes. Commercial work can include interior walls and ceilings as well as exterior facades, entry areas, roller doors, trims, and other surfaces.",
  },
  {
    question: "Do you provide commercial painting quotes?",
    answer:
      "Yes. We inspect the site, access, surface condition, preparation requirements, operating constraints, and timing before confirming the quote.",
  },
];

export default async function CommercialPaintingPage() {
  const projects = await getProjectList();
  const relatedProjects = projects
    .filter((project) => project.serviceType === "Commercial Painting")
    .slice(0, 3);

  return (
    <ServiceDetailPage
      name="Commercial Painting"
      path={path}
      eyebrow="Commercial Painting Sydney"
      heading="Commercial painting for professional spaces"
      intro="F&S Painting prepares and repaints offices, shops, salons, medical spaces, warehouses, interiors, facades, entries, and commercial details across Sydney."
      description="Commercial painting for Sydney offices, shops, salons, medical spaces, warehouses, interiors, facades, entries, and business properties."
      heroImage="/images/projects/commercial-medical-reception-hero.png"
      heroImageAlt="Parramatta Medical Centre reception and waiting area after commercial interior painting"
      quoteLabel="Get a Commercial Painting Quote"
      workTitle="Painting planned around the property and its operation"
      workIntro="Commercial quotes consider access, customers and staff, working areas, preparation, coating durability, and the required completion timing."
      features={[
        "Offices, shops, salons, medical spaces, and warehouses",
        "Reception areas, meeting rooms, corridors, and workspaces",
        "Commercial facades, entries, doors, trims, and roller doors",
        "Surface repairs, sanding, patching, sealing, and priming",
        "Durable coating choices for busy commercial areas",
        "Staged scheduling and clean handover planning",
      ]}
      projects={relatedProjects}
      faqs={faqs}
    />
  );
}
