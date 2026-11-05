---
title: Font Awesome’s Key Pages Are Now Readable by AI Agents
authors:
  - name: Font Awesome
date: 2026-11-05T16:31:23.000Z
metadata:
  uuid: 11ty/import::atom::https://blog.fontawesome.com/blog-key-pages-readable-by-ai-agents/
  type: atom
  url: https://blog.fontawesome.com/blog-key-pages-readable-by-ai-agents/
  importHash: 23e5f545af27dab8
---
> Need input!

Gee willikers, this is a little embarrassing. Maybe you noticed our homepage has a section promoting our AI agent tools, install command and all, sitting right there in a cute little code block? Well, we checked what an AI agent actually sees when it reads that page. Aaaand the install command showed up exactly zero times. Turns out a lot of our site wasn’t readable by AI agents at all.

## What an AI Agent Actually Sees

The reason is pretty basic. fontawesome.com is built as a JavaScript app. Your browser runs that JavaScript and draws the page for you. Most AI agents don’t. The agents grab the raw HTML and work from that, and for a big chunk of our site, the raw HTML was an empty shell. Our license, plans, and changelog pages each came back as about 20KB of code without a single sentence of actual text.

These days that matters more than it used to. A growing number of developers size up a library by asking an AI assistant about it with questions like … “can I use Pro icons in a client project?”, “can I use the free icons in a commercial project?”, “what’s included in each plan?”, “what changed in the latest release?”, and so on. If the assistant goes to our site for the answer and comes up short, it either shrugs or guesses. And a guess about licensing terms is worse than silence.

## Our Key Pages, Now in Plain Text

So, in honor of fixing the uninteresting stuff, as of October 20, our key pages come in plain text. The [changelog](https://fontawesome.com/changelog), [Pro license,](https://fontawesome.com/plans/platform) [Free license](https://fontawesome.com/license/free), [plans](https://fontawesome.com/plans), [privacy,](https://fontawesome.com/privacy) and [refunds](https://fontawesome.com/refunds) pages are now also published as markdown, a plain-text format AI agents read easily. Ask an assistant what either Font Awesome license allows, and it reads the for reals, actual license. That Free license page matters a lot: millions of people use Font Awesome Free, and they deserve a straight answer too. Ask what’s new in Font Awesome, and it reads the legit changelog. We focused on these pages because they’re where a wrong answer costs you the most, whether that’s a licensing mistake, a surprise on your bill, or a missed feature.

![4 Font Awesome icons on a navy background: signed file, code comparison, closed lock, hand holding a coin](vsxbZtrIUF-1440-GKOgWXup05Lv.png)

## A Front Door for Agents

We also gave agents a place to start. Our docs site already had an llms.txt file, and now the main site does too. [fontawesome.com/llms.txt](https://fontawesome.com/llms.txt) is a short, plain-text index, following an emerging convention for helping AI tools find their way around a site. It links to all of these markdown pages, plus our docs and our AI agent tools, so an agent doesn’t have to guess where to look.

## A Real Table for Every Kind of Reader

And there’s a happy side effect to all this. The plan comparison grid on our plans page looked like a table but was built from styled boxes. Agents saw it as a jumble of loose paragraphs, and so did screen readers. We rebuilt it as a real table, so screen readers got their proper rows and columns back, and agents get the real table too. So when an assistant needs to know which plans include the [Figma plugin](https://docs.fontawesome.com/desktop/add-icons/figma-plugin), or how many custom icons come with Solo, it reads the answer straight off the table. It’s one fix that helps two very different kinds of readers.

![4 Font Awesome icons on a navy background: loose rectangle grid, woozy face, table layout, checkmark](iomMTPVPTH-1440-OFZULFvJs67b.png)

## Not Sexy, Just Readable

Now, we know none of this is particularly sexy, and that’s sort of the point. The fix for “AI can’t read our site” turned out to be plain text, written down, where anything can read it. And those AI agent tools from our homepage, the ones agents couldn’t see? Our llms.txt points right to them.

## Your Assistant, Minus the Guessing

Here’s the thing, though. Pages your assistant can read are only half the story. A while back, we shipped AI agent tools that keep your coding assistant from guessing about icons, too. Instead of inventing a class name that sounds right, it checks your actual Kit and gets the real icon back, custom icons included. Put that together with this update, and your assistant doesn’t have to guess about Font Awesome, period. Not the icons, not the license, not the plans.

![4 Font Awesome icons on a navy background: markdown file, robot head, briefcase, clipboard checklist](Of-hF-Md_R-1440-1K4X682akwVT.png)

Give your assistant the real answers →

[Read More!](https://blog.fontawesome.com/font-awesome-ai-agent-tools/)
