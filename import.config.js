// Subfolders per project avoid name collisions between sources of the same type
export default [
	// Font Awesome
	{ type: "bluesky", target: "@fontawesome.com", output: "content/bluesky/fontawesome" },
	{ type: "fediverse", target: "fontawesome@mastodon.social", output: "content/fediverse/fontawesome" },
	// { type: "github", target: "FortAwesome", output: "content/github/fontawesome" },
	{ type: "npm", target: "@fortawesome", output: "content/npm/fontawesome" },
	{ type: "youtubeuser", target: "UCBwTrjBFAoKfSx98XygLZ_g", output: "content/youtube/fontawesome" },
	{ type: "atom", target: "https://blog.fontawesome.com/feed/feed.xml", output: "content/blog/fontawesome" },
	{ type: "atom", target: "https://fontawesome.com/changelog/feed", output: "content/blog/fontawesome-changelog" },
	{ type: "rss", target: { url: "https://feeds.buzzsprout.com/2092855.rss", assets: ["image"] }, output: "content/podcast/fontawesome" },
	{ type: "hackernews", target: "https://fontawesome.com", output: "content/hackernews/fontawesome" },
	{ type: "hackernews", target: "https://blog.fontawesome.com", output: "content/hackernews/fontawesome-blog" },
	{ type: "hackernews", target: "https://blogfontawesome.wpcomstaging.com", output: "content/hackernews/fontawesome-blog" },

	// Web Awesome
	{ type: "bluesky", target: "@webawesome.com", output: "content/bluesky/webawesome" },
	{ type: "fediverse", target: "webawesome@mastodon.social", output: "content/fediverse/webawesome" },
	// { type: "github", target: "shoelace-style", output: "content/github/webawesome" },
	{ type: "npm", target: "@awesome.me", output: "content/npm/webawesome" },
	{ type: "youtubeuser", target: "UC-8YUKSbHcadiezQTJs38cA", output: "content/youtube/webawesome" },
	{ type: "hackernews", target: "https://webawesome.com", output: "content/hackernews/webawesome" },

	// Build Awesome
	{ type: "bluesky", target: "@11ty.dev", output: "content/bluesky/buildawesome" },
	{ type: "fediverse", target: "11ty@neighborhood.11ty.dev", output: "content/fediverse/buildawesome" },
	// { type: "github", target: "11ty", output: "content/github/buildawesome" },
	{ type: "npm", target: "@11ty", output: "content/npm/buildawesome" },
	{ type: "youtubeuser", target: "UCskGTioqrMBcw8pd14_334A", output: "content/youtube/buildawesome" },
	{ type: "atom", target: "https://www.11ty.dev/blog/feed.xml", output: "content/blog/buildawesome" },
	{ type: "hackernews", target: "https://www.11ty.dev", output: "content/hackernews/buildawesome" },
];
