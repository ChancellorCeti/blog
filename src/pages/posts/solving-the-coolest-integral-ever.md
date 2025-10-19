---
layout: '../layouts/MarkdownPostLayout.astro'
title: "Solving the Coolest Integral Ever – Fourier Series, Gamma Functions, and the Riemann Zeta Function"
pubDate: 2025-10-18
description: "Presenting the solution to my new favorite integral! Many cool tricks used, many special functions make an appearance, very elegant problem."
author: 'Chancellor Ceti'
tags: ["math"]
---
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Chancellor Ceti" />
  <meta name="dcterms.date" content="2025-10-18" />
  <title>Solving the Coolest Integral Ever – Fourier Series, Gamma Functions, and the Riemann Zeta Function</title>
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
    .header_text{
        font-size: calc(1px+0.8vh+0.1vw);
        font-style:normal;
        margin: 0 0 0 0;
        margin-top:2vh;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    img {
      max-width: 70%;
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
<h1 class="title">Solving the Coolest Integral Ever – Fourier Series,
Gamma Functions, and the Riemann Zeta Function</h1>
<p class="author">Chancellor Ceti</p>
<p class="date">2025-10-18</p>
</header>
<h1>Table of Contents</h1>
<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#introduction" id="toc-introduction">Introduction</a></li>
<li><a
href="#bringing-in-the-gamma-function-an-observation-about-the-integrands-structure"
id="toc-bringing-in-the-gamma-function-an-observation-about-the-integrands-structure">Bringing in
the gamma function – an observation about the integrand’s
structure</a></li>
<li><a href="#finding-the-fourier-series-for-s1-s"
id="toc-finding-the-fourier-series-for-s1-s">Finding the Fourier Series
for s(1-s)</a></li>
<li><a href="#a-brief-analysis-interlude-for-the-depraved"
id="toc-a-brief-analysis-interlude-for-the-depraved">A Brief Analysis
Interlude for the Depraved</a></li>
<li><a
href="#finding-a-recurrence-relation-and-turning-the-integral-into-a-more-tractable-series"
id="toc-finding-a-recurrence-relation-and-turning-the-integral-into-a-more-tractable-series">Finding
a recurrence relation and turning the integral into a more tractable
series</a></li>
<li><a href="#a-moderately-gnarly-series"
id="toc-a-moderately-gnarly-series">A moderately gnarly series</a></li>
<li><a
href="#a-very-gnarly-series-made-easier-by-our-having-solved-a-moderately-gnarly-one"
id="toc-a-very-gnarly-series-made-easier-by-our-having-solved-a-moderately-gnarly-one">A
very gnarly series made easier by our having solved a moderately gnarly
one</a></li>
<li><a href="#wrapping-up-and-solving-the-integral"
id="toc-wrapping-up-and-solving-the-integral">Wrapping up and solving
the integral</a></li>
</ul>
</nav>
<h1 id="introduction">Introduction</h1>
<p>A few days ago, I was feeling a bit low, so like any normal person, I
lay in bed for several hours solving integrals I found on Youtube. I
would open a video, pause it at the start, solve the problem, and then
see how the uploader had done it. This went on for a long time until I
found one Maths505 video that changed the course of my Sunday afternoon.
The problem in the video was itself fairly normal, but in the comments
section, a certain gentleman by the name of "TiFn4G" suggested an
integral for Maths505 to do:</p>
<p><span
class="math display">I=\int_{0}^{1}\frac{x-\frac{1}{2}}{\ln(\frac{x}{1-x})}\,dx</span></p>
<p>Through a lucky find in the comments section, I encountered the love
of my life: this integral is the most elegant one I have ever seen.
Since I loved the problem so much, I thought I would share the solution
with other underemployed people on the internet. I encourage readers to
attempt this problem on their own before going to the next section; it’s
rare to find a problem this fun, so don’t spoil it by checking the
solution before you’ve completely exhausted yourself!</p>
<p>With that out of the way, let’s jump into the actual solution.</p>

<figure>
<img src="/images/integrand-plot.png" />
<figcaption>Plot of the integrand from 0 to 1</figcaption>
</figure>

<h1
id="bringing-in-the-gamma-function-an-observation-about-the-integrands-structure">Bringing in
the gamma function – an observation about the integrand’s
structure</h1>
<p>The integrand is very gnarly, and the problem presents a definite
integral, which led me to believe that no elementary antiderivative
exists here. Given this hunch, we already have some clues about what
kind of tactics need to be employed here. The first thing that jumped
out at me was that the integrand was very similar to <span
class="math inline">\frac{x-1}{\ln x}</span>, which has the convenient
integral representation</p>
<p><span class="math display">\int_{0}^{1}x^s\,ds=\frac{x-1}{\ln
x}</span></p>
<p>The function <span class="math inline">x^s</span>, when multiplied by
other terms resulting from our algebraic manipulation, seemed likely to
yield some useful properties. So I decided to try breaking up the
integrand in a way that would let me use this integral
representation.</p>
<p>The logarithm in the denominator is tricky to rearrange, so I decided
to instead focus on the numerator and try isolating a term of <span
class="math inline">\frac{x}{1-x}</span> over there.</p>
<p>If we let <span class="math inline">u=\frac{x}{1-x}</span>, we can
find</p>
<p><span class="math display">u-ux=x</span></p>
<p><span
class="math display">x=\frac{u}{u+1}=\frac{u+1-1}{u+1}=1-\frac{1}{u+1}</span></p>
<p>This yields</p>
<p><span
class="math display">x-\frac{1}{2}=\frac{1}{2}-\frac{1}{u+1}=\frac{u+1}{2(u+1)}-\frac{2}{2(u+1)}=\frac{u-1}{2(u+1)}</span></p>
<p>Note <span
class="math inline">u+1=\frac{x}{1-x}+\frac{1-x}{1-x}=\frac{1}{1-x}</span></p>
<p><span
class="math display">x-\frac{1}{2}=\frac{\frac{x}{1-x}-1}{2/(1-x)}</span></p>
<p>Therefore,</p>
<p><span
class="math display">\frac{x-\frac{1}{2}}{\ln(\frac{x}{1-x})}=(1-x)\frac{\frac{x}{1-x}-1}{2\ln(\frac{x}{1-x})}</span></p>
<p><span
class="math display">I=\int_{0}^{1}\frac{x-\frac{1}{2}}{\ln(\frac{x}{1-x})}=\frac{1}{2}\int_{0}^{1}(1-x)\frac{\frac{x}{1-x}-1}{\ln(\frac{x}{1-x})}</span></p>
<p>Excellent! Now it becomes clear how we can use the aforementioned
integral representation.</p>
<p><span
class="math display">I=\frac{1}{2}\int_{0}^{1}(1-x)\left(\int_{0}^{1}\left(\frac{x}{1-x}\right)^s\,ds\right)\,dx=\frac{1}{2}\int_{0}^{1}\left(\int_{0}^{1}x^s(1-x)^{1-s}\,ds\right)\,dx</span></p>
<p>Since the integrand is measurable and nonnegative for all the values
of <span class="math inline">x</span> and <span
class="math inline">s</span> within the region of integration, Tonelli’s
Theorem lets us exchange the order of integration to find</p>
<p><span
class="math display">I=\frac{1}{2}\int_{0}^{1}\left(\int_{0}^{1}x^s(1-x)^{1-s}\,dx\right)\,ds</span></p>
<p>As we had hoped, the integral representation involving <span
class="math inline">x^s</span> did indeed yield a convenient expression. We
know that</p>
<p><span
class="math display">B(m,n)=\frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}=\int_{0}^{1}x^{m-1}(1-x)^{n-1}\,dx</span></p>
<p>Note that <span class="math inline">s=(s+1)-1</span> and <span
class="math inline">(1-s)=(2-s)-1</span>, so that</p>
<p>So our integral now becomes</p>
<p><span
class="math display">I=\frac{1}{2}\int_{0}^{1}B(s+1,2-s)\,dx=\frac{1}{2}\int_{0}^{1}\frac{\Gamma(s+1)\Gamma(2-s)}{\Gamma(3)}\,ds</span></p>
<p><span
class="math display">I=\frac{1}{4}\int_{0}^{1}\Gamma(s+1)\Gamma(2-s)\,ds</span></p>
<p>Again, we’re forced to marvel at the ingenuity of this problem and
how nicely everything simplifies. The integrand’s structure now makes
the next step obvious: rearranging to utilize the reflection property
i.e.</p>
<p><span class="math display">\Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin(\pi
s)}</span></p>
<p>Note that</p>
<p><span
class="math display">\Gamma(s+1)\Gamma(2-s)=\biggl(s\Gamma(s)\biggr)\biggl((1-s)\Gamma(1-s)\biggr)=s(1-s)\cdot
\Gamma(s)\Gamma(1-s)</span></p>
<p>So we find that</p>
<p><span class="math display">I=\frac{1}{4}\int_{0}^{1}s(1-s)\cdot
\frac{\pi}{\sin(\pi
s)}\,ds=\frac{\pi}{4}\int_{0}^{1}\frac{s(1-s)}{\sin(\pi
s)}\,ds</span></p>
<p>There are a few approaches to this. My instinct told me that a
contour integral approach could likely work, but a solution using
Fourier series seemed more tractable. <span
class="math inline">\frac{\cos(2\pi ns)}{\sin(\pi s)}</span> presents a
world of useful properties and recurrence relations. Thus, we arrive at
the next chapter of our journey.</p>


