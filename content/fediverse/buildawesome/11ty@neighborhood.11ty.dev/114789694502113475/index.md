---
title: July 3, 2025 at 2:08:54 PM UTC
authors:
  - name: Build Awesome (11ty)
    url: https://neighborhood.11ty.dev/@11ty
date: 2025-07-03T14:08:54.959Z
metadata:
  slug: '114789694502113475'
  uuid: 11ty/import::rss::https://neighborhood.11ty.dev/@11ty/114789694502113475
  type: fediverse
  url: https://neighborhood.11ty.dev/@11ty/114789694502113475
  importHash: 1e1f8f57dd4b77f5
---
import.meta.resolve can make it easier to passthrough copy assets from node\_modules.

Future improvements: [https://github.com/11ty/eleventy/issues/3885](https://github.com/11ty/eleventy/issues/3885)

![import { pathToFileURL } from "node:url"; eleventyConfig.addPassthroughCopy({ \[pathToFileURL(import.meta.resolve("@11ty/logo/assets/logo-bg.svg"))\]: "img/logo-github.svg", // … });](79e85912af4c2327-vTL93vjhCjo3.png)
