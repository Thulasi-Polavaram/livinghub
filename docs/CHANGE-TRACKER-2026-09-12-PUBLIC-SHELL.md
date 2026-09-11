# Public Shell Consistency — 2026-09-12

## Reason
Review reported that the public-page header/footer appeared changed after accessibility/theme hardening.

## Decision
Keep the established public navigation hierarchy and footer structure. Accessibility and theme changes are scoped so they improve contrast/focus without changing public navigation or layout hierarchy.

## Updated
- `assets/css/styles.css` — scoped `.public-shell` header/footer styles and dark-mode overrides.
- `index.html` — added `public-shell`.
- `pages/public/*.html` — added `public-shell` to all public pages.
- `CHANGELOG.md` — release entry.

## Accessibility
- Semantic header/nav/footer landmarks retained.
- Existing skip link and visible focus retained.
- Dark mode retains readable contrast.
- Public mobile account actions remain keyboard/touch accessible.

## Verification
- All public pages use the same public shell class.
- No authenticated role navigation is injected into public pages because `data-app-role` is absent.
- Local link audit remains required before release.
