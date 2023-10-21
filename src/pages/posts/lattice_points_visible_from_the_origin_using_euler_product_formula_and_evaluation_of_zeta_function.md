---
layout: '../layouts/MarkdownPostLayout.astro'
title: "Lattice Points Visible from the Origin using Euler Product Formula and Evaluation of Zeta Function"
pubDate: 2022-10-21
description: "Solving a number theory problem about lattice points visible from the origin using an ingenious application of the Euler Product Formula and an integral derivation of the value of Zeta(2)"
author: 'Chancellor Ceti'
tags: ["number theory", "math"]
---
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Chancellor Ceti" />
  <title>Lattice Points Visible from the Origin using Euler Product Formula and Evaluation of Zeta Function</title>

<style>
    html {
      color: #1a1a1a;
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
        color:white;
    }
    .sourceCode span > *{
        color:black;
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
    a {
      color: white;
    }
    a:visited {
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
     background-color: rgb(24, 26, 27);
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
    /* CSS for syntax highlighting */
    pre > code.sourceCode { white-space: pre; position: relative; }
    pre > code.sourceCode > span { display: inline-block; line-height: 1.25; }
    pre > code.sourceCode > span:empty { height: 1.2em; }
    .sourceCode { overflow: visible; }
    code.sourceCode > span { color: inherit; text-decoration: inherit; }
    div.sourceCode { margin: 1em 0; }
    pre.sourceCode { margin: 0; }
    @media screen {
    div.sourceCode { overflow: auto; }
    }
    @media print {
    pre > code.sourceCode { white-space: pre-wrap; }
    pre > code.sourceCode > span { text-indent: -5em; padding-left: 5em; }
    }
    pre.numberSource code
      { counter-reset: source-line 0; }
    pre.numberSource code > span
      { position: relative; left: -4em; counter-increment: source-line; }
    pre.numberSource code > span > a:first-child::before
      { content: counter(source-line);
        position: relative; left: -1em; text-align: right; vertical-align: baseline;
        border: none; display: inline-block;
        -webkit-touch-callout: none; -webkit-user-select: none;
        -khtml-user-select: none; -moz-user-select: none;
        -ms-user-select: none; user-select: none;
        padding: 0 4px; width: 4em;
        color: #aaaaaa;
      }
    pre.numberSource { margin-left: 3em; border-left: 1px solid #aaaaaa;  padding-left: 4px; }
    div.sourceCode
      {   }
    @media screen {
    pre > code.sourceCode > span > a:first-child::before { text-decoration: underline; }
    }
    code span.al { color: #ff0000; font-weight: bold; } /* Alert */
    code span.an { color: #60a0b0; font-weight: bold; font-style: italic; } /* Annotation */
    code span.at { color: #7d9029; } /* Attribute */
    code span.bn { color: #40a070; } /* BaseN */
    code span.bu { color: #008000; } /* BuiltIn */
    code span.cf { color: rgb(126, 255, 163); font-weight: bold; } /* ControlFlow */
    code span.ch { color: #4070a0; } /* Char */
    code span.cn { color: #880000; } /* Constant */
    code span.co { color: #60a0b0; font-style: italic; } /* Comment */
    code span.cv { color: #60a0b0; font-weight: bold; font-style: italic; } /* CommentVar */
    code span.do { color: #ba2121; font-style: italic; } /* Documentation */
    code span.dt { color: rgb(255, 137, 103); } /* DataType */
    code span.dv { color: #40a070; } /* DecVal */
    code span.er { color: #ff0000; font-weight: bold; } /* Error */
    code span.ex { } /* Extension */
    code span.fl { color: #40a070; } /* Float */
    code span.fu { color: #06287e; } /* Function */
    code span.im { color: #008000; font-weight: bold; } /* Import */
    code span.in { color: #60a0b0; font-weight: bold; font-style: italic; } /* Information */
    code span.kw { color: rgb(126, 255, 163); font-weight: bold; } /* Keyword */
    code span.op { color: rgb(168, 160, 149); } /* Operator */
    code span.ot { color: rgb(126, 255, 163); } /* Other */
    code span.pp { color: rgb(255, 191, 72); } /* Preprocessor */
    code span.sc { color: #4070a0; } /* SpecialChar */
    code span.ss { color: #bb6688; } /* SpecialString */
    code span.st { color: #4070a0; } /* String */
    code span.va { color: #19177c; } /* Variable */
    code span.vs { color: #4070a0; } /* VerbatimString */
    code span.wa { color: #60a0b0; font-weight: bold; font-style: italic; } /* Warning */
  </style>
  <script
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
  type="text/javascript"></script>
  <!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
  <![endif]-->
  </head>
<body>
<div id="sub_body">
<header id="title-block-header">
<h1 class="title">Lattice Points Visible from
the Origin using Euler Product Formula and Evaluation of <span class="math inline">\(\zeta(2)\)</span>
</h1>
<p class="author">Chancellor Ceti</p>
<p class="date">October 2023</p>
</header>
<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#introduction" id="toc-introduction">Introduction</a></li>
<li><a href="#expressing-the-problem-mathematically"
id="toc-expressing-the-problem-mathematically">Expressing the problem
mathematically</a></li>
<li><a href="#turning-our-ratio-into-an-infinite-product"
id="toc-turning-our-ratio-into-an-infinite-product">Turning our ratio
into an infinite product</a></li>
<li><a href="#eulers-product-formula"
id="toc-eulers-product-formula">Euler’s Product Formula</a></li>
<li><a
href="#a-cool-conclusion-to-our-problem-apostols-solution-to-the-basel-problem"
id="toc-a-cool-conclusion-to-our-problem-apostols-solution-to-the-basel-problem">A
cool conclusion to our problem– Apostol’s Solution to the Basel
Problem</a></li>
</ul>
</nav>
<h1 id="introduction">Introduction</h1>
<p>This is a fascinating result I encountered some time back in Tom
Apostol’s <em>Introduction to Analytic Number Theory</em><span
class="citation" data-cites="apostol1"></span> that counted the density
of lattice points visible from the origin. For readers who are
unfamiliar with that terminology, a lattice point is a point in the
plane with integer-valued coordinates, and a lattice point is visible
from the origin if a line can be drawn to it from the origin containing
no other lattice points. And by density, all we mean is the ratio of
lattice points visible from the origin to the total amount of lattice
points as we let the amount of lattice points approach infinity.<br />
Apostol showed that the answer to this problem is intimately tied with
number theory and especially the Riemann Zeta function, one of the most
celebrated topics in mathematics. I have followed a slightly different
approach from Apostol, inspired by my knowledge of the Euler Product
Formula and Zeta function, but it yields the same result and somewhat
more elegantly. This solution has many parts and hopefully the reader
will learn many different things from this one post. So without further
ado, let’s jump into the problem.</p>
<h1 id="expressing-the-problem-mathematically">Expressing the problem
mathematically</h1>
<p>Before anything else, let’s define lattice points and visibility a
bit more concretely. As said earlier, attice points are simple– points
on a 2d grid with integer-valued coordinates. And a lattice point <span
class="math inline">\(p\)</span> with coordinates <span
class="math inline">\((a,b)\)</span> is said to be visible from the
origin if there are no lattice points between <span
class="math inline">\(p\)</span> and the origin on the line joining
<span class="math inline">\(p\)</span> to the origin apart from <span
class="math inline">\(p\)</span> and <span
class="math inline">\((0,0)\)</span>. Defining this mathematically is
now simple.<br />
Suppose there is a lattice point <span class="math inline">\(q\)</span>
that is between <span class="math inline">\(p\)</span> and the origin on
the line joining the point <span class="math inline">\(p\)</span> with
coordinates <span class="math inline">\((a,b)\)</span> to the origin at
<span class="math inline">\((0,0)\)</span>. So if such a point <span
class="math inline">\(q\)</span> exists, then it has the coordinates
<span class="math inline">\((ka,kb)\)</span> for some <span
class="math inline">\(0&lt;k&lt;1\)</span>. This is easily explained by
the following logic. If <span class="math inline">\(q\)</span> has
coordinates <span class="math inline">\((c,d)\)</span>, then <span
class="math inline">\(d=\frac{b}{a}c\)</span> for some <span
class="math inline">\(0&lt;c&lt;a\)</span> since that is the equation of
the line connecting <span class="math inline">\(p\)</span> to the
origin, and the constraints on <span class="math inline">\(c\)</span>
are because <span class="math inline">\(d\)</span> is between <span
class="math inline">\(b\)</span> and <span
class="math inline">\(0\)</span>. So <span
class="math inline">\(0&lt;d&lt;b\)</span>, and <span
class="math inline">\(kb\)</span> with <span
class="math inline">\(0&lt;k&lt;1\)</span> satisifies these constraints.
The definition of <span class="math inline">\(c\)</span> is already
justified by the previous argument that <span
class="math inline">\(0&lt;c&lt;a\)</span> and the fact that <span
class="math inline">\(c=ka\)</span> with <span
class="math inline">\(0&lt;k&lt;1\)</span> satisfies that
constraint.<br />
So <span class="math inline">\((a,b)\)</span> is visible from the origin
if there are no lattice points <span
class="math inline">\((ka,kb)\)</span> with <span
class="math inline">\(0&lt;k&lt;1\)</span>. Since <span
class="math inline">\((ka,kb)\)</span> is a lattice point, it must have
integer-valued coordinates. So <span class="math inline">\(k\)</span>
must be rational and can be expressed as <span
class="math inline">\(\frac{m}{n}\)</span> where <span
class="math inline">\(n|a\)</span> and <span
class="math inline">\(n|b\)</span>, else the coordinates would not be
integral. Also note that <span class="math inline">\(n\)</span> can not
equal <span class="math inline">\(1\)</span> or <span
class="math inline">\(q\)</span> would not be between <span
class="math inline">\(p\)</span> and the origin.<br />
So our problem is now reduced to this: what is the ratio of
integer-valued pairs <span class="math inline">\((x,y)\)</span> not
possessing a common divisor <span class="math inline">\(k&gt;1\)</span>
to the total number of integer-valued <span
class="math inline">\((x,y)\)</span> pairs? How might we go about
tackling this problems? Enter the world of number theory.</p>
<h1 id="turning-our-ratio-into-an-infinite-product">Turning our ratio
into an infinite product</h1>
<p>We seek the ratio of coprime <span
class="math inline">\((x,y)\)</span> pairs to the total number of such
pairs.<br />
When there are infinitely many integer choices of <span
class="math inline">\(x\)</span> and <span
class="math inline">\(y\)</span>, we can see this ratio as a probability
of two random integers being coprime. For two numbers to be coprime,
there must be no prime <span class="math inline">\(p\)</span> that
divides both numbers. To show this fact, we first introduce the notation
<span class="math display">\[gcd(a,b)=c\]</span> to mean the greatest
common divisor of <span class="math inline">\(a\)</span> and <span
class="math inline">\(b\)</span> is <span
class="math inline">\(c\)</span> (this makes our lives much
easier).<br />
And we additionally introduce the notation <span
class="math inline">\(p|n\)</span> for <span
class="math inline">\(p\)</span> divides <span
class="math inline">\(n\)</span>, mathematically <span
class="math inline">\(n=px\)</span> for some integer <span
class="math inline">\(x\)</span>. Then, by the fundamental theorem of
arithmetic, if <span class="math inline">\(gcd(x,y)&gt;1\)</span>, then
letting <span class="math inline">\(d\)</span> be the gcd, we have <span
class="math display">\[d=\prod_{i=1}^{r}p_i^{a_i}\]</span> So if <span
class="math inline">\(gcd(x,y)=d\)</span>, then <span
class="math inline">\(d|x\)</span> and <span
class="math inline">\(d|y\)</span> implying <span
class="math inline">\(p_i | x\)</span> and <span
class="math inline">\(p_i | y\)</span> for all <span
class="math inline">\(i\)</span>, since if <span
class="math inline">\(d|x\)</span>, then <span
class="math inline">\(x=dk\)</span> for some integer <span
class="math inline">\(k\)</span>, and then since <span
class="math inline">\(p_i | d\)</span>, <span class="math inline">\(d=
p_ij\)</span> for some <span class="math inline">\(j\)</span> implying
<span class="math inline">\(x = p_ijk\)</span>, which means <span
class="math inline">\(p_i|x\)</span>. So in order for <span
class="math inline">\(gcd(x,y)=1\)</span> to be true, there must be no
prime <span class="math inline">\(p\)</span> that divides both <span
class="math inline">\(x\)</span> and <span
class="math inline">\(y\)</span>.<br />
It is obvious that the events <span class="math inline">\(p|n_1\)</span>
and <span class="math inline">\(p|n_2\)</span> are independent since one
can occur with no effect on the probability of the other, so their
compound probability is the product of the individual probabilities. Now
consider the probability of a prime <span
class="math inline">\(p\)</span> dividing a random integer <span
class="math inline">\(n\)</span>. By studying the multiples of <span
class="math inline">\(p\)</span>, it becomes obvious that every <span
class="math inline">\(p\)</span>’th integer is divisible by <span
class="math inline">\(p\)</span>. So if we consider the set of all
integers, intuitively, the probability of a random integer <span
class="math inline">\(n\)</span> being divisible by <span
class="math inline">\(p\)</span> is <span
class="math inline">\(\frac{1}{p}\)</span>.<br />
Now we introduce the notation <span class="math inline">\(p\nmid
n\)</span> for <span class="math inline">\(p\)</span> does NOT divide
<span class="math inline">\(n\)</span> or, otherwise put, <span
class="math inline">\(n\)</span> is not an integer multiple of <span
class="math inline">\(p\)</span>. For <span
class="math inline">\(n_1\)</span> and <span
class="math inline">\(n_2\)</span> to be coprime, there must be no <span
class="math inline">\(p\)</span> such that <span
class="math inline">\(p|n_1\)</span> and <span
class="math inline">\(p|n_2\)</span>. Since the events <span
class="math inline">\(p|n_1\)</span> and <span
class="math inline">\(p|n_2\)</span> are independent, the events <span
class="math inline">\(p\nmid n_1\)</span> and <span
class="math inline">\(p\nmid n_2\)</span> are likewise indepdent.<br />
Because the probability of <span class="math inline">\(p\)</span> NOT
dividing <span class="math inline">\(n\)</span> is the complement of the
probability of <span class="math inline">\(p\)</span> dividing <span
class="math inline">\(n\)</span>, <span class="math display">\[P(p\nmid
n)=1-\frac{1}{p}\]</span> where <span class="math inline">\(n\)</span>
is a random integer. Then the probability that <span
class="math inline">\(p\)</span> divides neither <span
class="math inline">\(n_1\)</span> nor <span
class="math inline">\(n_2\)</span> is the complement of their compound
probability, <span class="math display">\[P((p\nmid n_1)\cap (p\nmid
n_2))=1-\frac{1}{p^2}\]</span> where <span
class="math inline">\(n_1\)</span> and <span
class="math inline">\(n_2\)</span> are again random integers.<br />
So this is the probability that a prime <span
class="math inline">\(p\)</span> does not divide both <span
class="math inline">\(n_1\)</span> and <span
class="math inline">\(n_2\)</span>. But for <span
class="math inline">\(n_1\)</span> and <span
class="math inline">\(n_2\)</span> to be coprime, there must be NO prime
dividing both integers. Since the events <span
class="math inline">\((p_1\nmid n_1\cap p_1\nmid n_2)\)</span> and <span
class="math inline">\((p_2\nmid n_1\cap p_2\nmid n_2)\)</span> are
independent(this is obvious since the divisibility of an integer by one
prime has no impact on its divisibility by another), we have the
probability of <span class="math inline">\(n_1\)</span> and <span
class="math inline">\(n_2\)</span> being coprime as the product of the
probabilities <span class="math display">\[P((p_i\nmid n_1)\cap
(p_i\nmid n_2))=1-\frac{1}{p_i^2}\]</span> over all primes <span
class="math inline">\(p_i\)</span>. Thus, <span
class="math display">\[P((gcd(x,y)=1))=\prod_{p}1-\frac{1}{p_i^2}\]</span>
and since <span class="math inline">\(P((gcd(x,y)=1))\)</span> is the
ratio of coprime pairs of integers to total pairs of integers, this
infinite product is our answer. So now our problem is reduced to
evaluating this product, which many of you are probably doubting is even
possible right now.<br />
Luckily, we have a tool that lets us simplify this menacing product into
a menacing sum(crazy, I know)– Euler’s Product Formula.</p>
<h1 id="eulers-product-formula">Euler’s Product Formula</h1>
<p>We start with the formula <span
class="math display">\[\label{eq:powseries1}
\frac{1}{1-x}=\sum_{n\ge 0}x^n\]</span> This is easily proved by letting
<span class="math display">\[S=\sum_{n\ge 0}x^n\]</span> and noting that
<span class="math display">\[S=1+x+x^2+\cdots\]</span> while <span
class="math display">\[Sx=x+x^2+x^3+\cdots\]</span> so that <span
class="math display">\[S-Sx=1\]</span> Then <span
class="math display">\[S(1-x)=1\]</span> so <span
class="math display">\[S=\frac{1}{1-x}\]</span> It can further be shown
that this series is convergent, in the traditional high school calculus
sense, no real analysis :) , for <span
class="math inline">\(|x|&lt;1\)</span>. With that in mind, let’s
consider the infinite product <span
class="math display">\[\prod_{p}\frac{1}{(1-\frac{1}{p^s})}\]</span>
Since <span class="math inline">\(|\frac{1}{p^s}|&lt;1\)</span>, we can
use our previous identity to see that <span
class="math display">\[\prod_{p}\frac{1}{(1-\frac{1}{p^s})}=\prod_{p}\sum_{n\ge0}\frac{1}{p^{ns}}\]</span>
Expanding this product, we see that <span
class="math display">\[\prod_{p}\sum_{n\ge0}\frac{1}{p^{ns}}=(1+\frac{1}{2^s}+\frac{1}{4^s}+\cdots)(1+\frac{1}{3^s}+\frac{1}{9^s}+\cdots)\cdots\]</span>
By the fundamental theorem of arithmetic, all integers greater than
<span class="math inline">\(1\)</span> are the product of a finite
number of primes raised to integer powers. Now if we multiply together
any terms in this product, we get either <span
class="math inline">\(1\)</span> if all terms are <span
class="math inline">\(1\)</span> or something of the form <span
class="math display">\[\frac{1}{\prod_{i=1}^{r}p_i^{a_is}}\]</span>
which is by the fundamental theorem of arithmetic equal to <span
class="math display">\[\frac{1}{n^s}\]</span> for some integer <span
class="math inline">\(n&gt;1\)</span> So really, <span
class="math display">\[\prod_{p}\frac{1}{(1-\frac{1}{p^s})}=\sum_{n\ge1}\frac{1}{n^s}\]</span>
But now we have transformed our product into a sum that has been
extensively studied and is a function in itself: <span
class="math display">\[\zeta(s)=\sum_{n\ge1}\frac{1}{n^s}\]</span>
Behold, the Riemann Zeta Function!! But returning to the previous
section where we were trying to evaluate <span
class="math display">\[\prod_{p}1-\frac{1}{p_i^2}\]</span> we see that
this is equal to <span
class="math display">\[\prod_{p}\Biggl(\frac{1}{1-\frac{1}{p_i^2}}\Biggl)^{-1}=\Biggl(\prod_{p}\frac{1}{1-\frac{1}{p_i^2}}\Biggl)^{-1}=\Biggl(\sum_{n\ge0}\frac{1}{n^2}\Biggr)^{-1}=\frac{1}{\zeta(2)}\]</span>
So now we just need to evaluate the crazy expression <span
class="math display">\[\frac{1}{\zeta(2)}\]</span> This is actually a
rather famous problem in mathematics known as the Basel Problem that has
been solved in many ways. In the next section, we look at a cool
solution by Tom Apostol<span class="citation"
data-cites="apostol2"></span> to the Basel Problem to get the final
numerical answer to our problem.</p>
<h1
id="a-cool-conclusion-to-our-problem-apostols-solution-to-the-basel-problem">A
cool conclusion to our problem– Apostol’s Solution to the Basel
Problem</h1>
<p>Quick note before showing Apostol’s Solution. There are MANY
approaches to the Basel Problem, all thought up by brilliant
mathematicians. I chose to demonstrate this one because it uses nothing
but elementary calculus and the simplification process is something I
can imagine a normal human being doing. For people who have seen other
solutions, Euler’s is much simpler, but it would require almost
prophetic foresight to see the link between Taylor Polynomials and the
Basel function (prophetic foresight that Euler somehow had). Then
there’s the very simple Fourier Series solution, but that’s not taught
in high schools and I don’t want to exclude half of this post’s
potential readers. So we’re gonna be looking at a double integral
solution :) Apostol starts by considering the integral <span
class="math display">\[\int_{0}^{1}\int_{0}^{1}\frac{1}{1-xy}\,dx\,
dy\]</span> He shows that this is equivalent to <span
class="math inline">\(\zeta(2)\)</span> because, due to our earlier power series identity, <span
class="math display">\[\begin{aligned}
     &amp;\int_{0}^{1}\int_{0}^{1}\frac{1}{1-xy}\,dx\,dy=\int_{0}^{1}\int_{0}^{1}\sum_{n\ge0}(xy)^n\,dx\,dy=\sum_{n\ge0}\int_{0}^{1}x^n\int_{0}^{1}y^n\,dy\,dx\\
     &amp;=\sum_{n\ge0}\frac{1}{n+1}\int_{0}^{1}x^n\,dy=\sum_{n\ge0}\frac{1}{(n+1)^2}=\zeta(2)
\end{aligned}\]</span> Now Apostol shows an alternative way of
evaluating this integral. He begins by making the change of variables
<span class="math display">\[x=\frac{u-v}{\sqrt{2}}\]</span> <span
class="math display">\[y=\frac{u+v}{\sqrt{2}}\]</span> so that we can
now write <span
class="math display">\[1-xy=1-\frac{u-v}{\sqrt{2}}\frac{u+v}{\sqrt{2}}=1-\frac{u^2-v^2}{2}=\frac{2-u^2+v^2}{2}\]</span>
The reason for this change of variables now quickly becomes apparent, as
Apostol continues by considering the region of integration in the u-v
plane. Writing <span class="math inline">\(u\)</span> and <span
class="math inline">\(v\)</span> in terms of <span
class="math inline">\(x\)</span> and <span
class="math inline">\(y\)</span>, we obtain <span
class="math display">\[u=\frac{\sqrt{2}}{2}(x+y)\]</span> and <span
class="math display">\[u=\frac{\sqrt{2}}{2}(y-x)\]</span> So that the
following <span class="math inline">\(x,y\)</span> points correspond to
these <span class="math inline">\(u,v\)</span> points <span
class="math display">\[(x,y)=(0,0)=&gt;(u,v)=(0,0)\]</span> <span
class="math display">\[(x,y)=(0,1)=&gt;(u,v)=\biggl(\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}\biggr)\]</span>
<span class="math display">\[(x,y)=(1,1)=&gt;(u,v)=(\sqrt{2},0)\]</span>
<span
class="math display">\[(x,y)=(1,0)=&gt;(u,v)=\biggl(\frac{\sqrt{2}}{2},\frac{-\sqrt{2}}{2}\biggr)\]</span>
Now with these points in mind, we can draw the region of integration as
a square in the u-v plane, allowing us to observe some interesting
properties.</p>
<figure>
<img src="/images/region.png" />
</figure>
<p><br />
Notice that this square is symmetric about the u-axis. This is a
consequence of the fact that <span
class="math inline">\(u^2=(-u)^2\)</span>. We can exploit this symmetry
to now separate the top half into 2 parts– the part with <span
class="math inline">\(u&lt;\frac{\sqrt{2}}{2}\)</span> and the part with
<span class="math inline">\(u&gt;\frac{\sqrt{2}}{2}\)</span>– and
multiply that by two to get the entire integral. Using our expression for 1-xy, we have <span
class="math display">\[\begin{aligned}
    &amp;\int_{0}^{1}\int_{0}^{1}\frac{1}{1-xy}\,dx\,dy=2\int_{0}^{\frac{\sqrt{2}}{2}}\int_{0}^{u}\frac{2\,dv}{2-u^2+v^2}\,du+2\int_{\frac{\sqrt{2}}{2}}^{\sqrt{2}}\int_{0}^{\sqrt{2}-u}\frac{2\,dv}{2-u^2+v^2}\,du\\
    &amp;=4\int_{0}^{\frac{\sqrt{2}}{2}}\int_{0}^{u}\frac{\,dv}{2-u^2+v^2}\,du+4\int_{\frac{\sqrt{2}}{2}}^{\sqrt{2}}\int_{0}^{\sqrt{2}-u}\frac{\,dv}{2-u^2+v^2}\,du
\end{aligned}\]</span> Aha, now these are integrals that we know how to
evaluate (at least kind of). For the sake of not making this 10 pages,
I’m going to assume knowledge of the fact that <span
class="math display">\[\frac{d}{\,dx}\arctan
(x)=\frac{1}{x^2+1}\]</span> and let the reader prove for themselves
that <span class="math display">\[\label{eq:int1}
\int_{0}^{x}\frac{dt}{a^2+t^2}=\frac{1}{a}\arctan\biggl(\frac{x}{a}\biggr)\]</span>
by using integration by parts. This allows us to eliminate the inner
integral <span class="math display">\[\begin{aligned}
&amp;    4\int_{0}^{\frac{\sqrt{2}}{2}}\int_{0}^{u}\frac{\,dv}{2-u^2+v^2}\,du+4\int_{\frac{\sqrt{2}}{2}}^{\sqrt{2}}\int_{0}^{\sqrt{2}-u}\frac{\,dv}{2-u^2+v^2}\,du
    \\&amp;=4\int_{0}^{\frac{\sqrt{2}}{2}}\frac{1}{\sqrt{2-u^2}}\arctan\Biggl(\frac{u}{\sqrt{2-u^2}}\Biggr)\,du+4\int_{\frac{\sqrt{2}}{2}}^{\sqrt{2}}\frac{1}{\sqrt{2-u^2}}\arctan\Biggl(\frac{\sqrt{2}-u}{\sqrt{2-u^2}}\Biggr)\,du\\&amp;=I_1+I_2
\end{aligned}\]</span> where <span class="math inline">\(I_1\)</span>
and <span class="math inline">\(I_2\)</span> are defined as a normal
human being defines them. Now Apostol makes another masterful
u-substitution, writing <span
class="math inline">\(u=\sqrt{2}\sin{\theta}\)</span> in <span
class="math inline">\(I_1\)</span>, so that <span
class="math display">\[du=\sqrt{2}\cos{\theta}\,d\theta=\sqrt{2-u^2}\,d\theta\]</span>
because <span
class="math display">\[\sqrt{2-u^2}=\sqrt{2-2\sin^2{\theta}}=\sqrt{2(1-\sin^2{\theta})}=\sqrt{2\cos^2{\theta}}=\sqrt{2}\cos{\theta}\]</span>
by the Pythagorean Identity for trig functions. The usefulness of this
becomes obvious when we see that <span
class="math display">\[\frac{\,du}{\sqrt{2-u^2}}=\,d\theta\]</span> And
additionally, <span
class="math display">\[\tan{\theta}=\frac{\sin{\theta}}{\cos{\theta}}=\frac{\sqrt{2}\sin{\theta}}{\sqrt{2}\cos{\theta}}=\frac{u}{\sqrt{2-u^2}}\]</span>
The bounds of integration remain simple as well. Solving <span
class="math inline">\(\sqrt{2}\sin{\theta}=\frac{\sqrt{2}}{2}\)</span>
for <span class="math inline">\(\theta\)</span>, we find <span
class="math inline">\(\theta=\arcsin\bigl(\frac{1}{2}\bigr)=\frac{\pi}{6}\)</span>
And of course, if <span
class="math inline">\(\sqrt{2}\sin{\theta}=0\)</span>, then <span
class="math inline">\(\theta=0\)</span> Wow, quite a substitution!
Evaluating the first half of this integral is trivial now. <span
class="math display">\[\begin{aligned}
    &amp;I_1=4\int_{0}^{\frac{\sqrt{2}}{2}}\frac{\,du}{\sqrt{2-u^2}}\arctan\Biggl(\frac{u}{\sqrt{2-u^2}}\Biggr)=4\int_{0}^{\frac{\pi}{6}}\arctan(\tan(\theta))\,d\theta=4\int_{0}^{\frac{\pi}{6}}\theta\,d\theta\\
    &amp;=4\Biggl(\frac{\pi}{6}\Biggr)^2\frac{1}{2}=\frac{\pi^2}{18}
    \
\end{aligned}\]</span> <span class="math inline">\(I_2\)</span> is
evaluated in a similar fashion, letting <span
class="math inline">\(u=\sqrt{2}\cos{2\theta}\)</span> so that <span
class="math display">\[\begin{aligned}
    &amp;du=-2\sqrt{2}\sin{2\theta}\,d\theta=-2\sqrt{2}\sqrt{1-\cos^2{2\theta}}\,d\theta=-2\sqrt{2}\sqrt{1-\frac{1}{2}\bigl(\sqrt{2}\cos{2\theta}\bigr)^2}\,d\theta\\
    &amp;=-2\sqrt{2}\sqrt{1-\frac{u^2}{2}}\,d\theta=-2\sqrt{2-u^2}\,d\theta
\end{aligned}\]</span> This substitution also lets us simplify the
expression inside the <span class="math inline">\(\arctan\)</span> quite
a bit since <span class="math display">\[\begin{aligned}
    \frac{\sqrt{2}-u}{\sqrt{2-u^2}}=\frac{\sqrt{2}(1-\cos{2\theta})}{\sqrt{2-2\cos^2{2\theta}}}=\sqrt{2}\frac{1-\cos{2\theta}}{\sqrt{2(1-\cos^2{2\theta)}}}=\frac{1-\cos{2\theta}}{\sqrt{1-\cos^2{2\theta}}}=\frac{1-\cos{2\theta}}{\sin{2\theta}}=\tan{\theta}
\end{aligned}\]</span> where the last simplification follows from some
simple trigonometry left as an exercise for the reader. We can also
rewrite the bounds of integration similarly to last time since <span
class="math inline">\(\cos{0}=1\)</span>, so when <span
class="math inline">\(u=\sqrt{2}\)</span>, <span
class="math inline">\(\theta=0\)</span>. Similarly, if <span
class="math inline">\(u=\frac{\sqrt{2}}{2}\)</span>, <span
class="math inline">\(\theta=\frac{\pi}{6}\)</span> Before plunging into
the integral, let us also note that <span
class="math display">\[\frac{du}{\sqrt{2-u^2}}=-2\,d\theta\]</span> Then
<span class="math display">\[\begin{aligned}
    I_2=4\int_{\frac{\sqrt{2}}{2}}^{\sqrt{2}}\frac{\,du}{\sqrt{2-u^2}}\arctan\Biggl(\frac{\sqrt{2}-u}{\sqrt{2-u^2}}\Biggr)=4\int_{\frac{\pi}{6}}^{0}-2\arctan(\tan(\theta))\,d\theta=8\int_{0}^{\frac{\pi}{6}}\theta\,d\theta=4\biggl(\frac{\pi}{6}\biggr)^2=\frac{\pi^2}{9}
\end{aligned}\]</span> If you’re confused about how the order of
integration flips, try proving that <span
class="math display">\[\int_{a}^{b}f(x)\,dx=-\int_{b}^{a}f(x)\,dx\]</span>
But then <span
class="math display">\[\zeta(2)=I_1+I_2=\frac{\pi^2}{18}+\frac{\pi^2}{9}=\frac{3\pi^2}{18}=\frac{\pi^2}{6}\]</span>
And thus, going back several sections to our original problem,we see
that the density of lattice points visible from the origin is <span
class="math display">\[\frac{1}{\zeta(2)}=\frac{6}{\pi^2}\]</span></p>
</div>
</body>
</html>
