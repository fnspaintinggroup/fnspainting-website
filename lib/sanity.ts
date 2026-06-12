import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-06-12",
  useCdn: process.env.NODE_ENV === "production",
};

export const isSanityConfigured = Boolean(sanityConfig.projectId && sanityConfig.dataset);

export const sanityClient = createClient({
  projectId: sanityConfig.projectId || "placeholder",
  dataset: sanityConfig.dataset || "production",
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!source) {
    return null;
  }

  return builder.image(source).width(1600).height(1000).fit("crop").auto("format").url();
}
