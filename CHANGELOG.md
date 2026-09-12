## 2026-09-12 — Signup PG/Apartment UX
- Made Apartment and PG / Co-living choices explicit in Primary use.
- Added accessible helper text and required semantics.
- Centered Create account and added an “Already have an account?” prompt before Sign in.

## 2026-09-12 — Authentication/Public Footer Corrections
- Removed redundant help card from authentication support.
- Kept authentication legal/support links within the auth context.
- Removed Tenant application links from public-page footers.
- Standardized auth-page brand navigation back to Sign in.


## 2026-09-10 — Mobile login normalization fix
- Fixed demo authentication to accept both 10-digit Indian mobile numbers and `+91` international-format numbers.
- Kept the customer-facing mobile-number UX free of a visible country code.
# Urban Living PG — Change Log

## 2026-09-10 — India clock, mobile CTAs and functional inventory filters

### Fixed
- Changed the shared India date/time presentation to a two-line treatment: date above, bold application-brand time below; no timezone label is displayed.
- Fixed mobile public-header CTAs so **Sign in** and **Get started** remain visible on small screens instead of being hidden behind the desktop-only header action rule.
- Preserved a 44px minimum action target for primary header controls.
- Removed a stray closing `</div>` found after the skip link in the shared HTML shell.
- Added `noindex,nofollow` to authenticated application pages to prevent private/demo screens being indexed.

### Search/filter functionality
- Rebuilt apartment filters for search text, bedrooms, budget and furnishing.
- Rebuilt PG filters for search text, room occupancy, meals, gender policy and budget.
- Added working sort controls for apartment rent/newness and PG rent/distance.
- Added result counts, live filter status and no-results messaging.
- Added Clear filters actions that reset controls and return focus to the search field.
- Added URL query-state so filtered results can be refreshed/shared without losing the selected filters.
- Connected the home-page search form to the correct first-class Apartment or PG inventory based on the selected home type.

- Removed the empty header action container from authentication/recovery pages after suppressing duplicate account CTAs.

### Accessibility / IT controls
- Filter controls have explicit labels and stable IDs.
- Dynamic result counts/status use `aria-live`/status semantics without moving focus unexpectedly.
- Clear-filter actions are real buttons rather than navigation links.
- Search/filter controls remain keyboard operable and touch-friendly.
- Authenticated/private pages are marked `noindex,nofollow`.

### Verification
- 50 HTML pages retained.
- Local references rechecked.
- JavaScript syntax check passed.
- Inventory filters and sorting reviewed for both apartment and PG result sets.

## 2026-09-10 — Responsive authenticated shell and WCAG navigation fix

### Fixed
- Removed the prototype `UI Demo Mode` banner from all pages so it does not appear after sign-in or in the normal site header.
- Removed public `Sign in` / `Get started` CTAs from authenticated role headers.
- Added role-specific application navigation for Tenant, Manager, Property Owner, Staff and Admin.
- Added mobile-menu account actions so public users can still reach Sign in / Get started on small screens instead of losing those controls.
- Added accessible 44px navigation/action targets and preserved visible keyboard focus treatment.
- Preserved the India date/time display without displaying the timezone label.
- Preserved demo credentials for prototype exploration; production authentication remains server-side work.

### Verification
- 50 HTML pages retained.
- Local HTML/CSS/JS/image references rechecked after the change.

## 2026-09-10 — India-first mobile number UX normalization
- Removed visible `+91` from mobile-number entry and demo credential displays.
- Standardized user-facing guidance around a 10-digit Indian mobile number.
- Retained canonical international-format values internally for demo matching and future WhatsApp/SMS integration.
- Reviewed mobile fields across public, authentication and tenant-profile pages for semantic labels, `tel` input, `inputmode` and autocomplete behavior.
- Added `docs/CHANGE-TRACKER-2026-09-10-MOBILE-FORMAT.md`.


## 2026-09-11 — Theme and resident verification
- Browser/OS light and dark theme support.
- Post-signup identity and occupancy verification with owner approval and locked-record prototype.
- Staff Support removed from the top-level application header and placed in staff workflow content.
- WCAG-oriented accessible form and status patterns retained.

## 2026-09-12 — Accessible theme contrast correction
- Fixed dark-browser theme contrast for status notices and primary CTA states.
- Added semantic dark-theme status text tokens.
- Kept automatic `prefers-color-scheme` light/dark behavior.
- Added release tracker: `docs/CHANGE-TRACKER-2026-09-12-CONTRAST.md`.

## 2026-09-12 — WCAG 2.2 accessibility hardening
- Hardened light/dark theme contrast using semantic color tokens.
- Corrected dark-theme CTA hover/focus contrast.
- Added stronger focus-visible treatment across interactive controls.
- Added reduced-motion support.
- Added forced-colors/high-contrast support.
- Standardized practical 44px primary touch targets.
- Retained browser/OS `prefers-color-scheme` behavior.


## 2026-09-12 — Public shell consistency audit
- Restored the established public-site header/footer structure in light mode.
- Scoped public shell styling so accessibility/theme hardening does not alter public navigation hierarchy or spacing.
- Preserved automatic dark mode with contrast-safe colors.
- Added `public-shell` class to the home page and all public pages.


## 2026-09-12 — Authentication/Public shell navigation correction
- Rebuilt all authentication headers as a minimal auth shell with no public navigation or duplicate CTAs.
- Kept authentication footer links inside `pages/auth/` only.
- Removed Tenant footer section from the public home page.
- Preserved public Support in the public site shell and role-specific support inside authenticated workspaces.

## 2026-09-12 — Public/Auth Shell and Legal Link Separation
- Sign In and Sign Up now use the public header/footer structure with header Sign in/Get started actions removed.
- Removed Registration privacy and Registration terms from all footers.
- Authentication Privacy/Terms links stay in `pages/auth/`; public Privacy/Terms stay in `pages/public/`.
- Authentication Support stays in `pages/auth/support.html`.

## 2026-09-12 — Public/Auth Shell Alignment v2
- Aligned Sign In and Sign Up header/footer structure with Index while removing only the redundant header CTAs.
- Removed Registration Privacy/Terms from all footer link groups.
- Kept registration notices available from the signup consent text.
- Kept public and authentication Privacy/Terms destinations separate.

- Fixed public Support routing from Sign In/Sign Up and separated Sign In Privacy/Terms pages.

## 2026-09-12 — Role legal links and authentication cross-links
- Added role-specific authenticated Privacy/Terms pages.
- Added Login ↔ Signup cross-links.
- Prevented authenticated footer legal links from redirecting to public legal pages.


## 2026-09-12 — Feature preservation and filter hardening
- Preserved first-class Apartment and PG/Co-living inventory.
- Hardened inventory sorting, URL state, distance sorting and mobile/email form semantics.
- Added feature preservation and accessibility audit documentation.
