import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/config';

export default defineConfig({
  site: siteConfig.baseUrl,
  // 全站统一尾斜杠，避免 /en 与 /en/ 被搜索引擎视为两条 URL 而分散权重
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
