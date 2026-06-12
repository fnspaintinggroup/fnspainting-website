import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule) => rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: ["Google", "Facebook", "Website", "Referral", "Other"],
      },
      initialValue: "Google",
    }),
    defineField({
      name: "featured",
      title: "Show in Selected Reviews",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "source",
    },
  },
});
