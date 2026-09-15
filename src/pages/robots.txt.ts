import type { APIRoute } from 'astro';
import siteConfig from '../config';

/** 生成 robots.txt 并声明 sitemap 地址（构建时静态输出） */
export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${siteConfig.baseUrl}/sitemap.xml`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
