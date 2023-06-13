---
layout: ../layouts/MarkdownPostLayout.astro
title: "Seeking a closed form for the Fibonacci Numbers"
pubDate: 2022-07-01
description: "This is the first post of my new Astro blog."
author: "Astro Learner"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "The full Astro logo."
tags: ["number theory", "combinatorics"]
---

<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Chancellor Ceti" />
  <meta name="author" content="Chancellor Ceti" />
  <meta name="dcterms.date" content="2023-06-13" />
  <title>Finding a closed form for the Fibonacci Numbers</title>
  <style>
body {
  background-color: #b1b6a6 !important;
  margin: 0;
  min-height: 100%;
  width: 100%;
  background-image: radial-gradient(
    rgb(24, 26, 27) 1px,
    rgb(0, 4, 0) 0px
  ) !important;
  background-size: 50px 50px !important;
  hyphens: auto;
      overflow-wrap: break-word;
      text-rendering: optimizeLegibility;
      font-kerning: normal;
}
html {
  margin: 0;
  width: 100%;
  color:white;
  height: 100%;
}

#container{
margin: 0 auto;
padding-left: 50px;
padding-right: 50px;
padding-top: 50px;
padding-bottom: 50px;
hyphens: auto;
overflow-wrap: break-word;
text-rendering: optimizeLegibility;
font-kerning: normal;
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
a {
color: white;
}
img {
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
ul.task-list{list-style: none;}
ul.task-list li input[type="checkbox"] {
width: 0.8em;
margin: 0 0.8em 0.2em -1.6em;
vertical-align: middle;
}
</style>

  <script
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
  type="text/javascript"></script>
  <!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
  <![endif]-->
</head>
<body>
<div id="container">
<header id="title-block-header">
<h1 class="title">Finding a closed form for the Fibonacci Numbers</h1>
<p class="author">Chancellor Ceti</p>
<p class="author">Chancellor Ceti</p>
<p class="date">2023-06-13</p>
</header>
<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#introduction" id="toc-introduction">Introduction</a></li>
<li><a href="#what-is-a-generating-function"
id="toc-what-is-a-generating-function">What <em>is</em> a generating
function?</a></li>
<li><a href="#poking-the-generating-function"
id="toc-poking-the-generating-function">Poking the generating
function</a></li>
<li><a href="#arriving-at-a-closed-form"
id="toc-arriving-at-a-closed-form">Arriving at a closed form</a></li>
<li><a href="#more-cool-generating-function-stuff"
id="toc-more-cool-generating-function-stuff">More cool generating
function stuff</a></li>
</ul>
</nav>
<h1 id="introduction">Introduction</h1>
<p>The Fibonacci Numbers are a sequence of numbers following the very
interesting recurrence <span class="math display">\[F_0=0\]</span> <span
class="math display">\[F_1=1\]</span> <span
class="math display">\[F_n=F_{n-1}+F_{n-2}\quad \forall n\ge2\]</span>
Due to the elementary nature of their definition, they frequently appear
in nature and are one of the most well-known sequences of numbers. The
aim of this document is to provide a simple closed form for this
sequence using the theory of generating functions.</p>
<h1 id="what-is-a-generating-function">What <em>is</em> a generating
function?</h1>
<p>Generating functions are infinite power series associated with
different sequences. There are many types, but for the sake of this
problem, we will only define what is known as the Ordinary Generating
Function. We say that <span class="math inline">\(G(x)\)</span> is the
ordinary generating function of <span class="math inline">\(a_n\)</span>
if <span class="math display">\[G(x)=\sum_{n} a_nx^n\]</span> where
<span class="math inline">\(a_n\)</span> exists. Why is this useful? It
is obvious that <span class="math inline">\(a_n\)</span> is merely the
coefficient of <span class="math inline">\(x^n\)</span> in <span
class="math inline">\(G(x)\)</span>. So if we can find a closed form for
the coefficients, we can find a closed form for the sequence. Let’s try
this strategy and see where we get.</p>
<h1 id="poking-the-generating-function">Poking the generating
function</h1>
<p>As per our earlier definition of the Ordinary Generating Function, we
define <span class="math display">\[G(x)=\sum_{n\ge0}
F_nx^n=F_0+F_1x+F_2x^2+F_3x^3+\cdots\]</span> Ok, that’s a pretty big
sum. Let’s see if we can make some terms cancel out. We know that <span
class="math display">\[F_n=F_{n-1}+F_{n-2}\]</span> so <span
class="math display">\[F_n-F_{n-1}-F_{n-2}=0\]</span> of course. So now
the question is, what manipulation of <span
class="math inline">\(G(x)\)</span> will make terms cancel out like
this? Let’s see what <span class="math inline">\(xG(x)\)</span>
produces. <span class="math display">\[x\sum_{n\ge0}
F_nx^n=F_0x+F_1x^2+F_2x^3+F_3x^4+\cdots\]</span> Very interesting. If we
subtract <span class="math inline">\(xG(x)\)</span> from <span
class="math inline">\(G(x)\)</span>, we obtain <span
class="math display">\[\begin{split}
G(x)-xG(x)&amp;=F_0+(F_1-F_0)x+(F_2-F_1)x^2+(F_3-F_2)x^3+\cdots\\&amp;=x+\sum_{n\ge2}
(F_n-F_{n-1})x^n \\&amp;=x+\sum_{n\ge2}F_{n-2}x^n
\end{split}\]</span> Now we begin to see a pattern unfolding. We
continue this process and almost immediately see that <span
class="math display">\[\begin{split}
x^2G(x)=x^2\sum_{n\ge0}F_nx^n=F_0x^2+F_1x^3+F_2x^4+F_3x^5+\cdots
\end{split}\]</span> Subtracting <span
class="math inline">\(x^2G(x)\)</span> from <span
class="math inline">\(G(x)-xG(x)\)</span> will now yield <span
class="math display">\[\begin{split}
    &amp;G(x)-xG(x)-x^2G(x)\\&amp;=F_0+(F_1-F_0)x+(F_2-F_1-F_0)x^2+(F_3-F_2-F_1)x^3\\&amp;=x+\sum_{n\ge2}(F_n-F_{n-1}-F_{n-2})x\\&amp;=x
\end{split}\]</span> because of Equation 3. So <span
class="math display">\[G(x) = \frac{x}{1-x-x^2}\]</span> Now we’re in
more comfortable territory. Let’s see if we can simplify this a bit
further.</p>
<h1 id="arriving-at-a-closed-form">Arriving at a closed form</h1>
<h1 id="more-cool-generating-function-stuff">More cool generating
function stuff</h1>
</div>
</body>
</html>
