import type { APIRoute } from 'astro';
import siteConfig from '../config';

/**
 * 动态生成 sitemap.xml（构建时静态输出，零依赖）。
 * - 使用 siteConfig.baseUrl，批量部署时注入 CURRENT_SITE_DOMAIN 可自动跟随域名。
 * - 每个 URL 带 hreflang 交替标注（km / en / zh / x-default），与页面 <link rel="alternate"> 一致。
 * - 全部 URL 以尾斜杠结尾，与 canonical 规范化策略保持一致。
 */
const LANGS = ['km', 'en', 'zh'] as const;
const X_DEFAULT = 'km';

const PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'pocket-guide', priority: '0.9', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: 'terms-of-service', priority: '0.3', changefreq: 'yearly' },
  { path: 'cookie-settings', priority: '0.3', changefreq: 'yearly' },
];

/** 内容最近一次实质性更新的日期（改动文案时手动更新，避免每天刷新误导爬虫） */
const LASTMOD = '2026-09-15';

function url(lang: string, path: string): string {
  return `${siteConfig.baseUrl}/${lang}/${path ? `${path}/` : ''}`;
}

export const GET: APIRoute = () => {
  const entries = LANGS.flatMap((lang) =>
    PAGES.map(({ path, priority, changefreq }) => {
      const loc = url(lang, path);
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, path)}"/>`
      ).join('\n');
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(X_DEFAULT, path)}"/>`;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${LASTMOD}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        alternates,
        xDefault,
        '  </url>',
      ].join('\n');
    })
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
