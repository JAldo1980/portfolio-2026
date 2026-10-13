# James Alderman · Portfolio (2026 redesign)

React 18 + Vite + Tailwind CSS. Fonts are self-hosted via Fontsource (Archivo, Instrument Sans, Roboto Mono).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit content

Almost everything lives in `src/data/projects.js`:

- `featured`: the case study (currently The Circle Line)
- `builds`: the six project cards
- `archive`: the compact list of practice builds and tools
- `contact`: email, LinkedIn, GitHub

Screenshots are in `public/work/` (504×255 crops). Swap in sharper ones at the same 2:1 ratio
(around 1600×810) whenever you can, especially `circle-line.webp`.

## Deploy to Netlify

Either connect this folder's GitHub repo in Netlify (build command `npm run build`, publish directory `dist`),
or run `npm run build` and drag the `dist` folder onto your site's Deploys page.

The social share image is `public/og-image.png`. If the site URL changes, update the `og:image` and `og:url`
tags in `index.html`.
