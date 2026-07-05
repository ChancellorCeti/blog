import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, a as renderComponent, c as renderSlot, d as renderTemplate, g as renderHead, w as createComponent } from "./server_DNCMc9Z3.mjs";
import "./compiler_Br1ZmTQi.mjs";
import { t as $$Layout } from "./Layout_DyTy68WG.mjs";
//#region src/pages/layouts/MarkdownPostLayout.astro
var MarkdownPostLayout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$MarkdownPostLayout,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ceti.kaush.com");
var $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MarkdownPostLayout;
	const { frontmatter } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`<html><head><link rel="icon" type="image/svg+xml" href="/blogicon.png"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>` })}`;
}, "/home/chancellorceti/dev/ceti-blog/src/pages/layouts/MarkdownPostLayout.astro", void 0);
var $$file = "/home/chancellorceti/dev/ceti-blog/src/pages/layouts/MarkdownPostLayout.astro";
var $$url = "/layouts/MarkdownPostLayout";
//#endregion
//#region \0virtual:astro:page:src/pages/layouts/MarkdownPostLayout@_@astro
var page = () => MarkdownPostLayout_exports;
//#endregion
export { page };
