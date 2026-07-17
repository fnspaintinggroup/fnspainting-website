import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Paintbrush } from "lucide-react";
import { PortableBody } from "@/components/PortableBody";
import { getProjectBySlug, getProjectList, toAbsoluteUrl } from "@/lib/cms";
import { breadcrumbSchema, siteUrl, targetKeywords } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getProjectList();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: {
      absolute: project.seoTitle,
    },
    description: project.seoDescription,
    keywords: targetKeywords,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      type: "article",
      url: `/projects/${project.slug}`,
      publishedTime: project.completionDate,
      images: [
        {
          url: toAbsoluteUrl(project.afterImage),
          alt: project.afterImageAlt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projects = await getProjectList();
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const projectImageObjects = [
    {
      "@type": "ImageObject",
      "@id": `${projectUrl}#before-image`,
      name: `${project.title} before painting`,
      caption: project.beforeImageAlt,
      description: `${project.beforeImageAlt} in ${project.location}.`,
      contentUrl: toAbsoluteUrl(project.beforeImage),
      thumbnailUrl: toAbsoluteUrl(project.beforeImage),
      contentLocation: project.location,
      representativeOfPage: false,
    },
    {
      "@type": "ImageObject",
      "@id": `${projectUrl}#after-image`,
      name: `${project.title} after painting`,
      caption: project.afterImageAlt,
      description: `${project.afterImageAlt} in ${project.location}.`,
      contentUrl: toAbsoluteUrl(project.afterImage),
      thumbnailUrl: toAbsoluteUrl(project.afterImage),
      contentLocation: project.location,
      representativeOfPage: true,
    },
    ...(project.additionalImages ?? []).map((image, index) => ({
      "@type": "ImageObject",
      "@id": `${projectUrl}#additional-image-${index + 1}`,
      name: `${project.title} ${image.label.toLowerCase()} view ${index + 2}`,
      caption: image.alt,
      description: `${image.alt} in ${project.location}.`,
      contentUrl: toAbsoluteUrl(image.image),
      thumbnailUrl: toAbsoluteUrl(image.image),
      contentLocation: project.location,
      representativeOfPage: false,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Before / After", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ],
        `${projectUrl}#breadcrumb`,
      ),
      {
        "@type": "WebPage",
        "@id": `${projectUrl}#webpage`,
        url: projectUrl,
        name: project.seoTitle,
        description: project.seoDescription,
        breadcrumb: {
          "@id": `${projectUrl}#breadcrumb`,
        },
        primaryImageOfPage: {
          "@id": `${projectUrl}#after-image`,
        },
        mainEntity: {
          "@id": `${projectUrl}#project`,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
      },
      {
        "@type": "Project",
        "@id": `${projectUrl}#project`,
        name: project.title,
        description: project.description,
        url: projectUrl,
        dateCreated: project.completionDate,
        datePublished: project.completionDate,
        material: project.materials,
        image: projectImageObjects.map((image) => ({ "@id": image["@id"] })),
        provider: {
          "@id": `${siteUrl}/#localbusiness`,
        },
        about: {
          "@id": `${projectUrl}#service`,
        },
        locationCreated: {
          "@type": "Place",
          name: project.location,
          address: {
            "@type": "PostalAddress",
            addressLocality: project.location.replace(", NSW", ""),
            addressRegion: "NSW",
            addressCountry: "AU",
          },
        },
        keywords: [
          project.serviceType,
          project.location,
          "F&S Painting",
          "Sydney painters",
          "before and after painting",
        ],
      },
      {
        "@type": "Service",
        "@id": `${projectUrl}#service`,
        name: project.serviceType,
        serviceType: project.serviceType,
        areaServed: {
          "@type": "AdministrativeArea",
          name: project.location,
        },
        provider: {
          "@id": `${siteUrl}/#localbusiness`,
        },
      },
      ...projectImageObjects,
    ],
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
          <div className="mx-auto max-w-5xl">
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gumleaf hover:text-white"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              Before / After
            </Link>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
              <span className="flex items-center gap-1.5">
                <MapPin aria-hidden="true" size={15} />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Paintbrush aria-hidden="true" size={15} />
                {project.serviceType}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              {project.description}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft">
              <div className="grid md:grid-cols-2">
                <figure>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.beforeImage}
                      alt={project.beforeImageAlt}
                      data-original-brightness="true"
                      fill
                      priority
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      Before
                    </span>
                  </div>
                  <figcaption className="border-t border-ink/10 p-4 text-sm text-ink/65">
                    {project.beforeImageAlt} - {project.location}
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.afterImage}
                      alt={project.afterImageAlt}
                      fill
                      priority
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-eucalyptus px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      After
                    </span>
                  </div>
                  <figcaption className="border-t border-ink/10 p-4 text-sm text-ink/65">
                    {project.afterImageAlt} - {project.location}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {project.additionalImages && project.additionalImages.length > 0 ? (
          <section className="pb-10 sm:pb-14">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
              <h2 className="mb-6 text-2xl font-semibold text-ink">
                Another view of the repaint
              </h2>
              <div className="grid overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft md:grid-cols-2">
                {project.additionalImages.map((image) => (
                  <figure key={image.image}>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.image}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span
                        className={`absolute left-4 top-4 rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white ${
                          image.label === "Before" ? "bg-ink" : "bg-eucalyptus"
                        }`}
                      >
                        {image.label}
                      </span>
                    </div>
                    <figcaption className="border-t border-ink/10 p-4 text-sm text-ink/65">
                      {image.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="pb-14 sm:pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
            <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-ink">Work details</h2>
              {"bodySource" in project &&
              project.bodySource === "sanity" &&
              project.fullProjectDescription ? (
                <div className="mt-6">
                  <PortableBody value={project.fullProjectDescription} />
                </div>
              ) : (
                <p className="mt-4 leading-7 text-ink/72">
                  {project.description}
                </p>
              )}
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-clay">
                    Location
                  </dt>
                  <dd className="mt-2 text-ink/72">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-clay">
                    Service type
                  </dt>
                  <dd className="mt-2 text-ink/72">{project.serviceType}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-clay">
                    Completed
                  </dt>
                  <dd className="mt-2 text-ink/72">
                    {new Intl.DateTimeFormat("en-AU", {
                      year: "numeric",
                      month:
                        project.slug === "mona-vale-heritage-interior-repaint"
                          ? "short"
                          : "long",
                      day: "numeric",
                    }).format(new Date(project.completionDate))}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-clay">
                    Materials or paint used
                  </dt>
                  <dd className="mt-2 leading-7 text-ink/72">
                    {project.materials}
                  </dd>
                </div>
              </dl>
              <div className="mt-8 rounded-md bg-gumleaf p-6">
                <h2 className="text-2xl font-semibold text-ink">
                  Planning a similar repaint?
                </h2>
                <p className="mt-3 leading-7 text-ink/70">
                  Request a free quote and include the service type, suburb,
                  photos, and timing so F&amp;S Painting can understand the
                  scope.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                  {project.location.includes("Chatswood") ? (
                    <Link
                      href="/painters-chatswood"
                      className="text-eucalyptus hover:text-clay"
                    >
                      Painters Chatswood
                    </Link>
                  ) : null}
                  {project.serviceType.includes("Exterior") ? (
                    <Link
                      href="/services/exterior-painting"
                      className="text-eucalyptus hover:text-clay"
                    >
                      Exterior painting
                    </Link>
                  ) : null}
                  <Link
                    href="/services"
                    className="text-eucalyptus hover:text-clay"
                  >
                    Painting services
                  </Link>
                  {project.location.startsWith("Chatswood") ? (
                    <Link
                      href="/painters-chatswood"
                      className="text-eucalyptus hover:text-clay"
                    >
                      View Chatswood painting services
                    </Link>
                  ) : null}
                  <Link
                    href="/painting-tips"
                    className="text-eucalyptus hover:text-clay"
                  >
                    Painting tips
                  </Link>
                </div>
                <Link
                  href="/contact#quote-name"
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
                >
                  Get a Free Quote
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>

            <aside className="h-fit rounded-md border border-ink/10 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">
                More Before / After projects
              </h2>
              <div className="mt-4 grid gap-4">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/projects/${related.slug}`}
                    className="group border-t border-ink/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-clay">
                      {related.serviceType}
                    </p>
                    <h3 className="mt-2 font-semibold leading-snug text-ink group-hover:text-eucalyptus">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
              <Link
                href="/painting-tips"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-eucalyptus"
              >
                Read painting tips
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}
