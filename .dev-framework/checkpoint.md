# Dev Framework Checkpoint
**Date**: 2026-08-08 12:37
**Workspace**: personal-portfolio-static-site
**Phase**: complete
**Branch**: main
**Workflow**: full

## Done this session
- Converted new HTML resume to PDF (headless Chrome print-to-pdf), fixed a missing `@page` margin bug that cut off text on page 2
- Replaced `public/resume_tushar_saurabh.pdf` with the new resume and deployed
- Fixed tusharsaurabh.com HTTPS: GitHub Pages had never issued a cert for the custom domain (Cloudflare was DNS-only, not proxying); re-triggered cert provisioning via `gh api` and enabled Enforce HTTPS — verified working
- Compared portfolio site content against the new resume's story — found the site's Hero/meta said "Site Reliability Engineer / DevOps · Cloud · Automation" while the resume leads with "Senior Software Engineer / Automation · Observability · Agentic AI"
- Updated Hero.svelte, +page.svelte meta tags, app.html, and +layout.svelte to align with the resume's positioning (removed all stale "Site Reliability Engineer" references) — light-touch scope, chosen over adding full Experience/Education/Systems-Built sections
- Fixed the Tech Evolution "snake" timeline connector: old CSS used a wide box-border-radius hack that didn't align with the card columns and was nearly invisible; rewrote it as a flex-based vertical dashed connector + arrow that lines up exactly under the correct column
- Bumped the connector's visual weight (thicker dashed lines, larger glowing arrowhead) after user feedback that it was still too subtle
- All changes committed to `main` and deployed live via `npm run deploy` (gh-pages → tusharacc.github.io); last deploy confirmed `Published`, exit 0

## Where things stand
Site is live at https://tusharsaurabh.com with a valid GitHub-issued HTTPS cert and Hero/meta copy now matching the resume's positioning. Tech Evolution timeline connector is redesigned and more prominent. CDN cache (10 min TTL) was still mid-propagation as of last check this session — confirm it fully rolled over next session.

## Pending decisions
- [ ] Confirm live site (light + dark mode) shows the bolder timeline connector after CDN cache clears
- [ ] Verify https://blogs.tusharsaurabh.com is fully live with HTTPS (carried over, not touched this session)
- [ ] BUG-001: Extract shared LANG_PALETTE between TechTimeline and Projects (carried over)
- [ ] BUG-002: Light mode chip backgrounds still slightly inconsistent, low priority (carried over)
- [ ] BUG-003: Remove unused @sveltejs/adapter-auto from devDependencies (carried over)
- [ ] Not yet decided: whether to eventually add full Experience/Education/Systems-Built sections to the site (declined this session in favor of light-touch)

## Next action
Spot-check tusharsaurabh.com in a browser to confirm the CDN has served the latest deploy with the bolder connector. Then optionally clean up BUG-001/002/003 as minor cleanup, or revisit blogs.tusharsaurabh.com HTTPS status.
