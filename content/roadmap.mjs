// The six-month roadmap. Keep `text` to one or two short sentences; the
// deliverables, dependencies and completion criteria live in
// docs/ROADMAP-DETAIL.md.
//
// Months are counted from the start of the funded development period; no
// calendar dates are set. When a month's work lands, add a `progress` line
// linking to the evidence (it shows under the month).

export const roadmapIntro =
  'Six milestones, counted in months from the start of the funded development period. Each one builds on the last.';

export const roadmap = [
  {
    month: 1,
    title: 'A Universe for Everyone',
    theme: 'Accessibility and onboarding',
    art: 'egg',
    text: 'Better play on phones in every world, simpler sign-in for people new to Nostr, and an easy way to find and travel between worlds.',
    outcome: 'Create your Blobbi and start exploring connected worlds, even if you’re new to Nostr.',
  },
  {
    month: 2,
    title: 'A Connected Universe',
    theme: 'Shared items, rewards and progression',
    art: 'inventory',
    text: 'Safer, more consistent shared items, missions that span several games, and items that do something meaningful in each world they reach.',
    outcome: 'Earn rewards in one world, use them in another, and progress through adventures that connect the entire universe.',
  },
  {
    month: 3,
    title: 'Worlds That Grow',
    theme: 'Gameplay expansions',
    art: 'farm',
    text: 'More crops, animals and activities in Nostr Farm, new activities and customization on Blobbi Island, better rewards in Blobbi Home, and deeper crafting in Blobbi Pixel.',
    outcome: 'Discover evolving worlds filled with new activities, collectibles and adventures.',
  },
  {
    month: 4,
    title: 'Adventures Together',
    theme: 'Multiplayer and social',
    art: 'rumble',
    text: 'Explore and build together in small groups in Blobbi Pixel, and invite friends more easily. Blobbi Rumble moves toward a public beta, which opens only after security, stability and real-device tests pass.',
    outcome: 'Explore with friends, build together, and compete in multiplayer experiences.',
  },
  {
    month: 5,
    title: 'An Open Universe for Creators',
    theme: 'Developer ecosystem',
    art: 'kit',
    text: 'Clearer documentation, integration guides and working examples, so independent developers can create compatible items, experiences and worlds.',
    outcome: 'An open ecosystem where independent developers can build new experiences that connect to the Blobbi universe.',
  },
  {
    month: 6,
    title: 'The Universe Comes Together',
    theme: 'Community, integration and public beta',
    art: 'hero',
    text: 'Cross-world events, public playtests and a stability and accessibility pass. The target is an integrated public beta once clear readiness criteria are met, then a public report.',
    outcome: 'Join a growing universe of connected worlds, shared adventures and community-driven experiences.',
  },
];
