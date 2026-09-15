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

// GA4 衡量 ID（Google Analytics 4）
export const GA_MEASUREMENT_ID = 'G-HXM22WWPKP';

// 统一 Google 地图链接（goo.gl 短链）
export const mapsUrl = 'https://maps.app.goo.gl/KjucKpYceWqEi28r9';

// Google Maps 嵌入 iframe（来自需求文档）
export const mapsEmbedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6609346596606!2d104.92050881223547!3d11.576146788577976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095144cbdbf311%3A0x2588e1ac1787eb64!2z5aGU5bGx5a-6!5e0!3m2!1szh-CN!2sus!4v1784799832669!5m2!1szh-CN!2sus';

/**
 * 单景点 SEO 实体绑定配置变量表（用于模板占位符替换）
 * {{DOMAIN_NAME}}   -> DOMAIN_NAME
 * {{ATTRACTION_FULL_NAME}} -> ATTRACTION_FULL_NAME
 * {{ATTRACTION_SHORT_NAME}} -> ATTRACTION_SHORT_NAME
 * {{CITY_NAME}} -> CITY_NAME
 * {{STATE_PROVINCE}} -> STATE_PROVINCE
 * {{COUNTRY_NAME}} -> COUNTRY_NAME
 * {{COUNTRY_CODE_2LETTER}} -> COUNTRY_CODE_2LETTER
 * {{POSTAL_CODE}} -> POSTAL_CODE
 * {{LATITUDE}} / {{LONGITUDE}} -> LATITUDE / LONGITUDE
 * {{MAPS_SHARE_URL}} -> MAPS_SHARE_URL
 * {{MAPS_EMBED_SRC}} -> MAPS_EMBED_SRC
 * {{NEARBY_LANDMARK_1}} / {{NEARBY_LANDMARK_2}} -> NEARBY_LANDMARK_1 / NEARBY_LANDMARK_2
 * {{GOVT_TOURISM_URL}} -> GOVT_TOURISM_URL
 */
export const DOMAIN_NAME = 'watphnompenh.com';
export const ATTRACTION_FULL_NAME = 'Wat Phnom Daun Penh';
export const ATTRACTION_SHORT_NAME = 'Wat Phnom';
export const CITY_NAME = 'Phnom Penh';
export const STATE_PROVINCE = 'Phnom Penh';
export const COUNTRY_NAME = 'Cambodia';
export const COUNTRY_CODE_2LETTER = 'KH';
export const POSTAL_CODE = '12000';
export const PLUS_CODE = 'HWGF+F6';
export const LATITUDE = 11.576146788577976;
export const LONGITUDE = 104.92050881223547;
export const MAPS_SHARE_URL = mapsUrl;
export const MAPS_EMBED_SRC = mapsEmbedSrc;
export const NEARBY_LANDMARK_1 = 'Royal Palace & Silver Pagoda';
export const NEARBY_LANDMARK_2 = 'Riverside (Tonlé Sap & Mekong)';
export const GOVT_TOURISM_URL = 'https://www.tourismcambodia.com';
export const MUNICIPALITY_URL = 'https://www.phnompenh.gov.kh';

/** 评价/评分同步信息（仅用于页面展示，不进入 JSON-LD） */
export const REVIEWS_SYNC = {
  rating: '4.4',
  reviews: '9562',
  reviewsDisplay: '9,562',
  syncLabel: '2026-09',
  syncLabelEn: 'September 2026',
};

export const entity = {
  domain: DOMAIN_NAME,
  fullName: ATTRACTION_FULL_NAME,
  shortName: ATTRACTION_SHORT_NAME,
  city: CITY_NAME,
  region: STATE_PROVINCE,
  country: COUNTRY_NAME,
  countryCode: COUNTRY_CODE_2LETTER,
  postalCode: POSTAL_CODE,
  plusCode: PLUS_CODE,
  lat: LATITUDE,
  lng: LONGITUDE,
  mapsUrl: MAPS_SHARE_URL,
  mapsEmbedSrc: MAPS_EMBED_SRC,
  landmarks: [NEARBY_LANDMARK_1, NEARBY_LANDMARK_2],
  tourismUrl: GOVT_TOURISM_URL,
  municipalityUrl: MUNICIPALITY_URL,
};

export const attraction = {
  name: { km: 'វត្តភ្នំដូនពេញ', en: 'Wat Phnom Daun Penh', zh: '塔山寺' },
  rating: REVIEWS_SYNC.rating,
  reviews: REVIEWS_SYNC.reviews,
  hours: '07:00-19:00',
  lat: LATITUDE,
  lng: LONGITUDE,
  address: {
    km: 'ផ្លូវវត្តភ្នំ, ភ្នំពេញ, កម្ពុជា',
    en: 'Wat Phnom Road, Phnom Penh, Cambodia',
    zh: 'ផ្លូវវត្តភ្នំ, 金边, 柬埔寨',
  },
};
