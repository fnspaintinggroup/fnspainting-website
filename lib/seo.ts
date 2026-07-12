import type { Metadata } from "next";
import type { CmsService } from "@/lib/cms";
import { businessDetails } from "@/lib/business";

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
  "painters Chatswood",
  "painter Chatswood",
  "painters North Shore",
  "North Shore painters",
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
  const chatswoodAddress = businessDetails.addresses.find(
    (address) => address.suburb === "Chatswood",
  );

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HousePainter", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    legalName: "F&S Painting Group",
    url: siteUrl,
    image: absoluteUrl(defaultOgImage),
    logo: absoluteUrl("/images/fs-painting-logo.png"),
    email: businessDetails.email,
    telephone: businessDetails.phones,
    description:
      "F&S Painting provides residential, interior, exterior, strata, commercial, ceiling painting, and mould-damaged ceiling restoration services in Sydney, NSW.",
    areaServed: ["Chatswood", "North Shore", "Sydney"].map((name) => ({
      "@type": "Place",
      name,
    })),
    address: chatswoodAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: chatswoodAddress.street,
          addressLocality: chatswoodAddress.suburb,
          addressRegion: chatswoodAddress.region,
          postalCode: chatswoodAddress.postcode,
          addressCountry: "AU",
        }
      : undefined,
    sameAs: [businessDetails.googleReviewsUrl],
    identifier: [
      {
        "@type": "PropertyValue",
        name: "NSW contractor licence",
        value: "478497C",
      },
      {
        "@type": "PropertyValue",
        name: "Australian Company Number",
        value: "659406265",
      },
      {
        "@type": "PropertyValue",
        name: "Workers compensation policy",
        value: "236870501",
      },
      {
        "@type": "PropertyValue",
        name: "Public liability policy",
        value: "AAMI SPD012776314",
      },
    ],
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

export function breadcrumbSchema(
  items: { name: string; path: string }[],
  id?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
