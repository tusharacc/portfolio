# Dev Framework Checkpoint
**Date**: 2026-05-10
**Workspace**: personal-portfolio-static-site
**Phase**: complete
**Branch**: main
**Workflow**: full

## Done this session
- phase(personal-portfolio-static-site): executor complete → po-approval begins
- fix(timeline): mobile single-column layout (TC-07 / BUG-004)
- phase(personal-portfolio-static-site): po-approval complete → workflow complete
- docs: replace scaffold README with project-specific docs
- chore: merge remote scaffold into portfolio (ours wins)
- chore: add gh-pages to devDependencies
- fix: add .nojekyll to prevent Jekyll from hiding _app assets
- fix: pass --dotfiles to gh-pages so .nojekyll is actually deployed
- fix(timeline): equal-height boxes, light mode chips, AI tools, favicon
- chore: remove scaffold GitHub Pages workflow

## Where things stand
Workflow is **complete** and the site is live at https://tusharsaurabh.com.
Source code is at tusharacc/portfolio (main branch). Built output deploys to
tusharacc/tusharacc.github.io via `npm run deploy`. All 14 test cases pass.
blogs.tusharsaurabh.com is configured (CNAME + GitHub Pages enabled, HTTPS
enforced) — TLS cert was provisioning at end of session; should be live now.

## Pending decisions
- [ ] Verify https://blogs.tusharsaurabh.com is fully live with HTTPS
- [ ] BUG-001: Extract shared LANG_PALETTE between TechTimeline and Projects
- [ ] BUG-002: Light mode chip backgrounds still slightly inconsistent (low)
- [ ] BUG-003: Remove unused @sveltejs/adapter-auto from devDependencies

## Next action
Verify blogs.tusharsaurabh.com loads over HTTPS. If cert still pending,
enable enforcement via: `gh api repos/tusharacc/what-i-learnt/pages -X PUT
--input - <<< '{"cname":"blogs.tusharsaurabh.com","https_enforced":true}'`
Then optionally tackle BUG-001/003 as minor cleanup.
