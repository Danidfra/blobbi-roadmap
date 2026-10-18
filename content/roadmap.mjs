// The six-month roadmap.
//
// Months are counted from the start of the funded development period; no
// calendar dates are set.
// Each item has a status. Today every item is 'planned'; move it to
// 'development' when work starts and 'released' (or 'implemented') when it
// lands, and add a `progress` line with a link to the evidence.
//
// `startingPoint` states where things stand today, so a reader can tell what
// the month changes.

export const roadmap = [
  {
    month: 1,
    theme: 'Travel and first steps',
    art: 'island',
    startingPoint:
      'World Travel runs between Blobbi Home and Blobbi Pixel. Blobbi Island is not part of it yet; the kit lists Island as the next World, after a compatibility audit.',
    items: [
      { status: 'planned', text: 'Island World Travel integration: bring Blobbi Island into World Travel, starting with that compatibility audit.' },
      { status: 'planned', text: 'Improve mobile onboarding and navigation.' },
      { status: 'planned', text: 'Begin community outreach.' },
    ],
  },
  {
    month: 2,
    theme: 'Items that cross apps',
    art: 'inventory',
    startingPoint:
      'Nostr Farm issues items, Blobbi Island and Blobbi Home can spend them, and the Farm folds those spends back in. That loop has automated tests but has not yet been recorded with real players.',
    items: [
      { status: 'planned', text: 'Expand interoperable inventory across at least two apps.' },
      { status: 'planned', text: 'Improve item synchronization and cross-game interactions.' },
      { status: 'planned', text: 'Run initial player onboarding experiments.' },
    ],
  },
  {
    month: 3,
    theme: 'Multiplayer without a central server?',
    art: 'rumble',
    startingPoint:
      'Blobbi Rumble runs on an authoritative Node server with WebSocket snapshots. No public server runs today.',
    items: [
      { status: 'planned', text: 'Evaluate peer-to-peer multiplayer for Blobbi Rumble.' },
      { status: 'planned', text: 'Explore WebRTC with Nostr-based player discovery.' },
      { status: 'planned', text: 'Document STUN/TURN and security tradeoffs.' },
      { status: 'planned', text: 'Test multiplayer with real players.' },
      { status: 'planned', text: 'Prepare a public beta if technically feasible.' },
    ],
  },
  {
    month: 4,
    theme: 'A bigger farm',
    art: 'farm',
    startingPoint: 'Nostr Farm has one personal farm per player: a 9×4 field and four crops that share the same timings.',
    items: [
      { status: 'planned', text: 'Expand Nostr Farm gameplay.' },
      { status: 'planned', text: 'Improve procedural farming content.' },
      { status: 'planned', text: 'Continue outreach and retention experiments.' },
    ],
  },
  {
    month: 5,
    theme: 'Open to other builders',
    art: 'kit',
    startingPoint:
      'Both libraries have READMEs and written specifications for their event kinds. Outside the Blobbi apps, Ditto uses blobbi-kit; no game outside the ecosystem uses the inventory library yet, and there are no integration examples.',
    items: [
      { status: 'planned', text: 'Improve developer documentation.' },
      { status: 'planned', text: 'Publish integration examples.' },
      { status: 'planned', text: 'Support third-party experimentation with Blobbi libraries.' },
      { status: 'planned', text: 'Explore creator collaborations.' },
    ],
  },
  {
    month: 6,
    theme: 'Steady ground',
    art: 'hero',
    startingPoint: null,
    items: [
      { status: 'planned', text: 'Stabilize cross-app experiences.' },
      { status: 'planned', text: 'Improve reliability and mobile usability.' },
      { status: 'planned', text: 'Publish progress and adoption reports.' },
      { status: 'planned', text: 'Document next development priorities.' },
    ],
  },
];
