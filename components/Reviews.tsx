import Link from "next/link";
import { ExternalLink, MapPinned, Phone, Star as StarBadge } from "lucide-react";
import { businessDetails } from "@/lib/business";
import type { CmsReview } from "@/lib/cms";
import { getGoogleReviewLinks, getReviewSourceLabel } from "@/lib/review-providers";
import { starIcon as Star } from "@/lib/site-data";

type ReviewsProps = {
  reviews: CmsReview[];
};

function GoogleIcon() {
  return (
    <svg aria-label="Google" viewBox="0 0 24 24" className="h-5 w-5" role="img">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.7 4.7 0 0 1-2 3v2.5h3.3c1.9-1.8 2.9-4.4 2.9-7.4Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.5c-.9.6-2.1 1-3.4 1a5.9 5.9 0 0 1-5.5-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.5 14a6 6 0 0 1 0-3.9V7.5H3.1a10 10 0 0 0 0 9.1L6.5 14Z" />
      <path fill="#EA4335" d="M12 6c1.5 0 2.9.5 3.9 1.5l2.9-2.8A9.7 9.7 0 0 0 12 2a10 10 0 0 0-8.9 5.5l3.4 2.6A5.9 5.9 0 0 1 12 6Z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: CmsReview }) {
  const source = review.source || getReviewSourceLabel();

  return (
    <figure className="flex h-full flex-col rounded-xl border border-ink/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <figcaption className="text-base font-semibold text-ink">
          {review.customerName}
          <span className="mt-1 block text-sm font-normal text-ink/55">
            {review.projectContext ||
              (review.date ? new Date(review.date).toLocaleDateString("en-AU") : source)}
          </span>
        </figcaption>
        <span className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-xs font-semibold text-ink/65" title={source}>
          {source.toLowerCase() === "google" ? <GoogleIcon /> : source}
        </span>
      </div>
      {typeof review.rating === "number" ? (
        <div className="mt-4 flex gap-1 text-[#fbbc04]" aria-label={`${review.rating} star review`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} aria-hidden="true" size={18} fill={index < review.rating! ? "currentColor" : "none"} className={index < review.rating! ? "text-[#fbbc04]" : "text-ink/20"} />
          ))}
        </div>
      ) : null}
      <blockquote className="mt-4 flex-1 text-sm leading-6 text-ink/80">&ldquo;{review.reviewText}&rdquo;</blockquote>
      {review.sourceUrl ? (
        <Link href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-ink/50 hover:text-blue-700">
          View original source
        </Link>
      ) : source.toLowerCase() === "google" ? (
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink/45"><GoogleIcon /> Verified Google review</span>
      ) : source.toLowerCase().includes("referral") ? (
        <span className="mt-4 text-sm font-semibold text-ink/45">Verified word-of-mouth referral</span>
      ) : (
        <span className="mt-4 text-sm font-semibold text-ink/45">Verified direct feedback</span>
      )}
    </figure>
  );
}

export function Reviews({ reviews }: ReviewsProps) {
  const { readMoreUrl, leaveReviewUrl } = getGoogleReviewLinks();
  const googleReviewsUrl = readMoreUrl || businessDetails.googleReviewsUrl;
  const googleActions = [
    {
      label: "Website",
      href: businessDetails.websiteUrl,
      icon: ExternalLink,
    },
    {
      label: "Directions",
      href: businessDetails.googleDirectionsUrl,
      icon: MapPinned,
    },
    {
      label: "Reviews",
      href: googleReviewsUrl,
      icon: StarBadge,
    },
    {
      label: "Call",
      href: "/contact",
      icon: Phone,
    },
  ];

  return (
    <div>
      <div className="grid gap-6">
        <aside className="rounded-xl border border-ink/10 bg-white p-5 shadow-md sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
          <p className="text-2xl font-semibold text-ink">{businessDetails.googleBusinessName}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-lg text-ink/75">{businessDetails.googleRating}</span>
            <span className="flex gap-0.5 text-[#fbbc04]" aria-label={`${businessDetails.googleRating} Google rating`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} aria-hidden="true" size={20} fill="currentColor" />
              ))}
            </span>
            <Link
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 hover:underline"
            >
              {businessDetails.googleReviewCount} Google reviews
            </Link>
          </div>
          <p className="mt-2 text-sm leading-6 text-ink/65">Painter in Chatswood, New South Wales</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-[360px] lg:justify-end">
              <Link href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-eucalyptus px-4 py-2 text-sm font-semibold text-eucalyptus transition hover:bg-gumleaf">
                <GoogleIcon /> Read More Reviews
              </Link>
              <Link href={leaveReviewUrl || businessDetails.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-clay px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay/90">
                <GoogleIcon /> Leave Us a Review
              </Link>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-ink/10 pt-4">
            {googleActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3.5 py-2 text-sm font-semibold text-ink/75 transition hover:border-blue-500 hover:text-blue-700"
                >
                  <Icon aria-hidden="true" size={16} />
                  {action.label}
                </Link>
              );
            })}
          </div>
        </aside>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.slice(0, 12).map((review) => (
            <ReviewCard key={`${review.customerName}-${review.date ?? review.source ?? "review"}`} review={review} />
          ))}
        </div>
        {reviews.length > 12 ? (
          <details className="group">
            <summary className="mx-auto flex w-fit cursor-pointer list-none items-center rounded-full border border-eucalyptus px-6 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Show More Reviews</span>
              <span className="hidden group-open:inline">Show Fewer Reviews</span>
            </summary>
            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.slice(12).map((review) => (
                <ReviewCard key={`${review.customerName}-${review.date ?? review.source ?? "review"}`} review={review} />
              ))}
            </div>
          </details>
        ) : null}
      </div>

    </div>
  );
}
