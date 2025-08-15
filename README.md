# test-ric

Simple static landing page demonstrating a minimal gallery with click-to-open modal behavior.

## What this project is

A small HTML/CSS static site (Tailwind-like utility classes used in markup) showcasing a hero section, an informational "BEHIND" section, and a Gallery grid of images.

## How to use / test locally

There are two simple ways to run the site locally:

Development — watches Tailwind and serves with live reload

- Install dev dependencies:
  ```
  npm install
  ```
- Start the development environment (runs Tailwind CLI watcher + BrowserSync for live update on save):
  ```
  npm run start
  ```
  This runs both:
  - `npm run dev:css` — builds `public/style.css` from `src/css/input.css` and watches for changes
  - `npm run dev:serve` — serves the project with BrowserSync on port 5173 and reloads on changes

You can also run the tasks separately:

```
npm run dev:css
npm run dev:serve
```

```

## Notes

- The project is static; no build step is required to run the demo.
- Styling is in `public/style.css` and Tailwind-like utility classes are used directly in the HTML.

```
