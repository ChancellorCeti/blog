---
layout: '../layouts/MarkdownPostLayout.astro'
title: "Improvements on Stirling’s Approximation using Taylor Series Expansions"
pubDate: 2025-03-11
description: "I show how to get improvements on Stirling approximation to any desired degree of accuracy using two Taylor series expansions and a handful of other nice tricks."
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
  <meta name="dcterms.date" content="2025-03-11" />
  <title>Improvements on Stirling’s Approximation using Taylor
Series Expansions</title>
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
<h1 class="title">Improvements on Stirling’s Approximation using Taylor
Series Expansions</h1>
<p class="author">Chancellor Ceti</p>
<p class="date">2025-04-20</p>
</header>
<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#introduction" id="toc-introduction">Introduction</a></li>
<li><a href="#the-first-series-expansion"
id="toc-the-first-series-expansion">The First Series Expansion</a></li>
<li><a href="#the-second-series-expansion"
id="toc-the-second-series-expansion">The Second Series
Expansion</a></li>
<li><a href="#knowing-which-terms-to-keep"
id="toc-knowing-which-terms-to-keep">Knowing which terms to
keep</a></li>
<li><a href="#conclusion" id="toc-conclusion">Conclusion</a></li>
</ul>
</nav>
<h1 id="introduction">Introduction</h1>
<p>Stirling’s Approximation is a well-known approximation to the
factorial. <span class="math display">n!\sim
\biggl(\frac{n}{e}\biggr)^n\sqrt{2\pi n}</span> This approximation is
quite good for sufficiently large <span class="math inline">n</span>.
For <span class="math inline">n=100</span>, the approximation only has a
<span class="math inline">0.08 \%</span> error.</p>
<p>However, we must ask – can this approximation be improved upon?
Stirling’s Approximation has a convenient expression – simple, not
painful to plug into a calculator. But can we find an uglier solution
that yields a better approximation? The answer – yes, with special
emphasis on the word "uglier"</p>
<h1 id="the-first-series-expansion">The First Series Expansion</h1>
<p>Let’s start with what we know – how to derive Stirling’s
Approximation. The path to an improvement will make itself quite obvious
midway through the derivation.</p>
<p>We know that <span
class="math display">n!=\Gamma(n+1)=\int_{0}^{\infty}x^ne^{-x}\,dx</span>
A path towards an approximation makes itself obvious to us. If we want
to approximate <span class="math inline">n!</span> all we have to do is
approximate <span class="math inline">\Gamma(n+1)</span>. And if we want
to approximate <span class="math inline">\Gamma(n+1)</span>, all we have
to do is approximate <span class="math inline">x^ne^{-x}</span></p>
<p>Let’s rewrite that integrand as</p>
<p><span class="math display">x^ne^{-x}=e^{n\ln{x}-x}</span></p>
<p>Let’s play around with introducing a new variable <span
class="math inline">y=x-n</span></p>
<p>Then we have <span
class="math display">n\ln{x}-x=n\ln(y+n)-y-n=n\ln\biggl[n\biggl(1+\frac{y}{n}\biggr)\biggr]-y-n</span>
<span
class="math display">n\ln{x}-x=n\ln{n}+n\ln\biggl(1+\frac{y}{n}\biggr)-y-n</span></p>
<p>Now think about the fraction <span
class="math inline">\frac{y}{n}</span> <span
class="math display">\frac{y}{n}=\frac{x-n}{n}</span></p>
<p>Now consider a few things. The graph of <span
class="math inline">x^ne^{-x}</span> has a sharp peak at <span
class="math inline">x=n</span> (proof left as an exercise for the
reader, just set the derivative to zero)</p>
<p>Near the peak at <span class="math inline">x=n</span>, we must have
<span class="math inline">x-n</span> near zero.</p>
<p>Far away from <span class="math inline">x=n</span>, <span
class="math inline">x^ne^{-x}</span> takes on small, negligible values –
the larger <span class="math inline">n</span> is, the sharper the peak
and the more irrelevant are the terms far from the peak.</p>
<p>So if we only consider terms near the peak (valid for large <span
class="math inline">n</span>), then <span
class="math inline">\frac{y}{n}=\frac{x-n}{n}\approx 0</span></p>
<p>But wait, we have <span
class="math inline">\ln\bigl(1+\frac{y}{n}\bigr)</span></p>
<p>We know that the Maclaurin series expansion for <span
class="math inline">\ln(1+x)</span> converges for <span
class="math inline">|x|&lt;1</span> so, given that <span
class="math inline">|\frac{y}{n}|\approx 0</span>, we can use the
Maclaurin series expansion for the logarithm!</p>
<p>Also note that, for very small <span class="math inline">x</span>, we
can keep just the first few terms from the <span
class="math inline">\ln(1+x)</span> expansion and have a small error. As
<span class="math inline">x</span> gets larger, the error from the
truncated Maclaurin series grows.</p>
<p>Since <span class="math inline">\frac{y}{n}</span> is very small
here, we can use the truncated Maclaurin series with a very small error,
the error getting smaller with larger <span
class="math inline">n</span>.</p>
<p>So we then have</p>
<p><span
class="math display">n\ln{x}-x=n\ln{n}+n\Biggl[\biggl(\frac{y}{n}\biggr)-\frac{1}{2}\biggl(\frac{y}{n}\biggr)^2+\sum_{k\ge
3}(-1)^{k+1}\frac{y^k}{kn^k}\Biggr]-y-n</span> <span
class="math display">n\ln{x}-x=n\ln{n}+y-\frac{y^2}{2n}+\Biggl(\sum_{k\ge
3}(-1)^{k+1}\frac{y^k}{kn^{k-1}}\Biggr)-y-n</span> <span
class="math display">n\ln{x}-x=n\ln{n}-n-\frac{y^2}{2n}+\Biggl(\sum_{k\ge
3}(-1)^{k+1}\frac{y^k}{kn^{k-1}}\Biggr)</span></p>
<p>Amazing! Now let’s plug all of this back into our integral for the
gamma function.</p>
<p><span
class="math display">\Gamma(n+1)=\int_{0}^{\infty}e^{n\ln{x}-x}\,dx</span></p>
<p>Whoops, our expression for <span
class="math display">n\ln{x}-x</span> is in terms of <span
class="math inline">y</span> and our integral is dealing with <span
class="math inline">x</span> Easily fixed – let <span
class="math inline">y=x-n</span> so that <span
class="math inline">\,dx=\,dy</span></p>
<p>The bounds of integration change from <span
class="math inline">(0,\infty)</span> to <span
class="math inline">(-n,\infty)</span></p>
<p><span
class="math display">\Gamma(n+1)=\int_{-n}^{\infty}\exp\Biggl(n\ln{n}-n-\frac{y^2}{2n}+\sum_{k\ge
3}(-1)^{k+1}\frac{y^k}{kn^{k-1}}\Biggr)\,dy</span></p>
<p>Using <span class="math inline">e^{a+b}=e^ae^b</span> we find</p>
<p><span
class="math display">\Gamma(n+1)=\int_{-n}^{\infty}\exp(n\ln{n}-n)\exp\Biggl(-\frac{y^2}{2n}+\sum_{k\ge
3}(-1)^{k+1}\frac{y^k}{kn^{k-1}}\Biggr)\,dy</span></p>
<p>Note that <span
class="math inline">e^{n\ln{n}-n}=e^{n\ln{n}}e^{-n}=n^ne^{-n}=\bigl(\frac{n}{e}\bigr)^n</span></p>
<p><span
class="math display">\Gamma(n+1)=\biggl(\frac{n}{e}\biggr)^n\int_{-n}^{\infty}\exp\Biggl(-\frac{y^2}{2n}+\sum_{k\ge
3}(-1)^{k+1}\frac{y^k}{kn^{k-1}}\Biggr)\,dy</span> <span
class="math display">=\biggl(\frac{n}{e}\biggr)^n\int_{-n}^{\infty}\exp\Biggl(-\frac{y^2}{2n}+\frac{y^3}{3n^2}-\frac{y^4}{4n^3}+\ldots\Biggr)\,dy</span></p>
<p>Now recall the earlier argument about a truncated series having low
error since <span class="math inline">\frac{y}{n}\approx 0</span> near
the integrand’s peak. This seems like a good point to use that truncated
series – but how many of the terms do we keep?</p>
<p>Let’s set a definite goal. Suppose we want an error that is <span
class="math inline">O(n^{n-3/2})</span> How many terms should we keep to
achieve that? I’ll give the details later, but in this case, we only
need to keep the first three terms for our desired accuracy.</p>
<p><span class="math display">\Gamma(n+1)\approx
\biggl(\frac{n}{e}\biggr)^n\int_{-n}^{\infty}\exp\Biggl(-\frac{y^2}{2n}+\frac{y^3}{3n^2}-\frac{y^4}{4n^3}\Biggr)\,dy</span></p>
<p>Let’s pull the first term out to get</p>
<p><span class="math display">\Gamma(n+1)\approx
\biggl(\frac{n}{e}\biggr)^n\int_{-n}^{\infty}\exp\Biggl(-\frac{y^2}{2n}\Biggr)\exp\Biggl(\frac{y^3}{3n^2}-\frac{y^4}{4n^3}\Biggr)\,dy</span></p>
<p>Also, to make our life easier, let’s mess with the bounds of
integration a bit here. When working in terms of <span
class="math inline">x</span>, our integrand’s peak was at <span
class="math inline">x=n</span> Now that we are working with <span
class="math inline">y=x-n</span> our integrand’s peak should be at <span
class="math inline">y=-n</span></p>
<p>For very large <span class="math inline">n</span>, the peak will be
very sharp so terms to the left of the peak will be negligible. Thus, we
can change <span class="math inline">(-n,\infty)</span> to <span
class="math inline">(-\infty,\infty)</span> and incur very little
error.</p>
<p>So we have</p>
<p><span class="math display">\Gamma(n+1)\approx
\biggl(\frac{n}{e}\biggr)^n\int_{-\infty}^{\infty}\exp\Biggl(-\frac{y^2}{2n}\Biggr)\exp\Biggl(\frac{y^3}{3n^2}-\frac{y^4}{4n^3}\Biggr)\,dy</span></p>
<p>The attentive reader will realize that this section’s title of "The
First Series Expansion" implies that we will use another series
expansion – any guesses what we’re gonna use now?</p>
<h1 id="the-second-series-expansion">The Second Series Expansion</h1>
<p>To anyone who predicted we would now use the Taylor series for <span
class="math inline">e^x</span> – yes, you guessed right.</p>
<p>Let’s expand out</p>
<p><span
class="math display">\exp\Biggl(\frac{y^3}{3n^2}-\frac{y^4}{4n^3}\Biggr)=\Biggl(1+\biggl[\frac{y^3}{3n^2}-\frac{y^4}{4n^3}\biggr]+\frac{1}{2}\biggl[\frac{y^3}{3n^2}-\frac{y^4}{4n^3}\biggr]^2+\ldots\Biggr)</span>
If we want an error that is <span
class="math inline">O(n^{n-3/2})</span> , we can drop terms of order
<span class="math inline">y^8</span> and onwards – I will prove this
later. So we find that <span
class="math display">\exp\Biggl(\frac{y^3}{3n^2}-\frac{y^4}{4n^3}\Biggr)\approx
\Biggl(1+\frac{y^3}{3n^2}-\frac{y^4}{4n^3}+\frac{y^6}{18n^4}-\frac{y^7}{12n^5}\Biggr)</span></p>
<p>Then we have</p>
<p><span class="math display">\Gamma(n+1)\approx
\biggl(\frac{n}{e}\biggr)^n\int_{-\infty}^{\infty}\exp\Biggl(-\frac{y^2}{2n}\Biggr)\Biggl(1+\frac{y^3}{3n^2}-\frac{y^4}{4n^3}+\frac{y^6}{18n^4}-\frac{y^7}{12n^5}\Biggr)\,dy</span></p>
<p>Let us now introduce</p>
<p><span
class="math display">I_k=\int_{-\infty}^{\infty}\exp\biggl(-\frac{x^2}{2n}\biggr)x^k\,dx</span></p>
<p>If <span class="math inline">k</span> is odd, the integrand becomes
an odd function because <span
class="math display">\exp\biggl(-\frac{(-(2m+1))^2}{2n}\biggr)(-x)^{2m+1}=-\exp\biggl(-\frac{(2m+1)^2}{2n}\biggr)x^{2m+1}</span></p>
<p>Since the bounds of integration run from <span
class="math inline">-\infty</span> to <span
class="math inline">\infty</span> the integral must then equal zero when
<span class="math inline">k</span> is odd. So we can consider only the
case where <span class="math inline">k</span> is even i.e.</p>
<p><span
class="math display">I_{2m}=\int_{-\infty}^{\infty}\exp\biggl(-\frac{x^2}{2n}\biggr)x^{2m}\,dx</span></p>
<p>Let <span class="math inline">u=\frac{x}{\sqrt{2n}}</span> so that
<span class="math inline">\,dx=\sqrt{2n}\,du</span></p>
<p>Then we have</p>
<p><span
class="math display">I_{2m}=\sqrt{2n}\int_{-\infty}^{\infty}e^{-u^2}\left(u\sqrt{2n}\right)^{2m}\,du=(2n)^{m+\frac{1}{2}}\int_{-\infty}^{\infty}e^{-u^2}u^{2m}\,du</span></p>
<p>Rename <span class="math inline">u</span> to <span
class="math inline">x</span> and we have</p>
<p><span
class="math display">I_{2m}=(2n)^{m+\frac{1}{2}}\int_{-\infty}^{\infty}e^{-x^2}x^{2m}\,dx</span></p>
<p>Integrate by parts using <span class="math inline">u=e^{-x^2}</span>
and <span class="math inline">\,dv=x^{2m}</span> <span
class="math display">\,du=-2xe^{-x^2}</span> <span
class="math display">v=\frac{x^{2m+1}}{2m+1}</span></p>
<p><span
class="math display">I_{2m}=(2n)^{m+\frac{1}{2}}\left(\left.e^{-x^2}\frac{x^{2m+1}}{2m+1}\right\rvert_{-\infty}^{\infty}+\frac{2}{2m+1}\int_{-\infty}^{\infty}e^{-x^2}x^{2m+2}\,dx\right)</span>
<span
class="math display">=(2n)^{m+\frac{1}{2}}\left(\frac{2}{2m+1}\right)\int_{-\infty}^{\infty}e^{-x^2}x^{2(m+1)}\,dx</span></p>
<p>Let</p>
<p><span
class="math display">Q_{2m}=\int_{-\infty}^{\infty}e^{-x^2}x^{2m}\,dx</span></p>
<p>Then, from our formula for <span class="math inline">I_{2m}</span>
that we had just before integration by parts,</p>
<p><span
class="math display">I_{2m}=(2n)^{m+\frac{1}{2}}Q_{2m}</span></p>
<p>But we also know that</p>
<p><span
class="math display">I_{2m}=(2n)^{m+\frac{1}{2}}\left(\frac{2}{2m+1}\right)Q_{2(m+1)}</span></p>
<p>This tells us that</p>
<p><span
class="math display">Q_{2m}=\left(\frac{2}{2m+1}\right)Q_{2(m+1)}</span></p>
<p><span
class="math display">Q_{2(m+1)}=\left(\frac{2m+1}{2}\right)Q_{2m}</span>
<span
class="math display">Q_{2m}=Q_{2(m-1+1)}=\left(\frac{2(m-1)+1}{2}\right)Q_{2(m-1)}=\left(\frac{2m-1}{2}\right)Q_{2(m-1)}</span></p>
<p>We know that <span
class="math inline">Q_{0}=\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt{\pi}</span></p>
<p>So now we can solve for <span class="math inline">Q_{2m}</span> in
the way we would solve any recurrence relation</p>
<p><span
class="math display">Q_{2m}=\left(\frac{2m-1}{2}\right)Q_{2(m-1)}=\left(\frac{2m-1}{2}\right)\left(\frac{2m-3}{2}\right)Q_{2(m-2)}</span>
<span
class="math display">=\left(\frac{2m-1}{2}\right)\left(\frac{2m-3}{2}\right)\cdots\left(\frac{1}{2}\right)Q_0</span>
<span
class="math display">=\frac{1}{2^m}\left(\prod_{i=1}^{m-1}(2i+1)\right)\sqrt{\pi}</span></p>
<p>Note that</p>
<p><span class="math display">\prod_{i=1}^{m-1}(2i+1)=\frac{1\cdot
2\cdots (2m-1) \cdot 2m}{2\cdot 4 \cdots(2m-2) \cdot
2m}=\frac{(2m)!}{\prod_{i=1}^{m}(2i)}i=\frac{(2m)!}{2^mm!}</span></p>
<p>Thus we have</p>
<p><span
class="math display">Q_{2m}=\frac{1}{2^m}\left(\frac{(2m)!}{2^mm!}\right)\sqrt{\pi}=\frac{(2m)!}{2^m\cdot
2^mm!}\sqrt{\pi}=\frac{(2m)!\sqrt{\pi}}{2^{2m}m!}</span></p>
<p><span
class="math display">I_{2m}=(2n)^{m+\frac{1}{2}}Q_{2m}=(2n)^{m+\frac{1}{2}}\frac{(2m)!\sqrt{\pi}}{2^{2m}m!}=n^{m+\frac{1}{2}}\frac{(2m)!\sqrt{\pi}}{2^{m-\frac{1}{2}}m!}</span></p>
<p>Now let’s return to our expression for the factorial. Note that we
drop all terms of the form <span class="math inline">I_{2k+1}</span>
since they equal zero.</p>
<p><span class="math display">\Gamma(n+1)\approx
\biggl(\frac{n}{e}\biggr)^n\int_{-\infty}^{\infty}\exp\Biggl(-\frac{y^2}{2n}\Biggr)\Biggl(1+\frac{y^3}{3n^2}-\frac{y^4}{4n^3}+\frac{y^6}{18n^4}-\frac{y^7}{12n^5}\Biggr)\,dy</span>
<span
class="math display">=\biggl(\frac{n}{e}\biggr)^n\Biggl(I_{0}+\frac{I_3}{3n^2}-\frac{I_4}{4n^3}+\frac{I_6}{18n^4}-\frac{I_7}{12n^5}\Biggr)</span>
<span
class="math display">=\biggl(\frac{n}{e}\biggr)^n\Biggl(I_{0}-\frac{I_4}{4n^3}+\frac{I_6}{18n^4}\Biggr)</span>
<span class="math display">=\biggl(\frac{n}{e}\biggr)^n\Biggl(\sqrt{2\pi
n}-\frac{24n^{5/2}\sqrt{2\pi}}{32n^3}+\frac{720n^{7/2}\sqrt{2\pi}}{864n^4}\Biggr)</span>
<span class="math display">=\biggl(\frac{n}{e}\biggr)^n\sqrt{2\pi
n}\Biggl(1+\frac{1}{12n}\Biggr)</span></p>
<p>Remembering that we chose terms so that we have an error of <span
class="math inline">O(n^{n-3/2})</span> we can write <span
class="math display">\Gamma(n+1)=\biggl(\frac{n}{e}\biggr)^n\sqrt{2\pi
n}\Biggl(1+\frac{1}{12n}+O\left(\frac{1}{n^2}\right)\Biggr)</span></p>
<p>Let’s see how much of an improvement this is.</p>
<figure>
<img src="/images/percent_error_plots.png" />
<figcaption>Plots of percent error for the two estimates to <span
class="math inline">n!</span> – the pink graph is the percent error for
the standard approximation, the green graph is the percent error for our
improved approximation.</figcaption>
</figure>
<h1 id="knowing-which-terms-to-keep">Knowing which terms to keep</h1>
<p>Earlier I promised to explain why I dropped the terms I dropped –
here you go.</p>
<p>Let’s look at the first place where we dropped terms.</p>
<p><span
class="math display">\Gamma(n+1)=\biggl(\frac{n}{e}\biggr)^n\int_{-n}^{\infty}\exp\Biggl(-\frac{y^2}{2n}+\frac{y^3}{3n^2}-\frac{y^4}{4n^3}+\ldots\Biggr)\,dy</span>
<span
class="math display">=\biggl(\frac{n}{e}\biggr)^n\int_{-n}^{\infty}\exp\Biggl(-\frac{y^2}{2n}\Biggr)\exp\Biggl(\frac{y^3}{3n^2}-\frac{y^4}{4n^3}+\ldots\Biggr)\,dy</span></p>
<p>Suppose we want an error that is <span
class="math inline">O(n^{n-\alpha/2})</span> Consider the k’th term in
the second exponential,</p>
<p><span
class="math display">(-1)^{k+1}\frac{y^{k+2}}{(k+2)n^{k+1}}</span></p>
<p>Now suppose we keep all terms up to the k’th term and Taylor expand.
We will get</p>
<p><span
class="math display">1+\left[\frac{y^3}{3n^2}+\ldots+\frac{(-1)^{k+1}y^{k+2}}{(k+2)n^{k+1}}\right]+\frac{1}{2}\left[\frac{y^3}{3n^2}+\ldots+\frac{(-1)^{k+1}y^{k+2}}{(k+2)n^{k+1}}\right]^2+\ldots</span></p>
<p>Suppose we keep all the terms in this expansion up to the j’th term.
The j’th term in this second series expansion is <span
class="math display">\frac{1}{j!}\left[\frac{y^3}{3n^2}+\ldots+\frac{(-1)^{k+1}y^{k+2}}{(k+2)n^{k+1}}\right]^j</span>
<span class="math display">\sim
\left[\frac{y^3}{n^2}+\ldots+\frac{y^{k+2}}{n^{k+1}}\right]^j</span>
Remember we wanted an error of <span
class="math inline">O(n^{n-\frac{\alpha}{2}})</span></p>
<p>Now we want to choose <span class="math inline">j</span> such that
there is AT LEAST one term within the larger j’th term whose
contribution to the approximation is of an order greater than <span
class="math inline">n^{n-\frac{\alpha}{2}}</span></p>
<p>Note that there can be unnecessary terms within that j’th term –
those can be dropped. But so long as there is even one necessary term,
we want to consider the whole j’th term and then remove specific
"sub-terms" as needed.</p>
<p>The term with largest-order contribution in that j’th term is going
to be <span class="math display">\sim \frac{y^{3j}}{n^{2j}}</span> Using
our earlier formula for <span class="math inline">I_k</span>, we see
that the contribution will be of order <span class="math display">\sim
n^{n-2j+\frac{1+3j}{2}}=n^{n-\frac{j-1}{2}}</span></p>
<p>We want this order to be greater than <span
class="math inline">n^{n-\frac{\alpha}{2}}</span></p>
<p>The order increases/decreases in integer increments, so the smallest
order greater than <span
class="math inline">n^{n-\frac{\alpha}{2}}</span> is <span
class="math inline">n^{n-\frac{\alpha}{2}+1}=n^{n-\frac{\alpha-2}{2}}</span></p>
<p>So we want the order of that contribution to be greater than or equal
to this MINIMUM order of contribution for the term to be relevant</p>
<p>i.e.</p>
<p><span class="math display">n-\frac{j-1}{2}\ge
n-\frac{\alpha-2}{2}</span> <span
class="math display">j-1\le\alpha-2</span> <span
class="math display">j\le\alpha-1</span></p>
<p>This inequality tells us that, for any <span
class="math inline">j&lt;\alpha+1</span>, there will be AT LEAST one
term we want to keep within that larger j’th term. We want to collect
all the terms with some relevant contribution, so we take the largest
possible <span class="math inline">j</span> that has a term we want.</p>
<p><span class="math display">j=\alpha-1</span></p>
<p>Now for <span class="math inline">k</span> we similarly want to set
<span class="math inline">k</span> to be as high as we can get it
without missing any important terms. We need AT LEAST one important term
added by setting <span class="math inline">k</span> to whatever value it
is. The term with highest-order contribution corresponding to changes in
<span class="math inline">k</span> comes from the first term in the
exp-series expansion (refer back to the start of this section if
confused)</p>
<p><span class="math display">\sim \frac{y^{k+2}}{n^{k+1}}</span></p>
<p>If even just this term is relevant, we have justification for setting
<span class="math inline">k</span> to include this term.</p>
<p>The contribution from this term is of order <span
class="math display">\sim n^{n-(k+1)+\frac{1+(k+2)}{2}}</span> <span
class="math display">= n^{n-\frac{k-1}{2}}</span></p>
<p>We want the order of that contribution to be at least <span
class="math inline">n^{n-\frac{\alpha-2}{2}}</span></p>
<p><span class="math display">n-\frac{k-1}{2}\ge
n-\frac{\alpha-2}{2}</span> <span class="math display">k-1\le \alpha
-2</span> <span class="math display">k\le \alpha-1</span></p>
<p>This tells us that for all <span class="math inline">k\le
\alpha-1</span> we will have AT LEAST one term we need to keep. We take
the largest <span class="math inline">k</span> value permitted by this
inequality, giving us all the terms needed as a result.</p>
<p><span class="math display">k=\alpha-1</span></p>
<p>So if we want an error in our approximation that is <span
class="math inline">O(n^{n-\frac{\alpha}{2}})</span> then we can drop
terms in our series expansions as follows</p>
<p>We let <span class="math display">k=\alpha-1</span> <span
class="math display">j=\alpha-1</span></p>
<p>In our integral for the gamma function, we will keep the terms in the
second exponential up to the k’th term, i.e. approximate as</p>
<p><span class="math display">\Gamma(n+1) \approx
\left(\frac{n}{e}\right)^n\int_{-\infty}^{\infty}\exp\left(-\frac{y^2}{2n}\right)\exp\left(\frac{y^3}{3n^2}-\frac{y^4}{4n^3}+\ldots+\frac{(-1)^{k+1}y^{k+2}}{(k+2)n^{k+1}}\right)\,dy</span></p>
<p>And then when we Taylor-expand the second exponential in that
integral, we truncate the series in this manner <span
class="math display">1+\left[\frac{y^3}{3n^2}+\ldots+\frac{(-1)^{k+1}y^{k+2}}{(k+2)n^{k+1}}\right]+\ldots+\frac{1}{j!}\left[\frac{y^3}{3n^2}+\ldots+\frac{(-1)^{k+1}y^{k+2}}{(k+2)n^{k+1}}\right]^j</span></p>
<p>When we substitute that series expansion back into our integral, we
will have an approximation of the form</p>
<p><span class="math display">\Gamma(n+1)\approx
\left(\frac{n}{e}\right)^n\sum_{m}\frac{I_{2m}}{n^{s_i}}</span></p>
<p>Where we have</p>
<p><span
class="math display">I_{2m}=n^{m+\frac{1}{2}}\frac{(2m)!\sqrt{\pi}}{2^{m-\frac{1}{2}}m!}</span></p>
<p>This gives us a way to improve on the Stirling Approximation to any
desired accuracy. The result quickly gets ugly for increasing accuracy.
However, if you’re willing to tolerate the ugliness, the increased
accuracy is quite satisfying to have.</p>
<h1 id="conclusion">Conclusion</h1>
<p>Hopefully you enjoyed this post. I have not written anything in a
long time because of a combination of factors – I’ve been busy with lots
of different things, I had a bit of anxiety about the quality of my
writing, and the reasons go on and on. I’m hoping to write more in the
next few months, however, and build this habit again. I have some nice
ideas about stuff to write about, so expect some interesting
content.</p>
<p>If I made any errors here or if you have any suggestions to make,
please contact me at my discord floofydoggo or my email address
chancellorceti@gmail.com</p>
<p>I would also like to give credit to Daniel Schroeder’s textbook "An
Introduction to Thermal Physics" that showed me this proof of Stirling’s
Theorem for the first time and got this question into my head. Amazing
textbook, I learnt quite a bit from it.</p>
<p>I hope to return with more interesting stuff soon. Thanks for
reading!</p>
            </div>
</body>
</html>
