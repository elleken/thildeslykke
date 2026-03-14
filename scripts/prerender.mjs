import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const distIndexPath = resolve(process.cwd(), "dist", "index.html");
const serverEntryPath = resolve(process.cwd(), "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntryPath).href);
const appHtml = render("/");
const normalizedAppHtml = appHtml.replaceAll('src="/assets/', 'src="./assets/');

const template = readFileSync(distIndexPath, "utf-8");
const rootPlaceholder = /<div id="root"><\/div>/;

if (!rootPlaceholder.test(template)) {
  throw new Error(
    "Prerender failed: root placeholder was not found in dist/index.html",
  );
}

const prerenderedHtml = template.replace(
  rootPlaceholder,
  `<div id="root">${normalizedAppHtml}</div>`,
);

writeFileSync(distIndexPath, prerenderedHtml, "utf-8");
console.log(
  "Prerender complete: dist/index.html now contains server-rendered markup.",
);
