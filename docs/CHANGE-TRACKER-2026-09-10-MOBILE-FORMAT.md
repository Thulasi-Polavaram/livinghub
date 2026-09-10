# Change Tracker — Mobile Number UX / Identifier Format

## Release
2026-09-10 — India-first mobile-number UX normalization

## Approved product decision
- Users enter an Indian mobile number as a simple 10-digit number in the UI.
- The visible UI does not require users to understand the `+91` country code.
- Demo credentials display 10-digit numbers without a country code.
- The demo data retains a canonical international representation internally for matching and future provider integration.
- Production must normalize and validate phone numbers server-side, verify ownership, and maintain a canonical representation for SMS/WhatsApp/provider integrations.

## Updated files
- `assets/js/app.js` — restored canonical demo mobile values internally while keeping visible UI values country-code-free; identifier normalization continues to accept common formatting.
- `pages/auth/login.html` — 10-digit mobile placeholder/instruction; no visible `+91`.
- `pages/auth/signup.html` — 10-digit mobile placeholder/instruction.
- `pages/auth/forgot-password.html` — 10-digit mobile placeholder/instruction.
- `pages/auth/verify-otp.html` — recovery flow continues to refer to email or mobile without exposing country-code syntax.
- `pages/auth/reset-password.html` — authentication flow reviewed for identifier-neutral language.
- `pages/auth/password-reset-success.html` — authentication flow reviewed.
- `pages/auth/signup-privacy.html` — mobile terminology aligned with account model.
- `pages/auth/signup-terms.html` — mobile terminology aligned with account model.
- `pages/public/contact.html` — mobile field reviewed for `tel`, `inputmode`, `autocomplete` and 10-digit instruction.
- `pages/public/visit.html` — mobile field reviewed for `tel`, `inputmode`, `autocomplete`.
- `pages/tenant/profile.html` — visible mobile profile value uses country-code-free Indian format.
- `README.md` — updated identifier policy and demo mobile display guidance.
- `CHANGELOG.md` — added release entry.

## Accessibility / IT checks
- Visible labels remain associated with controls.
- Mobile fields use `type="tel"` where appropriate.
- `autocomplete="tel"` is used for contact mobile fields.
- Numeric entry uses `inputmode="tel"` rather than relying on a text-only keyboard.
- Instructions explicitly state the expected 10-digit format where users enter an identifier.
- No authentication secrets are stored in browser storage.
- Production authentication, normalization, verification, rate limiting, account-enumeration protection and authorization remain server-side responsibilities.

## Verification
- 50 HTML pages retained.
- No local-reference regressions introduced.
- No visible `+91` country-code text remains in HTML UI content; documentation may mention the canonical format for engineering purposes.
- Internal demo account matching retains canonical `+91` values.
