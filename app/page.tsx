import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { HomePromoHero } from "@/components/HomePromoHero";
import { ProjectPreview } from "@/components/ProjectPreview";
import { FaqSection } from "@/components/FaqSection";
import { Reviews } from "@/components/Reviews";
import { Section } from "@/components/Section";
import { faqSchema, homeFaqs } from "@/lib/faqs";
import { featuredGalleryImages, galleryCollections } from "@/lib/gallery";
import { services } from "@/lib/site-data";
import { getSelectedReviews, getServices } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";
import { createUrlSlug } from "@/lib/url-slug";

export const metadata: Metadata = {
  ...pageMetadata({
    title:
      "F&S Painting | Painter Chatswood & Sydney - Interior, Exterior, Strata & Commercial",
    description:
      "Licensed and insured painters in Chatswood, North Shore and Sydney. Residential, interior, exterior, strata and commercial painting with free on-site quotes, 20 years of experience, and quality Dulux products.",
    path: "/",
  }),
  alternates: {
    canonical: "/",
    languages: { "en-AU": "/", "zh-Hans": "/zh" },
  },
};

function featuredGalleryHref(item: (typeof featuredGalleryImages)[number]) {
  if (!item.collectionSlug) {
    return "/painting-gallery";
  }

  const collection = galleryCollections.find(
    (entry) => entry.slug === item.collectionSlug,
  );
  const imageIndex =
    collection?.images.findIndex((entry) => entry.image === item.image) ?? -1;

  if (!collection || imageIndex < 0) {
    return `/painting-gallery/${item.collectionSlug}`;
  }

  const image = collection.images[imageIndex];
  return `/painting-gallery/${item.collectionSlug}#${createUrlSlug(image.title)}-${imageIndex + 1}`;
}

