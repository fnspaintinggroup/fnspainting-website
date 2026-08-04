import type { FaqItem } from "@/components/FaqSection";
import { siteUrl } from "@/lib/seo";

export const homeFaqs: FaqItem[] = [
  {
    question: "Do you provide free painting quotes in Sydney?",
    answer:
      "Yes. F&S Painting provides free painting quotes across Sydney for residential, strata, and commercial projects. Share the property type, areas to be painted, and any photos so we can give practical advice before the job starts.",
  },
  {
    question: "How quickly can I get a painting quote?",
    answer:
      "We aim to arrange a site visit or provide an online estimate by the next day after your enquiry. Wherever possible, we also aim to provide a confirmed quote within 3 days, depending on the size and details of the project.",
  },
  {
    question: "How soon can you start painting?",
    answer:
      "We always try our best to work around our customers' schedules. Once we understand your requirements and the scope of work, we will offer the earliest available start date that suits your timeline.",
  },
  {
    question: "Are F&S Painting licensed and insured?",
    answer:
      "Yes. F&S Painting is licensed and insured, including workers compensation and public liability cover. Current certificate details are available on request.",
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
    question: "Can you paint while we are living in the house?",
    answer:
      "Yes. We regularly paint while customers are still living in their homes. We protect floors, furniture and fixtures, keep the work area as clean as possible, and plan the job in stages to minimise disruption to your daily routine.",
  },
  {
    question: "Can you finish painting before we move in?",
    answer:
      "Yes. If you let us know your move-in date and schedule in advance, we will do our best to plan the work around your timeline and complete the painting before you move in.",
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
    question: "Can you finish painting before we move in?",
    answer:
      "Yes. If you let us know your move-in date and schedule in advance, we will do our best to plan the work around your timeline and complete the painting before you move in.",
  },
  {
    question: "Can you paint while we are living in the house?",
    answer:
      "Yes. We regularly carry out painting work while customers are still living in their homes. We take care to protect floors, furniture and fixtures, keep the work area as clean as possible, and plan the job in stages to minimise disruption to your daily routine.",
  },
  {
    question: "Are you able to handle repaint work or take over from a previous painting company?",
    answer:
      "Yes. We specialise in repaint projects and can take over work that has been started or left unfinished by a previous painting company. We can also repair and correct issues caused by DIY painting or low-skill workmanship, then restore the area properly with a clean, smooth, and presentable finish.",
  },
  {
    question: "What paint do you use, and what steps are included in your painting process?",
    answer:
      "We mainly use quality Dulux paint and follow a careful process for each job. This can include protecting nearby areas, repairing minor surface damage, sealing cracks, filling gaps, sanding, applying primer where needed, and finishing with the right paint system for the surface.",
  },
  {
    question: "Which paint finish should I choose?",
    answer:
      "The right finish depends on the surface and use. Low sheen is common for interior walls, semi-gloss or gloss can suit trims and doors, and exterior systems are chosen for durability and weather exposure.",
  },
  {
    question: "How soon can I book a quote, and how quickly will I receive it?",
    answer:
      "You can request a free quote through the contact page or call F&S Painting directly. We aim to arrange a site visit or provide an online estimate by the next day after your enquiry, and wherever possible provide a confirmed quote within 3 days.",
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
