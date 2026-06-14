import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProjectList } from "@/lib/cms";

export async function ProjectPreview() {
  const projects = await getProjectList();
  const previewProjects = projects.slice(0, 15);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {previewProjects.map((project) => (
        <article
          key={project.title}
          className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm"
        >
          <Link href={`/projects/${project.slug}`} className="block">
            <div className="grid h-56 grid-cols-2 bg-mist">
              <div className="relative overflow-hidden">
                <Image
                  src={project.beforeImage}
                  alt={project.beforeImageAlt}
                  fill
                  sizes="(min-width: 768px) 16vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-ink px-2 py-1 text-xs font-semibold text-white">
                  Before
                </span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src={project.afterImage}
                  alt={project.afterImageAlt}
                  fill
                  sizes="(min-width: 768px) 16vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-eucalyptus px-2 py-1 text-xs font-semibold text-white">
                  After
                </span>
              </div>
            </div>
          </Link>
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              {project.location} - {project.serviceType}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-ink">
              <Link href={`/projects/${project.slug}`} className="hover:text-eucalyptus">
                {project.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/65">{project.description}</p>
          </div>
        </article>
      ))}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-semibold text-eucalyptus md:col-span-3"
      >
        View before and after projects
        <ArrowRight aria-hidden="true" size={18} />
      </Link>
    </div>
  );
}
