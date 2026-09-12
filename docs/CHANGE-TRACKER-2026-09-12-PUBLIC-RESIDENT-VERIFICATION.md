# Change Tracker — Public Resident Verification — 2026-09-12

## Requested behavior
After demo account creation, the user is taken to a public resident verification page rather than the authenticated tenant verification workspace. The existing `pages/tenant/verification.html` is intentionally unchanged and is not the destination of the signup flow.

## Added
- `pages/public/tenant-verification.html` — public resident verification form.
- `pages/public/tenant-verification-success.html` — submission confirmation with up-to-12-hour owner review message.

## Updated
- `assets/js/app.js` — signup continuation now targets the public verification page; added accessible demo form handling and apartment-only resident evidence behavior.
- `assets/css/styles.css` — verification evidence fieldset styling.
- `CHANGELOG.md` — release entry.

## Form fields
- Profile photo
- Government proof ID
- Date of birth
- Emergency contact number
- Occupancy
- Resident evidence for apartment occupancy only
  - Apartment group photo
  - Photo for each resident

## Accessibility/security intent
- Native labels and controls.
- Required state represented programmatically.
- `aria-describedby` for instructions.
- `fieldset`/`legend` for related evidence choices.
- `aria-live` submission status.
- Keyboard-operable native form controls.
- Responsive/mobile layout.
- Dark mode and forced-colors styling inherited from shared CSS.
- Sensitive files are not written to localStorage/sessionStorage; production must use encrypted, access-controlled server storage and audit/retention controls.

## Explicitly unchanged
- `pages/tenant/verification.html` — existing authenticated tenant verification page was not modified and is not used by the new signup continuation.
