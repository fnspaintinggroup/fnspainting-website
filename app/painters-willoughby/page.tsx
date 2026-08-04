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

const willoughbyFaqs = [
  {
    question: "Do you provide free painting quotes in Willoughby?",
    answer:
      "Yes. F&S Painting provides free quotes for homes, apartments, strata properties, offices, shops, and other properties in Willoughby and nearby North Shore suburbs.",
  },
  {
    question: "Do you paint both interiors and exteriors in Willoughby?",
    answer:
      "Yes. We paint interior walls, ceilings, trims and doors, as well as exterior facades, eaves, fascia, gutters, windows, verandahs, and other painted surfaces.",
  },
  {
    question: "Can you repair peeling or mould-affected bathroom ceilings?",
    answer:
      "We can assess peeling paint, staining, and mould-affected ceiling coatings, then explain the preparation, sealing, and repainting needed. The source of ongoing moisture should also be corrected before the final coating is applied.",
  },
  {
    question: "Can you work around residents or business hours?",
    answer:
      "Yes. For occupied homes, strata buildings, and commercial properties, we can discuss access, protection, staging, timing, and clean-up before work starts.",
  },
  {
    question: "What should I send for a Willoughby painting quote?",
    answer:
      "Send the property address or suburb, photos of the areas, whether the work is interior or exterior, the surfaces to be painted, and your preferred timing. We can then arrange the right next step.",
  },
];

const localProjects = [
  {
    title: "Willoughby Ceiling Restoration and Interior Repaint",
    description:
      "A recent Willoughby project showing careful protection, ceiling restoration, preparation, and a clean interior repainting finish.",
    image: "/images/projects/willoughby-office-ceiling-after.jpg",
    alt: "Willoughby ceiling after surface restoration and a clean repainting finish",
    href: "/projects/willoughby-ceiling-restoration-interior-repaint",
    label: "Recent ceiling restoration",
  },
  {
    title: "Willoughby Interior Wall Repaint",
    description:
      "Preparation and repainting across hallway and bedroom walls in a Willoughby home.",
    image: "/images/projects/willoughby-hallway-wall-finish.jpg",
    alt: "Willoughby hallway walls after interior repainting by F&S Painting",
    href: "/painting-gallery/willoughby-interior-wall-repaint",
    label: "Interior painting",
  },
  {
    title: "North Willoughby Exterior Painting",
    description:
      "Facade, gable, entry, window trim, verandah, and side wall painting with careful preparation.",
    image: "/images/projects/exterior-facade-after.jpg",
    alt: "North Willoughby house facade and trim after exterior painting",
    href: "/painting-gallery/north-willoughby-exterior-facade-trim",
    label: "Exterior painting",
  },
];

const services = [
  "House, apartment, and unit painting",
  "Interior walls, ceilings, trims, and doors",
  "Exterior facades, eaves, fascia, and gutters",
  "Strata common areas and planned maintenance painting",
  "Commercial offices, shops, and workspaces",
  "Peeling and mould-affected ceiling coating restoration",
];

const trustHighlights = [
  "NSW contractor licence 478497C",
  "Workers compensation details available on request",
  "Public liability certificate available on request",
  "20 years painting experience",
  "Quality Dulux paint systems",
  "Real Willoughby project photos",
];

export const metadata: Metadata = pageMetadata({
  title: "Painters Willoughby | Free On-Site Quote",
  description:
    "Local Willoughby painters for interior, exterior, strata and commercial work. Licensed and insured, with real local projects and free on-site quotes.",
  path: "/painters-willoughby",
  image: "/images/projects/willoughby-office-ceiling-after.jpg",
});

