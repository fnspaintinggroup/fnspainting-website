import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getProjectList } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";

const path = "/services/strata-painting";

export const metadata: Metadata = pageMetadata({
  title: "Strata Painting Sydney",
  description:
    "Licensed strata painters in Sydney for common areas, hallways, stairwells, lobbies, facades, balconies, and planned maintenance painting.",
  path,
  image: "/images/projects/dee-why-strata-hallway-after.jpg",
});

const faqs = [
  {
    question: "What areas can be included in strata painting?",
    answer:
      "Strata painting can include lobbies, hallways, stairwells, ceilings, doors, common rooms, external walls, balconies, eaves, fascia, and other agreed shared areas.",
  },
  {
    question: "Can strata painting be staged around residents?",
    answer:
      "Yes. We can plan access and work stages around occupied buildings, agreed working hours, common-area use, and building management requirements.",
  },
  {
    question: "Do you handle preparation and repairs?",
    answer:
      "Yes. The agreed scope can include cleaning, scraping, sanding, patching, sealing, priming, and other preparation required before repainting.",
  },
  {
    question: "Do you provide strata painting quotes?",
    answer:
      "Yes. We provide site-based quotes after checking the building areas, access, surface condition, preparation needs, and planned timing.",
  },
];

export default async function StrataPaintingPage() {
  const projects = await getProjectList();
  const relatedProjects = projects
    .filter((project) => project.serviceType === "Strata Painting")
    .slice(0, 3);

  return (
    <ServiceDetailPage
      name="Strata Painting"
      path={path}
      eyebrow="Strata Painting Sydney"
      heading="Strata painting planned around shared spaces"
      intro="F&S Painting repaints common areas and exterior strata surfaces with careful preparation, access planning, and tidy work practices."
      description="Strata painting for Sydney common areas, lobbies, hallways, stairwells, ceilings, doors, facades, balconies, and planned maintenance work."
      heroImage="/images/projects/dee-why-strata-hallway-after.jpg"
      heroImageAlt="Freshly repainted Dee Why strata hallway with white walls, detailed cornices, and dark carpet"
      heroLayout="contained-right"
      quoteLabel="Get a Strata Painting Quote"
      workTitle="Practical repainting for occupied strata properties"
      workIntro="We plan the scope around building access, residents, shared areas, surface condition, and the agreed maintenance schedule."
      features={[
        "Lobbies, hallways, stairwells, ceilings, and common rooms",
        "Entry doors, fire doors, trims, and shared-area details",
        "Exterior walls, balconies, eaves, fascia, and soffits",
        "Cleaning, scraping, patching, sealing, and priming",
        "Staged work and access planning for occupied buildings",
        "Clear scope, progress communication, and tidy handover",
      ]}
      projects={relatedProjects}
      faqs={faqs}
    />
  );
}
