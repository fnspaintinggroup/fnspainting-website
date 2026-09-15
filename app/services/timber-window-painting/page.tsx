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

const windowFramePhotos = [
  {
    src: "/images/projects/east-lindfield-replacement-window-exterior-frame.jpg",
    alt: "East Lindfield exterior window frame after painting",
    title: "Exterior window frame finish",
    caption: "Completed exterior window frame painting in East Lindfield.",
  },
  {
    src: "/images/projects/east-lindfield-replacement-window-interior-bay-frame.jpg",
    alt: "East Lindfield interior bay window frame after painting",
    title: "Interior bay window frame finish",
    caption: "Completed interior window frame painting in East Lindfield.",
  },
  {
    src: "/images/projects/east-lindfield-replacement-window-interior-frame-detail.jpg",
    alt: "East Lindfield interior window frame detail after painting",
    title: "Interior window frame detail",
    caption: "A completed interior window frame painting detail in East Lindfield.",
  },
];

const heroPhoto = {
  src: "/images/projects/mona-vale-heritage-gallery-05.png",
  alt: "Mona Vale painted interior sash window joinery within a completed F&S Painting project",
};

const sashWindowProjectPhotos = [
  {
    location: "Mona Vale",
    scope: "Interior sash window painting",
    description:
      "Finished sash window joinery from a Mona Vale interior painting project.",
    image: "/images/projects/mona-vale-heritage-gallery-07.png",
    alt: "Mona Vale interior sash windows after painting within a completed F&S Painting project",
    galleryHref:
      "/painting-gallery/mona-vale-heritage-interior-painting#sash-window-painting",
  },
  {
    location: "North Willoughby",
    scope: "Exterior sash window painting",
    description:
      "Finished sash window painting from a North Willoughby exterior repaint.",
    image: "/images/projects/north-willoughby-exterior-house-repaint-front-window-finish.jpg",
    alt: "North Willoughby exterior sash window after painting within a completed F&S Painting project",
    galleryHref:
      "/painting-gallery/north-willoughby-exterior-house-repaint-gallery#sash-window-painting",
  },
  {
    location: "Chatswood",
    scope: "Exterior sash window painting",
    description:
      "Finished sash windows from a Chatswood exterior painting project.",
    image: "/images/projects/chatswood-exterior-upper-roofline-detail.jpg",
    alt: "Chatswood exterior sash windows after painting within a completed F&S Painting project",
    galleryHref:
      "/painting-gallery/chatswood-exterior-house-painting#sash-window-painting",
  },
];

const beforeAfterProjects = [
  {
    title: "Lindfield window and trim repaint",
    description:
      "See the matched Before / After record and the full Lindfield photo gallery.",
    image: "/images/projects/lindfield-door-trim-finish.jpg",
    alt: "Lindfield exterior window and trim after repainting",
    projectHref: "/projects/lindfield-exterior-window-trim-repaint",
    galleryHref: "/painting-gallery/lindfield-exterior-window-trim-repaint",
  },
  {
    title: "North Willoughby window frame and trim",
    description:
      "See a matched Before / After pair for a timber window frame and trim repaint.",
    image: "/images/projects/north-willoughby-timber-window-after.jpg",
    alt: "Timber window frame and trim after repainting within a North Willoughby exterior project",
    projectHref:
      "/projects/exterior-facade-trim-repaint#timber-window-frame-trim",
  },
];

const serviceSteps = [
  {
    title: "Check the window condition",
    description: "We review the visible frame condition and the areas you want painted.",
  },
  {
    title: "Confirm the quote scope",
    description: "The quote sets out the agreed interior or exterior painting scope.",
  },
  {
    title: "Prepare and paint",
    description: "Preparation and painting are matched to the confirmed frame condition and scope.",
  },
  {
    title: "Check the finished work",
    description: "We review the completed painting work with the agreed scope in mind.",
  },
];

