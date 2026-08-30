// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const films = defineCollection({
  loader: glob({ base: './src/content/film', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    synopsis: z.string(),
    cast: z.string(),
    crew: z.string(),
    directors: z.string(),
    link: z.string(),
    clip: z.string()
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { films };
