# Tester — Personal Portfolio Static Site

## Test Plan

Testing strategy: manual verification against AC from PO artifact.
Executor runs these against the local preview server (`npm run preview` after `npm run build`).
GitHub API data is baked at build time, so tests verify the rendered static output.

Environment: `npm run build && npm run preview` → http://localhost:4173

---

## Test Cases

### TC-01 — Build succeeds and emits static output
**Precondition**: Clean checkout, node_modules installed, internet access.
**Steps**: Run `npm run build`
**Expected**:
- Exit code 0
- `build/` directory created
- `build/CNAME` contains `tusharsaurabh.com`
- `build/index.html` exists and is non-empty
- `build/favicon.svg` exists

---

### TC-02 — GitHub API fallback on failure
**Precondition**: Block outbound network to api.github.com (or temporarily set GITHUB_TOKEN to an invalid value and rate-limit).
**Steps**: Run `npm run build` with API unreachable
**Expected**:
- Build still exits code 0 (no crash)
- Console shows "GitHub API fetch failed at build time:" log
- `build/index.html` exists (empty sections rendered, no error page)

---

### TC-03 — Hero section content
**Precondition**: `npm run preview` running.
**Steps**: Open http://localhost:4173, inspect the page.
**Expected**:
- "Tushar Saurabh" visible as `<h1>`
- "Site Reliability Engineer" visible as subtitle
- "Chubb · DevOps · Cloud · Automation" visible
- Three links present: GitHub, LinkedIn, Blog
- All three links have `target="_blank"` and `rel="noopener noreferrer"`

---

### TC-04 — Navigation renders and anchors work
**Steps**: Inspect nav; click "tech" and "projects" links.
**Expected**:
- Nav is fixed at top, height ~48px
- "ts" logo links to `#home`
- "tech" link scrolls to Tech Evolution section
- "projects" link scrolls to Recent Projects section
- Dark mode toggle button is visible

---

### TC-05 — Dark mode toggle
**Steps**: Click the moon/sun icon in the nav.
**Expected**:
- Page background switches between light (`bg-gray-50`) and dark (`bg-gray-950`)
- Icon toggles between Moon (light) and Sun (dark)
- Preference persists on page reload (localStorage)

---

### TC-06 — Tech Evolution section renders
**Steps**: Scroll to "Tech Evolution" section.
**Expected**:
- Section heading "01 Tech Evolution" visible
- At least 5 year nodes visible (2016–2026 range)
- Year nodes display as a serpentine: rows alternate left-to-right and right-to-left
- Each node shows a year (e.g. "2016") and at least one language chip
- Dashed amber connector lines visible between nodes and at row U-turns
- Hovering a node shows amber border glow

---

### TC-07 — Tech timeline mobile layout
**Steps**: Resize browser to ≤480px width (or DevTools mobile emulation).
**Expected**:
- All year nodes stack vertically in a single column
- Horizontal connectors replaced by vertical connectors
- No overflow or horizontal scrollbar

---

### TC-08 — Recent Projects section renders
**Steps**: Scroll to "Recent Projects" section.
**Expected**:
- Section heading "02 Recent Projects" visible
- Exactly 5 project cards listed
- None of the excluded repos appear: `portfolio`, `tusharacc.github.io`, `what-i-learnt`
- No fork repos appear (e.g. `etl2pcapng`, `80cents`, `django-oscar`)
- Each card shows: repo name, description (if present), language chip, last-updated date
- Clicking a card opens the GitHub repo in a new tab

---

### TC-09 — Footer social links
**Steps**: Scroll to footer.
**Expected**:
- "Tushar Saurabh" text visible on the left
- Three links visible: GitHub, LinkedIn, Blog
- All open in new tab

---

### TC-10 — No runtime API calls
**Steps**: Open browser DevTools → Network tab, reload page, filter by Fetch/XHR.
**Expected**:
- Zero requests to `api.github.com` or any external API
- All content served from local static files

---

### TC-11 — CNAME present in build output
**Steps**: Inspect `build/CNAME` after running `npm run build`.
**Expected**:
- File exists
- Contents: `tusharsaurabh.com` (no trailing newline issues)

---

### TC-12 — Accessibility: keyboard navigation
**Steps**: Tab through the page without using a mouse.
**Expected**:
- Focus ring visible on all interactive elements (nav links, footer links, dark mode button, project cards)
- No keyboard traps

---

### TC-13 — Light mode visual sanity
**Steps**: Switch to light mode, scroll through all sections.
**Expected**:
- Page background is light grey
- Year node cards are white with amber border
- Text is dark and readable
- Language chips are visible (dark background on white card is acceptable per design)

---

### TC-14 — Page title and meta
**Steps**: Inspect `<head>` in source or DevTools.
**Expected**:
- `<title>` = "Tushar Saurabh — SRE"
- `meta[name=description]` present and non-empty
- `meta[property=og:title]` present
