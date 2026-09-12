# Change Tracker — Signup PG/Apartment UX — 2026-09-12

## Scope
- Preserved existing header/footer and all existing application functionality.
- Made Apartment and PG / Co-living primary use choices explicit on signup.
- Added accessible helper text for the primary-use control.
- Centered the Create account action.
- Added “Already have an account?” before the Sign in action.

## Accessibility / IT
- Native select retained for keyboard and assistive-technology compatibility.
- Label remains programmatically associated with the select.
- Helper text is associated with `aria-describedby`.
- Required state is programmatic.
- Actions retain visible focus and mobile touch sizing from the shared stylesheet.
- No JavaScript-only navigation introduced.

## Files changed
- `pages/auth/signup.html`
- `assets/css/styles.css`
- `docs/CHANGE-TRACKER-2026-09-12-SIGNUP-PG-APARTMENT-UX.md`
- `CHANGELOG.md`
