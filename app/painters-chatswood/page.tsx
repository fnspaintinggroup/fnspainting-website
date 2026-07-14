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
import { projects } from "@/lib/projects";
import {
  absoluteUrl,
  breadcrumbSchema,
  pageMetadata,
  siteUrl,
} from "@/lib/seo";

const chatswoodFaqs = [
  {
    question: "Do you provide painting quotes in Chatswood?",
    answer:
      "Yes. F&S Painting provides free painting quotes for homes, apartments, strata buildings, offices, shops, and other properties in Chatswood and nearby North Shore suburbs.",
  },
  {
    question:
      "Can you help with both interior and exterior painting in Chatswood?",
    answer:
      "Yes. We handle interior walls, ceilings, trims, doors, exterior facades, eaves, fascia, gutters, fences, decks, strata areas, and commercial painting work.",
  },
  {
    question: "Can you paint a Chatswood apartment or unit?",
    answer:
      "Yes. We repaint Chatswood apartments and units, including ceilings, walls, doors, windows, trims, and skirting boards. We can also discuss access, lift use, furniture protection, timing, and strata requirements before work starts.",
  },
  {
    question: "Do you work around strata or business access requirements?",
    answer:
      "Yes. For strata and commercial properties, we can discuss access, timing, protection, staging, and clean-up so the painting work is practical for residents, tenants, staff, and visitors.",
  },
  {
    question: "What information helps with a Chatswood painting quote?",
    answer:
      "Photos, the suburb, the areas to be painted, whether it is interior or exterior, and your preferred timing help F&S Painting understand the job before arranging the next step.",
  },
];

const featuredProjects = projects
  .filter((project) =>
    [
      "Chatswood, NSW",
      "Artarmon, NSW",
      "Willoughby, NSW",
      "North Bridge, NSW",
    ].includes(project.location),
  )
  .slice(0, 4);

const chatswoodPhotoHighlights = [
  {
    src: "/images/projects/chatswood-blakesley-exterior-front-facade.jpg",
    alt: "Chatswood brick home after exterior gable, fascia, and trim repainting by F&S Painting",
    title: "Exterior Gable and Trim Painting",
    href: "/painting-gallery/chatswood-exterior-gable-trim-repaint#front-facade-painting-1",
  },
  {
    src: "/images/projects/chatswood-kooringa-bedroom-finish-1.jpg",
    alt: "Chatswood bedroom after interior wall and ceiling painting by F&S Painting",
    title: "Bedroom Wall and Ceiling Painting",
    href: "/painting-gallery/chatswood-kooringa-interior-room-bathroom-painting#bedroom-wall-and-ceiling-painting-1",
  },
  {
    src: "/images/projects/chatswood-kooringa-bedroom-finish-2.jpg",
    alt: "Chatswood bedroom near window after interior repainting by F&S Painting",
    title: "Interior Room Painting",
    href: "/painting-gallery/chatswood-kooringa-interior-room-bathroom-painting#second-bedroom-wall-painting-2",
  },
  {
    src: "/images/projects/chatswood-kooringa-bathroom-ceiling-finish.jpg",
    alt: "Chatswood bathroom ceiling after repainting by F&S Painting",
    title: "Bathroom Ceiling Painting",
    href: "/painting-gallery/chatswood-kooringa-interior-room-bathroom-painting#bathroom-ceiling-painting-3",
  },
  {
    src: "/images/projects/chatswood-exterior-front-facade-wide.jpg",
    alt: "Chatswood exterior house repaint with refreshed facade and trim painting",
    title: "Exterior House Painting",
    href: "/painting-gallery/chatswood-exterior-house-painting#front-facade-wide-view-1",
  },
  {
    src: "/images/projects/chatswood-commercial-reception-wide.jpg",
    alt: "Chatswood commercial reception after interior repainting",
    title: "Commercial Reception Painting",
    href: "/painting-gallery/chatswood-commercial-reception-finish#wide-reception-view-6",
  },
  {
    src: "/images/projects/chatswood-office-boardroom-finish.jpg",
    alt: "Chatswood office boardroom after clean interior painting",
    title: "Office Interior Painting",
    href: "/painting-gallery/chatswood-office-room-refresh#boardroom-painting-3",
  },
  {
    src: "/images/projects/chatswood-apartment-living-room-finish.jpg",
    alt: "Chatswood apartment living room after interior repainting",
    title: "Apartment Interior Painting",
    href: "/painting-gallery/chatswood-apartment-interior-repaint#living-room-painting-1",
  },
  {
    src: "/images/projects/chatswood-exterior-entry-door-finish.jpg",
    alt: "Chatswood exterior entry door and trim after painting",
    title: "Entry and Trim Painting",
    href: "/painting-gallery/chatswood-exterior-house-painting#entry-door-painting-2",
  },
];

