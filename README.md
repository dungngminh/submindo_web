<p align="center">
  <img src="public/app-icon.png" alt="Submindo" width="120" />
</p>
<h1 align="center">Submindo Web</h1>

<p align="center">
  <strong>Landing page for Submindo — Subscription Tracker & AI Spending Analyst</strong><br>
  <strong>Track subscriptions. Cut waste. No surprises.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/dungngminh/submindo_web" alt="GitHub Repo stars" />
  <a href="https://github.com/dungngminh/submindo_web/actions/workflows/deploy.yml"><img src="https://github.com/dungngminh/submindo_web/actions/workflows/deploy.yml/badge.svg" alt="Deploy to GitHub Pages" /></a>
</p>

Landing page for [Submindo](https://dungngminh.github.io/submindo_web) — a subscription tracking app that uses AI to detect spending waste and find cheaper alternatives. Built with Astro 6 and a custom Neobrutalism design system.

<p align="center">
  <img src="public/app-icon.png" alt="Submindo App" width="80" />
</p>

## Features

- **Neobrutalism Design** — Custom design system matching the app's visual identity
- **AI Section** — Showcases spending analysis, efficiency scoring, and alternative finder
- **Brand Marquee** — Auto-scrolling brand tiles sourced from the official asset list at build time
- **Privacy Policy & Terms of Service** — Full legal pages with sticky TOC and scroll highlighting
- **Fully Responsive** — Mobile-first layout across all breakpoints
- **Static & Fast** — Zero client-side JS except essentials; deployed via GitHub Pages

## Project Structure

```text
/
├── public/
│   ├── app-icon.png
│   ├── favicon.png
│   ├── img_komkat.webp
│   └── brands/               # Brand logo images (webp)
├── src/
│   ├── components/           # Navbar, Hero, Features, AISection, ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   └── terms.astro
│   └── styles/
│       └── global.css        # Design tokens + Neobrutalism components
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions.

Live: **https://dungngminh.github.io/submindo_web**

## Built with

- [Astro 6](https://astro.build) — Static site framework
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Manrope](https://fonts.google.com/specimen/Manrope) — Typography

## License

MIT — [KomKat Studio](mailto:komkat.studio@gmail.com)
