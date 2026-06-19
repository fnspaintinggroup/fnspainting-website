import { blogPosts as fallbackBlogPosts, type BlogPost } from "@/lib/blog-posts";
import {
  galleryCategories,
  galleryCollections as fallbackGalleryCollections,
  galleryImages as fallbackGalleryImages,
  type GalleryCategory,
  type GalleryCollection,
  type GalleryCollectionImage,
  type GalleryImage,
} from "@/lib/gallery";
import { projects as fallbackProjects, type Project } from "@/lib/projects";
import { reviews as fallbackReviews, services as fallbackServices } from "@/lib/site-data";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { getGoogleBusinessProfileReviews } from "@/lib/review-providers";
import { absoluteUrl } from "@/lib/seo";

export type CmsReview = {
  customerName: string;
  rating: number;
  reviewText: string;
  source?: string;
  date?: string;
  featured?: boolean;
};

export type CmsService = {
  title: string;
  slug: string;
  summary: string;
  description?: string;
};

type SanityBlogPost = Omit<BlogPost, "body"> & {
  body: PortableTextBlock[];
  bodySource: "sanity";
};

export type CmsBlogPost = BlogPost | SanityBlogPost;

type SanityProject = Project & {
  fullProjectDescription?: PortableTextBlock[];
  bodySource?: "sanity";
};

export type CmsProject = Project | SanityProject;

type SanityGalleryCollection = Omit<GalleryCollection, "images" | "category"> & {
  category: string;
  images?: GalleryCollectionImage[];
};

const blogPostFields = `{
  title,
  "slug": slug.current,
  "date": publishedDate,
  category,
  "featuredImage": featuredImage.asset->url,
  "imageAlt": coalesce(featuredImage.alt, title),
  excerpt,
  body,
  "seoTitle": coalesce(seoTitle, title),
  "seoDescription": coalesce(seoDescription, excerpt)
}`;

const projectFields = `{
  title,
  "slug": slug.current,
  "location": suburb,
  serviceType,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  "beforeImageAlt": coalesce(beforeImage.alt, title + " before painting"),
  "afterImageAlt": coalesce(afterImage.alt, title + " after painting"),
  "description": shortDescription,
  "fullProjectDescription": fullProjectDescription,
  "materials": paintUsed,
  completionDate,
  "seoTitle": coalesce(seoTitle, title),
  "seoDescription": coalesce(seoDescription, shortDescription),
  "bodySource": "sanity"
}`;

const galleryCollectionFields = `{
  title,
  "slug": slug.current,
  category,
  suburb,
  summary,
  completionDate,
  "coverImage": coverImage.asset->url,
  "coverAlt": coalesce(coverImage.alt, title + " painting gallery"),
  "images": images[]{
    title,
    "image": image.asset->url,
    "alt": coalesce(image.alt, title),
    caption
  }
}`;

