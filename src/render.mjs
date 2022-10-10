import fs from "fs";
import prettier from "prettier";
import removeHtmlComments from "remove-html-comments";
import { render } from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import { html } from "lit";
import { works } from "./works.mjs";

const templateHtml = fs.readFileSync("./src/template.html", "utf8");

const workbox = (work) => html`<div
  class="group relative aspect-square text-white"
>
  <img
    class="absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-all duration-500"
    src="${work.image}"
  />
  <img
    class="absolute top-0 left-0 w-full h-full brightness-75 opacity-0 group-hover:opacity-100 transition-all duration-500"
    src="${work.hoverImage}"
  />
  <div
    class="absolute w-full h-full hidden group-hover:flex  group-hover:opacity-100 items-end justify-center select-none top-0 left-0"
  >
    <a href="${work.link}" target="_blank" class="bg-black/40 w-full py-2">
      <h2 class="text-center text-3xl text-slate-100">${work.title}</h2>
      <p class="text-center text-sm">${work.desc}</p>
    </a>
  </div>
</div>`;

const app = html`<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
>
  ${works.map((work) => workbox(work))}
</div>`;

const renderResult = render(app);

let result = "";
for await (const chunk of renderResult) {
  result += chunk;
}

try {
  fs.writeFileSync(
    "./index.html",
    prettier.format(
      removeHtmlComments(templateHtml.replace("%CONTENT%", result)).data,
      {
        parser: "html",
        printWidth: 120,
      }
    )
  );
} catch (err) {
  console.error(err);
}
