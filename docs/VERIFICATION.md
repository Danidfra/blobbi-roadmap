# Verification record, 2026-10-21

Internal project documentation: the evidence behind each claim on the public
page, its known limits, and what still needs to be checked by hand. The page
stays short; the detail lives here. Re-check before changing a claim or a
status label.

Status labels used on the page:

- **Available now**: deployed on a public site and usable by anyone.
- **In testing**: built, but not yet verified on the live site or not yet
  open to the public.
- **Planned**: not built yet; see [ROADMAP-DETAIL.md](ROADMAP-DETAIL.md).

Evidence levels used below: **code** (exists in the repository), **tests**
(automated tests exist), **deployed** (on the branch or build that serves the
public site), **live check** (observed on the public site), **player record**
(a dated, written record of a test with real players).

## Status of each claim

| Claim on the page | Label | Evidence | Known limits |
| --- | --- | --- | --- |
| Home, Pixel, Island and Farm are playable | Available now | Live check 2026-10-21: HTTP 200 for www, pixel, island and farm.blobbi.pet | Island calls itself pre-alpha and is labelled Early access. Pixel saves progress in the browser only |
| Blobbi Home can be tried before making an account | Available now | Code: `nostr-pet/src/features/guest/`; deployed on `production` (5646e54) | |
| Your Nostr identity across connected worlds | Available now | Code: every game identifies the player by their Nostr key and reads the same Blobbi events (kind 31124) | No shared sign-in: each game asks you to sign in separately, and the options differ (see "Sign-in" below). The page says so |
| World Travel between Home and Pixel | Available now | Deployed: Home `production` = 5646e54; Pixel `main` = 6b983cf. Live check 2026-10-18: Home bundle has travel on (`build:"nostr"`), Pixel bundle loads the `world-travel` chunk. Pixel README: "validated publicly" | The travel model was rewritten on 2026-10-19/20 ("opening a world is the trip"). No dated player record exists for the new model. Requires signing in; guests do not travel |
| Travel to and from Blobbi Island | In testing | Code and tests: `blobbi-island/src/worlds/useIslandWorldTravel.ts`, `world-travel.nostr.test.tsx`; deployed branch `production` = bd79e3c | Travel only works if Island's production build sets `VITE_BLOBBI_WORLD_TRAVEL=nostr`; **not yet checked**. Pixel README: Pixel and Island travel "not yet validated publicly". No player record |
| Farm crops feed your Blobbi on Island and in Home | Available now | Code and tests: `blobbi-island/src/inventory/external-spend.ts`, `useConsumeExternalItem.ts`; `nostr-pet/src/features/inventory/useUseItem.ts`; Farm fold ledger on `main` (8306b38). All on deployed branches | **No written player record** found in any repository (`nostr-farm/docs/procedural-farm-audit.md` §5.3–5.4 says none is recorded). The owner reports that real players have used it; add the dated record here. Every crop has the same effect (+25 hunger) |
| Keeping item counts in sync is still being improved | (qualifier) | Blobbi Home spends items from Island's own inventory (`blobbi:island`) with kind 1416. Island's own inventory code (`src/inventory/useIslandInventory.ts`, `useInventoryMutation.ts`) does not read or fold those spends; only external inventories do (`useExternalInventoryEvents.ts`) | **Needs investigation:** an item used in Home may still show as available in Island. Scheduled for month 2 |
| Rumble: online matches tested, not open to the public | In testing | `blobbi-rumble` README status table (HEAD 2fc713a): network play, Nostr sign-in, invites and the player's own Blobbis "validated over public networks". Architecture: a server-authoritative Node/WebSocket server (spec §8, §20; peer-to-peer explicitly rejected in §9) | Never run as a public service per the README; no real-phone test; session restore awaiting a new run. rumble.blobbi.pet answered HTTP 200 with a passing `/healthz` on 2026-10-21. The owner confirms the server runs intentionally for testing; it is not presented as a public beta, so the page has no Play button |
| Explore together in Pixel | Planned | `blobbi-pixel-multiplayer` branch `feat/pixel-multiplayer` (c1fdc30): a movement-only prototype, development builds only, not pushed | Not a production feature |
| Blobbis can be raised inside Ditto | (community section) | Ditto `origin/main` (972cbc9b, 2026-10-17) ships `src/blobbi/` and depends on `@blobbi-kit/core` and `react` ^0.4.0 | Ditto main is several minor versions behind the current kit (0.11.1); V3 support is on Ditto's unmerged `feat/blobbi-v3` branch. No new collaboration is implied |
| Libraries published under MIT | Available now | `npm view`: `@blobbi-kit/core` and `react` 0.11.1, `renderer` 0.6.0, `3d` 0.1.1, `@nostr-games/inventory` 0.5.0; all MIT | No example app or starter template yet (month 5). No NIP submitted |
| Every game and library is open source | Available now | GitHub license API: nostr-pet and blobbi-island AGPL-3.0; blobbi-pixel-game, nostr-farm, blobbi-rumble, blobbi-kit, nostr-games-inventory, farm-nostr-game and blobbi-roadmap MIT. All nine repositories public | Farm artwork in farm-nostr-game has its own notice |

## Sign-in, as of 2026-10-21

| World | Extension (NIP-07) | Remote signer (NIP-46) | Pasted key | Created key | Play before signing in |
| --- | --- | --- | --- | --- | --- |
| Home | yes | yes | no (by design) | yes, with backup step | yes |
| Pixel | yes | no | yes | yes (local vault) | yes |
| Island | yes | yes (bunker) | yes | yes, with backup download | no |
| Farm | yes | yes (bunker) | yes | yes, with backup download | no |
| Rumble | yes | no (planned) | no | no | yes (guest) |

Sources: the README and auth code of each repository.

## Claims that still need a manual check

1. Island's production build has World Travel turned on (inspect the live
   bundle for the travel flag, then travel Home → Island → Home with a test
   key).
2. A dated, written record of real players using Farm crops on Island and in
   Home.
3. A dated record of Home ↔ Pixel travel under the 2026-10-20 model.
4. Whether the Island item-count issue above happens in practice.
5. Which Rumble build is running on rumble.blobbi.pet.

## Screenshots on the world cards, 2026-10-21

Captured from the live games in a clean headless Chrome (no extensions, no
existing sign-in), 1280×800 at device scale 2, then cropped to 16:10.

| World | Scene | How it was reached |
| --- | --- | --- |
| Blobbi Home | A newly hatched Blobbi in its room | Guest mode ("Meet your Blobbi!"): nothing was signed or published |
| Blobbi Pixel | The Blobbi on a new island, camera "Up close 6X" | Guest mode ("New Adventure"): saved in the browser only |
| Blobbi Island | The Blobbi in Town Square | A throwaway test key created through "New here? Get started" |
| Nostr Farm | Planted and watered crops | The same throwaway key |
| Blobbi Rumble | A Quick Match against the server's test bots | Guest play on the rumble.blobbi.pet test server; shows a test match, not a public release |

The throwaway key published real events to public relays (an Island Blobbi
and presence, a Farm and its field). Exclude it from any adoption figures:

`6eb4d1b5d23f68380c0057d4b7131beb075b61138e427dda4520682a8d92d22b`

## Deliberately left off the site

- Usage numbers. The site shows no figures until the baseline report in
  month 1 is published with its method. An earlier internal audit of public
  relay data (2026-10-16) found about 1,567 Nostr identities that published
  at least one Blobbi; that is a count of keys, not people, and says nothing
  about how many were new to Nostr.
- Work that is not in a public repository.
- Calendar dates for any roadmap item.
