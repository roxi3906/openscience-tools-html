import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const clientRoot = join(projectRoot, "dist", "client");
const exportRoot = join(projectRoot, "html-export-v2");
const sourceUrl = process.env.OPENSCIENCE_EXPORT_URL || "http://localhost:3000/v2";

await readFile(join(clientRoot, "vinext-client-entry-manifest.json"), "utf8");

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Could not render ${sourceUrl}: ${response.status}`);
}

let html = await response.text();

html = html.replace(
  /<script>\(function\(\)\{function c\(\)[\s\S]*?<\/script>\s*(?=<\/body>)/,
  "",
);

html = html
  .replaceAll('="/_next/', '="./_next/')
  .replaceAll('="/assets/', '="./assets/')
  .replaceAll('="/og-v2.png', '="./og-v2.png')
  .replaceAll("url(/_next/", "url(./_next/")
  .replaceAll('\\"/_next/', '\\"./_next/')
  .replaceAll('\\"/assets/', '\\"./assets/')
  .replaceAll('\\"/og-v2.png', '\\"./og-v2.png');

await mkdir(exportRoot, { recursive: true });
await cp(clientRoot, exportRoot, { recursive: true, force: true });
await writeFile(join(exportRoot, "index.html"), html, "utf8");
await writeFile(
  join(exportRoot, "README.txt"),
  [
    "AIPOCH Open Science V2 — static HTML export",
    "",
    "Upload the complete contents of this folder to the root of a static host.",
    "Keep index.html, _next/, assets/, and og-v2.png together.",
    "",
    "The export includes the English/Chinese switch, responsive layout, and product comparison table.",
  ].join("\n"),
  "utf8",
);

console.log(join(exportRoot, "index.html"));
