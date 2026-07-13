import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntroHero } from "@/components/PageIntroHero";
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
  const reviews = await getSelectedReviews(10);

  return (
    <>
      <PageIntroHero
        eyebrow="Reviews"
        title="Customer reviews from Sydney painting projects"
        description={
          <>
            View F&amp;S Painting Services on Google, read more Google reviews, and see selected
            customer reviews from the website CMS or Google Business Profile API.
          </>
        }
        image="/images/page-heroes/reviews-hero.jpg"
        imageAlt="Large Sydney home exterior painted by F&S Painting"
        imagePosition="center 52%"
      />
      <Section title="What clients can expect">
        <Reviews reviews={reviews} />
        <Link
          href="/contact#quote-name"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 font-semibold text-white hover:bg-clay/90"
        >
          Get a Free Quote
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </Section>
    </>
  );
}
