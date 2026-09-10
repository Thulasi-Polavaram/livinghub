# Urban Living PG — Complete V1 UI Application

## Purpose
A complete end-to-end UI prototype for **Urban Living PG**, combining:
- apartment rentals
- PG / paying-guest rooms
- shared PG beds
- co-living / managed stays
- tenant lifecycle
- owner/manager operations
- maintenance staff operations
- administration

## Key product correction
PG is a first-class discovery path. The public site contains:
- **Find a Home**
- **PG / Co-living**
- dedicated PG filters
- private/single, 2-sharing, 3-sharing and 4-sharing room concepts
- meals, housekeeping, Wi-Fi, security and other PG-specific attributes
- room/bed-level selection

## Repository structure
```text
urban-living-pg-complete/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/app.js
│   └── img/urban-living-pg-logo.png
├── data/demo-data.json
├── docs/
├── pages/
│   ├── public/
│   ├── auth/
│   ├── tenant/
│   ├── owner/
│   ├── staff/
│   └── admin/
└── README.md
```

## Demo access

Demo sign-in accepts either the demo email address or its paired mobile number.
Authentication is intentionally bypassed. The Login page provides direct entry as:
- Tenant
- Owner / Manager
- Maintenance Staff
- Admin

The UI uses browser localStorage only to remember the selected **demo role**. This is not production authentication.

## Shared India date/time
Every page includes the same live date/time treatment used in the previous Apply4Company project. The browser clock is rendered from the fixed `Asia/Kolkata` timezone and does **not** display the timezone label. For production audit/event records, timestamps should be stored server-side in UTC and converted for display at the UI boundary.

## Payment pages
Payment and receipt pages are retained because rent, deposits, collections and reconciliation are core PG/rental workflows. They are deliberately prototype-safe: the UI does not collect sensitive payment credentials and does not claim a payment is successful. Production must use a compliant payment gateway, server-side order creation, signature/webhook verification, idempotency, ledger/reconciliation, refund handling and accessible review/confirmation steps before money movement.

## WCAG 2.2 foundation
The UI uses semantic HTML landmarks, skip navigation, visible keyboard focus, labelled form controls, accessible mobile navigation state, responsive layouts, status messages, tables with captions, native controls, and reduced-motion support.

Formal WCAG conformance still requires browser-based keyboard, screen-reader, zoom/reflow and automated testing.

## Production implementation still required
1. Authentication and authorization / RBAC.
2. Secure session management.
3. PostgreSQL data model.
4. Property → unit/room → bed availability model.
5. Owner verification and property moderation.
6. Tenant onboarding / KYC.
7. Booking/hold/expiry/concurrency rules.
8. Agreement generation and e-signature.
9. Payment gateway integration and server-side webhook verification.
10. Ledger, refunds, reconciliation and receipts.
11. Maintenance attachments, SLA and audit history.
12. Notifications (email/SMS/push/WhatsApp as legally and operationally appropriate).
13. Search/indexing and location services.
14. Object storage and secure document access.
15. Security headers, CSP, HTTPS, secrets management, logging and monitoring.
16. Automated UI/API/database tests and CI/CD.
17. Final privacy, terms, retention, grievance and Indian data-protection review.

## Existing project alignment
The previous Apply4Company project already established several useful engineering practices: skip-to-main navigation, keyboard-visible focus, accessible labels/errors, password recovery API boundaries, and server-side security responsibilities. This UI carries those principles into the rental/PG domain.

## Role-based application views
The UI now demonstrates credential-driven role routing:
- Tenant: `tenant@urbanlivingpg.demo` or `+91 90000 00001` → Tenant Dashboard
- Manager: `manager@urbanlivingpg.demo` or `+91 90000 00002` → Manager / Rentals & Maintenance Dashboard
- Staff: `staff@urbanlivingpg.demo` or `+91 90000 00003` → Maintenance Staff Dashboard
- Admin: `admin@urbanlivingpg.demo` or `+91 90000 00004` → Admin Dashboard

These credentials are prototypes only. Production must authenticate on the server and return role/permission claims that the backend enforces.

## Communications and user history
The UI now includes:
- Manager communications dashboard
- WhatsApp/SMS/email/in-app channel selection
- delivery history/status
- tenant notification center
- communication preferences
- persistent request/history concept
- maintenance/booking request references

For production WhatsApp, use an official WhatsApp Business provider/API. Store delivery metadata and consent/preferences, not unnecessary secrets.

## Mobile / Android / iOS strategy
This web UI is designed mobile-first/responsive so the same information architecture works on:
- laptop/desktop browsers
- Android browsers
- iPhone/iPad browsers

Future Android/iOS apps should consume the same backend APIs and business rules. Do NOT create separate booking/payment/property logic in the mobile app. Recommended architecture:
- shared REST/JSON API
- shared authentication/RBAC
- shared database
- shared notification/event service
- shared payment/order state
- responsive web frontend
- future native/cross-platform mobile client
\n\n## Change tracking\nEvery project update is recorded in `CHANGELOG.md` with the date, files/areas changed, purpose, and verification notes.\n

## Authentication identifier policy

The UI supports both verified email address and verified mobile number as account identifiers. Registration collects both. Sign-in and account recovery accept either identifier. Production must normalize identifiers server-side, verify ownership before activation or recovery, apply rate limits/lockouts, avoid account-enumeration responses, and keep authentication secrets out of browser storage.
