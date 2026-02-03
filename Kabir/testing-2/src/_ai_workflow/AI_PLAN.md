# AI Project Plan & Analysis

**Status:** Static Website for "Krishna Enterprises"
**Tech Stack:** HTML5, CSS3, Vanilla JS, JSON (i18n)
**Current Phase:** Pre-Launch Optimization (Vercel Preparation)

## 1. High-Level Strategy
The immediate goal is to prepare the codebase for a professional launch by enhancing security, SEO, and maintainability without altering the visual design.

## 2. Master Checklist

### Security
- [ ] **Subresource Integrity (SRI):** Add integrity hashes to external CDNs (FontAwesome) in `index.html` and other pages to prevent script injection.
- [ ] **XSS Prevention:** Implement input sanitization in `js/lang.js` before injecting translation strings via `innerHTML`.
- [ ] **CSP (Optional):** Consider a Content Security Policy for Vercel headers later.

### Firebase Integration
- [ ] **Contact Form:** Refactor `contact.html`, `js/contact.js`, and `js/firebase.js` to modularize logic and correct script loading order.

### SEO & Social Sharing
- [ ] **Open Graph Tags:** Add `og:title`, `og:description`, and `og:image` to `index.html` for better previews on WhatsApp/Facebook/LinkedIn.
- [ ] **Meta Description:** Ensure unique descriptions for key pages.
- [ ] **Sitemap/Robots:** Create `robots.txt`.

### Performance & Core Web Vitals
- [ ] **Layout Shifts (CLS):** Add explicit `width` and `height` attributes to images (especially the logo and hero images).
- [ ] **Lazy Loading:** Add `loading="lazy"` to below-the-fold images.

### Deployment (Vercel)
- [ ] **Configuration:** Verify assets are correctly referenced (relative paths are currently used, which is good).

## 3. Risks & Considerations
- **`innerHTML` Usage:** The translation system uses `innerHTML` to support HTML tags (like `<br>`) in text. This is a potential XSS vector if translation files are compromised.
- **CDN Availability:** Heavy reliance on external CDNs. If they fail, the site loses styling/icons.

## 4. Conversion Upgrades (WhatsApp + Map + Quote Form)

### Steps + Rationale
- [ ] **Add WhatsApp floating CTA (contact page):** A persistent chat CTA reduces friction for quick inquiries and improves mobile conversions.
- [ ] **Replace map placeholder with Google Maps iframe embed:** Shows immediate location context and builds trust without extra clicks.
- [ ] **Expand quote form fields (phone, service, site location, budget):** Captures higher-intent lead data so follow-up is faster and more tailored.
- [ ] **Ensure Firestore write includes required fields and `createdAt`:** Enables lead tracking and sorting by time for operational workflows.

### WhatsApp CTA Summary
- **Primary CTA rationale:** WhatsApp is the fastest path to a real conversation for this audience, so it becomes the primary conversion channel.
- **Local business conversion lift:** Users already trust WhatsApp for quick service questions, reducing form friction and drop-off.
- **Placement:** WhatsApp entry points appear in the header and as a floating button for persistent access across the page.
- **Future improvements:** Add automated reply, respect business hours with messaging, and sync to a CRM for lead tracking.

## 5. Conversion Upgrade v1
**Why WhatsApp is the primary CTA (local service business):**
- Customers already use WhatsApp daily, so it removes friction vs. long forms.
- Faster reply loop builds trust and increases conversion for time-sensitive service needs.

**Completed in v1:**
- Firestore lead capture.
- Quote form fields added (phone, service, site location, budget).
- Google Maps embed added.
- WhatsApp floating button added.

**Remaining (if not yet done):**
- Swap top-bar social icon to WhatsApp across all pages.
- Remove LinkedIn icon.
- Optional: add favicon.
- Optional: tighten Firestore rules to be spam-safe.
