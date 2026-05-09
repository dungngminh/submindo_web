// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://submindo-web.vercel.app',
  integrations: [sitemap()],
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
