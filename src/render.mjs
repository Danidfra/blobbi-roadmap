// Renders the content in content/ to one static HTML page.

import { meta, STATUS } from '../content/meta.mjs';
import { apps, libraries } from '../content/ecosystem.mjs';
import { ledger } from '../content/status.mjs';
import { roadmap } from '../content/roadmap.mjs';
import { overview, interoperability, adoption, metrics, openSource } from '../content/sections.mjs';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Inline text: escapes everything, then allows `code` and [text](https://…).
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
}

const SECTIONS = [
  ['overview', 'Overview'],
  ['ecosystem', 'Ecosystem'],
  ['status', 'Status'],
  ['roadmap', 'Roadmap'],
  ['interoperability', 'Interoperability'],
  ['adoption', 'Adoption'],
  ['metrics', 'Metrics'],
  ['open-source', 'Open source'],
];

function pill(status, long = false) {
  const s = STATUS[status];
  if (!s) throw new Error(`Unknown status: ${status}`);
  return `<span class="pill pill--${status}"><span class="pill__glyph" aria-hidden="true">${s.glyph}</span>${esc(long ? s.long : s.label)}</span>`;
}

function statusLine(status, text, progress) {
  const s = STATUS[status];
  if (!s) throw new Error(`Unknown status: ${status}`);
  const more = progress ? ` <span class="progress">${inline(progress)}</span>` : '';
  return `<li class="st st--${status}"><span class="st__glyph" aria-hidden="true">${s.glyph}</span><span class="visually-hidden">${esc(s.label)}: </span>${inline(text)}${more}</li>`;
}

