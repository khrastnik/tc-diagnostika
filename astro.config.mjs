import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Gostovanje: toplolog.si (Cloudflare) in khrastnik.github.io/tc-diagnostika (GitHub Pages).
// Pri Cloudflaru (Workers Builds: WORKERS_CI, Pages: CF_PAGES) se stran gradi za toplolog.si,
// na GitHub Pages pa za khrastnik.github.io/tc-diagnostika. SITE in BASE lahko vedno povozita privzeto.
const onCloudflare = !!(process.env.WORKERS_CI || process.env.CF_PAGES);
const site = process.env.SITE ?? (onCloudflare ? 'https://toplolog.si' : 'https://khrastnik.github.io');
const base = process.env.BASE ?? (onCloudflare ? '/' : '/tc-diagnostika');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [sitemap()],
});
