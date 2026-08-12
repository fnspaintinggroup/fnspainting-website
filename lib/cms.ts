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
import { createUrlSlug } from "@/lib/url-slug";

export type CmsReview = {
  customerName: string;
  rating?: number;
  reviewText: string;
  source?: string;
  sourceUrl?: string;
  projectContext?: string;
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

type WithOptionalSlug<T extends { title: string; slug: string }> = Omit<T, "slug"> & {
  slug?: string;
};

const isNetworkRestrictedBuild = process.env.CODEX_SANDBOX_NETWORK_DISABLED === "1";

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
  if (!isSanityConfigured || isNetworkRestrictedBuild) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

function ensureSlug<T extends { title: string; slug?: string }>(item: T): T & { slug: string } {
  return {
    ...item,
    slug: item.slug || createUrlSlug(item.title),
  };
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

function mergeProjectsWithLocalCorrections(projects: Array<WithOptionalSlug<SanityProject>>) {
  const correctedProjects = projects
    .map((project) => ensureSlug(project))
    .map((project) => applyLocalProjectCorrections(project));
  const sanitySlugs = new Set(correctedProjects.map((project) => project.slug));
  const localOnlyProjects = fallbackProjects.filter((project) => !sanitySlugs.has(project.slug));

  return sortProjectsByCompletionDate([...correctedProjects, ...localOnlyProjects]);
}

function sortBlogPostsByDate(posts: CmsBlogPost[]) {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function mergeBlogPosts(posts: Array<WithOptionalSlug<SanityBlogPost>>) {
  const cmsPosts = posts.map((post) => ({
    ...ensureSlug(post),
    bodySource: "sanity" as const,
  }));
  const sanitySlugs = new Set(cmsPosts.map((post) => post.slug));
  const localOnlyPosts = fallbackBlogPosts.filter((post) => !sanitySlugs.has(post.slug));

  return sortBlogPostsByDate([...cmsPosts, ...localOnlyPosts]);
}

function fallbackCmsReviews(): CmsReview[] {
  return fallbackReviews.map((review) => ({
    customerName: review.name,
    rating: review.rating,
    reviewText: review.quote,
    source: "Google",
    featured: true,
  }));
}

function reviewKey(review: CmsReview) {
  return `${review.customerName.toLowerCase()}::${review.reviewText.toLowerCase()}`;
}

function mergeReviews(reviews: CmsReview[]) {
  const sanityReviewKeys = new Set(reviews.map((review) => reviewKey(review)));
  const localOnlyReviews = fallbackCmsReviews().filter(
    (review) => !sanityReviewKeys.has(reviewKey(review)),
  );

  return [...reviews, ...localOnlyReviews];
}

function fallbackCmsServices(): CmsService[] {
  return fallbackServices.map((service) => ({
    title: service.title,
    slug: service.title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    summary: service.summary,
  }));
}

function mergeServices(services: Array<WithOptionalSlug<CmsService>>) {
  const cmsServices = services.map((service) => ensureSlug(service));
  const sanitySlugs = new Set(cmsServices.map((service) => service.slug));
  const localOnlyServices = fallbackCmsServices().filter(
    (service) => !sanitySlugs.has(service.slug),
  );

  return [...cmsServices, ...localOnlyServices];
}

function toGalleryCategory(category: string): GalleryCategory {
  return galleryCategories.includes(category as GalleryCategory)
    ? (category as GalleryCategory)
    : "Interior Painting";
}

function normalizeSanityGalleryCollection(
  collection: WithOptionalSlug<SanityGalleryCollection>,
): GalleryCollection | null {
  const images = (collection.images ?? []).filter((item) => item.image);

  if (!collection.coverImage || images.length === 0) {
    return null;
  }

  return {
    ...ensureSlug(collection),
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
  const collections = await fetchSanity<Array<WithOptionalSlug<SanityGalleryCollection>>>(
    `*[_type == "galleryCollection"] | order(completionDate desc, title asc) ${galleryCollectionFields}`,
  );

  return (
    collections
      ?.map((collection) => normalizeSanityGalleryCollection(collection))
      .filter((collection): collection is GalleryCollection => Boolean(collection)) ?? []
  );
}

export async function getBlogPosts(): Promise<CmsBlogPost[]> {
  const posts = await fetchSanity<Array<WithOptionalSlug<SanityBlogPost>>>(
    `*[_type == "blogPost"] | order(publishedDate desc) ${blogPostFields}`,
  );

  return posts?.length ? mergeBlogPosts(posts) : fallbackBlogPosts;
}

export async function getBlogPost(slug: string): Promise<CmsBlogPost | undefined> {
  const post = await fetchSanity<WithOptionalSlug<SanityBlogPost> | null>(
    `*[_type == "blogPost" && slug.current == $slug][0] ${blogPostFields}`,
    { slug },
  );

  if (post) {
    return { ...ensureSlug(post), bodySource: "sanity" };
  }

  const posts = await getBlogPosts();

  return posts.find((item) => item.slug === slug) ?? fallbackBlogPosts.find((item) => item.slug === slug);
}

export async function getProjectList(): Promise<CmsProject[]> {
  const projects = await fetchSanity<Array<WithOptionalSlug<SanityProject>>>(
    `*[_type == "project"] | order(completionDate desc) ${projectFields}`,
  );

  return projects?.length ? mergeProjectsWithLocalCorrections(projects) : fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<CmsProject | undefined> {
  const project = await fetchSanity<WithOptionalSlug<SanityProject> | null>(
    `*[_type == "project" && slug.current == $slug][0] ${projectFields}`,
    { slug },
  );

  if (project) {
    return applyLocalProjectCorrections(ensureSlug(project));
  }

  const projects = await getProjectList();

  return projects.find((item) => item.slug === slug) ?? fallbackProjects.find((item) => item.slug === slug);
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
  const collection = await fetchSanity<WithOptionalSlug<SanityGalleryCollection> | null>(
    `*[_type == "galleryCollection" && slug.current == $slug][0] ${galleryCollectionFields}`,
    { slug },
  );
  const normalizedCollection = collection ? normalizeSanityGalleryCollection(collection) : null;

  if (!normalizedCollection) {
    const collections = await getGalleryCollections();

    return (
      collections.find((item) => item.slug === slug) ??
      fallbackGalleryCollections.find((item) => item.slug === slug)
    );
  }

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

  return reviews?.length ? mergeReviews(reviews) : fallbackCmsReviews();
}

export async function getSelectedReviews(limit = 3): Promise<CmsReview[]> {
  const googleReviews = await getGoogleBusinessProfileReviews();
  const mixedSourceReviews: CmsReview[] = [
    {
      customerName: "D. B.",
      reviewText: "Thank you again for the great job you did painting my apartment.",
      source: "Direct customer feedback",
      projectContext: "Chatswood apartment repaint",
      featured: true,
    },
    {
      customerName: "Sally B.",
      reviewText:
        "Caleb was so professional — we are super happy with the job he did for us. He went above and beyond for us. Would recommend him to anyone and we will be using him again for sure!",
      source: "Facebook recommendation",
      sourceUrl: "https://www.facebook.com/fnspainting/reviews",
      date: "2019-02-23",
      featured: true,
    },
    {
      customerName: "S. S.",
      reviewText: "A very BIG thank you for painting our house... we love it!",
      source: "Direct customer feedback",
      projectContext: "Whole-house painting",
      date: "2021-12-30",
      featured: true,
    },
    {
      customerName: "L.",
      reviewText:
        "We are very happy with the job you and your team have done and appreciate that you were able to meet our tight timeframe. I will happily recommend you.",
      source: "Direct customer feedback",
      projectContext: "Residential painting",
      date: "2018-03-28",
      featured: true,
    },
    {
      customerName: "N. C.",
      reviewText:
        "Thanks Caleb for doing such a fantastic job. We will recommend you to our family and friends.",
      source: "Direct customer feedback",
      projectContext: "Residential painting",
      date: "2021-11-14",
      featured: true,
    },
    {
      customerName: "G. L.",
      reviewText: "The room looks really fantastic. Thanks for doing a great job — we all love it.",
      source: "Direct customer feedback",
      projectContext: "Interior room repaint",
      date: "2018-09-02",
      featured: true,
    },
    {
      customerName: "L. W.",
      reviewText:
        "We're so happy to support a family business that does such an amazing job. We'll definitely keep recommending you.",
      source: "Direct customer feedback",
      projectContext: "North Shore residential painting",
      date: "2026-07-27",
      featured: true,
    },
    {
      customerName: "T.",
      reviewText: "Mum is so happy with the painting. Thank you.",
      source: "Direct customer feedback",
      projectContext: "Residential painting",
      date: "2023-05-13",
      featured: true,
    },
    {
      customerName: "R.",
      reviewText: "Thank you for your work. I am so pleased with the outcome.",
      source: "Direct customer feedback",
      projectContext: "Residential repaint",
      date: "2025-12-09",
      featured: true,
    },
    {
      customerName: "S. S.",
      reviewText:
        "Thank you for all your hard work and looking after our place. It was a pleasure having you refresh our home.",
      source: "Direct customer feedback",
      projectContext: "Home refresh",
      date: "2025-08-26",
      featured: true,
    },
    {
      customerName: "N.",
      reviewText: "I LOVE both of the rooms! They are wonderful — thank you so much!",
      source: "Direct customer feedback",
      projectContext: "Two-room interior repaint",
      date: "2025-06-27",
      featured: true,
    },
    {
      customerName: "S.",
      reviewText: "Thank you for another wonderful job, Caleb!",
      source: "Direct customer feedback",
      projectContext: "Repeat customer painting",
      date: "2025-04-03",
      featured: true,
    },
    {
      customerName: "M. G.",
      reviewText: "Thank you very much, Caleb, for all of that painting. Much appreciated indeed!",
      source: "Direct customer feedback",
      projectContext: "Residential painting",
      date: "2024-07-24",
      featured: true,
    },
    {
      customerName: "M.",
      reviewText: "Just been to the house — it is looking amazing. Thank you!",
      source: "Direct customer feedback",
      projectContext: "House repaint",
      date: "2024-05-03",
      featured: true,
    },
    {
      customerName: "G. L.",
      reviewText: "The rooms look really beautiful. I'm really happy. Thank you.",
      source: "Direct customer feedback",
      projectContext: "Interior room repaint",
      date: "2018-02-02",
      featured: true,
    },
    {
      customerName: "C. L.",
      reviewText: "Final payment has been made. Thank you for your hard work!",
      source: "Direct customer feedback",
      projectContext: "Completed residential painting",
      date: "2024-06-18",
      featured: true,
    },
    {
      customerName: "L. W.",
      reviewText: "I have recommended you to a friend in Willoughby. We'll definitely keep recommending you whenever we can.",
      source: "Customer referral",
      projectContext: "Willoughby referral",
      date: "2026-07-27",
      featured: true,
    },
    {
      customerName: "T. & E.",
      reviewText: "I recommended you to my friend as he is looking for some painting done to his house.",
      source: "Customer referral",
      projectContext: "House-painting referral",
      date: "2025-08-11",
      featured: true,
    },
    {
      customerName: "K. C.",
      reviewText: "You have been recommended by a few friends in Newington.",
      source: "Customer referral",
      projectContext: "Newington word of mouth",
      date: "2020-09-07",
      featured: true,
    },
    {
      customerName: "C. L.",
      reviewText: "Lendy in North Willoughby has highly recommended your team.",
      source: "Customer referral",
      projectContext: "North Willoughby referral",
      date: "2024-05-03",
      featured: true,
    },
    {
      customerName: "G.",
      reviewText: "A colleague at First National highly recommends you for painting work.",
      source: "Customer referral",
      projectContext: "Property professional referral",
      date: "2020-05-06",
      featured: true,
    },
    {
      customerName: "S.",
      reviewText: "A previous customer from Collaroy Plateau recommended you for this painting work.",
      source: "Customer referral",
      projectContext: "Northern Beaches referral",
      date: "2020-05-15",
      featured: true,
    },
    {
      customerName: "P.",
      reviewText: "You came highly recommended before our painting work.",
      source: "Customer referral",
      projectContext: "Word-of-mouth referral",
      date: "2023-09-26",
      featured: true,
    },
    {
      customerName: "H.",
      reviewText: "I got your number from Tanya and Frank when I needed rooms in my house painted.",
      source: "Customer referral",
      projectContext: "Cromer referral",
      date: "2025-11-19",
      featured: true,
    },
  ];
  const allAvailableReviews = await getReviews();
  const featuredReviews = allAvailableReviews.filter((review) => review.featured !== false);
  const eligibleReviews = (featuredReviews.length ? featuredReviews : allAvailableReviews).filter(
    (review) =>
      review.customerName.toLowerCase() !== "josh u." &&
      !mixedSourceReviews.some((mixedReview) => reviewKey(mixedReview) === reviewKey(review)),
  );

  if (googleReviews?.length) {
    const googleReviewCount = limit <= 8 ? 2 : Math.max(2, limit - mixedSourceReviews.length);
    const firstGoogleReviews = googleReviews.slice(0, Math.min(googleReviewCount, limit));
    const remaining = [...mixedSourceReviews, ...eligibleReviews].slice(
      0,
      Math.max(0, limit - firstGoogleReviews.length),
    );
    return [...firstGoogleReviews, ...remaining];
  }

  const fallbackGoogleReviews = eligibleReviews.filter(
    (review) => (review.source || "Google").toLowerCase() === "google",
  );
  const firstGoogleReviews = fallbackGoogleReviews.slice(0, Math.min(2, limit));
  const usedKeys = new Set(firstGoogleReviews.map((review) => reviewKey(review)));
  const remaining = [...mixedSourceReviews, ...eligibleReviews.filter((review) => !usedKeys.has(reviewKey(review)))].slice(
    0,
    Math.max(0, limit - firstGoogleReviews.length),
  );
  return [...firstGoogleReviews, ...remaining];
}

export async function getServices(): Promise<CmsService[]> {
  const services = await fetchSanity<Array<WithOptionalSlug<CmsService>>>(
    `*[_type == "service"] | order(displayOrder asc, title asc) {
      title,
      "slug": slug.current,
      summary,
      description
    }`,
  );

  return services?.length ? mergeServices(services) : fallbackCmsServices();
}

export function toAbsoluteUrl(pathOrUrl: string) {
  return absoluteUrl(pathOrUrl);
}
