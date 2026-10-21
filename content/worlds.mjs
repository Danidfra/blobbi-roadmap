// "The Blobbi Universe": the game cards and what already connects them.
//
// Worlds: `url` is null when the game has no public version. `status` is one
// of the keys in `statuses` (content/meta.mjs); `note` adds a short qualifier
// to the badge.
//
// `media` is a real screenshot of the game, in public/media/<name>-960.webp
// and <name>-480.webp (16:10). `alt` says what the screenshot shows. A world
// without `media` falls back to its illustration. `video` is reserved for
// short gameplay clips (see README, "Gameplay previews"); keep it null until
// the clips exist.
//
// Connections: one line each, with the same `status` keys. Only claims that
// docs/VERIFICATION.md backs up belong here.

export const worlds = [
  {
    id: 'home',
    name: 'Blobbi Home',
    art: 'home',
    tagline: 'The home of your Blobbi.',
    text: 'Adopt an egg, hatch it and care for your Blobbi as it grows up. Try it before making an account.',
    url: 'https://www.blobbi.pet',
    repo: 'https://github.com/Danidfra/nostr-pet',
    media: { name: 'home', alt: 'Blobbi Home: a newly hatched Blobbi in its room, above the Feed, Play, Care, Rest and Items buttons.', video: null },
    status: 'available',
  },
  {
    id: 'pixel',
    name: 'Blobbi Pixel',
    art: 'pixel',
    tagline: 'A procedural pixel-art world.',
    text: 'Gather, craft, farm and build a home on an island drawn pixel by pixel from a seed.',
    url: 'https://pixel.blobbi.pet',
    repo: 'https://github.com/Danidfra/blobbi-pixel-game',
    media: { name: 'pixel', alt: 'Blobbi Pixel: a small blue Blobbi beside a tree, a rock and a pond on a pixel-art island.', video: null },
    status: 'available',
  },
  {
    id: 'island',
    name: 'Blobbi Island',
    art: 'island',
    tagline: 'A walkable island to share.',
    text: 'Walk your Blobbi around town, shop, play mini-games and meet other players live.',
    url: 'https://island.blobbi.pet',
    repo: 'https://github.com/Danidfra/blobbi-island',
    media: { name: 'island', alt: 'Blobbi Island: a pink Blobbi in Town Square, in front of the Game Arcade, the Performance Stage and the Village Shop.', video: null },
    status: 'available',
    note: 'Early access',
  },
  {
    id: 'farm',
    name: 'Nostr Farm',
    art: 'farm',
    tagline: 'A farm that belongs to your key.',
    text: 'Plant, water and harvest crops, then use them to feed your Blobbi in other worlds.',
    url: 'https://farm.blobbi.pet',
    repo: 'https://github.com/Danidfra/nostr-farm',
    media: { name: 'farm', alt: 'Nostr Farm: three rows of carrots, parsnips, pumpkins and strawberries, most of them ready to harvest.', video: null },
    status: 'available',
  },
  {
    id: 'rumble',
    name: 'Blobbi Rumble',
    art: 'rumble',
    tagline: 'A 3D party brawler.',
    text: 'Up to four Blobbis punch, grab and throw each other off floating arenas.',
    url: null,
    repo: 'https://github.com/Danidfra/blobbi-rumble',
    media: { name: 'rumble', alt: 'A Blobbi Rumble test match: four Blobbis, labelled P1 to P4, on a floating grass arena.', video: null },
    status: 'testing',
    note: 'Not public yet',
  },
];

export const connections = {
  intro: 'Nostr, an open protocol, lets independent games share your Blobbi and your items.',
  items: [
    {
      status: 'available',
      title: 'Your Nostr identity across connected worlds',
      text: 'Your Blobbi belongs to your own Nostr key, not a game account. For now each world asks you to sign in on its own.',
    },
    {
      status: 'available',
      title: 'Travel between Home and Pixel',
      text: 'Send your Blobbi from Blobbi Home to Blobbi Pixel and back.',
    },
    {
      status: 'testing',
      title: 'Travel to Blobbi Island',
      text: 'Travel to and from Blobbi Island is built. We are checking it on the live site.',
    },
    {
      status: 'available',
      title: 'Shared items',
      text: 'Crops from Nostr Farm feed your Blobbi on Blobbi Island and in Blobbi Home. Keeping item counts in sync across every game is still being improved.',
    },
    {
      status: 'testing',
      title: 'Online matches',
      text: 'Blobbi Rumble brings your own Blobbi into matches run on its game server. Tested over the internet.',
    },
    {
      status: 'planned',
      title: 'Explore together in Pixel',
      text: 'Small groups exploring and building in the same Blobbi Pixel world, in month 4.',
    },
  ],
};
