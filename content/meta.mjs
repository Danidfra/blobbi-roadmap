// Site-wide settings and the introduction. Change `updated` whenever any
// content file changes. The evidence behind every claim on the page is kept
// in docs/VERIFICATION.md; the detailed plan is in docs/ROADMAP-DETAIL.md.

export const meta = {
  title: 'Blobbi Roadmap',
  description:
    'Blobbi is an open universe of connected games built on Nostr. Bring your Blobbi and your items across independent worlds. See what is live today and the six-month plan.',
  url: 'https://roadmap.blobbi.pet/',
  ogImage: 'https://roadmap.blobbi.pet/og.png',
  updated: '2026-10-21',
  repo: 'https://github.com/Danidfra/blobbi-roadmap',
  github: 'https://github.com/Danidfra',
};

export const intro = {
  headline: 'One Blobbi. Many worlds.',
  paragraphs: [
    'An open universe of connected games, built on Nostr.',
    'Bring your Blobbi, your items and your adventures across independent worlds. Every game and library is open source, so anyone can build the next one.',
  ],
};

// The three status labels used across the page. Every claim marked
// `available` or `testing` must have a row in docs/VERIFICATION.md.
export const statuses = {
  available: 'Available now',
  testing: 'In testing',
  planned: 'Planned',
};
