import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Paintbrush } from "lucide-react";
import { getProjectList, toAbsoluteUrl } from "@/lib/cms";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Painting Before & After Sydney",
  description:
    "Before and after projects from F&S Painting, including house painting Sydney, interior painter Sydney, exterior painter Sydney, and mould-damaged ceiling painting.",
  path: "/projects",
});

const beforeAfterFilters = [
  { label: "Interior Painting", serviceTypes: ["Interior Painting"] },
  { label: "Exterior Painting", serviceTypes: ["Exterior Painting"] },
  {
    label: "Ceiling Restoration",
    serviceTypes: ["Ceiling Restoration", "Mould-Damaged Ceiling Restoration"],
  },
  { label: "Commercial Painting", serviceTypes: ["Commercial Painting"] },
  { label: "Strata Painting", serviceTypes: ["Strata Painting"] },
];

export default async function ProjectsPage() {
  const projects = await getProjectList();
  const filterLinks = beforeAfterFilters
    .map((filter) => ({
      label: filter.label,
      slug: projects.find((project) =>
        filter.serviceTypes.includes(project.serviceType),
      )?.slug,
    }))
    .filter((filter): filter is { label: string; slug: string } =>
      Boolean(filter.slug),
    );

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Painting Before & After",
    description:
      "Before and after painting examples from F&S Painting in Sydney.",
    url: `${siteUrl}/projects`,
    mainEntity: projects.map((project) => ({
      "@type": "Project",
      name: project.title,
      url: `${siteUrl}/projects/${project.slug}`,
      description: project.description,
      dateCreated: project.completionDate,
      locationCreated: project.location,
      image: [
        toAbsoluteUrl(project.beforeImage),
        toAbsoluteUrl(project.afterImage),
      ],
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
            B/A
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Painting Before &amp; After
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Real before and after examples for ceiling restoration, interior
            painting, exterior repainting, commercial painting, and strata work
            across Sydney.
          </p>
          <Link
            href="/painters-chatswood"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
          >
            View licensed painters in Chatswood
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-linen py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
            Browse B/A by service
          </p>
          <div className="flex flex-wrap gap-2">
            {filterLinks.map((filter) => (
              <a
                key={filter.label}
                href={`#${filter.slug}`}
                className="rounded-md border border-eucalyptus/20 bg-white px-3 py-2 text-sm font-semibold text-eucalyptus shadow-sm transition hover:bg-gumleaf"
              >
                {filter.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 lg:px-8">
          {projects.map((project) => (
            <article
              id={project.slug}
              key={project.slug}
              className="grid scroll-mt-24 overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm md:grid-cols-[1.15fr_0.85fr]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="grid min-h-80 grid-cols-2 bg-mist"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.beforeImage}
                    alt={project.beforeImageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={project.afterImage}
                    alt={project.afterImageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-eucalyptus px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    After
                  </span>
                </div>
              </Link>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">
                  <span className="flex items-center gap-1.5">
                    <MapPin aria-hidden="true" size={15} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Paintbrush aria-hidden="true" size={15} />
                    {project.serviceType}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-ink">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-eucalyptus"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-7 text-ink/70">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-eucalyptus"
                >
                  View B/A details
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
