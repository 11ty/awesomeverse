---
title: 7.0.0
authors:
  - name: Font Awesome
date: 2025-07-22T12:00:00.000Z
metadata:
  uuid: 11ty/import::atom::https://fontawesome.com/changelog#v7-0-0
  type: atom
  url: https://fontawesome.com/changelog#v7-0-0
  importHash: 743987967eaf0fd5
---
## Added

-   ##### **Introducing Font Awesome 7!**
    
    -   The next version of the internet's favorite icon library and toolkit has arrived. It includes more icons, improved performance, and new ways to make your designs look amazing.
    -   Redesigned core icons. We've refined the majority of our core icons with more consistent key shapes.
    -   300+ new icons. This first release of Font Awesome 7 delivers a large batch of fresh icons, with more coming soon.
-   ##### **New Pro+ icon packs!**
    
    -   Each pack offers a curated set of the 200 most commonly used icons for app and website design. Available with a Pro+ subscription.
    -   Now available: Chisel, Etch, Jelly, Notdog, Slab, Thumbprint, and Whiteboard.
    -   _Additional icon packs are on the way._
-   ##### **Icon Wizard improvements!**
    
    -   A wizard is never late, nor is he early, he arrives precisely when he means to.
    -   Now includes over 40 modifiers.
    -   Option to place modifiers in the bottom-right or bottom-left corner.
    -   Turn any modified icon into a Duotone icon.

## Changed

-   Design improvements to the majority of our core icons.
-   Massive improvements to SVG/JS pseudo-elements performance.
-   Significantly smaller webfonts due to higher Brotli compression, a switch to CFF and various other optimizations.
-   Smaller CSS files by using custom properties and optimizing the files for better compression.
-   Upgraded to Dart Sass with modern SCSS and improved CSS properties.
-   Improved naming and consistency of CSS custom properties.
-   Use of CSS Logical Properties to support RTL languages and diverse writing modes.
-   Icon canvases now render at a consistent fixed width. To use the default rendering from v6, add our new `fa-width-auto` class.
-   We've added mapping support for renamed CSS custom properties and SCSS variables to help existing projects using FA5 or FA6 work seamlessly with FA7.
-   We have changed how our individual SVG files are formatted in FA7:
    -   No longer include a global stylesheet
    -   `path` elements no longer have classes on them
    -   They default to `fill=currentColor`
    -   Duotone path color and opacity can be set using `--fa-primary-opacity`, `--fa-primary-color`, etc.
-   We removed some redundant icon designs, and remapped them as `aliases`:
    -   `user-large[-slash]` → `user[-slash]`
    -   `hexagon-vertical-nft-slanted` → `hexagon-vertical-nft`
    -   `headphones-simple` → `headphones`
    -   `toilet-paper-blank[-under]` → `toilet-paper[-under]`
    -   `vector-[shape]` → `draw-[shape]`
    -   `film-simple` → `film`
    -   `grid-horizontal` → `grip`
    -   `handshake-simple[-slash]` → `handshake[-slash]`
-   If you have custom CSS that selects the `.fa-primary` or `.fa-secondary` classes on SVG path elements, they'll no longer be present in FA7. Use the CSS custom properties to set opacity and color.
-   **Changed SVG stringification on the Kits CDN.** Most importantly, duotone icons must now be parsed based on the presence of an `opacity` attribute with a value less than `1`, rather than relying on earlier structural patterns.
-   **We are no longer including legacy `.ttf` or `.woff` webfonts.** If your project depends on those files, please update to use the `.woff2` format, which is now the standard for webfont delivery.
-   **We removed the `sr-only` classes**, as Font Awesome's built-in accessibility doesn't use this approach anymore. If you were using them in your code, make sure you add `sr-only` styles to your own stylesheet.
-   **We removed the `fa-fw` class**, as it is no longer needed with the new default fixed-width rendering. If you were using it, you can now use the new `fa-width-auto` class to revert to the previous behavior.
-   **We have removed support for Less CSS in FA7.** If your project uses Less, we recommend migrating to Sass, using our precompiled CSS, or continuing with Font Awesome 6.
-   **We have dropped support for our official Python Django plugin.** If you were using it, you can either continue with Font Awesome 6 or switch to a self-hosted Kit or our standard CSS.
-   **We have ended support for the official Ruby on Rails Gem.** Projects using it can continue with Font Awesome 6 or migrate to using a Web Fonts-based Kit or a self-hosted Kit.
-   **Our official Vue component now supports Vue 3+ only.** Compatibility with Vue 2 or earlier is no longer guaranteed in FA7.
-   **The React component no longer supports dynamic imports.** If you were importing icons dynamically, you'll need to update your syntax to use static imports for compatibility with FA7.

## Fixed

-   Improved support for screen readers and assistive technologies.
-   Updated accessibility documentation and guidance to align with current best practices.
-   Downloaded SVGs now default to a square viewbox, with an option to download a trimmed version.
-   Since SVG icons now get a `currentColor` fill, icons that were previously black might now get a different color. For example, an SVG inside a `div` with blue text will now become blue instead of the default path color of black.
-   **We dropped the `--fa--fa` for Duotone** which we briefly introduced for FA6. You can now trigger the second layer of a Duotone icon by ligatures (just repeat the Unicode value) or enabling a stylistic set (`font-feature-settings: "ss01"`).
