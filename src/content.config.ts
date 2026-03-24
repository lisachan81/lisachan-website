import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    toc: z.boolean().optional(),
    furtherReading: z.array(z.object({
      title: z.string(),
      author: z.string(),
      year: z.string(),
      note: z.string(),
    })).optional(),
  }),
});

export const collections = { writing };
