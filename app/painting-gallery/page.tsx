import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images, MapPin, Paintbrush } from "lucide-react";
import { galleryCategories, galleryCollections, galleryImages } from "@/lib/gallery";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Finest Finish Painting Gallery Sydney",
  description:
    "View finished painting work by F&S Painting across Sydney, including interior painting, exterior painting, ceiling restoration, commercial painting, strata common areas, doors, trims, and detailed finishes.",
  path: "/painting-gallery",
  image: "/images/projects/exterior-house-main-after.jpg",
});

export default function PaintingGalleryPage() {
  const gallerySchemaImages = [
    ...galleryImages.map((item) => ({
      title: item.title,
      caption: item.caption,
      image: item.image,
      alt: item.alt,
      category: item.category,
      suburb: item.suburb,
    })),
    ...galleryCollections.flatMap((collection) =>
      collection.images.map((item) => ({
        title: item.title,
        caption: item.caption,
        image: item.image,
        alt: item.alt,
        category: collection.category,
        suburb: collection.suburb,
      })),
    ),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Finest Finish Painting Gallery",
    description:
      "Finished painting examples from F&S Painting across Sydney, including interior, exterior, commercial, ceiling, strata, doors, trims, and detail work.",
    url: `${siteUrl}/painting-gallery`,
    image: gallerySchemaImages.map((item) => `${siteUrl}${item.image}`),
    mainEntity: gallerySchemaImages.map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      caption: item.caption,
      contentUrl: `${siteUrl}${item.image}`,
      description: item.alt,
      keywords: [item.category, item.suburb, "painting gallery Sydney"].filter(Boolean),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-ink px-5 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              <Images aria-hidden="true" size={18} />
              Gallery
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Finest Finish Painting Gallery
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Explore recent painting finishes completed by F&amp;S Painting across Sydney,
              including interiors, exteriors, ceilings, doors, trims, strata areas, and commercial
              spaces.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {galleryImages.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="relative min-h-56 overflow-hidden rounded-md border border-white/15 bg-white/10 sm:min-h-72"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
              Sydney painting examples
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Finished work by service type
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/70">
              Browse finished photos grouped by the kind of painting work customers most often ask
              to see before booking a quote.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                className="rounded-md border border-eucalyptus/20 bg-white px-3 py-2 text-sm font-semibold text-eucalyptus shadow-sm transition hover:bg-gumleaf"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {galleryCategories.map((category, index) => {
        const categoryImages = galleryImages.filter((item) => item.category === category);
        const sectionId = category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

        return (
          <section
            key={category}
            id={sectionId}
            className={`py-14 sm:py-20 ${index % 2 === 0 ? "bg-white" : "bg-mist"}`}
          >
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                    Finest finish
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight text-ink">{category}</h2>
                </div>
                <p className="text-sm font-semibold text-ink/55">
                  {categoryImages.length} photo{categoryImages.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {categoryImages.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <Link
                      href={
                        item.collectionSlug
                          ? `/painting-gallery/${item.collectionSlug}`
                          : "/painting-gallery"
                      }
                      className="block h-full"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                          className="object-cover transition duration-500 hover:scale-[1.03]"
                        />
                        {item.photoCount ? (
                          <span className="absolute right-3 top-3 rounded bg-ink/80 px-2.5 py-1 text-xs font-semibold text-white">
                            {item.photoCount} photos
                          </span>
                        ) : null}
                      </div>
                      <div className="p-5">
                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                          <Paintbrush aria-hidden="true" size={15} />
                          {item.category}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold leading-tight text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-ink/65">{item.caption}</p>
                        {item.suburb ? (
                          <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink/55">
                            <MapPin aria-hidden="true" size={16} />
                            {item.suburb}
                          </p>
                        ) : null}
                        {item.collectionSlug ? (
                          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus">
                            View location gallery
                            <ArrowRight aria-hidden="true" size={16} />
                          </p>
                        ) : null}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-eucalyptus py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Like the finish?
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Request a free Sydney painting quote
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Share the rooms, exterior areas, or commercial spaces you want painted and we will
              help plan the right finish.
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
