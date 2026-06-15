import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPinned, Phone, Star as StarBadge } from "lucide-react";
import { businessDetails } from "@/lib/business";
import type { CmsReview } from "@/lib/cms";
import { getGoogleReviewLinks, getReviewSourceLabel } from "@/lib/review-providers";
import { starIcon as Star } from "@/lib/site-data";

type ReviewsProps = {
  reviews: CmsReview[];
};

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
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.8fr]">
        <aside className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
          <p className="text-2xl font-semibold text-ink">{businessDetails.googleBusinessName}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
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
          <p className="mt-3 text-sm leading-6 text-ink/65">Painter in Chatswood, New South Wales</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {googleActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink/75 transition hover:border-blue-500 hover:text-blue-700"
                >
                  <Icon aria-hidden="true" size={16} />
                  {action.label}
                </Link>
              );
            })}
          </div>
        </aside>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={`${review.customerName}-${review.date ?? review.source ?? "review"}`}
              className="rounded-md bg-[#f3f3f3] p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <figcaption className="text-base font-semibold text-ink">
                  {review.customerName}
                  <span className="mt-1 block text-sm font-normal text-ink/55">
                    {review.date ? new Date(review.date).toLocaleDateString("en-AU") : getReviewSourceLabel()}
                  </span>
                </figcaption>
                <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-white">
                  <Image
                    src="/images/footer/google-icon.jpg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-cover"
                  />
                </span>
              </div>
              <div className="mt-4 flex gap-1 text-[#fbbc04]" aria-label={`${review.rating} star review`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    size={18}
                    fill={index < review.rating ? "currentColor" : "none"}
                    className={index < review.rating ? "text-[#fbbc04]" : "text-ink/20"}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-7 text-ink/80">
                &ldquo;{review.reviewText}&rdquo;
              </blockquote>
              <Link
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-ink/50 hover:text-blue-700"
              >
                Read more on Google
              </Link>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-eucalyptus px-5 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf"
        >
          Read More Reviews on Google
        </Link>

        <Link
          href={leaveReviewUrl || businessDetails.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-clay px-5 py-3 font-semibold text-white transition hover:bg-clay/90"
        >
          Leave Us a Google Review
        </Link>
      </div>
    </div>
  );
}
