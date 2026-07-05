import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, g as renderHead, h as maybeRenderHead, t as defineStyleVars, w as createComponent } from "./server_DNCMc9Z3.mjs";
import "./compiler_Br1ZmTQi.mjs";
import { t as $$Layout } from "./Layout_DyTy68WG.mjs";
import { t as getCollection } from "./_astro_content_B9Jt7R_h.mjs";
//#region src/components/recentpost.astro
createAstro("https://ceti.kaush.com");
var $$Recentpost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Recentpost;
	const { width, height, title, tags = [], description, pubdate, totalwidth, url } = Astro.props;
	const formattedDate = pubdate instanceof Date ? pubdate.toISOString().split("T")[0] : String(pubdate).split("T")[0];
	const $$definedVars = defineStyleVars([{
		width,
		height
	}]);
	return renderTemplate`${maybeRenderHead($$result)}<div id="container"${addAttribute($$definedVars, "style")} data-astro-cid-4isccxww><div id="subcontainer"${addAttribute($$definedVars, "style")} data-astro-cid-4isccxww><span class="date"${addAttribute($$definedVars, "style")} data-astro-cid-4isccxww>${formattedDate}</span><a${addAttribute(url, "href")} class="post_title"${addAttribute($$definedVars, "style")} data-astro-cid-4isccxww>${title}</a><h2 class="desc"${addAttribute($$definedVars, "style")} data-astro-cid-4isccxww>${description}</h2><h3 class="tags"${addAttribute($$definedVars, "style")} data-astro-cid-4isccxww>Tags: ${tags.join(", ")}</h3></div></div>`;
}, "/home/chancellorceti/dev/ceti-blog/src/components/recentpost.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://ceti.kaush.com");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const allPosts = await getCollection("blog");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/blogicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro.generator, "content")}><!--Icons--><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"><link rel="stylesheet" href="/home.css"><title>Chancellor Ceti | Blog on the most interesting things in the world</title>${renderHead($$result)}</head><body><h1 id="title">Chancellor Ceti</h1><p>I'm Chancellor Ceti, reader of much and understand-er of little. STEM interests are physics, math, economics, and Rust programming(🦀🚀). Non-STEM interests are films, literature, music, history, politics (primarily US and Indian), and international relations. My posts here will mostly concern these topics, as well as occasionally griping about how painful life is.</p><p>See about page (top menu) for more details on who exactly created this train wreck of a website and specifics of what my interests are.</p><hr><h2 id="recent_h">Recent Posts</h2><div id="recent">${allPosts.sort((a, b) => b.data.pubDate - a.data.pubDate).slice(0, 100).map((post) => renderTemplate`${renderComponent($$result, "RecentPost", $$Recentpost, {
		"title": post.data.title,
		"description": post.data.description,
		"pubdate": post.data.pubDate,
		"tags": post.data.tags,
		"url": `/posts/${post.id}`
	})}`)}</div></body></html>` })}`;
}, "/home/chancellorceti/dev/ceti-blog/src/pages/index.astro", void 0);
var $$file = "/home/chancellorceti/dev/ceti-blog/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