async function fetchSanity<T>(query: string, params: Record<string, string> = {}) {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

function applyLocalProjectCorrections<T extends CmsProject>(project: T): T {
  const localProject = fallbackProjects.find((item) => item.slug === project.slug);

  if (!localProject) {
    return project;
  }

  return {
    ...project,
    completionDate: localProject.completionDate,
  };
}

function sortProjectsByCompletionDate(projects: CmsProject[]) {
  return [...projects].sort(
    (a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime(),
  );
}

function mergeProjectsWithLocalCorrections(projects: SanityProject[]) {
  const correctedProjects = projects.map((project) => applyLocalProjectCorrections(project));
  const sanitySlugs = new Set(correctedProjects.map((project) => project.slug));
  const localOnlyProjects = fallbackProjects.filter((project) => !sanitySlugs.has(project.slug));

  return sortProjectsByCompletionDate([...correctedProjects, ...localOnlyProjects]);
}

function toGalleryCategory(category: string): GalleryCategory {
  return galleryCategories.includes(category as GalleryCategory)
    ? (category as GalleryCategory)
    : "Interior Painting";
}

function normalizeSanityGalleryCollection(
  collection: SanityGalleryCollection,
): GalleryCollection | null {
  const images = (collection.images ?? []).filter((item) => item.image);

  if (!collection.slug || !collection.coverImage || images.length === 0) {
    return null;
  }

  return {
    ...collection,
    category: toGalleryCategory(collection.category),
    images,
  };
}

function mergeGalleryCollections(collections: GalleryCollection[]) {
  const sanitySlugs = new Set(collections.map((collection) => collection.slug));
  const localOnlyCollections = fallbackGalleryCollections.filter(
    (collection) => !sanitySlugs.has(collection.slug),
  );

  return [...collections, ...localOnlyCollections];
}

function galleryCardFromCollection(collection: GalleryCollection): GalleryImage {
  return {
    title: collection.title,
    category: collection.category,
    image: collection.coverImage,
    alt: collection.coverAlt,
    caption: collection.summary,
    suburb: collection.suburb,
    collectionSlug: collection.slug,
    photoCount: collection.images.length,
  };
}

async function getSanityGalleryCollections() {
  const collections = await fetchSanity<SanityGalleryCollection[]>(
    `*[_type == "galleryCollection" && defined(slug.current)] | order(completionDate desc, title asc) ${galleryCollectionFields}`,
  );

  return (
    collections
      ?.map((collection) => normalizeSanityGalleryCollection(collection))
      .filter((collection): collection is GalleryCollection => Boolean(collection)) ?? []
  );
}

export async function getBlogPosts(): Promise<CmsBlogPost[]> {
  const posts = await fetchSanity<SanityBlogPost[]>(
    `*[_type == "blogPost" && defined(slug.current)] | order(publishedDate desc) ${blogPostFields}`,
  );

  return posts?.length ? posts.map((post) => ({ ...post, bodySource: "sanity" })) : fallbackBlogPosts;
}

export async function getBlogPost(slug: string): Promise<CmsBlogPost | undefined> {
  const post = await fetchSanity<SanityBlogPost | null>(
    `*[_type == "blogPost" && slug.current == $slug][0] ${blogPostFields}`,
    { slug },
  );

  return post ? { ...post, bodySource: "sanity" } : fallbackBlogPosts.find((item) => item.slug === slug);
}

export async function getProjectList(): Promise<CmsProject[]> {
  const projects = await fetchSanity<SanityProject[]>(
    `*[_type == "project" && defined(slug.current)] | order(completionDate desc) ${projectFields}`,
  );

  return projects?.length ? mergeProjectsWithLocalCorrections(projects) : fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<CmsProject | undefined> {
  const project = await fetchSanity<SanityProject | null>(
    `*[_type == "project" && slug.current == $slug][0] ${projectFields}`,
    { slug },
  );

  return project
    ? applyLocalProjectCorrections(project)
    : fallbackProjects.find((item) => item.slug === slug);
}

export async function getGalleryCollections(): Promise<GalleryCollection[]> {
  const collections = await getSanityGalleryCollections();

  if (!collections.length) {
    return fallbackGalleryCollections;
  }

  return mergeGalleryCollections(collections);
}

export async function getGalleryCollectionBySlug(
  slug: string,
): Promise<GalleryCollection | undefined> {
  const collection = await fetchSanity<SanityGalleryCollection | null>(
    `*[_type == "galleryCollection" && slug.current == $slug][0] ${galleryCollectionFields}`,
    { slug },
  );
  const normalizedCollection = collection ? normalizeSanityGalleryCollection(collection) : null;

  return (
    normalizedCollection ?? fallbackGalleryCollections.find((item) => item.slug === slug)
  );
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const sanityCollections = await getSanityGalleryCollections();

  if (!sanityCollections.length) {
    return fallbackGalleryImages;
  }

  const mergedCollections = mergeGalleryCollections(sanityCollections);
  const cardsBySlug = new Map(
    mergedCollections.map((collection) => [collection.slug, galleryCardFromCollection(collection)]),
  );
  const localCollectionSlugs = new Set(
    fallbackGalleryImages
      .map((image) => image.collectionSlug)
      .filter((slug): slug is string => Boolean(slug)),
  );
  const newSanityCards = sanityCollections
    .filter((collection) => !localCollectionSlugs.has(collection.slug))
    .map((collection) => galleryCardFromCollection(collection));
  const existingCards = fallbackGalleryImages.map((image) =>
    image.collectionSlug ? (cardsBySlug.get(image.collectionSlug) ?? image) : image,
  );

  return [...newSanityCards, ...existingCards];
}

export async function getReviews(): Promise<CmsReview[]> {
  const reviews = await fetchSanity<CmsReview[]>(
    `*[_type == "review"] | order(featured desc, date desc) {
      customerName,
      rating,
      reviewText,
      source,
      date,
      featured
    }`,
  );

  return reviews?.length
    ? reviews
    : fallbackReviews.map((review) => ({
        customerName: review.name,
        rating: review.rating,
        reviewText: review.quote,
        source: "Google",
        featured: true,
      }));
}

export async function getSelectedReviews(limit = 3): Promise<CmsReview[]> {
  const googleReviews = await getGoogleBusinessProfileReviews();

  if (googleReviews?.length) {
    return googleReviews.slice(0, limit);
  }

  const reviews = await getReviews();
  const featuredReviews = reviews.filter((review) => review.featured !== false);

  return (featuredReviews.length ? featuredReviews : reviews).slice(0, limit);
}

export async function getServices(): Promise<CmsService[]> {
  const services = await fetchSanity<CmsService[]>(
    `*[_type == "service"] | order(displayOrder asc, title asc) {
      title,
      "slug": slug.current,
      summary,
      description
    }`,
  );

  return services?.length
    ? services
    : fallbackServices.map((service) => ({
        title: service.title,
        slug: service.title
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
        summary: service.summary,
      }));
}

export function toAbsoluteUrl(pathOrUrl: string) {
  return absoluteUrl(pathOrUrl);
}
