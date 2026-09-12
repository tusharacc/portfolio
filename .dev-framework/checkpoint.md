# Dev Framework Checkpoint
**Date**: 2026-09-12 15:20
**Workspace**: personal-portfolio-static-site
**Phase**: complete
**Branch**: main
**Workflow**: full

## Done this session
- Generated a new resume PDF (justified body text) from `Tushar_Saurabh_Canonical_Engineering_Resume.md` via headless-Chrome print-to-pdf; verified all 3 pages render cleanly with no cut-off text
- Deleted stale role-specific resume files (Atlassian, Egnyte .md/.pdf, MongoDB) that were sitting untracked at repo root
- Replaced `static/resume_tushar_saurabh.pdf` with the new PDF and committed everything to `main` (commit `945211f`)
- Attempted `npm run deploy` (gh-pages) — it hung indefinitely at the `vite build` step

## Where things stand
The resume update is committed on `main` but **not yet deployed**. Diagnosed the deploy hang: it is not a code/config issue — `du -sh node_modules` itself took 2+ minutes to return, and `bird`/`fileproviderd` (macOS iCloud Drive sync) showed heavy CPU with an active `CKAccountInfoCacheReset`. This repo lives under `~/Documents`, which is iCloud-synced, and the sync daemon was causing severe file-I/O stalls system-wide, which is what blocked `vite build`. Killed the hung processes; did not force a retry.

## Pending decisions
- [ ] Retry `npm run deploy` once iCloud Drive sync backlog clears (check System Settings → Apple ID → iCloud Drive, or just wait for `bird`/`fileproviderd` CPU to settle) — this is the immediate next step
- [ ] Consider moving this repo out of `~/Documents` (or excluding it from iCloud sync) long-term to avoid recurring build stalls — not decided, just observed as a risk
- [ ] Verify live site shows the new resume PDF after successful deploy
- [ ] Verify https://blogs.tusharsaurabh.com HTTPS status (carried over from 2026-08-08, still not checked)
- [ ] BUG-001: extract shared LANG_PALETTE between TechTimeline and Projects (carried over)
- [ ] BUG-002: light mode chip background inconsistency, low priority (carried over)
- [ ] BUG-003: remove unused `@sveltejs/adapter-auto` from devDependencies (carried over)

## Next action
Check iCloud Drive sync status is idle, then re-run `npm run deploy` to publish the resume update live to tusharsaurabh.com. Confirm the new resume PDF loads correctly once published.
