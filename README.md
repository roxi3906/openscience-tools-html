# AIPOCH Open Science

Source code for the AIPOCH Open Science website.

- Production domain: <https://open-science.app>
- Current hosted preview: <https://aipoch-open-science.theresayao0614.chatgpt.site>
- Product overview: <https://aipoch.com/open-science/overview?lang=en>

## Local development

Node.js `>=22.13.0` is required.

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in a browser.

## Validation

```bash
npm test
```

The test command creates a production build and verifies the rendered pages,
metadata, sitemap, and download page.

## Project structure

- `app/` — page source, styles, metadata, sitemap, and robots configuration
- `public/` — images, logos, fonts, and social preview assets
- `tests/` — rendered-page checks
- `worker/` and `build/` — Vinext/Cloudflare build integration

The public site supports English and Chinese content, responsive layouts, and
interactive Open Science workflow sections.
