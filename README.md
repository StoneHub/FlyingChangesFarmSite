# FlyingChangesFarm.net

Website and digital hub for Flying Changes Farm in Marietta, South Carolina.

## Project Overview

FlyingChangesFarm.net is evolving from a simple static page into a full showcase for the farm, paramotor activity, primitive camping, and software projects based at 438 Pumpkintown Road. The site is deployed on Firebase Hosting (`flyingchangesfarm.net`) from the GitHub repository `StoneHub/FlyingChangesFarmSite`.

### Objectives

1. Deliver a lightweight, mobile-friendly landing experience rooted in verified info.
2. Host farm, hangar, and campsite media with placeholder embeds until official footage is ready.
3. Highlight primitive camping, herd care, and Pinnacle Paramotor with accurate CTAs.
4. Surface live GitHub activity (PickMyRoute, Care Calendar) instead of static app blurbs.
5. Prepare for future dynamic features (Hipcamp booking integration, Firebase-powered forms).

## Current Stack

- **Hosting:** Firebase Hosting (auto-deployed via GitHub Actions)
- **Domain:** `flyingchangesfarm.net` (DNS managed via Bluehost)
- **Tech:** Static HTML, CSS, and minimal JavaScript

## Repository Layout

```
/
├── public/
│   ├── index.html              # Landing page with verified property overview
│   ├── camp.html               # Primitive campsite details + Hipcamp placeholder
│   ├── horses.html             # Herd care (horses + goats Houston & Kronk)
│   ├── pinnacle.html           # Pinnacle Paramotor runway + media (1 video, 2 photos)
│   ├── apps.html               # Live GitHub feed + project summaries
│   ├── about.html              # Story, Helene recovery, future goals, contact info
│   └── assets/                 # Shared images, styles, scripts
├── firebase.json
├── .firebaserc
└── README.md
```

## Development Roadmap

| Phase | Focus | Key Tasks | Target |
|-------|-------|-----------|--------|
| Phase | Focus | Key Tasks | Status |
|-------|-------|-----------|--------|
| 1 | Verified static core | Landing page rewrite, responsive layout, accurate property info, placeholder media | ✅ Complete |
| 2 | Content expansion | Individual pages for camp, herd care, Pinnacle, apps, about | ✅ Complete (v1 placeholders) |
| 3 | Dynamic prep | `/api` rewrite planning, Firebase form scaffolding, GitHub Actions checks | 🔄 Planned |
| 4 | Social & SEO | Real social links, analytics, richer metadata, asset optimization | 🔄 Planned |
| 5 | Integrations | Hipcamp listing swap, live GitHub widgets, optional Cloud Run endpoints | 🔄 Planned |

### Phase Notes
- **Phase 1** (complete): Verified copy, new design system, placeholder media, GitHub stats embed, consistent contact info.
- **Phase 2** (complete v1): Dedicated pages with accurate content for camping, herd care, Pinnacle, apps, and about.
- **Phase 3** (planned): Prep Firebase rewrites, introduce secure contact form, validate hosting previews.
- **Phase 4** (planned): Swap placeholder media/social links with official assets, expand SEO metadata, optimize images.
- **Phase 5** (planned): Wire Hipcamp listing, deepen GitHub integration, explore Cloud Run/Firebase Functions for dynamic features.

## Development Workflow

1. Work locally in feature branches.
2. Use GitHub Actions + Firebase Hosting for deployments (`firebase deploy --only hosting`).
3. Optimize assets (images, video embeds) before committing.
4. Track completion against the validation checklist below.

### Validation Checklist

- [ ] All internal/external links resolve correctly.
- [ ] HTTPS certificate verified post-deploy.
- [ ] Pages load in under 2 seconds on mobile connections.
- [ ] Placeholder media swapped for official farm footage/photos.
- [ ] Hipcamp listing link live once published.
- [ ] Pinnacle Paramotor CTA targets the official site.
- [ ] GitHub embed renders without CORS issues.
- [ ] Firebase deploy workflow passes.

## Firebase Hosting Reference

Install the Firebase CLI if needed:

```bash
npm install -g firebase-tools
```

Authenticate and deploy:

```bash
firebase login
firebase deploy --only hosting
```

Update `.firebaserc` with the correct project identifier before the first deploy.
