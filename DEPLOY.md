# Deployment Guide for Major-Project

## 1. Overview

This project is hosted on GitHub Pages. The repository structure separates the active development source code from the files exposed for deployment.

- **Development Source**: All active development (coding, editing, design) happens inside the `Kabir/testing-2/src/` directory.
- **Deployment Root**: GitHub Pages serves the website from the repository root (`/`).

During deployment, HTML files are copied from the source directory to the root directory, and their asset paths are updated to work correctly on GitHub Pages.

## 2. Development Workflow (DO NOT DEPLOY)

**Where to Work:**
Always edit files inside `Kabir/testing-2/src/`. Do not edit the HTML files in the root directory directly, as they will be overwritten during the next deployment.

**How to Test Locally:**
Open the HTML files inside `Kabir/testing-2/src/` directly in your browser or use a local development server.

**Important Warning:**
Do not change relative paths (e.g., `styles/main.css`) to absolute paths (e.g., `/Major-Project/...`) inside the source folder. Keep them relative so they work on your local machine during development.

## 3. Deployment Workflow (RUN ONLY WHEN READY)

Perform these steps only when you are ready to update the live website on GitHub Pages.

**Step 1: Copy HTML Files**
Copy all HTML files (e.g., `about.html`, `services.html`) from `Kabir/testing-2/src/` to the repository root folder.

**Step 2: Update Asset Paths**
In the **root** copies of the HTML files (not the source files), update all links to CSS, JavaScript, and images to use the absolute GitHub Pages path.

- **Change:** `styles/variables.css`
- **To:** `/Major-Project/Kabir/testing-2/src/styles/variables.css`

- **Change:** `js/script.js`
- **To:** `/Major-Project/Kabir/testing-2/src/js/script.js`

- **Change:** `images/logo.jpg`
- **To:** `/Major-Project/Kabir/testing-2/src/images/logo.jpg`

*Note: Do not change the navigation links (e.g., `href="about.html"`).*

**Step 3: Push to GitHub**
Commit and push the changes to the `main` branch. GitHub Pages will detect the changes in the root directory and update the site.

## 4. Common Mistakes

- **Using Windows Paths:** Avoid using backslashes (`\`). Always use forward slashes (`/`) for web paths.
- **Using `../` Paths:** Do not use `../` to navigate up directories in the deployed files. Use the absolute path `/Major-Project/...`.
- **Editing Root Files:** If you edit files in the root, your changes will be lost the next time you copy files from the source directory.
- **Uploading Big Files:** Do not push `.zip`, `.rar`, or large video files to the repository.

## 5. Pre-Deployment Checklist

Before you push your code, check the following:

- [ ] All HTML pages have been copied to the root directory.
- [ ] Asset paths (CSS, JS, Images) in the root files start with `/Major-Project/`.
- [ ] Navigation links work correctly between pages.
- [ ] The site works locally if you simulate the production path or open the root files.
- [ ] GitHub Pages settings are configured to serve from the `main` branch root.

## 6. When to Re-Deploy

You should run the deployment steps (copy and path fix) whenever:

- You have created a new HTML page.
- You have renamed folders or structured assets differently.
- You are ready to release a final version of the website.
