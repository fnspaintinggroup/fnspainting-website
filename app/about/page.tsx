import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, MapPin, ShieldCheck } from "lucide-react";
import { PageIntroHero } from "@/components/PageIntroHero";
import { businessDetails } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our Sydney Painting Company",
  description:
    "Meet F&S Painting, a licensed and insured Sydney painting company serving Chatswood, the North Shore, and surrounding suburbs.",
  path: "/about",
});

const trustDetails = [
  { label: "NSW contractor licence", value: "478497C", icon: BadgeCheck },
  { label: "Workers compensation", value: "236870501", icon: ShieldCheck },
  { label: "Public liability insurance", value: "AAMI SPD012776314", icon: ShieldCheck },
  { label: "Registered company", value: "F&S Painting Group, ACN 659406265", icon: Building2 },
];

export default function AboutPage() {
  return (
    <>
      <PageIntroHero
        eyebrow="About F&S Painting"
        title="Local painters focused on careful preparation and a clean finish"
        description="F&S Painting provides residential, strata, and commercial painting across Sydney, with a strong local focus on Chatswood and the North Shore."
        image="/images/page-heroes/services-hero.jpg"
        imageAlt="F&S Painting team completing professional painting preparation in Sydney"
        imagePosition="center 52%"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Our approach</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Clear advice before work starts, reliable care while it is underway
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-ink/72">
              <p>
                With around 20 years of painting experience, F&amp;S Painting works on homes,
                apartments, strata properties, offices, and commercial buildings. We provide
                interior, exterior, ceiling, door, window, trim, and surface restoration work.
              </p>
              <p>
                Preparation is matched to the condition of each surface. A typical process may
                include protection, minor patching, crack and gap filling, sanding, suitable primer,
                and finish coats using quality Dulux paint systems.
              </p>
              <p>
                We prefer to inspect larger or detailed projects on site. This helps us explain the
                scope clearly, identify access or repair needs, and provide a quote based on the
                actual property rather than a rough guess.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact#quote-name"
                className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
              >
                Get a Free Quote <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-eucalyptus/30 px-5 py-3 font-semibold text-eucalyptus hover:bg-gumleaf"
              >
                View Completed Projects
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-soft">
            <Image
              src="/images/projects/chatswood-exterior-front-facade-wide.jpg"
              alt="Completed exterior painting project in Chatswood by F&S Painting"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Licensed and insured</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Business details customers can check before requesting a quote
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
                  <Icon aria-hidden="true" className="text-eucalyptus" size={24} />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink/55">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Local service</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Chatswood, the North Shore, and Sydney-wide projects
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/72">
              Our Chatswood location supports customers across the North Shore, including
              Willoughby, Artarmon, Lane Cove, Roseville, Lindfield, Killara, and nearby suburbs.
              We also complete painting work across greater Sydney from our Lidcombe base.
            </p>
            <div className="mt-6 flex items-center gap-2 text-ink/70">
              <MapPin aria-hidden="true" className="text-eucalyptus" size={20} />
              <span>{businessDetails.addresses.map((address) => `${address.suburb} NSW`).join(" and ")}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
