# Change Tracker — Navigation / Footer Audit — 2026-09-11

## Purpose
Keep authentication and authenticated application navigation within the correct context and prevent accidental cross-context footer links.

## Added
- pages/auth/support.html
- pages/auth/privacy.html
- pages/auth/terms.html
- pages/tenant/support.html
- pages/manager/support.html
- pages/owner/support.html
- pages/staff/support.html
- pages/admin/support.html

## Updated
- All existing pages under pages/auth/: contextual authentication footer.
- All existing pages under pages/tenant/, pages/manager/, pages/owner/, pages/staff/, pages/admin/: role-specific footer and support links.

## Rules
- Authentication footer stays in authentication context.
- Authenticated role footer stays in that role workspace.
- Support is role-aware and does not require leaving the application shell.
- Public browsing pages retain public navigation.
- Legal links remain local and accessible; production legal content remains subject to legal review.
- Static HTML shell is corrected as well as JavaScript so navigation is usable before scripts execute.