const trustHighlights = [
  "License 478497C",
  "Workers Compensation 236870501",
  "Public Liability AAMI SPD012776314",
  "ACN 659406265",
  "20 years painting experience",
  "Quality Dulux paint systems",
];

export const metadata: Metadata = pageMetadata({
  title: "Painters Chatswood | Licensed & Insured, Free Quote",
  description:
    "Chatswood painters for houses, apartments, strata and commercial properties. Licensed and insured, using Dulux for interiors, ceilings, doors and trim. Free quotes.",
  path: "/painters-chatswood",
  image: "/images/projects/chatswood-exterior-front-facade-wide.jpg",
});

export default function PaintersChatswoodPage() {
  const pageUrl = `${siteUrl}/painters-chatswood`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Painters Chatswood", path: "/painters-chatswood" },
        ],
        `${pageUrl}#breadcrumb`,
      ),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Painters Chatswood | Licensed and Insured, Free Quote",
        description:
          "Licensed and insured painters for house, strata, commercial, interior, exterior, and ceiling painting in Chatswood and the North Shore.",
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          contentUrl: absoluteUrl(
            "/images/projects/chatswood-exterior-front-facade-wide.jpg",
          ),
        },
        mainEntity: {
          "@id": `${pageUrl}#painting-service`,
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#painting-service`,
        name: "Painters Chatswood",
        serviceType:
          "House painting, strata painting, commercial painting, and ceiling restoration",
        description:
          "F&S Painting provides licensed and insured painting services with Dulux paint, careful preparation, local project photos, Google reviews, and free quotes across Chatswood, Artarmon, Willoughby, North Bridge, and nearby North Shore suburbs.",
        areaServed: [
          { "@type": "City", name: "Chatswood" },
          { "@type": "City", name: "Artarmon" },
          { "@type": "City", name: "Willoughby" },
          { "@type": "AdministrativeArea", name: "North Shore NSW" },
        ],
        provider: {
          "@id": `${siteUrl}/#localbusiness`,
        },
        url: pageUrl,
        image: [
          ...featuredProjects.map((project) => absoluteUrl(project.afterImage)),
          ...chatswoodPhotoHighlights.map((photo) => absoluteUrl(photo.src)),
        ],
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
          __html: JSON.stringify(
            faqSchema(chatswoodFaqs, "/painters-chatswood"),
          ),
        }}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/projects/chatswood-exterior-front-facade-wide.jpg"
          alt="Fresh exterior painting finish by F&S Painting near Chatswood"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/30" />
        <div className="relative mx-auto grid min-h-[72vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              <MapPin aria-hidden="true" size={17} />
              Chatswood, North Shore & Sydney
            </p>
            <h1 className="text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-7xl">
              Painters Chatswood
            </h1>
            <p className="mt-7 max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-xl">
              Licensed and insured house, strata, commercial, interior,
              exterior, and ceiling painters for Chatswood and nearby North
              Shore suburbs.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-white">
              <a
                href={businessDetails.googleReviewsUrl}
                className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-2 ring-1 ring-white/20 transition hover:bg-white/22"
              >
                <Star aria-hidden="true" size={16} />
                Google {businessDetails.googleRating} rating,{" "}
                {businessDetails.googleReviewCount} reviews
              </a>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-2 ring-1 ring-white/20">
                <ShieldCheck aria-hidden="true" size={16} />
                License 478497C
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-2 ring-1 ring-white/20">
                <CheckCircle2 aria-hidden="true" size={16} />
                Dulux paint
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote-name"
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
            <div className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <CheckCircle2 aria-hidden="true" size={18} /> Free Chatswood
                painting quotes
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 aria-hidden="true" size={18} /> Residential,
                strata, and commercial work
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section
        className="bg-gumleaf"
        eyebrow="Trusted Local Painters"
        title="Licensed, insured, and ready to quote in Chatswood"
        intro="Directory sites show ratings and badges first. F&S Painting can show the real business details, local proof, and quote path directly."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustHighlights.map((item) => (
            <div
              key={item}
              className="rounded-md border border-ink/10 bg-white p-5 shadow-sm"
            >
              <ShieldCheck
                className="text-eucalyptus"
                aria-hidden="true"
                size={24}
              />
              <p className="mt-3 text-lg font-semibold leading-7 text-ink">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact#quote-name"
            className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
          >
            Request a Free Chatswood Quote
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <a
            href={businessDetails.googleReviewsUrl}
            className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/25 bg-white px-5 py-3 font-semibold text-eucalyptus hover:bg-mist"
          >
            Read Google Reviews
            <Star aria-hidden="true" size={18} />
          </a>
        </div>
        <p className="mt-7 text-base leading-7 text-ink/72">
          Looking for a quote in the neighbouring area? See our{" "}
          <Link
            href="/painters-willoughby"
            className="font-semibold text-eucalyptus hover:text-clay"
          >
            painters in Willoughby
          </Link>{" "}
          page and completed local project examples.
        </p>
      </Section>

      <Section
        eyebrow="Chatswood Painting Services"
        title="Clean preparation and durable finishes for local properties"
        intro="F&S Painting helps Chatswood and North Shore customers refresh homes, units, strata common areas, offices, shops, and ceilings with careful preparation and tidy work."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "House painting and apartment repainting",
            "Interior walls, ceilings, trims, and doors",
            "Exterior facades, eaves, fascia, and gutters",
            "Strata corridors, stairwells, lobbies, and common areas",
            "Commercial offices, receptions, shops, and workspaces",
            "Mould-damaged ceiling preparation and restoration",
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
        className="bg-mist"
        eyebrow="Apartments And Units"
        title="Chatswood apartment and unit painting"
        intro="For Chatswood units and apartments, F&S Painting can prepare and repaint whole interiors or selected rooms with a clear scope and tidy protection plan."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-base leading-7 text-ink/72">
            <p>
              Common unit repainting work includes ceilings, walls, doors,
              windows, trims, and skirting boards. We can discuss whether the
              property is occupied, vacant, tenanted, or preparing for sale.
            </p>
            <p>
              Before painting, we check access, lift use, strata requirements,
              furniture and floor protection, surface repairs, and the right
              Dulux paint system for each area.
            </p>
            <Link
              href="/painting-gallery/chatswood-apartment-interior-repaint"
              className="inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
            >
              View a Chatswood apartment painting example
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm">
            <Image
              src="/images/projects/chatswood-apartment-living-room-finish.jpg"
              alt="Chatswood apartment living room after interior repainting by F&S Painting"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Nearby Work"
        title="Recent painting Before & After around Chatswood and the North Shore"
        intro="These completed before-and-after examples show the kinds of residential, commercial, exterior, and ceiling work F&S Painting handles near Chatswood."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={project.afterImage}
                  alt={project.afterImageAlt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
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
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Chatswood Photos"
        title="Recent Chatswood and North Shore painting photos"
        intro="A closer look at recent Chatswood exterior, bedroom, bathroom ceiling, commercial, office, and apartment painting work completed by F&S Painting."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {chatswoodPhotoHighlights.map((photo) => (
            <Link
              key={photo.src}
              href={photo.href}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold leading-5 text-ink">
                  {photo.title}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">
                  Chatswood, NSW
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/painting-gallery/chatswood-kooringa-interior-room-bathroom-painting"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
        >
          View the latest Chatswood gallery
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </Section>

      <Section
        eyebrow="Why Choose F&S Painting"
        title="A practical painting process for busy homes and businesses"
        intro="Good painting starts before the first coat. F&S Painting focuses on clear quoting, surface preparation, protection, clean finishes, and tidy handover."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-base leading-7 text-ink/72">
            <p>
              Chatswood properties can include family homes, apartments, strata
              buildings, retail spaces, medical rooms, offices, and older
              surfaces that need proper preparation before repainting.
            </p>
            <p>
              We can discuss the paint system, access, timing, protection, and
              finish so the work is suitable for the property and the people
              using it.
            </p>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm">
            <Image
              src="/images/projects/chatswood-kooringa-bedroom-finish-1.jpg"
              alt="Chatswood interior bedroom repaint by F&S Painting"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <FaqSection
        className="bg-mist"
        eyebrow="FAQ"
        title="Chatswood painting questions"
        intro="Helpful answers for customers planning a painting quote in Chatswood or nearby North Shore suburbs."
        faqs={chatswoodFaqs}
      />

      <section className="bg-eucalyptus py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Request a quote
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Need painters in Chatswood?
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Send photos and a short description of the areas to be painted, or
              call F&amp;S Painting directly.
            </p>
          </div>
          <Link
            href="/contact#quote-name"
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
