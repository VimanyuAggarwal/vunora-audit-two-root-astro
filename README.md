# vunora-audit-two-root-astro

A minimal Astro site kept for one purpose: it holds BOTH spellings of the site
root at once, and no middleware hides either of them.

- `src/pages/index.astro` is the only route that answers a bare `/`.
- `src/pages/[lang]/index.astro` answers `/en` and `/es`.
- `src/pages/about.astro` and `src/pages/[lang]/about.astro` are the same pair
  one level down, so a non-root pair can be told apart from a root pair.
- `astro.config.mjs` declares two locales with `prefixDefaultLocale: false`.
- There is deliberately no `src/middleware.ts`. A locale middleware would answer
  `/` with a redirect and the unprefixed root would stop being a content page.

`pnpm install && pnpm build` emits `/`, `/en`, `/es`, `/about`, `/en/about` and
`/es/about`.