export default function PaintersWilloughbyPage() {
  const pageUrl = `${siteUrl}/painters-willoughby`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Painters Willoughby", path: "/painters-willoughby" },
        ],
        `${pageUrl}#breadcrumb`,
      ),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Painters Willoughby | Free On-Site Quote | F&S Painting",
        description:
          "Licensed and insured interior, exterior, strata, commercial, and ceiling painters serving Willoughby and North Willoughby.",
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          contentUrl: absoluteUrl("/images/projects/willoughby-office-ceiling-after.jpg"),
        },
        mainEntity: { "@id": `${pageUrl}#painting-service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#painting-service`,
        name: "Painters Willoughby",
        serviceType:
          "House painting, interior painting, exterior painting, strata painting, commercial painting, and ceiling restoration",
        description:
          "F&S Painting provides licensed and insured painting services, careful preparation, Dulux paint systems, local project evidence, and free quotes in Willoughby and North Willoughby.",
        areaServed: [
          { "@type": "City", name: "Willoughby" },
          { "@type": "City", name: "North Willoughby" },
          { "@type": "AdministrativeArea", name: "North Shore NSW" },
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
          __html: JSON.stringify(faqSchema(willoughbyFaqs, "/painters-willoughby")),
        }}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/projects/willoughby-office-ceiling-after.jpg"
          alt="Willoughby ceiling after restoration and repainting by F&S Painting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/78 to-ink/35" />
        <div className="relative mx-auto grid min-h-[70vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              <MapPin aria-hidden="true" size={17} />
              Willoughby &amp; North Willoughby, NSW
            </p>
            <h1 className="text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-7xl">
              Painters Willoughby
            </h1>
            <p className="mt-7 max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-xl">
              Licensed and insured painters for Willoughby homes, apartments,
              strata properties, businesses, interiors, exteriors, and ceilings.
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
                Free quotes
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
          </div>
        </div>
      </section>

      <Section
        className="bg-gumleaf"
        eyebrow="Local Painting Services"
        title="Painting for Willoughby homes, strata, and businesses"
        intro="F&S Painting handles preparation and repainting for varied Willoughby properties, from occupied homes and apartments to shared strata areas and commercial spaces."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
              <CheckCircle2 className="text-eucalyptus" aria-hidden="true" size={24} />
              <p className="mt-4 font-semibold leading-6 text-ink">{service}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 max-w-3xl leading-7 text-ink/72">
          Before work starts, we can discuss surface condition, repairs,
          protection, access, timing, and the paint system suited to each area.
          For strata and commercial work, the quote can also account for shared
          access and practical staging.
        </p>
      </Section>

      <Section
        eyebrow="Completed Local Work"
        title="Real painting projects in Willoughby"
        intro="These local projects show completed interior, exterior, and ceiling work rather than stock photography."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {localProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 31vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                  {project.label}
                </p>
                <h2 className="mt-2 text-xl font-semibold leading-tight text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">{project.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus group-hover:text-clay">
                  View project <ArrowRight aria-hidden="true" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/painting-gallery/willoughby-ceiling-restoration-interior-finish"
            className="inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
          >
            View the full Willoughby ceiling restoration gallery
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link
            href="/painting-gallery?area=Willoughby#gallery-results"
            className="inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
          >
            View more Willoughby painting work
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Preparation Matters"
        title="A clear process for a durable, tidy finish"
        intro="Good results depend on checking and preparing the surface before the final coats are applied."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5 text-base leading-7 text-ink/72">
            <p>
              Interior work may need patching, sanding, gap filling, careful
              protection, and the right coating for walls, ceilings, doors, or
              trim. Exterior work may also need weathered areas, joints, timber,
              and previously painted surfaces checked before repainting.
            </p>
            <p>
              Bathroom ceiling coatings need extra care when paint is peeling or
              moisture has caused staining. We assess the coating condition and
              explain the preparation and sealing needed, while any continuing
              moisture source should be fixed separately.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="font-semibold text-eucalyptus hover:text-clay">
                View painting services
              </Link>
              <Link href="/painting-gallery?area=Willoughby#gallery-results" className="font-semibold text-eucalyptus hover:text-clay">
                View the Willoughby gallery
              </Link>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm">
            <Image
              src="/images/projects/willoughby-interior-wall-preparation.jpg"
              alt="Willoughby interior wall being patched and prepared before repainting"
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Licensed And Insured"
        title="Business details you can check before requesting a quote"
        intro="F&S Painting shows its licence, insurance details, experience, reviews, and local project evidence clearly."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustHighlights.map((item) => (
            <div key={item} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
              <ShieldCheck className="text-eucalyptus" aria-hidden="true" size={24} />
              <p className="mt-3 text-lg font-semibold leading-7 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <FaqSection
        className="bg-mist"
        eyebrow="FAQ"
        title="Willoughby painting questions"
        intro="Simple answers for planning an interior, exterior, strata, commercial, or ceiling painting quote in Willoughby."
        faqs={willoughbyFaqs}
      />

      <section className="bg-eucalyptus py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">Request a quote</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Need painters in Willoughby?
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Send photos and a short description of the areas to be painted,
              or call F&amp;S Painting directly.
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
