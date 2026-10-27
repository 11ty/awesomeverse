---
title: 'WA 3.12: Figma Design Kit 3.0, Dropdown Links, Plus Tooltip Fixes'
authors:
  - name: Font Awesome
date: 2026-08-21T23:03:27.000Z
metadata:
  uuid: 11ty/import::atom::https://blog.fontawesome.com/web-awesome-3-12/
  type: atom
  url: https://blog.fontawesome.com/web-awesome-3-12/
  importHash: b36074a8fdc4ec11
---
🎨 **Figma Design Kit 3.0**

The Official Figma Design Kit has hit its 3.0 version. We’ve added ten new components, closing the gap between Figma and the library:

-   Accordion
-   Checkbox Group
-   Date Input
-   Date Picker
-   File Input
-   Known Date
-   OTP Input
-   Time Input
-   Toast
-   Video

Additional variables, slots, and sizing options have been added as well. The full list of updates can be found [here](https://webawesome.com/docs/resources/figma#version-history).

🔗 **Links in \<wa-dropdown-item>**

`<wa-dropdown-item>` now accepts `href`, `target`, `rel`, and `download`, which gives it the ability to act like a real link. `⌘/Ctrl` will still open the link in a new tab (except in Safari). Items with a submenu ignore `href`, there’s also a new `link` custom state.

💬 **Tooltip Fixes**

`<wa-tooltip>` now respects a canceled `wa-hide` event and stays open. Tooltips with trigger=”email” will no longer close on Escape.

🧰 **There’s Always More**

There’s also a bunch fixes, namely focus ring on `<wa-switch>`, `<wa-select>`‘s clear button click target, `<wa-input>` password toggle, `<wa-dropdown>`‘s `aria-posinset/aria-setsize`, `<wa-data-grid>` filtering and layout and more.

The full list of fixes can be found on the [changelog](https://webawesome.com/docs/resources/changelog).[](https://app.basecamp.com/4301850/buckets/33321158/boosts/new?boost%5Bboostable_gid%5D=Z2lkOi8vYmMzL1JlY29yZGluZy8xMDIyNTMzMjMzMQ)