export default async function Home() {
  const [selectedReviews, cmsServices] = await Promise.all([
    getSelectedReviews(8),
    getServices(),
  ]);
  const cmsReviews = selectedReviews.slice(0, 8);
  const homepageFaqs = [
    homeFaqs[1],
    homeFaqs[8],
    homeFaqs[3],
    homeFaqs[4],
    homeFaqs[9],
    homeFaqs[6],
  ];
  const homepageServices = cmsServices.filter((service) => {
    const serviceName = `${service.title} ${service.slug}`.toLowerCase();
    return !serviceName.includes("mould-damaged ceiling");
  });

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homepageFaqs, "/")),
        }}
      />
      <HomePromoHero />

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                Services
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Painting services built around clean preparation and lasting
                finishes
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/70">
                From a single ceiling refresh to a full property repaint,
                F&amp;S Painting offers practical guidance, tidy work, and a
                professional finish.
              </p>
            </div>
            <div className="relative min-h-52 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-md sm:min-h-64 lg:min-h-72">
              <video
                className="h-full min-h-52 w-full object-cover sm:min-h-64 lg:min-h-72"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="F&S Painting exterior service van video in Sydney"
              >
                <source
                  src="/images/fs-painting-service-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homepageServices.slice(0, 6).map((service) => {
              const isCeilingService = `${service.title} ${service.slug}`
                .toLowerCase()
                .includes("ceiling repainting");
              const localService =
                services.find((item) =>
                  isCeilingService
                    ? item.title === "Ceiling Repainting"
                    : item.title === service.title,
                ) ??
                services[0];
              const Icon = localService.icon;
              const serviceTitle = isCeilingService
                ? "Ceiling Repainting & Restoration"
                : service.title;
              const serviceSummary = isCeilingService
                ? "Ceiling repainting and restoration for peeling paint, stains, patching, moisture damage, and mould-affected coatings after the source is resolved."
                : service.summary;
              return (
                <Link
                  key={service.title}
                  href={localService.href}
                  className="group rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-md"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-eucalyptus/10 text-eucalyptus transition duration-300 group-hover:bg-eucalyptus group-hover:text-white">
                    <Icon aria-hidden="true" size={28} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">
                    {serviceTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/65">
                    {serviceSummary}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gumleaf py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
              Chatswood &amp; North Shore
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Painters Chatswood - licensed local painting team
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/72">
              With 20 years of know-how and quality Dulux products, F&amp;S
              Painting provides clean, reliable painting services for homes,
              apartments, strata buildings, offices, and shops across Chatswood
              and nearby North Shore suburbs. From interior walls and ceilings
              to exterior facades, trims, common areas, and commercial spaces,
              we focus on careful preparation, tidy work, and a professional
              finish.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-eucalyptus">
              {["House painting", "Apartments", "Strata", "Commercial"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-md border border-eucalyptus/20 bg-white px-3 py-2"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/painters-chatswood"
                className="inline-flex items-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
              >
                Painters Chatswood - Free Quote
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                href="/painters-willoughby"
                className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/25 bg-white px-6 py-3 font-semibold text-eucalyptus transition hover:bg-mist"
              >
                Painters Willoughby
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-md">
            <Image
              src="/images/projects/chatswood-blakesley-exterior-front-facade.jpg"
              alt="Recent Chatswood exterior gable and trim painting finish by F&S Painting"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section
        className="bg-mist"
        eyebrow="Company Information"
        title="Licensed and insured Sydney painters"
        intro="F&S Painting is licensed and insured for professional painting work across Sydney. Current certificates are available on request."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-eucalyptus/10 text-eucalyptus">
              <ShieldCheck aria-hidden="true" size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
                Workers compensation
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">Covered</p>
              <p className="mt-1 text-sm text-ink/60">Certificate available on request</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-eucalyptus/10 text-eucalyptus">
              <FileCheck2 aria-hidden="true" size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
                Public liability insurance
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">Fully insured with AAMI</p>
              <p className="mt-1 text-sm text-ink/60">Certificate available on request</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-eucalyptus/10 text-eucalyptus">
              <Building2 aria-hidden="true" size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">ACN</p>
              <p className="mt-2 text-lg font-semibold text-ink">659406265</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-eucalyptus/10 text-eucalyptus">
              <BadgeCheck aria-hidden="true" size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">Licensed painter</p>
              <p className="mt-2 text-lg font-semibold text-ink">478497C</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Customer Reviews"
        title="Trusted by Sydney homeowners, strata managers, and local businesses"
        intro="Verified feedback from Google, Facebook and completed painting projects helps customers compare with confidence."
      >
        <Reviews reviews={cmsReviews} />
      </Section>

      <Section
        className="bg-mist"
        eyebrow="Before & After"
        title="Before & After previews"
        intro="A simple view of the kinds of transformations F&S Painting can help with, from interior walls to ceiling restoration."
      >
        <ProjectPreview />
      </Section>

      <Section
        eyebrow="Finest Finish Painting Gallery"
        title="Recent painting finishes across Sydney"
        intro="See finished interior, exterior, ceiling, commercial, strata, door, trim, and detail painting work by F&S Painting."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGalleryImages.slice(0, 8).map((item) => (
            <Link
              key={item.title}
              href={featuredGalleryHref(item)}
              className="group overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
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
                <p className="inline-flex rounded-full bg-clay/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-clay">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">
                  {item.caption}
                </p>
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
          <Link
            className="rounded-md border border-ink/10 bg-white p-5 font-semibold text-eucalyptus shadow-sm hover:text-clay"
            href="/painting-tips/house-painting-cost-sydney"
          >
            House painting Sydney cost guide
          </Link>
          <Link
            className="rounded-md border border-ink/10 bg-white p-5 font-semibold text-eucalyptus shadow-sm hover:text-clay"
            href="/services/interior-painting"
          >
            Interior painter Sydney services
          </Link>
          <Link
            className="rounded-md border border-ink/10 bg-white p-5 font-semibold text-eucalyptus shadow-sm hover:text-clay"
            href="/projects/mould-damaged-ceiling-restoration-sydney"
          >
            Mould-damaged ceiling painting: Before / After
          </Link>
        </div>
      </Section>

      <FaqSection
        className="bg-mist"
        eyebrow="FAQ"
        title="Frequently asked painting questions"
        intro="Helpful answers for Sydney customers planning house painting, commercial painting, strata painting, or ceiling restoration work."
        faqs={homepageFaqs}
      />

      <section className="bg-eucalyptus py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Ready to repaint?
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Request a free Sydney painting quote
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Share a few details about your property, the areas to be painted,
              and your ideal timing.
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
