import "server-only";

import { unstable_cache } from "next/cache";
import type { CmsReview } from "@/lib/cms";

type GoogleAccessTokenResponse = {
  access_token?: string;
  expires_in?: number;
  token_type?: string;
  error?: string;
};

type GoogleBusinessProfileReview = {
  reviewer?: {
    displayName?: string;
  };
  starRating?: string;
  comment?: string;
  createTime?: string;
  updateTime?: string;
};

type GoogleBusinessProfileReviewsResponse = {
  reviews?: GoogleBusinessProfileReview[];
};

export type ReviewProviderLinks = {
  readMoreUrl?: string;
  leaveReviewUrl?: string;
};

const googleRatingMap: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

const reviewCacheSeconds = Number(process.env.GOOGLE_BUSINESS_PROFILE_REVIEW_CACHE_SECONDS || 3600);

function hasGoogleBusinessProfileCredentials() {
  return Boolean(
    process.env.GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID &&
      process.env.GOOGLE_BUSINESS_PROFILE_LOCATION_ID &&
      process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_ID &&
      process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_SECRET &&
      process.env.GOOGLE_BUSINESS_PROFILE_REFRESH_TOKEN,
  );
}

function toRating(starRating: string | undefined) {
  if (!starRating) {
    return 5;
  }

  return googleRatingMap[starRating] ?? Number(starRating || 5);
}

async function getGoogleAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_ID || "",
      client_secret: process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_SECRET || "",
      refresh_token: process.env.GOOGLE_BUSINESS_PROFILE_REFRESH_TOKEN || "",
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as GoogleAccessTokenResponse;

  return data.access_token || null;
}

async function fetchGoogleBusinessProfileReviews() {
  if (!hasGoogleBusinessProfileCredentials()) {
    return null;
  }

  const accessToken = await getGoogleAccessToken();

  if (!accessToken) {
    return null;
  }

  const accountId = process.env.GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID;
  const locationId = process.env.GOOGLE_BUSINESS_PROFILE_LOCATION_ID;
  const pageSize = process.env.GOOGLE_BUSINESS_PROFILE_REVIEW_LIMIT || "6";
  const parent = `accounts/${accountId}/locations/${locationId}`;
  const url = new URL(`https://mybusiness.googleapis.com/v4/${parent}/reviews`);
  url.searchParams.set("pageSize", pageSize);
  url.searchParams.set("orderBy", "updateTime desc");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      revalidate: reviewCacheSeconds,
      tags: ["google-business-profile-reviews"],
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as GoogleBusinessProfileReviewsResponse;

  if (!data.reviews?.length) {
    return null;
  }

  return data.reviews
    .filter((review) => review.comment)
    .map<CmsReview>((review) => ({
      customerName: review.reviewer?.displayName || "Google reviewer",
      rating: toRating(review.starRating),
      reviewText: review.comment || "",
      source: "Google",
      date: review.updateTime || review.createTime,
      featured: true,
    }));
}

const getCachedGoogleBusinessProfileReviews = unstable_cache(
  fetchGoogleBusinessProfileReviews,
  ["google-business-profile-reviews"],
  {
    revalidate: reviewCacheSeconds,
    tags: ["google-business-profile-reviews"],
  },
);

export function getGoogleReviewLinks(): ReviewProviderLinks {
  return {
    readMoreUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL,
    leaveReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL,
  };
}

export function getReviewSourceLabel() {
  return "Google Review";
}

export async function getGoogleBusinessProfileReviews(): Promise<CmsReview[] | null> {
  try {
    return await getCachedGoogleBusinessProfileReviews();
  } catch {
    return null;
  }
}
