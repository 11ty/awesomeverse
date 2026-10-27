---
title: 7.0.1
authors:
  - name: Font Awesome
date: 2025-09-04T12:00:00.000Z
metadata:
  uuid: 11ty/import::atom::https://fontawesome.com/changelog#v7-0-1
  type: atom
  url: https://fontawesome.com/changelog#v7-0-1
  importHash: ece574ae1da4f356
---
## Added

-   Introduces CSS custom property `--fa-width` for standardized width management in stacked icons.
-   We added some new icons, including:
    -   a juicy new `lychee` icon,
    -   a fancy new `envelope-ribbon` icon,
    -   a neighborly new `mailbox-open-empty` icon,
    -   a freshly delivered `mailbox-open-letter` icon,
    -   a chunky new `tank-recovery` icon,
    -   a zappy new `transducer` icon,
    -   and a nosy new `box-magnifying-glass` icon.

## Fixed

-   Fixes a Regular Expression that caused errors in older versions of Safari when using SVG JavaScript pseudo-elements.
-   Fixes content alternative (when using the `content: var(--fa)` CSS attribute) with Safari 14.1 specifically (and maybe others) by adding `@supports` to target browsers that support it.
-   Fixes a Windows font family grouping problem when using OTF Desktop files.
-   Fixes style-only (no family specified) icon CSS classes not rendering icons when using `dom.watch()`.
-   Fixed a number of icon-related issues:
    -   Fixed issue with where our `beta` and `rectangle-high-dynamic-range` icons were missing some Duotone fills.
    -   Fixed a missing cutout in the Solid styles of our `screwdriver-wrench` icons.
    -   Our new `stadium` icon in Sharp Solid was showing the wrong style.
    -   Our `pencil`, `pencil-line`, and `motorcycle` icons had the wrong fills in some Duotone styles.
    -   The `cheese-swiss` icon had a few too many ~~holes~~ glitches.
    -   Fixed our Duotone `mango` icon.
    -   Fixed issues with our `box-arrow-down-magnifying-glass` and `box-arrow-down-arrow-up` icons.
    -   Removed extra bars in our `signal-weak` icon.
    -   Fixed a missing fill in the Regular style of our `dot-circle` icon.
    -   Fixed issues with `envelope-open-dollar`, `filter-circle-dollar`, and `filter-circle-xmark`.

## Changed

-   Solved the case of the shriking checkmarks and adjusted the sizing and legibility of all of our icons that contain a `check`.
-   Took a similar approach and tweaked the design of our `exclamation` icons.
-   Updated the design of our `stretcher` icon to look more like a stretcher.
-   Adjusted the design of our `peruvian-soles` icons to remove the outdated dot.
-   Remapped the design of our `oil-temperature` icon to a new `water-temperature` and redesigned the original.
