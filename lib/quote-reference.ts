import { getGalleryCollections, getProjectBySlug } from "@/lib/cms";

export type QuoteReference = {
  kind: "gallery" | "project";
  slug: string;
  title: string;
  location: string;
  service: string;
  path: string;
};

const serviceNames: Record<string, string> = {
  "residential painting": "Residential painting", "interior painting": "Interior painting",
  "exterior painting": "Exterior painting", "strata painting": "Strata painting",
  "commercial painting": "Commercial painting", "ceiling restoration": "Ceiling repainting",
  "timber window painting": "Timber window painting",
};

export function quoteReferenceHref(kind: "gallery" | "project", slug: string) {
  const query = new URLSearchParams({ reference: kind, project: slug });
  return `/contact?${query.toString()}#quote-form`;
}

export async function resolveQuoteReference(kind: string, slug: string): Promise<QuoteReference | null> {
  if (!/^[a-z0-9-]{1,120}$/.test(slug)) return null;
  if (kind === "gallery") {
    const item = (await getGalleryCollections()).find((entry) => entry.slug === slug);
    return item ? {
      kind, slug: item.slug, title: item.title, location: item.suburb,
      service: serviceNames[item.category.toLowerCase()] || "", path: `/painting-gallery/${item.slug}`,
    } : null;
  }
  if (kind === "project") {
    const item = await getProjectBySlug(slug);
    return item ? {
      kind, slug: item.slug, title: item.title, location: item.location,
      service: serviceNames[item.serviceType.toLowerCase()] || "", path: `/projects/${item.slug}`,
    } : null;
  }
  return null;
}