<figure>
<img src="/images/sine-integrand-plot.png" />
<figcaption>Plot of the integrand s(1-s)/sin(pi s)from 0 to 1</figcaption>
</figure>

<h1 id="finding-the-fourier-series-for-s1-s">Finding the Fourier Series
for s(1-s)</h1>
<p>This part involves fairly standard calculations, but for completeness
and the benefit of less experienced calculus students, I have included
all the steps.</p>
<p>We seek a series representation of the form</p>
<p><span class="math display">s(1-s)=\sum_{k=0}^{\infty}a_k\cos(2\pi
ks)</span></p>
<p>By multiplying both sides by <span class="math inline">\cos(2\pi
js)</span> and integrating from <span class="math inline">0</span> to
<span class="math inline">1</span>, it is easily found that</p>
<p><span
class="math display">a_0=\int_{0}^{1}s(1-s)\,ds=\frac{1}{6}</span></p>
<p><span class="math display">a_k=2 \int_{0}^{1}s(1-s)\cos(2\pi
ks)\,ds</span></p>
<p>This second integral is easily evaluated using integration by parts
(details omitted because anyone who’s gotten this far knows how to do
it):</p>
<p><span class="math display">a_k=\frac{-u\cos u}{2(\pi
k)^3}\Bigg|_{0}^{2\pi k}=\frac{-1}{\pi^2 k^2}</span></p>
<p>Thus,</p>
<p><span
class="math display">s(1-s)=\frac{1}{6}-\frac{1}{\pi^2}\sum_{k=1}^{\infty}\frac{\cos(2\pi
ks)}{k^2}</span></p>
<p>We can substitute this back into our integral to find</p>
<p><span class="math display">I=\frac{\pi}{4}\int_{0}^{1}\csc(\pi
s)\left(\frac{1}{6}-\frac{1}{\pi^2}\sum_{k=1}^{\infty}\frac{\cos(2\pi
ks)}{k^2}\right)\,ds</span></p>
<p><span class="math display">I=\frac{\pi}{24}\int_{0}^{1}\csc(\pi
s)\,ds-\frac{1}{4\pi}\int_{0}^{1}\left(\sum_{k=1}^{\infty}\frac{\cos(2\pi
ks)}{\sin(\pi s)\cdot k^2}\right)\,ds</span></p>
<p>This looks intimidating, but the magic potato energy of the universe
makes it possible to go further.</p>
<h1 id="a-brief-analysis-interlude-for-the-depraved">A Brief Analysis
Interlude for the Depraved</h1>
<p>The first thing most readers will notice is that <span
class="math inline">\csc(\pi s)</span> has a singularity at <span
class="math inline">s=0</span>, making everything here diverge if we
naively go about this. To avoid that problem, truncate the bounds of
integration to be <span class="math inline">[\epsilon,1-\epsilon]</span>
where <span class="math inline">\epsilon \to 0</span>. Once the limit is
taken, the integrals will be the same on the truncated bounds as they
are on <span class="math inline">[0,1]</span>.</p>
<p>Now, it becomes clear that, at some point, the ability to interchange
summation and integration in the right-hand term will be useful.
However, the presence of <span class="math inline">\sin(\pi s)</span>
makes it dubious whether that is possible due to issues of divergence.
We can demonstrate uniform convergence to prove the validity of
interchanging these operators.</p>
<p>Define</p>
<p><span class="math display">S_N(s)=\sum_{k=1}^{N}\frac{\cos(2\pi
ks)}{k^2}=\sum_{k=1}^{N}g_k(s)</span></p>
<p><span class="math display">S(s)=\lim_{N\to \infty}S_N(s)</span></p>
<p>We find that</p>
<p><span class="math display">\left|g_k(s)\right|=\left|\frac{\cos(2\pi
ks)}{k^2}\right|\le\frac{\left|\cos(2\pi ks)\right|}{k^2}\le
\frac{1}{k^2}</span></p>
<p>Now, if we let <span class="math inline">M_k=\frac{1}{k^2}</span>, we
can use the Weierstrass M-test to find</p>
<p><span class="math display">\left|g_k(s)\right|\le M_k</span></p>
<p>And we see that <span class="math inline">\sum_{k=1}^{N}M_k</span>
converges</p>
<p><span
class="math display">\lim_{N\to\infty}\sum_{k=1}^{N}M_k=\sum_{k=1}^{\infty}\frac{1}{k^2}=\zeta(2)=\frac{\pi^2}{6}</span></p>
<p>Therefore, <span
class="math inline">S_N(s)=\sum_{k=1}^{N}g_k(s)</span> converges
absolutely and uniformly i.e.</p>
<p><span class="math display">\lim_{N\to\infty} \sup_{s \in
[0,1]}\left|S_N(s)-S(s)\right|=0</span></p>
<p>Now, our integrand is <span class="math inline">\csc(\pi
s)S_N(s)</span></p>
<p>Recall that we truncated the bounds of integration to be <span
class="math inline">[\epsilon,1-\epsilon]</span> where <span
class="math inline">\epsilon\to 0</span>. So we seek to prove uniform
convergence on that interval.</p>
<p>We find</p>
<p><span class="math display">\left|\csc(\pi s)S_N(s)-\csc(\pi
s)S(s)\right|</span> <span class="math display">=\csc(\pi
s)\left|S_N(s)-S(s)\right|\le\csc(\pi s)\sup_{s \in
[\epsilon,1-\epsilon]}\left|S_N(s)-S(s)\right|</span></p>
<p>As <span class="math inline">N\to\infty</span>, that final expression
goes to zero due to the uniform convergence of <span
class="math inline">S_N(s)</span> – note that <span
class="math inline">[\epsilon,1-\epsilon]</span> is a subset of <span
class="math inline">[0,1]</span>, so the uniform convergence of <span
class="math inline">S_N</span> on <span class="math inline">[0,1]</span>
applies on the truncated interval as well.</p>
<p>This yields</p>
<p><span class="math display">\lim_{N\to\infty}\sup_{s\in
[\epsilon,1-\epsilon]}\left|\csc(\pi s)S_N(s)-\csc(\pi
s)S(s)\right|=0</span></p>
<p>Therefore, the integrand <span
class="math inline">\sum_{k=1}^{N}\frac{\cos(2\pi ks)}{\sin(\pi s)\cdot
k^2}</span> converges uniformly, so we can interchange summation and
integration!</p>
<h1
id="finding-a-recurrence-relation-and-turning-the-integral-into-a-more-tractable-series">Finding
a recurrence relation and turning the integral into a more tractable
series</h1>
<p>With that brief foray into analysis completed, let us return to our
problem</p>
<p><span class="math display">I=\frac{\pi}{24}\int_{0}^{1}\csc(\pi
s)\,ds-\frac{1}{4\pi}\int_{0}^{1}\left(\sum_{k=1}^{\infty}\frac{\cos(2\pi
ks)}{\sin(\pi s)\cdot k^2}\right)\,ds</span></p>
<p>Having just proved uniform convergence of the sum being integrated,
we can interchange summation and integration to get</p>
<p><span
class="math display">I=\lim_{\epsilon\to0}\left(\frac{\pi}{24}\int_{\epsilon}^{1-\epsilon}\csc(\pi
s)\,ds-\frac{1}{4\pi}\sum_{k=1}^{\infty}\frac{1}{k^2}\left(\int_{\epsilon}^{1-\epsilon}\frac{\cos(2\pi
ks)}{\sin(\pi s)}\,ds\right)\right)</span></p>
<p>Note that we also moved <span
class="math inline">\frac{1}{k^2}</span> out of the integral since it is
a constant with respect to <span class="math inline">s</span>.</p>
<p>This most recent form of the integral suggests a search for a
recurrence relation as the most reasonable next step. We know that <span
class="math inline">\cos(2\pi ks)-\cos(2\pi(k-1)s)</span> has a useful
formula in terms of sines, so it seems probable that a recurrence
relation of some sort can be found for <span
class="math inline">\int_{0}^{1}\frac{\cos(2\pi ks)}{\sin(\pi
s)}\,ds</span>.</p>
<p>This approach has the added benefit of offering the possibility of
cancelling out the first cosecant integral that diverges.</p>
<p>Before doing that, though, introduce the substitution <span
class="math inline">u=\pi s</span> and get</p>
<p><span
class="math display">I=\lim_{\epsilon\to0}\left(\frac{1}{24}\int_{\epsilon}^{\pi(1-\epsilon)}\csc(u)\,du-\frac{1}{4\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}\left(\int_{\epsilon}^{\pi(1-\epsilon)}\frac{\cos(2nu)}{\sin(u)}\,du\right)\right)</span></p>
<p>With that done, we’re ready to look for our recurrence relation.
Define</p>
<p><span
class="math display">L_n(\epsilon)=\int_{\epsilon}^{\pi(1-\epsilon)}\frac{\cos(2nu)}{\sin(u)}\,du</span></p>
<p>Now recall the trigonometric identity</p>
<p><span
class="math display">\cos\alpha-\cos\beta=-2\sin\left(\frac{\alpha+\beta}{2}\right)\sin\left(\frac{\alpha-\beta}{2}\right)</span></p>
<p>Using this, we find that</p>
<p><span class="math display">L_{n-1}(\epsilon)-L_n(\epsilon)=-2
\int_{\epsilon}^{\pi(1-\epsilon)}\frac{\sin((2n-1)x)\sin(-x)}{\sin
x}\,dx</span> <span class="math display">=2
\int_{\epsilon}^{\pi(1-\epsilon)}\sin((2n-1)x)\,dx</span></p>
<p>Note that this integral no longer has any singularities, so we can
safely take the limit</p>
<p><span
class="math display">\lim_{\epsilon\to0}\left(L_{n-1}(\epsilon)-L_n(\epsilon)\right)=2
\int_{0}^{\pi}\sin((2n-1)x)\,dx</span></p>
<p><span
class="math display">\lim_{\epsilon\to0}\left(L_{n-1}(\epsilon)-L_n(\epsilon)\right)=\frac{-2}{2n-1}\cos
x\Big|_{0}^{2\pi n-\pi}=\frac{4}{2n-1}</span></p>
<p>We can sum over this relation from <span class="math inline">1</span>
to <span class="math inline">n</span> to find</p>
<p><span
class="math display">\lim_{\epsilon\to0}\left(\sum_{k=1}^{n}\left(L_{k-1}(\epsilon)-L_k(\epsilon)\right)\right)=\sum_{k=1}^{n}\frac{4}{2k-1}</span></p>
<p>Alo notice that this sum telescopes, i.e.</p>
<p><span
class="math display">\lim_{\epsilon\to0}\left(\sum_{k=1}^{n}(L_{k-1}(\epsilon)-L_k(\epsilon))\right)=\lim_{\epsilon\to0}\left(-L_n(\epsilon)+L_0(\epsilon)\right)</span></p>
<p>Therefore,</p>
<p><span
class="math display">\lim_{\epsilon\to0}\left(L_0(\epsilon)-L_n(\epsilon)\right)=\sum_{k=1}^{n}\frac{4}{2k-1}</span></p>
<p><span
class="math display">\lim_{\epsilon\to0}L_n(\epsilon)=\lim_{\epsilon\to0}\left(L_0(\epsilon)-\sum_{k=1}^{n}\frac{4}{2k-1}\right)=\lim_{\epsilon\to0}\left(L_0-\sum_{k=0}^{n-1}\frac{4}{2k+1}\right)</span></p>
<p>Now recall that, with our limiting procedure involving <span
class="math inline">\epsilon</span>,</p>
<p><span
class="math display">I=\lim_{\epsilon\to0}\left(\frac{1}{24}\int_{\epsilon}^{\pi(1-\epsilon)}\csc(u)\,du-\frac{1}{4\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}\left(\int_{\epsilon}^{\epsilon(1-\pi)}\frac{\cos(2nu)}{\sin(u)}\,du\right)\right)</span></p>
<p><span
class="math display">=\lim_{\epsilon\to0}\left(\frac{1}{24}\int_{\epsilon}^{\pi(1-\epsilon)}\csc(u)\,du-\frac{1}{4\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}L_n(\epsilon)\right)</span></p>
<p><span
class="math display">=\lim_{\epsilon\to0}\left(\frac{1}{24}\int_{\epsilon}^{\pi(1-\epsilon)}\csc(u)\,du-\frac{1}{4\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}\left(L_0(\epsilon)-\sum_{k=0}^{n-1}\frac{4}{2k+1}\right)\right)</span></p>
<p><span
class="math display">=\lim_{\epsilon\to0}\left(\frac{1}{24}\int_{\epsilon}^{\pi(1-\epsilon)}\csc(u)\,du-\frac{1}{4\pi^2}L_0(\epsilon)\zeta(2)+\frac{1}{\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}\sum_{k=0}^{n-1}\frac{1}{2k+1}\right)</span></p>
<p>Now, the observant reader will notice that</p>
<p><span
class="math display">\lim_{\epsilon\to0}\int_{\epsilon}^{\pi(1-\epsilon)}\csc
u\,du=\lim_{\epsilon\to
0}\int_{\epsilon}^{\pi(1-\epsilon)}\frac{\cos(2u\cdot 0)}{\sin
u}\,du=\lim_{\epsilon\to0}L_0(\epsilon)</span></p>
<p>Therefore,</p>
<p><span
class="math display">\lim_{\epsilon\to0}\left(\frac{1}{24}\int_{\epsilon}^{\pi(1-\epsilon)}\csc(u)\,du-\frac{1}{4\pi^2}L_0(\epsilon)\zeta(2)\right)</span>
<span
class="math display">=\lim_{\epsilon\to0}\left(\frac{L_0(\epsilon)}{24}-L_0(\epsilon)\cdot\left(\frac{1}{4\pi^2}\right)\left(\frac{\pi^2}{6}\right)\right)</span>
<span
class="math display">=\lim_{\epsilon\to0}L_0(\epsilon)\left(\frac{1}{24}-\frac{1}{24}\right)=0</span></p>
<p>Excellent cancellation of the divergent terms! We are left with</p>
<p><span
class="math display">I=\lim_{\epsilon\to0}\left(\frac{1}{\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}\sum_{k=0}^{n-1}\frac{1}{2k+1}\right)</span></p>
<p>Note that no terms involving <span
class="math inline">\epsilon</span> are left, so we can remove the limit
and get</p>
<p><span
class="math display">I=\frac{1}{\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}\sum_{k=0}^{n-1}\frac{1}{2k+1}</span></p>
<p>Now notice that</p>
<p><span
class="math display">\sum_{k=0}^{n-1}\frac{1}{2k+1}=1+\frac{1}{3}+\ldots+\frac{1}{2n-1}=H_{2n}-\sum_{k=1}^{n}\frac{1}{2n}=H_{2n}-\frac{H_n}{2}</span></p>
<p>where <span class="math inline">H_n</span> is the n’th harmonic
number.</p>
<p>This lets us simplify our series into</p>
<p><span
class="math display">I=\frac{1}{\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}\left(H_{2n}-\frac{H_n}{2}\right)</span></p>
<p>We must now evaluate these two sums separately</p>
<p><span
class="math display">I=\frac{1}{\pi^2}S_1-\frac{1}{2\pi^2}S_2</span></p>
<p><span
class="math display">S_1=\sum_{n=1}^{\infty}\frac{H_{2n}}{n^2}</span></p>
<p><span
class="math display">S_2=\sum_{n=1}^{\infty}\frac{H_n}{n^2}</span></p>
<p>Let us begin with the second sum, which has a simpler <span
class="math inline">H_n</span> rather than <span
class="math inline">H_{2n}</span></p>



