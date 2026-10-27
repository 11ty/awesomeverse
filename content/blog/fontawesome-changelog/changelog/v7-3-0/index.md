---
title: 7.3.0
authors:
  - name: Font Awesome
date: 2026-06-25T12:00:00.000Z
metadata:
  uuid: 11ty/import::atom::https://fontawesome.com/changelog#v7-3-0
  type: atom
  url: https://fontawesome.com/changelog#v7-3-0
  importHash: 9d6ea085cb5a0dcb
---
## Added

-   ##### **Three new Pro+ icon packs!**
    
    -   [**Pixel**](https://fontawesome.com/icons/packs/pixel): It's hip to be square. Before high density displays, the mighty pixel was king. FA Pixel takes you back to the halcyon days of yore, when quarters held your place at the arcade and computers only had 128kb of memory. If you're prepping your next plumbing adventure or space invasion, Pixel is ready to byte.
    -   [**Mosaic**](https://fontawesome.com/icons/packs/mosaic): All the pieces are coming together. Icons are little art pieces constructed from many elements, and FA Mosaic is no different. Master craftsman Josh Williams breaks the mold with this pack, blending solid forms, swoopy curves, and fun little sprinkles he lovingly calls "quirks."
    -   [**Vellum**](https://fontawesome.com/icons/packs/vellum): Layers of depth. Here at Font Awesome, we like our icons like we like our jokes: layered. Guest designer Brian Brasher guides you amongst these overlapped slabs of significance for a pack with real dimension.
    -   _Each pack is available with a Pro+ subscription._
-   ##### **New Slab styles!**
    
    -   Our sturdy, blocky Slab pack gets two new family styles: [**Slab Duo**](https://fontawesome.com/search?f=slab-duo) and [**Slab Press Duo**](https://fontawesome.com/search?f=slab-press-duo). Add some depth and a second layer of color to icons that feel bold and ready for action.
-   ##### **New animations!**
    
    -   Inspired by Disney's 12 Principles of Animation, we added six new animation utilities so your icons don't just move, they have personality: `fa-buzz`, `fa-wag`, `fa-float`, `fa-swing`, `fa-spin-snap` (with `fa-spin-snap-4` and `fa-spin-snap-8` variants), and `fa-jello`.
    -   Each new animation follows our existing custom property naming convention and works out of the box without setting any properties.
    -   All animations continue to respect the `prefers-reduced-motion` setting.
    -   See them all in action in the [animation documentation](https://fontawesome.com/docs/web/style/animate).
-   ##### **New canvas sizing classes!**
    
    -   Two new opt-in utility classes let you drop any icon onto a predictable, square canvas, perfect for icon-only buttons and design-system layouts.
    -   `fa-canvas-square` adds vertical padding so an icon fills a square canvas (20×20 at 1em).
    -   `fa-canvas-roomy` adds a bit more padding for layouts that want extra breathing room (24×24 at 1em).
    -   Both use `em` units, so the canvas scales right along with your icon size.
-   ##### **New Icons!**
    
    A few fresh additions to the family: [`envelope-heart`](https://fontawesome.com/icons/classic/solid/envelope-heart), [`file-md`](https://fontawesome.com/icons/classic/solid/file-md), [`file-txt`](https://fontawesome.com/icons/classic/solid/file-txt), and [`meerkat`](https://fontawesome.com/icons/classic/solid/meerkat).
-   ##### **New Brands!**
    
    Added a batch of the most-requested brand icons: [`a11y-project`](https://fontawesome.com/icons/classic/solid/a11y-project), [`build-awesome`](https://fontawesome.com/icons/classic/solid/build-awesome), [`square-build-awesome-stroke`](https://fontawesome.com/icons/classic/solid/square-build-awesome-stroke), [`codeberg`](https://fontawesome.com/icons/classic/solid/codeberg), [`copilot`](https://fontawesome.com/icons/classic/solid/copilot), [`devpost`](https://fontawesome.com/icons/classic/solid/devpost), [`dolibarr`](https://fontawesome.com/icons/classic/solid/dolibarr), [`internet-archive`](https://fontawesome.com/icons/classic/solid/internet-archive), [`lets-encrypt`](https://fontawesome.com/icons/classic/solid/lets-encrypt), [`matrix`](https://fontawesome.com/icons/classic/solid/matrix), [`mattermost`](https://fontawesome.com/icons/classic/solid/mattermost), [`nextcloud`](https://fontawesome.com/icons/classic/solid/nextcloud), [`obs-studio`](https://fontawesome.com/icons/classic/solid/obs-studio), [`roblox-creator-studio`](https://fontawesome.com/icons/classic/solid/roblox-creator-studio), [`ror`](https://fontawesome.com/icons/classic/solid/ror), [`storybook`](https://fontawesome.com/icons/classic/solid/storybook), [`substack`](https://fontawesome.com/icons/classic/solid/substack), [`tesla`](https://fontawesome.com/icons/classic/solid/tesla), [`visual-studio`](https://fontawesome.com/icons/classic/solid/visual-studio), [`xrp`](https://fontawesome.com/icons/classic/solid/xrp), [`xrpl`](https://fontawesome.com/icons/classic/solid/xrpl), and [`youtube-shorts`](https://fontawesome.com/icons/classic/solid/youtube-shorts).

## Changed

-   **Better motion for existing animations.** We refined the keyframes for six of our existing animation utilities for motion that feels more alive: `fa-bounce`, `fa-beat`, `fa-beat-fade`, `fa-fade`, `fa-flip`, and `fa-shake`. Same class names, same custom properties, just better motion.
-   **Brand refreshes.** Updated a few brand icons to match their latest logos: [`github`](https://fontawesome.com/icons/classic/solid/github) for GitHub's 2026 brand refresh, [`android`](https://fontawesome.com/icons/classic/solid/android) to match current brand standards, and [`threads`](https://fontawesome.com/icons/classic/solid/threads) for Threads' updated logo.

## Fixed

-   The Etch [`circle-question`](https://fontawesome.com/icons/classic/solid/circle-question) icon wasn't quite right. It is now.
-   The solid and regular styles of [`fingerprint`](https://fontawesome.com/icons/classic/solid/fingerprint) were identical. They're now their own unique selves.
-   Cleaned up some inconsistencies between the solid [`box`](https://fontawesome.com/icons/classic/solid/box) icons.
-   Fixed a vertical misalignment on the solid [`battery-empty`](https://fontawesome.com/icons/classic/solid/battery-empty) icon.
-   The Duotone Thin [`game-board-simple`](https://fontawesome.com/icons/classic/solid/game-board-simple) icon had a secondary tone spilling outside the lines. We tidied it up.
-   The Duotone Light [`opossum`](https://fontawesome.com/icons/classic/solid/opossum) icon wasn't actually duotone. Our 'possum now has two tones, as nature intended.
-   The Duotone [`toolbox`](https://fontawesome.com/icons/classic/solid/toolbox) icon was showing just the line art for its fill. The fill is back where it belongs.
