import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { Section } from "@/components/Section";
import { businessDetails } from "@/lib/business";
import { faqSchema } from "@/lib/faqs";
import {
  absoluteUrl,
  breadcrumbSchema,
  pageMetadata,
  siteUrl,
} from "@/lib/seo";

const lindfieldFaqs = [
  {
    question: "Do you provide free painting quotes in Lindfield?",
    answer:
      "Yes. F&S Painting provides free on-site quotes for houses, apartments, strata properties, and commercial spaces in Lindfield, East Lindfield, and nearby North Shore suburbs.",
  },
  {
    question: "Do you paint both interiors and exteriors in Lindfield?",
    answer:
      "Yes. We paint interior walls, ceilings, trims, and doors, as well as exterior facades, eaves, fascia, gutters, windows, verandahs, and detailed timber surfaces.",
  },
  {
    question: "Can you prepare weathered exterior timber before painting?",
    answer:
      "We assess the existing coating and timber condition, then explain the scraping, sanding, filling, priming, and coating system required for the quoted surfaces.",
  },
  {
    question: "Can I see completed F&S Painting work near Lindfield?",
    answer:
      "Yes. This page links to completed Lindfield window and trim work and a detailed East Lindfield exterior repaint with real project photographs.",
  },
  {
    question: "What should I send for a Lindfield painting quote?",
    answer:
      "Send the property address, photographs of the areas, the surfaces to be painted, whether the work is interior or exterior, and your preferred timing. We can then arrange the right next step.",
  },
];

const localProjects = [
  {
    title: "East Lindfield Exterior House Repaint",
    description:
      "A completed exterior repaint covering the facade, verandah, balcony, side walls, eaves, gutters, trims, roofline details, and outbuilding surfaces.",
    image: "/images/projects/east-lindfield-exterior-front-facade-finish.jpg",
    alt: "East Lindfield house exterior after professional repainting by F&S Painting",
    href: "/painting-gallery/east-lindfield-exterior-house-repaint",
    label: "15 real project photos",
  },
  {
    title: "Lindfield Window and Trim Repaint",
    description:
      "Exterior timber windows, French doors, verandah details, and rear wall areas prepared and repainted for a clean, refreshed finish.",
    image: "/images/projects/lindfield-door-trim-finish.jpg",
    alt: "Lindfield exterior door and timber trim after repainting by F&S Painting",
    href: "/painting-gallery/lindfield-exterior-window-trim-repaint",
    label: "4 real project photos",
  },
];

const services = [
  "House, apartment, and unit painting",
  "Interior walls, ceilings, trims, and doors",
  "Exterior facades, eaves, fascia, and gutters",
  "Timber windows, doors, verandahs, and detailed trim",
  "Strata common areas and planned maintenance painting",
  "Commercial offices, shops, and workspaces",
];

const trustHighlights = [
  "NSW contractor licence 478497C",
  "20 years painting experience",
  "Quality Dulux paint systems",
  "Real Lindfield project photos",
  "Free on-site quotes",
  "Written workmanship warranty on qualifying work",
];

export const metadata: Metadata = pageMetadata({
  title: "Painters Lindfield | Real Local Projects & Free Quote",
  description:
    "See real Lindfield and East Lindfield exterior projects from licensed F&S painters. 20 years' experience, local photos and free on-site quotes.",
  path: "/painters-lindfield",
  image: "/images/projects/east-lindfield-exterior-front-facade-finish.jpg",
});

