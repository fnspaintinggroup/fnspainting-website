import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Reviews } from "@/components/Reviews";
import { Section } from "@/components/Section";
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
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="relative mx-auto grid min-h-[78vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Sydney painting company
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              F&amp;S Painting
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
              Clean, reliable painting for homes, strata properties, and commercial spaces across
              Sydney, NSW.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
              >
                Get a Free Quote
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
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

      <Section
        eyebrow="Services"
        title="Painting services built around clean preparation and lasting finishes"
        intro="From a single ceiling refresh to a full property repaint, F&S Painting offers practical guidance, tidy work, and a professional finish."
      >
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
        intro="Selected customer reviews from the CMS, ready for a future Google Business Profile API connection."
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
