import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const langs = ['en', 'zh', 'km'];
const slugs = ['history', 'how-to-get-there', 'what-to-see'];
const nearby = ['central-market', 'central-post-office', 'national-museum'];
const topicSlugs = [...fs.readFileSync('src/data/topic-guides.ts','utf8').matchAll(/\bslug:'([^']+)'/g)].map(m=>m[1]);
if (new Set(topicSlugs).size !== topicSlugs.length) throw new Error('duplicate specialist guide slug');
const failures = [];

function inspect(file) {
  const relative = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');
  const url = '/' + relative.replace(/index\.html$/, '').replace(/\\/g, '/');
  const lang = url.split('/')[1];
  if (!langs.includes(lang)) return;
  const canonical = `https://watphnompenh.com${url}`;
  if (!html.includes(`rel="canonical" href="${canonical}"`)) failures.push(`${url}: wrong canonical`);
  if (!html.includes(`hreflang="x-default"`)) failures.push(`${url}: missing x-default`);
  for (const l of langs) if (!html.includes(`hreflang="${l}"`)) failures.push(`${url}: missing ${l} alternate`);
  const langCode = lang === 'zh' ? 'zh-CN' : lang;
  if (!html.includes(`<html lang="${langCode}"`)) failures.push(`${url}: language tag mismatch`);

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const clean = href.split(/[?#]/)[0];
    if (!clean || clean === '/') continue;
    const location = path.join(root, clean);
    if (!fs.existsSync(location) && !fs.existsSync(path.join(location, 'index.html')))
      failures.push(`${url}: missing local target ${clean}`);
  }
  if (url.includes('/nearby/') && url.split('/').filter(Boolean).length === 3) {
    if (!html.includes('google.com/maps/search/?api=1')) failures.push(`${url}: no place map`);
    if (!html.includes('FAQPage')) failures.push(`${url}: no FAQ data`);
    if (!html.includes('nearby-') || !html.includes('.jpg')) failures.push(`${url}: missing place photo`);
  }
  if (url.includes('/guides/') && url.split('/').filter(Boolean).length === 3) {
    const heading = html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1] ?? '';
    if (lang === 'zh' && !/[\u3400-\u9fff]/.test(heading)) failures.push(`${url}: Chinese heading missing`);
    if (lang === 'km' && !/[\u1780-\u17ff]/.test(heading)) failures.push(`${url}: Khmer heading missing`);
    if (lang === 'en' && /[\u3400-\u9fff\u1780-\u17ff]/.test(heading)) failures.push(`${url}: English heading mixed`);
    if (!html.includes('FAQPage')) failures.push(`${url}: missing FAQ schema`);
    if (!/<img[^>]+src="\/gallery\/(?:wat-phnom-daun-penh-|nearby-)/.test(html)) failures.push(`${url}: missing matching photo`);
    if (!html.includes('Google Maps')) failures.push(`${url}: missing map link`);
    const description = html.match(/<meta name="description" content="([^"]+)"/);
    const minimumDescription = lang === 'zh' ? 65 : lang === 'km' ? 105 : 180;
    if (!description || description[1].length < minimumDescription) failures.push(`${url}: description too thin`);
    if ((html.match(/<h2/g) ?? []).length < 8) failures.push(`${url}: missing rich content sections`);
    if (url.includes('/wat-phnom-to-') && !html.includes('google.com/maps/search/?api=1')) failures.push(`${url}: no distinct onward map`);
  }
}

function walk(dir) {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    const item = path.join(dir, d.name);
    if (d.isDirectory()) walk(item);
    else if (d.isFile() && d.name === 'index.html') inspect(item);
  }
}

walk(root);
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const lang of langs) {
  for (const slug of slugs) if (!sitemap.includes(`<loc>https://watphnompenh.com/${lang}/${slug}/</loc>`))
    failures.push(`sitemap missing /${lang}/${slug}/`);
  for (const slug of nearby) if (!sitemap.includes(`<loc>https://watphnompenh.com/${lang}/nearby/${slug}/</loc>`))
    failures.push(`sitemap missing /${lang}/nearby/${slug}/`);
  for (const slug of topicSlugs) if (!sitemap.includes(`<loc>https://watphnompenh.com/${lang}/guides/${slug}/</loc>`))
    failures.push(`sitemap missing /${lang}/guides/${slug}/`);
}
if(topicSlugs.length < 24) failures.push(`Only ${topicSlugs.length} new topics; expected at least 24`);
const images = fs.readdirSync('public/gallery').filter(x => /\.(jpg|png|webp|avif)$/i.test(x));
if (!images.some(x => x.startsWith('wat-phnom-daun-penh-'))) failures.push('original Wat Phnom gallery missing');
for (const slug of ['central-market', 'post-office', 'national-museum'])
  if (!images.includes(`nearby-${slug}.jpg`)) failures.push(`missing new photo for ${slug}`);

if (failures.length) {
  console.error(`${failures.length} route audit issues:\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log('PASS: all generated HTML routes, canonical, hreflang, internal files, maps, FAQs, photo files and sitemap entries');
}