const faqs = [
  {
    question: "Do you paint both interior and exterior window frames?",
    answer:
      "We can discuss interior or exterior timber sash windows and window frames as part of a clear painting quote.",
  },
  {
    question: "What information helps with a window painting quote?",
    answer:
      "Photos of the windows, an approximate number, your suburb, and whether the work is interior or exterior help us understand the requested scope.",
  },
  {
    question: "What if a window appears to need repair?",
    answer:
      "Include a clear photo when you ask for a quote. We will review the visible condition and confirm the practical next step before a painting scope is agreed.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Timber & Sash Window Painting Sydney",
  description:
    "Timber sash window and window frame painting in Sydney, with completed F&S Painting examples in Mona Vale, North Willoughby, Chatswood, and East Lindfield.",
  path: pagePath,
  image: heroPhoto.src,
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
        name: "Timber & Sash Window Painting Sydney",
        serviceType: "Timber sash window and window frame painting",
        description:
          "Painting for timber sash windows and window frames in Sydney, with careful preparation matched to the existing coating and frame condition.",
        provider: { "@id": `${siteUrl}/#localbusiness` },
        areaServed: "Sydney, NSW",
        url: pageUrl,
        image: [heroPhoto.src, ...windowFramePhotos.map((photo) => photo.src)].map(
          absoluteUrl,
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

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority
          className="object-cover object-[65%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/86 to-ink/48" />
        <div className="relative mx-auto grid min-h-[44vh] max-w-6xl content-center px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Sydney window painting
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Timber &amp; Sash Window Painting
            </h1>
            <p className="mt-5 text-base font-medium leading-7 text-white/88 sm:text-lg">
              Interior and exterior painting for timber sash windows and window frames across Sydney.
              <br />
              Preparation is matched to the confirmed frame condition and scope.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
        title="Clear painting scope for timber windows and frames"
        intro="We paint timber sash windows and existing window frames, then confirm the requested interior or exterior scope in writing."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Timber sash windows",
              description:
                "Painting for existing timber sash window frames and joinery, inside or outside the property.",
            },
            {
              title: "Existing window frames",
              description:
                "Painting for interior or exterior window frames with preparation matched to the visible frame condition.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-ink/10 bg-white p-5 shadow-sm"
            >
              <CheckCircle2
                className="text-eucalyptus"
                aria-hidden="true"
                size={24}
              />
              <h2 className="mt-4 text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 leading-6 text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Completed sash window projects"
        title="Sash window painting from our completed projects"
        intro="Finished work from three F&S Painting projects in Mona Vale, North Willoughby, and Chatswood."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {sashWindowProjectPhotos.map((photo) => (
            <article
              key={photo.location}
              className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                  {photo.location}
                </p>
                <h2 className="mt-2 text-lg font-semibold leading-tight text-ink">
                  {photo.scope}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  {photo.description}
                </p>
                <Link
                  href={photo.galleryHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus hover:text-clay"
                >
                  <Images aria-hidden="true" size={16} />
                  View sash window photos
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Window frame painting"
        title="East Lindfield window frame painting"
        intro="Finished interior and exterior window frame painting in East Lindfield."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {windowFramePhotos.map((photo) => (
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
        eyebrow="Our process"
        title="A practical window painting process"
        intro="Each quote starts with the visible condition and the painting scope you want confirmed."
      >
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-md border border-ink/10 bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gumleaf text-sm font-bold text-eucalyptus">
                {index + 1}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Before / After"
        title="See matched window painting examples"
        intro="These links keep the before and after views together for the same project."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {beforeAfterProjects.map((project) => (
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
                <h2 className="text-xl font-semibold leading-tight text-ink">
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
            href="/projects/north-strathfield-exterior-window-restoration"
            className="inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
          >
            View North Strathfield window Before / After
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link
            href="/painting-gallery#exterior-painting"
            className="inline-flex items-center gap-2 font-semibold text-eucalyptus hover:text-clay"
          >
            View Exterior photo galleries
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Section>

      <Section eyebrow="Questions" title="Window painting questions">
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-md border border-ink/10 bg-white px-5 py-4 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-ink">
                {faq.question}
              </summary>
              <p className="mt-3 max-w-3xl leading-7 text-ink/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="bg-gumleaf" eyebrow="Request a quote" title="Tell us about your windows">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="max-w-3xl leading-7 text-ink/72">
              Share window photos, the approximate number of windows, your
              suburb, and whether the requested work is interior or exterior.
              We can then discuss the practical next step for a painting quote.
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
            Request a window painting quote
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
