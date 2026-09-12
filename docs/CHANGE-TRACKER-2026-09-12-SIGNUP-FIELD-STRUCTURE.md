# Change Tracker — Signup Field Structure

## Updated
- `pages/auth/signup.html` — explicit labels above controls; required indicators on required fields; Primary use marked required.
- `assets/css/styles.css` — signup-specific two-column/one-column responsive field layout matching the approved reference.
- `CHANGELOG.md` — release entry.

## Accessibility
- Native labels remain programmatically associated with controls.
- Required fields retain native `required` validation and visible indicators.
- Keyboard focus remains visible.
- Mobile layout collapses to one column at the 640px breakpoint.
- Dark mode and forced-colors support retained.
- No information is conveyed by color alone.

## Verification
- The signin layout was intentionally left unchanged.
- Only signup presentation and semantics were modified in this change.
