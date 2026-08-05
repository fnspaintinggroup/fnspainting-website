import type { Metadata } from "next";
import Link from "next/link";
import { PageIntroHero } from "@/components/PageIntroHero";
import { businessDetails } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Up to 5-Year Painting Workmanship Warranty",
  description:
    "5 years for qualifying interior repaint work. Exterior and higher-wear surfaces are assessed individually, with exact coverage confirmed in your written quote.",
  path: "/workmanship-warranty",
});

export default function WorkmanshipWarrantyPage() {
  const phoneHref = `tel:${businessDetails.phones[0].replaceAll(" ", "")}`;

  return (
    <>
      <PageIntroHero
        eyebrow="Written workmanship warranty"
        title="Up to 5-Year Written Workmanship Warranty"
        description="5 years for qualifying interior repaint work. Exterior and higher-wear surfaces are assessed individually, with exact coverage confirmed in your written quote."
        image="/images/page-heroes/contact-hero.jpg"
        imageAlt="F&S Painting colour samples and written project planning"
        imagePosition="center 46%"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gumleaf/50 bg-gumleaf/25 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-eucalyptus">
              Up to 5-Year Written Workmanship Warranty
            </p>
            <p className="mt-4 text-base leading-8 text-ink/75">
              5 years for qualifying interior repaint work. Exterior and higher-wear surfaces are
              assessed individually, with exact coverage confirmed in your written quote.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink/65">
              The written quote and terms set the warranty that applies to each project. Your
              rights under law remain unchanged.
            </p>
          </div>

          <section className="mt-12 rounded-2xl bg-ink p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Ask about coverage or make a claim</h2>
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
