import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { services } from "@/lib/site-data";
import { getServices } from "@/lib/cms";
import { pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Painting Services Sydney",
  description:
    "Painter Sydney services from F&S Painting: house painting, interior painter Sydney, exterior painter Sydney, strata painting, commercial painting, ceiling painting, and mould-damaged ceiling painting.",
  path: "/services",
});

export default async function ServicesPage() {
  const cmsServices = await getServices();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(cmsServices)) }}
      />
      <section className="bg-ink px-5 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
            Services
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Professional painting services across Sydney
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            F&amp;S Painting handles careful preparation, neat application, and practical guidance
            for residential, strata, and commercial properties.
          </p>
        </div>
      </section>
      <Section
        eyebrow="About us"
        title="Experienced Sydney painters who treat your property with care"
        intro="F&S Painting is a trusted painting contractor in Sydney, providing high-quality painting services for residential, strata, and commercial properties."
        className="bg-paper"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-5 text-base leading-8 text-ink/72">
              <p>
                With more than 20 years of industry experience, our skilled painters are committed
                to delivering clean, detailed, and long-lasting results that improve the look and
                value of your property.
              </p>
              <p>
                We take pride in careful preparation, professional workmanship, and clear
                communication from start to finish. We treat our customers like friends, and we
                respect every property as if it were our own.
              </p>
              <p>
                Our experienced team can recommend the right painting solution for your home,
                apartment, office, shop, or building. From interior and exterior painting to surface
                repairs, ceilings, trims, and full repainting projects, we can help with all your
                painting needs.
              </p>
              <p>
                Most quality finishes begin with proper surface preparation. That is why we make
                sure every job is prepared carefully before painting, so the final result looks
                better and lasts longer.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
            >
              Contact us today
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              "Over 20 years of painting experience",
              "Residential, strata, and commercial work",
              "Full preparation for a quality finish",
            ].map((item) => (
              <div key={item} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-clay">
                  F&amp;S Painting
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section title="What we paint">
        <div className="grid gap-5 md:grid-cols-2">
          {cmsServices.map((service) => {
            const localService = services.find((item) => item.title === service.title) ?? services[0];
            const Icon = localService.icon;
            const id = service.slug;
            return (
              <article id={id} key={service.title} className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
                <Icon className="text-eucalyptus" aria-hidden="true" size={30} />
                <h2 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h2>
                <p className="mt-3 leading-7 text-ink/70">{service.summary}</p>
                <p className="mt-4 text-sm leading-6 text-ink/60">
                  {service.description ||
                    "Every quote can include preparation advice, paint system recommendations, and expected timing based on the condition of the space."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                  <Link href="/projects" className="text-eucalyptus hover:text-clay">
                    Related projects
                  </Link>
                  <Link href="/painting-tips" className="text-eucalyptus hover:text-clay">
                    Painting tips
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
        >
          Get a Free Quote
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </Section>
    </>
  );
}
