import { defineCollection, z } from 'astro:content';

const modulesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    duration: z.string(),
    level: z.string(),
    summary: z.string(),
    publishDate: z.date().optional(),
  }),
});

export const collections = {
  modules: modulesCollection,
};