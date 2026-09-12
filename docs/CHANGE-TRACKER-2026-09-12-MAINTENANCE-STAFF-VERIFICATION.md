# Change Tracker — Maintenance Staff Verification

Date: 2026-09-12

## Requirement
Route signup verification by Primary use:
- Find an apartment → existing public tenant verification
- Find a PG / Co-living → existing public tenant verification
- Maintenance work → new public staff verification
- List / manage property → no verification redirect for now

## Added
- `pages/public/staff-verification.html`
- `pages/public/staff-verification-success.html`

## Updated
- `assets/js/app.js` — signup routing and staff verification demo submission
- `CHANGELOG.md`

## Preserved
- `pages/public/tenant-verification.html` was not modified.
- `pages/tenant/verification.html` was not modified.
- Existing Sign In / Sign Up visual structure was preserved.

## Staff fields
- Full name
- Mobile number
- Email address
- Profile photo
- Government proof ID
- Date of birth
- Emergency contact number
- Primary service / trade
- Experience
- Service area / preferred locality
- Availability

## Security / accessibility
- No sensitive files are persisted in browser storage.
- Production requires encrypted server-side document storage, least-privilege access, audit logging and retention/deletion controls.
- Native labels, required fields, semantic form controls, live status and responsive existing site styles are used.
- This is a prototype UI, not a production identity-verification implementation.
