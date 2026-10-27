---
title: Collaborative Editing as Progressive Enhancement
authors:
  - name: Zach Leatherman
date: 2026-04-21T05:00:00.000Z
metadata:
  uuid: 11ty/import::atom::https://www.11ty.dev/blog/collaborative-editing/
  type: atom
  url: https://www.11ty.dev/blog/collaborative-editing/
  importHash: 1fd45e95e52acd7b
---
**TL;DR** After a [whoopsie-daisy false-start on our initial Kickstarter campaign](https://blog.fontawesome.com/pausing-kickstarter/), we’re ramping up again to launch [Kickstarter Final\_FINAL\_v2 on **April 28, 2026**](https://www.kickstarter.com/projects/fontawesome/build-awesome-pro?ref=43ttgb).

[We’re improving how developers collaborate on the Open Web. Get notified on April 28th!](https://www.kickstarter.com/projects/fontawesome/build-awesome-pro?ref=43ttgb)

We’ve noticed a few things:

1.  **Static sites are still the most resilient, robust, long-lasting, and secure architecture when building for the web.** Using a static architecture to reduce your attack surface is an investment in your peace of mind. You shouldn’t have to maintain security hypervigilance to run a web site.
2.  Developers face _too much_ infrastructure lock-in when shipping dynamic features (_especially_ in the JavaScript tooling ecosystem). Perhaps you’ve been eyeing the [per-compute pricing on your serverless bill](https://www.zachleat.com/web/serverless-cost/) as bot traffic increases over time.
3.  Adding collaborative editing and content management features to your static web site requires more configuration work than it should to get up and running.

**Build Awesome Pro** is a new web site builder that attempts to solve each of these problems. Fast by default, durable over time, with way less dependency drama. Build Awesome Pro will feature:

1.  Static output. Versioned in git. Build and deploy wherever you’d like.
2.  Bring your own project or choose from our curated list of starter templates. Have an Eleventy project? We’ll maintain full compatibility with existing Eleventy projects and the Eleventy ecosystem.
3.  No lock-in. Edit and collaborate on our infrastructure. Host anywhere (optionally with us). Eject at any time with your site as-is.

Build Awesome Pro offers the option to add **collaborative editing to your project as an infrastructure-level Progressive Enhancement**.

[Get notified (April 28th) on Kickstarter!](https://www.kickstarter.com/projects/fontawesome/build-awesome-pro?ref=43ttgb)

## One Possible Editable API

Consider the following hypothetical Hello World example that opts-in a specific data property for editing in a Markdown file:

```md
---

title: World
---

# Hello, {{ title | editable }}
```

<details><summary>Expand to see what the API might look like in a JavaScript content file.</summary><pre class="language-js" tabindex="0"><code class="language-js">
<span class="token keyword">import</span> <span class="token punctuation">{</span> editable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@awesome.me/build-pro"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h1&gt;Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">editable</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1&gt;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></details>

When using Build Awesome Pro (and with the proper permissions for editing), the `title` data property will render as an editable value on the page. Edits can be made directly in-browser and are applied in the data cascade to apply _project-wide_.

# Hello, `World`

Build Awesome Pro will expose controls in your project to make your content editable inline (in this example, a String literal). And when folks edit the above template, their edits will persist directly via commits in version control in the original data cascade location:

```diff-md
---
-title: World
+title: Moon
---
# Hello, {{ title | editable }}
```

This will render the template’s new `title` property in the data cascade (wherever used throughout your project), in this case something like:

# Hello, `Moon`

At some future time, if you decide that editing is no longer necessary for your project, your Build Awesome project will still build using the open source engine for hosting wherever you’d like, without any changes! **No lock-in, no shenanigans.**

_Check out this [lower-level (developer-specific) example of full template editing and build-in-a-browser on our home page.](https://www.11ty.dev/#try-eleventy-in-your-browser)_

## Get notified — April 28!

Build Awesome Pro is a better way to build and collaborate on websites! Convenient for developers and easy-to-use for the whole team: fast, flexible, and built to last.

[Thank you to the 838 backers of Build Awesome Pro!](https://www.kickstarter.com/projects/fontawesome/build-awesome-pro?ref=43ttgb)

_**Stay tuned: Build Awesome (11ty) v4 is coming** with that same great 11ty flavor you’re used to: more features with fewer dependencies and an ever-improving focus on build performance!_

## Full Coverage

-   `2026 April` [**Build Awesome Pro Kickstarter**](https://www.kickstarter.com/projects/fontawesome/build-awesome-pro?ref=43ttgb)
-   `2026 May` [**Blog Awesome**: Introducing: Build Awesome](https://blog.fontawesome.com/introducing-build-awesome-static-site-platform-kickstarter/)
-   `2026 May` [**Blog Awesome**: New Sponsorship Tiers for the Build Awesome Kickstarter](https://blog.fontawesome.com/new-build-awesome-sponsorship-tiers/)
-   `2026 April` [Collaborative Editing as Progressive Enhancement](https://www.11ty.dev/blog/collaborative-editing/)
-   `2026 March` [Eleventy is now Build Awesome](https://www.11ty.dev/blog/build-awesome/)
-   `2026 March` [**Podcast Awesome**: Eleventy Is Rebranding to Build Awesome: What Changes (and What Doesn’t)](https://www.podcastawesome.com/2092855/episodes/18785266-eleventy-is-rebranding-to-build-awesome-what-changes-and-what-doesn-t) <code class="elv-tag"><svg class="fa11ty-icon" viewBox="0 0 448 512"><use href="#fas-fa-headphones" xlink:href="#fas-fa-headphones"></use></svg>24m</code>
-   `2026 March` [**Eleventy Meetup** (on YouTube): AMA about Build Awesome, an Open Town Hall](https://www.youtube.com/watch?v=lA-wD89m6jM) <code class="elv-tag"><svg class="fa11ty-icon" viewBox="0 0 576 512"><use href="#fas-fa-video" xlink:href="#fas-fa-video"></use></svg>44m</code>
