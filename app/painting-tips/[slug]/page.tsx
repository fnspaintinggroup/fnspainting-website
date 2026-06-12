import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Tag } from "lucide-react";
import { PortableBody } from "@/components/PortableBody";
import { quoteEmailHref } from "@/lib/business";
import { getBlogPost, getBlogPosts, toAbsoluteUrl } from "@/lib/cms";
import type { BlogSection } from "@/lib/blog-posts";
import { siteUrl, targetKeywords } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Painting Tip Not Found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: targetKeywords,
    alternates: {
      canonical: `/painting-tips/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      url: `/painting-tips/${post.slug}`,
      publishedTime: post.date,
      images: [
        {
          url: toAbsoluteUrl(post.featuredImage),
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const blogPosts = await getBlogPosts();
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const publishedDate = new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: toAbsoluteUrl(post.featuredImage),
    mainEntityOfPage: `${siteUrl}/painting-tips/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "F&S Painting",
    },
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article>
        <section className="bg-ink px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/painting-tips"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gumleaf hover:text-white"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              Painting Tips
            </Link>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
              <span className="flex items-center gap-1.5">
                <CalendarDays aria-hidden="true" size={15} />
                {publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag aria-hidden="true" size={15} />
                {post.category}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-white/75">{post.excerpt}</p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-md shadow-soft">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
            <div className="max-w-3xl">
              {"bodySource" in post && post.bodySource === "sanity" ? (
                <PortableBody value={post.body} />
              ) : (
                (post.body as BlogSection[]).map((section) => (
                  <section key={section.heading} className="mb-10">
                    <h2 className="text-2xl font-semibold leading-tight text-ink">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-8 text-ink/72">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))
              )}

              <div className="mt-12 rounded-md bg-gumleaf p-6">
                <h2 className="text-2xl font-semibold text-ink">Need painting advice for your property?</h2>
                <p className="mt-3 leading-7 text-ink/70">
                  F&amp;S Painting provides residential painting, interior painting, ceiling
                  repainting, and mould-damaged ceiling restoration across Sydney.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                  <Link href="/services#interior-painting" className="text-eucalyptus hover:text-clay">
                    Interior painting
                  </Link>
                  <Link href="/services#ceiling-repainting" className="text-eucalyptus hover:text-clay">
                    Ceiling painting
                  </Link>
                  <Link href="/projects" className="text-eucalyptus hover:text-clay">
                    Before &amp; after projects
                  </Link>
                </div>
                <Link
                  href={quoteEmailHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
                >
                  Get a Free Quote
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>

            <aside className="h-fit rounded-md border border-ink/10 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">Related tips</h2>
              <div className="mt-4 grid gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/painting-tips/${related.slug}`}
                    className="group border-t border-ink/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-clay">
                      {related.category}
                    </p>
                    <h3 className="mt-2 font-semibold leading-snug text-ink group-hover:text-eucalyptus">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-eucalyptus"
              >
                View painting services
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}
