import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://khrastnik.github.io/tc-diagnostika/
// Ko bo kupljena lastna domena: nastavi SITE na domeno in BASE na '/'.
const site = process.env.SITE ?? 'https://khrastnik.github.io';
const base = process.env.BASE ?? '/tc-diagnostika';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
