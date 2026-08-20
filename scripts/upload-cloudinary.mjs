// Upload local obras photos to Cloudinary, produce cloudinary_map.json
// Usage: CLOUDINARY_CLOUD_NAME=... CLOUDINARY_API_KEY=... CLOUDINARY_API_SECRET=... node scripts/upload-cloudinary.mjs
import { v2 as cloudinary } from "cloudinary";
import { readdirSync, statSync, writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { join, relative, sep, extname, dirname } from "node:path";
import sharp from "sharp";

const MAX_BYTES = 10 * 1024 * 1024; // Cloudinary free tier limit
const TMP_DIR = ".cache/resized";

const ROOT = "public/obras/FOTOS_OBRA";
const OUT = "cloudinary_map.json";
const FOLDER_PREFIX = "miacasa";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, files);
    else if (/\.(jpe?g|png|webp)$/i.test(name)) files.push(p);
  }
  return files;
}

const existing = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const files = walk(ROOT);
console.log(`Found ${files.length} images. Already uploaded: ${Object.keys(existing).length}`);

let done = 0, failed = 0;
const CONCURRENCY = 6;
const queue = [...files];

async function worker(id) {
  while (queue.length) {
    const path = queue.shift();
    const rel = relative(ROOT, path).split(sep).join("/");
    if (existing[rel]) { done++; continue; }
    const publicId = `${FOLDER_PREFIX}/${rel.replace(/\.[^.]+$/, "").replace(/[^\w/-]+/g, "_")}`;
    let uploadPath = path;
    try {
      const sz = statSync(path).size;
      if (sz > MAX_BYTES) {
        const tmp = join(TMP_DIR, rel.replace(/\.[^.]+$/, ".jpg"));
        mkdirSync(dirname(tmp), { recursive: true });
        let quality = 82;
        let width = 2400;
        // Shrink until under limit
        for (let attempt = 0; attempt < 5; attempt++) {
          await sharp(path).rotate().resize({ width, withoutEnlargement: true }).jpeg({ quality, mozjpeg: true }).toFile(tmp);
          if (statSync(tmp).size <= MAX_BYTES) break;
          quality -= 10;
          width -= 400;
        }
        uploadPath = tmp;
      }
      const res = await cloudinary.uploader.upload(uploadPath, {
        public_id: publicId,
        resource_type: "image",
        overwrite: false,
        unique_filename: false,
        use_filename: false,
      });
      existing[rel] = { public_id: res.public_id, url: res.secure_url, width: res.width, height: res.height };
      done++;
      if (done % 10 === 0) {
        writeFileSync(OUT, JSON.stringify(existing, null, 2));
        console.log(`[w${id}] ${done}/${files.length} (${rel})`);
      }
    } catch (e) {
      failed++;
      console.error(`[w${id}] FAIL ${rel}: ${e.message}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));
writeFileSync(OUT, JSON.stringify(existing, null, 2));
console.log(`Done. success=${done} failed=${failed} total=${files.length}`);
