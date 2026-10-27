---
title: Random Content, On Purpose
authors:
  - name: Font Awesome
date: 2026-09-22T14:00:00.000Z
metadata:
  uuid: 11ty/import::atom::https://blog.fontawesome.com/web-awesome-random-content/
  type: atom
  url: https://blog.fontawesome.com/web-awesome-random-content/
  importHash: 15c2377bbe7f185c
---
> We built ten small demos with one Web Awesome component and a lot of dumb greeting copy. Some of them we'd ship tomorrow. A couple we'd argue about first.

* * *

`<wa-random-content>` is one of the smaller components in Web Awesome, and one of our favorites. You give it some children, it shows one at random. That's the whole thing. No script, no array of strings hiding in your component logic.

```html
<wa-random-content>
  <p>Nice work.</p>
  <p>That's the one.</p>
  <p>Look at you go.</p>
</wa-random-content>
```

We kept wanting to use it everywhere, which is the wrong instinct. So before the list, the one rule we landed on: only randomize stuff that can change without changing what it means. A greeting can say something different every morning. A status line can't. The task count, the button labels, the numbers, all of that stays put.

Here are the ten we built.

## Greetings

Every app we've ever used says "Welcome back." Every time. Forever. It takes about five minutes to create, which is kind of the point.

See the Pen [Web Awesome's Random Content: Greetings](https://codepen.io/editor/team/webawesome/pen/019fd409-c6e3-7480-a9df-fe32caa6629e) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

Look at what doesn't move: the "3 unexplained cases" line under the greeting. Randomize the hello, not the number. We'll keep saying that.

## Empty States

A brand new user lands on an empty project list and has no idea what to do. Give them a nudge that's a little different each time.

See the Pen [Web Awesome's Random Content: Empty States](https://codepen.io/editor/team/webawesome/pen/019fd410-a0c1-76ab-ade3-dea6a7543f1f) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

The suggestion rotates, but the buttons don't, because if someone hits back and the button they clicked is gone, that's a bug as far as they're concerned. So the rotation only touches the text.

## Success Confirmations

Somebody just finished something. "Saved!" is fine. It's also a missed chance to be a little fun.

See the Pen [Web Awesome's Random Content: Success Confirmations](https://codepen.io/editor/team/webawesome/pen/019fd413-cd77-71f9-b03d-950d3bf99a34) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

The celebration goes above the real status line, not instead of it. It gets to be playful because nobody needs it for anything.

## Loading Messages

This is the one we'd push for hardest. Long tasks have to show something while they run, and that's dead air. Might as well put some personality in it.

See the Pen [Web Awesome's Random Content: Loading Messages](https://codepen.io/editor/team/webawesome/pen/019fd416-dfc9-76d0-9221-c6970a64b024) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

One thing we were careful about here. The jokes are `aria-hidden`, and there's a separate status element that says "Generating your report. This may take a moment." A screen reader hears that once and moves on, instead of getting a new joke read out every few seconds. That would be awful.

## Rotating Artwork

Any place with one decorative image (sign-up page, 404, the hero on a long article) can rotate through a few instead. Same page, slightly different look each visit. Small thing. People notice.

In our pen each image carries a color name, and the card border and button pick it up. So the whole panel shifts with the image, not just the picture.

See the Pen [Web Awesome's Random Content: Rotating Artwork](https://codepen.io/editor/team/webawesome/pen/019fd418-85c1-728c-b1af-7b50bec78a8f) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

Two gotchas. `mode="sequence"` loads the first image first, which avoids a flash on initial render. And the images you can't see still download unless you put `loading="lazy"` on them. Lazy loading means a brief blank the first time each one shows up, in exchange for not downloading five images to display one. We'd take that trade.

## Logo Spotlight

Every marketing site has a customer logo strip. There are always more logos than fit, so somebody picks a permanent six, and the other twenty never get seen by anyone.

`items="6"` pulls six from the full set. `autoplay` swaps them every few seconds. Everybody gets some airtime.

This is one of the two we'd argue about. Not because the component is wrong for it, but because `autoplay` comes with homework most teams skip.

See the Pen [Web Awesome's Random Content: Logo Spotlight](https://codepen.io/editor/team/webawesome/pen/019fd419-da4c-715e-b4ce-1b9a09b2bea6) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

If you use `autoplay`, put a visible pause button next to it. The component already pauses on hover and focus, but the logos themselves aren't focusable, so a keyboard user has nothing to land on. We also hid the rotating logos from screen readers and listed the full client set as plain text, so assistive tech gets every name at once instead of six at a time.

## Next Reads

Same trick, different content. Show a few articles from a bigger pool at the bottom of every post.

See the Pen [Web Awesome's Random Content: Next Reads + Links](https://codepen.io/editor/team/webawesome/pen/019fd41c-63e1-758a-88e2-16b686974b37) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

Honest take: if your CMS already recommends posts by tag or popularity, use that. It's smarter than random. But random beats the hand-picked "related posts" list somebody made a year ago and never touched again. We've all got one of those.

## Grids

Up to here it's been one `<wa-random-content>` per example. Nothing says you can't run forty.

This is the other one we'd argue about. It's a narrow case. But it shows something the single examples don't, so it stayed.

An asset library waiting on thumbnails is a wall of the same placeholder. Give each tile its own random content and the wall starts looking like actual items.

See the Pen [Web Awesome's Random Content: Grids](https://codepen.io/editor/team/webawesome/pen/019fd41d-70c3-77e8-8843-7c2156cb4319) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

One catch. Each tile picks on its own, so two neighbors can land on the same option. With a big pool that reads as coincidence. With a small pool it reads as a bug. Give it enough options that it doesn't happen much.

## Name Generator

Everything above randomizes on its own. The user never asked. This one flips it: the randomness is the feature.

Naming things is hard, so people skip it during onboarding and you end up with "Untitled Project (4)". A generate button beats a blank field.

See the Pen [Web Awesome's Random Content: Name Generator](https://codepen.io/editor/team/webawesome/pen/019fd41e-9d65-729a-8ba6-487b92c7a414) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

The trick is where the randomizer lives: inside one stable button. Same rule as the greeting: the name changes, the button doesn't.

Which brings up something to watch for. If the rotating content has buttons or links inside it, a shuffle can yank focus somewhere unexpected. Keep the shuffle control outside the rotating area, and skip auto-rotation entirely when there's anything interactive in the pool.

## Surprise Me

Point a few of them at the same button. Our pen builds a character: one `<wa-random-content>` picks a class, one picks what they're carrying, one picks a quirk. Six options each. That's 216 characters from eighteen lines of copy, and every line was written by a person.

That's the part we like. The pool is small enough to write and edit by hand, and the output is big enough that nobody sees the bottom of it. `mode="unique"` on each one means you won't get the same Necromancer twice in a row.

See the Pen [Web Awesome's Random Content: Surprise Me](https://codepen.io/editor/team/webawesome/pen/019fd42c-6b7b-71c7-b7a4-1caa52d42aed) by Web Awesome ([@webawesome](https://codepen.io/team/webawesome)) on [CodePen](https://codepen.io).

## Start With One

`<wa-random-content>` ships with Web Awesome Core. Pick one spot. A greeting is the easiest, and nobody will complain if it's bad.

[View Random Content Docs](https://webawesome.com/docs/components/random-content/)
