---
layout: '../layouts/MarkdownPostLayout.astro'
title: "Deriving the Dirac Delta Term in the Dipole Electric Field Formula"
pubDate: 2025-04-20
description: "I show how to derive the Dirac delta term in the formula for the electric field caused by a dipole. We use some cool tricks with spherical harmonics to derive the result in a fun way."
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
  <meta name="dcterms.date" content="2025-04-20" />
  <title>Deriving the Dirac Delta Term in the Dipole Electric Field Formula</title>
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
<h1 class="title">Deriving the Dirac Delta Term in the Dipole Electric Field
Formula</h1>
<p class="author">Chancellor Ceti</p>
<p class="date">2025-04-20</p>
</header>
<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#introduction" id="toc-introduction">Introduction</a></li>
<li><a href="#the-derivation" id="toc-the-derivation">The
Derivation</a></li>
<li><a href="#conclusion" id="toc-conclusion">Conclusion</a></li>
</ul>
</nav>
<h1 id="introduction">Introduction</h1>
<p>The inspiration for today’s post is J.D. Jackson’s "Classical
Electrodynamics", which I have been dutifully plodding through for
several months now. I recently started Chapter 4 which covers multipole
expansions and their application to the study of dielectrics and
electrostatics of macroscopic media.</p>
<p>In section 4.1, Jackson presented an interesting derivation of the
formula for the electric field of a dipole</p>
<p><span
class="math display">\mathbf{E}(\mathbf{x})=\frac{1}{4\pi\epsilon_0}\left[\frac{3\mathbf{n}(\mathbf{p}\cdot\mathbf{n})-\mathbf{p}}{|\mathbf{x}-\mathbf{x}_0|^3}-\frac{4\pi}{3}\mathbf{p}\delta(\mathbf{x}-\mathbf{x}_0)\right]</span></p>
<p>The derivation uses some very nice tricks, making it satisfying to
read, and will be (according to Jackson) "useful in elucidating the
basic difference between electric and magnetic dipoles."</p>
<p>However, in the true Jacksonian style, many important details of the
derivation are omitted and considered too trivial for the consideration
of the great J.D. I spent a good part of my Saturday morning working out
some of these details, and I am now sharing my results with the world. I
hope this post will provide some intellectual satisfaction to readers
and make this derivation more understandable to anyone struggling
through Jackson.</p>
<p>Before beginning, I must warn that this blog post will not be very
accessible to people lacking background in electrodynamics and vector
calculus. There are many identities and formulas used here, and deriving
all of them would not make sense, given that any electrodynamics student
should know them.</p>
<p>With those preliminaries covered, let us begin!</p>
<h1 id="the-derivation">The Derivation</h1>
<p>Jackson begins by considering a localized charge distribution <span
class="math inline">\rho(\mathbf{x})</span> that leads to an electric
field <span class="math inline">\mathbf{E}(\mathbf{x})</span> throughout
space. He proposes integrating the electric field over the volume of a
sphere of radius <span class="math inline">R</span>.</p>
<p>We choose the origin as the center of the sphere and begin with</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\int_{r&lt;R}\boldsymbol{\nabla}\Phi\,d^3x</span></p>
<p>Now we use the following important identity to turn our volume
integral into a surface integral</p>
<p><span class="math display">\iiint_{V}\boldsymbol{\nabla}
f\,dV=\iint_{\partial V}f \cdot \mathbf{n}\,dS</span></p>
<p>where <span class="math inline">\mathbf{n}</span> is the outward unit
normal to the boundary of <span class="math inline">V</span>, <span
class="math inline">\partial V</span>.</p>
<p>For anyone unfamiliar with this identity, it can be easily derived
using the divergence theorem – proof left as an exercise for the
reader.</p>
<p>Use of this identity yields</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\int_{r=R}\Phi
\mathbf{n}\,dA</span></p>
<p>where <span class="math inline">n</span> is the outward directed
normal to the sphere i.e. <span
class="math inline">\mathbf{n}=\mathbf{x}/R</span></p>
<p>Now Jackson switched our integral over area elements to an integral
over solid angle. The appropriate scale factor is</p>
<p><span class="math display">\,dA=R^2\,d\Omega</span></p>
<p>For those unfamiliar with solid angle integration, the Wikipedia
article gives a decent introduction.</p>
<p>Using this change to solid angle integration, we find</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\int_{r=R}R^2\,d\Omega
\Phi(\mathbf{x})\mathbf{n}</span></p>
<p>Now Jackson brings in the definition of electrostatic potential as a
volume integral i.e.</p>
<p><span
class="math display">\Phi(\mathbf{x})=\frac{1}{4\pi\epsilon_0}\int_{}\frac{\rho(\mathbf{x&#39;})}{|\mathbf{x}-\mathbf{x&#39;}|}\,d^3x&#39;</span></p>
<p>Substitution of this formula gives us</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{R^2}{4\pi\epsilon_0}
\int_{r=R}\mathbf{n}\,d\Omega
\int_{}\frac{\rho(\mathbf{x&#39;})}{|\mathbf{x}-\mathbf{x&#39;}|}\,d^3x&#39;</span></p>
<p>Jackson interchanges the two integration operators (justified by
Fubini’s Theorem I think? I haven’t studied analysis, if anyone has the
time I’d love to see how we justify this interchange) now to get</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{R^2}{4\pi\epsilon_0}
\int_{}\,d^3x&#39;\rho(\mathbf{x&#39;})
\int_{r=R}\frac{\mathbf{n}}{|\mathbf{x}-\mathbf{x&#39;}|}\,d\Omega</span></p>
<p>Thus far Jackson has been quite friendly – we’ve been dealing with
very basic vector calculus and haven’t met anything outlandish. Here,
however, all hell breaks lose.</p>
<p>We focus on the surface integral first.</p>
<p>Recall that the normal vector to the sphere can be expressed as <span
class="math inline">\mathbf{n}=\mathbf{x}/R</span>, allowing us to
express the normal vector in spherical coordinates now</p>
<p><span
class="math display">\mathbf{n}=\mathbf{i}\sin\theta\cos\phi+\mathbf{j}sin\theta\sin\phi+\mathbf{k}\cos\theta=\sin\theta(\mathbf{i}\cos\phi+\mathbf{j}\sin\phi)+\mathbf{k}\cos\theta</span></p>
<p>Now Jackson invites us to notice, as any normal person would
(sarcasm), that the components of this vector can all be expressed as
linear combinations of spherical harmonics with <span
class="math inline">l=1</span></p>
<p>A quick look at a table of spherical harmonics reveals this to be
true. Indeed, we can find quite easily that</p>
<p><span class="math display">\begin{split}
    \mathbf{n}&amp;=\sqrt{\frac{2\pi}{3}}\biggl([-Y_{1,1}(\theta,\phi)+Y_{1,-1}(\theta,\phi)]\mathbf{i}+i[Y_{1,1}(\theta,\phi)+Y_{1,-1}(\theta,\phi)]\mathbf{j}\biggr)
\\
              &amp;+\sqrt{\frac{4\pi}{3}}Y_{1,0}(\theta,\phi)\mathbf{k}
\end{split}</span></p>
<p>Now, the central theme of this chapter is using spherical harmonics
to find cool series expansions. So the next step is rather obvious.</p>
<p>We recall our expansion for <span
class="math inline">\frac{1}{|\mathbf{x}-\mathbf{x&#39;}|}</span> in
terms of spherical harmonics as</p>
<p><span
class="math display">\frac{1}{|\mathbf{x}-\mathbf{x&#39;}|}=4\pi\sum_{l=0}^{\infty}\frac{1}{2l+1}\frac{r_&lt;^l}{r_&gt;^{l+1}}\sum_{m=-l}^{l}Y_{lm}^*(\theta&#39;,\phi&#39;)Y_{lm}(\theta,\phi)</span></p>
<p>where <span class="math inline">r_&gt;</span> is the greater of <span
class="math inline">r</span> and <span class="math inline">r&#39;</span>
and <span class="math inline">r_&lt;</span> is the smaller of the
two.</p>
<p>Now we combine these two results to express the solid angle integral
as</p>
<p><span
class="math display">\int_{r=R}\,d\Omega\frac{\mathbf{n}}{|\mathbf{x}-\mathbf{x&#39;}|}=4\pi\int_{r=R}\,d\Omega
\mathbf{n}\sum_{l=0}^{\infty}\frac{1}{2l+1}\frac{r_&lt;^l}{r_&gt;^{l+1}}\sum_{m=-l}^{l}Y_{lm}^*(\theta&#39;,\phi&#39;)Y_{lm}(\theta,\phi)</span></p>
<p>Now let’s interchange the summation operators with the integration
operator and take terms independent of <span
class="math inline">\Omega</span> outside of the integral.</p>
<p><span
class="math display">\int_{r=R}\,d\Omega\frac{\mathbf{n}}{|\mathbf{x}-\mathbf{x&#39;}|}=4\pi\sum_{l=0}^{\infty}\frac{r_&lt;^l}{(2l+1)r_&gt;^{l+1}}\sum_{m=-l}^{l}Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)\mathbf{n}\,d\Omega</span></p>
<p>Now consider just this part of the expression</p>
<p><span
class="math display">Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)\mathbf{n}\,d\Omega</span></p>
<p>Recall our expression for <span class="math inline">\mathbf{n}</span>
in terms of spherical harmonics. Ignore the constants in that and
consider its general form, giving us</p>
<p><span class="math display">\begin{split}
    Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)\mathbf{n}\,d\Omega=\\
    Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)
\left[a(-Y_{1,1}+Y_{1,-1}) \mathbf{i}+b(Y_{1,1}+Y_{1,-1})
\mathbf{j}+cY_{1,0} \mathbf{k}\right]\,d\Omega
\end{split}</span></p>
<p>Now we must recall the orthogonality relation for spherical
harmonics</p>
<p><span
class="math display">\int_{r=R}Y_{lm}(\theta,\phi)Y_{l&#39;m&#39;}(\theta,\phi)\,d\Omega=\delta_{ll&#39;}\delta_{mm&#39;}</span></p>
<p>Evidently, the only nonvanishing terms here are the <span
class="math inline">l=1</span> terms because of our orthogonality
relation and the expression for <span
class="math inline">\mathbf{n}</span> in terms of <span
class="math inline">Y_{1m}</span> spherical harmonics.</p>
<p>Thus, we have <span
class="math display">\int_{r=R}\,d\Omega\frac{\mathbf{n}}{|\mathbf{x}-\mathbf{x&#39;}|}=4\pi\cdot\frac{r_&lt;}{3r_&gt;^2}\sum_{m=-1}^{1}Y_{1m}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{1m}(\theta,\phi)\mathbf{n}\,d\Omega</span></p>
<p>Quite a simplification! We have even more nice tricks here
though.</p>
<p>Again consider</p>
<p><span
class="math display">\sum_{m=-1}^{1}Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)\mathbf{n}\,d\Omega</span></p>
<p>To make our expression for <span
class="math inline">\mathbf{n}</span> a bit less ugly, I’ll write it in
a more abstract form as</p>
<p><span
class="math display">\mathbf{n}=\sum_{a=1}^{3}\mathbf{e}_a\sum_{b=-1}^{1}Y_{1b}(\theta,\phi)c_{ab}</span></p>
<p>where <span
class="math inline">\mathbf{e}_1=\mathbf{i},\mathbf{e}_2=\mathbf{j},\mathbf{e}_3=\mathbf{k}</span></p>
<p>Comparison with our earlier expression shows that this is essentially
the same thing – just let <span
class="math inline">c_{11}=-\sqrt{\frac{2\pi}{3}},c_{30}=\sqrt{\frac{4\pi}{3}}</span>
etc</p>
<p>Now let’s look again at <span class="math display">\begin{split}
&amp;\sum_{m=-1}^{1}Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)\mathbf{n}\,d\Omega\\
&amp;=
\sum_{m=-1}^{1}Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)\sum_{a=1}^{3}\mathbf{e}_a\sum_{b=-1}^{1}Y_{1b}(\theta,\phi)c_{ab}\,d\Omega\\
&amp;=
\sum_{m=-1}^{1}Y_{lm}^*(\theta&#39;,\phi&#39;)\sum_{a=1}^{3}\mathbf{e}_a\sum_{b=-1}^{1}c_{ab}\int_{r=R}Y_{lm}(\theta,\phi)Y_{1b}(\theta,\phi)\,d\Omega\\
&amp;=\sum_{m=-1}^{1}Y_{lm}^*(\theta&#39;,\phi&#39;)\sum_{a=1}^{3}\mathbf{e}_a\sum_{b=-1}^{1}c_{ab}\delta_{mb}\\
&amp;=\sum_{m=-1}^{1}Y_{lm}^*(\theta&#39;,\phi&#39;)\sum_{a=1}^{3}c_{am}\mathbf{e}_a\\
&amp;=\sum_{a=1}^{3}\mathbf{e}_a\sum_{b=-1}^{1}Y_{1b}^*(\theta&#39;,\phi&#39;)c_{ab}
\end{split}</span></p>
<p>Incredible! This is the exact same thing as our expression for <span
class="math inline">\mathbf{n}</span> except that instead of <span
class="math inline">\theta</span> and <span
class="math inline">\phi</span> we have <span
class="math inline">\theta&#39;</span> and <span
class="math inline">\phi&#39;</span></p>
<p>If we consider what those angles mean in the definition of <span
class="math inline">\mathbf{n}</span> we will realize that this new
expression is another outward unit normal, except to <span
class="math inline">\mathbf{x&#39;}</span> rather than <span
class="math inline">\mathbf{x}</span></p>
<p>Thus we have</p>
<p><span
class="math display">\sum_{m=-1}^{1}Y_{lm}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{lm}(\theta,\phi)\mathbf{n}\,d\Omega=\mathbf{n&#39;}</span></p>
<p>where <span
class="math inline">\mathbf{n&#39;}=\mathbf{r&#39;}/r&#39;</span></p>
<p>Now let’s take this result back to our larger expression</p>
<p><span
class="math display">\int_{r=R}\,d\Omega\frac{\mathbf{n}}{|\mathbf{x}-\mathbf{x&#39;}|}=4\pi\cdot\frac{r_&lt;}{3r_&gt;^2}\sum_{m=-1}^{1}Y_{1m}^*(\theta&#39;,\phi&#39;)\int_{r=R}Y_{1m}(\theta,\phi)\mathbf{n}\,d\Omega</span></p>
<p><span class="math display">=\frac{4\pi
r_&lt;}{3r_&gt;^2}\mathbf{n&#39;}</span></p>
<p>A beautifully simple result, considering where we started. Now let’s
plug this expression into the even bigger original expression (yes, we
really zoomed in a lot)</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{R^2}{4\pi\epsilon_0}
\int_{}\,d^3x&#39;\rho(\mathbf{x&#39;})
\int_{r=R}\frac{\mathbf{n}}{|\mathbf{x}-\mathbf{x&#39;}|}\,d\Omega</span>
<span class="math display">=-\frac{R^2}{4\pi\epsilon_0}
\int_{}\,d^3x&#39;\rho(\mathbf{x&#39;})\frac{4\pi
r_&lt;}{3r_&gt;^2}\mathbf{n&#39;}</span> <span
class="math display">=-\frac{R^2}{3\epsilon_0} \int_{}\,d^3x&#39;\frac{
r_&lt;}{r_&gt;^2}\mathbf{n&#39;}\rho(\mathbf{x&#39;})</span></p>
<p>This is an incredible simplification of our earlier expressions!
However, to go further, we must know which is larger of <span
class="math inline">R</span> and <span class="math inline">r&#39;</span>
so that <span class="math inline">r_&gt;</span> and <span
class="math inline">r_&lt;</span> have some meaning.</p>
<p>Jackson has us consider two different cases. The first is the case
where all the charge is contained within the sphere, the second is where
the charge lies external to the sphere (see image below).</p>
<figure>
<img src="/images/two_cases_pictures.png" />
<figcaption>Visualizations of the two cases considered – taken from
Jackson’s textbook</figcaption>
</figure>
<p>In the first case, all charge is contained within the sphere, so
<span class="math inline">r&#39;&lt;R</span>. Thus we have <span
class="math inline">r_&gt;=R</span> and <span
class="math inline">r_&lt;=r&#39;</span></p>
<p>This gives us</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{R^2}{3\epsilon_0}
\int_{}\,d^3x&#39;\frac{
r&#39;}{R^2}\mathbf{n&#39;}\rho(\mathbf{x&#39;})=-\frac{1}{3\epsilon_0}\int_{}r&#39;\frac{\mathbf{x&#39;}}{r&#39;}\rho(\mathbf{x&#39;})\,d^3x&#39;</span>
<span
class="math display">=-\frac{1}{3\epsilon_0}\int_{}\mathbf{x&#39;}\rho(\mathbf{x&#39;})\,d^3x&#39;</span>
<span class="math display">=-\frac{\mathbf{p}}{3\epsilon_0}</span> where
<span
class="math inline">\mathbf{p}=\int_{}\mathbf{x&#39;}\rho(\mathbf{x&#39;})\,d^3x&#39;</span>
is the electric dipole moment of the charge distribution with respect to
the center of the sphere.</p>
<p>In the second case, since the charge is external to the sphere, we
have <span class="math inline">r&#39;&gt;R</span>. Thus we find</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{R^2}{3\epsilon_0}
\int_{}\,d^3x&#39;\frac{R}{{r&#39;}^2}\mathbf{n&#39;}\rho(\mathbf{x&#39;})=-\frac{R^3}{3\epsilon_0}\int_{}\,d^3x&#39;\frac{\mathbf{n&#39;}}{{r&#39;}^2}\rho(\mathbf{x&#39;})</span>
<span
class="math display">=-\frac{R^3}{3\epsilon_0}\int_{}\frac{\mathbf{x&#39;}}{{r&#39;}^3}\rho(\mathbf{x&#39;})\,d^3x&#39;</span></p>
<p>Now a bit of pattern recognition will prove useful. Notice that this
integral is just <span class="math inline">-4\pi\epsilon_0</span> times
the electric field at the center of the sphere (Coulomb’s Law with <span
class="math inline">\mathbf{x}=\mathbf{0}</span>)</p>
<p>Also note that the reason it’s a factor of <span
class="math inline">-4\pi\epsilon_0</span> and not <span
class="math inline">4\pi\epsilon_0</span> is that the integrand here is
<span class="math inline">\frac{\mathbf{x}&#39;-\mathbf{x}}{r^3}</span>
instead of <span
class="math inline">\frac{\mathbf{x}-\mathbf{x}&#39;}{r^3}</span> as in
Coulomb’s Law.</p>
<p>So we have</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{R^3}{3\epsilon_0}\cdot-4\pi\epsilon_0
\mathbf{E}(0)=\frac{4\pi}{3}R^3 \mathbf{E}(0)</span></p>
<p>Note the sphere’s volumes is <span class="math inline">\frac{4\pi
R^3}{3}</span></p>
<p>So we have found that the average value of the electric field over a
sphere containing no charge equals the field’s value at the sphere’s
center. Nice result!</p>
<p>However, returning to the first case, our result there tells us
something important.</p>
<p>The traditional expression for the electric field of a dipole at
<span class="math inline">\mathbf{x}_0</span> is</p>
<p><span
class="math display">\mathbf{E}(\mathbf{x})=\frac{3\mathbf{n}(\mathbf{p}\cdot\mathbf{n})-\mathbf{p}}{4\pi\epsilon_0|\mathbf{x}-\mathbf{x}_0|^3}</span></p>
<p>However, if we integrate this over the volume of the sphere, the
resulting integral equals zero. This stands in direct contradiction with
our earlier result</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{\mathbf{p}}{3\epsilon_0}</span></p>
<p>To resolve this contradiction, we introduce the Dirac delta function
into our formula and write</p>
<p><span
class="math display">\mathbf{E}(\mathbf{x})=\frac{1}{4\pi\epsilon_0}\left[\frac{3\mathbf{n}(\mathbf{p}\cdot\mathbf{n})-\mathbf{p}}{|\mathbf{x}-\mathbf{x}_0|^3}-\frac{4\pi}{3}\mathbf{p}\delta(\mathbf{x}-\mathbf{x}_0)\right]</span></p>
<p>Also note our use of the convention that, when an integral diverges,
we consider its limit rather than the nonsensical diverging value. If we
didn’t use this convention, the <span
class="math inline">\frac{1}{|\mathbf{x}-\mathbf{x}_0|^3}</span> term
would lead to a diverging volume integral.</p>
<p>Now with that convention and the addition of a Dirac delta term, this
expression’s volume integral agrees with our previous result.</p>
<p>Thus, through an impressive series of mathematical manipulations, we
have found an expression for the dipole’s electric field that removes
the contradiction in our earlier expression. And we also found a cool
bonus result about the average value of an electric field over a
sphere!</p>
<h1 id="conclusion">Conclusion</h1>
<p>This has been a lengthy blog post, so I will briefly summarize our
key results.</p>
<p>First, we found a nice bonus result about the average value of an
electric field over the surface of a sphere being equal to the field’s
value at the sphere’s center.</p>
<p>Then we found our main result. If we integrate the electric field
over a sphere containing all charge present in a system, the result will
be</p>
<p><span
class="math display">\int_{r&lt;R}\mathbf{E}(\mathbf{x})\,d^3x=-\frac{\mathbf{p}}{3\epsilon_0}</span>
where <span
class="math inline">\mathbf{p}=\int_{}\mathbf{x&#39;}\rho(\mathbf{x&#39;})\,d^3x&#39;</span>
is the electric dipole moment of the charge distribution with respect to
the center of the sphere.</p>
<p>We realized that, in order to avoid contradicting this result, we
must modify our expression for the electric field casued by a dipole at
<span class="math inline">\mathbf{x}_0</span></p>
<p>We thus found</p>
<p><span
class="math display">\mathbf{E}(\mathbf{x})=\frac{1}{4\pi\epsilon_0}\left[\frac{3\mathbf{n}(\mathbf{p}\cdot\mathbf{n})-\mathbf{p}}{|\mathbf{x}-\mathbf{x}_0|^3}-\frac{4\pi}{3}\mathbf{p}\delta(\mathbf{x}-\mathbf{x}_0)\right]</span></p>
<p>A number of interesting techniques were used in this derivation. We
exploited the expansion in spherical harmonics of <span
class="math inline">\frac{1}{|\mathbf{x}-\mathbf{x&#39;}|}</span> and
then made use of the orthogonality of spherical harmonics. We also made
good use of many different formulas from electrodynamics, providing a
nice example of how different concepts connect at the most unexpected
times.</p>
<p>None of the thinking here is greatly original. I merely filled in
some missing details in Jackson’s derivation. To anyone interested in
seeing more elegant work like this, I highly recommend reading J.D.
Jackson’s "Classical Electrodynamics." The book is sometimes difficult
to follow, but when you understand him, it feels magical.</p>
<p>I hope that some of the manipulations shown here proved interesting
and gave the reader some intellectual satisfaction. As always, if you
have any comments or questions, feel free to contact me by email at
chancellorceti@gmail.com or on Discord where my username is
floofydoggo.</p>
<p>And to anyone reading Jackson’s book, I hope this more detailed
derivation has provided more clarity to section 4.1 haha. I spent a few
hours this morning understanding that section, so I suppose this is my
"April contribution to humanity", if you will. Perhaps this will aid
some long-suffering Jackson student.</p>
<p>With all that said, watch for my next blogpost! It will likely
involve some more content from Jackson’s monster of a textbook. If you
enjoy my writing, be sure to send it to anyone else you think might like
it.</p>
</div>
</body>
</html>
