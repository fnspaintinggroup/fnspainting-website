import Link from "next/link";
import { ArrowRight, BadgeCheck, Brush, Building2, Home, Phone } from "lucide-react";
import { businessDetails } from "@/lib/business";

type LanguageOverviewCopy = {
  langLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  quoteLabel: string;
  callLabel: string;
  servicesTitle: string;
  servicesIntro: string;
  services: { title: string; text: string; icon: "home" | "brush" | "building" }[];
  whyTitle: string;
  reasons: string[];
  warrantyTitle: string;
  warrantyText: string;
  warrantyLink: string;
  contactTitle: string;
  contactText: string;
  formLabel: string;
};

const icons = { home: Home, brush: Brush, building: Building2 };

export function LanguageOverviewPage({ copy }: { copy: LanguageOverviewCopy }) {
  const phoneHref = businessDetails.phones[0].replaceAll(" ", "");

  return (
    <>
      <section className="bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gumleaf">{copy.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{copy.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#quote-name" className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white transition hover:bg-clay/90">
              {copy.quoteLabel}<ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a href={`tel:${phoneHref}`} className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 font-semibold transition hover:bg-white/10">
              <Phone aria-hidden="true" size={18} />{copy.callLabel} {businessDetails.phones[0]}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">{copy.langLabel}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{copy.servicesTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-ink/70">{copy.servicesIntro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <article key={service.title} className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-eucalyptus/10 text-eucalyptus"><Icon aria-hidden="true" size={24} /></span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/65">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gumleaf py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{copy.whyTitle}</h2>
            <ul className="mt-5 space-y-4">
              {copy.reasons.map((reason) => <li key={reason} className="flex gap-3 leading-7 text-ink/70"><BadgeCheck className="mt-1 shrink-0 text-eucalyptus" aria-hidden="true" size={20} />{reason}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{copy.warrantyTitle}</h2>
            <p className="mt-5 leading-7 text-ink/70">{copy.warrantyText}</p>
            <Link href="/workmanship-warranty" className="mt-5 inline-flex items-center gap-2 font-semibold text-eucalyptus hover:underline">
              {copy.warrantyLink}<ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{copy.contactTitle}</h2>
          <p className="mt-4 leading-7 text-ink/70">{copy.contactText}</p>
          <Link href="/contact#quote-name" className="mt-7 inline-flex items-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay/90">
            {copy.formLabel}<ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
