# Urban Living PG — Change Tracker
## 2026-09-10 — Authentication shell + email/mobile identifiers

### Scope
1. Remove duplicate account CTAs from authentication/recovery pages.
2. Keep account CTAs on normal public pages, including mobile.
3. Support both email address and mobile number as authentication identifiers.
4. Keep role-specific mobile navigation aligned with the logged-in role.

### Modified files
- `assets/js/app.js`
- `assets/css/styles.css`
- `pages/auth/login.html`
- `pages/auth/signup.html`
- `pages/auth/forgot-password.html`
- `pages/auth/verify-otp.html`
- `pages/auth/reset-password.html`
- `pages/auth/password-reset-success.html`
- `pages/auth/signup-privacy.html`
- `pages/auth/signup-terms.html`
- `pages/public/contact.html`
- Role pages containing the mobile bottom navigation
- `README.md`
- `CHANGELOG.md`
- `docs/CHANGE-TRACKER-2026-09-10.md`

### Demo identifiers
| Role | Email | Mobile | Password |
|---|---|---|---|
| Tenant | tenant@urbanlivingpg.demo | 90000 00001 | Tenant@123 |
| Manager | manager@urbanlivingpg.demo | 90000 00002 | Manager@123 |
| Staff | staff@urbanlivingpg.demo | 90000 00003 | Staff@123 |
| Admin | admin@urbanlivingpg.demo | 90000 00004 | Admin@123 |

- Removed the empty header action container from authentication/recovery pages after suppressing duplicate account CTAs.

### Accessibility / IT controls
- Native form controls and explicit labels retained.
- `autocomplete="username"` used for email/mobile identifier fields.
- Mobile primary actions are at least 44 CSS px high.
- Visible focus styling retained.
- Authentication/recovery pages no longer present duplicate header actions.
- Production must enforce server-side authentication, RBAC, identifier verification, rate limiting, account-enumeration resistance, secure session management, audit logging and secure secret handling.
