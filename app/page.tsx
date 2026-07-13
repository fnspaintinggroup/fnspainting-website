import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export const metadata: Metadata = pageMetadata({
  title:
    "F&S Painting | Painter Chatswood & Sydney - Interior, Exterior, Strata & Commercial",
  description:
    "Licensed and insured painters in Chatswood, North Shore and Sydney. Residential, interior, exterior, strata and commercial painting with free on-site quotes, 20 years of experience, and quality Dulux products.",
  path: "/",
});

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
    getSelectedReviews(6),
    getServices(),
  ]);
  const janChurcherReview = selectedReviews.find((review) =>
    review.customerName.toLowerCase().includes("jan churcher"),
  );
  const cmsReviews = janChurcherReview
    ? [
        ...selectedReviews
          .filter(
            (review) => review.customerName !== janChurcherReview.customerName,
          )
          .slice(0, 3),
        janChurcherReview,
      ]
    : selectedReviews.slice(0, 4);
  const homepageFaqs = [
    homeFaqs[1],
    homeFaqs[8],
    homeFaqs[3],
    homeFaqs[4],
    homeFaqs[9],
    homeFaqs[6],
  ];

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
                <source
                  src="/images/fs-painting-service-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cmsServices.slice(0, 6).map((service) => {
              const localService =
                services.find((item) => item.title === service.title) ??
                services[0];
              const Icon = localService.icon;
              return (
                <Link
                  key={service.title}
                  href={localService.href}
                  className="group rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <Icon
                    className="text-eucalyptus"
                    aria-hidden="true"
                    size={28}
                  />
                  <h3 className="mt-5 text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/65">
                    {service.summary}
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
            <Link
              href="/painters-chatswood"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
            >
              Painters Chatswood - Free Quote
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm">
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
        intro="F&S Painting carries the required business, workers compensation, and public liability details for professional painting work across Sydney."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              Workers compensation
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              Policy No. 236870501
            </p>
          </div>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              Public liability insurance
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              Fully insured with AAMI
            </p>
            <p className="mt-1 text-sm font-semibold text-ink/65">
              Policy No. SPD012776314
            </p>
          </div>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              ACN
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">659406265</p>
          </div>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              License
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">478497C</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Google Reviews"
        title="Trusted by Sydney homeowners, strata managers, and local businesses"
        intro="Real customer reviews help new customers feel confident before booking a painting quote."
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
