// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static output (default). No adapter: deploys to Cloudflare Pages as plain static files.
// `site` left unset on purpose: production domain not confirmed yet (blocks sitemap/robots, Phase 8).
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
