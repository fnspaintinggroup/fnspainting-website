const { getCliClient } = require("sanity/cli");

const client = getCliClient({ apiVersion: "2026-06-12" });

const slug = "free-quote-with-on-site-consultation";

const sections = [
  {
    heading: "A clear and reliable first step for your painting project",
    paragraphs: [
      "When you are planning a painting project, the quote is often the first real step. It helps you understand the expected cost, the amount of work involved, and whether the painter is the right fit for your home.",
      "In Sydney, many homeowners are not simply looking for the cheapest painting quote. They want a painter they can trust, someone who communicates clearly, explains the process properly, and takes time to understand the condition of the property.",
      "At F&S Painting, we believe a good painting project starts with a clear and honest conversation. A complimentary on-site quote gives you the opportunity to meet us in person, ask questions, and receive a more accurate estimate based on the actual condition of your home.",
    ],
  },
  {
    heading: "Why an on-site painting quote is more accurate",
    paragraphs: [
      "Photos and short descriptions can be helpful, but they do not always show the full picture. Every home is different, and wall condition, ceiling height, surface damage, access, previous paintwork, moisture marks, cracks, preparation needs, and furniture placement can all affect the final scope of work.",
      "During an on-site visit, we can look at these details properly and provide advice based on what your property actually needs. This helps reduce the chance of unexpected costs later and gives you a clearer understanding of what is included before the work begins.",
    ],
  },
  {
    heading: "More than just a price",
    paragraphs: [
      "A painting quote should not only be about the final number. A reliable quote should help you understand the process, including preparation, materials, timing, access, and the expected finish.",
      "For many Sydney homeowners, trust and communication are just as important as price. Meeting your painter in person allows you to see how they communicate, how carefully they assess the work, and whether they take your concerns seriously.",
      "This personal interaction can often give you more confidence than a quote sent only by text or email.",
    ],
  },
  {
    heading: "Helping you avoid misunderstandings",
    paragraphs: [
      "One of the most common problems with remote estimates is that important details can be missed. A room may look simple in photos, but the walls might need extra patching, sanding, stain treatment, or preparation.",
      "Exterior painting may also involve access challenges, weather considerations, or surface issues that are difficult to judge without visiting the property. An on-site quote allows these details to be discussed early, so you can make decisions with a clearer understanding of the scope, cost, and timeline.",
    ],
  },
  {
    heading: "A better way to compare painting quotes",
    paragraphs: [
      "If you are comparing painting quotes, it is important to compare more than the price. A cheaper quote may not always include the same level of preparation, paint quality, number of coats, repair work, or attention to detail.",
      "An on-site consultation gives you the chance to ask what preparation is included, how many coats will be applied, what paint products will be used, how long the job is expected to take, and how the property will be protected during the work.",
      "A clear quote helps you avoid confusion and makes it easier to choose a painter based on quality, trust, and professionalism.",
    ],
  },
  {
    heading: "Suitable for interior and exterior painting projects",
    paragraphs: [
      "A free on-site quote is helpful for many types of residential painting work, including interior painting, exterior painting, ceiling painting, repainting, preparation work, and repair-related painting.",
      "It is especially valuable when the property has older surfaces, previous DIY work, water marks, cracks, peeling paint, or areas that may need extra care before painting. By seeing the property in person, we can recommend a more suitable approach and explain what needs to be done to achieve a clean and lasting finish.",
    ],
  },
  {
    heading: "Start your painting project with confidence",
    paragraphs: [
      "A successful painting project begins before the first coat of paint is applied. It starts with clear communication, careful assessment, and honest advice.",
      "Our free on-site quote is designed to give Sydney homeowners a reliable starting point. You can meet us, discuss your project, understand the work involved, and receive a realistic estimate based on the actual condition of your home.",
      "If you are planning an interior or exterior painting project in Sydney, we would be happy to visit your property and provide a complimentary on-site quote.",
    ],
  },
];

function block(text, key, style = "normal") {
  return {
    _type: "block",
    _key: key,
    style,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${key}-span`,
        text,
        marks: [],
      },
    ],
  };
}

function bodyBlocks() {
  const blocks = [];

  sections.forEach((section, sectionIndex) => {
    blocks.push(block(section.heading, `quote-h-${sectionIndex}`, "h2"));
    section.paragraphs.forEach((paragraph, paragraphIndex) => {
      blocks.push(block(paragraph, `quote-p-${sectionIndex}-${paragraphIndex}`));
    });
  });

  return blocks;
}

async function main() {
  const id = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug,
  });

  if (!id) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  await client.patch(id).set({
    title: "Why a Free On-Site Painting Quote Matters in Sydney",
    excerpt:
      "A free on-site painting quote helps Sydney homeowners get clearer pricing, better planning, and a more reliable start to their painting project.",
    seoTitle: "Free On-Site Painting Quote Sydney | F&S Painting",
    seoDescription:
      "Learn why a free on-site painting quote helps Sydney homeowners get clearer pricing, better planning, and a more reliable start to their painting project.",
    body: bodyBlocks(),
  }).commit();

  const updated = await client.fetch(
    `*[_id == $id][0]{title, "slug": slug.current, excerpt, seoTitle, seoDescription}`,
    { id },
  );
  console.log(JSON.stringify(updated, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
