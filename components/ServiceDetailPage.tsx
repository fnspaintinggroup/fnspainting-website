import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import type { FaqItem } from "@/components/FaqSection";
import { FaqSection } from "@/components/FaqSection";
import { Section } from "@/components/Section";
import { businessDetails } from "@/lib/business";
import type { CmsProject } from "@/lib/cms";
import { faqSchema } from "@/lib/faqs";
import { absoluteUrl, breadcrumbSchema, siteUrl } from "@/lib/seo";

type ServiceDetailPageProps = {
  name: string;
  path: string;
  eyebrow: string;
  heading: string;
  intro: string;
  description: string;
  quoteLabel: string;
  workTitle: string;
  workIntro: string;
  features: string[];
  projects: CmsProject[];
  faqs: FaqItem[];
  anchorId?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroLayout?: "cover" | "contained-right";
  heroImagePosition?: string;
};

export function ServiceDetailPage({
  name,
  path,
  eyebrow,
  heading,
  intro,
  description,
  quoteLabel,
  workTitle,
  workIntro,
  features,
  projects,
  faqs,
  anchorId,
  heroImage: heroImageOverride,
  heroImageAlt,
  heroLayout = "cover",
  heroImagePosition = "center",
}: ServiceDetailPageProps) {
  const pageUrl = `${siteUrl}${path}`;
  const heroImage =
    heroImageOverride ??
    projects[0]?.afterImage ??
    "/images/fs-painting-hero-real.jpeg";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name, path },
        ],
        `${pageUrl}#breadcrumb`,
      ),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `${name} Sydney`,
        serviceType: name,
        description,
        provider: { "@id": `${siteUrl}/#localbusiness` },
        areaServed: "Sydney, NSW",
        url: pageUrl,
        image: projects.map((project) => absoluteUrl(project.afterImage)),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs, path)),
        }}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        {heroLayout === "contained-right" ? (
          <>
            <div className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[43%]">
              <Image
                src={heroImage}
                alt={heroImageAlt ?? `${name} completed by F&S Painting in Sydney`}
                fill
                priority
                className="object-cover object-center lg:object-contain lg:object-right"
                sizes="(min-width: 1024px) 43vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/35 lg:to-transparent" />
            </div>
            <div className="relative mx-auto grid min-h-[48vh] max-w-6xl content-center px-5 py-14 sm:px-6 sm:py-16 lg:min-h-[68vh] lg:px-8 lg:py-20 lg:pr-[43%]">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
                  {eyebrow}
                </p>
                <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                  {heading}
                </h1>
                <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-xl">
                  {intro}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact#quote-name"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
                  >
                    {quoteLabel}
                    <ArrowRight aria-hidden="true" size={18} />
                  </Link>
                  <a
                    href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf"
                  >
                    <Phone aria-hidden="true" size={18} />
                    Call {businessDetails.phones[0]}
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Image
              src={heroImage}
              alt={heroImageAlt ?? `${name} completed by F&S Painting in Sydney`}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: heroImagePosition }}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/68 to-ink/25" />
            <div className="relative mx-auto grid min-h-[68vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-xl">
              {intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote-name"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
              >
                {quoteLabel}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <a
                href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf"
              >
                <Phone aria-hidden="true" size={18} />
                Call {businessDetails.phones[0]}
              </a>
            </div>
          </div>
            </div>
          </>
        )}
      </section>

      <div id={anchorId} className="scroll-mt-24">
        <Section eyebrow={`${name} Work`} title={workTitle} intro={workIntro}>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-md border border-ink/10 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className="text-eucalyptus"
                  aria-hidden="true"
                  size={24}
                />
                <p className="mt-4 font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section
        className="bg-mist"
        eyebrow="Related Before / After"
        title={`${name} before and after examples`}
        intro="Select a completed example to jump to the matching Before & After card."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={project.afterImage}
                  alt={project.afterImageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">
                  {project.serviceType}
                </p>
                <h2 className="mt-2 text-lg font-semibold leading-tight text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm font-semibold text-ink/60">
                  {project.location}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus">
                  View matching Before / After
                  <ArrowRight aria-hidden="true" size={16} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <FaqSection
        className="bg-mist"
        eyebrow="FAQ"
        title={`${name} questions`}
        intro={`Helpful answers for Sydney customers planning ${name.toLowerCase()}.`}
        faqs={faqs}
      />
    </>
  );
}
