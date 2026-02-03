# Repository Guidelines

## Project Structure & Module Organization
- `src/` is the live site source.
- `src/*.html` are the page templates (e.g., `index.html`, `about.html`, `services.html`).
- `src/styles/` holds CSS stylesheets.
- `src/js/` holds JavaScript behavior.
- `src/images/` contains static images and icons.
- `src/lang/` stores language/translation assets.
- `design/` and `referencecs/` are design/reference materials and are not shipped to production.

## Build, Test, and Development Commands
- No build system is configured; this is a static site.
- For local development, open `src/index.html` directly in a browser or use a static server (example: `npx serve src`).
- There are no automated tests in this repository.

## Coding Style & Naming Conventions
- Use 2 spaces for HTML, CSS, and JS indentation.
- Prefer semantic HTML5 tags (`header`, `nav`, `section`, `footer`).
- Keep CSS class names lowercase with hyphens (`.hero-title`, `.nav-item`).
- Keep JS files modular by page or feature (e.g., `nav.js`, `faq.js`).

## Testing Guidelines
- Manual QA only. Verify at least:
- Mobile and desktop layouts.
- Navigation, hero sections, and footer behavior.
- Cross-page links and anchor targets.

## Commit & Pull Request Guidelines
- Commit messages follow short, imperative statements (examples from history: “Add mobile hamburger menu…”, “Improve mobile responsiveness…”).
- Keep commits focused on one change set.
- PRs should include:
- A short description of the change and impacted pages.
- Before/after screenshots for UI changes.
- Notes on any responsive or accessibility considerations.

## Configuration & Assets
- Optimize images before adding to `src/images/` to keep load times fast.
- Prefer SVG for icons and logos when available.
