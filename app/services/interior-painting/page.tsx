import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { Section } from "@/components/Section";
import { businessDetails } from "@/lib/business";
import { faqSchema } from "@/lib/faqs";
import { projects } from "@/lib/projects";
import { absoluteUrl, breadcrumbSchema, pageMetadata, siteUrl } from "@/lib/seo";

const interiorFaqs = [
  {
    question: "What is included in an interior painting service?",
    answer:
      "Interior painting can include walls, ceilings, trims, doors, feature walls, stairwells, patching, sanding, masking, and a suitable Dulux paint finish for the way each room is used.",
  },
  {
    question: "Do you protect furniture, floors, and nearby surfaces?",
    answer:
      "Yes. We protect the work area before painting, including nearby floors, fittings, furniture, and edges where needed, so the job stays clean and controlled.",
  },
  {
    question: "Can you help choose the right interior paint finish?",
    answer:
      "Yes. We can recommend practical finishes for walls, ceilings, trims, doors, bathrooms, kitchens, and high-use areas based on durability, appearance, and cleaning needs.",
  },
  {
    question: "Do you provide free interior painting quotes?",
    answer:
      "Yes. F&S Painting provides free on-site quotes so we can check the actual condition, preparation needs, access, and timing before giving a clear estimate.",
  },
];

const relatedProjects = projects
  .filter((project) => project.serviceType === "Interior Painting" || project.serviceType === "Ceiling Restoration")
  .slice(0, 3);

const pageUrl = `${siteUrl}/services/interior-painting`;

export const metadata: Metadata = pageMetadata({
  title: "Interior Painting Sydney | F&S Painting",
  description:
    "Professional interior painting in Sydney for homes, apartments, offices, ceilings, trims, doors, and feature walls. Licensed and insured painters using quality Dulux products.",
  path: "/services/interior-painting",
  image: relatedProjects[0]?.afterImage ?? "/images/fs-painting-hero-real.jpeg",
});

export default function InteriorPaintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Interior Painting", path: "/services/interior-painting" },
        ],
        `${pageUrl}#breadcrumb`,
      ),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Interior Painting Sydney",
        serviceType: "Interior painting",
        description:
          "Interior painting for Sydney homes, apartments, offices, walls, ceilings, trims, doors, feature walls, and detailed repainting work.",
        provider: { "@id": `${siteUrl}/#localbusiness` },
        areaServed: "Sydney, NSW",
        url: pageUrl,
        image: relatedProjects.map((project) => absoluteUrl(project.afterImage)),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(interiorFaqs, "/services/interior-painting")) }}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src={relatedProjects[0]?.afterImage ?? "/images/fs-painting-hero-real.jpeg"}
          alt="Finished interior painting by F&S Painting in Sydney"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/68 to-ink/25" />
        <div className="relative mx-auto grid min-h-[68vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Interior Painting Sydney
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Interior painting for clean, comfortable spaces
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-xl">
              F&amp;S Painting prepares and repaints walls, ceilings, trims, doors, feature walls,
              stairwells, apartments, homes, offices, and shops across Sydney.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote-name"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
              >
                Get an Interior Painting Quote
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <a
                href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf"
              >
                <Phone aria-hidden="true" size={18} />
                Call {businessDetails.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Interior Work"
        title="Careful preparation before the finish coats"
        intro="Interior painting works best when surfaces are checked, protected, repaired, and prepared before painting begins."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Walls, ceilings, trims, doors, and feature walls",
            "Patching, sanding, gap filling, and crack sealing",
            "Protection for floors, furniture, fittings, and edges",
            "Dulux paint systems matched to the room and surface",
            "Homes, apartments, offices, shops, and strata interiors",
            "Clean work habits and tidy handover after completion",
          ].map((item) => (
            <div key={item} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
              <CheckCircle2 className="text-eucalyptus" aria-hidden="true" size={24} />
              <p className="mt-4 font-semibold leading-6 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Related Projects"
        title="Interior painting examples"
        intro="View recent interior and ceiling repainting examples completed by F&S Painting."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={project.afterImage}
                  alt={project.afterImageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                  {project.serviceType}
                </p>
                <h2 className="mt-2 text-lg font-semibold leading-tight text-ink">{project.title}</h2>
                <p className="mt-3 text-sm font-semibold text-ink/60">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FaqSection
        className="bg-mist"
        eyebrow="FAQ"
        title="Interior painting questions"
        intro="Helpful answers for Sydney customers planning interior repainting work."
        faqs={interiorFaqs}
      />
    </>
  );
}
