# Change Tracker — 2026-09-11 — Theme, Verification & Staff Navigation

## Added
- `pages/tenant/verification.html` — resident identity/occupancy submission flow.
- `pages/owner/tenant-verification.html` — owner verification queue and approve/lock demo flow.
- `docs/CHANGE-TRACKER-2026-09-11-VERIFICATION-THEME.md` — release record.

## Updated
- `assets/css/styles.css` — browser `prefers-color-scheme` light/dark theme, `color-scheme`, dark-mode surface/controls, accessible focus token.
- `assets/js/app.js` — owner/tenant verification navigation, demo approval state, signup-to-verification handoff, staff header Support removed from top-level application nav.
- `pages/auth/*.html` — Support removed from authentication header navigation; footer Support retained.
- `pages/auth/signup.html` — explains post-signup verification and locked approved records.
- `pages/owner/dashboard.html` — resident verification entry point.
- `pages/staff/*.html` — Support removed from the staff application header; support remains available from workflow content/footer.
- All HTML pages — browser `theme-color` metadata for light/dark browser chrome.

## Security / privacy design
- Government ID uploads are demo-only and are never persisted in browser storage.
- Production must use encrypted transport/storage, least-privilege access, audit logging, retention/deletion rules, secure document viewing and server-side approval/locking.
- Approval creates a new immutable verification version; edits require re-verification.

## Accessibility
- Native labels/controls, keyboard operation, visible focus, status messaging and responsive reflow retained.
- Dark mode follows browser/OS preference with sufficient theme tokens; final contrast and screen-reader verification still requires automated and manual WCAG 2.2 testing.
