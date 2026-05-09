# Exploration Brief — Personal Portfolio Static Site
*Explored: 2026-05-09*

## Idea
A minimal static portfolio site at tusharsaurabh.com showing Tushar's tech stack (derived from GitHub) and latest 5 projects, with links to LinkedIn, GitHub, and blog.

## Problem Being Solved
Tushar has three generations of portfolio (raw HTML, Svelte 4, current SvelteKit scaffold) with no live canonical home. He needs one clean, deployed URL that represents him professionally.

## Context
- Local SvelteKit 5 + Tailwind CSS scaffold already exists at `/Users/tusharsaurabh/Documents/Projects/Web/portfolio` with Navigation (dark mode, mobile responsive) and Hero section done. Five sections are placeholder stubs.
- Remote repo `tusharacc/portfolio` has an older Svelte 4 version — unrelated codebase, will be replaced.
- Remote repo `tusharacc/tusharacc.github.io` has a raw HTML portfolio — will be replaced by the new build output.
- Blog (`tusharacc/what-i-learnt`) is a working Jekyll site; `blogs.tusharsaurabh.com` just needs a DNS CNAME + GitHub Pages custom domain setting — no build work.
- `tusharsaurabh.com` custom domain can point directly to GitHub Pages (A records → GitHub IPs + CNAME file in repo).
- GitHub API available via `gh` CLI at build time for project and language data.

## Proposed Approaches
- **Build-time GitHub API fetch**: At `npm run build`, fetch latest 5 repos (excluding portfolio/what-i-learnt/tusharacc.github.io) and aggregate language bytes across all repos. Bake into static output. Deploy to `tusharacc/tusharacc.github.io` via `gh-pages`. *Trade-offs: no runtime API calls or rate limits; data only refreshes on redeploy.*

## Constraints & Risks
- GitHub Pages requires adapter-static; already has `@sveltejs/adapter-static` in devDependencies.
- All languages across all years are intentional — showing breadth across time signals willingness to pick up new tech. Display as year × language table or compact timeline; consult frontend-design skill for best space-efficient layout.
- `tusharsaurabh.com` apex domain on GitHub Pages requires 4 A records (not a CNAME) — slightly different DNS setup.
- No git repo initialised locally yet; needs `git init` + remote set before first deploy.

## Open Questions
- [ ] Best visual format for the tech timeline — consult frontend-design skill during build (tabular year × language, compact tag-cloud by year, or timeline strip).
- [ ] Does "current projects" mean auto-top-5-by-updated-at, or should there be a manual override list?
- [ ] Should blog post titles/links appear anywhere on the portfolio, or is the blog link enough?

## Suggested Workflow Type
**new-feature** — This is a net-new build deploying a complete site; existing scaffold is a starting point, not a working feature.
