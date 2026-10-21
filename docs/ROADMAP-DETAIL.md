# Six-month roadmap: detail

The detailed plan behind the six milestones on <https://roadmap.blobbi.pet>.
The public page is written for players; this document is for reviewers and
contributors. It lists what each month delivers, what it depends on, what
could go wrong, and how anyone can check that it is done.

Months are counted from the start of the funded development period
(six months of full-time work by one developer). No calendar dates are set.
The current state of every existing feature, with evidence, is in
[VERIFICATION.md](VERIFICATION.md).

## Contents

- [Principles](#principles)
- [Time allocation](#time-allocation)
- [Month 1: A Universe for Everyone](#month-1-a-universe-for-everyone)
- [Month 2: A Connected Universe](#month-2-a-connected-universe)
- [Month 3: Worlds That Grow](#month-3-worlds-that-grow)
- [Month 4: Adventures Together](#month-4-adventures-together)
- [Month 5: An Open Universe for Creators](#month-5-an-open-universe-for-creators)
- [Month 6: The Universe Comes Together](#month-6-the-universe-comes-together)
- [Community activities, all six months](#community-activities-all-six-months)
- [Measurement and privacy](#measurement-and-privacy)
- [Cross-cutting risks](#cross-cutting-risks)
- [Out of scope](#out-of-scope)

## Principles

1. **Start from what exists.** Five public worlds, World Travel, a shared
   inventory protocol and two published libraries are already in place.
   The plan deepens them; it does not start new games.
2. **Each world keeps its own rules.** Interoperability means games can read
   each other's characters and items and decide for themselves what those do.
   No game is forced to adopt another's mechanics.
3. **Players first, measurable underneath.** Every milestone has a player or
   developer outcome and a check that someone outside the project can repeat.
4. **Nothing is called live until it is verified.** Every claim on the public
   page uses one of three labels (Available now, In testing, Planned) and is
   backed by a row in VERIFICATION.md.
5. **Conditional releases stay conditional.** Blobbi Rumble's public beta and
   the integrated public beta in month 6 open only when their readiness
   criteria are met.

## Time allocation

About 22 working days per month. A typical month:

| Share | Days | What it covers |
| --- | --- | --- |
| 65% | ~14 | The month's milestone deliverables |
| 15% | ~3 | Maintenance across seven repositories: bug fixes, dependency and relay issues, keeping deployments healthy |
| 10% | ~2 | Community: playtest sessions, updates on Nostr, answering players and developers |
| 10% | ~2–3 | Documentation, release notes, and buffer for the unexpected |

Month 6 shifts the balance toward stabilization, playtests and reporting
(about 40% milestone work, 30% stabilization, 30% community and report).
If a month runs over, its stretch items move to the backlog. They do not
push the next month.

---

## Month 1: A Universe for Everyone

**Theme:** accessibility and onboarding.
**Player outcome:** "Create your Blobbi and start exploring connected worlds,
even if you're new to Nostr."

### Deliverables

1. **Phone play in every world.**
   - Blobbi Island playable in portrait; today phones in portrait see a
     "rotate your device" screen.
   - Nostr Farm usable on a 390 px screen (larger tiles, pan and zoom).
   - A pass on touch targets and layout in Home and Pixel.
2. **Simpler, consistent sign-in.**
   - Every world offers the same three paths: a browser extension, a
     remote signer (NIP-46, for example Amber or nsec.app), or a key the game
     creates for you, with a clear backup step later.
   - Blobbi Pixel gains remote-signer sign-in, so phone players no longer
     have to paste a private key.
   - Blobbi Island and Nostr Farm let a newcomer look around before signing
     in, following Blobbi Home's guest-first pattern.
   - Short, plain-language explanations of what a key is and why to back it
     up, without protocol words on the first screen.
3. **Find and travel between worlds.**
   - A shared Worlds launcher in all five games (Pixel and Farm have none
     today).
   - Verify and, if needed, enable World Travel on Blobbi Island's live build,
     then record a dated live test for every travel direction.
4. **Consistency.** Shared naming, status labels and "back to your Blobbi"
   navigation across games.
5. **Measurement baseline.** Publish the first adoption report (see
   [Measurement and privacy](#measurement-and-privacy)) so later months have
   something to compare against.

### Dependencies

- A design decision on how sign-in carries between games. Each game lives on
  its own subdomain, so a key created in one game is not visible to the
  others. Options are a remote signer, a dedicated sign-in origin, or
  per-game keys with an easy import. The decision is made and documented in
  week 1; single sign-on is not promised.

### Risks

- Key handling on phones is security-sensitive. Any approach that moves a
  private key between sites needs a written threat model before it ships.
- Island's portrait layout touches many scenes; scope may need to start with
  the town and the main rooms.

### Done when

- [ ] Five people new to Nostr each start on a phone, create a Blobbi and
      reach a second world, in recorded sessions with timings.
- [ ] Every world offers extension, remote-signer and created-key sign-in.
- [ ] Island and Farm can be explored before signing in.
- [ ] Every travel direction has a dated live-test record in VERIFICATION.md.
- [ ] The baseline adoption report is published, with its method.

---

## Month 2: A Connected Universe

**Theme:** shared items, rewards and progression.
**Player outcome:** "Earn rewards in one world, use them in another, and
progress through adventures that connect the entire universe."

### Deliverables

1. **Shared inventory consistency and security.**
   - Investigate and fix the known consistency issue: Blobbi Home can spend
     items from Blobbi Island's inventory, but Island does not appear to
     apply those spends to its own counts (see VERIFICATION.md).
   - `@nostr-games/inventory` 0.6: an issuer-signed grant, so a reward a
     game hands out can be proven to come from that game. Today a player's
     inventory quantities are self-asserted.
   - Bound the growth of Farm's harvest records, which could otherwise make
     the Farm inventory event too large to publish.
   - A shared automated contract test for inventory, run in every game that
     uses it.
2. **Meaningful cross-world items.**
   - Each Farm crop has its own effect in the worlds that accept it, chosen by
     the receiving game (today every crop gives the same +25 hunger).
   - Island clothing that can be worn in Blobbi Home, which already shows it
     read-only.
3. **Missions across worlds.** Extend Blobbi Home's daily missions with tasks
   that span games (for example: harvest in Farm, feed your Blobbi on Island)
   and rewards that are useful where they land.
4. **Recognizing achievements.** A small, documented way for one game to
   recognize a milestone reached in another, such as a badge or unlock,
   without copying that game's rules.

### Dependencies

- Month 1 sign-in work, so playtesters can move between games easily.
- The grant design should be opened for discussion with other Nostr game
  developers before 0.6 is tagged.

### Risks

- Protocol changes ripple through four games; releases must stay backward
  compatible with existing inventory events.
- Anything that gives rewards real value raises the incentive to cheat;
  rewards that matter must use issuer grants.

### Done when

- [ ] The Island consistency issue is fixed or documented as a non-issue, with
      a test.
- [ ] `@nostr-games/inventory` 0.6 is released with grants, a changelog and
      updated specs.
- [ ] A recorded live session completes a mission chain that passes through at
      least three worlds.
- [ ] At least four Farm crops have distinct, documented effects in Home and
      Island.

---

## Month 3: Worlds That Grow

**Theme:** gameplay expansions.
**Player outcome:** "Discover evolving worlds filled with new activities,
collectibles, and adventures."

### Deliverables

1. **Nostr Farm** (the biggest jump): more varied crops with different
   growth times, animals, farm levels and expansion, and activities beyond
   plant, water and harvest. Builds on the procedural farm design in
   `nostr-farm/docs/procedural-farm-audit.md`.
2. **Blobbi Island:** new activities, more customization, collections, and a
   recurring event that gives players a reason to return each week.
3. **Blobbi Home:** level-ups and story chapters that grant real rewards, a
   celebration when they happen, and a guided first care session after
   hatching.
4. **Blobbi Pixel:** continued work on exploration, crafting and building,
   including a person-tested pass over the existing three-chapter quest line.

### Dependencies

- Month 2 item effects, so new Farm content is useful in other worlds.
- Playtest feedback from months 1 and 2.

### Risks

- Content work expands easily. Each game gets a fixed scope list at the start
  of the month; extras go to the backlog.

### Done when

- [ ] Each of the four worlds ships a release note listing its new content.
- [ ] A playtest group plays each new loop and their feedback is published.
- [ ] Return activity (identities active on two or more days in their first
      week) is compared with the month 1 baseline.

---

## Month 4: Adventures Together

**Theme:** multiplayer and social.
**Player outcome:** "Explore with friends, build together, and compete in
multiplayer experiences."

### Deliverables

1. **Blobbi Pixel multiplayer, scoped.**
   - Small groups (target: up to four players) exploring and building in
     the same world. Today this exists only as a development prototype that
     shares movement.
   - The host's world is the source of truth; visitors' changes go through
     the host. No persistent shared server world, no MMO scale.
   - Decide and document the transport: a hosted relay with authentication
     (NIP-42), or Nostr ephemeral events with a session key so players are not
     asked to sign every message.
   - Visitors are identified by their Nostr key, not a self-declared name.
2. **Blobbi Rumble toward a public beta.**
   - Deploy the existing server-authoritative build to a public server, with
     monitoring and the existing smoke test.
   - Real-device testing on iPhone and Android, remote-signer sign-in, and the
     open session-restore fix.
   - Closed playtests with invited players.
3. **Social discovery and invitations.**
   - Find friends through the Nostr follow list players already have.
   - Invitation links that bring a friend into your Island room or Pixel
     world.
   - See where friends are in Island.
4. **Shared activities.** Explore one shared activity across worlds, such
   as a community event that players join from different games.

### Rumble public beta: readiness criteria

The public beta opens only when all of these hold. Otherwise month 6
publishes the reason and the remaining work.

- [ ] Deployed from a tagged image, smoke test passing, health check
      monitored.
- [ ] A security review of the server: origin checks, rate limits, message
      size limits, and no keys held on the server.
- [ ] Real-device passes on at least one iPhone and one Android phone.
- [ ] Session restore fixed and verified in a real run.
- [ ] At least five closed playtest sessions with outside players, without a
      server crash.

### Dependencies

- Month 1 remote-signer work (phones have no browser extension).
- A public server for Rumble and, depending on the transport decision, one
  for Pixel.

### Risks

- Pixel saves live in the browser today, so shared building needs a clear
  rule for whose world is changed and how it is saved.
- Island presence currently uses one relay and republishes often; more
  players means more relay load.
- Server costs and abuse handling grow with public multiplayer.

### Done when

- [ ] Two to four players explore and build in the same Pixel world in a
      recorded public session.
- [ ] A recorded invitation brings a friend into the same Island room.
- [ ] Rumble's readiness checklist is published, with each item marked.

---

## Month 5: An Open Universe for Creators

**Theme:** developer ecosystem.
**Developer outcome:** "An open ecosystem where independent developers can
build new experiences that connect to the Blobbi universe."

### Deliverables

1. **One guide:** "Build a Blobbi-compatible world", covering how to show a
   player's Blobbi, read it from Nostr, accept World Travel, and create items
   that Blobbi worlds can use.
2. **Working examples:** a minimal example world and a starter template,
   runnable from a clean clone in a few commands.
3. **Library improvements:** a generated API reference, a simpler World
   Travel arrival API, and an up-to-date README for each package.
4. **Easier to connect:** a documented, configurable way for Blobbi worlds to
   accept items from a new game, so an outside game does not need a code
   change in every world.
5. **Open specifications:** the Blobbi and inventory event kinds opened for
   discussion with the Nostr community as draft NIPs.
6. **Outreach:** invite outside developers to try the guide, and record their
   feedback.

No visual or no-code world editor is planned.

### Dependencies

- Months 2 and 4 settle the inventory and travel APIs that the guide
  documents.

### Risks

- Outside adoption cannot be forced. The measurable goal is that the path
  works and is documented, not a number of new games.

### Done when

- [ ] The guide and the starter template are published.
- [ ] The example world runs from a clean clone, checked in CI.
- [ ] At least one developer outside the project follows the guide, and their
      feedback is published.
- [ ] Draft specifications are open for public discussion (link recorded).

---

## Month 6: The Universe Comes Together

**Theme:** community, integration and public beta.
**Player outcome:** "Join a growing universe of connected worlds, shared
adventures, and community-driven experiences."

### Deliverables

1. **Cross-world community events** that use travel, shared items and
   multiplayer together.
2. **Public playtests** of the integrated ecosystem, open to anyone.
3. **Stability, accessibility and usability:** a pass across every world
   (keyboard access, contrast, phone layouts, error messages), plus fixes from
   the playtests.
4. **Integrated public beta**, a target that depends on readiness (below).
5. **Final report** on development and adoption, using the same method as
   the month 1 baseline.
6. **Next priorities**, published and based on community feedback.

### Integrated beta: readiness criteria

- [ ] Every world has a dated live-test record for sign-in, travel and shared
      items.
- [ ] No known bug that loses a player's Blobbi, items or progress.
- [ ] Phone play verified on real devices for every world.
- [ ] An accessibility checklist completed for every world.
- [ ] Rumble included only if its own readiness criteria (month 4) are met.

If the criteria are not met, the report says which ones and what remains.

### Done when

- [ ] At least one cross-world event and two public playtests have run.
- [ ] The final report and next priorities are published.
- [ ] The integrated beta is open, or the report explains what blocks it.

---

## Community activities, all six months

| Month | Activity |
| --- | --- |
| Every month | A development update on Nostr, with a short gameplay clip; one community playtest, whose notes become the written record of real-player testing |
| 1 | Newcomer onboarding sessions (people new to Nostr, on phones) |
| 2 | A cross-world mission challenge |
| 3 | New content previews and a feedback round per world |
| 4 | Multiplayer sessions in Pixel; closed Rumble playtests; a friend-invite challenge |
| 5 | Developer outreach: guide walkthrough, invitations to build a compatible world |
| 6 | Cross-world community event; open public playtests; final report |

**Connections with other projects.** Blobbis can already be raised inside
Ditto, a Nostr client, through `@blobbi-kit`. During the six months we will
look for collaborations with Nostr clients, communities and open-source
projects that help players discover Blobbi. No new integration or
collaboration has been agreed; any that happens will be reported.

## Measurement and privacy

**Goal:** understand whether players join, come back, explore more than one
world and invite others, without tracking individuals.

**Primary source:** public Nostr events that the games already publish,
aggregated by a published script that anyone can re-run.

| Question | Measure |
| --- | --- |
| Are players joining? | New Nostr identities with a first Blobbi event, per month |
| Are they new to Nostr? | Identities whose key was created inside a Blobbi world: a lower bound only |
| Do they come back? | Identities active on two or more days in their first week, and in two or more months |
| Do they explore? | Identities active in two or more worlds in a month; World Travel trips per month |
| Do they invite others? | Not measured from public data: invitations are encrypted messages. Reported from playtest observations only |

**Rules**

- Report "Nostr identities", never "people" or "users": one person can have
  several keys, and one key is not proof of one person.
- Aggregates only. No lists of keys, Blobbi names or per-player figures.
- Hide any group smaller than five, and exclude known team and test keys.
- Publish the method, the relays queried and the snapshot date with every
  report.
- No ads, no third-party trackers, no cookies for measurement.

**No server-side counters.** Measurement starts with public Nostr data,
and only for questions it can answer reliably. Invitations sent as encrypted
messages cannot be counted that way, so they are not measured; playtest notes
describe how invitations are used instead.

**No growth targets are promised.** Reports describe what happened, with the
same method each time.

## Cross-cutting risks

| Risk | Mitigation |
| --- | --- |
| One developer across seven repositories | Fixed scope per month, 15% maintenance time, stretch items that move to the backlog instead of slipping the plan |
| Sign-in between games on separate subdomains | Decided with a written threat model in month 1; no single sign-on promise |
| Self-asserted inventory quantities | Issuer-signed grants in month 2 for any reward that matters |
| Relay availability and load (Island presence uses one relay) | Monitor; add relay options and reduce republish rates before larger events |
| Multiplayer hosting cost and abuse | Server-side limits, a security review, and conditional public betas |
| Upstream pace (Ditto reviews, NIP discussions) | Not on the critical path of any milestone |
| Unverified claims | Nothing becomes "Available now" without a VERIFICATION.md entry |

## Out of scope

- New games beyond the five existing worlds.
- Massive multiplayer or a persistent shared server world.
- A no-code world editor.
- Tokens, trading for money or paid items.
- Promised numbers of users or developers.
