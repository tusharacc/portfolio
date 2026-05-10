# Complete — Personal Portfolio Static Site

*Completed: 2026-05-10*

## Summary

Minimal personal portfolio static site for Tushar Saurabh, hosted at `tusharsaurabh.com` via GitHub Pages (`tusharacc/tusharacc.github.io`). Built with SvelteKit 5 + Tailwind CSS v4, fully prerendered at build time with GitHub API data baked in.

---

## Phase Outcomes

| Phase | Status | Key Output |
|-------|--------|------------|
| PO | Complete | Requirements: hero, serpentine tech timeline, 5 latest projects, social links, static deploy |
| Architect | Complete | SvelteKit 5 + adapter-static + Tailwind v4, build-time GitHub API fetch, gh-pages deploy |
| Developer | Complete | All components built: Navigation, Hero, TechTimeline (PCB-trace aesthetic), Projects, Footer |
| Reviewer | Complete | 3 low-severity bugs filed (BUG-001–003); no blocking issues; advanced to Tester |
| Tester | Complete | 14 test cases written covering build, content, UI, accessibility, meta |
| Executor | Complete | 13/14 pass; TC-07 (mobile layout) fixed; BUG-004 filed and immediately closed |
| PO-Approval | **Approved** | All critical criteria met |

---

## What Was Built

- **Hero**: Name, "Site Reliability Engineer" role, Chubb tagline, GitHub / LinkedIn / Blog links
- **Tech Evolution**: Serpentine (PCB-trace) timeline, 2015–2026, 12 year nodes, amber dashed connectors, language chips with per-language colours, mobile single-column at ≤480px
- **Recent Projects**: Top 5 by `updated_at`, forks excluded, excluded repos excluded, cards with language chip + date
- **Dark mode**: class-strategy, localStorage-persisted, Moon/Sun toggle in nav
- **Static deploy**: `npm run deploy` → `gh-pages -d build` → `tusharacc/tusharacc.github.io` main branch
- **Custom domain**: `static/CNAME` → `tusharsaurabh.com`

---

## Open Bugs (post-launch backlog)

| ID | Severity | Description |
|----|----------|-------------|
| BUG-001 | low | `LANG_PALETTE` duplicated between TechTimeline and Projects |
| BUG-002 | low | Dark chip backgrounds jarring in light mode |
| BUG-003 | low | `@sveltejs/adapter-auto` unused in devDependencies |

---

## Deploy Instructions

```bash
npm run deploy
```

DNS: Point `tusharsaurabh.com` A records to GitHub Pages IPs:
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

Blog (`blogs.tusharsaurabh.com`): CNAME → `tusharacc.github.io` (separate task, `what-i-learnt` repo).
