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

const beforeAfterCategories = [
  { id: "interior-painting", label: "Interior Painting" },
  { id: "exterior-painting", label: "Exterior Painting" },
  { id: "ceiling-restoration", label: "Ceiling Restoration" },
  { id: "commercial-painting", label: "Commercial Painting" },
  { id: "strata-painting", label: "Strata Painting" },
] as const;

function getProjectCategory(serviceType: string) {
  const normalizedType = serviceType.toLowerCase();

  if (normalizedType.includes("ceiling") || normalizedType.includes("restoration")) {
    return "ceiling-restoration";
  }

  if (normalizedType.includes("commercial")) {
    return "commercial-painting";
  }

  if (normalizedType.includes("strata")) {
    return "strata-painting";
  }

  if (normalizedType.includes("exterior")) {
    return "exterior-painting";
  }

  return "interior-painting";
}

export default async function ProjectsPage() {
  const projects = await getProjectList();

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

      <section className="bg-linen py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
              Sydney painting transformations
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Before &amp; After by service type
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/70">
              Browse real transformations grouped by the type of painting work
              customers most often ask to review before booking a quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {beforeAfterCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-md border border-eucalyptus/20 bg-white px-3 py-2 text-sm font-semibold text-eucalyptus shadow-sm transition hover:bg-gumleaf"
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {beforeAfterCategories.map((category, index) => {
        const categoryProjects = projects.filter(
          (project) => getProjectCategory(project.serviceType) === category.id,
        );

        return (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-20 py-14 sm:py-20 ${index % 2 === 0 ? "bg-white" : "bg-mist"}`}
          >
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                    Before &amp; After
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight text-ink">
                    {category.label}
                  </h2>
                </div>
                <p className="text-sm font-semibold text-ink/55">
                  {categoryProjects.length} transformation
                  {categoryProjects.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project) => (
                  <article
                    id={project.slug}
                    key={project.slug}
                    className="scroll-mt-24 overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <Link href={`/projects/${project.slug}`} className="block h-full">
                      <div className="grid aspect-[4/3] grid-cols-2 overflow-hidden bg-mist">
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.beforeImage}
                            alt={project.beforeImageAlt}
                            data-original-brightness="true"
                            fill
                            sizes="(min-width: 1024px) 15vw, (min-width: 640px) 23vw, 45vw"
                            className="object-cover transition duration-500 hover:scale-[1.03]"
                          />
                          <span className="absolute left-3 top-3 rounded bg-ink/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                            Before
                          </span>
                        </div>
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.afterImage}
                            alt={project.afterImageAlt}
                            fill
                            sizes="(min-width: 1024px) 15vw, (min-width: 640px) 23vw, 45vw"
                            className="object-cover transition duration-500 hover:scale-[1.03]"
                          />
                          <span className="absolute left-3 top-3 rounded bg-eucalyptus/95 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                            After
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                          <Paintbrush aria-hidden="true" size={15} />
                          {project.serviceType}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold leading-tight text-ink">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-ink/65">
                          {project.description}
                        </p>
                        <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink/55">
                          <MapPin aria-hidden="true" size={16} />
                          {project.location}
                        </p>
                        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus">
                          View B/A details
                          <ArrowRight aria-hidden="true" size={16} />
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
