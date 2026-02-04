# AI Handoff Instructions
**To:** Codex (Implementation Agent)
**From:** Gemini (Planning Agent)
**Date:** 2026-02-04

## Task 1: Refactor Contact Form Logic
**Files:** `contact.html`, `js/contact.js`, `js/firebase.js`

**Instructions:**
1.  **`contact.html`**: Remove duplicate script tags at the bottom. Ensure only `lang.js`, `contact.js`, and `nav.js` are loaded.
2.  **`js/contact.js`**: Replace entire content. Import `saveContactForm` from `./firebase.js` and handle form submission (UI state only).
3.  **`js/firebase.js`**: Update configuration to use the `civil-contractor-cp` project details (keeping API key placeholder as requested).

## Task 2: Security - Add Subresource Integrity (SRI)
**File:** `index.html` (and any other HTML files using FontAwesome)
**Action:** Replace the existing FontAwesome link with the SRI-secured version.
**Code:**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

## Task 3: Security - Sanitize Translations
**File:** `js/lang.js`
**Action:** Update the `updateContent` function to perform a basic check or sanitization before setting `innerHTML`.
**Context:** Currently, it blindly accepts `value`.
**Instruction:** Add a check to ensure `value` doesn't contain `<script>` tags or `javascript:` handlers, or switch to `textContent` if HTML isn't strictly needed for that specific key.

## Task 4: SEO - Add Open Graph Tags
**File:** `index.html`
**Action:** Add the following meta tags inside the `<head>` section:
```html
<meta property="og:title" content="Home | Krishna Enterprises">
<meta property="og:description" content="Expert civil contracting, fabrication, and interior design services in Navi Mumbai.">
<meta property="og:image" content="images/logo.jpeg">
<meta property="og:url" content="https://krishnaenterprises.com"> <!-- Update with actual URL if known, or leave placeholder -->
<meta property="og:type" content="website">
```

## To: Gemini (Implementation Agent)
### Conversion Upgrades (WhatsApp + Map + Quote Form)
- [ ] **`contact.html`**: Add WhatsApp floating button markup near the end of `<body>` (before scripts).
- [ ] **`contact.html`**: Replace map placeholder with an iframe embed placeholder for Google Maps.
- [ ] **`contact.html`**: Add new form fields with `name` attributes: `phone`, `service`, `siteLocation`, `budget`.
- [ ] **`styles/components.css`**: Add WhatsApp floating button styles.
- [ ] **`js/contact.js`**: Collect new fields and include in the payload passed to `saveContactForm`.
- [ ] **`js/firebase.js`**: Confirm it writes to the `leads` collection and includes `createdAt`.

### WhatsApp CTA Rationale Summary
- **Primary CTA:** WhatsApp is the fastest path to a human response for the target audience.
- **Conversion benefit:** Familiar chat workflow reduces form abandonment and speeds up inquiry.
- **Placement:** Header button + floating button for always-available access.
- **Future enhancements:** Auto-reply, business-hours messaging, CRM sync.

## Conversion Upgrade v1 - Remaining Tasks (If Any)
- [ ] **All HTML pages with top-bar social icons**: Replace the top-bar WhatsApp icon link with the exact URL below and remove the LinkedIn icon.
- [ ] **Optional favicon**: Add favicon markup to all HTML pages if missing.
- [ ] **Optional Firestore rules**: Add spam-safe validation (allowed fields, length checks, createdAt server timestamp).

**Exact WhatsApp Link:**
```txt
https://wa.me/919322874711?text=Hi%20Krishna%20Enterprises%2C%20I%20want%20a%20quote
```

**Top-Bar WhatsApp Icon Snippet (replace link target):**
```html
<a href="https://wa.me/919322874711?text=Hi%20Krishna%20Enterprises%2C%20I%20want%20a%20quote" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
</a>
```

**LinkedIn Icon Removal (delete this block if present):**
```html
<a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
</a>
```

**Optional Favicon Snippet:**
```html
<link rel="icon" href="images/favicon.ico">
```

**WhatsApp Button HTML (snippet only):**
```html
<a class="whatsapp-float" href="https://wa.me/<number>" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
</a>
```

**WhatsApp Button CSS (snippet only):**
```css
.whatsapp-float {
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25d366;
  color: #fff;
  font-size: 24px;
  z-index: 999;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
```

**JS Field Object (snippet only):**
```js
const payload = {
  name,
  email,
  message,
  phone,
  service,
  siteLocation,
  budget
};
```

## Task 5: Footer Upgrade & Mobile UI Improvements
**To:** Codex (Implementation Agent)
**Date:** 2026-02-04

**Files:** All `.html` files (footer section), `styles/layout.css`, `styles/responsive.css`.

**Instructions:**

1.  **Footer Cleanup (All Pages):**
    *   **Remove:** LinkedIn icon/link `<a>...<i class="fa-brands fa-linkedin-in">...</i></a>`.
    *   **Add/Update:** WhatsApp link.
        *   **URL:** `https://wa.me/919322874711?text=Hi%20Krishna%20Enterprises%2C%20I%20have%20a%20query`
        *   **Attributes:** `target="_blank"`, `rel="noopener noreferrer"`, `aria-label="Chat on WhatsApp"`.
    *   **Consolidate:** Ensure the footer HTML structure is consistent across `index.html`, `about.html`, `services.html`, etc.

2.  **Mobile Styling (`styles/responsive.css`):**
    *   **Breakpoints:** Focus on `@media (max-width: 768px)`.
    *   **Footer Columns:** Ensure `.footer-col` (or equivalent) changes to `width: 100%` or `flex-direction: column`.
    *   **Alignment:** `text-align: center` for footer content on mobile.
    *   **Spacing:** Add `margin-bottom: 20px` to footer columns to separate them when stacked.
    *   **Touch Targets:** Ensure links in the footer have `padding: 10px 0` or similar to meet 44px height requirement.

3.  **Verification:**
    *   Test standard viewport widths: 375px (iPhone SE), 414px (iPhone Max).
    *   Ensure no horizontal overflow.

## Task 6: Footer Polish (Alignment & Spacing Refinements)
**To:** Codex (Implementation Agent)
**Date:** 2026-02-04

**Goal:** Minor CSS adjustments to improve visual alignment and vertical rhythm in the footer. **NO REDESIGN.**

**CSS Fixes (Apply to `styles/layout.css`):**

1.  **Left Column (Social Icons Alignment):**
    ```css
    .footer-social {
        padding-left: 2px; /* Fix visual 'indent' caused by circular icons vs heading text start */
    }
    ```

2.  **Right Column (Contact Info Spacing):**
    *   Standardize vertical spacing for contact items to match the 20px margin used for headings/paragraphs.
    ```css
    .site-footer ul li[style*="display: flex"] {
        margin-bottom: 20px !important;
    }
    ```
    *Note: Using !important as these margins are currently inline in the HTML files.*

3.  **Copyright Year:**
    *   Update copyright year to `2026` across all HTML files if not already done.

**Constraints:**
- Do not change HTML structure.
- Do not global-center elements.
- Maintain consistent behavior across desktop and mobile.
