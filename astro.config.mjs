import { defineConfig } from 'astro/config'

// Two locales and NO middleware. Astro serves `/` from `src/pages/index.astro`
// and `/en` and `/es` from `src/pages/[lang]/index.astro`, so both spellings of
// the site root exist at once and neither shadows the other.
export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
})
