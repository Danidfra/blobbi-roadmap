// Builds the static site into dist/. No dependencies: Node 20 or newer.
//
//   node build.mjs

import { createHash } from 'node:crypto';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { meta } from './content/meta.mjs';
import { renderPage } from './src/render.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, 'public'), dist, { recursive: true });

// The stylesheet gets a content hash in its name so it can be cached forever.
const css = readFileSync(join(root, 'src', 'styles.css'));
const cssName = `styles.${createHash('sha256').update(css).digest('hex').slice(0, 10)}.css`;
mkdirSync(join(dist, 'assets'), { recursive: true });
writeFileSync(join(dist, 'assets', cssName), css);

writeFileSync(join(dist, 'index.html'), renderPage({ cssHref: `/assets/${cssName}` }));

writeFileSync(
  join(dist, '404.html'),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Not found · Blobbi Roadmap</title><meta name="robots" content="noindex"><link rel="stylesheet" href="/assets/${cssName}"></head><body><main class="notfound"><img src="/art/egg.svg" width="96" height="108" alt=""><h1>Nothing here yet</h1><p><a href="/">Back to the roadmap</a></p></main></body></html>\n`,
);

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${meta.url}sitemap.xml\n`);
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${meta.url}</loc><lastmod>${meta.updated}</lastmod></url></urlset>\n`,
);

console.log(`Built dist/ (index.html, assets/${cssName})`);
