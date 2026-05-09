# Reviewer — Personal Portfolio Static Site

## Review Summary
Reviewed all 14 changed files against PO requirements and architect design.
Build passes cleanly (`npm run build` ✓). One medium issue found and fixed inline.
Three low-priority issues filed as bugs. No high issues.

## Issues by Severity

### High
None.

### Medium

**M-01 — No build-time fallback if GitHub API unavailable** *(fixed inline)*
`+page.server.ts` propagated a thrown error from `getPortfolioData()` directly,
which would crash the entire build if GitHub's API was rate-limited or down.
**Fix applied**: wrapped in try/catch; on failure, returns `{ timeline: [], projects: [] }`
and logs the error. Build now always succeeds; site renders empty sections gracefully.

### Low

**L-01 — LANG_PALETTE duplicated between TechTimeline and Projects**
Both components define identical `{ bg, fg }` maps for language colours.
Should be a single shared constant at `$lib/constants/langColors.ts`.
*Filed as bug.*

**L-02 — Chip colours unreadable in light mode**
Language chips use near-black backgrounds (e.g. `#0a1929`) which are designed for dark mode.
In light mode the `.node` card is white but chips stay dark, creating good contrast —
however the chip background appears as a very dark box on a white card which may feel jarring.
Should verify visual appearance and optionally lighten chip backgrounds for light mode.
*Filed as bug.*

**L-03 — `@sveltejs/adapter-auto` unused in devDependencies**
`package.json` still lists `@sveltejs/adapter-auto` alongside `adapter-static`.
It's unused — `svelte.config.js` imports `adapter-static` only.
*Filed as bug.*

## Approval Status
**APPROVED** — Medium issue fixed inline. Low issues filed as tracked bugs.
No blockers remain. Advancing to Tester.
