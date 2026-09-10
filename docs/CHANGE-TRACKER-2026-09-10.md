# Urban Living PG — Change Tracker — 2026-09-10

## Release: India clock + mobile public CTAs + functional search filters

### Directly modified feature files
- `assets/js/app.js` — India clock rendering, role shell, public mobile CTAs, home-search routing, apartment/PG filters, sorting, URL state, clear-filter/status behavior.
- `assets/css/styles.css` — two-line India clock styling, mobile header/action layout, 44px controls.
- `index.html` — home search form now submits real query parameters and typed home/budget values.
- `pages/public/properties.html` — functional apartment filters/sort/result state and accessible filter controls.
- `pages/public/pg.html` — functional PG filters/sort/result state and accessible filter controls.
- `CHANGELOG.md` — release notes.

### HTML shell normalization
All 50 HTML pages were updated to remove a stray closing `</div>` after the skip link. This prevents invalid DOM structure around the shared header and improves predictable parsing.

### Authenticated/private pages
The following 29 pages also changed their robots directive to `noindex,nofollow` so private/demo application screens are not intended for search indexing:

- `pages/admin/audit.html`
- `pages/admin/dashboard.html`
- `pages/admin/disputes.html`
- `pages/admin/users.html`
- `pages/admin/verification.html`
- `pages/manager/dashboard.html`
- `pages/manager/notifications.html`
- `pages/owner/bookings.html`
- `pages/owner/dashboard.html`
- `pages/owner/maintenance.html`
- `pages/owner/payments.html`
- `pages/owner/properties.html`
- `pages/owner/property-new.html`
- `pages/owner/room-new.html`
- `pages/owner/rooms.html`
- `pages/owner/tenants.html`
- `pages/staff/dashboard.html`
- `pages/staff/work-order.html`
- `pages/staff/work-orders.html`
- `pages/tenant/agreement.html`
- `pages/tenant/bookings.html`
- `pages/tenant/dashboard.html`
- `pages/tenant/documents.html`
- `pages/tenant/maintenance.html`
- `pages/tenant/notifications.html`
- `pages/tenant/payments.html`
- `pages/tenant/profile.html`
- `pages/tenant/receipts.html`
- `pages/tenant/requests.html`

### Files intentionally not removed
- Payment pages remain in the prototype.
- Demo credentials remain available for prototype navigation only.
- PG remains a first-class inventory category.

### Verification performed
- 50 HTML pages present.
- 0 broken local `href`/`src` references.
- 0 duplicate HTML IDs detected by the basic static audit.
- All HTML pages contain a document language, title and main landmark in the static audit.
- JavaScript syntax check passed with Node.js.
- Apartment and PG filter metadata reviewed for search, budget, occupancy/furnishing, sort and no-results behavior.

### WCAG 2.2 implementation direction
- Keyboard-operable native form controls.
- Explicit labels for filter inputs/selects.
- Visible focus retained.
- Minimum 44px target sizing for primary mobile header actions; this exceeds WCAG 2.2 AA Target Size (Minimum), which is 24x24 CSS px.
- Live/status messaging for dynamic result counts without automatically moving focus.
- Clear-filter control is a button and returns focus to the search input.
- Mobile reflow is preserved.

This is an implementation audit, not a formal WCAG conformance certification. Formal conformance still requires browser-based keyboard, screen-reader, zoom/reflow, contrast and automated accessibility testing.


## Release: Authentication context + email/mobile identifiers

### Files modified
- `assets/js/app.js` — dual-identifier demo login, demo mobile numbers, auth-page shell handling.
- `assets/css/styles.css` — public mobile CTA layout and authentication-page CTA suppression.
- `pages/auth/login.html` — email-or-mobile sign-in and paired demo identifiers.
- `pages/auth/signup.html` — explicit mobile + email account registration.
- `pages/auth/forgot-password.html` — email-or-mobile account recovery.
- `pages/auth/verify-otp.html` — recovery identifier wording.
- `pages/auth/reset-password.html` — authentication-page shell.
- `pages/auth/password-reset-success.html` — authentication-page shell.
- `pages/auth/signup-privacy.html` — authentication-page shell.
- `pages/auth/signup-terms.html` — authentication-page shell.
- `pages/public/contact.html` — email + mobile support contact.
- All role pages containing `mobile-bottom-nav` — corrected role-specific mobile links.
- `README.md` — demo mobile identifiers and authentication identifier policy.
- `CHANGELOG.md` — release notes.

### Removed from authentication headers
- Duplicate `Sign in` and `Get started` actions on all authentication/recovery pages.

### Retained
- `Sign in` and `Get started` on normal public discovery/conversion pages.
- Payment pages and demo payment-safe behavior.
- India date/time display without a timezone label.

### Verification intent
- Public pages: direct mobile account actions remain available.
- Auth pages: no duplicate account CTAs in the header.
- Login/recovery: email or mobile identifier accepted by the demo UI.
- Role-specific mobile navigation: tenant/manager/owner/staff/admin links aligned to each role.
- Production security controls remain backend responsibilities.

- Removed the empty header action container from authentication/recovery pages after suppressing duplicate account CTAs.
