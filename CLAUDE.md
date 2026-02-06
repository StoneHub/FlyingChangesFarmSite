# CLAUDE.md - Flying Changes Farm Website

## Project Overview

Static HTML/CSS/JS website for Flying Changes Farm at 438 Pumpkintown Rd, Marietta, SC 29661. Showcases primitive camping, Pinnacle Paramotor airfield, farm animals, and the Stone Developer Hub.

- **Live URL:** https://flyingchangesfarm.net
- **Firebase project:** possible-haven-471616-f0
- **Hosting target:** fcf-main
- **Repo:** StoneHub/FlyingChangesFarmSite

## Architecture

Pure static site - no build step, no bundler, no npm dependencies.

```
public/                    # Served by Firebase Hosting
├── index.html             # Landing page (hero, location map, features, gallery, about, booking)
├── camp.html              # Camping page (amenities, rules, booking CTA)
├── pinnacle.html          # Airfield page (runway, hangar, training, flight gallery)
├── apps.html              # Developer hub (dark theme, projects, GitHub stats)
├── assets/
│   ├── css/main.css       # Single shared stylesheet with CSS variables
│   └── js/
│       ├── shared-components.js  # Injects header/footer on every page
│       └── main.js               # Placeholder (logic consolidated into shared-components.js)
└── [favicon/og PNGs]
```

## Key Patterns & Conventions

### Component System
- Header and footer are **dynamically injected** by `shared-components.js` via `initSharedComponents()`
- `SITE_CONFIG` object in shared-components.js defines nav links and site name
- All menu behavior (toggle, body scroll lock, nav link close) lives in shared-components.js
- Pages have no static `<header>` or `<footer>` tags; they use HTML comments as markers

### CSS
- **CSS variables** in `:root` for all colors, fonts, spacing
- **Color palette:** forest-green, sage, warm-brown, clay-red, sky-blue (earth tones)
- **Fonts:** Inter (headings via `--font-heading`), Lora (body via `--font-body`)
- **BEM-inspired naming:** `.feature-card`, `.info-card`, `.app-card`, `.gallery-item`
- **Responsive breakpoints:** 960px (hero), 768px (mobile nav), 640px (container padding)
- apps.html has its own dark theme via `body.apps-page` class + inline `<style>` block

### HTML
- Semantic HTML5: `<section>`, `<article>`, `<nav>`, `<main>`
- All pages load Google Fonts, favicons, OG/Twitter meta in `<head>`
- Script loading order: shared-components.js (inline) then main.js (defer)

## Development

### Local dev
```bash
firebase serve                    # Serves from public/ at localhost:5000
```

### Deployment
Auto-deploys via GitHub Actions:
- **Push to main** -> deploys to live (firebase-hosting-merge.yml)
- **PR opened** -> creates preview URL (firebase-hosting-pull-request.yml)

Manual: `firebase deploy --only hosting`

### Commits
Use conventional commit style: `fix:`, `feat:`, `refactor:`, `docs:`

## Known Issues & Placeholders

### Placeholder content (needs real media)
- All gallery images are from Unsplash CDN (search for `unsplash.com` in HTML)
- Social links in footer and index.html point to platform roots (instagram.com, youtube.com, facebook.com) not actual farm accounts
- GitHub stats iframe on apps.html uses `username=monroe` which may be incorrect

### Technical debt
- index.html has ~15 inline `style` attributes that should be extracted to CSS classes
- camp.html has 2 minor inline styles
- pinnacle.html has 2 inline styles

## Roadmap

| Phase | Status |
|-------|--------|
| 1. Static core (landing, responsive layout) | Done |
| 2. Content expansion (camp, pinnacle, apps pages) | Done |
| 3. Dynamic prep (Firebase forms, enhanced CI) | Planned |
| 4. Social & SEO (real social links, analytics, image optimization) | Planned |
| 5. Integrations (Hipcamp, live GitHub widgets, Cloud Run) | Planned |
