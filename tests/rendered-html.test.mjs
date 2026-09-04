import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders a complete download page without client JavaScript", async () => {
  const response = await render("/open-science/download");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Download Open Science for macOS, Windows and Linux \| AIPOCH<\/title>/,
  );
  assert.match(html, /Download Open Science/);
  assert.match(html, /for macOS, Windows and Linux/);
  assert.match(html, /Stable [\s\S]{0,30}v\d+\.\d+\.\d+/);
  assert.match(html, /Apple Silicon/);
  assert.match(html, /Windows x64/);
  assert.match(html, /AppImage/);
  assert.match(html, /Debian package/);
  assert.match(html, /[a-f0-9]{64}/);
  assert.doesNotMatch(html, /Loading downloads/i);

  const assetLinks = html.match(
    /https:\/\/github\.com\/aipoch\/open-science\/releases\/download\/[^"]+/g,
  );
  assert.ok(assetLinks && new Set(assetLinks).size >= 6);

  for (const eventName of [
    "download_mac_arm64",
    "download_mac_x64",
    "download_windows_x64",
    "download_linux_appimage",
    "download_linux_deb",
  ]) {
    assert.match(html, new RegExp(`data-analytics-event="${eventName}"`));
  }
});

test("publishes download metadata and the Open Science guide sitemap entry", async () => {
  const pageResponse = await render("/open-science/download");
  const pageHtml = await pageResponse.text();
  assert.match(
    pageHtml,
    /<link rel="canonical" href="https:\/\/aipoch\.com\/open-science\/download"\/?>/,
  );
  assert.match(pageHtml, /"@type":"SoftwareApplication"/);
  assert.match(pageHtml, /"@type":"FAQPage"/);

  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  assert.match(
    sitemapResponse.headers.get("content-type") ?? "",
    /application\/xml/i,
  );
  const sitemapXml = await sitemapResponse.text();
  assert.match(
    sitemapXml,
    /<loc>https:\/\/open-science\.app\/<\/loc>/,
  );
});

test("publishes distinct metadata and structured data for the Open Science guide", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(
    html,
    /<title>Open Science: Tools and Workflows for Reproducible Research \| AIPOCH<\/title>/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/open-science\.app"\/?>/,
  );
  assert.match(html, /Open Science for[\s\S]{0,80}Reproducible Research/);
  assert.match(html, /"@type":"CollectionPage"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /Does Open Science guarantee reproducible results\?/);
});
