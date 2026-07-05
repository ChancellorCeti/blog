import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, c as renderSlot, d as renderTemplate, g as renderHead, w as createComponent } from "./server_DNCMc9Z3.mjs";
import "./compiler_Br1ZmTQi.mjs";
import { t as $$Header } from "./header_Bv5Efpp_.mjs";
//#region src/pages/layouts/Layout.astro
var Layout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Layout,
	file: () => $$file,
	url: () => $$url
});
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><!-- Google tag (gtag.js) --><script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-HTBC8FKTFB"><\/script><script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HTBC8FKTFB');
<\/script><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Chancellor Ceti's blog on physics, math, coding, film, literature, politics, and history—plus whatever else inspires him"><meta name="author" content="Chancellor Ceti"><meta property="og:site_name" content="Chancellor Ceti's Blog"><meta property="og:type" content="website"><link rel="icon" type="image/svg+xml" href="/blogicon.png"><link rel="alternate" type="application/rss+xml" title="Chancellor Ceti's Blog" href="/rss.xml">${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/chancellorceti/dev/ceti-blog/src/pages/layouts/Layout.astro", void 0);
var $$file = "/home/chancellorceti/dev/ceti-blog/src/pages/layouts/Layout.astro";
var $$url = "/layouts/Layout";
//#endregion
export { Layout_exports as n, $$Layout as t };
