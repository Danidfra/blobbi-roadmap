// The apps and libraries of the ecosystem.
//
// `status` is the project's overall state; `features` list what it does,
// each with its own status. Inline text supports `code` and [links](https://…).

export const apps = [
  {
    id: 'home',
    name: 'Blobbi Home',
    art: 'home',
    tagline: 'The home of your Blobbi.',
    summary:
      'Adopt an egg, hatch it, care for it and watch it grow into an adult, in one small room that fits any phone. Every lasting change is a signed Nostr event; the app has no server of its own.',
    url: 'https://www.blobbi.pet',
    repo: 'https://github.com/Danidfra/nostr-pet',
    license: 'AGPL-3.0-or-later',
    status: 'released',
    features: [
      ['released', 'Adopt, hatch, feed, play, clean, rest and evolve'],
      ['released', 'Sign in with a browser extension (NIP-07) or a signer app (NIP-46), or start as a guest with nothing published'],
      ['released', 'World Travel with Blobbi Pixel'],
      ['implemented', 'Use items owned on Blobbi Island or harvested in Nostr Farm'],
    ],
  },
  {
    id: 'pixel',
    name: 'Blobbi Pixel',
    art: 'pixel',
    tagline: 'A procedural pixel-art world.',
    summary:
      'Islands that grow on the back of a giant World Carrier, generated pixel by pixel from a seed. Gather, craft, farm, cook and build a home with your own Blobbi, read from Nostr.',
    url: 'https://pixel.blobbi.pet',
    repo: 'https://github.com/Danidfra/blobbi-pixel-game',
    license: 'MIT',
    status: 'released',
    features: [
      ['released', 'Play with your account’s own Blobbis (NIP-07), or as a guest'],
      ['released', 'World Travel with Blobbi Home'],
      ['implemented', 'Island gameplay from milestone M4 on, awaiting manual validation'],
      ['planned', 'Islands saved on Nostr, multiplayer visits, shared items'],
    ],
    note: 'The island itself is saved in the browser only today.',
  },
  {
    id: 'island',
    name: 'Blobbi Island',
    art: 'island',
    tagline: 'A walkable island to share.',
    summary:
      'Walk your Blobbi through a hand-drawn town, beach, mine and arcade. Shop, equip items, play mini-games and meet the other players in the same room.',
    url: 'https://island.blobbi.pet',
    repo: 'https://github.com/Danidfra/blobbi-island',
    license: 'AGPL-3.0-or-later',
    status: 'released',
    features: [
      ['released', 'Care, shops, coins and equipment as Nostr events'],
      ['released', 'Mini-games: Blobbi Dance, Air Hockey, Pool, the Mine, a beach treasure hunt'],
      ['released', 'Live presence and chat with players in the same room'],
      ['implemented', 'Produce harvested in Nostr Farm appears in the bag and can be fed to a Blobbi'],
      ['implemented', 'Theater “watch together” (experimental)'],
      ['planned', 'World Travel'],
    ],
    note: 'The project describes itself as pre-alpha.',
  },
  {
    id: 'farm',
    name: 'Nostr Farm',
    art: 'farm',
    tagline: 'A farm that belongs to your key.',
    summary:
      'Plant, water and harvest crops. The farm, its field, every plot and every harvest are events signed by the player and stored on public relays.',
    url: 'https://farm.blobbi.pet',
    repo: 'https://github.com/Danidfra/nostr-farm',
    license: 'MIT',
    status: 'released',
    features: [
      ['released', 'Plant, water and harvest four crops on a 9×4 field'],
      ['released', 'Publishes its item definitions and the player’s produce with the shared inventory protocol'],
      ['implemented', 'Accepts spends of its produce made in other apps'],
    ],
    extraRepos: [['Art and renderpack', 'https://github.com/Danidfra/farm-nostr-game']],
  },
  {
    id: 'rumble',
    name: 'Blobbi Rumble',
    art: 'rumble',
    tagline: 'A 3D party brawler.',
    summary:
      'Matches of up to four players: Blobbis punch, grab and throw each other off floating arenas. Your own Blobbi fights, drawn in 3D from its Nostr address.',
    url: null,
    repo: 'https://github.com/Danidfra/blobbi-rumble',
    license: 'MIT',
    status: 'implemented',
    features: [
      ['implemented', 'Authoritative game server, rooms and private rooms'],
      ['implemented', 'Nostr login, your own Blobbis as fighters, and private invites over NIP-17. These were tested by the developer with real identities over public relays'],
      ['implemented', 'Docker hosting configuration'],
      ['planned', 'A first public server'],
    ],
    note: 'There is no public Rumble server today: rumble.blobbi.pet is configured but not running. Anyone can run a server from the repository.',
  },
];

export const libraries = [
  {
    id: 'kit',
    name: 'blobbi-kit',
    art: 'kit',
    tagline: 'The Blobbi character, as a library.',
    summary:
      'Event kinds, parsing and life-cycle rules for Blobbis, a React layer, an SVG renderer for every generation and a 3D renderer. Every Blobbi app uses it, and the illustrations on this page are drawn with it.',
    repo: 'https://github.com/Danidfra/blobbi-kit',
    license: 'MIT',
    status: 'released',
    packages: [
      ['@blobbi-kit/core', '0.11.1'],
      ['@blobbi-kit/react', '0.11.1'],
      ['@blobbi-kit/renderer', '0.6.0'],
      ['@blobbi-kit/3d', '0.1.1'],
    ],
  },
  {
    id: 'inventory',
    name: 'nostr-games-inventory',
    art: 'inventory',
    tagline: 'Game items as Nostr events.',
    summary:
      'A dependency-free TypeScript library for item definitions, inventories, placements and an append-only spend model, so more than one app can debit the same inventory without overwriting it.',
    repo: 'https://github.com/Danidfra/nostr-games-inventory',
    license: 'MIT',
    status: 'released',
    packages: [['@nostr-games/inventory', '0.5.0']],
  },
];
