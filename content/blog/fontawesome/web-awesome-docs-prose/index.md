---
title: Your Design System Should Style Your Words, Too
authors:
  - name: Font Awesome
date: 2026-09-08T14:00:00.000Z
metadata:
  uuid: 11ty/import::atom::https://blog.fontawesome.com/web-awesome-docs-prose/
  type: atom
  url: https://blog.fontawesome.com/web-awesome-docs-prose/
  importHash: 510ba495ef55645a
---
> Most design systems stop where the article starts. Web Awesome keeps going: one class styles a whole block of content, a type scale is there when you need to place text by hand, and CSS `@scope` keeps all of it out of your components.

* * *

Nearly every product has a blog. Most have docs and a changelog too. And somehow every team ends up styling that content from scratch, with a typography stylesheet somebody wrote two years ago and nobody wants to open. We've written that stylesheet. More than once.

It exists because most design systems stop at components. Buttons, cards, inputs, all covered. Then a Markdown file shows up and you're on your own.

![4 Font Awesome icons on a navy background: text size, block quote, newspaper, anxious face](Up-YmpC22l-3840-HEDxXKlSh9bg.png)

We didn't want that gap in Web Awesome, so it has three things for flowing text. `wa-prose` styles a whole block of content at once. A type scale you can apply by hand anywhere. And a few text utilities for alignment and casing. That's enough for a blog post or a docs page without a typography stylesheet.

## The One-Class Route with [Prose](https://webawesome.com/docs/utilities/prose)

Put `wa-prose` on the wrapper and everything inside picks up spacing, sizing, and rhythm from your theme.

```html
<div class="wa-prose">
  <h1>Release Notes: v3.2</h1>
  <p>
    This release includes improvements to form validation, a new color picker
    component, and performance fixes across the board.
  </p>
  <h2>What's New</h2>
  <ul>
    <li>Color picker with alpha channel support</li>
    <li>Form validation messages now animate in</li>
  </ul>
  <blockquote>
    <p>
      "The best component library update is the one you don't have to migrate."
      — nobody, but it should be everyone
    </p>
  </blockquote>
  <pre><code>npm install @aspect/core@3.2</code></pre>
</div>
```

