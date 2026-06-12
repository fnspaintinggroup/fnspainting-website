export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  featuredImage: string;
  imageAlt: string;
  excerpt: string;
  body: BlogSection[];
  seoTitle: string;
  seoDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How Much Does House Painting Cost in Sydney?",
    slug: "house-painting-cost-sydney",
    date: "2026-02-18",
    category: "Painting Costs",
    featuredImage: "/images/fs-painting-hero.png",
    imageAlt: "Professional painter applying fresh interior paint in a Sydney home",
    excerpt:
      "House painting costs in Sydney depend on property size, surface condition, access, preparation, paint type, and whether the work is interior, exterior, or both.",
    seoTitle: "How Much Does House Painting Cost in Sydney? | F&S Painting",
    seoDescription:
      "Learn what affects house painting costs in Sydney, including preparation, property size, access, paint systems, and quote details.",
    body: [
      {
        heading: "What affects the cost of house painting?",
        paragraphs: [
          "The biggest cost drivers are the size of the area, the condition of the surfaces, the amount of preparation required, and whether scaffolding, repairs, stain blocking, or mould treatment is needed.",
          "Interior painting is usually more predictable than exterior work because weather, access, timber condition, and previous coating failure can all change the preparation needed outside.",
        ],
      },
      {
        heading: "Why preparation matters",
        paragraphs: [
          "A cheaper quote can become expensive if the preparation is rushed. Cleaning, sanding, patching, sealing, and choosing the right paint system all affect how long the finish lasts.",
          "For ceilings, water stains or mould marks should be assessed before repainting. F&S Painting can include ceiling repainting or mould-damaged ceiling restoration in the quote scope when needed.",
        ],
      },
      {
        heading: "How to get a clearer quote",
        paragraphs: [
          "Share photos, room dimensions, access notes, and whether you need walls, trims, doors, ceilings, or exterior areas painted. The more accurate the brief, the easier it is to prepare a useful quote.",
          "If you are planning a repaint, start with the F&S Painting services page or request a free quote with details about your Sydney property.",
        ],
      },
    ],
  },
  {
    title: "Best Paint Finish for Interior Walls in Sydney Homes",
    slug: "best-paint-finish-interior-walls-sydney",
    date: "2026-03-07",
    category: "Interior Painting",
    featuredImage: "/images/fs-painting-hero.png",
    imageAlt: "Freshly painted interior wall with a clean low sheen finish",
    excerpt:
      "The best interior paint finish depends on light, room use, cleaning needs, and how much surface texture you want to hide.",
    seoTitle: "Best Paint Finish for Interior Walls in Sydney Homes | F&S Painting",
    seoDescription:
      "Compare matte, low sheen, satin, and washable interior paint finishes for Sydney homes, apartments, and renovation projects.",
    body: [
      {
        heading: "Low sheen is a practical all-rounder",
        paragraphs: [
          "For many Sydney homes, low sheen paint is a reliable choice for living rooms, bedrooms, and hallways. It is easier to clean than flat paint while still looking soft and modern.",
          "Low sheen can also work well in apartments and family homes where walls need occasional wiping without looking overly glossy.",
        ],
      },
      {
        heading: "Matte finishes look soft but need care",
        paragraphs: [
          "Matte finishes can hide minor wall imperfections and create a calm look, especially in bedrooms and formal spaces. The trade-off is that some matte paints are less washable.",
          "If a room gets heavy traffic, ask about premium washable matte options or consider low sheen for better durability.",
        ],
      },
      {
        heading: "Use tougher finishes where needed",
        paragraphs: [
          "Kitchens, laundries, trims, and doors often need more durable coatings. Satin or semi-gloss finishes can be easier to wipe down, but they also show surface defects more clearly.",
          "A professional interior painting quote should match the finish to the room, surface condition, and day-to-day use.",
        ],
      },
    ],
  },
  {
    title: "How to Fix Mould-Damaged Ceilings Before Painting",
    slug: "fix-mould-damaged-ceilings-before-painting",
    date: "2026-04-12",
    category: "Ceiling Restoration",
    featuredImage: "/images/fs-painting-hero.png",
    imageAlt: "Painter preparing a ceiling and wall area before repainting",
    excerpt:
      "Mould-damaged ceilings should not simply be painted over. Moisture, staining, surface damage, and ventilation issues need to be addressed first.",
    seoTitle: "How to Fix Mould-Damaged Ceilings Before Painting | F&S Painting",
    seoDescription:
      "Find out how mould-damaged ceilings should be prepared before repainting, including moisture checks, cleaning, sealing, and finish restoration.",
    body: [
      {
        heading: "Find the moisture source first",
        paragraphs: [
          "Before repainting, the cause of mould or staining should be understood. Common issues include roof leaks, bathroom ventilation problems, condensation, or previous water damage.",
          "Painting over active moisture can lead to stains returning, peeling paint, and recurring mould marks.",
        ],
      },
      {
        heading: "Prepare and seal the affected area",
        paragraphs: [
          "Once the source is resolved, the ceiling may need cleaning, surface repairs, sanding, stain blocking, and a suitable primer before repainting.",
          "Badly affected plaster, flaking paint, or soft ceiling areas may need repair before any finish coat is applied.",
        ],
      },
      {
        heading: "Choose the right repaint system",
        paragraphs: [
          "Ceiling repainting after mould damage often needs more than standard ceiling paint. The coating system should suit the room, ventilation, and surface condition.",
          "F&S Painting offers mould-damaged ceiling restoration and ceiling repainting for Sydney homes where careful preparation is needed before the final finish.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
