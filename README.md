# Blobbi Roadmap

The public development roadmap of the Blobbi ecosystem, served at
<https://roadmap.blobbi.pet>.

A static site with no backend, no JavaScript, no cookies, no analytics and no
runtime or build dependencies. A small Node script turns the content in
`content/` into one HTML page.

## Updating the roadmap

All text lives in `content/`; you should rarely need to touch anything else.

| File | What it holds |
| --- | --- |
| `content/meta.mjs` | Title, description, URL, **`updated` date**, the introduction, the three status labels |
| `content/worlds.mjs` | "The Blobbi Universe": the five game cards and "What already connects them" |
| `content/roadmap.mjs` | The six months: title, theme, one or two sentences, the player outcome |
| `content/community.mjs` | "Growing the Blobbi Universe": four pillars |
| `content/opensource.mjs` | "Open Source": what developers can use today, what is next, the repository links |

Every world and connection has a `status`: `available` ("Available now"),
`testing` ("In testing") or `planned` ("Planned"). Only use `available` or
`testing` for a claim that has a row in
[`docs/VERIFICATION.md`](docs/VERIFICATION.md).

When a month's work lands, add a `progress` line to it with a link to the
evidence (a release, a commit, a report). Keep the page short: the detailed plan
belongs in [`docs/ROADMAP-DETAIL.md`](docs/ROADMAP-DETAIL.md) and the
evidence in [`docs/VERIFICATION.md`](docs/VERIFICATION.md), not on the page.

Then set `meta.updated` to today's date and rebuild. Inline text supports
`` `code` `` and `[links](https://…)`; everything else is escaped.

## Local preview

Requires Node 20 or newer.

```bash
npm run preview          # builds dist/ and serves it at http://localhost:4173
# or
node build.mjs           # builds dist/ only
```

## Deploying to roadmap.blobbi.pet (Vercel)

Not done yet. The code is at <https://github.com/Danidfra/blobbi-roadmap>.

1. In Vercel: **Add New → Project**, import the repository. `vercel.json`
   already sets everything: no install step, build `node build.mjs`, output
   `dist`, security headers (a strict CSP that allows no scripts) and
   long-lived caching for hashed assets and fonts.
2. Deploy, and check the `*.vercel.app` preview.
3. In the project's **Settings → Domains**, add `roadmap.blobbi.pet`.
   Vercel shows the DNS record to create, normally a `CNAME` from `roadmap`
   to `cname.vercel-dns.com`. Add it wherever `blobbi.pet`'s DNS is managed.
4. Once the certificate is issued, open <https://roadmap.blobbi.pet> and
   check the Open Graph preview (for example by pasting the link in a Nostr
   client).

Any static host works too: upload `dist/` after `node build.mjs`. The headers
in `vercel.json` would then need to be set on that host.

## Artwork

The Blobbis in `public/art/` are drawn by
[`@blobbi-kit/renderer`](https://github.com/Danidfra/blobbi-kit) (MIT) from
fixed seeds; they are illustrations, not real players' Blobbis. To regenerate
them, see `scripts/render-art.mjs`. `public/og.png` is a screenshot of
`scripts/og.html` (instructions inside). The Comfortaa font is under the SIL
Open Font License (`public/fonts/OFL.txt`). See
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## License

MIT for the original code and content. See [LICENSE](LICENSE) and
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
