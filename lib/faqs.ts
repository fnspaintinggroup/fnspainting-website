import type { FaqItem } from "@/components/FaqSection";
import { siteUrl } from "@/lib/seo";

export const homeFaqs: FaqItem[] = [
  {
    question: "Do you provide free painting quotes in Sydney?",
    answer:
      "Yes. F&S Painting provides free painting quotes across Sydney for residential, strata, and commercial projects. Share the property type, areas to be painted, and any photos so we can give practical advice before the job starts.",
  },
  {
    question: "Are F&S Painting licensed and insured?",
    answer:
      "Yes. F&S Painting is licensed and fully insured, including workers compensation and public liability cover. These details are shown on the website so customers can feel confident before booking painting work.",
  },
  {
    question: "Do you paint both residential and commercial properties?",
    answer:
      "Yes. We paint houses, apartments, units, strata buildings, offices, shops, warehouses, and other commercial spaces across Sydney.",
  },
  {
    question: "Do you handle strata and common area painting?",
    answer:
      "Yes. We regularly work on strata and common areas including corridors, lift lobbies, stairwells, ceilings, doors, trims, and shared spaces where clean preparation and tidy work are important.",
  },
  {
    question: "What areas of Sydney do you service?",
    answer:
      "F&S Painting services Sydney and surrounding suburbs, including recent project areas such as Carlingford, Silverwater, Dee Why, Parramatta, Balgowlah Heights, Mosman, and North Strathfield.",
  },
  {
    question: "How do you prepare surfaces before painting?",
    answer:
      "Preparation depends on the surface, but can include cleaning, sanding, patching, sealing, caulking, stain blocking, masking, and primer where needed. Good preparation helps the finish look better and last longer.",
  },
  {
    question: "What license and insurance details can I check before booking?",
    answer:
      "Before booking, you can check F&S Painting's key business details on the website, including license 478497C, workers compensation policy 236870501, public liability insurance with AAMI under policy SPD012776314, and ACN 659406265.",
  },
  {
    question: "What paint do you use, and what steps are included in your painting process?",
    answer:
      "We mainly use quality Dulux paint and follow a careful process for each job. This can include protecting nearby areas, repairing minor surface damage, sealing cracks, filling gaps, sanding, applying primer where needed, and finishing with the right paint system for the surface.",
  },
];

export const serviceFaqs: FaqItem[] = [
  {
    question: "Do you provide free on-site painting quotes?",
    answer:
      "Yes. F&S Painting can provide a free on-site quote so we can check the real condition, access, preparation needs, and project scope before giving a clear estimate.",
  },
  {
    question: "What is included in an interior painting service?",
    answer:
      "Interior painting can include walls, ceilings, trims, doors, feature walls, stairwells, patching, sanding, masking, and a suitable paint finish for the room and daily use.",
  },
  {
    question: "What is included in exterior painting?",
    answer:
      "Exterior painting can include facades, rendered walls, brickwork, eaves, fascia, gutters, doors, trims, fences, decks, and exterior preparation suited to Sydney weather conditions.",
  },
  {
    question: "Can you repair peeling or mould-damaged ceilings before painting?",
    answer:
      "Yes. We can prepare and repaint ceilings affected by peeling paint, stains, moisture marks, or mould damage. Where moisture is still active, we recommend fixing the source before repainting.",
  },
  {
    question: "Can you work around business or strata access requirements?",
    answer:
      "Yes. For commercial and strata painting, we can discuss access, staging, protection, timing, and clean-up so the work is practical for residents, tenants, staff, and visitors.",
  },
  {
    question: "Which paint finish should I choose?",
    answer:
      "The right finish depends on the surface and use. Low sheen is common for interior walls, semi-gloss or gloss can suit trims and doors, and exterior systems are chosen for durability and weather exposure.",
  },
  {
    question: "How soon can I book a quote?",
    answer:
      "You can request a free quote through the contact page or call F&S Painting directly. Photos and basic project details help us understand the scope before arranging the next step.",
  },
];

export function faqSchema(faqs: FaqItem[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
