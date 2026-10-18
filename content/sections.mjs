// The prose sections: overview, interoperability, adoption, metrics, open source.

export const overview = {
  lead:
    'Blobbi is a family of small, open-source games built on Nostr. Your Blobbi, a little procedural creature, belongs to your Nostr key, not to any one game. Every game reads the same signed events, so the same Blobbi walks into each of them.',
  points: [
    ['One identity', 'Sign in to every game with the same Nostr key: a browser extension, a signer app, or a key made for you on the spot.'],
    ['One character', 'A Blobbi is an addressable Nostr event. Its look is derived from its address, so every app draws the same individual, in 2D, in pixels or in 3D.'],
    ['No game servers holding your stuff', 'Blobbis, profiles, farms and inventories are events on public relays. Only real-time play (Rumble’s matches) needs a server.'],
    ['Open libraries', 'The character and item rules live in MIT-licensed packages any developer can use.'],
  ],
  note:
    'This page is the project’s public roadmap. It lists what exists, what is being built and what is planned, and says which is which.',
};

export const interoperability = {
  intro:
    'Interoperability here means that separate apps, with no shared server and no shared database, agree on what a few kinds of Nostr events mean. The event kinds below are conventions of this ecosystem. They are documented in the repositories but are not NIPs.',
  existing: [
    {
      title: 'Nostr identities',
      status: 'released',
      text: 'Every app signs in with a Nostr key. Browser extensions (NIP-07) work everywhere; signer apps (NIP-46) work in Blobbi Home, Blobbi Island and Nostr Farm. Home, Pixel and Rumble also let a newcomer play first, as a guest.',
    },
    {
      title: 'Cross-app Blobbi characters',
      status: 'released',
      text: 'A Blobbi’s state is one addressable event (kind `31124`), and the player’s profile (kind `11125`) names their Blobbis and current companion. Blobbi Home, Blobbi Island, Blobbi Pixel and Blobbi Rumble read them. Ditto, a third-party Nostr client, already shows Blobbis too.',
    },
    {
      title: 'World Travel',
      status: 'released',
      text: 'A Blobbi is in one World at a time. Moving it publishes a World Location (kind `31126`) signed by its owner; other apps and devices read it, so a Blobbi playing in Pixel is away from its Home. Live between Blobbi Home and Blobbi Pixel; the kinds are experimental.',
    },
    {
      title: 'Reusable libraries',
      status: 'released',
      text: '`@blobbi-kit/*` holds the character: event parsing, life-cycle rules, the deterministic look and its 2D and 3D renderers. `@nostr-games/inventory` holds items: definitions (`31632`), inventories (`31633`), placements (`31634`), spends (`1416`) and folds (`1417`).',
    },
    {
      title: 'Items across games',
      status: 'implemented',
      text: 'Nostr Farm publishes its produce as items. Blobbi Island and Blobbi Home show them and let the player spend them; the Farm then folds each spend into its inventory. No code is shared between the apps: they meet only through signed events.',
    },
  ],
  future: [
    { title: 'World Travel to more Worlds', text: 'Blobbi Island first, then Nostr Farm and Blobbi Rumble.' },
    { title: 'Inventory in more apps', text: 'At least two more apps sharing items, with better synchronization (roadmap month 2).' },
    { title: 'Verifiable item grants', text: 'A way for an item issuer to prove what it granted, so apps can trust balances beyond a fixed list of issuer keys.' },
    { title: 'Third-party games', text: 'Examples and documentation so games outside the Blobbi family can use the same characters and items (roadmap month 5).' },
  ],
  limits: [
    'Each app trusts a fixed list of item issuers today.',
    'Two apps writing the same event at the same time can overwrite each other; the apps narrow this by reading fresh state before every write, but do not eliminate it.',
    'Every app that uses the shared item protocol today is written by the same developer. Independent implementations are a goal, not a fact yet.',
  ],
};

