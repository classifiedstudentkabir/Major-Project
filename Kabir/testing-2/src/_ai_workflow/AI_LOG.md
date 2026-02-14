# AI Change Log
**Maintained by:** Codex (Implementation Agent)

| Date | File Modified | Description of Change | Approved By |
|------|---------------|-----------------------|-------------|
| 2026-02-03 | contact.html | Removed duplicate script tags | User |
| 2026-02-03 | js/contact.js | Replaced with modular form handling | User |
| 2026-02-03 | js/firebase.js | Updated config with civil-contractor-cp details | User |
| 2026-02-03 | _ai_workflow/AI_PLAN.md | Added conversion upgrades plan section (WhatsApp, map embed, quote form, Firestore fields) | User |
| 2026-02-03 | _ai_workflow/AI_HANDOFF.md | Added Gemini task list and snippets for conversion upgrades | User |
| 2026-02-03 | _ai_workflow/AI_PLAN.md | Documented WhatsApp CTA rationale, placement, and future improvements | User |
| 2026-02-03 | _ai_workflow/AI_HANDOFF.md | Added WhatsApp CTA rationale summary for implementation context | User |
| 2026-02-03 | _ai_workflow/AI_PLAN.md | Added Conversion Upgrade v1 section with completed and remaining items | User |
| 2026-02-03 | _ai_workflow/AI_HANDOFF.md | Added Conversion Upgrade v1 remaining tasks with exact WhatsApp link and snippets | User |
| 2026-02-04 | _ai_workflow/AI_PLAN.md | Added Section 6: Footer Upgrade + Mobile UI Improvement | Gemini |
| 2026-02-04 | _ai_workflow/AI_HANDOFF.md | Added Task 5: Footer & Mobile UI instructions for Codex | Gemini || 2026-02-04 | All *.html files, styles/layout.css, styles/responsive.css | Replaced LinkedIn footer icon with WhatsApp link and improved footer grid alignment/tap targets for mobile | User |
| 2026-02-04 | All *.html files | Restored original footer layout from repo and replaced LinkedIn footer icon with WhatsApp link | User |
| 2026-02-04 | _ai_workflow/AI_PLAN.md | Added Task 6: Footer Polish (Alignment & Spacing) to checklist | Gemini |
| 2026-02-04 | _ai_workflow/AI_HANDOFF.md | Provided exact CSS for Task 6 footer alignment and contact spacing | Gemini |
| 2026-02-14 | about.html, blog.html, contact.html, faq.html, projects.html, services.html, single-blog.html, single-project.html, single-service.html, styles/components.css | Replaced text-only breadcrumbs with semantic nav/ol markup and clickable Home link; added breadcrumb styling for separators and inline layout. Assumption: all pages are in `src/` root so `index.html` is correct Home path. | User |
| 2026-02-14 | firestore.rules, FIRESTORE_RULES.md | Added create-only Firestore rules for `/leads/{docId}` with field allowlist, required fields, length checks, timestamp requirement, and basic email pattern; documented usage note. Assumption: no existing `firestore.rules` or README in repo root; placed rules and note in `src/`. | User |
| 2026-02-14 | about.html, blog.html, contact.html, faq.html, projects.html, services.html, single-blog.html, single-project.html, single-service.html, styles/components.css | Updated breadcrumb markup to use `<nav aria-label="breadcrumb">` with `<ol class="breadcrumb">` and CSS to remove numbering and show inline separators. | User |
| 2026-02-14 | index.html, contact.html, lang/en.json, lang/hi.json, lang/mr.json | Replaced placeholder copy with professional, brand-specific content for hero/about/services/contact/blog/projects and updated translations; added contact intro i18n key. | User |
| 2026-02-14 | ..\\firestore.rules, ..\\firebase.json, ..\\FIRESTORE_RULES_NOTE.md | Copied Firestore rules to repo root, added firebase rules config, and added deployment note for Console/CLI. | User |
| 2026-02-14 | Review | **[PASS]** Review of Breadcrumbs and Firestore Rules | Reviewer AI |
| | | **ISSUES FOUND:** | |
| | | 1. **[CRITICAL] Placeholder Content:** `contact.html` contains "Lorem Ipsum". `about.html` and other pages have generic, unprofessional text that must be replaced. | |
| | | 2. **[INFO] Firestore Rules Location:** `firestore.rules` is in `src/`. This is acceptable but non-standard. For deployment, `firebase.json` must explicitly point to `src/firestore.rules`. No changes needed if configured correctly. | |
| | | 3. **[INFO] Security Rules Limitations:** The rules are excellent for data validation but cannot prevent spam or high-volume submissions. This is a limitation of Firestore Rules. Further protection would require Cloud Functions with App Check or a reCAPTCHA integration, which is out of scope for now. | |
| | | 4. **[SUGGESTION] Layout Polish:** The "Core Expertise" section on `about.html` could be presented in 4 columns on desktop for better visual balance. | |
| 2026-02-14 | Review | **[PASS]** Review of Content & Polish | Reviewer AI |
| | | **ISSUES FOUND:** | |
| | | - No new issues found. The content updates were implemented correctly in the i18n JSON files. Site consistency is good. | |