export default function PaintersLindfieldPage() {
  const pageUrl = `${siteUrl}/painters-lindfield`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Painters Lindfield", path: "/painters-lindfield" },
        ],
        `${pageUrl}#breadcrumb`,
      ),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Painters Lindfield | Real Local Projects & Free Quote | F&S Painting",
        description:
          "Licensed painters serving Lindfield and East Lindfield, with real local exterior projects, 20 years of experience, and free on-site quotes.",
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          contentUrl: absoluteUrl(
            "/images/projects/east-lindfield-exterior-front-facade-finish.jpg",
          ),
        },
        mainEntity: { "@id": `${pageUrl}#painting-service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#painting-service`,
        name: "Painters Lindfield",
        serviceType:
          "House painting, interior painting, exterior painting, strata painting, commercial painting, and detailed timber painting",
        description:
          "F&S Painting provides licensed painting services, detailed preparation, Dulux paint systems, local project evidence, and free quotes in Lindfield and East Lindfield.",
        areaServed: [
          { "@type": "City", name: "Lindfield" },
          { "@type": "City", name: "East Lindfield" },
          { "@type": "AdministrativeArea", name: "Ku-ring-gai NSW" },
        ],
        provider: { "@id": `${siteUrl}/#localbusiness` },
        url: pageUrl,
        image: localProjects.map((project) => absoluteUrl(project.image)),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(lindfieldFaqs, "/painters-lindfield")),
        }}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/projects/east-lindfield-exterior-front-facade-finish.jpg"
          alt="East Lindfield house exterior after repainting by F&S Painting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/78 to-ink/30" />
        <div className="relative mx-auto grid min-h-[70vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              <MapPin aria-hidden="true" size={17} />
              Lindfield &amp; East Lindfield, NSW
            </p>
            <h1 className="text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-7xl">
              Painters Lindfield
            </h1>
            <p className="mt-7 max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-xl">
              See 19 real local project photos, including a detailed East Lindfield
              exterior repaint, then request a free on-site quote for your property.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-white">
              <a
                href={businessDetails.googleReviewsUrl}
                className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-2 ring-1 ring-white/20 transition hover:bg-white/22"
              >
                <Star aria-hidden="true" size={16} />
                Google {businessDetails.googleRating} rating, {businessDetails.googleReviewCount} reviews
              </a>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-2 ring-1 ring-white/20">
                <ShieldCheck aria-hidden="true" size={16} />
                Licence 478497C
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-2 ring-1 ring-white/20">
                <CheckCircle2 aria-hidden="true" size={16} />
                Free on-site quotes
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote-name"
                data-analytics-event="lindfield_quote_click"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
              >
                Get a Free Quote
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
        className="bg-gumleaf"
        eyebrow="Local Painting Services"
        title="Painting for Lindfield homes, strata, and businesses"
        intro="F&S Painting provides careful preparation and repainting for varied Lindfield properties, from detailed house exteriors and occupied interiors to strata and commercial spaces."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
              <CheckCircle2 className="text-eucalyptus" aria-hidden="true" size={24} />
              <p className="mt-4 font-semibold leading-6 text-ink">{service}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Completed Local Work"
        title="Real painting projects in Lindfield"
        intro="These completed Lindfield and East Lindfield projects use real F&S Painting photographs rather than stock images."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {localProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                  {project.label}
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 leading-7 text-ink/70">{project.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus group-hover:text-clay">
                  View real project photos <ArrowRight aria-hidden="true" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Local Proof"
        title="Clear business details and real project evidence"
        intro="Check the licence, experience, photographs, quote process, and written warranty information before deciding."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustHighlights.map((item) => (
            <div key={item} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
              <ShieldCheck className="text-eucalyptus" aria-hidden="true" size={24} />
              <p className="mt-3 text-lg font-semibold leading-7 text-ink">{item}</p>
            </div>
          ))}
        </div>
        <Link
          href="/workmanship-warranty"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
        >
          Read the written workmanship warranty overview
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title="Lindfield painting questions"
        intro="Simple answers for planning an interior, exterior, strata, commercial, or detailed timber painting quote in Lindfield."
        faqs={lindfieldFaqs}
      />

      <section className="bg-eucalyptus py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Request a quote
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Need painters in Lindfield?
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Send photographs and a short description of the areas to be painted,
              or call F&amp;S Painting directly.
            </p>
          </div>
          <Link
            href="/contact#quote-name"
            data-analytics-event="lindfield_quote_click"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf"
          >
            Get a Free Quote
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
