import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Paintbrush } from "lucide-react";
import { getProjectList, toAbsoluteUrl } from "@/lib/cms";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Painting Projects Sydney",
  description:
    "Before and after projects from F&S Painting, including house painting Sydney, interior painter Sydney, exterior painter Sydney, and mould-damaged ceiling painting.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjectList();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects / Before & After",
    description:
      "Before and after painting project examples from F&S Painting in Sydney.",
    url: `${siteUrl}/projects`,
    mainEntity: projects.map((project) => ({
      "@type": "Project",
      name: project.title,
      url: `${siteUrl}/projects/${project.slug}`,
      description: project.description,
      dateCreated: project.completionDate,
      locationCreated: project.location,
      image: [toAbsoluteUrl(project.beforeImage), toAbsoluteUrl(project.afterImage)],
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
            Projects
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Projects / Before &amp; After
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Sample project pages for ceiling restoration, interior painting, and exterior repainting
            work across Sydney.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 lg:px-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm md:grid-cols-[1.15fr_0.85fr]"
            >
              <Link href={`/projects/${project.slug}`} className="grid min-h-80 grid-cols-2 bg-mist">
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
                  <Link href={`/projects/${project.slug}`} className="hover:text-eucalyptus">
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-7 text-ink/70">{project.description}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-ink/65">
                  <CalendarDays aria-hidden="true" size={17} />
                  Completed{" "}
                  {new Intl.DateTimeFormat("en-AU", {
                    month: "long",
                    year: "numeric",
                  }).format(new Date(project.completionDate))}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-eucalyptus"
                >
                  View project
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
