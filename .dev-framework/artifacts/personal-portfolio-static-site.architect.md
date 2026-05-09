# Architect — Personal Portfolio Static Site

## System Design

Single-page static site. SvelteKit prerendering runs one `+page.server.ts` load function
at build time — it calls the GitHub API, bakes the JSON into the HTML, and emits a
fully static `build/` directory. No runtime JS required for content.

```
Build time:
  +page.server.ts (load)
    └── src/lib/server/github.ts
          ├── GET /users/tusharacc/repos  → top-5 projects + language-per-year map
          └── returns { timeline, projects }
              ↓ passed as page data
  +page.svelte
    ├── <Hero />              (name + role + social links)
    ├── <TechTimeline data>   (serpentine PCB trace, already scaffolded)
    └── <Projects data>       (5 project cards)

Deploy time:
  npm run build → build/
  gh-pages → tusharacc/tusharacc.github.io (main branch)
    └── CNAME: tusharsaurabh.com
```

## Components

| File | Role | Status |
|------|------|--------|
| `src/routes/+page.server.ts` | Build-time GitHub data fetch | New |
| `src/routes/+page.svelte` | Page assembly, receives load data | Rewrite |
| `src/lib/server/github.ts` | GitHub API client + data transforms | New |
| `src/lib/components/Hero.svelte` | Name, role, social links | Rewrite (simplify) |
| `src/lib/components/TechTimeline.svelte` | Serpentine tech timeline | Done (scaffolded) |
| `src/lib/components/Projects.svelte` | 5 project cards | New |
| `src/lib/components/Navigation.svelte` | Top nav | Keep (minor trim) |
| `static/CNAME` | Custom domain for GitHub Pages | New |

## Data Models

```ts
// From +page.server.ts load()
interface PageData {
  timeline: YearEntry[];   // used by TechTimeline
  projects: Project[];     // used by Projects
}

interface YearEntry {
  year: number;
  langs: string[];   // deduplicated primary languages for that year
}

interface Project {
  name: string;
  description: string | null;
  language: string | null;
  url: string;            // html_url
  updatedAt: string;      // ISO date
}
```

## API Contracts

**GitHub REST API — single call at build time:**
```
GET https://api.github.com/users/tusharacc/repos?per_page=100&sort=updated
Authorization: token $GITHUB_TOKEN   (optional; 60 req/hr unauth is enough for one build)
```

**Transform logic in `src/lib/server/github.ts`:**
1. Filter out forks (`fork === true`) and excluded repos:
   `['portfolio', 'tusharacc.github.io', 'what-i-learnt']`
2. **Projects**: take first 5 from the sorted-by-updated list
3. **Timeline**: group remaining repos by `created_at` year → collect unique
   primary `language` values per year; skip repos where `language === null`;
   sort years ascending; omit years with zero languages

## Tech Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Data fetch timing | Build-time (`+page.server.ts`) | Static output, no runtime calls |
| Language granularity | Primary language per repo (`.language` field) | Avoids N+1 API calls per repo |
| Year grouping field | `created_at` year | Represents when tech was *started*, not incidentally touched |
| Deploy target branch | `main` on `tusharacc/tusharacc.github.io` | GitHub user pages serves from main |
| Base path | Empty string (remove `/portfolio` override) | Deploying to domain apex, not subdirectory |
| CNAME | `static/CNAME` → `tusharsaurabh.com` | Copied to build root by adapter-static |
| Dark mode | Existing Tailwind `class` strategy, localStorage persist | Already implemented |
| Navigation | Keep existing component, remove blog FileText icon (blog link moves to footer) | Simplify nav to essentials |

**Deploy script update** (`package.json`):
```
"deploy": "npm run build && gh-pages -d build -r https://github.com/tusharacc/tusharacc.github.io.git -b main"
```

## Open Questions

- [x] Forks excluded from timeline language grouping — confirmed by user. Not original work.
- [ ] Does `prerender = true` need to be set explicitly, or does adapter-static handle it? (It does, via `fallback: null` + no dynamic routes)
- [ ] DNS: confirm tusharsaurabh.com is managed somewhere accessible to add A records pointing to GitHub Pages IPs (185.199.108-111.153)
