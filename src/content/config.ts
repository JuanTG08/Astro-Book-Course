import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      colombia: z.string().url(),
      usa: z.string().url(),
    }),
  }),
});

export const collections = { books };