const art = (name, size, alt = '') =>
  `<img class="art" src="/art/${name}.svg" width="${size}" height="${Math.round(size * 1.125)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;

function sectionHead(id, kicker, title, intro) {
  return `<header class="section__head">
      <p class="kicker">${esc(kicker)}</p>
      <h2 id="${id}-title">${esc(title)}</h2>
      ${intro ? `<p class="section__intro">${inline(intro)}</p>` : ''}
    </header>`;
}

function legend() {
  return `<dl class="legend">${Object.entries(STATUS)
    .map(([k, s]) => `<div class="legend__row"><dt>${pill(k, true)}</dt><dd>${esc(s.blurb)}</dd></div>`)
    .join('')}</dl>`;
}

function renderOverview() {
  return `<section class="section" id="overview" aria-labelledby="overview-title">
    ${sectionHead('overview', '01 · Overview', 'Games that share a world', overview.lead)}
    <ul class="points">${overview.points
      .map(([t, d]) => `<li class="point"><h3>${esc(t)}</h3><p>${inline(d)}</p></li>`)
      .join('')}</ul>
    <aside class="aside" aria-label="About this roadmap"><p>${inline(overview.note)}</p></aside>
  </section>`;
}

function projectCard(p) {
  const links = [
    p.url ? `<a class="btn btn--play" href="${esc(p.url)}">Open ${esc(new URL(p.url).host)}</a>` : '',
    `<a class="btn" href="${esc(p.repo)}">Source code</a>`,
    ...(p.extraRepos ?? []).map(([label, href]) => `<a class="btn" href="${esc(href)}">${esc(label)}</a>`),
  ].join('');
  const body = p.features
    ? `<ul class="st-list">${p.features.map(([s, t]) => statusLine(s, t)).join('')}</ul>`
    : `<ul class="pkg-list">${p.packages
        .map(([n, v]) => `<li><a href="https://www.npmjs.com/package/${esc(n)}"><code>${esc(n)}</code></a> <span class="ver">${esc(v)}</span></li>`)
        .join('')}</ul>`;
  return `<article class="card card--${p.id}" aria-labelledby="card-${p.id}">
      <div class="card__art">${art(p.art, 96)}</div>
      <div class="card__top">
        <h3 id="card-${p.id}">${esc(p.name)}</h3>
        ${pill(p.status)}
      </div>
      <p class="card__tagline">${esc(p.tagline)}</p>
      <p>${inline(p.summary)}</p>
      ${body}
      ${p.note ? `<p class="card__note">${inline(p.note)}</p>` : ''}
      <p class="card__license">License: <strong>${esc(p.license)}</strong></p>
      <div class="card__links">${links}</div>
    </article>`;
}

function renderEcosystem() {
  return `<section class="section" id="ecosystem" aria-labelledby="ecosystem-title">
    ${sectionHead('ecosystem', '02 · Current ecosystem', 'Five games, two libraries', 'Each project is its own repository and its own site. They share no server and no database, only Nostr events and the libraries below.')}
    <h3 class="subhead">Games and apps</h3>
    <div class="cards">${apps.map(projectCard).join('')}</div>
    <h3 class="subhead">Libraries</h3>
    <div class="cards cards--libs">${libraries.map(projectCard).join('')}</div>
  </section>`;
}

function renderStatus() {
  const col = (key) => `<div class="ledger__col ledger__col--${key}">
      <h3>${pill(key, true)}</h3>
      <ul>${ledger[key]
        .map((e) => `<li><p>${inline(e.text)}</p><p class="evidence"><span class="evidence__label">Evidence:</span> ${inline(e.evidence)}</p></li>`)
        .join('')}</ul>
    </div>`;
  return `<section class="section" id="status" aria-labelledby="status-title">
    ${sectionHead('status', '03 · Where things stand', 'What exists today', `Checked on ${meta.updated} against the repositories, the live sites and the npm registry. Nothing here is a usage figure or a promised date.`)}
    ${legend()}
    <div class="ledger">${Object.keys(STATUS).map(col).join('')}</div>
  </section>`;
}

function renderRoadmap() {
  return `<section class="section" id="roadmap" aria-labelledby="roadmap-title">
    ${sectionHead('roadmap', '04 · Six-month roadmap', 'The next six months', 'Months are counted from the start of the funded development period; no calendar dates are set. Every item starts as planned and moves as work lands, with a link to the evidence.')}
    <ol class="months">${roadmap
      .map(
        (m) => `<li class="month">
        <div class="month__marker" aria-hidden="true">${art(m.art, 56)}<span>${m.month}</span></div>
        <div class="month__body">
          <h3><span class="month__num">Month ${m.month}</span> ${esc(m.theme)}</h3>
          ${m.startingPoint ? `<p class="month__start"><strong>Today:</strong> ${inline(m.startingPoint)}</p>` : ''}
          <ul class="st-list">${m.items
            .map((i) => statusLine(i.status, i.text, i.progress))
            .join('')}</ul>
        </div>
      </li>`,
      )
      .join('')}</ol>
  </section>`;
}

function renderInterop() {
  const i = interoperability;
  return `<section class="section" id="interoperability" aria-labelledby="interoperability-title">
    ${sectionHead('interoperability', '05 · Interoperability', 'How the games connect', i.intro)}
    <div class="interop">
      <div class="interop__col">
        <h3 class="subhead">Works today</h3>
        ${i.existing
          .map((e) => `<article class="iblock"><div class="iblock__top"><h4>${esc(e.title)}</h4>${pill(e.status)}</div><p>${inline(e.text)}</p></article>`)
          .join('')}
      </div>
      <div class="interop__col interop__col--future">
        <h3 class="subhead">Future integrations</h3>
        ${i.future
          .map((e) => `<article class="iblock iblock--future"><div class="iblock__top"><h4>${esc(e.title)}</h4>${pill('planned')}</div><p>${inline(e.text)}</p></article>`)
          .join('')}
        <div class="limits">
          <h4>Known limits</h4>
          <ul>${i.limits.map((l) => `<li>${inline(l)}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
  </section>`;
}

function renderAdoption() {
  return `<section class="section" id="adoption" aria-labelledby="adoption-title">
    ${sectionHead('adoption', '06 · Adoption strategy', 'Bringing new people to Nostr', adoption.intro)}
    <div class="adopt">${adoption.items
      .map(
        (a) => `<article class="adopt__row">
        <h3>${esc(a.title)}</h3>
        <dl>
          <div><dt>Today</dt><dd>${inline(a.today)}</dd></div>
          <div><dt>Next</dt><dd>${inline(a.next)}</dd></div>
        </dl>
      </article>`,
      )
      .join('')}</div>
  </section>`;
}

function renderMetrics() {
  return `<section class="section" id="metrics" aria-labelledby="metrics-title">
    ${sectionHead('metrics', '07 · Success metrics', 'How progress will be measured', metrics.intro)}
    <div class="metrics">${metrics.groups
      .map(
        (g) => `<div class="metrics__group">
        <h3>${esc(g.title)}</h3>
        <dl>${g.rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${inline(v)}</dd></div>`).join('')}</dl>
      </div>`,
      )
      .join('')}</div>
  </section>`;
}

function renderOpenSource() {
  const list = (rows) => `<ul class="lic-list">${rows.map(([n, h]) => `<li><a href="${esc(h)}">${esc(n)}</a></li>`).join('')}</ul>`;
  return `<section class="section" id="open-source" aria-labelledby="open-source-title">
    ${sectionHead('open-source', '08 · Open source', 'Licensing', openSource.intro)}
    <div class="licenses">
      <div class="lic"><h3><span class="lic__name">MIT</span> Libraries and games</h3>${list(openSource.mit)}</div>
      <div class="lic"><h3><span class="lic__name">AGPL-3.0-or-later</span> Blobbi Home and Island</h3>${list(openSource.agpl)}</div>
    </div>
    <ul class="notes">${openSource.notes.map((n) => `<li>${inline(n)}</li>`).join('')}</ul>
  </section>`;
}

export function renderPage({ cssHref }) {
  const nav = SECTIONS.map(([id, label]) => `<li><a href="#${id}">${esc(label)}</a></li>`).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}">
<link rel="canonical" href="${esc(meta.url)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#fbf8ef" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#16132b" media="(prefers-color-scheme: dark)">
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
      <h1>Where Blobbi is going</h1>
      <p class="hero__lead">${inline(meta.description)}</p>
      <p class="hero__meta">Last updated <time datetime="${esc(meta.updated)}">${esc(meta.updated)}</time></p>
    </div>
    <div class="hero__art">
      <img class="hero__blobbi" src="/art/hero.svg" width="220" height="248" alt="A purple Blobbi smiling" fetchpriority="high">
      <img class="hero__egg" src="/art/egg.svg" width="72" height="81" alt="">
    </div>
  </div>
  <div class="hero__ground" aria-hidden="true"></div>
</header>
<nav class="nav" aria-label="Sections"><ul>${nav}</ul></nav>
<main id="main">
${renderOverview()}
${renderEcosystem()}
${renderStatus()}
${renderRoadmap()}
${renderInterop()}
${renderAdoption()}
${renderMetrics()}
${renderOpenSource()}
</main>
<footer class="footer">
  <p>Last updated <time datetime="${esc(meta.updated)}">${esc(meta.updated)}</time>. <a href="${esc(meta.repo)}">Source of this page</a>.</p>
  <p>No cookies, no trackers, no analytics. Blobbi illustrations are drawn by <a href="https://github.com/Danidfra/blobbi-kit">@blobbi-kit/renderer</a> (MIT). Comfortaa font under the <a href="/fonts/OFL.txt">SIL Open Font License</a>.</p>
</footer>
</body>
</html>
`;
}
