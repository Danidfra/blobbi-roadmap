// Renders the content in content/ to one static HTML page.

import { meta, intro, statuses } from '../content/meta.mjs';
import { worlds, connections } from '../content/worlds.mjs';
import { roadmap, roadmapIntro } from '../content/roadmap.mjs';
import { community } from '../content/community.mjs';
import { opensource } from '../content/opensource.mjs';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Inline text: escapes everything, then allows `code` and [text](https://…).
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
}

const art = (name, size, alt = '') =>
  `<img class="art" src="/art/${name}.svg" width="${size}" height="${Math.round(size * 1.125)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;

// A status chip. The symbol differs per status so it does not rely on colour.
const symbols = { available: '●', testing: '◐', planned: '○' };
function chip(status, note, extraClass = '') {
  if (!statuses[status]) throw new Error(`Unknown status: ${status}`);
  const label = note ? `${statuses[status]} · ${note}` : statuses[status];
  return `<span class="chip chip--${status}${extraClass}"><span aria-hidden="true">${symbols[status]}</span> ${esc(label)}</span>`;
}

// The card's preview: a real screenshot when the world has one, otherwise its
// illustration. Over a screenshot the status chip would hide gameplay, so it
// moves into the card body. The screenshot sits in a fixed 16:10 frame, so a
// gameplay clip can later take its place (with the screenshot as its poster)
// without changing the card.
function preview(w) {
  if (!w.media) return art(w.art, 112);
  const src = (width) => `/media/${w.media.name}-${width}.v${w.media.version}.webp`;
  return `<img class="world__shot" src="${src(960)}" srcset="${src(480)} 480w, ${src(960)} 960w" sizes="(min-width: 60rem) 20rem, (min-width: 40rem) 46vw, 92vw" width="960" height="600" alt="${esc(w.media.alt)}" loading="lazy" decoding="async">`;
}

function renderUniverse() {
  const card = (w) => {
    const play = w.url
      ? `<a class="btn btn--play" href="${esc(w.url)}">Play<span class="visually-hidden"> ${esc(w.name)}</span></a>`
      : '';
    return `<li class="world world--${w.id}">
        <div class="world__stage${w.media ? ' world__stage--media' : ''}">${preview(w)}${w.media ? '' : chip(w.status, w.note, ' badge')}</div>
        <div class="world__body">
          ${w.media ? `<p class="world__status">${chip(w.status, w.note)}</p>` : ''}
          <h3>${esc(w.name)}</h3>
          <p class="world__tagline">${esc(w.tagline)}</p>
          <p>${inline(w.text)}</p>
          <div class="world__links">${play}<a class="btn" href="${esc(w.repo)}">Source<span class="visually-hidden"> code of ${esc(w.name)}</span></a></div>
        </div>
      </li>`;
  };
  return `<section class="section" id="universe" aria-labelledby="universe-title">
    <h2 id="universe-title">The Blobbi Universe</h2>
    <p class="section__intro">Five worlds, each with its own way to play. Four are open to everyone today.</p>
    <ul class="worlds">${worlds.map(card).join('')}</ul>
    <div class="connections">
      <h3 id="connections-title">What already connects them</h3>
      <p class="section__intro">${inline(connections.intro)}</p>
      <ul class="links">${connections.items
        .map(
          (c) => `<li class="link">
          ${chip(c.status)}
          <h4>${esc(c.title)}</h4>
          <p>${inline(c.text)}</p>
        </li>`,
        )
        .join('')}</ul>
    </div>
  </section>`;
}

function renderRoadmap() {
  return `<section class="section" id="roadmap" aria-labelledby="roadmap-title">
    <h2 id="roadmap-title">Six-Month Roadmap</h2>
    <p class="section__intro">${inline(roadmapIntro)}</p>
    <ol class="timeline">${roadmap
      .map(
        (m) => `<li class="step">
        <div class="step__node" aria-hidden="true">${m.month}</div>
        <div class="step__card">
          <div class="step__art">${art(m.art, 64)}</div>
          <p class="step__month">Month ${m.month}<span class="visually-hidden">:</span> <span class="step__theme">${esc(m.theme)}</span></p>
          <h3>${esc(m.title)}</h3>
          <p>${inline(m.text)}</p>
          <p class="step__outcome"><span class="visually-hidden">Outcome: </span>${inline(m.outcome)}</p>
          ${m.progress ? `<p class="step__progress">${inline(m.progress)}</p>` : ''}
        </div>
      </li>`,
      )
      .join('')}</ol>
  </section>`;
}

function renderCommunity() {
  return `<section class="section" id="community" aria-labelledby="community-title">
    <h2 id="community-title">Growing the Blobbi Universe</h2>
    <p class="section__intro">${inline(community.intro)}</p>
    <ul class="pillars">${community.pillars
      .map((p, i) => `<li class="pillar pillar--${i + 1}"><h3>${esc(p.title)}</h3><p>${inline(p.text)}</p></li>`)
      .join('')}</ul>
  </section>`;
}

function renderOpenSource() {
  return `<section class="section" id="open-source" aria-labelledby="open-source-title">
    <h2 id="open-source-title">Open Source</h2>
    <p class="section__intro">${inline(opensource.intro)}</p>
    <ul class="links links--two">${opensource.developers
      .map(
        (d) => `<li class="link">
          ${chip(d.status)}
          <h3>${esc(d.title)}</h3>
          <p>${inline(d.text)}</p>
        </li>`,
      )
      .join('')}</ul>
    <ul class="repos">${opensource.links
      .map(([name, href, sub]) => `<li><a href="${esc(href)}"><strong>${esc(name)}</strong><span>${esc(sub)}</span></a></li>`)
      .join('')}</ul>
  </section>`;
}

export function renderPage({ cssHref }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}">
<link rel="canonical" href="${esc(meta.url)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#8cc8f0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0e0b24" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Blobbi">
<meta property="og:title" content="${esc(meta.title)}">
<meta property="og:description" content="${esc(meta.description)}">
<meta property="og:url" content="${esc(meta.url)}">
<meta property="og:image" content="${esc(meta.ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="A purple Blobbi beside the words Blobbi Roadmap">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(meta.title)}">
<meta name="twitter:description" content="${esc(meta.description)}">
<meta name="twitter:image" content="${esc(meta.ogImage)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/comfortaa-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${esc(cssHref)}">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="hero">
  <div class="hero__inner">
    <div class="hero__text">
      <p class="brand">Blobbi · Roadmap</p>
      <h1>${esc(intro.headline)}</h1>
      ${intro.paragraphs.map((p, i) => `<p class="${i ? 'hero__lead' : 'hero__kicker'}">${inline(p)}</p>`).join('')}
      <nav class="hero__cta" aria-label="Sections">
        <a class="btn btn--play" href="#universe">Explore the universe</a>
        <a class="btn" href="#roadmap">See the roadmap</a>
      </nav>
    </div>
    <div class="hero__art">
      <img class="hero__friend hero__friend--l" src="/art/pixel.svg" width="96" height="108" alt="">
      <img class="hero__blobbi" src="/art/hero.svg" width="220" height="248" alt="A purple Blobbi smiling" fetchpriority="high">
      <img class="hero__friend hero__friend--r" src="/art/island.svg" width="96" height="108" alt="">
      <img class="hero__egg" src="/art/egg.svg" width="72" height="81" alt="">
    </div>
  </div>
  <div class="hero__ground" aria-hidden="true"></div>
</header>
<main id="main">
${renderUniverse()}
${renderRoadmap()}
${renderCommunity()}
${renderOpenSource()}
</main>
<footer class="footer">
  <p>All Blobbi code is open source: MIT, with AGPL-3.0 for Blobbi Home and Blobbi Island. <a href="${esc(meta.repo)}">Source of this page</a>.</p>
  <p>Updated <time datetime="${esc(meta.updated)}">${esc(meta.updated)}</time>. No cookies, no trackers. Illustrations drawn with blobbi-kit; Comfortaa font under the <a href="/fonts/OFL.txt">SIL Open Font License</a>.</p>
</footer>
</body>
</html>
`;
}
