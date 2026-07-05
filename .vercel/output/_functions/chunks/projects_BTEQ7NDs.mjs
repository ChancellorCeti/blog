import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as renderComponent, d as renderTemplate, h as maybeRenderHead, w as createComponent } from "./server_DNCMc9Z3.mjs";
import "./compiler_Br1ZmTQi.mjs";
import { t as $$Layout } from "./Layout_DyTy68WG.mjs";
//#region src/pages/projects.astro
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projects,
	file: () => $$file,
	url: () => $$url
});
var $$Projects = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>My Projects</h1><div id="projects-container"><div class="project-container"><h2>Ensimismarse</h2><p>Rust library that allows integration and differentation of many mathematical expressions, as well as functions to simplify and evaluate expressions </p><a class="github-link" href="https://github.com/ChancellorCeti/ensimismarse">Link to Github repository</a></div><div class="project-container"><h2>SlurpSlurp Regression</h2><p>Multivariable nonlinear regression library written in Rust, utilizes the ensimismarse library (also created by me) </p><a class="github-link" href="https://github.com/ChancellorCeti/slurpslurp_regression">Link to Github repository</a></div><div class="project-container"><h2>White Rabbit</h2><p>A simple email server and terminal email client written in C</p><a class="github-link" href="https://github.com/ChancellorCeti/white-rabbit">Link to Github repository</a></div><div class="project-container"><h2>Blocktanks Analytics</h2><p>Fetches data on players in blocktanks matches and maps being played every 5 minutes and stores the data in a database, from which it can extracted later in any format for data analysis. No longer functional due to the game receiving a privacy update, but the code is potentially useful for staff members with the power to still access the API. Also it's just a cool proof of concept.</p><a class="github-link" href="https://github.com/ChancellorCeti/blocktanks-analytics">Link to Github repository</a></div><div class="project-container"><h2>Computational Essay on the Thomson Problem</h2><p> Extends the Thomson problem to seek the equilibrium position of point charges on the surface of spheres, ellipsoids, polyhedra, and tori. Additionally explores different methods for solving the problem and examines what happens to the equilibrium position in the presence of a uniform electric field. Finds an accurate and efficient method for finding equilibrium configurations on different surfaces and reveals interesting patterns and geometric structures in the solutions.</p><a class="github-link" href="https://community.wolfram.com/groups/-/m/t/3499950">Link to Wolfram Community Post</a></div><div class="project-container"><h2>Research Paper I Co-authored on Results of a Search for Undiscovered Radio Pulsars</h2><p>Used Fast Folding Algorithm to look for long-period pulsars in unidentified radio sources. Found no pulsars but established upper limit on dispersion measure in our search to inform future efforts.</p><a class="github-link" href="https://community.wolfram.com/groups/-/m/t/3499950">Link to Paper</a></div></div>` })}`;
}, "/home/chancellorceti/dev/ceti-blog/src/pages/projects.astro", void 0);
var $$file = "/home/chancellorceti/dev/ceti-blog/src/pages/projects.astro";
var $$url = "/projects";
//#endregion
//#region \0virtual:astro:page:src/pages/projects@_@astro
var page = () => projects_exports;
//#endregion
export { page };