<figure>
<img src="/images/s1_s2_plots.png" />
<figcaption>Plot of <span
class="math inline">S_1=\sum_{n=1}^{N}\frac{H_{2n}}{n^2}</span> in green and <span class="math inline">S_2=\sum_{n=1}^{N}\frac{H_n}{n^2}</span> in white with <span class="math inline">N \in [0,1000]</span>, showing visually how these series converge</figcaption>
</figure>




<h1 id="a-moderately-gnarly-series">A moderately gnarly series</h1>
<p>We are considering</p>
<p><span
class="math display">S_2=\sum_{n=1}^{\infty}\frac{H_n}{n^2}</span></p>
<p>The first trick we employ is introducing an integral representation
for the harmonic numbers,</p>
<p><span
class="math display">H_n=\int_{0}^{1}\frac{1-x^n}{1-x}\,dx</span></p>
<p>Plugging this in yields</p>
<p><span
class="math display">S_2=\sum_{n=1}^{\infty}\frac{1}{n^2}\left(\int_{0}^{1}\frac{1-x^n}{1-x}\,dx\right)=\int_{0}^{1}\frac{1}{1-x}\left(\sum_{n=1}^{\infty}\frac{1-x^n}{n^2}\right)\,dx</span></p>
<p>The interchange of integration and summation can be justified by
Tonelli’s theorem, since <span
class="math inline">\frac{1-x^n}{n^2(1-x)}</span> is measurable and
nonnegative for <span class="math inline">x\in (0,1)</span>.</p>
<p>We can use use the definition of the polylogarithm to turn this into
a friendlier expression</p>
<p><span
class="math display">\mathrm{Li}_n(x)=\sum_{k=1}^{\infty}\frac{x^k}{k^n}</span></p>
<p><span
class="math display">S_2=\int_{0}^{1}\frac{\zeta(2)-\mathrm{Li}_2(x)}{1-x}</span></p>
<p>Now we must find the integral of <span
class="math inline">\frac{\mathrm{Li}_2(x)}{1-x}</span>.</p>
<p>Apply integration by parts with <span
class="math inline">u=\mathrm{Li}_2(x)</span> and <span
class="math inline">\,dv=\frac{1}{1-x}</span>. We easily find that <span
class="math inline">v=-\ln(1-x)</span></p>
<p>From the definition of the polylogarithm, we find</p>
<p><span
class="math display">\frac{\,d}{\,dx}\mathrm{Li}_n(x)=\sum_{k=1}^{\infty}\frac{kx^{k-1}}{k^n}=\frac{1}{x}\sum_{k=1}^{\infty}\frac{x^k}{k^{n-1}}=\frac{\mathrm{Li}_{n-1}(x)}{x}</span></p>
<p>So <span
class="math inline">\,du=\frac{\mathrm{Li}_1(x)}{x}</span></p>
<p>However, note that</p>
<p><span
class="math display">\mathrm{Li}_1(x)=\sum_{k=1}^{\infty}\frac{x^k}{k}=-\ln(1-x)</span></p>
<p>Therefore, <span
class="math inline">\,du=\frac{-\ln(1-x)}{x}</span></p>
<p>Thus,</p>
<p><span class="math display">\int
\frac{\mathrm{Li}_2(x)}{1-x}\,dx=-\ln(1-x)\mathrm{Li}_2(x)-\int
\frac{\ln^2(1-x)}{x}\,dx</span></p>
<p>This new integral can be solved with the substitution <span
class="math inline">t=1-x</span>, yielding</p>
<p><span class="math display">\int \frac{\ln^2(1-x)}{x}\,dx=-\int
\frac{ln^2(t)}{1-t}\,dt</span></p>
<p>Again apply integration by parts with <span
class="math inline">u=\ln^2(t)</span>, <span
class="math inline">\,dv=\frac{1}{1-t}</span>, <span
class="math inline">\,du=\frac{2\ln(t)}{t}</span>, <span
class="math inline">v=-\ln(1-t)</span> and find</p>
<p><span class="math display">\int
\frac{ln^2(t)}{1-t}\,dt=-\ln^2(t)\ln(1-t)+2\int
\frac{\ln(t)\ln(1-t)}{t}\,dt</span></p>
<p>Finally, apply integration by parts just once more with <span
class="math inline">u=\ln(t)</span> and <span
class="math inline">\,dv=\frac{\ln(1-t)}{t}</span>. Remember the formula
for the derivative of <span
class="math inline">\mathrm{Li}_2(x)=\frac{-\ln(1-x)}{x}</span> so <span
class="math inline">v=-\mathrm{Li}_2(t)</span>. Thus,</p>
<p><span class="math display">\int
\frac{\ln(t)\ln(1-t)}{t}\,dt=-\ln(t)\mathrm{Li}_2(t)+\int
\frac{\mathrm{Li}_2(t)}{t}\,dt=-\ln(t)\mathrm{Li}_2(t)+\mathrm{Li}_3(t)</span></p>
<p>Now go back to our original integral and remember to change <span
class="math inline">t</span> to <span class="math inline">1-x</span>
everywhere, in accordance with our substitution</p>
<p><span class="math display">\int
\frac{\mathrm{Li}_2(x)}{1-x}\,dx=-\ln(1-x)\mathrm{Li}_2(x)-\int
\frac{\ln^2(1-x)}{x}\,dx</span></p>
<p><span class="math display">=-\ln(1-x)\mathrm{Li}_2(x)+\int
\frac{\ln^2(t)}{1-t}\,dx</span></p>
<p><span
class="math display">=-\ln(1-x)\mathrm{Li}_2(x)-\ln^2(1-x)\ln(x)-2\ln(1-x)\mathrm{Li}_2(1-x)+2\mathrm{Li}_3(1-x)</span></p>
<p>Excellent!</p>
<p>Now let’s go back to our earlier expression</p>
<p><span
class="math display">S_2=\int_{0}^{1}\frac{\zeta(2)-\mathrm{Li}_2(x)}{1-x}</span></p>
<p><span class="math display">\begin{gathered}
S_2 = \biggl(-\zeta(2)\ln(1-x)+\ln(1-x)\mathrm{Li}_2(x)+\ln^2(1-x)\ln
x\\
\qquad+2\ln(1-x)\mathrm{Li}_2(1-x)-2\mathrm{Li}_3(1-x)\biggr)\Big|_{0}^{1}
\end{gathered}</span></p>
<p>Note that <span class="math inline">\mathrm{Li}_n(0)=0</span>, <span
class="math inline">\mathrm{Li}_n(1)=\sum_{k=1}^{\infty}\frac{1}{k^n}=\zeta(n)</span>,
and <span class="math inline">\ln(1)=0</span>. This makes most of the
terms go to zero and yields</p>
<p><span
class="math display">\sum_{n=1}^{\infty}\frac{H_n}{n^2}=-\zeta(2)ln(0)+\ln(0)\zeta(2)+2\zeta(3)=2\zeta(3)</span></p>
<p>What an incredible simplification! Now let’s see how to go about the
more complicated sum <span class="math inline">S_1</span>.</p>
<h1
id="a-very-gnarly-series-made-easier-by-our-having-solved-a-moderately-gnarly-one">A
very gnarly series made easier by our having solved a moderately gnarly
one</h1>
<p>Now for the most intimidating series yet,</p>
<p><span
class="math display">S_1=\sum_{n=1}^{\infty}\frac{H_{2n}}{n^2}</span></p>
<p>Begin by noting that</p>
<p><span
class="math display">H_{2n}=\sum_{k=1}^{n}\frac{1}{k}+\sum_{k=n+1}^{2n}\frac{1}{k}=H_n+\sum_{k=1}^{n}\frac{1}{n+k}</span></p>
<p>Therefore,</p>
<p><span
class="math display">S_1=\sum_{n=1}^{\infty}\frac{H_{2n}}{n^2}=\sum_{n=1}^{\infty}\frac{H_n}{n^2}+\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{n^2(n+k)}</span></p>
<p><span
class="math display">S_1=2\zeta(3)+\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{n^2(n+k)}</span></p>
<p>This double summation looks intimidating but actually becomes
amazingly simple once a partial fraction decomposition is introduced
that leads to a telescoping property. We use</p>
<p><span
class="math display">\frac{1}{n^2(n+k)}=\frac{1}{n^2k}+\frac{1}{k^2}\left(\frac{1}{n+k}-\frac{1}{n}\right)</span></p>
<p>This leads to</p>
<p><span class="math display">\begin{aligned}
    \sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{n^2(n+k)}&amp;=\sum_{n=1}^{\infty}\frac{1}{n^2}\sum_{k=1}^{n}\frac{1}{k}+\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{k^2}\left(\frac{1}{n+k}-\frac{1}{n}\right)\\
                                                       &amp;=\sum_{n=1}^{\infty}\frac{H_n}{n^2}+\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{k^2}\left(\frac{1}{n+k}-\frac{1}{n}\right)\\
                                                       &amp;=2\zeta(3)+\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{k^2}\left(\frac{1}{n+k}-\frac{1}{n}\right)
