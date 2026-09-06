import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { Section } from "@/components/Section";
import { businessDetails } from "@/lib/business";
import { faqSchema } from "@/lib/faqs";
import { getProjectList } from "@/lib/cms";
import {
  absoluteUrl,
  breadcrumbSchema,
  pageMetadata,
  siteUrl,
} from "@/lib/seo";

const exteriorFaqs = [
  {
    question: "What is included in exterior painting?",
    answer:
      "Exterior painting can include facades, rendered walls, brickwork, eaves, fascia, gutters, doors, trims, fences, decks, pergolas, and other exposed surfaces.",
  },
  {
    question: "How do you prepare exterior surfaces?",
    answer:
      "Preparation can include cleaning, scraping loose paint, sanding, patching, gap filling, sealing cracks, priming bare or repaired areas, and choosing a suitable exterior Dulux paint system.",
  },
  {
    question: "Can exterior painting help protect the property?",
    answer:
      "Yes. A suitable exterior finish helps protect surfaces from weather exposure while improving the look and presentation of the property.",
  },
  {
    question: "Do you provide free exterior painting quotes?",
    answer:
      "Yes. F&S Painting provides free on-site quotes so we can check access, surface condition, preparation needs, and the right coating approach before confirming the estimate.",
  },
];

const pageUrl = `${siteUrl}/services/exterior-painting`;

export const metadata: Metadata = pageMetadata({
  title: "Exterior Painting Sydney",
  description:
    "Professional exterior painting in Sydney for homes, strata buildings, facades, eaves, fascia, gutters, trims, fences, decks, and weather-exposed surfaces.",
  path: "/services/exterior-painting",
  image: "/images/fs-painting-hero-real.jpeg",
});

export default async function ExteriorPaintingPage() {
  const exteriorProjects = (await getProjectList()).filter(
    (project) => project.serviceType === "Exterior Painting",
  );
  const relatedProjects = exteriorProjects.filter(
    (project) => project.featuredOnExteriorService,
  );
  const northWilloughbyProjects = [
    {
      project: exteriorProjects.find(
        (item) => item.slug === "exterior-facade-trim-repaint",
      ),
      galleryHref: "/painting-gallery/north-willoughby-exterior-facade-trim",
    },
    {
      project: exteriorProjects.find(
        (item) => item.slug === "north-willoughby-exterior-house-repaint",
      ),
      galleryHref:
        "/painting-gallery/north-willoughby-exterior-house-repaint-gallery",
    },
  ].filter(
    (item): item is { project: (typeof exteriorProjects)[number]; galleryHref: string } =>
      Boolean(item.project),
  );
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Exterior Painting", path: "/services/exterior-painting" },
        ],
        `${pageUrl}#breadcrumb`,
      ),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Exterior Painting Sydney",
        serviceType: "Exterior painting",
        description:
          "Exterior painting for Sydney homes, strata buildings, facades, eaves, fascia, gutters, trims, fences, decks, and weather-exposed surfaces.",
        provider: { "@id": `${siteUrl}/#localbusiness` },
        areaServed: "Sydney, NSW",
        url: pageUrl,
        image: relatedProjects.map((project) =>
          absoluteUrl(project.afterImage),
        ),
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema(exteriorFaqs, "/services/exterior-painting"),
          ),
        }}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src={
            relatedProjects[0]?.afterImage ??
            "/images/fs-painting-hero-real.jpeg"
          }
          alt="Finished exterior painting by F&S Painting in Sydney"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/68 to-ink/25" />
        <div className="relative mx-auto grid min-h-[68vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Exterior Painting Sydney
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Exterior painting for stronger street appeal
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-xl">
              F&amp;S Painting prepares and repaints facades, eaves, fascia,
              gutters, trims, fences, decks, exterior doors, and strata surfaces
              across Sydney.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote-name"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
              >
                Get an Exterior Painting Quote
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
        eyebrow="Exterior Work"
        title="Weather-conscious preparation and durable coating"
        intro="Exterior surfaces need preparation that suits the surface condition, access, and exposure to Sydney weather."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Facades, rendered walls, brickwork, eaves, fascia, and gutters",
            "Exterior trims, doors, fences, decks, pergolas, and details",
            "Cleaning, scraping, sanding, patching, sealing, and priming",
            "Dulux exterior paint systems for durable weather exposure",
            "Residential, strata, commercial, and maintenance repainting",
            "Clear quoting, careful access planning, and tidy handover",
          ].map((item) => (
            <div
              key={item}
              className="rounded-md border border-ink/10 bg-white p-5 shadow-sm"
            >
              <CheckCircle2
                className="text-eucalyptus"
                aria-hidden="true"
                size={24}
              />
              <p className="mt-4 font-semibold leading-6 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-gumleaf"
        eyebrow="Exterior Project Areas"
        title="Exterior painting examples in Chatswood and Willoughby"
        intro="Explore verified exterior project photos and related local painting information before requesting a quote."
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/painters-chatswood"
            className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
          >
            Exterior house painters in Chatswood
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <Link
            href="/projects/chatswood-exterior-gable-trim-repaint"
            className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/20 bg-white px-5 py-3 font-semibold text-eucalyptus hover:border-eucalyptus/40"
          >
            View a Chatswood exterior repaint
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
          {northWilloughbyProjects.map(({ project, galleryHref }) => (
            <div key={project.slug} className="contents">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/20 bg-white px-5 py-3 font-semibold text-eucalyptus hover:border-eucalyptus/40"
              >
                View {project.title} Before / After
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link
                href={galleryHref}
                className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/20 bg-white px-5 py-3 font-semibold text-eucalyptus hover:border-eucalyptus/40"
              >
                View {project.title} photo gallery
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          ))}
          <Link
            href="/painting-gallery#exterior-painting"
            className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/20 bg-white px-5 py-3 font-semibold text-eucalyptus hover:border-eucalyptus/40"
          >
            View all exterior photo galleries
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <Link
            href="/services/timber-window-painting"
            className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/20 bg-white px-5 py-3 font-semibold text-eucalyptus hover:border-eucalyptus/40"
          >
            Replacement window frame painting
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Related Before / After"
        title="Exterior painting examples"
        intro="A representative set is shown here. Every completed exterior gallery remains available through the full Exterior gallery link above."
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
                <h2 className="mt-2 text-lg font-semibold leading-tight text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm font-semibold text-ink/60">
                  {project.location}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus">
                  View matching Before / After
                  <ArrowRight aria-hidden="true" size={16} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FaqSection
        className="bg-mist"
        eyebrow="FAQ"
        title="Exterior painting questions"
        intro="Helpful answers for Sydney customers planning an exterior repaint."
        faqs={exteriorFaqs}
      />
    </>
  );
}
