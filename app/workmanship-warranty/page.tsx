import type { Metadata } from "next";
import Link from "next/link";
import { PageIntroHero } from "@/components/PageIntroHero";
import { businessDetails } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Up to 5-Year Painting Workmanship Warranty",
  description:
    "Qualifying F&S interior repaint work can include a 5-year written workmanship warranty. Exterior coverage and periods are confirmed in your quote.",
  path: "/workmanship-warranty",
});

const exclusions = [
  "Leaks, moisture or mould sources that have not been resolved",
  "Structural movement, substrate failure or failure of a previous coating",
  "Rust, timber decay, impact, misuse, normal wear, fading or chalking",
  "Hail, storm, flood, bushfire or other exceptional weather events",
  "Third-party work, customer-supplied products or work outside the written scope",
];

const coverageSchedule = [
  {
    surface: "Qualifying interior walls and ceilings",
    period: "5 years",
    condition: "F&S completes the approved preparation and full coating system.",
  },
  {
    surface: "Exterior walls, eaves and vertical cladding",
    period: "3 or 5 years",
    condition: "One exact period is confirmed after inspection and written in the quote.",
  },
  {
    surface: "Handrails, balusters, decks and floors",
    period: "12 months or project-specific",
    condition: "The written quote confirms the period for these higher-wear surfaces.",
  },
  {
    surface: "Partial repairs and touch-ups",
    period: "Written project condition only",
    condition: "No additional F&S period applies unless the quote states one.",
  },
];

export default function WorkmanshipWarrantyPage() {
  const phoneHref = `tel:${businessDetails.phones[0].replaceAll(" ", "")}`;

  return (
    <>
      <PageIntroHero
        eyebrow="Written workmanship warranty"
        title="Clear warranty coverage, written into your quote"
        description="Qualifying interior repaint work can include a 5-year F&S workmanship warranty. Exterior coverage is surface-specific, with the exact period confirmed in your written quotation."
        image="/images/page-heroes/contact-hero.jpg"
        imageAlt="F&S Painting colour samples and written project planning"
        imagePosition="center 46%"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gumleaf/50 bg-gumleaf/25 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-eucalyptus">
              Up to 5 years on qualifying residential painting projects
            </p>
            <p className="mt-4 text-base leading-8 text-ink/75">
              Qualifying interior repaint work can receive 5 years. Exterior and higher-wear
              surfaces receive a period based on inspection, preparation and the coating system.
              This is not a blanket warranty for every surface: the written quotation identifies
              the exact covered surfaces, period and project-specific limits. Rights that apply
              under law remain unchanged.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">How warranty periods are set</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
              {coverageSchedule.map((item) => (
                <div
                  key={item.surface}
                  className="grid gap-2 border-b border-ink/10 p-5 last:border-b-0 sm:grid-cols-[1.1fr_0.65fr_1.5fr] sm:gap-5"
                >
                  <p className="font-semibold text-ink">{item.surface}</p>
                  <p className="font-semibold text-eucalyptus">{item.period}</p>
                  <p className="text-sm leading-6 text-ink/65">{item.condition}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <section>
              <h2 className="text-2xl font-semibold text-ink">What the warranty covers</h2>
              <p className="mt-4 text-base leading-8 text-ink/72">
                For an eligible quoted surface, the additional warranty covers peeling, flaking
                or blistering caused by faulty preparation or application by F&amp;S Painting.
                Coverage starts at practical completion and runs for the period written in the
                quotation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink">When coverage applies</h2>
              <p className="mt-4 text-base leading-8 text-ink/72">
                F&amp;S Painting must have completed the agreed preparation and coating system
                using supplied or approved products on a surface assessed as suitable. Any known
                adverse condition should be recorded in writing before work begins.
              </p>
            </section>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">What is not covered</h2>
            <p className="mt-4 text-base leading-8 text-ink/72">
              Subject to rights that cannot legally be excluded, the additional warranty does not
              cover defects caused by:
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/72 sm:grid-cols-2">
              {exclusions.map((item) => (
                <li key={item} className="rounded-xl border border-ink/10 bg-white p-4 shadow-soft">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-2xl bg-ink p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">How to make a claim</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/75">
              Contact us promptly and within the period shown in your quotation. Include the
              quote or job number, site address, practical-completion date, a description of the
              issue and reasonable photographs. Please allow reasonable access for inspection.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-white/75">
              If the claim is covered, F&amp;S Painting will rectify the affected workmanship
              within a reasonable time without charging for the necessary F&amp;S labour and
              materials. The customer bears ordinary claim costs such as taking photographs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${businessDetails.email}`}
                className="rounded-xl bg-gumleaf px-5 py-3 font-semibold text-ink transition hover:bg-white"
              >
                {businessDetails.email}
              </a>
              <a
                href={phoneHref}
                className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Call {businessDetails.phones[0]}
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/60">
              Warranty provider: F&amp;S Painting Group Pty Ltd, 12 Urigh Rd, Lidcombe NSW 2141.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">Australian Consumer Law notice</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-ink/70">
              <p>
                Our goods and services come with guarantees that cannot be excluded under the
                Australian Consumer Law. For major failures with the service, you are entitled:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>to cancel your service contract with us; and</li>
                <li>to a refund for the unused portion, or to compensation for its reduced value.</li>
              </ul>
              <p>
                You are also entitled to choose a refund or replacement for major failures with
                goods.
              </p>
              <p>
                If a failure with the goods or a service does not amount to a major failure, you
                are entitled to have the failure rectified in a reasonable time. If this is not
                done you are entitled to a refund for the goods and to cancel the contract for the
                service and obtain a refund of any unused portion. You are also entitled to be
                compensated for any other reasonably foreseeable loss or damage from a failure in
                the goods or service.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-clay p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Start with a clear written scope
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Request a free on-site quote</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/80">
                We will inspect the surfaces and state any additional warranty period in writing.
              </p>
            </div>
            <Link
              href="/contact#quote-name"
              className="mt-6 inline-flex shrink-0 rounded-xl bg-white px-5 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf sm:mt-0"
            >
              Get a Free Quote
            </Link>
          </section>
        </div>
      </section>
    </>
  );
}