\end{aligned}</span></p>
<p>Now we make a series of maneuvers to try to find a telescoping
relation. First notice that we would infinitely prefer to have <span
class="math inline">\frac{1}{n^2}</span> rather than <span
class="math inline">\frac{1}{k^2}</span> so that we can get nice
relations to the Riemann zeta function. Therefore, we need to try
re-indexing to get that term.</p>
<p>We can re-index using the following argument. Suppose <span
class="math inline">f(k)=\frac{1}{k^2}</span> and <span
class="math inline">g(n,k)=\frac{1}{n+k}-\frac{1}{n}</span></p>
<p>Then we have a double sum of the form</p>
<p><span class="math display">\begin{aligned}
\sum_{n=1}^{\infty}\sum_{k=1}^{n} f(k)g(n,k)
  &amp;= f(1)g(1,1) \\
  &amp;\quad + \bigl[f(1)g(2,1) + f(2)g(2,2)\bigr] \\
  &amp;\quad + \bigl[f(1)g(3,1) + f(2)g(3,2) + f(3)g(3,3)\bigr] + \cdots
\\
  \\
  &amp;=f(1)g(1,1)+f(2)\biggl(g(2,2)+g(3,2)+\cdots\biggr) \\
  &amp;\quad + f(3)\biggl(g(3,3)+g(4,3)+\cdots\biggr)+\cdots \\
  \\
  &amp;=\sum_{n=1}^{\infty}f(n)\sum_{k=n}^{\infty}g(k,n)
