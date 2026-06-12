import { blogPosts as fallbackBlogPosts, type BlogPost } from "@/lib/blog-posts";
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

  return projects?.length ? projects : fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<CmsProject | undefined> {
  const project = await fetchSanity<SanityProject | null>(
    `*[_type == "project" && slug.current == $slug][0] ${projectFields}`,
    { slug },
  );

  return project || fallbackProjects.find((item) => item.slug === slug);
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
