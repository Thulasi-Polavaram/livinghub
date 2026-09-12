# Change Tracker — Public/Auth Shell Alignment

Date: 2026-09-12

## Approved behavior
- Public pages retain the Index header/footer structure.
- Sign In and Sign Up use the same public header/footer structure, except header Sign in/Get started actions are intentionally omitted.
- Public header navigation remains functional with auth-relative paths.
- Auth Support remains within `pages/auth/support.html`.
- Public Privacy/Terms use `pages/public/privacy.html` and `pages/public/terms.html`.
- Auth Privacy/Terms use `pages/auth/privacy.html` and `pages/auth/terms.html`.
- Registration Privacy and Registration Terms are removed from every footer. They remain available only from the signup consent text where required.
- No Tenant/private application section is present in the public Index footer.

## WCAG / IT controls
- Existing skip link, semantic nav landmark, visible focus, responsive menu and theme support retained.
- Header action removal on auth pages does not remove the page's primary Sign in/Create account action.
- Footer links remain keyboard operable and text-labelled.
- Legal destinations are context-correct and avoid unexpected navigation.
- Auth pages remain `noindex,nofollow`.


## 2026-09-12 navigation correction
- Sign In/Sign Up Support now routes to the public Support page.
- Sign In Privacy/Terms now use dedicated `pages/auth/login-privacy.html` and `pages/auth/login-terms.html`.
- Public pages never route through the authentication Support page.
- Obsolete `pages/auth/support.html` retained as a compatibility copy of the public Support page.
