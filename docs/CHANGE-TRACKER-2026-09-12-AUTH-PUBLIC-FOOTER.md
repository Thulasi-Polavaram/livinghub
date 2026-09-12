# Change Tracker — Authentication/Public Footer Corrections — 2026-09-12

## Updated
- `pages/auth/*.html`: authentication header/footer links stay inside the authentication context; brand returns to Sign in; public legal links removed from auth flow; Support removed from auth header while retained in footer.
- `pages/auth/support.html`: removed the redundant Common/Account Help card; support form remains the primary content.
- `pages/public/*.html`: removed the Tenant application footer column so public users are not sent directly into private tenant routes.

## Accessibility/IT
- Maintains semantic navigation landmarks and contextual labels.
- Keeps keyboard-operable links and visible focus styles from the shared stylesheet.
- Avoids duplicate navigation destinations and confusing context switches.
- Private tenant routes remain protected by production server-side authorization requirements.

- `pages/public/contact.html`: removed redundant Common Help card and its private Tenant links.
- `pages/public/booking-success.html`: changed private dashboard CTA to an explicit Sign in action to avoid an unauthenticated public-to-private context jump.
