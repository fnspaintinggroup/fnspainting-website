const fs = require("fs");
const path = require("path");
const Module = require("module");
const ts = require("typescript");
const { getCliClient } = require("sanity/cli");

const client = getCliClient({ apiVersion: "2026-06-12" });
const root = process.cwd();
const dryRun = process.argv.includes("--dry-run");
let existingIds = new Set();
const skipped = {
  service: 0,
  review: 0,
  blogPost: 0,
  project: 0,
  galleryCollection: 0,
};

function loadTsModule(relativePath) {
  const filePath = path.join(root, relativePath);
  const source = fs.readFileSync(filePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;
  const mod = new Module(filePath, module);
  mod.filename = filePath;
  mod.paths = Module._nodeModulePaths(path.dirname(filePath));
  mod._compile(output, filePath);
  return mod.exports;
}

function slugId(prefix, value) {
  return `${prefix}.${value.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-|-$/g, "")}`;
}

function localImagePath(sitePath) {
  if (!sitePath || sitePath.startsWith("http")) {
    return null;
  }

  return path.join(root, "public", sitePath.replace(/^\//, ""));
}

async function uploadImage(sitePath, alt) {
  const imagePath = localImagePath(sitePath);

  if (!imagePath || !fs.existsSync(imagePath)) {
    throw new Error(`Missing image file: ${sitePath}`);
  }

  if (dryRun) {
    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: "dry-run-image-asset",
      },
      alt,
    };
  }

  const asset = await client.assets.upload("image", fs.createReadStream(imagePath), {
    filename: path.basename(imagePath),
  });

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
    alt,
  };
}

function toBlock(text, prefix) {
  return {
    _type: "block",
    _key: `${prefix}-p`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${prefix}-s`,
        text,
        marks: [],
      },
    ],
  };
}

function blogBodyToPortableText(sections, slug) {
  const blocks = [];

  for (const [sectionIndex, section] of sections.entries()) {
    blocks.push({
      _type: "block",
      _key: `${slug}-h-${sectionIndex}`,
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: `${slug}-h-${sectionIndex}-s`,
          text: section.heading,
          marks: [],
        },
      ],
    });

    for (const [paragraphIndex, paragraph] of section.paragraphs.entries()) {
      blocks.push(toBlock(paragraph, `${slug}-${sectionIndex}-${paragraphIndex}`));
    }
  }

  return blocks;
}

async function upsertDocument(doc) {
  if (existingIds.has(doc._id)) {
    const type = doc._type;

    if (type in skipped) {
      skipped[type] += 1;
    }

    return doc._id;
  }

  if (dryRun) {
    return doc._id;
  }

  await client.createOrReplace(doc);
  return doc._id;
}

async function migrateServices(services) {
  let count = 0;

  for (const [index, service] of services.entries()) {
    const slug =
      service.href?.startsWith("/services/")
        ? service.href.replace("/services/", "")
        : service.title
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

    await upsertDocument({
      _id: slugId("service", slug),
      _type: "service",
      title: service.title,
      slug: { _type: "slug", current: slug },
      summary: service.summary,
      description: service.summary,
      displayOrder: index + 1,
    });
    count += 1;
  }

  return count;
}

async function migrateReviews(reviews) {
  let count = 0;

  for (const [index, review] of reviews.entries()) {
    await upsertDocument({
      _id: slugId("review", `${review.name}-${index}`),
      _type: "review",
      customerName: review.name,
      rating: review.rating,
      reviewText: review.quote,
      source: "Google",
      featured: true,
      date: "2026-06-12",
    });
    count += 1;
  }

  return count;
}

async function migrateBlogPosts(blogPosts) {
  let count = 0;

  for (const post of blogPosts) {
    const featuredImage = await uploadImage(post.featuredImage, post.imageAlt);

    await upsertDocument({
      _id: slugId("blogPost", post.slug),
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      publishedDate: post.date,
      category: post.category,
      featuredImage,
      excerpt: post.excerpt,
      body: blogBodyToPortableText(post.body, post.slug),
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
    });
    count += 1;
  }

  return count;
}

async function migrateProjects(projects) {
  let count = 0;

  for (const project of projects) {
    const beforeImage = await uploadImage(project.beforeImage, project.beforeImageAlt);
    const afterImage = await uploadImage(project.afterImage, project.afterImageAlt);

    await upsertDocument({
      _id: slugId("project", project.slug),
      _type: "project",
      title: project.title,
      slug: { _type: "slug", current: project.slug },
      suburb: project.location,
      serviceType: project.serviceType,
      beforeImage,
      afterImage,
      shortDescription: project.description,
      fullProjectDescription: [toBlock(project.description, `${project.slug}-description`)],
      paintUsed: project.materials,
      completionDate: project.completionDate,
      seoTitle: project.seoTitle,
      seoDescription: project.seoDescription,
    });
    count += 1;
  }

  return count;
}

async function migrateGalleryCollections(collections) {
  let count = 0;

  for (const collection of collections) {
    const coverImage = await uploadImage(collection.coverImage, collection.coverAlt);
    const images = [];

    for (const [index, item] of collection.images.entries()) {
      images.push({
        _key: `${collection.slug}-${index}`,
        _type: "object",
        title: item.title,
        image: await uploadImage(item.image, item.alt),
        caption: item.caption,
      });
    }

    await upsertDocument({
      _id: slugId("galleryCollection", collection.slug),
      _type: "galleryCollection",
      title: collection.title,
      slug: { _type: "slug", current: collection.slug },
      category: collection.category,
      suburb: collection.suburb,
      summary: collection.summary,
      completionDate: collection.completionDate,
      coverImage,
      images,
    });
    count += 1;
  }

  return count;
}

async function main() {
  const { blogPosts } = loadTsModule("lib/blog-posts.ts");
  const { projects } = loadTsModule("lib/projects.ts");
  const { galleryCollections } = loadTsModule("lib/gallery.ts");
  const { services, reviews } = loadTsModule("lib/site-data.ts");

  const before = await client.fetch(
    `{
      "blogPost": count(*[_type == "blogPost"]),
      "project": count(*[_type == "project"]),
      "galleryCollection": count(*[_type == "galleryCollection"]),
      "review": count(*[_type == "review"]),
      "service": count(*[_type == "service"])
    }`,
  );
  existingIds = new Set(
    await client.fetch(
      `*[_type in ["blogPost", "project", "galleryCollection", "review", "service"]]._id`,
    ),
  );

  const migrated = {
    service: await migrateServices(services),
    review: await migrateReviews(reviews),
    blogPost: await migrateBlogPosts(blogPosts),
    project: await migrateProjects(projects),
    galleryCollection: await migrateGalleryCollections(galleryCollections),
  };

  const after = dryRun
    ? before
    : await client.fetch(
        `{
          "blogPost": count(*[_type == "blogPost"]),
          "project": count(*[_type == "project"]),
          "galleryCollection": count(*[_type == "galleryCollection"]),
          "review": count(*[_type == "review"]),
          "service": count(*[_type == "service"])
        }`,
      );

  console.log(JSON.stringify({ dryRun, before, migrated, skipped, after }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
