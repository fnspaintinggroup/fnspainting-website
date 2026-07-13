import type { MetadataRoute } from "next";
import { getBlogPosts, getGalleryCollections, getProjectList } from "@/lib/cms";
import { siteUrl } from "@/lib/seo";

const contentLastModified = new Date("2026-07-14");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/services/interior-painting",
    "/services/exterior-painting",
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
    "/painters-chatswood",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: contentLastModified,
    changeFrequency:
      route === "" || route === "/painters-chatswood" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/painters-chatswood" ? 0.9 : 0.8,
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
