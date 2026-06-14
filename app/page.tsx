import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Reviews } from "@/components/Reviews";
import { Section } from "@/components/Section";
import { businessDetails } from "@/lib/business";
import { featuredGalleryImages } from "@/lib/gallery";
import { services } from "@/lib/site-data";
import { getSelectedReviews, getServices } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Painter Sydney",
  description:
    "F&S Painting is a professional painter in Sydney for house painting, interior painting, exterior painting, strata painting, commercial painting, ceiling painting, and mould-damaged ceiling painting.",
  path: "/",
});

export default async function Home() {
  const [cmsReviews, cmsServices] = await Promise.all([getSelectedReviews(), getServices()]);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/fs-painting-hero-real.jpeg"
          alt="F&S Painting team repainting an interior hallway in Sydney"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/62 to-ink/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-ink/25" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-7xl">
              Professional house painting &amp; commercial painting in Sydney
            </h1>
            <p className="mt-7 max-w-3xl text-base font-medium leading-7 text-white/90 sm:text-xl">
              Reliable, clean, high-quality painting service for homes, apartments, offices and
              shops across Sydney.
            </p>
            <p className="mt-2 text-base font-semibold text-white/90 sm:text-xl">
              Guaranteed property Value up!
            </p>
            <p className="mt-10 max-w-4xl text-2xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Call {businessDetails.phones.join(" or ")} for a free quote today.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
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
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <CheckCircle2 aria-hidden="true" size={18} /> Residential, strata, and commercial
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck aria-hidden="true" size={18} /> Careful preparation and clean finishes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                Services
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Painting services built around clean preparation and lasting finishes
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/70">
                From a single ceiling refresh to a full property repaint, F&amp;S Painting offers
                practical guidance, tidy work, and a professional finish.
              </p>
            </div>
            <div className="relative min-h-52 overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm sm:min-h-64 lg:min-h-72">
              <video
                className="h-full min-h-52 w-full object-cover sm:min-h-64 lg:min-h-72"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="F&S Painting exterior service van video in Sydney"
              >
                <source src="/images/fs-painting-service-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cmsServices.slice(0, 6).map((service) => {
            const localService = services.find((item) => item.title === service.title) ?? services[0];
            const Icon = localService.icon;
            return (
              <Link
                key={service.title}
                href={`/services#${service.slug}`}
                className="group rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <Icon className="text-eucalyptus" aria-hidden="true" size={28} />
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{service.summary}</p>
              </Link>
            );
          })}
        </div>
        </div>
      </section>

      <Section
        className="bg-mist"
        eyebrow="Company Information"
        title="Licensed and insured Sydney painters"
        intro="F&S Painting carries the required business, workers compensation, and public liability details for professional painting work across Sydney."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              Workers compensation
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">Policy No. 236870501</p>
          </div>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              Public liability insurance
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              Fully insured with AAMI
            </p>
            <p className="mt-1 text-sm font-semibold text-ink/65">Policy No. SPD012776314</p>
          </div>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">ACN</p>
            <p className="mt-3 text-lg font-semibold text-ink">659406265</p>
          </div>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">License</p>
            <p className="mt-3 text-lg font-semibold text-ink">478497C</p>
          </div>
        </div>
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Before & After"
        title="Project previews"
        intro="A simple view of the kinds of transformations F&S Painting can help with, from interior walls to ceiling restoration."
      >
        <ProjectPreview />
      </Section>

      <Section
        eyebrow="Finest Finish Painting Gallery"
        title="Explore recent painting finishes completed across Sydney"
        intro="See finished interior, exterior, ceiling, commercial, strata, door, trim, and detail painting work by F&S Painting."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGalleryImages.map((item) => (
            <Link
              key={item.title}
              href="/painting-gallery"
              className="group overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{item.caption}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/painting-gallery"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-eucalyptus"
        >
          View Gallery
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </Section>

      <Section
        eyebrow="Sydney Painting Guides"
        title="Helpful links for planning your repaint"
        intro="Explore common Sydney painting questions, recent before and after projects, and service pages before requesting a quote."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Link className="rounded-md border border-ink/10 bg-white p-5 font-semibold text-eucalyptus shadow-sm hover:text-clay" href="/painting-tips/house-painting-cost-sydney">
            House painting Sydney cost guide
          </Link>
          <Link className="rounded-md border border-ink/10 bg-white p-5 font-semibold text-eucalyptus shadow-sm hover:text-clay" href="/services#interior-painting">
            Interior painter Sydney services
          </Link>
          <Link className="rounded-md border border-ink/10 bg-white p-5 font-semibold text-eucalyptus shadow-sm hover:text-clay" href="/projects/mould-damaged-ceiling-restoration-sydney">
            Mould-damaged ceiling painting project
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Google Reviews"
        title="Trusted by Sydney homeowners, strata managers, and local businesses"
        intro="View Google review links for F&S Painting Services and selected customer reviews managed from the website CMS or Google Business Profile API."
      >
        <Reviews reviews={cmsReviews} />
      </Section>

      <section className="bg-eucalyptus py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">Ready to repaint?</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Request a free Sydney painting quote</h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Share a few details about your property, the areas to be painted, and your ideal timing.
            </p>
          </div>
          <Link
            href="/contact"
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
