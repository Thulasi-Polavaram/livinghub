# Change Tracker — 2026-09-12 — Authentication/Public Shell Correction

## Updated
- `assets/css/styles.css` — scoped authentication shell styles.
- `index.html` — removed Tenant footer section from public home.
- `pages/auth/*.html` — normalized all authentication headers and footers.
- `CHANGELOG.md` — release entry.

## Rules
- Authentication pages do not expose public-site navigation in their header.
- Authentication footer links remain within the authentication context.
- Public pages do not link directly to private Tenant workspace areas from the footer.
- Public Support remains available in the public site's footer/header where appropriate.

## Accessibility
- Semantic header/footer landmarks retained.
- Navigation links remain keyboard accessible.
- No duplicate primary CTAs in authentication header.
- Existing focus, contrast, reduced-motion, forced-colors and responsive rules retained.
