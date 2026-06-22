import { defineField, defineType } from "sanity";
import { slugifyTitle, validateUrlSlug } from "./slug";

export const galleryCollection = defineType({
  name: "galleryCollection",
  title: "Gallery Collection",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Click Generate. Keep this as a short URL, for example chatswood-interior-gallery.",
      options: { source: "title", maxLength: 96, slugify: slugifyTitle },
      validation: (rule) => rule.required().custom(validateUrlSlug),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Interior Painting", value: "Interior Painting" },
          { title: "Exterior Painting", value: "Exterior Painting" },
          { title: "Ceiling Restoration", value: "Ceiling Restoration" },
          { title: "Commercial Painting", value: "Commercial Painting" },
          { title: "Strata Painting", value: "Strata Painting" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "suburb",
      title: "Suburb / Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Gallery Photos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Photo Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
              ],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "text",
              rows: 2,
              validation: (rule) => rule.required().max(220),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "caption",
              media: "image",
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "suburb",
      media: "coverImage",
    },
  },
});
