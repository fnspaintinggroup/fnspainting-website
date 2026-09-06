import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Images, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { businessDetails } from "@/lib/business";
import {
  absoluteUrl,
  breadcrumbSchema,
  pageMetadata,
  siteUrl,
} from "@/lib/seo";

const pagePath = "/services/timber-window-painting";
const pageUrl = `${siteUrl}${pagePath}`;

const approvedCasePhotos = [
  {
    src: "/images/projects/east-lindfield-replacement-window-exterior-frame.jpg",
    alt: "East Lindfield exterior replacement window frame after painting",
    title: "Exterior replacement window frame finish",
    caption: "Completed exterior replacement window frame painting in East Lindfield.",
  },
  {
    src: "/images/projects/east-lindfield-replacement-window-interior-bay-frame.jpg",
    alt: "East Lindfield interior bay replacement window frame after painting",
    title: "Interior bay replacement window frame finish",
    caption: "Completed interior replacement window frame painting in East Lindfield.",
  },
  {
    src: "/images/projects/east-lindfield-replacement-window-interior-frame-detail.jpg",
    alt: "East Lindfield interior replacement window frame detail after painting",
    title: "Interior replacement window frame detail",
    caption: "A completed interior replacement window frame painting detail in East Lindfield.",
  },
];

const relatedEvidence = [
  {
    title: "Lindfield Exterior Window and Trim Repaint",
    description:
      "A verified Lindfield exterior project with a distinct photo gallery and matching Before / After record.",
    image: "/images/projects/lindfield-door-trim-finish.jpg",
    alt: "Lindfield exterior window and trim after repainting",
    projectHref: "/projects/lindfield-exterior-window-trim-repaint",
    galleryHref: "/painting-gallery/lindfield-exterior-window-trim-repaint",
  },
  {
    title: "North Strathfield Exterior Window Restoration",
    description:
      "A verified exterior timber window restoration with a matching Before / After record.",
    image: "/images/projects/north-strathfield-window-after.jpg",
    alt: "North Strathfield exterior timber window after restoration and repainting",
    projectHref: "/projects/north-strathfield-exterior-window-restoration",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Timber Window Painting Sydney | F&S Painting",
  description:
    "Interior and exterior replacement window frame painting in Sydney, with approved completed work in East Lindfield and verified related timber window projects.",
  path: pagePath,
  image: approvedCasePhotos[0].src,
});

export default function TimberWindowPaintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Timber Window Painting", path: pagePath },
        ],
        `${pageUrl}#breadcrumb`,
      ),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Timber Window Painting Sydney",
        serviceType: "Interior and exterior replacement window frame painting",
        description:
          "Interior and exterior replacement window frame painting in Sydney, with careful preparation matched to the existing coating and frame condition.",
        provider: { "@id": `${siteUrl}/#localbusiness` },
        areaServed: "Sydney, NSW",
        url: pageUrl,
        image: approvedCasePhotos.map((photo) => absoluteUrl(photo.src)),
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

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src={approvedCasePhotos[0].src}
          alt={approvedCasePhotos[0].alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/94 via-ink/72 to-ink/28" />
        <div className="relative mx-auto grid min-h-[68vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Timber Window Painting Sydney
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Interior and exterior replacement window frame painting
            </h1>
            <p className="mt-6 text-base font-medium leading-7 text-white/88 sm:text-xl">
              Careful painting for replacement window frames, with preparation
              matched to the existing coating and frame condition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote-name"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
              >
                Request a Quote
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
        eyebrow="Specialist service"
        title="A focused scope for replacement window frames"
        intro="This service is specifically for interior and exterior replacement window frame painting. A quote confirms the frame condition and preparation needed for the requested scope."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Interior and exterior replacement window frame painting",
            "Preparation matched to the existing coating and frame condition",
            "Clear scope and quote before work starts",
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
        eyebrow="Completed case"
        title="East Lindfield replacement window frame painting"
        intro="These are approved finished photographs of one completed case. They are not a Before / After sequence."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {approvedCasePhotos.map((photo) => (
            <article
              key={photo.src}
              className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold leading-tight text-ink">
                  {photo.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  {photo.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/painters-lindfield"
            className="inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
          >
            View Lindfield painting services
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link
            href="/services/exterior-painting"
            className="inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
          >
            View Exterior Painting
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Related verified evidence"
        title="Explore gallery photos and Before / After separately"
        intro="Gallery photos and Before / After records are kept as different viewing paths, so each completed job is clear to review."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {relatedEvidence.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                  Verified project
                </p>
                <h2 className="mt-2 text-xl font-semibold leading-tight text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 leading-6 text-ink/70">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-eucalyptus">
                  <Link
                    href={project.projectHref}
                    className="inline-flex items-center gap-2 hover:text-clay"
                  >
                    View Before / After
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                  {project.galleryHref ? (
                    <Link
                      href={project.galleryHref}
                      className="inline-flex items-center gap-2 hover:text-clay"
                    >
                      <Images aria-hidden="true" size={16} />
                      View full photo gallery
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="/painting-gallery#exterior-painting"
            className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/20 bg-white px-5 py-3 font-semibold text-eucalyptus hover:border-eucalyptus/40"
          >
            View Exterior photo galleries
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/20 bg-white px-5 py-3 font-semibold text-eucalyptus hover:border-eucalyptus/40"
          >
            View all Before / After projects
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </Section>

      <Section className="bg-gumleaf" eyebrow="Local service" title="Talk through the requested frame scope">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="max-w-3xl leading-7 text-ink/72">
              Share photographs of the replacement window frames and whether the
              requested work is interior or exterior. We can then confirm the
              practical next step for a quote.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus">
              <MapPin aria-hidden="true" size={16} />
              Sydney, NSW
            </div>
          </div>
          <Link
            href="/contact#quote-name"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
          >
            Request a Quote
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
