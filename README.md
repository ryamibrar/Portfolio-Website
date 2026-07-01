# Ryam Ibrar Portfolio Website

A creative, polished, local-ready static portfolio website for Ryam Ibrar. It is designed to present UX, visual design, branding, marketing collateral, website redesign, one-pager systems, deck templates, proposal covers, and event/banner assets as strategic case studies.

## What is included

```text
ryam-portfolio-site/
├── index.html
├── project.html
├── styles.css
├── script.js
├── data/
│   └── projects.js
├── assets/
│   ├── favicon.svg
│   ├── og-preview.svg
│   └── Ryam-Ibrar-Resume.pdf
├── README.md
└── DEPLOYMENT.md
```

## How to run locally

Because this is a static HTML/CSS/JavaScript website, you can open `index.html` directly in your browser.

For the best local preview, run a local server:

### Option 1: Python local server

```bash
cd ryam-portfolio-site
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: VS Code Live Server

1. Open the folder in VS Code.
2. Install the “Live Server” extension.
3. Right-click `index.html`.
4. Choose “Open with Live Server.”

## How to edit projects

Open:

```text
data/projects.js
```

Edit the `featuredProjects` array for the main case studies and the `archiveItems` array for smaller work samples.

Each featured project controls:

- Project title
- Summary
- Role
- Tools
- Timeline
- Challenge
- Process steps
- Design solution
- Impact
- Reflection
- Placeholder visual label

## How to replace placeholders with real visuals

The current design uses elegant coded placeholder visuals so you can safely launch a structure before adding confidential images.

When you have approved screenshots or images:

1. Add them to the `assets/` folder.
2. Replace the placeholder visual markup in `script.js` inside the `caseVisual()` function.
3. Use compressed JPG, PNG, WebP, or SVG files.
4. Keep confidential Archaius information redacted.

Suggested image naming:

```text
assets/archaius-sitemap.webp
assets/brand-guidelines-preview.webp
assets/one-pager-system.webp
assets/proposal-cover-series.webp
```

## Confidentiality reminder

For defense technology or internal company work, avoid publishing sensitive details. Use approved screenshots, redacted visuals, blurred text, cropped layouts, or abstracted mockups. The portfolio should focus on design process, communication strategy, hierarchy, and visual systems.

## Recommended custom domain

Examples:

```text
ryamibrar.com
ryamibrardesign.com
ryam.design
ryamportfolio.com
```

## Contact form note

The included contact form uses a basic `mailto:` action. For a live production website, you may want to connect the form through Netlify Forms, Formspree, Basin, or another form handler.
