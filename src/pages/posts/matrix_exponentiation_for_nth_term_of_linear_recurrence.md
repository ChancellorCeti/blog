---
layout: '../layouts/MarkdownPostLayout.astro'
title: "Matrix Exponentiation for n'th term of Linear recurrence"
pubDate: 2022-06-13
description: "Explaining a common method for finding the n'th term of a linear recurrence in logarithmic time using binary exponentiation of matrices."
author: 'Chancellor Ceti'
tags: ["algorithm","project euler"]
---
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Chancellor Ceti" />
  <title>Matrix Exponentiation for n’th Term of Linear Recurrence</title>
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
    }
    *{
        color:white;
    }
    .sourceCode span > *{
        color:black;
    }
    #sub_body{
        padding-left: 50px;
      padding-right: 50px;
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
<h1 class="title">Matrix Exponentiation for n’th Term of Linear
Recurrence</h1>
<p class="author">Chancellor Ceti</p>
<p class="date">June 2023</p>
</header>
<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#introduction" id="toc-introduction">Introduction</a></li>
<li><a href="#matrix-logic" id="toc-matrix-logic">Matrix Logic</a></li>
<li><a href="#how-to-raise-matrices-to-powers-fast"
id="toc-how-to-raise-matrices-to-powers-fast">How to raise matrices to
powers FAST</a></li>
<li><a href="#code-and-closing-thoughts"
id="toc-code-and-closing-thoughts">Code and Closing Thoughts</a></li>
</ul>
</nav>
<h1 id="introduction">Introduction</h1>
<p>A problem that often rises in the domain of competitive programming
is, given an integer n, a sequence of numbers <span
class="math inline">\(f_0,f_1..,f_{k-1}\)</span>, and a sequence of
numbers <span class="math inline">\(c_i\)</span> that satisfy <span
class="math display">\[\sum_{i=1}^{k}c_if_{n-i}=f_n\]</span> finding
<span class="math inline">\(f_n\)</span> efficiently. A naive approach
to this would be starting at <span class="math inline">\(f_k\)</span>
and using the recurrence relation to successively compute all <span
class="math inline">\(f_i\)</span> up to <span
class="math inline">\(f_n\)</span>. This approach clearly runs in linear
time, <span class="math inline">\(O(n)\)</span>. While this is an
acceptable starting point, as <span class="math inline">\(n\)</span>
grows, this calculation takes more and more time– we can do better than
this. Rest assured, the solution I outline here will run in logarithmic
time, <span class="math inline">\(O(k^3\cdot \log_2n)\)</span>, by
making use of the idea of binary exponentiation. I’ll start by
explaining why we need matrices here in Section 2, and then in Section
3, I’ll show how we can make this run in logarithmic time using binary
exponentiation. Finally, I’ll show my personal Rust implementation and
offer some closing thoughts on this whole process. With that out of the
way, let’s start by talking about the matrix part of matrix
exponentiation.</p>
<h1 id="matrix-logic">Matrix Logic</h1>
<p>Note– you need to know what a matrix is and how to multiply two
matrices together in order to understand this. If that sounds unfamiliar
to you, you should probably brush up on that. If you were awake in your
linear algebra class, this should be a walk in the park. We have <span
class="math display">\[\sum_{i=1}^{k}c_if_{n-i}=f_n\]</span> and are
given <span class="math inline">\(f_0,f_1,..,f_{k-1}\)</span>. Let’s put
the values of <span class="math inline">\(f_i\)</span> that we have into
a column vector <span class="math inline">\(F\)</span> such that <span
class="math display">\[F=\begin{pmatrix}f_0\\f_1\\.\\.\\.\\f_{k-1}\end{pmatrix}\]</span>
Now the question is, what can we do to <span
class="math inline">\(F\)</span> that would produce <span
class="math display">\[F&#39;=\begin{pmatrix}f_1\\f_2\\.\\.\\.\\f_k\end{pmatrix}\]</span>
Now we introduce the matrix <span
class="math display">\[T=\begin{pmatrix}0 &amp; 1 &amp; 0 &amp; 0 &amp;
. &amp; .\\
    0 &amp; 0 &amp; 1 &amp; 0 &amp; . &amp; .\\
    0 &amp; 0 &amp; 0 &amp; 1 &amp; . &amp; .\\
    . &amp; . &amp; . &amp; . &amp; . &amp; .\\
    c_k &amp; c_{k-1} &amp; c_{k-2} &amp; . &amp; . &amp; c_1
\end{pmatrix}\]</span> An elementary calculation will confirm that <span
class="math display">\[T * F = F&#39;= \begin{pmatrix}f_1 \\ f_2 \\ .\\
. \\f_k\end{pmatrix}\]</span> Clearly <span
class="math inline">\(T\)</span> bears some relevance to this problem.
Upon some further experimentation, we see that, in general, <span
class="math display">\[T^n*F=F^{(n)}\]</span> where <span
class="math display">\[F^{(n)}=\begin{pmatrix}f_n\\f_{n+1}\\.\\.\\f_{n+k-1}\end{pmatrix}\]</span>
and <span class="math inline">\(T^n\)</span> denotes the multiplication
of <span class="math inline">\(T\)</span> with itself <span
class="math inline">\(n\)</span> times. The induction proof is here for
those who enjoy rigor. If you don’t like strange matrix manipulation,
then you can skip ahead to Section 3.</p>
<p>Let’s start with the base case, <span
class="math inline">\(n=1\)</span>. <span
class="math display">\[T*F=\begin{pmatrix}1*f_1\\1*f_2\\.\\.\\c_kf_0+c_{k-1}f_1+\cdots+c_1f_{k-1}\end{pmatrix}=\begin{pmatrix}f_1\\f_2\\.\\.\\f_k
\end{pmatrix}\]</span> due to the definition of matrix multiplication
and the recurrence definition of <span
class="math inline">\(f_k\)</span>. So the base case is clearly true,
showing <span class="math inline">\(T^1*F=F&#39;\)</span>. Now assume
that <span class="math inline">\(T^n*F=F^{(n)}\)</span> for any n. Then
<span
class="math display">\[T^{n+1}*F=\begin{pmatrix}f_n\\f_{n+1}\\.\\.\\f_{n+k-1}\end{pmatrix}*\begin{pmatrix}0
&amp; 1 &amp; 0 &amp; 0 &amp; . &amp; .\\
    0 &amp; 0 &amp; 1 &amp; 0 &amp; . &amp; .\\
    0 &amp; 0 &amp; 0 &amp; 1 &amp; . &amp; .\\
    . &amp; . &amp; . &amp; . &amp; . &amp; .\\
    c_k &amp; c_{k-1} &amp; c_{k-2} &amp; . &amp; . &amp; c_1
\end{pmatrix}=\begin{pmatrix}f_{n+1}\\f_{n+2}\\.\\.\\f_{n+k}\end{pmatrix}\]</span>
by the same definitions as before. So clearly the hypothesis is true,
and <span class="math inline">\(T^n*F=F^{(n)}\)</span>.</p>
<p>Great, we now know that <span class="math inline">\(f_n\)</span> is
just the first entry in the vector <span
class="math inline">\(F^{(n)}=T^n*F\)</span>. Now we come to the
question of how to compute this in logarithmic time– enter binary
exponentiation!</p>
<h1 id="how-to-raise-matrices-to-powers-fast">How to raise matrices to
powers FAST</h1>
<p>Binary exponentiation, as the name suggests, utilizes the binary
representation of the exponent you are raising a base to. Naive
exponentiation, running in linear time, would utilize the fact that
<span class="math display">\[T^n=\prod_{i=1}^{n}T\]</span> and multiply
<span class="math inline">\(T\)</span> by itself <span
class="math inline">\(n\)</span> times for <span
class="math inline">\(O(n)\)</span> running time(note: the empty product
is equal to <span class="math inline">\(1\)</span>). This, however, is
not optimal. The following definition of <span
class="math inline">\(T^n\)</span> can be verified by simple arithmetic.
<span class="math display">\[T^n=\begin{cases}
    1 &amp;\text{if } n==0\\
(T^{\frac{n}{2}})^2 &amp;\text{if } n&gt;0 \text{ and } n \text{ even}
\\
(T^{\frac{n-1}{2}})^2*T &amp;\text{if } n&gt;0 \text{ and }n \text{ odd}
\end{cases}\]</span> This suggests an algorithm of the form</p>
<pre><code>function pow(t:matrix, n:int)-&gt;matrix
    if n==0
        return I
    res = pow(t,floor(n/2))
    if n%2==0
        return res*res
    else
        return res*res*t</code></pre>
<p>where I is the identity matrix. We can do away with the messy
recursion by writing the equivalent</p>
<pre><code>function pow(t:int,n:int)
    res = I
    while n&gt;0
        if n%2==1
            res = res*t
        t = t*t
        n/=2
    return res</code></pre>
<p>since <span class="math inline">\(I*T=T\)</span>. This is <span
class="math inline">\(O(\log_2n)\)</span> time complexity since it has
as many iterations as it takes to reduce <span
class="math inline">\(n\)</span> to <span
class="math inline">\(1\)</span> by dividing by <span
class="math inline">\(2\)</span>, which is the nature of a logarithmic
function. So, armed, with binary exponentiation, let’s see what a proper
implementation of this looks like!</p>
<h1 id="code-and-closing-thoughts">Code and Closing Thoughts</h1>
<p>A decent implementation of the algorithm described below is given
here, written in Rust. The modulo parameter in my functions is a trivial
extension to the original concept designed to meet certain problem
constraints. All in all, this runs in <span
class="math inline">\(O(k^3*\log_2n)\)</span> time because matrix
multiplication is not a constant time operation– there’s three nested
loops, with time dependent on <span class="math inline">\(k\)</span>, in
the</p>
<pre><code>matrix_mult</code></pre>
<p>function. This can definitely be optimized further, but for almost
all purposes, this will be perfectly fine performance. If anyone finds a
mistake in any of this or a cool optimization, please contact me on
Discord at</p>
<pre><code>floofydoggo</code></pre>
<p>or email me at chancellorceti@gmail.com And now, finally the
long-awaited code!</p>
<div class="sourceCode" id="cb5" data-language="Rust" style="boxed"><pre
class="sourceCode Rust"><code class="sourceCode rust"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="kw">fn</span> matrix_mult(</span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>    a<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;,</span></span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a>    b<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;,</span></span>
<span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a>    modulo<span class="op">:</span> <span class="dt">i128</span></span>
<span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a>    )<span class="op">-&gt;</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;</span> <span class="op">{</span></span>
<span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> <span class="kw">mut</span> res<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;</span> <span class="op">=</span> <span class="pp">vec!</span>[<span class="pp">vec!</span>[<span class="dv">0</span><span class="op">;</span> b[<span class="dv">0</span>]<span class="op">.</span>len()]<span class="op">;</span></span>
<span id="cb5-7"><a href="#cb5-7" aria-hidden="true" tabindex="-1"></a>    a<span class="op">.</span>len()]<span class="op">;</span></span>
<span id="cb5-8"><a href="#cb5-8" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i <span class="kw">in</span> <span class="dv">0</span><span class="op">..</span>a<span class="op">.</span>len() <span class="op">{</span></span>
<span id="cb5-9"><a href="#cb5-9" aria-hidden="true" tabindex="-1"></a>        <span class="cf">for</span> j <span class="kw">in</span> <span class="dv">0</span><span class="op">..</span>b[<span class="dv">0</span>]<span class="op">.</span>len() <span class="op">{</span></span>
<span id="cb5-10"><a href="#cb5-10" aria-hidden="true" tabindex="-1"></a>            <span class="cf">for</span> k <span class="kw">in</span> <span class="dv">0</span><span class="op">..</span>a<span class="op">.</span>len() <span class="op">{</span></span>
<span id="cb5-11"><a href="#cb5-11" aria-hidden="true" tabindex="-1"></a>                res[i][j] <span class="op">+=</span> a[i][k] <span class="op">*</span> b[k][j]<span class="op">;</span></span>
<span id="cb5-12"><a href="#cb5-12" aria-hidden="true" tabindex="-1"></a>            <span class="op">}</span></span>
<span id="cb5-13"><a href="#cb5-13" aria-hidden="true" tabindex="-1"></a>            res[i][j] <span class="op">%=</span> modulo<span class="op">;</span></span>
<span id="cb5-14"><a href="#cb5-14" aria-hidden="true" tabindex="-1"></a>        <span class="op">}</span></span>
<span id="cb5-15"><a href="#cb5-15" aria-hidden="true" tabindex="-1"></a>    <span class="op">}</span></span>
<span id="cb5-16"><a href="#cb5-16" aria-hidden="true" tabindex="-1"></a>    res</span>
<span id="cb5-17"><a href="#cb5-17" aria-hidden="true" tabindex="-1"></a><span class="op">}</span></span>
<span id="cb5-18"><a href="#cb5-18" aria-hidden="true" tabindex="-1"></a><span class="kw">fn</span> matrix_pow(</span>
<span id="cb5-19"><a href="#cb5-19" aria-hidden="true" tabindex="-1"></a>    m<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;,</span></span>
<span id="cb5-20"><a href="#cb5-20" aria-hidden="true" tabindex="-1"></a>    n<span class="op">:</span> <span class="dt">i128</span><span class="op">,</span></span>
<span id="cb5-21"><a href="#cb5-21" aria-hidden="true" tabindex="-1"></a>    modulo<span class="op">:</span> <span class="dt">i128</span></span>
<span id="cb5-22"><a href="#cb5-22" aria-hidden="true" tabindex="-1"></a>)<span class="op">-&gt;</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;</span> <span class="op">{</span></span>
<span id="cb5-23"><a href="#cb5-23" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> <span class="kw">mut</span> base <span class="op">=</span> m<span class="op">.</span>clone()<span class="op">;</span></span>
<span id="cb5-24"><a href="#cb5-24" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> <span class="kw">mut</span> res<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;</span> <span class="op">=</span> <span class="pp">vec!</span>[<span class="pp">vec!</span>[]<span class="op">;</span>m<span class="op">.</span>len()]<span class="op">;</span></span>
<span id="cb5-25"><a href="#cb5-25" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i <span class="kw">in</span> <span class="dv">0</span><span class="op">..</span>res<span class="op">.</span>len()<span class="op">{</span></span>
<span id="cb5-26"><a href="#cb5-26" aria-hidden="true" tabindex="-1"></a>        <span class="kw">let</span> <span class="kw">mut</span> row<span class="op">:</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;</span> <span class="op">=</span> <span class="pp">vec!</span>[<span class="dv">0</span><span class="op">;</span>res<span class="op">.</span>len()]<span class="op">;</span></span>
<span id="cb5-27"><a href="#cb5-27" aria-hidden="true" tabindex="-1"></a>        row[i]<span class="op">=</span><span class="dv">1</span><span class="op">;</span></span>
<span id="cb5-28"><a href="#cb5-28" aria-hidden="true" tabindex="-1"></a>        res[i]<span class="op">=</span>row<span class="op">;</span></span>
<span id="cb5-29"><a href="#cb5-29" aria-hidden="true" tabindex="-1"></a>    <span class="op">}</span></span>
<span id="cb5-30"><a href="#cb5-30" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> <span class="kw">mut</span> nc <span class="op">=</span> n<span class="op">.</span>clone()<span class="op">;</span></span>
<span id="cb5-31"><a href="#cb5-31" aria-hidden="true" tabindex="-1"></a>    <span class="cf">while</span> nc <span class="op">&gt;</span> <span class="dv">0</span> <span class="op">{</span></span>
<span id="cb5-32"><a href="#cb5-32" aria-hidden="true" tabindex="-1"></a>        <span class="cf">if</span> nc <span class="op">%</span> <span class="dv">2</span> <span class="op">==</span> <span class="dv">1</span> <span class="op">{</span></span>
<span id="cb5-33"><a href="#cb5-33" aria-hidden="true" tabindex="-1"></a>            res <span class="op">=</span> matrix_mult(</span>
<span id="cb5-34"><a href="#cb5-34" aria-hidden="true" tabindex="-1"></a>                res<span class="op">,</span></span>
<span id="cb5-35"><a href="#cb5-35" aria-hidden="true" tabindex="-1"></a>                base<span class="op">.</span>clone()<span class="op">,</span></span>
<span id="cb5-36"><a href="#cb5-36" aria-hidden="true" tabindex="-1"></a>                modulo<span class="op">.</span>clone()</span>
<span id="cb5-37"><a href="#cb5-37" aria-hidden="true" tabindex="-1"></a>            )<span class="op">;</span></span>
<span id="cb5-38"><a href="#cb5-38" aria-hidden="true" tabindex="-1"></a>            nc <span class="op">-=</span> <span class="dv">1</span><span class="op">;</span></span>
<span id="cb5-39"><a href="#cb5-39" aria-hidden="true" tabindex="-1"></a>        <span class="op">}</span></span>
<span id="cb5-40"><a href="#cb5-40" aria-hidden="true" tabindex="-1"></a>        base <span class="op">=</span> matrix_mult(</span>
<span id="cb5-41"><a href="#cb5-41" aria-hidden="true" tabindex="-1"></a>            base<span class="op">.</span>clone()<span class="op">,</span></span>
<span id="cb5-42"><a href="#cb5-42" aria-hidden="true" tabindex="-1"></a>            base<span class="op">.</span>clone()<span class="op">,</span></span>
<span id="cb5-43"><a href="#cb5-43" aria-hidden="true" tabindex="-1"></a>            modulo</span>
<span id="cb5-44"><a href="#cb5-44" aria-hidden="true" tabindex="-1"></a>        )<span class="op">;</span></span>
<span id="cb5-45"><a href="#cb5-45" aria-hidden="true" tabindex="-1"></a>        nc <span class="op">/=</span> <span class="dv">2</span><span class="op">;</span></span>
<span id="cb5-46"><a href="#cb5-46" aria-hidden="true" tabindex="-1"></a>    <span class="op">}</span></span>
<span id="cb5-47"><a href="#cb5-47" aria-hidden="true" tabindex="-1"></a>    res</span>
<span id="cb5-48"><a href="#cb5-48" aria-hidden="true" tabindex="-1"></a><span class="op">}</span></span>
<span id="cb5-49"><a href="#cb5-49" aria-hidden="true" tabindex="-1"></a><span class="kw">pub</span> <span class="kw">fn</span> nth_term(</span>
<span id="cb5-50"><a href="#cb5-50" aria-hidden="true" tabindex="-1"></a>    coeffs<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;,</span></span>
<span id="cb5-51"><a href="#cb5-51" aria-hidden="true" tabindex="-1"></a>    init<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;,</span></span>
<span id="cb5-52"><a href="#cb5-52" aria-hidden="true" tabindex="-1"></a>    n<span class="op">:</span> <span class="dt">i128</span><span class="op">,</span></span>
<span id="cb5-53"><a href="#cb5-53" aria-hidden="true" tabindex="-1"></a>    modulo<span class="op">:</span> <span class="dt">i128</span></span>
<span id="cb5-54"><a href="#cb5-54" aria-hidden="true" tabindex="-1"></a>    ) <span class="op">-&gt;</span> <span class="dt">i128</span> <span class="op">{</span></span>
<span id="cb5-55"><a href="#cb5-55" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> k <span class="op">=</span> coeffs<span class="op">.</span>len()<span class="op">;</span></span>
<span id="cb5-56"><a href="#cb5-56" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> <span class="kw">mut</span> t<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;</span> <span class="op">=</span> <span class="pp">vec!</span>[<span class="pp">vec!</span>[]<span class="op">;</span> k]<span class="op">;</span></span>
<span id="cb5-57"><a href="#cb5-57" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i <span class="kw">in</span> <span class="dv">0</span><span class="op">..</span>k <span class="op">-</span> <span class="dv">1</span> <span class="op">{</span></span>
<span id="cb5-58"><a href="#cb5-58" aria-hidden="true" tabindex="-1"></a>        <span class="kw">let</span> <span class="kw">mut</span> row<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;</span> <span class="op">=</span> <span class="pp">vec!</span>[<span class="dv">0</span><span class="op">;</span> k]<span class="op">;</span></span>
<span id="cb5-59"><a href="#cb5-59" aria-hidden="true" tabindex="-1"></a>        row[i <span class="op">+</span> <span class="dv">1</span>] <span class="op">=</span> <span class="dv">1</span><span class="op">;</span></span>
<span id="cb5-60"><a href="#cb5-60" aria-hidden="true" tabindex="-1"></a>        t[i] <span class="op">=</span> row<span class="op">;</span></span>
<span id="cb5-61"><a href="#cb5-61" aria-hidden="true" tabindex="-1"></a>    <span class="op">}</span></span>
<span id="cb5-62"><a href="#cb5-62" aria-hidden="true" tabindex="-1"></a>    t[k <span class="op">-</span> <span class="dv">1</span>] <span class="op">=</span> coeffs<span class="op">.</span>into_iter()<span class="op">.</span>rev()<span class="op">.</span>collect()<span class="op">;</span></span>
<span id="cb5-63"><a href="#cb5-63" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> t_pow <span class="op">=</span> matrix_pow(t<span class="op">,</span> n<span class="op">,</span> modulo)<span class="op">;</span></span>
<span id="cb5-64"><a href="#cb5-64" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> <span class="kw">mut</span> init_matrix<span class="op">:</span> <span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">Vec</span><span class="op">&lt;</span><span class="dt">i128</span><span class="op">&gt;&gt;</span> <span class="op">=</span></span>
<span id="cb5-65"><a href="#cb5-65" aria-hidden="true" tabindex="-1"></a>        <span class="pp">vec!</span>[<span class="pp">vec!</span>[]<span class="op">;</span> init<span class="op">.</span>len()]<span class="op">;</span></span>
<span id="cb5-66"><a href="#cb5-66" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i <span class="kw">in</span> <span class="dv">0</span><span class="op">..</span>init<span class="op">.</span>len() <span class="op">{</span></span>
<span id="cb5-67"><a href="#cb5-67" aria-hidden="true" tabindex="-1"></a>        init_matrix[i] <span class="op">=</span> <span class="pp">vec!</span>[init[i]]<span class="op">;</span></span>
<span id="cb5-68"><a href="#cb5-68" aria-hidden="true" tabindex="-1"></a>    <span class="op">}</span></span>
<span id="cb5-69"><a href="#cb5-69" aria-hidden="true" tabindex="-1"></a>    <span class="kw">let</span> res_matrix <span class="op">=</span> matrix_mult(</span>
<span id="cb5-70"><a href="#cb5-70" aria-hidden="true" tabindex="-1"></a>        t_pow<span class="op">,</span></span>
<span id="cb5-71"><a href="#cb5-71" aria-hidden="true" tabindex="-1"></a>        init_matrix<span class="op">,</span></span>
<span id="cb5-72"><a href="#cb5-72" aria-hidden="true" tabindex="-1"></a>        modulo</span>
<span id="cb5-73"><a href="#cb5-73" aria-hidden="true" tabindex="-1"></a>        )<span class="op">;</span></span>
<span id="cb5-74"><a href="#cb5-74" aria-hidden="true" tabindex="-1"></a>    res_matrix[<span class="dv">0</span>][<span class="dv">0</span>]</span>
<span id="cb5-75"><a href="#cb5-75" aria-hidden="true" tabindex="-1"></a><span class="op">}</span></span></code></pre></div>
</div>
</body>
</html>
