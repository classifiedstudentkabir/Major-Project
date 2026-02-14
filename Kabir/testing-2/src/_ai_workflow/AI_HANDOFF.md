# AI Handoff Instructions
**To:** Codex (Implementation Agent)
**From:** Reviewer AI
**Date:** 2026-02-14

## Review Summary (Status: PASS)
The content and polish tasks from the previous review have been implemented successfully. The placeholder text is gone, and the new, professional copy has been correctly added to the `lang/en.json`, `lang/hi.json`, and `lang/mr.json` files.

The site is now ready for the next phase of pre-launch optimization.

---

## Task 1 (Priority): Security Hardening

**Goal:** Reduce the risk of cross-site scripting (XSS) and attacks via external scripts. This is a high-priority task before launch.

**Files to Update:**
- `js/lang.js`
- All `.html` files (to add SRI)

**Instructions:**

1.  **Add Subresource Integrity (SRI):**
    -   In all `.html` files, find the link to FontAwesome's CSS.
    -   Replace the existing `<link>` tag with the following one, which includes the `integrity` and `crossorigin` attributes. This ensures the loaded file hasn't been tampered with.
    ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    ```

2.  **Sanitize `innerHTML` injections:**
    -   The `js/lang.js` file uses `innerHTML` to render translations, which is a potential XSS risk if the JSON files were ever compromised.
    -   **Task:** Create a simple sanitization function and use it before setting `innerHTML`.
    -   **Add this function** to the top of `js/lang.js`:
        ```javascript
        function sanitize(str) {
            const temp = document.createElement('div');
            temp.textContent = str;
            return temp.innerHTML;
        }
        ```
    -   **Modify the `updateContent` function:** Change `element.innerHTML = value;` to use the sanitizer.
        ```javascript
        // Inside the for...in loop of updateContent
        if (element) {
            // Find all nested elements with data-i18n
            const nestedElements = element.querySelectorAll('[data-i18n]');
            if (nestedElements.length > 0) {
                // If there are nested elements, just set the text content of the parent
                element.innerHTML = sanitize(value); 
            } else {
                element.textContent = value;
            }
        }
        ```
    - **Correction:** The above logic is flawed. A simple `textContent` assignment will break HTML tags inside translations. The `sanitize` function is a good first step, but a more robust DOM-based replacement is better.
    - **Revised Instruction for `js/lang.js`:** Replace the `updateContent` function's `element.innerHTML = value;` line with a more careful approach. Let's stick to a simpler sanitization that prevents scripts.
        ```javascript
        // A simple sanitizer to prevent script execution
        function sanitize(html) {
            const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
            while (SCRIPT_REGEX.test(html)) {
                html = html.replace(SCRIPT_REGEX, "");
            }
            return html;
        }

        // In updateContent function...
        if (element) {
            element.innerHTML = sanitize(value);
        }
        ```
    *(Self-correction: The second sanitizer is more targeted and safer than the `textContent` approach which breaks valid HTML in translations. I will propose this one.)*

---

## Task 2 (Low Priority): SEO & Metadata

**Goal:** Improve how the site appears in search results and when shared on social media.

**File:** `index.html`

**Instructions:**
- Add the following meta tags inside the `<head>` section to implement Open Graph tags for social sharing.

```html
<meta property="og:title" content="Home | Krishna Enterprises">
<meta property="og:description" content="Expert civil contracting, fabrication, and interior design services in Navi Mumbai.">
<meta property="og:image" content="https://www.krishnaenterprises.com/images/logo.jpeg">
<meta property="og:url" content="https://www.krishnaenterprises.com">
<meta property="og:type" content="website">
```
**Note:** The image and URL paths are placeholders using an assumed final domain. Update them if the actual domain is known. For now, using an absolute placeholder is fine.

---
## What Reviewer AI Will Review Next
- Verification that all `.html` files have SRI hashes on external CSS.
- Review of the sanitization function implemented in `js/lang.js`.
- Confirmation that Open Graph meta tags are present in `index.html`.
