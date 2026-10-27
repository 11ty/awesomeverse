---
title: 'Good News: Your AI Assistant Already Knows Your Icon Kit'
authors:
  - name: Font Awesome
date: 2026-09-11T19:48:30.000Z
metadata:
  uuid: 11ty/import::atom::https://blog.fontawesome.com/font-awesome-ai-agent-tools/
  type: atom
  url: https://blog.fontawesome.com/font-awesome-ai-agent-tools/
  importHash: 1dab3ec9b80ae5d0
---
> I know…

Your coding agent can spin up a component, write the copy, and wire up your API call without breaking a sweat. But ask it to drop in the right icon, and things get janky fast. Maybe it guesses at a class name, or suggests an icon that’s not even in your Kit. Or, maybe it just taps out and tells you to go find one yourself. (Thanks?) Now there’s no more guessing. No more hallucinating.

That’s the one place this kind of workflow used to break. But no more!

![4 Font Awesome icons on a navy background: icon cluster, robot head, command line, briefcase](EYai9oDndK-1440-r0MGeWePqCYn.png)

Font Awesome now has real, authenticated tools built for agents. Not just a search box they can scrape. No more scraping. Whatever you’re using, from Claude Code and Cursor to Copilot, Windsurf, or (if you’re feeling nostalgic) Clippy, your agent can ask Font Awesome directly (we gave it a line to call us on) get an answer based on your actual account instead of a best guess from training data, and act on it. It’s not making new icons. It’s fetching the ones you already have access to, correctly, the first time. (Thanks, Clippy. You’re the best.)

Here’s how it’s built, from the ground up, and what each layer means for you.

## It Starts With the API

Font Awesome’s GraphQL API now provides a lot more about your icons and your account than it used to. Your agent can finally know what you know about what icons your account has access to, and which icons are available in each Kit’s subset. And because GraphQL APIs are self-documenting, so you can just point an agent at api.fontawesome.com and it works out on its own how to pull icon families, styles, and releases: whatever it needs, no hand-crafted query docs required.

A lot of metadata about Font Awesome icons, like which icons are available in which styles for any given release, are publicly available from the API—no login required.

Anything tied to your account (your Kits, your custom icons) needs an access token. That’s where the CLI comes in.

**Docs:** [GraphQL API](https://docs.fontawesome.com/apis/graphql/)

## The fa CLI Wraps It All Up

The fa CLI is a convenient wrapper around that API, providing subcommands for common queries. It also handles authorization for any queries that access your Kits. The CLI is handy all by itself: every command returns clean JSON, which makes it a natural fit for build scripts. When used with your AI agent, it levels up the agent’s ability to work with _your_ icons from _your_ Kits within your projects. 

```
fa login
```

Once you’re logged in, a few things come free:

### Kit-aware search

Scope a search to a Kit token, and you only get icons that are actually in that Kit’s subset, custom icons included.

```
fa search --kit-token 8812e4e21d --query 'coffee'
```

You can search your Kit’s custom icons too:

```
fa search --kit-token 8812e4e21d --query 'coffee' --custom
```

### SVG data and self-hosting

Pull real SVG data for official or custom icons, or download and unzip a full Kit for self-hosting. No manual download, no hunting for the right zip file.

```
fa kits --kit-token 8812e4e21d --download web --unzip --output kit
```

Want to hand-craft your own GraphQL query instead of using a built-in command? The CLI can run it for you, using your logged-in credentials, stored in your OS keychain, on supported platforms. So your agent can access your account, without handing it a plaintext token.

**Docs:** [fa CLI](https://docs.fontawesome.com/web/use-with/fa-cli)

### Agent Tools Pick Up From There

Font Awesome’s official Skills (`/setup-fa`, `/suggest-icon`, `/add-icon`, and `/fa-help`) install straight into your coding agent and work across Claude Code, Cursor, GitHub Copilot, Windsurf, and more. Four commands. Zero context-switching.

**Install them:**

```html
npx skills add FortAwesome/fontawesome-agent-tools
```

Then just ask. No docs tab, no copy-pasting a class name from a search result:

```html
/add-icon add a shopping cart icon in the Regular style to the checkout button
in src/components/Header.tsx
```

Here’s the peanut-butter-and-jelly part: Agent Tools automatically look for fa in your PATH. If it’s there, and you’re logged in, your agent instantly inherits everything the CLI can do: Kit-subset search, your custom icons, self-hosting setup, all of it. The two are built separately, but designed to work together.

**Docs:** [AI Agent Tools](https://docs.fontawesome.com/web/use-with/ai-agent-tools)

## Try It

![4 Font Awesome icons on a navy background: download, screwdriver  wrench, running to portal, question comment](ksmuI_Qbd3-1440-3GbPsKpvHDND.png)

Install the CLI. Install the agent tools. Log in once. Then ask your agent for an icon. It already knows where to look.

[Get Your Agent Kit-Ready](https://docs.fontawesome.com/web/use-with/ai-agent-tools)
