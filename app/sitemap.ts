import type { MetadataRoute } from "next";
import { getBlogPosts, getProjectList } from "@/lib/cms";
import { galleryCollections } from "@/lib/gallery";
import { siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/projects",
    "/painting-gallery",
    "/painting-tips",
    "/reviews",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const [blogPosts, projects] = await Promise.all([getBlogPosts(), getProjectList()]);

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/painting-tips/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(project.completionDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const galleryCollectionRoutes = galleryCollections.map((collection) => ({
    url: `${siteUrl}/painting-gallery/${collection.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes, ...galleryCollectionRoutes];
}