That's it. Headings land on the scale, paragraphs get a readable line height, lists indent the same way every time. Blockquotes get a left border. Code blocks get spacing (the colors and fonts come from Native Styles, Web Awesome's [base layer for standard HTML elements](https://webawesome.com/docs/utilities/native)). All of it hangs off one token, `--wa-space-scale`, so if you swap themes the prose follows.

The whole point is that you don't think about it. CMS output, rendered Markdown, hand-written HTML. Drop it in and it reads fine. No class on every element.

### See it in Action: [Holodeck Incident 47225.7 Entry](https://codepen.io/editor/team/webawesome/pen/019fa93f-8a5e-7638-a4dc-55e6a9536dc8)

A Star Trek captain's log with one `wa-prose` class on the wrapper and nothing else. Headings, lists, blockquotes, a table, figures, a code block. Zero interior classes. Prose makes it so.

See the Pen [Web Awesome's Word Styling: Prose Example](https://codepen.io/editor/team/webawesome/pen/019fa93f-8a5e-7638-a4dc-55e6a9536dc8) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

## Prose That Stays in Its Lane

Styling everything inside a container only works if it really is only inside. The moment your article's `h2` styles land on a card you embedded mid-post, you're writing overrides again. Different file, same problem.

`wa-prose` is built on [CSS `@scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope). Styles flow down from a root and stop at a boundary you set. So you can drop a component into the middle of an article and its headings stay the component's.

```html
<div class="wa-prose">
  <h2>This heading gets prose styles</h2>
  <p>So does this paragraph.</p>

  <div class="wa-not-prose">
    <!-- Everything in here is untouched by prose styles -->
    <wa-card>
      <h2>This heading is the card's business</h2>
    </wa-card>
  </div>

  <p>Back to prose styles here.</p>
</div>
```

One class opts in, one opts out. No specificity fights, no `!important`. This is what lets `wa-prose` be aggressive about headings and tables in the first place. Styles that opinionated without an exit would be a liability.

## Picking Sizes by Hand

`wa-prose` is for when you control the container. A lot of text doesn't live in one. A hero headline. A card title. The caption under a product shot. Those want the same scale without the whole prose treatment.

![4 Font Awesome icons on a navy background: text height, H2, outdent, message caption](t-kpdhEDYm-3840-FTUxfsbrKeEf.png)

That's what the standalone type classes are for. Three families. Each comes bare (style, no forced size) or with a size from `3xs` to `5xl`, and all three share the same range, so you're never juggling two scales.

### Headings

`wa-heading` for the default treatment, or `wa-heading-3xs` through `wa-heading-5xl` for a specific size.

```html
<!-- Hero headline: not inside wa-prose, but on the same scale -->
<h1 class="wa-heading-4xl">
  Build with components.
  <br />
  Ship real products.
</h1>

<!-- Card title: just needs heading treatment, default size -->
<h3 class="wa-heading">Latest from the blog</h3>
```

### Body

`wa-body` for body copy, sized variants for when the default is wrong.

```html
<!-- Sidebar description: slightly smaller than default body -->
<p class="wa-body-s">
  Updated weekly with framework guides, release notes, and community highlights.
</p>
```

### Captions

`wa-caption` for the small stuff: image credits, metadata, timestamps.

```html
<!-- Image caption -->
<figcaption class="wa-caption">
  Fig 3. Component rendering benchmark: Lit vs React vs Svelte
</figcaption>

<!-- Metadata line -->
<span class="wa-caption">Published Mar 14, 2025 · 8 min read</span>
```

This isn't a second system. `wa-prose` and the manual classes read the same tokens, so a `wa-heading-2xl` on a card and an `<h2>` inside a prose block come out identical. We care about that more than it probably sounds like. Two scales that almost match is how a site ends up with nine slightly different heading sizes.

### See it in Action: [Ratatouille Was Right Article](https://codepen.io/editor/team/webawesome/pen/019fa9a5-d05c-7d31-9aea-352815584ac3)

A food essay. The body is `wa-prose`, nothing around it is. The eyebrow, the metadata line, the author card, the footnotes, the suggestion cards: all placed by hand on the same scale.

See the Pen [Web Awesome's Word Styling: Type Sizing Example](https://codepen.io/editor/team/webawesome/pen/019fa9a5-d05c-7d31-9aea-352815584ac3) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

## Nudging Alignment and Case

The type classes set the size. The text utilities do the two other things you keep needing: alignment and casing. They stack on `wa-prose` or the manual classes, so a centered pull quote or an uppercase eyebrow doesn't need a CSS file.

### Alignment

`wa-text-start`, `wa-text-center`, `wa-text-end`, `wa-text-justify`.

Logical properties (`start`/`end`, not `left`/`right`), so they flip in RTL without you doing anything.

```html
<!-- Centered pull quote -->
<blockquote class="wa-text-center wa-heading-l">
  Design systems should have opinions about typography. Most don't.
</blockquote>

<!-- Justified body copy for a print-style article (use sparingly in narrow columns) -->
<div class="wa-prose wa-text-justify">...</div>
```

That second one works because `wa-prose` never sets `text-align`. That's on purpose. Put both classes on the same element and they get along.

### Casing

`wa-text-uppercase`, `wa-text-lowercase`, `wa-text-capitalize`.

```html
<!-- Eyebrow label above a section -->
<span class="wa-caption wa-text-uppercase">Case Study</span>

<!-- Normalize user-entered headings -->
<h2 class="wa-heading-xl wa-text-capitalize"></h2>
```

### See it in Action: [Thneed Changelog](https://codepen.io/editor/team/webawesome/pen/019fa9df-f213-728d-9c73-100cfde79f19)

A made-up product changelog with no `wa-prose` at all. Every piece of text is placed by hand: `wa-heading-4xl` for the title, `wa-caption wa-text-uppercase` for the category labels, `wa-body-s` for the entries. More work than the prose route, and the right call for a page that's mostly small labeled chunks instead of flowing text.

See the Pen [Web Awesome's Word Styling: Text Utilities Example](https://codepen.io/editor/team/webawesome/pen/019fa9df-f213-728d-9c73-100cfde79f19) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

## Get Started

Check your `<head>` before anything else. Everything in this post lives in `utilities.css`, and the styling underneath prose comes from `native.css`. The install docs call `native.css` optional. For prose it isn't, and it's an easy thing to miss. Without it, `wa-prose` gets you spacing and sizes but no colors, fonts, or borders on the elements themselves, and the page looks half-finished.

```html
<!-- Required: default theme + autoloader -->
<link
  rel="stylesheet"
  href="https://ka-f.webawesome.com/webawesome@3.12.0/styles/themes/default.css"
/>
<script
  type="module"
  src="https://ka-f.webawesome.com/webawesome@3.12.0/webawesome.loader.js"
></script>

<!-- Utility classes: wa-prose, the type scale, the text utilities -->
<link
  rel="stylesheet"
  href="https://ka-f.webawesome.com/webawesome@3.12.0/styles/utilities.css"
/>

<!-- Native Styles: color, fonts, and borders for the elements inside your prose -->
<link
  rel="stylesheet"
  href="https://ka-f.webawesome.com/webawesome@3.12.0/styles/native.css"
/>
```

Want one line? `styles/webawesome.css` pulls in all three.

Then put `wa-prose` on your content container and see how far it gets you. Our bet is most of the way. When you need to step outside it (a hero [heading](https://webawesome.com/docs/utilities/text/#headings), a [caption](https://webawesome.com/docs/utilities/text/#captions)), reach for the type scale classes.

### Dig Into the Docs

[Prose Docs](https://webawesome.com/docs/utilities/prose/) [Text Utilities Docs](https://webawesome.com/docs/utilities/text/) [Typography Tokens](https://webawesome.com/docs/tokens/typography/)

One thing Web Awesome doesn't do: syntax highlighting. Bring your own Prism, Shiki, or highlight.js.
