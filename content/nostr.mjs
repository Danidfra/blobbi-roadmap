// "Built on Nostr". Each point says plainly what works today and what does not.
// Inline text supports `code` and [links](https://…).

export const nostr = {
  intro: 'Nostr is an open protocol. That is what lets independent games share one world.',
  points: [
    {
      title: 'Characters move between games',
      text: 'Your Blobbi is a Nostr event, so independent games can show the same creature. World Travel, moving your Blobbi from one game to another, is live between Blobbi Home and Blobbi Pixel only, for now.',
    },
    {
      title: 'Your identity belongs to you',
      text: 'You sign in with your own Nostr key, not a game account. The same key works in every Blobbi game, and across Nostr.',
    },
    {
      title: 'Items can be shared',
      text: 'Games can exchange items through an open inventory protocol. Produce from Nostr Farm can already be used on Blobbi Island and in Blobbi Home, but this has not yet been validated with real players.',
    },
    {
      title: 'The libraries are open source',
      text: 'The building blocks are MIT-licensed, for anyone to use.',
    },
  ],
  links: [
    ['blobbi-kit', 'https://github.com/Danidfra/blobbi-kit', 'The Blobbi character'],
    ['nostr-games-inventory', 'https://github.com/Danidfra/nostr-games-inventory', 'Game items on Nostr'],
    ['All projects on GitHub', 'https://github.com/Danidfra', 'Danidfra'],
  ],
};
