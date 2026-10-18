// Site-wide settings. Change `updated` whenever any content file changes.

export const meta = {
  title: 'Blobbi Roadmap',
  description:
    'The public development roadmap of the Blobbi ecosystem: open-source games on Nostr where one Blobbi character, one identity and one set of items travel between apps.',
  url: 'https://roadmap.blobbi.pet/',
  ogImage: 'https://roadmap.blobbi.pet/og.png',
  updated: '2026-10-18',
  repo: 'https://github.com/Danidfra/blobbi-roadmap',
};

// The four status labels used everywhere on the site.
export const STATUS = {
  released: {
    label: 'Released',
    long: 'Released · publicly verifiable',
    glyph: '●',
    blurb: 'Live on a public URL or package registry. Anyone can open or install it today.',
  },
  implemented: {
    label: 'Implemented',
    long: 'Implemented · not yet publicly verified',
    glyph: '◐',
    blurb:
      'The code exists and has automated tests, but it is not publicly available, or nobody has yet recorded it working end to end with real players.',
  },
  development: {
    label: 'In development',
    long: 'In development',
    glyph: '◔',
    blurb: 'Work has started and is not finished.',
  },
  planned: {
    label: 'Planned',
    long: 'Planned',
    glyph: '○',
    blurb: 'Designed or intended. No implementation yet.',
  },
};
