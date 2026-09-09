# Production Gap Register

This file is deliberately included so the UI can be considered complete without pretending that backend/security/legal systems are complete.

## Authentication / authorization
- UI bypass is demo-only.
- Implement identity provider or Spring Security.
- Roles: TENANT, OWNER_MANAGER, MAINTENANCE_STAFF, ADMIN.
- Enforce authorization server-side on every API.
- Secure session cookies / token strategy.
- MFA/step-up authentication for sensitive operations.

## PG-specific backend
- Property -> building -> floor -> room -> bed model.
- Occupancy rules for private / 2 / 3 / 4 sharing.
- Bed availability holds with expiry.
- Gender/house-rule policy fields.
- Meal plans, housekeeping, laundry, Wi-Fi, security and utilities.
- Per-bed pricing and deposit.
- Move-in / move-out lifecycle.
- Replacement / room transfer workflow.

## Apartment backend
- Building -> unit model.
- BHK, furnishing, parking, pets, utilities and lease terms.
- Availability calendar.
- Application / reservation / lease lifecycle.

## Booking
- Prevent double booking with database constraints/transactions.
- Temporary inventory holds.
- Cancellation and refund rules.
- Visit scheduling.
- Booking notifications.

## Payments
- Never trust client-side success.
- Payment gateway.
- Webhook signature verification.
- Idempotency.
- Ledger.
- Refunds.
- Reconciliation.
- Receipt generation.

## Documents
- KYC upload and verification.
- Secure object storage.
- Malware/content scanning where appropriate.
- Access control and expiring download URLs.
- Agreement versioning and audit trail.

## Maintenance
- Ticket categories.
- Priority and SLA.
- Assignment.
- Attachments.
- Status transitions.
- Tenant resolution confirmation.
- Vendor/technician tracking.
- Cost approval.

## Privacy / security
- Finalize actual data flows and processors.
- Retention/deletion schedules.
- User rights mechanisms.
- Grievance/contact mechanism.
- Security incident/breach response.
- Do not log passwords, OTPs, reset tokens or authorization headers.
- CSP/security headers/HTTPS.
- Rate limiting and abuse prevention.

## Accessibility
Before formal WCAG 2.2 conformance:
- keyboard-only testing
- screen-reader testing
- 200% zoom/reflow
- focus order
- target size
- contrast
- error identification and recovery
- automated axe/WAVE-style checks
- browser/device matrix

## Multi-platform architecture
Design the backend as the single source of truth for web, Android and iOS:
- Authentication/session service
- RBAC/permissions
- Property/room/bed inventory
- Booking/hold engine
- Tenant request service
- Payment/ledger service
- Notification/event service
- WhatsApp/SMS/email provider adapters
- Audit service
- File/document service

The web and future mobile apps should consume the same APIs. Avoid embedding business rules only in a client.

## WhatsApp / communication production requirements
- Use an approved WhatsApp Business API/provider.
- Maintain explicit channel preference/consent records where required.
- Separate transactional/service notifications from marketing.
- Use approved templates where required by provider rules.
- Persist provider message ID, request ID, recipient reference, timestamps, delivery/read/failure state.
- Implement retries/idempotency without duplicate messages.
- Protect phone numbers and message content.
- Provide opt-out/preferences where applicable.
- Never treat a frontend "sent" message as proof of provider delivery.

## Request history / customer timeline
Every important user request should have a durable server-side record:
request_id, requester_id, property_id, unit_id/room_id/bed_id when relevant,
category, priority, status, status_history, assigned_to, created_at,
updated_at, messages, attachments, notification events and audit events.
Authorization must be enforced for every read/write.
