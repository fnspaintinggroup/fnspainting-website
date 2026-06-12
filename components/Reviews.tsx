import Link from "next/link";
import { starIcon as Star } from "@/lib/site-data";
import type { CmsReview } from "@/lib/cms";
import { getGoogleReviewLinks, getReviewSourceLabel } from "@/lib/review-providers";

type ReviewsProps = {
  reviews: CmsReview[];
};

export function Reviews({ reviews }: ReviewsProps) {
  const { readMoreUrl, leaveReviewUrl } = getGoogleReviewLinks();

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <figure
            key={`${review.customerName}-${review.date ?? review.source ?? "review"}`}
            className="rounded-md border border-ink/10 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex gap-1 text-clay" aria-label={`${review.rating} star review`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  size={18}
                  fill={index < review.rating ? "currentColor" : "none"}
                  className={index < review.rating ? "text-clay" : "text-ink/20"}
                />
              ))}
            </div>
            <blockquote className="text-base leading-7 text-ink/75">
              &ldquo;{review.reviewText}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-ink">
              {review.customerName}
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-eucalyptus">
                {getReviewSourceLabel()}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {readMoreUrl ? (
          <Link
            href={readMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-eucalyptus px-5 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf"
          >
            Read More Reviews on Google
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-ink/15 px-5 py-3 font-semibold text-ink/40"
            title="Set NEXT_PUBLIC_GOOGLE_REVIEWS_URL to enable this button."
          >
            Read More Reviews on Google
          </button>
        )}

        {leaveReviewUrl ? (
          <Link
            href={leaveReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-clay px-5 py-3 font-semibold text-white transition hover:bg-clay/90"
          >
            Leave Us a Google Review
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-ink/15 px-5 py-3 font-semibold text-ink/40"
            title="Set NEXT_PUBLIC_GOOGLE_REVIEW_URL to enable this button."
          >
            Leave Us a Google Review
          </button>
        )}
      </div>
    </div>
  );
}
