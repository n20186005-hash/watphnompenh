/**
 * 相册图片压缩与响应式派生（复用 Astro 自带的 sharp，无需新增依赖）。
 *
 *   npm run optimize:images
 *
 * 产物：
 *  1) public/gallery/*.jpg           原地压缩：最长边 1600px、quality 74、progressive + mozjpeg、剥离元数据。
 *                                    文件名保持不变（wat-phnom-daun-penh-N.jpg），i18n 中的引用与命名规范均不受影响。
 *  2) public/gallery/thumbs/*.jpg    800px 宽 JPEG 缩略图，供画廊网格与手机端使用。
 *  3) public/gallery/avif/…          对应的 AVIF（全尺寸 + 缩略图），同画质下体积约再降 25%–35%。
 *                                    实测本项目样张：全尺寸 JPEG q74 ≈ 367 KB → AVIF q45 ≈ 260 KB。
 *  4) src/data/gallery-images.json   尺寸清单，供 Gallery.astro 生成 <picture>/srcset/sizes 与宽高，消除 CLS。
 *
 * 说明：脚本可重复执行；图片已被压到 1600px 以内时不会放大，仅做一次等尺寸重编码。
 */
import { readdir, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'public', 'gallery');
const THUMB_DIR = path.join(SRC_DIR, 'thumbs');
const AVIF_DIR = path.join(SRC_DIR, 'avif');
const AVIF_THUMB_DIR = path.join(AVIF_DIR, 'thumbs');
const WEBP_LEGACY_DIR = path.join(SRC_DIR, 'webp');
const DATA_DIR = path.join(ROOT, 'src', 'data');
const MANIFEST = path.join(DATA_DIR, 'gallery-images.json');

const FULL_WIDTH = 1600;
const THUMB_WIDTH = 800;
const FULL_QUALITY = 74;
const THUMB_QUALITY = 66;
const AVIF_QUALITY = 45;
const AVIF_THUMB_QUALITY = 42;

const jpegOpts = (quality) => ({ quality, mozjpeg: true, progressive: true, chromaSubsampling: '4:2:0' });
const avifOpts = (quality) => ({ quality, effort: 4, chromaSubsampling: '4:2:0' });

for (const dir of [THUMB_DIR, AVIF_THUMB_DIR, DATA_DIR]) {
  await mkdir(dir, { recursive: true });
}

const files = (await readdir(SRC_DIR))
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

// 清理历史遗留的 WebP 派生目录（实测本批样张 WebP 体积不优于 mozjpeg JPEG，已改用 AVIF）
await rm(WEBP_LEGACY_DIR, { recursive: true, force: true });

const manifest = {};
let beforeBytes = 0;
let afterBytes = 0;
let derivedBytes = 0;

for (const file of files) {
  const srcPath = path.join(SRC_DIR, file);
  const input = await readFile(srcPath);
  beforeBytes += input.length;

  const image = sharp(input).rotate();

  // 1) 全尺寸 JPEG（原地压缩）
  const { data: fullJpg, info: fullInfo } = await image
    .clone()
    .resize({ width: FULL_WIDTH, withoutEnlargement: true })
    .jpeg(jpegOpts(FULL_QUALITY))
    .toBuffer({ resolveWithObject: true });
  await writeFile(srcPath, fullJpg);
  afterBytes += fullJpg.length;

  // 2) 缩略图 JPEG
  const { data: thumbJpg, info: thumbInfo } = await image
    .clone()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg(jpegOpts(THUMB_QUALITY))
    .toBuffer({ resolveWithObject: true });
  await writeFile(path.join(THUMB_DIR, file), thumbJpg);
  derivedBytes += thumbJpg.length;

  // 3) AVIF（全尺寸 + 缩略图，扩展名统一为 .avif）
  const avifName = file.replace(/\.jpe?g$/i, '.avif');
  const { data: fullAvif } = await image
    .clone()
    .resize({ width: FULL_WIDTH, withoutEnlargement: true })
    .avif(avifOpts(AVIF_QUALITY))
    .toBuffer({ resolveWithObject: true });
  await writeFile(path.join(AVIF_DIR, avifName), fullAvif);
  derivedBytes += fullAvif.length;

  const { data: thumbAvif } = await image
    .clone()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .avif(avifOpts(AVIF_THUMB_QUALITY))
    .toBuffer({ resolveWithObject: true });
  await writeFile(path.join(AVIF_THUMB_DIR, avifName), thumbAvif);
  derivedBytes += thumbAvif.length;

  manifest[`/gallery/${file}`] = {
    width: fullInfo.width,
    height: fullInfo.height,
    thumb: `/gallery/thumbs/${file}`,
    thumbWidth: thumbInfo.width,
    thumbHeight: thumbInfo.height,
    avif: `/gallery/avif/${avifName}`,
    avifThumb: `/gallery/avif/thumbs/${avifName}`,
  };

  const kb = (n) => String(Math.round(n / 1024)).padStart(4);
  console.log(
    `  ${file.padEnd(28)} ${kb(input.length)} KB -> jpg ${kb(fullJpg.length)} / avif ${kb(fullAvif.length)} KB` +
      `  | thumb jpg ${kb(thumbJpg.length)} / avif ${kb(thumbAvif.length)} KB  (${fullInfo.width}x${fullInfo.height})`
  );
}

await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

const mb = (n) => `${(n / 1024 / 1024).toFixed(2)} MB`;
console.log(
  `\n原图合计 ${mb(beforeBytes)} -> 压缩后 ${mb(afterBytes)}（省 ${(
    100 - (afterBytes / beforeBytes) * 100
  ).toFixed(1)}%）；派生资源合计 ${mb(derivedBytes)}`
);
console.log(`尺寸清单已写入 src/data/gallery-images.json（${files.length} 张）`);
