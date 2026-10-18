// The status ledger: what exists today, with the evidence for each line.
// When something moves (say, from implemented to released), move its entry
// and update `meta.updated`.

export const ledger = {
  released: [
    {
      text: 'Blobbi Home is live at [www.blobbi.pet](https://www.blobbi.pet).',
      evidence: 'Site reachable; source and feature list in the [repository](https://github.com/Danidfra/nostr-pet).',
    },
    {
      text: 'Blobbi Island is live at [island.blobbi.pet](https://island.blobbi.pet).',
      evidence: 'Site reachable; described as pre-alpha in its [README](https://github.com/Danidfra/blobbi-island).',
    },
    {
      text: 'Nostr Farm is live at [farm.blobbi.pet](https://farm.blobbi.pet).',
      evidence:
        'Site reachable. Farm creation and the publishing of its item definitions and inventory were checked against public relays (commit history of the [repository](https://github.com/Danidfra/nostr-farm)).',
    },
    {
      text: 'Blobbi Pixel is live at [pixel.blobbi.pet](https://pixel.blobbi.pet).',
      evidence: 'Site reachable; status table in the [README](https://github.com/Danidfra/blobbi-pixel-game).',
    },
    {
      text: 'World Travel between Blobbi Home and Blobbi Pixel: a Blobbi’s current place is a signed World Location event (kind `31126`), the same on every device.',
      evidence:
        'Enabled in both production builds. The Pixel README records it as validated publicly between the two apps. The kinds are marked experimental in [`WORLD-TRAVEL.md`](https://github.com/Danidfra/blobbi-kit/blob/main/packages/blobbi-core/WORLD-TRAVEL.md).',
    },
    {
      text: 'The shared libraries are published on npm under MIT: `@blobbi-kit/core` and `@blobbi-kit/react` 0.11.1, `@blobbi-kit/renderer` 0.6.0, `@blobbi-kit/3d` 0.1.1, `@nostr-games/inventory` 0.5.0.',
      evidence: 'Versions and licenses as reported by the npm registry.',
    },
    {
      text: 'All eight ecosystem repositories are public and licensed.',
      evidence: 'GitHub detects the license of each one (see Open source below).',
    },
  ],
  implemented: [
    {
      text: 'Blobbi Rumble: the full game, online rooms, Nostr login, the player’s own Blobbis as fighters, NIP-17 private invites and Docker hosting.',
      evidence:
        'Code and automated tests in the [repository](https://github.com/Danidfra/blobbi-rumble). Login, invites, own Blobbis and play across the Internet were tested by the developer over public networks. No public server runs yet.',
    },
    {
      text: 'Nostr Farm produce in Blobbi Island: it appears in the Island bag and can be fed to a Blobbi. The spend is a player-signed event (`1416`) that the Farm folds into its inventory (`1417`).',
      evidence: 'In the production builds of both apps, with automated tests. The full loop has not yet been recorded with real players.',
    },
    {
      text: 'Items owned on Blobbi Island or harvested in Nostr Farm can be used in Blobbi Home.',
      evidence: 'Implemented with automated tests; no recorded end-to-end check yet.',
    },
    {
      text: 'Blobbi Pixel island gameplay from milestone M4 on (crafting, cooking, quests, the Carrier and more).',
      evidence: 'Implemented; its manual test plan is still being worked through.',
    },
    {
      text: 'Cross-app identity contract: the same procedural (V3) Blobbi is read and republished unchanged by Blobbi Home, Blobbi Island and a Ditto branch.',
      evidence: 'A shared contract test exists in each of the three codebases.',
    },
    {
      text: 'Blobbi Island Theater “watch together”.',
      evidence: 'Marked experimental in the Island documentation.',
    },
  ],
  development: [
    {
      text: 'Procedural (V3) Blobbis in Ditto, the third-party Nostr client that already shows Blobbis.',
      evidence: 'On a branch of Ditto; not merged by its maintainers yet.',
    },
    {
      text: 'Blobbi Rumble session restoration after a reload.',
      evidence: 'A real run found two bugs; both are fixed and wait for a new run.',
    },
  ],
  planned: [
    {
      text: 'World Travel for Blobbi Island, then Nostr Farm and Blobbi Rumble.',
      evidence: 'Listed in order under “Future Worlds” in `WORLD-TRAVEL.md`. Island needs a compatibility audit first.',
    },
    {
      text: 'Shared items in more apps (Blobbi Pixel, Blobbi Rumble, others).',
      evidence: 'Pixel’s inventory is already shaped like the shared format; its design documents describe the integration.',
    },
    {
      text: 'Issuer-verifiable item grants in `@nostr-games/inventory`.',
      evidence: 'Named as not yet defined in the library’s README.',
    },
    {
      text: 'A first public Blobbi Rumble server; NIP-46 signer apps in Rumble.',
      evidence: 'Listed as planned in the Rumble README.',
    },
    {
      text: 'Content for Blobbi Island’s Nostr Station, the in-game place for learning about Nostr.',
      evidence: 'The Station exists with one working card (Connected Experiences); its other cards are empty today.',
    },
  ],
};
