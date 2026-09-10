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
