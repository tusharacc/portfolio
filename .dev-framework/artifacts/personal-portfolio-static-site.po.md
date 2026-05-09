# PO Requirements — Personal Portfolio Static Site

## Problem Statement
Tushar needs one canonical URL (tusharsaurabh.com) that represents him professionally —
replacing three fragmented generations of portfolio with a single, minimal, auto-updating site.

## User Stories
- As a recruiter, I see Tushar's name, current role, and links instantly on landing
- As a technical peer, I can see his tech breadth across time without scrolling through a wall of text
- As any visitor, I can reach his GitHub, LinkedIn, and blog in one click
- As Tushar, the projects section stays current without manual edits — just redeploy

## Functional Requirements

### Hero
- Display: full name (Tushar Saurabh), current role (Site Reliability Engineer at Chubb)
- No photo — text only
- Social links: GitHub (tusharacc), LinkedIn, Blog (blogs.tusharsaurabh.com)

### Tech Evolution (section 01)
- Data source: GitHub API at build time — aggregate primary language per repo per year
- All years with activity shown (2016–2026), no year-cutoff filter
- Visual: serpentine "PCB trace" layout — 3 nodes per row, alternating direction
  - Amber dashed connector lines between nodes and at row U-turns
  - Year label in JetBrains Mono amber, language chips in per-language substrate colours
- Mobile: collapses to single vertical trace
- Implementation: `TechTimeline.svelte` component (already scaffolded)
- Dark/light mode aware

### Recent Projects (section 02)
- Data source: GitHub API at build time — top 5 repos by `updated_at`
- Exclude: `portfolio`, `tusharacc.github.io`, `what-i-learnt`
- Display per project: name, description, primary language chip, link to GitHub repo
- No interaction beyond clicking through to GitHub

### Navigation / footer
- Minimal top nav or no nav (single-page scroll)
- Footer: repeat social links + copyright

## Non-Functional Requirements
- Static site: SvelteKit + `adapter-static`, output to `build/`
- Deploy target: `tusharacc/tusharacc.github.io` via `gh-pages` npm script
- Custom domain: `tusharsaurabh.com` (CNAME file in repo + DNS A records → GitHub Pages IPs)
- Dark mode: Tailwind `dark:` class-based, persisted via localStorage (already implemented)
- Performance: no runtime API calls, no JS required for content display
- Mobile responsive: works at 320px+

## Acceptance Criteria
- [ ] `tusharsaurabh.com` resolves to the portfolio site
- [ ] Hero shows name + role + 3 working social links
- [ ] Tech timeline renders correctly: serpentine on desktop, vertical on mobile ≤480px
- [ ] All years 2016–2026 with GitHub activity appear; years with zero repos are omitted
- [ ] Projects section shows exactly 5 cards, none of the excluded repos
- [ ] All data is baked at build time — no fetch calls in the browser
- [ ] Light and dark modes render correctly with no unstyled flash
- [ ] `npm run build` succeeds and output is a valid static site
- [ ] `npm run deploy` pushes to `tusharacc.github.io`

## Edge Cases
- Year with zero language activity: omit from timeline entirely
- GitHub repo with null description: show name only, no description line
- Fewer than 5 non-excluded repos: show however many exist
- Build-time GitHub API rate limit: use `GITHUB_TOKEN` env var if needed

## Dependencies
- GitHub public API (no auth needed for public repos, but token recommended for CI)
- `@sveltejs/adapter-static` (already in devDependencies)
- `gh-pages` npm package (already in package.json deploy script)
- DNS access to tusharsaurabh.com for A record configuration
- `blogs.tusharsaurabh.com` subdomain: CNAME → `tusharacc.github.io` + custom domain set in `what-i-learnt` repo settings (separate 5-min task, not part of this build)
