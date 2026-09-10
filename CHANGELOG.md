# Urban Living PG — Change Log

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
