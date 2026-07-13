import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getProjectList } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";

const path = "/services/ceiling-repainting";

export const metadata: Metadata = pageMetadata({
  title: "Ceiling Repainting & Restoration Sydney | F&S Painting",
  description:
    "Ceiling repainting and restoration in Sydney for peeling paint, stains, moisture damage, mould-affected coatings, ornate ceilings, patching, and smooth finishes.",
  path,
  image: "/images/projects/roseville-ornate-ceiling-after.jpg",
});

const faqs = [
  {
    question: "Can you repaint peeling or damaged ceilings?",
    answer:
      "Yes. We can inspect peeling coatings, stains, cracks, patching, and other surface damage, then recommend the preparation and coating steps required for the agreed scope.",
  },
  {
    question: "Can you paint a ceiling affected by mould or moisture?",
    answer:
      "The moisture cause should be identified and resolved first. We can then prepare the affected coating, clean or treat the surface as appropriate, seal stains where required, and repaint.",
  },
  {
    question: "Do you restore ornate ceilings?",
    answer:
      "Yes. Ornate and decorative ceilings can be carefully prepared and repainted with attention to the existing mouldings and ceiling details.",
  },
  {
    question: "Do you provide ceiling repainting quotes?",
    answer:
      "Yes. We inspect the ceiling condition, height, access, damage, preparation needs, and room protection requirements before confirming the quote.",
  },
];

export default async function CeilingRepaintingPage() {
  const projects = await getProjectList();
  const preferredSlugs = [
    "bathroom-ceiling-peeling-restoration-by-painting",
    "roseville-ornate-ceiling-restoration",
    "mould-damaged-ceiling-restoration-sydney",
  ];
  const relatedProjects = preferredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <ServiceDetailPage
      name="Ceiling Repainting"
      path={path}
      eyebrow="Ceiling Repainting Sydney"
      heading="Ceiling repainting for clean, even finishes"
      intro="F&S Painting prepares and repaints standard, bathroom, moisture-affected, peeling, stained, patched, and ornate ceilings across Sydney."
      description="Ceiling repainting and restoration for Sydney homes and properties, including peeling paint, stains, moisture damage, mould-affected coatings, and ornate ceilings."
      heroImage="/images/projects/roseville-ornate-ceiling-after.jpg"
      heroImageAlt="Roseville ornate ceiling and bedroom after careful restoration and repainting"
      heroImagePosition="center 35%"
      quoteLabel="Get a Ceiling Repainting Quote"
      workTitle="Preparation matched to the ceiling condition"
      workIntro="A lasting ceiling finish depends on resolving moisture causes and completing the right scraping, patching, sealing, priming, and repainting steps."
      features={[
        "Standard ceiling and cornice repainting",
        "Peeling, flaking, stained, and patchy ceiling coatings",
        "Bathroom and moisture-affected ceiling restoration",
        "Mould-affected coating preparation after the moisture cause is resolved",
        "Ornate and decorative ceiling repainting",
        "Scraping, sanding, patching, stain blocking, sealing, and priming",
      ]}
      projects={relatedProjects}
      faqs={faqs}
      anchorId="mould-damaged-ceiling-restoration"
    />
  );
}