\end{aligned}</span></p>
<p>So, with our choice of <span class="math inline">f(k)</span> and
<span class="math inline">g(n,k)</span>, we find</p>
<p><span
class="math display">\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{k^2}\left(\frac{1}{n+k}-\frac{1}{n}\right)=\sum_{n=1}^{\infty}\frac{1}{n^2}\sum_{k=n}^{\infty}\left(\frac{1}{n+k}-\frac{1}{k}\right)</span></p>
<p>Great, we’ve gotten that <span
class="math inline">\frac{1}{n^2}</span> that leads to zeta function
terms, and we also have an inner sum that easily yields a telescoping
relation.</p>
<p>Let’s consider the inner sum on its own <span
class="math display">\begin{split}
&amp;
\lim_{N\to\infty}\sum_{k=n}^{N}\left(\frac{1}{n+k}-\frac{1}{k}\right) \\
&amp;
=\lim_{N\to\infty}\left(\sum_{k=n}^{N-n}\frac{1}{n+k}+\sum_{k=N-n+1}^{N}\frac{1}{n+k}-\sum_{k=n}^{2n-1}\frac{1}{k}-\sum_{k=2n}^{N}\frac{1}{k}\right)
\\
&amp; =
\lim_{N\to\infty}\left(\sum_{k=n}^{N-n}\frac{1}{n+k}+\sum_{k=N-n+1}^{N}\frac{1}{n+k}-\sum_{k=n}^{2n-1}\frac{1}{k}-\sum_{k=n}^{N-n}\frac{1}{n+k}\right)\\
&amp; =
\lim_{N\to\infty}\left(\sum_{k=N-n+1}^{N}\frac{1}{n+k}-\sum_{k=n}^{2n-1}\frac{1}{k}\right)\\
&amp;=-\sum_{k=n}^{2n-1}\frac{1}{k}=-(H_{2n-1}-H_{n-1})=H_{n-1}-H_{2n-1}\\
&amp;=H_n-\frac{1}{n}-\left(H_{2n}-\frac{1}{2n}\right)=H_n-H_{2n}-\frac{1}{2n}
\end{split}</span></p>
<p>Therefore,</p>
<p><span
class="math display">\sum_{n=1}^{\infty}\frac{1}{n^2}\sum_{k=n}^{\infty}\left(\frac{1}{n+k}-\frac{1}{k}\right)=\sum_{n=1}^{\infty}\frac{H_n}{n^2}-\sum_{n=1}^{\infty}\frac{H_{2n}}{n^2}-\frac{1}{2}\sum_{n=1}^{\infty}\frac{1}{n^3}</span>
<span class="math display">=2\zeta(3)-S_1-\frac{\zeta(3)}{2}</span>
<span class="math display">=\frac{3\zeta(3)}{2}-S_1</span></p>
<p>Now combine our last few major results to find</p>
<p><span class="math display">\begin{split}
        S_1
