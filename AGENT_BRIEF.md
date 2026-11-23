# Cursor agent brief — free-color-picker

Target: https://free-color-picker.web-free.site
Repo name (wrangler `name`): `free-color-picker`
English name: "Free Color Picker". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is a **color picker and converter** (HEX, RGB, HSL/HSV, and similar), with optional **pick from an image** and a simple palette. All work stays in the browser. No accounts.

## Recommended base (use this)

- Repo: https://github.com/imathis/color-picker
- License: MIT (keep `LICENSE`, credit Brandon Mathis / colorpicker.dev in the footer and on `/about`)
- Stars: 502
- Last commit: 21 Feb 2026, 18:01 Africa/Kigali — `c52072c487` on `master`
- Official demo: `https://colorpicker.dev`
- Stack: Vite, React, TypeScript, culori, zustand. A complete multi-model color picker website. `npm run build` emits a static `dist/`.
- Cloudflare: yes — static assets / Workers with assets. You must add prerendered HTML for every public page (no bare SPA fallback).
- Verification (this box, 23 Nov 2026, Africa/Kigali): GitHub API. `LICENSE` is a real MIT file (Copyright (c) 2011 Brandon Mathis). Declared dependencies are culori/react/zustand — no server, no paid API.
- Why this one: MIT with a real `LICENSE` file, a complete working website (502 stars, still updated in 2026), and the exact "color picker" product users search for.

## Backup (MIT; also a complete small site)

- Repo: https://github.com/dli7319/html-color-picker
- License: MIT (LICENSE file, Copyright (c) 2021 David Li)
- Stars: 3
- Last commit: 29 Oct 2026, 16:08 Africa/Kigali — `e14a924238` on `master`
- Official demo: `https://dli7319.github.io/html-color-picker/`
- Lit + color-convert: HSV/HSL picker, HEX/RGB converter, **image sampling**, interpolation. A solid fallback if the recommended base is hard to prerender.

`simonwep/pickr` (MIT, 4495 stars) is a **library**, not a product site. You may use it as a dependency, not as the imported app.

## Do not use these

- Desktop-only color pickers, Photoshop plugins, or npm libraries shipped as the entire site with no prerendered pages.
- Tools that require an account or a screenshot server.

## What to build on top of imathis/color-picker

