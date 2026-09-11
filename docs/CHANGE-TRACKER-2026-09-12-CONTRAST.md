# Urban Living PG — Change Tracker — 2026-09-12

## Release
Accessible light/dark theme contrast correction across the application.

## Problem addressed
Dark browser/OS theme exposed low-contrast text in status notices and some interactive states. The reported agreement page showed dark text on dark informational/success surfaces.

## Changes
- Centralized light/dark theme tokens in `assets/css/styles.css`.
- Added dark-theme text tokens for info, success, warning and danger notices.
- Added separate CTA background tokens so primary buttons retain readable white text in dark mode.
- Corrected dark-mode primary-button hover contrast.
- Preserved browser/OS theme detection through `prefers-color-scheme`.
- Preserved `color-scheme: light dark`.
- Corrected dark footer and demo-banner text colors.
- Kept all page-specific content on shared theme tokens where possible.

## WCAG 2.2 intent
- Normal text and status text are targeted at WCAG AA contrast (4.5:1 or better where applicable).
- Primary button text uses a dark enough CTA background for white text.
- Focus indicator remains a dedicated high-contrast token.
- No information is conveyed by color alone.
- Both light and dark browser themes use the same semantic status roles.

## Verification
- 52 HTML pages in current application package.
- Shared stylesheet used for all pages.
- Searched HTML for hard-coded inline foreground/background declarations; only the intentional brand hero span remains.
- Calculated representative dark-mode status/CTA contrast ratios above 4.5:1.
- Static local-link verification should remain 0 broken references.

## Production note
Formal WCAG 2.2 conformance still requires real browser testing across supported browsers, keyboard-only navigation, screen readers, zoom/reflow, high-contrast/forced-colors behavior and automated accessibility tooling.
