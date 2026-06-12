import type { Metadata } from "next";
import type { CmsService } from "@/lib/cms";

const defaultSiteUrl = "https://www.fnspainting.com.au";

function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!value) {
    return defaultSiteUrl;
  }

  try {
    return new URL(value).origin;
  } catch {
    return defaultSiteUrl;
  }
}

export const siteUrl = getSiteUrl();
export const siteName = "F&S Painting";
export const targetLocation = "Sydney, NSW";
export const defaultOgImage = "/images/fs-painting-hero-real.jpeg";

export const targetKeywords = [
  "painter Sydney",
  "house painting Sydney",
  "interior painter Sydney",
  "exterior painter Sydney",
  "strata painting Sydney",
  "commercial painter Sydney",
  "ceiling painting Sydney",
  "mould-damaged ceiling painting",
];

export function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return `${siteUrl}${pathOrUrl}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    keywords: targetKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_AU",
      type,
      images: [
        {
          url: absoluteUrl(image),
          alt: `${siteName} professional painting services in ${targetLocation}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    image: absoluteUrl(defaultOgImage),
    description:
      "F&S Painting provides residential, interior, exterior, strata, commercial, ceiling painting, and mould-damaged ceiling restoration services in Sydney, NSW.",
    areaServed: {
      "@type": "City",
      name: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    makesOffer: targetKeywords.map((keyword) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: keyword,
        areaServed: "Sydney, NSW",
      },
    })),
  };
}

export function serviceSchema(services: CmsService[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Painting services in Sydney",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        areaServed: "Sydney, NSW",
        provider: {
          "@id": `${siteUrl}/#localbusiness`,
        },
        url: `${siteUrl}/services#${service.slug}`,
      },
    })),
  };
}
