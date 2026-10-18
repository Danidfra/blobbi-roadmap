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
| `content/meta.mjs` | Title, description, URL, **`updated` date**, the four status labels |
| `content/ecosystem.mjs` | The apps and libraries, with a status per feature |
| `content/status.mjs` | The status ledger: what exists today, with evidence |
| `content/roadmap.mjs` | The six months, each item with a status |
| `content/sections.mjs` | Overview, interoperability, adoption, metrics, open source |

Statuses are `released`, `implemented`, `development` and `planned`. When a
roadmap item moves, change its `status` and add a `progress` line linking to
the evidence (a release, a commit, a report):

```js
{ status: 'released', text: 'Improve mobile onboarding and navigation.',
  progress: 'Shipped in Blobbi Home, see [the release](https://github.com/…).' },
```

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
