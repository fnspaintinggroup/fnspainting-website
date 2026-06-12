import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Tag } from "lucide-react";
import { getBlogPosts, toAbsoluteUrl } from "@/lib/cms";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Painting Tips Sydney",
  description:
    "Painting tips for Sydney homeowners covering house painting Sydney costs, interior paint finishes, ceiling painting, and mould-damaged ceiling painting.",
  path: "/painting-tips",
});

export default async function PaintingTipsPage() {
  const blogPosts = await getBlogPosts();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Painting Tips",
    description:
      "Practical painting advice from F&S Painting for Sydney homes, interiors, ceilings, and repainting projects.",
    url: `${siteUrl}/painting-tips`,
    publisher: {
      "@type": "Organization",
      name: "F&S Painting",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: `${siteUrl}/painting-tips/${post.slug}`,
      description: post.excerpt,
      image: toAbsoluteUrl(post.featuredImage),
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
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
            Painting Tips
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Painting advice for Sydney homes and properties
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Cost guidance, interior paint finish advice, and preparation tips for ceiling repainting
            and restoration work.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Link href={`/painting-tips/${post.slug}`} aria-label={post.title}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays aria-hidden="true" size={15} />
                    {new Intl.DateTimeFormat("en-AU", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).format(new Date(post.date))}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tag aria-hidden="true" size={15} />
                    {post.category}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-tight text-ink">
                  <Link href={`/painting-tips/${post.slug}`} className="hover:text-eucalyptus">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/65">{post.excerpt}</p>
                <Link
                  href={`/painting-tips/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-eucalyptus"
                >
                  Read tip
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
