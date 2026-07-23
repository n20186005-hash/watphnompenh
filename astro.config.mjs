import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';

export default defineConfig({
  site: siteConfig.baseUrl,
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