1. Import the base into this repo, keep the MIT license, and credit Brandon Mathis / colorpicker.dev. Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them).
2. Rebrand to "Free Color Picker". English primary. No FR/SW translations of the site. The home tool lets the user pick a color and copy HEX (and RGB/HSL). A "pick from image" path is a plus if already present or easy with a local file input. A small palette export (CSS/JSON) is welcome. Drop any "colorpicker.dev" branding that would confuse the new site.
3. Keep everything 100% in the browser. No accounts, no paid APIs, no API keys. Local image sampling only — no screenshot of other sites via a server.
4. Adsterra only, never AdSense. Use **only** the placeholder keys in this brief (or real keys if a follow-up provides them). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `public/ads.json`. Never set COEP/COOP headers. Ads must not break picking or copy.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-color-picker.web-free.site`; English how-to pages, at least `/hex-color-picker`, `/color-picker-from-image`, and `/rgb-to-hex` (each with its own title, description and canonical); prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-color-picker.web-free.site`. No French landing page.
6. Footer: credit the upstream project, and add a link back to the hub `https://web-free.site/?ref=color-picker`.
7. On every prerendered HTML page, before `</body>`, add the More free tools block and the Cloudflare Web Analytics beacon (see below). Implement this with `scripts/inject-more-tools.mjs` hooked into `postbuild` or the end of `npm run build`, so a later rebuild cannot drop the home-page snippets. Do not rely on a one-off manual edit of `dist/` / `out/`.
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the nine other sites in this batch (50 tools in total). Show **Free Color Picker** as bold text, not a self-link. Every outbound tool/hub link must carry `?ref=color-picker`.
     - **Documents & writing:** Free Word Counter (`https://free-word-counter.web-free.site/?ref=color-picker`), Free PDF Converter (`https://free-pdf-converter.web-free.site/?ref=color-picker`), Free CV Maker (`https://free-cv-maker.web-free.site/?ref=color-picker`), Free Invoice Generator (`https://free-invoice-generator.web-free.site/?ref=color-picker`), Free Typing Test (`https://free-typing-test.web-free.site/?ref=color-picker`), Free Signature Generator (`https://free-signature-generator.web-free.site/?ref=color-picker`), Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/?ref=color-picker`).
     - **Images & codes:** Free QR Code Creator (`https://free-qr-code-creator.web-free.site/?ref=color-picker`), Free Image Resizer (`https://free-image-resizer.web-free.site/?ref=color-picker`), Free Image to Text (`https://free-image-to-text.web-free.site/?ref=color-picker`), Free Background Remover (`https://free-background-remover.web-free.site/?ref=color-picker`), Free Image Compressor (`https://free-image-compressor.web-free.site/?ref=color-picker`), Free HEIC to JPG Converter (`https://free-heic-to-jpg.web-free.site/?ref=color-picker`), Free Image Upscaler (`https://free-image-upscaler.web-free.site/?ref=color-picker`), Free Passport Photo Maker (`https://free-passport-photo-maker.web-free.site/?ref=color-picker`), Free PNG to SVG Converter (`https://free-png-to-svg.web-free.site/?ref=color-picker`), Free Meme Generator (`https://free-meme-generator.web-free.site/?ref=color-picker`), **Free Color Picker**, Free GIF Maker (`https://free-gif-maker.web-free.site/?ref=color-picker`), Free Photo Editor (`https://free-photo-editor.web-free.site/?ref=color-picker`), Free Logo Maker (`https://free-logo-maker.web-free.site/?ref=color-picker`).
     - **Calculators & currency:** Free Online Calculator (`https://free-online-calculator.web-free.site/?ref=color-picker`), Free Currency Converter (`https://free-currency-converter.web-free.site/?ref=color-picker`), Free Unit Converter (`https://free-unit-converter.web-free.site/?ref=color-picker`), Free Loan Calculator (`https://free-loan-calculator.web-free.site/?ref=color-picker`), Free Age Calculator (`https://free-age-calculator.web-free.site/?ref=color-picker`), Free Percentage Calculator (`https://free-percentage-calculator.web-free.site/?ref=color-picker`), Free BMI Calculator (`https://free-bmi-calculator.web-free.site/?ref=color-picker`).
     - **Text & SEO:** Free AI Humanizer (`https://free-ai-humanizer.web-free.site/?ref=color-picker`), Free SEO Generator (`https://free-seo-generator.web-free.site/?ref=color-picker`), Free Backlink Generator (`https://free-backlink-generator.web-free.site/?ref=color-picker`), Free JSON Formatter (`https://free-json-formatter.web-free.site/?ref=color-picker`), Free Text to Speech (`https://free-text-to-speech.web-free.site/?ref=color-picker`), Free Speech to Text (`https://free-speech-to-text.web-free.site/?ref=color-picker`), Free Diff Checker (`https://free-diff-checker.web-free.site/?ref=color-picker`), Free Citation Generator (`https://free-citation-generator.web-free.site/?ref=color-picker`).
     - **Audio & video:** Free Video to MP3 Converter (`https://free-video-to-mp3.web-free.site/?ref=color-picker`), Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/?ref=color-picker`), Free Screen Recorder (`https://free-screen-recorder.web-free.site/?ref=color-picker`), Free Video Compressor (`https://free-video-compressor.web-free.site/?ref=color-picker`), Free Video to GIF Converter (`https://free-video-to-gif.web-free.site/?ref=color-picker`), Free Audio Converter (`https://free-audio-converter.web-free.site/?ref=color-picker`), Free Video Converter (`https://free-video-converter.web-free.site/?ref=color-picker`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/?ref=color-picker`).
     - **Test data:** Free Fake Address Generator (`https://free-fake-address-generator.web-free.site/?ref=color-picker`), Free Fake Name Generator (`https://free-fake-name-generator.web-free.site/?ref=color-picker`).
     - **Security & passwords:** Free Password Generator (`https://free-password-generator.web-free.site/?ref=color-picker`).
     - **Time:** Free Time Zone Converter (`https://free-time-zone-converter.web-free.site/?ref=color-picker`).
     - **Drawing:** Free Whiteboard (`https://free-whiteboard.web-free.site/?ref=color-picker`).
     - **Random & pickers:** Free Spin Wheel (`https://free-spin-wheel.web-free.site/?ref=color-picker`).
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-color-picker"`, `[assets]` pointing at the static build output (`dist` or `out`). Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-color-picker.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box. Add a `.assetsignore` so Worker assets do not publish `AGENT_BRIEF.md`, `wrangler.toml`, `package.json`, `package-lock.json`, `.git/`, `node_modules/`, or other source/config files.
9. Test: production build, run locally, pick a color, copy HEX and RGB, try image sampling if present, check mobile at 390px, fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Real Adsterra codes are not ready yet (sites are not live). **Do not invent real-looking keys.** Wire all 10 units and `public/ads.json` with the exact placeholder strings below (32 characters each, prefix `wf23bplaceholder`). After a browser agent writes real keys to `adsterra-codes.md`, a later swap (or a follow-up to you with real keys) will replace them before deploy.

Code formats (KEY = the 32-char placeholder, later a 32-hex hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-color-picker.web-free.site — site ID 6222781
Popunder b071562449a4fbb21de9917a2e4810af
Native Banner 02a8b6a1e82203a7229a83c08a898de8
Smartlink d237b6c36e5330912711ab8cebea8feb
Social Bar e72fd1fc010185637550ee29361bdc9f
468x60 d78057ea32022e123e4ef8b65f4431d1
160x300 f8a9011bf3a6605e8fbfb811e0dce3e8
320x50 7146f3ce562e180a4aff33c15e4d7334
300x250 fd847445faf7afb553a6182d8a80fccb
160x600 ff3fd4cfb6ac263e9231eb08681e4727
728x90 4c1619f74d0072645cc5da333337f98d
