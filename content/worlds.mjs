// "The Blobbi Universe": the game cards and what already connects them.
//
// Worlds: `url` is null when the game has no public version. `status` is one
// of the keys in `statuses` (content/meta.mjs); `note` adds a short qualifier
// to the badge.
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