&amp;=2\zeta(3)+\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{n^2(n+k)}\\
&amp;=2\zeta(3)+\left(2\zeta(3)+\sum_{n=1}^{\infty}\sum_{k=1}^{n}\frac{1}{k^2}\left(\frac{1}{n+k}-\frac{1}{n}\right)\right)\\
&amp;=4\zeta(3)+\sum_{n=1}^{\infty}\frac{1}{n^2}\sum_{k=n}^{\infty}\left(\frac{1}{n+k}-\frac{1}{n}\right)\\
&amp;=4\zeta(3)+\left(\frac{3\zeta(3)}{2}-S_1\right)
\end{split}</span></p>
<p>And finally, we arrive at</p>
<p><span
class="math display">S_1=\sum_{n=1}^{\infty}\frac{H_{2n}}{n^2}=\frac{11\zeta(3)}{4}</span></p>
<p>Yet another mind-blowing simplification. Now let’s plug our values
for <span class="math inline">S_1</span> and <span
class="math inline">S_2</span> into our expression for <span
class="math inline">I</span> to actually solve the integral.</p>
<h1 id="wrapping-up-and-solving-the-integral">Wrapping up and solving
the integral</h1>
<p>Our last expression for <span class="math inline">I</span> was</p>
<p><span
class="math display">I=\int_{0}^{1}\frac{x-\frac{1}{2}}{\ln\left(\frac{x}{1-x}\right)}\,dx=\frac{1}{\pi^2}S_1-\frac{1}{2\pi^2}S_2</span></p>
<p>We found that <span
class="math inline">S_1=\frac{11\zeta(3)}{4}</span> and <span
class="math inline">S_2=2\zeta(3)</span></p>
<p>Therefore,</p>
<p><span
class="math display">\int_{0}^{1}\frac{x-\frac{1}{2}}{\ln\left(\frac{x}{1-x}\right)}\,dx=\frac{11\zeta(3)}{4\pi^2}-\frac{4\zeta(3)}{4\pi^2}=\frac{7\zeta(3)}{4\pi^2}</span></p>
<p>What an incredible result! We’ve managed to get an answer involving
both <span class="math inline">\pi^2</span> and <span
class="math inline">\zeta(3)</span>, which is really cool.</p>
<p>After having done so much work, it’s easy to lose sight of just how
convoluted this process was and how many times the integral proved to
have really nice properties that made life easier. Divergent terms
appeared several times, such as <span
class="math inline">\int_{0}^{1}\csc(\pi s)\,ds</span> and <span
class="math inline">\lim_{x\to0}\ln(x)\zeta(2)</span>, but always in
such a manner that they cancelled out and didn’t cause problems, which
strikes me as incredible. In the sums, we found lots of recurrence
relations and telescoping relations that led to crazy simplifications
where almost all the terms disappeared. And we got to introduce all
kinds of exotic functions with amazing properties, which further added
to the fun – <span class="math inline">\zeta(s),\Gamma(s)</span>, and
<span class="math inline">\mathrm{ Li}_n(x)</span>. The vast array of
techniques used and the elegance of the solution have made this made my
favorite integral and hopefully at least top 10 for my readers as
well.</p>
<p>Today we have learnt that the Maths505 comments section may or may
not contain the key to enlightenment in the form of indefinite
integrals. Hopefully the reader has enjoyed this mathematical nirvana as
much as I have. If you have comments, corrections, or random thoughts,
feel free to message me on Discord or email me (contact info in the
About section of this site). Thanks for reading!</p>
            </div>
</body>
</html>
