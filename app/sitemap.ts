import type { MetadataRoute } from "next";
import { getBlogPosts, getGalleryCollections, getProjectList } from "@/lib/cms";
import { siteUrl } from "@/lib/seo";

const contentLastModified = new Date("2026-07-14");
const locationPageLastModified = new Date("2026-08-06");
const languagePageLastModified = new Date("2026-08-09");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/services/interior-painting",
    "/services/exterior-painting",
    "/services/timber-window-painting",
    "/services/residential-painting",
    "/services/strata-painting",
    "/services/commercial-painting",
    "/services/ceiling-repainting",
    "/projects",
    "/painting-gallery",
    "/painting-tips",
    "/about",
    "/reviews",
    "/contact",
    "/privacy-policy",
    "/workmanship-warranty",
    "/painters-chatswood",
    "/painters-willoughby",
    "/painters-lindfield",
    "/zh",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: route.startsWith("/painters-")
      ? locationPageLastModified
      : route === "/zh"
        ? languagePageLastModified
        : contentLastModified,
    changeFrequency:
      route === "" || route.startsWith("/painters-") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/painters-") ? 0.9 : route === "/zh" ? 0.7 : 0.8,
  }));

  const [blogPosts, projects, galleryCollections] = await Promise.all([
    getBlogPosts(),
    getProjectList(),
    getGalleryCollections(),
  ]);

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/painting-tips/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(
      Math.max(
        new Date(project.completionDate).getTime(),
        contentLastModified.getTime(),
      ),
    ),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const galleryCollectionRoutes = galleryCollections.map((collection) => ({
    url: `${siteUrl}/painting-gallery/${collection.slug}`,
    lastModified: collection.completionDate
      ? new Date(
          Math.max(
            new Date(collection.completionDate).getTime(),
            contentLastModified.getTime(),
          ),
        )
      : contentLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...projectRoutes,
    ...galleryCollectionRoutes,
  ];
}
