# Developer — Personal Portfolio Static Site

## Implementation Plan
- [x] Fix svelte.config.js base path (remove /portfolio override)
- [x] Create static/CNAME (tusharsaurabh.com)
- [x] Create src/lib/server/github.ts
- [x] Create src/routes/+page.server.ts
- [x] Rewrite src/routes/+page.svelte
- [x] Rewrite src/lib/components/Hero.svelte
- [x] Create src/lib/components/Projects.svelte
- [x] Trim src/lib/components/Navigation.svelte
- [x] Update package.json deploy script
- [x] Migrate Tailwind v3→v4 (postcss.config.js, app.css)
- [x] Fix favicon.png → favicon.svg
- [x] `npm run build` passes ✓

## Files Changed
- `svelte.config.js` — removed `/portfolio` base path override
- `postcss.config.js` — migrated to `@tailwindcss/postcss` (v4)
- `src/app.css` — migrated to `@import "tailwindcss"` + `@variant dark` + `@theme`
- `src/app.html` — favicon.png → favicon.svg
- `static/CNAME` — new, contains `tusharsaurabh.com`
- `static/favicon.svg` — copied from src/lib/assets/
- `src/lib/server/github.ts` — new: GitHub API client, data transforms
- `src/routes/+page.server.ts` — new: prerender load function
- `src/routes/+page.svelte` — rewritten: assembles Hero + TechTimeline + Projects + footer
- `src/lib/components/Hero.svelte` — rewritten: name, role, 3 social links
- `src/lib/components/Navigation.svelte` — rewritten: minimal (logo, tech/projects anchors, dark toggle)
- `src/lib/components/TechTimeline.svelte` — new (scaffolded in PO phase): PCB-trace serpentine
- `src/lib/components/Projects.svelte` — new: 5 project cards with language chips
- `package.json` — deploy script targets tusharacc/tusharacc.github.io main branch

## Code Summary
Single GitHub API call at build time via `+page.server.ts` → `getPortfolioData()`.
Filters out forks + 3 excluded repos. Top-5-by-updated become project cards.
Primary language grouped by `created_at` year drives the TechTimeline.
All content is baked into the static HTML — zero runtime API calls.

## Decisions Made
- `@tailwindcss/postcss` installed; `tailwind.config.js` retained but bypassed (v4 `@theme` used instead)
- Forks excluded from both timeline and projects (confirmed with user)
- `created_at` year for timeline grouping (vs `updated_at`) — represents when tech was started
- Dark mode `@variant dark (&:is(.dark, .dark *))` matches existing `.dark` class on `<html>`
