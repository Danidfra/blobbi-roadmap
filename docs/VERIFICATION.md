# Verification record, 2026-10-18

How each claim on the site was checked. Re-check before changing a status.

## Checked live on 2026-10-18

| Claim | Check |
| --- | --- |
| www.blobbi.pet, island.blobbi.pet, farm.blobbi.pet, pixel.blobbi.pet are live | HTTP 200 |
| rumble.blobbi.pet is not running | HTTP 502 |
| World Travel is on in Blobbi Home production | The live bundle's travel build flag is `build:"nostr"` |
| World Travel ships in Blobbi Pixel production | The live bundle loads a `world-travel` chunk containing kind 31126 |
| npm versions and licenses | `npm view`: core/react 0.11.1, renderer 0.6.0, 3d 0.1.1, inventory 0.5.0, all MIT |
| Eight public repositories and their licenses | GitHub API: nostr-pet and blobbi-island AGPL-3.0; nostr-games-inventory, nostr-farm, blobbi-pixel-game, blobbi-rumble, blobbi-kit, farm-nostr-game MIT |
| Ditto main still uses kit ^0.4.0; V3 on a branch | `origin/main` package.json; `origin/feat/blobbi-v3` exists |

## Taken from repository documentation (not re-run)

| Claim | Source |
| --- | --- |
| World Travel validated publicly between Home and Pixel | blobbi-pixel-game README, Status table |
| Rumble statuses (validated over public networks, tested locally, implemented, planned) | blobbi-rumble README, Status; spec §19 |
| Island World Travel not implemented; Island, Farm, Rumble are the next Worlds | blobbi-kit `packages/blobbi-core/WORLD-TRAVEL.md` §11; no kind 31126 in Island source |
| Farm creation and item publishing checked against public relays | nostr-farm commits `aeb5cf4`, `cd94d01`, `c7e93fc` |
| Farm → Island and Farm/Island → Home item spends: tests, no recorded live loop | blobbi-island `src/inventory/external-spend.ts`, nostr-farm `src/inventory/ledger.ts`, nostr-pet `src/features/inventory/`; no manual validation record found |
| Pixel M4+ awaiting manual validation; island saved locally only | blobbi-pixel-game README |
| Island Nostr Station has one working card | blobbi-island `src/components/NostrHubModal.tsx` |
| Guest play in Home, Pixel, Rumble | Each README |

## Deliberately left off the site

- Usage numbers. The site shows no figures until baselines are published in
  a reproducible report.
- Work that is not in a public repository.
- Calendar dates for any roadmap item.
