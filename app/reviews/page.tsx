import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reviews } from "@/components/Reviews";
import { Section } from "@/components/Section";
import { getSelectedReviews } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Painter Sydney Reviews",
  description:
    "Read selected Google reviews for F&S Painting, a Sydney painter for house painting, interior painting, exterior painting, strata painting, commercial painting, and ceiling painting.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const reviews = await getSelectedReviews(6);

  return (
    <>
      <section className="bg-ink px-5 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
            Reviews
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Customer reviews from Sydney painting projects
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Selected reviews are managed in the CMS, with a clean path for Google Business Profile
            API integration later.
          </p>
        </div>
      </section>
      <Section title="What clients can expect">
        <Reviews reviews={reviews} />
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
