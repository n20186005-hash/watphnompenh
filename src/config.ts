// 站点域名：优先读取环境变量 CURRENT_SITE_DOMAIN（批量部署时注入），
// 回退到本景点正式域名 watphnompenh.com，避免硬编码导致 Canonical/hreflang/OG 指向错误地址。
function resolveBaseUrl(): string {
  const raw =
    (typeof process !== 'undefined' ? process.env.CURRENT_SITE_DOMAIN : undefined) ||
    (import.meta.env.CURRENT_SITE_DOMAIN as string | undefined) ||
    'watphnompenh.com';
  const host = String(raw).replace(/^https?:\/\//, '').replace(/\/+$/, '');
  return `https://${host}`;
}

export const siteConfig = {
  name: 'Wat Phnom Daun Penh',
  baseUrl: resolveBaseUrl(),
  locales: ['km', 'en', 'zh'] as const,
};

export default siteConfig;

export const ogLocale: Record<string, string> = {
  km: 'km_KH',
  en: 'en_US',
  zh: 'zh_CN',
};

// 统一 Google 地图链接（坐标 11.5761468, 104.9205088）
export const mapsUrl = 'https://www.google.com/maps?q=11.576146788577976,104.92050881223547';

// Google Maps 嵌入 iframe（来自需求文档）
export const mapsEmbedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6609346596606!2d104.92050881223547!3d11.576146788577976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095144cbdbf311%3A0x2588e1ac1787eb64!2z5aGU5bGx5a-6!5e0!3m2!1szh-CN!2sus!4v1784799832669!5m2!1szh-CN!2sus';

export const attraction = {
  name: { km: 'វត្តភ្នំដូនពេញ', en: 'Wat Phnom Daun Penh', zh: '塔山寺' },
  rating: '4.4',
  reviews: '9467',
  hours: '07:00-19:00',
  lat: 11.576146788577976,
  lng: 104.92050881223547,
  address: { km: 'ផ្លូវវត្តភ្នំ, ភ្នំពេញ, កម្ពុជា', en: 'Wat Phnom Road, Phnom Penh, Cambodia', zh: 'ផ្លូវវត្តភ្នំ, 金边, 柬埔寨' },
};
