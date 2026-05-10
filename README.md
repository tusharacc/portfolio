# tusharsaurabh.com — Portfolio Source

Personal portfolio site for [Tushar Saurabh](https://tusharsaurabh.com). Built with SvelteKit 5 + Tailwind CSS v4, fully static, hosted on GitHub Pages.

## Stack

- **Framework**: SvelteKit 5 (Svelte 5 runes, `adapter-static`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Data**: GitHub API fetched at build time — zero runtime API calls
- **Deploy**: `gh-pages` → [`tusharacc/tusharacc.github.io`](https://github.com/tusharacc/tusharacc.github.io)
- **Domain**: `tusharsaurabh.com`

## Sections

- **Hero** — name, role, links to GitHub / LinkedIn / Blog
- **Tech Evolution** — serpentine timeline of languages used per year (derived from GitHub repo history)
- **Recent Projects** — top 5 repos by last updated, forks excluded

## Dev

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Deploy

```bash
npm run deploy
```

Pushes `build/` to `tusharacc/tusharacc.github.io` main branch. GitHub Pages serves it at `tusharsaurabh.com` via the `CNAME` file.

## Environment

`GITHUB_TOKEN` — optional. Set to avoid GitHub API rate limits during build. Build falls back gracefully if the API is unavailable.
