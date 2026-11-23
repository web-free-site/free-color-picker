# Free Color Picker

Browser-based color picker and converter for [free-color-picker.web-free.site](https://free-color-picker.web-free.site).

- **Base:** [imathis/color-picker](https://github.com/imathis/color-picker) (MIT) — [colorpicker.dev](https://colorpicker.dev)
- **Stack:** Vite, React, TypeScript, culori, zustand

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces static output in `dist/` with prerendered HTML per route, `sitemap.xml`, injected hub footer, and Adsterra placeholder slots.

## Deploy

Configured for Cloudflare Workers static assets via `wrangler.toml` (deploy is manual outside this repo).

Agent instructions: `AGENT_BRIEF.md`.