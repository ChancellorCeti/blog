import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as getCollection } from "./_astro_content_B9Jt7R_h.mjs";
import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
//#region src/pages/rss.xml.js
var rss_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var parser = new MarkdownIt();
async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "Chancellor Ceti's Blog",
		description: "Chancellor Ceti's blog on physics, math, coding, film, literature, politics, and history—plus whatever else inspires him",
		site: context.site,
		items: blog.map((post) => ({
			link: `/blog/${post.id}/`,
			content: sanitizeHtml(parser.render(post.body), { allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]) }),
			...post.data
		}))
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/rss.xml@_@js
var page = () => rss_xml_exports;
//#endregion
export { page };
