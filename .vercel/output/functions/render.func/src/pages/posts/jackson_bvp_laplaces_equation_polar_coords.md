---
layout: '../layouts/MarkdownPostLayout.astro'
title: "Solving an Epic Boundary Value Problem from J.D. Jackson’s 'Classical Electrodynamics' – Laplace’s Equation in Polar Coordinates!"
pubDate: 2025-07-20
description: "What the title says -- lots of differential equation magic, some trickery with complex variables, a cool-looking solution"
author: 'Chancellor Ceti'
tags: ["math","physics","electrodynamics"]
---
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Chancellor Ceti" />
  <meta name="dcterms.date" content="2025-07-20" />
  <title>Solving an Epic Boundary Value Problem from J.D. Jackson’s &quot;Classical Electrodynamics&quot; – Laplace’s Equation in Polar Coordinates!</title>
     <link rel="icon" type="image/svg+xml" href="/blogicon.png" />
  <style>
    html {
      color: #cdd6f4;
      background-color: #000500 ;
    }
    body {
      margin: 0 auto;
      hyphens: auto;
      overflow-wrap: break-word;
      background-color:#000500;
      text-rendering: optimizeLegibility;
      font-kerning: normal;
      font-size:18px;
    }
    *{
        color:#cdd6f4;
    }
    #sub_body{
        padding-left: 10vw;
      padding-right: 10vw;
      padding-top: 50px;
      padding-bottom: 50px;
    }
   @media (max-width: 600px) {
      body {
        font-size: 0.9em;
        padding: 12px;
      }
      h1 {
        font-size: 1.8em;
      }
    }
    @media print {
      html {
        background-color: white;
      }
      body {
        background-color: transparent;
        color: black;
        font-size: 12pt;
      }
      p, h2, h3 {
        orphans: 3;
        widows: 3;
      }
      h2, h3, h4 {
        page-break-after: avoid;
      }
    }
    p {
      margin: 1em 0;
    }
   img {
      max-width: 100%;
    }
    svg {
      height: auto;
      max-width: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.4em;
    }
    h5, h6 {
      font-size: 1em;
      font-style: italic;
    }
    h6 {
      font-weight: normal;
    }
    ol, ul {
      padding-left: 1.7em;
      margin-top: 1em;
    }
    li > ol, li > ul {
      margin-top: 0;
    }
    blockquote {
      margin: 1em 0 1em 1.7em;
      padding-left: 1em;
      border-left: 2px solid #e6e6e6;
      color: #606060;
    }
    code {
      font-family: Menlo, Monaco, Consolas, 'Lucida Console', monospace;
      font-size: 85%;
      margin: 0;
      hyphens: manual;
    }
    pre {
      margin: 1em 0;
      overflow: auto;
    }
    pre code {
      padding: 0;
      overflow: visible;
      overflow-wrap: normal;
    }
    .sourceCode {
     background-color: transparent;
     overflow: visible;
    }
    hr {
      background-color: #1a1a1a;
      border: none;
      height: 1px;
      margin: 1em 0;
    }
    table {
      margin: 1em 0;
      border-collapse: collapse;
      width: 100%;
      overflow-x: auto;
      display: block;
      font-variant-numeric: lining-nums tabular-nums;
    }
    table caption {
      margin-bottom: 0.75em;
    }
    tbody {
      margin-top: 0.5em;
      border-top: 1px solid #1a1a1a;
      border-bottom: 1px solid #1a1a1a;
    }
    th {
      border-top: 1px solid #1a1a1a;
      padding: 0.25em 0.5em 0.25em 0.5em;
    }
    td {
      padding: 0.125em 0.5em 0.25em 0.5em;
    }
    header {
      margin-bottom: 4em;
      text-align: center;
    }
    #TOC li {
      list-style: none;
    }
    #TOC ul {
      padding-left: 1.3em;
    }
    #TOC > ul {
      padding-left: 0;
    }
    #TOC a:not(:hover) {
      text-decoration: none;
    }
    code{white-space: pre-wrap;}
    span.smallcaps{font-variant: small-caps;}
    div.columns{display: flex; gap: min(4vw, 1.5em);}
    div.column{flex: auto; overflow-x: auto;}
    div.hanging-indent{margin-left: 1.5em; text-indent: -1.5em;}
    /* The extra [class] is a hack that increases specificity enough to
       override a similar rule in reveal.js */
    ul.task-list[class]{list-style: none;}
    ul.task-list li input[type="checkbox"] {
      font-size: inherit;
      width: 0.8em;
      margin: 0 0.8em 0.2em -1.6em;
      vertical-align: middle;
    }
  </style>
  <script defer=""
  src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js"></script>
  <script>document.addEventListener("DOMContentLoaded", function () {
 var mathElements = document.getElementsByClassName("math");
 var macros = [];
 for (var i = 0; i < mathElements.length; i++) {
  var texText = mathElements[i].firstChild;
  if (mathElements[i].tagName == "SPAN") {
   katex.render(texText.data, mathElements[i], {
    displayMode: mathElements[i].classList.contains('display'),
    throwOnError: false,
    macros: macros,
    fleqn: false
   });
}}});
  </script>
  <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css" />
