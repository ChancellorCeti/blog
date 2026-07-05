import { d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DNCMc9Z3.mjs";
import "./compiler_Br1ZmTQi.mjs";
//#region src/components/header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">${maybeRenderHead($$result)}<div id="headercontainer"><a href="/" class="linkcontainer"><span class="material-symbols-outlined menu-symbol"> home </span><h5 class="header_text">Home</h5></a><a href="/tags" class="linkcontainer"><span class="material-symbols-outlined menu-symbol"> feed </span><h5 class="header_text">Search Posts by Tag</h5></a><a href="/about" class="linkcontainer"><span class="material-symbols-outlined menu-symbol"> info </span><h5 class="header_text">About Me</h5></a></div>`;
}, "/home/chancellorceti/dev/ceti-blog/src/components/header.astro", void 0);
//#endregion
export { $$Header as t };
