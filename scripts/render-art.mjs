// Renders the Blobbi artwork in public/art/ with @blobbi-kit/renderer (MIT).
//
// The site does not depend on the renderer: the SVGs are committed. Run this
// only to regenerate them, after installing the renderer without saving it:
//
//   npm install --no-save @blobbi-kit/renderer@0.6.0
//   node scripts/render-art.mjs
//
// Each Blobbi is a V3 (procedural) Blobbi whose seed is sha256 of a fixed
// label, so the same label always draws the same Blobbi. They are
// illustrations, not real players' Blobbis.

import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const { renderBlobbiSvg } = await import(process.env.BLOBBI_RENDERER ?? '@blobbi-kit/renderer');

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public', 'art');
mkdirSync(out, { recursive: true });

// file name -> [seed label, life stage]
const ART = {
  hero: ['c', 'adult'],
  home: ['home', 'adult'],
  island: ['f', 'adult'],
  pixel: ['a', 'adult'],
  farm: ['b', 'adult'],
  rumble: ['rumble', 'adult'],
  kit: ['c', 'baby'],
  inventory: ['f', 'baby'],
  egg: ['b', 'egg'],
};

for (const [name, [label, stage]] of Object.entries(ART)) {
  const seed = createHash('sha256').update(`roadmap.blobbi.pet:${label}`).digest('hex');
  const { svg } = renderBlobbiSvg({
    stage,
    visualGeneration: 'v3',
    v3: { seed, algorithm: 1 },
    instanceId: `art-${name}`,
    facing: 'front',
    expression: 'happy',
  });
  // Drop the 100% sizing so <img width/height> decides the size.
  const file = svg.replace(' width="100%" height="100%"', '');
  writeFileSync(join(out, `${name}.svg`), file + '\n');
  console.log(`public/art/${name}.svg  (${stage}, ${file.length} bytes)`);
}