</head>
<body>
<div id="sub_body">
<header id="title-block-header">
<h1 class="title">Solving an Epic Boundary Value Problem from J.D.
Jackson’s "Classical Electrodynamics" – Laplace’s Equation in Polar
Coordinates!</h1>
<p class="author">Chancellor Ceti</p>
<p class="date">2025-07-20</p>
</header>
<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#introduction" id="toc-introduction">Introduction</a></li>
<li><a href="#laplaces-equation-in-polar-coordinates"
id="toc-laplaces-equation-in-polar-coordinates">Laplace’s Equation in
Polar Coordinates</a></li>
<li><a
href="#applying-boundary-conditions-to-determine-the-coefficients"
id="toc-applying-boundary-conditions-to-determine-the-coefficients">Applying
boundary conditions to determine the coefficients</a></li>
<li><a href="#finding-a-closed-form-wizardry-with-complex-numbers"
id="toc-finding-a-closed-form-wizardry-with-complex-numbers">Finding a
closed form – wizardry with complex numbers</a></li>
<li><a href="#conclusion" id="toc-conclusion">Conclusion</a></li>
</ul>
</nav>
<h1 id="introduction">Introduction</h1>
<p>Today I present the solution to one of my favorite problems from J.D.
Jackson’s "Classical Electrodynamics." The problem reads as follows</p>
<p>Two conducting planes at zero potential meet along the <span
class="math inline">z</span> axis, making an angle <span
class="math inline">\beta</span> between them, as in Fig. 2.14. A unit
line charge parallel to the <span class="math inline">z</span> axis is
located between the planes at position <span
class="math inline">(\rho&#39;,\phi&#39;)</span>.</p>
<p>Show that <span class="math inline">(4\pi\epsilon_0)</span> times the
potential in the space between the planes, that is, the Dirichlet Green
function <span
class="math inline">G(\rho,\phi;\rho&#39;,\phi&#39;)</span>, is given by
the infinite series</p>
<p><span
class="math display">G(\rho,\phi;\rho&#39;,\phi&#39;)=4\sum_{m=1}^{\infty}\frac{1}{m}\rho_{&lt;}^{m\pi/\beta}\rho_{&gt;}^{-m\pi/\beta}\sin(m\pi\phi/\beta)\sin(m\pi\phi&#39;/\beta)</span></p>
<p>By means of complex-variable techniques or other means, show that the
series can be summed to give a closed form</p>
<p><span
class="math display">G(\rho,\phi;\rho&#39;,\phi&#39;)=\ln(\frac{(\rho)^{2\pi/\beta}+(\rho&#39;)^{2\pi/\beta}-2(\rho\rho&#39;)^{\pi/\beta}\cos\left[\pi(\phi+\phi&#39;)/\beta\right]}{(\rho)^{2\pi/\beta}+(\rho&#39;)^{2\pi/\beta}-2(\rho\rho&#39;)^{\pi/\beta}\cos\left[\pi(\phi-\phi&#39;)/\beta\right]})</span></p>
<p>While this problem seems intimidating, it can be very elegantly
reduced to basic mathematical operations. The solution employs many of
my favorite tricks, so I was very pleased to encounter this problem. I
hope the reader will find the solution as entertaining. If you want to
attempt the problem on your own, please do so now – the next section
will contain spoilers :)</p>
<h1 id="laplaces-equation-in-polar-coordinates">Laplace’s Equation in
Polar Coordinates</h1>
<p>Given the problem description, it is obvious we are solving Laplace’s
Equation. The differential form of Gauss’ Law tells us <span
class="math inline">\nabla \cdot
\mathbf{E}=\frac{\rho}{\epsilon_0}</span></p>
<p>But we also know that <span class="math inline">\mathbf{E}=-\nabla
\Phi</span>. Therefore, <span class="math inline">\nabla \cdot
\mathbf{E}=-\nabla \cdot (\nabla \Phi)=-\nabla^2{\Phi}</span></p>
<p>In regions free of charge (such as the region described in this
problem), <span class="math inline">\rho=0</span> so Gauss’ law tells us
<span class="math inline">\nabla \cdot \mathbf{E}=0</span></p>
<p>Therefore,</p>
<p><span class="math display">\nabla^2{\Phi}=0</span></p>
<p>This is the famed Laplace’s Equation that Jackson readers must
worship. In two dimensions, the Laplacian takes the simple form <span
class="math inline">\nabla^2=\frac{\partial^2}{\partial
x^2}+\frac{\partial^2}{\partial y^2}</span></p>
<p>The geometry of this problem makes it convenient to use polar
coordinates. Through a lengthy derivation, it can be found that in polar
coordinates, Laplace’s equation is</p>
<p><span
class="math display">\nabla^2{\Phi}=\frac{1}{\rho}\frac{\partial
}{\partial \rho}\left(\rho\frac{\partial \Phi}{\partial
\rho}\right)+\frac{1}{\rho^2}\frac{\partial^2\Phi}{\partial\phi^2}</span></p>
<p>The proof is left as an exercise for the morbidly curious reader. If
you do it during English class and send proof that you got in trouble
for it, I’ll nominate you for the Nobel Prize if I ever get on the
committee.</p>
<p>We can use separation of variables to easily solve this differential
equation. Assume the solution is of the form <span
class="math inline">\Phi(\rho,\phi)=R(\rho)Q(\phi)</span></p>
<p>Then</p>
<p><span
class="math display">\nabla^2{\Phi}=\frac{Q(\phi)}{\rho}\frac{\partial
}{\partial
\rho}\left(\rho\frac{dR}{d\rho}\right)+\frac{R(\rho)}{\rho^2}\frac{d^2Q}{d\phi^2}=0</span></p>
<p>Note that, since <span class="math inline">\nabla^2{\Phi}=0</span>,
we also know that</p>
<p><span
class="math display">\nabla^2{\Phi}\left(\frac{\rho^2}{\Phi}\right)=0</span></p>
<p>We can thus multiply by <span
class="math inline">\frac{\rho^2}{\Phi}</span> on both sides to
obtain</p>
<p><span
class="math display">\nabla^2{\Phi}=\frac{\rho}{R(\rho)}\frac{\partial
}{\partial
\rho}\left(\rho\frac{dR}{d\rho}\right)+\frac{1}{Q(\phi)}\frac{d^2Q}{d\phi^2}=0</span></p>
<p>This has separated the radial and angular dependence of the equation.
We can set both equal to a constant and solve the differential equations
separately now. Let</p>
<p><span
class="math display">\frac{1}{Q(\phi)}\frac{d^2Q}{d\phi^2}=-v^2</span></p>
<p>Start with the case where <span class="math inline">v&gt;0</span></p>
<p>There are two linearly independent solutions to this differential
equation, so by superposition, the general solution must be</p>
<p><span
class="math display">Q(\phi)=A_ve^{iv\phi}+B_ve^{-iv\phi}</span></p>
<p>The radial equation is a bit more complicated, but it has the
familiar form of an Euler-Cauchy differential equation once we expand
the partial derivative.</p>
<p><span class="math display">\frac{\rho}{R(\rho)}\frac{\partial
}{\partial
\rho}\left(\rho\frac{dR}{d\rho}\right)=\frac{\rho}{R(\rho)}\left(\frac{dR}{d\rho}+\rho\frac{d^2R}{d\rho^2}\right)</span></p>
<p>We set this equal to the constant <span
class="math inline">v^2</span> to obtain</p>
<p><span
class="math display">\frac{\rho}{R(\rho)}\left(\frac{dR}{d\rho}+\rho\frac{d^2R}{d\rho^2}\right)=v^2</span></p>
<p><span
class="math display">\rho^2\frac{d^2R}{d\rho^2}+\rho\frac{dR}{d\rho}=v^2R(\rho)</span></p>
<p>Now use the ansatz <span
class="math inline">R(\rho)=C\rho^n</span></p>
<p>This yields</p>
<p><span class="math display">C\left(\rho^2n(n-1)\rho^{n-2}+\rho
n\rho^{n-1}\right)=v^2C\rho^n</span></p>
<p><span class="math display">n(n-1)\rho^n+n\rho^n=v^2\rho^n</span></p>
<p><span class="math display">(n(n-1)+n)\rho^n=v^2\rho^n</span> <span
class="math display">n^2=v^2</span> <span class="math display">n=\pm
v</span></p>
<p>Thus, we find</p>
<p><span class="math display">R(\rho)=a_v\rho^v+b_v\rho^{-v}</span></p>
<p>For the case where <span class="math inline">v=0</span>, we find</p>
<p><span class="math display">\frac{d^2Q}{d\rho^2}=0</span></p>
<p>which means</p>
<p><span class="math display">Q_{v=0}(\phi)=A_0+B_0\phi</span></p>
<p>And we then find that the radial equation becomes</p>
<p><span
class="math display">\rho\frac{d^2R}{d\rho^2}+\frac{dR}{d\rho}=0</span></p>
<p>The first solution to this is the trivial <span
class="math inline">R_1(\rho)=a_0</span></p>
<p>If we let <span class="math inline">u=\frac{dR}{d\rho}</span> and
assume <span class="math inline">u=Cx^n</span>, we can find the second
solution</p>
<p><span class="math display">\frac{nu}{x}=-\frac{u}{x}</span> <span
class="math display">n=-1</span> <span
class="math display">\frac{dR}{d\rho}=\frac{C}{x}</span> <span
class="math display">R_2(\rho)=b_0\ln(\rho)</span></p>
<p>The complete solution is the superposition of these two,</p>
<p><span class="math display">R_{v=0}(\rho)=a_0+b_0\ln(\rho)</span></p>
<p>Now remember our solution is of the form <span
class="math inline">\Phi(\rho,\phi)=R(\rho)Q(\phi)</span>. We have found
infinitely many solutions corresponding to different values of <span
class="math inline">v</span>, so the complete solution must be their
linear superposition</p>
<p><span
class="math display">\Phi(\rho,\phi)=\sum_{v=0}^{\infty}R_v(\rho)Q_v(\phi)</span>
<span
class="math display">=(a_0+b_0\ln(\rho))(A_0+B_0\phi)+\sum_{v&gt;0}(a_v\rho^v+b_v\rho^{-v})(A_ve^{iv\phi}+B_v^{-iv\phi})</span></p>
<p>Now we can successively apply boundary conditions to find the
coefficients.</p>
<h1
id="applying-boundary-conditions-to-determine-the-coefficients">Applying
boundary conditions to determine the coefficients</h1>
<p>The potential must equal zero on the surface of both planes, so we
can start with the bottom plane (<span
class="math inline">\phi=0</span>) and find</p>
<p><span class="math display">\Phi(\rho,\phi=0)=0</span></p>
<p><span
class="math display">A_0(a_0+b_0\ln(\rho))+\sum_{v&gt;0}(a_v\rho^v+b_v\rho^{-v})(A_v+B_v)=0</span></p>
<p>For the first term to equal zero regardless of <span
class="math inline">\rho</span>, it is necessary that <span
class="math inline">A_0=0</span></p>
<p>For the terms with <span class="math inline">v&gt;0</span> to equal
zero, we need</p>
<p><span class="math display">A_v+B_v=0</span></p>
<p><span class="math display">A_v=-B_v</span></p>
<p>We can now absorb the <span class="math inline">A_v</span> into the
<span class="math inline">a_v</span> and <span
class="math inline">b_v</span> since <span
class="math display">(a_v\rho^v+b_v\rho^{-v})(A_ve^{iv\phi}-A_ve^{-iv\phi})=(A_va_v\rho^v+A_vb_v\rho^{-v})(e^{iv\phi}-e^{-iv\phi})</span></p>
<p><span class="math inline">A_va_v</span> and <span
class="math inline">A_vb_v</span> is just another series of constants
dependent only on <span class="math inline">v</span>, so we can make the
change <span class="math inline">a_v\rightarrow A_va_v</span> and <span
class="math inline">b_v\rightarrow A_vb_v</span></p>
<p>Also note that <span
class="math inline">e^{iv\phi}-e^{-iv\phi}=C\sin(v\phi)</span> – so we
can rewrite that part of the equation and ignore the <span
class="math inline">C</span> by again absorbing it into the <span
class="math inline">a_v</span> and <span class="math inline">b_v</span>
constants.</p>
<p>Thus, from using <span
class="math inline">\Phi(\rho,\phi=0)=0</span>, we have found</p>
<p><span
class="math display">\Phi(\rho,\phi)=(a_0+b_0\ln(\rho))(B_0\phi)+\sum_{v&gt;0}(a_v\rho^v+b_v\rho^{-v})\sin(v\phi)</span></p>
<p>Again note that <span class="math inline">B_0</span> can be absorbed
into <span class="math inline">a_0</span> and <span
class="math inline">b_0</span> to give the slightly simpler form</p>
<p><span
class="math display">\Phi(\rho,\phi)=(a_0+b_0\ln(\rho))\phi+\sum_{v&gt;0}(a_v\rho^v+b_v\rho^{-v})\sin(v\phi)</span></p>
<p>Now we apply the next boundary condition, that <span
class="math inline">\Phi=0</span> on the top plane. The top plane is
defined by <span class="math inline">\phi=\beta</span>, so we have <span
class="math inline">\Phi(\rho,\phi=\beta)=0</span></p>
<p><span
class="math display">(a_0+b_0\ln(\rho))\beta+\sum_{v&gt;0}(a_v\rho^v+b_v\rho^{-v})\sin(v\beta)=0</span></p>
<p>For <span class="math inline">a_0+b_0\ln(\rho)=0</span> to be true
regardless of <span class="math inline">\rho</span>, we need <span
class="math inline">a_0=b_0=0</span> since the constants can’t vary with
<span class="math inline">\rho</span></p>
<p>Similarly, we need <span class="math inline">\sin(v\beta)=0</span>
for <span class="math inline">v&gt;0</span></p>
<p>For this to hold true, it is necessary that</p>
<p><span class="math display">v\beta=m\pi</span> <span
class="math display">v=\frac{m\pi}{\beta} \text{ for }
m=1,2,\ldots</span></p>
<p>Now we find</p>
<p><span
class="math display">\Phi(\rho,\phi)=\sum_{m&gt;0}\left(a_m\rho^{\frac{m\pi}{\beta}}+b_m\rho^{-\frac{m\pi}{\beta}}\right)\sin(\frac{m\pi\phi}{\beta})</span></p>
<p>Now we employ some mathematically shady trickery. We can arbitrarily
divide the region into two subregions with different functions for <span
class="math inline">\Phi</span>. Let us define <span
class="math inline">\Phi_1</span> for <span
class="math inline">\rho&lt;\rho&#39;</span> and <span
class="math inline">\Phi_2</span> for <span
class="math inline">\rho&gt;\rho&#39;</span></p>
<p>When <span class="math inline">\rho&lt;\rho&#39;</span>, we are close
to the origin – to have a well-defined solution near <span
class="math inline">\rho=0</span>, we must avoid the undefined behavior
of <span class="math inline">\rho^{-\frac{m\pi}{\beta}}</span>.
Therefore, we set <span class="math inline">b_m=0</span> for all <span
class="math inline">m&gt;0</span> in <span
class="math inline">\Phi_1</span></p>
<p>Similarly, <span class="math inline">\Phi_2</span> is defined for
arbitrarily large <span class="math inline">\rho&gt;\rho&#39;</span>.
<span class="math inline">\rho^{\frac{m\pi}{\beta}}</span> will go to
infinity as <span class="math inline">\rho</span> grows, so to avoid
undefined behavior, we must have <span class="math inline">a_m=0</span>
for <span class="math inline">m&gt;0</span> in <span
class="math inline">\Phi_2</span></p>
<p>Thus, we find</p>
<p><span
class="math display">\Phi_1(\rho,\phi)=\sum_{m&gt;0}a_m\rho^{\frac{m\pi}{\beta}}\sin(\frac{m\pi\phi}{\beta})</span></p>
<p><span
class="math display">\Phi_2(\rho,\phi)=\sum_{m&gt;0}b_m\rho^{-\frac{m\pi}{\beta}}\sin(\frac{m\pi\phi}{\beta})</span></p>
<p>For the next boundary condition, we use the formula for the
discontinuity of the electric field’s normal component across a
boundary</p>
<p><span
class="math display">(\mathbf{E}_2-\mathbf{E}_1)\cdot\mathbf{\hat{n}}=\frac{\sigma}{\epsilon_0}</span></p>
<p>where <span class="math inline">\sigma</span> is the charge
density.</p>
<p>For the uninitiated, this formula can easily be derived by applying
Gauss’ Law to an infinitesimally small Gaussian pillbox straddling a
boundary.</p>
<p>Note that <span class="math inline">\mathbf{E}=-\nabla \Phi</span>
so</p>
<p><span class="math display">\mathbf{E}\cdot\mathbf{\hat{n}}=-(\nabla
\Phi)\cdot\mathbf{\hat{n}}=-\frac{\partial \Phi}{\partial
\mathbf{\hat{n}}}</span></p>
<p>At the boundary defined by <span
class="math inline">\rho=\rho&#39;</span>, the unit outward normal is
the unit vector in the radial direction, so</p>
<p><span class="math display">\frac{\partial \Phi}{\partial
\mathbf{\hat{n}}}\Big|_{\rho=\rho&#39;}=\frac{\partial \Phi}{\partial
\rho}\Big|_{\rho=\rho&#39;}</span></p>
<p>Therefore, we find that</p>
<p><span class="math display">\left(-\frac{\partial \Phi_2}{\partial
\rho}+\frac{\partial \Phi_1}{\partial
\rho}\right)\Big|_{\rho=\rho&#39;}=\frac{\sigma}{\epsilon_0}</span></p>
<p>The charge density at <span class="math inline">\rho=\rho&#39;</span>
is</p>
<p><span
class="math display">\sigma=\frac{\lambda\delta(\phi-\phi&#39;)}{\rho&#39;}</span></p>
<p>where <span class="math inline">\lambda</span> is the total charge
contained in the line charge. Note that the factor of <span
class="math inline">\frac{1}{\rho&#39;}</span> appears because</p>
<p><span
class="math display">\delta(\mathbf{x}-\mathbf{x}&#39;)=\frac{1}{\rho&#39;}\delta(\rho-\rho&#39;)\delta(\phi-\phi&#39;)</span></p>
<p>This formula arises from the necessity that <span
class="math inline">\int_{\mathbb{R}^2}\delta(\mathbf{x}-\mathbf{x&#39;})\,d\mathbf{x}=1</span></p>
<p>We can combine all these formulas and evaluate the partial
derivatives to find</p>
<p><span
class="math display">\sum_{m&gt;0}\left(\frac{a_mm\pi}{\beta}(\rho&#39;)^{\frac{m\pi}{\beta}-1}+\frac{b_mm\pi}{\beta}(\rho&#39;)^{-\frac{m\pi}{\beta}-1}\right)\sin(\frac{m\pi\phi}{\beta})=\frac{\lambda\delta(\phi-\phi&#39;)}{\rho&#39;\epsilon_0}</span></p>
<p>We can multiply by <span
class="math inline">\frac{\rho&#39;\beta}{\pi}</span> on both sides to
get</p>
<p><span
class="math display">\sum_{m&gt;0}\left(a_mm(\rho&#39;)^{\frac{m\pi}{\beta}}+b_mm(\rho&#39;)^{-\frac{m\pi}{\beta}}\right)\sin(\frac{m\pi\phi}{\beta})=\frac{\beta\lambda\delta(\phi-\phi&#39;)}{\pi\epsilon_0}</span></p>
<p>The presence of <span
class="math inline">\delta(\phi-\phi&#39;)</span> on the right hand side
suggests multiplying by <span
class="math inline">\sin(\frac{n\pi\phi}{\beta})</span> on both sides
and integrating over <span class="math inline">\phi</span>.</p>
<p>How do we know to do this? Frankly speaking, because I’ve seen this
trick used several times in other boundary value problems. It isn’t
immediately obvious to a newbie, but if you’ve done enough problems, the
idea just naturally pops into your head when it is applicable. This is
also one of my favorite tricks in boundary value problems, so that’s
probably another reason why it comes to me so quickly.</p>
<p>The integral on the right side is</p>
<p><span
class="math display">\frac{\beta\lambda}{\pi\epsilon_0}\int_{0}^{\beta}\sin(\frac{n\pi\phi}{\lambda})\delta(\phi-\phi&#39;)\,d\phi=\frac{\beta\lambda}{\pi\epsilon_0}\sin(\frac{n\pi\phi&#39;}{\lambda})</span></p>
<p>The integral on the left side is</p>
<p><span
class="math display">\sum_{m&gt;0}m\left(a_m(\rho&#39;)^{\frac{m\pi}{\beta}}+b_m(\rho&#39;)^{-\frac{m\pi}{\beta}}\right)\int_{0}^{\beta}\sin(\frac{m\pi\phi}{\beta})\sin(\frac{n\pi\phi}{\beta})\,d\phi</span></p>
<p>The observant reader will immediately see this integral can be solved
by recalling the orthogonality of sine functions. For readers who don’t
know what that means, try solving the integral on your own and isolating
the cases where <span class="math inline">n=m</span> and <span
class="math inline">n\ne m</span> – the orthogonality is easily
derived.</p>
<p>I omit the calculation because it’s a standard result. We find that
the result is</p>
<p><span
class="math display">\sum_{m&gt;0}\frac{m\beta}{2}\left(a_m(\rho&#39;)^{\frac{m\pi}{\beta}}+b_m(\rho&#39;)^{-\frac{m\pi}{\beta}}\right)\delta_{mn}=\frac{n\beta}{2}\left(a_n(\rho&#39;)^{\frac{n\pi}{\beta}}+b_n(\rho&#39;)^{-\frac{n\pi}{\beta}}\right)</span></p>
<p>Thus, equating the left and right sides again,</p>
<p><span
class="math display">\left(a_n(\rho&#39;)^{\frac{n\pi}{\beta}}+b_n(\rho&#39;)^{-\frac{n\pi}{\beta}}\right)=\frac{2\lambda}{n\pi\epsilon_0}\sin(\frac{n\pi\phi&#39;}{\beta})</span></p>
<p>We can change <span class="math inline">n</span> to <span
class="math inline">m</span> to make this result mesh better with the
rest of our solution.</p>
<p><span
class="math display">\left(a_m(\rho&#39;)^{\frac{m\pi}{\beta}}+b_m(\rho&#39;)^{-\frac{m\pi}{\beta}}\right)=\frac{2\lambda}{m\pi\epsilon_0}\sin(\frac{m\pi\phi&#39;}{\beta})</span></p>
<p>This result seems useless, but it becomes incredibly powerful when
combined with the result of applying another boundary condition. We next
consider the continuity of the tangential component of the electric
field across a boundary, i.e.</p>
<p><span
class="math display">\mathbf{E}_2\times\mathbf{\hat{n}}=\mathbf{E}_2\times\mathbf{\hat{n}}</span></p>
<p>Again, this is a standard result of electrodynamics. For the
uninitiated, this result can be derived by considering the integral form
of Faraday’s Law applied to an infinitesimally small rectangular loop
around a boundary.</p>
<p>Using properties of the cross product or a simple geometric argument
(the details are omitted because it can be done mentally), it can be
seen that the above formula is equivalent to</p>
<p><span class="math display">\frac{\partial \Phi_1}{\partial
\phi}\Big|_{\rho=\rho&#39;}=\frac{\partial \Phi_2}{\partial
\phi}\Big|_{\rho=\rho&#39;}</span></p>
<p>Evaluating these partial derivatives yields</p>
<p><span
class="math display">\sum_{m&gt;0}\frac{a_mm\pi}{\beta}(\rho&#39;)^{\frac{m\pi}{\beta}}\cos(\frac{m\pi\phi}{\beta})=\sum_{m&gt;0}\frac{b_mm\pi}{\beta}(\rho&#39;)^{-\frac{m\pi}{\beta}}\cos(\frac{m\pi\phi}{\beta})</span></p>
<p>For these series to equal each other independent of <span
class="math inline">\phi</span>, we need</p>
<p><span
class="math display">a_m(\rho&#39;)^{\frac{m\pi}{\beta}}=b_m(\rho&#39;)^{-\frac{m\pi}{\beta}}</span></p>
<p><span
class="math display">b_m=a_m(\rho&#39;)^{\frac{2m\pi}{\beta}}</span></p>
<p>Incredible progress! Now go back to our result from the earlier
boundary condition and plug this new result in:</p>
<p><span
class="math display">\left(a_m(\rho&#39;)^{\frac{m\pi}{\beta}}+b_m(\rho&#39;)^{-\frac{m\pi}{\beta}}\right)=\frac{2\lambda}{m\pi\epsilon_0}\sin(\frac{m\pi\phi&#39;}{\beta})</span></p>
<p><span
class="math display">2a_m(\rho&#39;)^{\frac{m\pi}{\beta}}=\frac{2\lambda}{m\pi\epsilon_0}\sin(\frac{m\pi\phi&#39;}{\beta})</span></p>
<p><span
class="math display">a_m=(\rho&#39;)^{-\frac{m\pi}{\beta}}\frac{\lambda}{m\pi\epsilon_0}\sin(\frac{m\pi\phi&#39;}{\beta})</span></p>
<p>This gives us formulas for <span class="math inline">a_m</span> and
<span class="math inline">b_m</span>! Now we can plug them into our
formula for <span class="math inline">\Phi</span> and find <span
class="math display">\begin{aligned}
   &amp; \Phi(\rho,\phi;\rho&#39;,\phi&#39;) =\\
                                &amp;\frac{\lambda}{\pi\epsilon_0}\sum_{m&gt;0}\frac{1}{m}\sin(\frac{m\pi\phi&#39;}{\beta})\sin(\frac{m\pi\phi}{\beta})\cdot\begin{cases}
        (\rho&#39;)^{-\frac{m\pi}{\beta}}\rho^{\frac{m\pi}{\beta}} &amp;
\text{ for } \rho&lt;\rho&#39; \\
(\rho&#39;)^{\frac{m\pi}{\beta}}\rho^{-\frac{m\pi}{\beta}} &amp; \text{
for } \rho&gt;\rho&#39;
    \end{cases}
\end{aligned}</span></p>
<p>Now if we let <span
class="math inline">\rho_{&lt;}=\text{min}(\rho,\rho&#39;)</span> and
<span class="math inline">\rho_{&gt;}=\text{max}(\rho,\rho&#39;)</span>,
we have</p>
<p><span class="math display">\Phi(\rho,\phi;\rho&#39;,\phi&#39;) =
\frac{\lambda}{\pi\epsilon_0}\sum_{m&gt;0}\frac{1}{m}
\rho_{&lt;}^{\frac{m\pi}{\beta}}\rho_{&gt;}^{-\frac{m\pi}{\beta}}\sin(\frac{m\pi\phi&#39;}{\beta})\sin(\frac{m\pi\phi}{\beta})</span></p>
<p>Now if we let <span class="math inline">\lambda=1</span> (the total
charge in the line charge) and multiply by <span
class="math inline">4\pi\epsilon_0</span>, we get the Green function for
this problem</p>
<p><span
class="math display">G(\rho,\phi;\rho&#39;,\phi&#39;)=4\sum_{m=1}^{\infty}\frac{1}{m}\rho_{&lt;}^{m\pi/\beta}\rho_{&gt;}^{-m\pi/\beta}\sin(m\pi\phi/\beta)\sin(m\pi\phi&#39;/\beta)</span></p>
<p>Voila, part a of the problem is solved! I found this solution
incredible, and I hope you do too. We used a staggering amount of
techniques to reduce a complicated problem to an elegant series solution
– that, to my mind, is the beauty of boundary value problems.</p>
<p>Now we solve part b of the problem and find a closed form through
even more elegant manipulations!</p>
<h1 id="finding-a-closed-form-wizardry-with-complex-numbers">Finding a
closed form – wizardry with complex numbers</h1>
<p>Let’s start by rewriting the sine product as a sum of cosines,
i.e.</p>
<p><span
class="math display">\sin(\frac{m\pi\phi&#39;}{\beta})\sin(\frac{m\pi\phi}{\beta})=\frac{1}{2}\left(\cos(\frac{m\pi}{\beta}(\phi-\phi&#39;))-\cos(\frac{m\pi}{\beta}(\phi+\phi&#39;))\right)</span></p>
<p><span
class="math display">=\frac{1}{2}\left(\Re(e^{\frac{im\pi}{\beta}(\phi-\phi&#39;)})-\Re(e^{\frac{im\pi}{\beta}(\phi+\phi&#39;)})\right)</span></p>
<p><span
class="math display">G=2\Re\left(\sum_{m=1}^{\infty}\frac{1}{m}\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{m\pi}{\beta}}e^{\frac{im\pi}{\beta}(\phi-\phi&#39;)}-\sum_{m=1}^{\infty}\frac{1}{m}\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{m\pi}{\beta}}e^{\frac{im\pi}{\beta}(\phi+\phi&#39;)}\right)</span></p>
<p>Now define</p>
<p><span
class="math display">z_1=\left(e^{i(\phi-\phi&#39;)}\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{\pi}{\beta}}</span></p>
<p><span
class="math display">z_2=\left(e^{i(\phi+\phi&#39;)}\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{\pi}{\beta}}</span></p>
<p>This allows us to rewrite the series in the cleaner form</p>
<p><span
class="math display">G=2\Re\left(\sum_{m=1}^{\infty}\frac{z_1^m}{m}-\sum_{m=1}^{\infty}\frac{z_2^m}{m}\right)</span></p>
<p>This is another point where a good memory will help solve the
problem. Recall the Taylor series expansion for <span
class="math inline">\ln(1+x)</span></p>
<p><span
class="math display">\ln(1+x)=\sum_{m&gt;0}(-1)^{m+1}\frac{x^m}{m}=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots</span></p>
<p>Plugging in <span class="math inline">-x</span> gives</p>
<p><span
class="math display">\ln(1-x)=-\sum_{m&gt;0}\frac{x^m}{m}=-x-\frac{x^2}{2}-\frac{x^3}{3}-\cdots</span></p>
<p>Now it becomes clear that</p>
<p><span
class="math display">-\ln(1-x)=\sum_{m&gt;0}\frac{x^m}{m}</span></p>
<p>Thus,</p>
<p><span
class="math display">G=2\Re\left(-\ln(1-z_1)+\ln(1-z_2)\right)=2\Re\left(\ln(\frac{1-z_2}{1-z_1})\right)</span></p>
<p>Excellent! We are close to the structure desired by the problem’s
description. We have the logarithm of a quotient, but the tricky part is
taking the real part.</p>
<p>Consider the real part of such a logarithm:</p>
<p><span
class="math display">\Re(\ln(1-z))=\Re\biggl[\ln(|1-z|)+i\mathop{\mathrm{Arg}}(1-z)\biggr]</span>
<span
class="math display">=\ln(|1-z|)=\ln(\sqrt{(\Re(1-z))^2+(\Im(1-z))^2})</span>
<span
class="math display">=\frac{1}{2}\ln\left[\left(1-|z|\cos(\mathop{\mathrm{Arg}}z)\right)^2+\left(|z|\sin(\mathop{\mathrm{Arg}}z)\right)^2\right]</span>
<span
class="math display">=\frac{1}{2}\ln\left[1+|z|^2-2\Re(z)\right]</span></p>
<p>Great, this is a clean way of expanding the real part of our
logarithm!</p>
<p>Note that</p>
<p><span
class="math display">|z_1|=\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{\pi}{\beta}}</span></p>
<p><span
class="math display">|z_2|=\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{\pi}{\beta}}</span></p>
<p><span
class="math display">\Re(z_1)=\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{\pi}{\beta}}\cos(\frac{\pi}{\beta}(\phi-\phi&#39;))</span></p>
<p><span
class="math display">\Re(z_2)=\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\frac{\pi}{\beta}}\cos(\frac{\pi}{\beta}(\phi+\phi&#39;))</span></p>
<p>Then we have</p>
<p><span
class="math display">G=\ln\left(\frac{1+|z_2|^2-2\Re(z_2)}{1+|z_1|^2-2\Re(z_1)}\right)</span>
<span
class="math display">=\ln\left(\frac{1+\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{2\pi/\beta}-2\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\pi/\beta}\cos\left(\frac{\pi}{\beta}(\phi+\phi&#39;)\right)}{
1+\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{2\pi/\beta}-2\left(\frac{\rho_{&lt;}}{\rho_{&gt;}}\right)^{\pi/\beta}\cos\left(\frac{\pi}{\beta}(\phi-\phi&#39;)\right)
}\right)</span> <span
class="math display">=\ln\left(\frac{(\rho_{&gt;})^{2\pi/\beta}+\left(\rho_{&lt;}\right)^{2\pi/\beta}-2\left(\rho_{&lt;}\rho_{&gt;}\right)^{\pi/\beta}\cos\left(\frac{\pi}{\beta}(\phi+\phi&#39;)\right)}{
(\rho_{&gt;})^{2\pi/\beta}+\left(\rho_{&lt;}\right)^{2\pi/\beta}-2\left(\rho_{&lt;}\rho_{&gt;}\right)^{\pi/\beta}\cos\left(\frac{\pi}{\beta}(\phi-\phi&#39;)\right)
}\right)</span></p>
<p>Now note that, since <span class="math inline">\rho_{&gt;}</span> and
<span class="math inline">\rho_{&lt;}</span> have the same exponent
everywhere, we can just replace them with <span
class="math inline">\rho</span> and <span
class="math inline">\rho&#39;</span>.</p>
<p><span
class="math display">G(\rho,\phi;\rho&#39;,\phi&#39;)=\ln\left(\frac{(\rho)^{2\pi/\beta}+\left(\rho&#39;\right)^{2\pi/\beta}-2\left(\rho\rho&#39;\right)^{\pi/\beta}\cos\left(\frac{\pi}{\beta}(\phi+\phi&#39;)\right)}{
(\rho)^{2\pi/\beta}+\left(\rho&#39;\right)^{2\pi/\beta}-2\left(\rho\rho&#39;\right)^{\pi/\beta}\cos\left(\frac{\pi}{\beta}(\phi-\phi&#39;)\right)
}\right)</span></p>
<p>Behold! The epic closed form solution to the problem. My mind was
blown away by how such a complicated series could be reduced to a closed
form. The final solution looks cool – which, let’s be honest, is all we
care about – but is also surprisingly well-behaved. There’s a
singularity at <span class="math inline">(\rho&#39;,\phi&#39;)</span>
but, other than that, the function is everywhere finite and continuous
for <span class="math inline">0\le\phi\le\beta</span> and <span
class="math inline">0\le\rho&lt;\infty</span></p>
<p>What is especially surprising is continuity, since our series
solution was a piecewise function. It’s incredible that such a gnarly
series produced such an elegant closed form.</p>
<figure>
<img src="/images/sol_plot.png" />
<figcaption>Visualization of the electric potential for <span
class="math inline">\beta=\frac{\pi}{3}</span>, <span
class="math inline">(\rho&#39;,\phi&#39;)=(0.8,\frac{pi}{8})</span></figcaption>
</figure>
<h1 id="conclusion">Conclusion</h1>
<p>I hope the reader has found this problem as entertaining as I did. As
always, if you have any questions or thoughts about this post, feel free
to contact me on Discord or via email. I have a few other
Jackson-related posts I plan to write soon, but it takes a long time to
write LaTeX, so the post schedule is chaotic.</p>
<p>I tried to be thorough with my explanations at the start of this
post, but after a few hours of writing, my patience likely wore out.
Apologies if some parts of this post are less understandable than others
:) Please message me to ask about anything that’s unclear or
confusing.</p>
<p>Also, if there are any other people reading Jackson or people who
would want to talk about the book with me – please contact me!! I’m
tired of getting stuck on one equation for an hour, only to realize
there’s a typo or something similarly stupid. It’s easier to read this
book in a group than to read it alone, and I’d love to work with another
devotee to the holy church of Jackson. If I was doing this in college,
I’d have Jackson buddies, but instead I’m hoping someone on the internet
reads this haha.</p>
<p>Thanks for reading, please contact me if this is interesting (I’m
lonely) !!!</p>
</div>
</body>
</html>
