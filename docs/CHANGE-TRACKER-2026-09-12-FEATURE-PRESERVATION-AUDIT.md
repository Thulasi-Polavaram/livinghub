# Urban Living PG — Feature Preservation & Accessibility Audit
Date: 2026-09-12

## Source comparison
The user-supplied previous `login.html` and `signup.html` were reviewed as reference files. Their form fields and authentication concepts are preserved; header/footer were intentionally not used as the basis for changes because the user requested those remain unchanged.

## First-class inventory
- Apartments remain a dedicated public inventory page: `pages/public/properties.html`.
- PG / Co-living remains a dedicated public inventory page: `pages/public/pg.html`.
- PG listings are not mixed into apartment results.
- PG filtering remains available for occupancy, meals, gender policy and budget.
- Apartment filtering remains available for bedrooms, budget and furnishing.

## Filter hardening
- Search text filtering retained.
- Select filters retained.
- Clear filters retained.
- Empty-result status retained.
- Accessible live status retained.
- URL state retained for shareable filter state.
- Sort state is now persisted in the URL.
- Recommended sort restores original listing order.
- Distance sorting now has explicit listing distance data.
- Filter controls are scoped to their own panel.
- Budget URL aliases remain supported.

## Authentication form
- Email or mobile login remains supported.
- Indian 10-digit mobile input remains the customer-friendly signup format.
- Login accepts both 10-digit and +91 formats through shared normalization.
- Signup mobile field has semantic telephone autocomplete, numeric input mode, length and pattern constraints, and a visible instruction.
- Labels are programmatic labels; placeholders are not used as the sole label.

## WCAG 2.2-oriented implementation
- Native form controls and labels.
- Keyboard operation and visible focus inherited from shared stylesheet.
- Live status messaging for filter results.
- No information conveyed by color alone.
- Responsive reflow and mobile touch targets inherited from shared stylesheet.
- Light/dark browser preference and forced-colors support retained.

## IT production boundary
This remains a static/demo frontend. Production authentication, authorization, phone verification, persistence, document security, audit logging, payments and provider integrations must be implemented server-side.
