import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const clanki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clanki' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    section: z.enum(['kako-deluje', 'vzdrzevanje', 'zakaj-se-kvarijo', 'aktualno']),
    pubDate: z.coerce.date(),
    updated: z.coerce.date(),
    remember: z.array(z.string()).optional(),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).optional(),
    related: z.array(z.string()).optional(),
    terms: z.array(z.string()).optional(),
    kategorija: z.enum(['zacetniki', 'stroski', 'primerjava', 'zanimivosti']).optional(),
  }),
});

const slovar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/slovar' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    updated: z.coerce.date(),
  }),
});

export const collections = { clanki, slovar };