export const adoption = {
  intro:
    'A game is a gentle way to meet Nostr: people come to play, and leave holding a key that works in every other Nostr app. The plan builds on what the games already do.',
  items: [
    {
      title: 'Accessible onboarding',
      today: 'Blobbi Home, Blobbi Pixel and Blobbi Rumble let a newcomer play before making an account. Home hands over a key only when the player chooses to save their Blobbi, behind a backup step. Signer apps work by QR code.',
      next: 'Clearer mobile onboarding and navigation (month 1), and onboarding experiments with real players (month 2).',
    },
    {
      title: 'Friend invitations',
      today: 'Blobbi Rumble sends room invites as private NIP-17 messages that any NIP-17 client can read. It is not publicly available yet.',
      next: 'Tested with real players alongside the multiplayer work (month 3).',
    },
    {
      title: 'Creator collaborations',
      today: 'Not started.',
      next: 'Explored in month 5, together with the developer documentation.',
    },
    {
      title: 'Community events',
      today: 'Not started.',
      next: 'Part of the outreach that begins in month 1 and continues in month 4.',
    },
    {
      title: 'Cross-game engagement',
      today: 'A Blobbi travels between Home and Pixel, and Farm produce can feed a Blobbi on the Island.',
      next: 'More Worlds and more shared items (months 1 and 2), so each game gives a reason to visit the next.',
    },
  ],
};

export const metrics = {
  intro:
    'Progress will be measured from public data where possible: Nostr events are public, so most of these can be counted by anyone, from the relays, without trackers. Baselines will be published in the first progress report. This page shows no numbers until they are measured and reproducible.',
  groups: [
    {
      title: 'Players',
      rows: [
        ['Accounts holding a Blobbi', 'Distinct authors of Blobbi state events (`31124`) on public relays'],
        ['Active players', 'Distinct authors of care interactions (`1124`) per week'],
        ['New accounts from games', 'Accounts whose first known events are Blobbi events'],
        ['Players who return', 'Accounts active again in a later week'],
      ],
    },
    {
      title: 'Interoperability',
      rows: [
        ['Blobbis that travel', 'Distinct Blobbis with World Location events (`31126`) in more than one World'],
        ['Items used across apps', 'Spends (`1416`) of items issued by a different app'],
        ['Apps in each protocol', 'Apps that read or write each shared kind'],
      ],
    },
    {
      title: 'Developers',
      rows: [
        ['Library use', 'npm downloads of `@blobbi-kit/*` and `@nostr-games/inventory`'],
        ['Outside builders', 'Projects and contributors outside this ecosystem using the libraries'],
        ['Documentation', 'Integration examples and guides published'],
      ],
    },
    {
      title: 'Delivery',
      rows: [
        ['Roadmap items', 'Items moved to Released on this page, each with a public link'],
        ['Reliability', 'Bugs found by real players, and fixed, per month'],
        ['Reports', 'Progress reports published'],
      ],
    },
  ],
};

export const openSource = {
  intro:
    'Every repository in the ecosystem is public. The reusable libraries and most games are MIT; the two apps that include code derived from Ditto are AGPL-3.0-or-later, the license that code already carried.',
  mit: [
    ['blobbi-kit', 'https://github.com/Danidfra/blobbi-kit'],
    ['nostr-games-inventory', 'https://github.com/Danidfra/nostr-games-inventory'],
    ['Nostr Farm', 'https://github.com/Danidfra/nostr-farm'],
    ['Farm renderpack', 'https://github.com/Danidfra/farm-nostr-game'],
    ['Blobbi Pixel', 'https://github.com/Danidfra/blobbi-pixel-game'],
    ['Blobbi Rumble', 'https://github.com/Danidfra/blobbi-rumble'],
  ],
  agpl: [
    ['Blobbi Home', 'https://github.com/Danidfra/nostr-pet'],
    ['Blobbi Island', 'https://github.com/Danidfra/blobbi-island'],
  ],
  notes: [
    'MIT lets anyone build on the libraries, including in closed or commercial games.',
    'AGPL-3.0-or-later means anyone who runs a modified Blobbi Home or Blobbi Island as a public service must share their source. Both apps link to their source code from inside the app.',
    'Blobbi Home, Blobbi Island and Nostr Farm document where their artwork comes from, including AI-generated images, in their notices. Blobbi Pixel draws every pixel from code.',
  ],
};
