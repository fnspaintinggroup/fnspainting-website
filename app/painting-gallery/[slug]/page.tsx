import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Images, MapPin, Paintbrush } from "lucide-react";
import { galleryCollections, getGalleryCollection } from "@/lib/gallery";
import { pageMetadata, siteUrl } from "@/lib/seo";

type GalleryCollectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return galleryCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: GalleryCollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getGalleryCollection(slug);

  if (!collection) {
    return pageMetadata({
      title: "Painting Gallery Sydney",
      description: "View finished painting work by F&S Painting across Sydney.",
      path: "/painting-gallery",
    });
  }

  return pageMetadata({
    title: `${collection.title} Gallery`,
    description: collection.summary,
    path: `/painting-gallery/${collection.slug}`,
    image: collection.coverImage,
  });
}

export default async function GalleryCollectionPage({ params }: GalleryCollectionPageProps) {
  const { slug } = await params;
  const collection = getGalleryCollection(slug);

  if (!collection) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: collection.title,
    description: collection.summary,
    url: `${siteUrl}/painting-gallery/${collection.slug}`,
    image: collection.images.map((item) => `${siteUrl}${item.image}`),
    mainEntity: collection.images.map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      caption: item.caption,
      contentUrl: `${siteUrl}${item.image}`,
      description: item.alt,
      keywords: [collection.category, collection.suburb, "painting gallery Sydney"],
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Link
              href="/painting-gallery"
              className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              Back to Gallery
            </Link>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              <Images aria-hidden="true" size={18} />
              Location gallery
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              {collection.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              {collection.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-white/75">
              <span className="inline-flex items-center gap-2 rounded border border-white/15 px-3 py-2">
                <Paintbrush aria-hidden="true" size={16} />
                {collection.category}
              </span>
              <span className="inline-flex items-center gap-2 rounded border border-white/15 px-3 py-2">
                <MapPin aria-hidden="true" size={16} />
                {collection.suburb}
              </span>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-md border border-white/15 bg-white/10 sm:min-h-96">
            <Image
              src={collection.coverImage}
              alt={collection.coverAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                Finished photos
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-ink">
                {collection.suburb} painting finishes
              </h2>
            </div>
            <p className="text-sm font-semibold text-ink/55">
              {collection.images.length} photos
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collection.images.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/65">{item.caption}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink/55">
                    <MapPin aria-hidden="true" size={16} />
                    {collection.suburb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-eucalyptus py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              Like this finish?
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Request a free Sydney painting quote
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Share your home, strata, office, retail, or commercial painting details and we will
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
