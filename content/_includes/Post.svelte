<script>
	import { getContext } from "svelte";
	import { getComments, getCounts } from "./replies.js";
	import { getPostProduct, isProductName } from "./sources.js";

	let { post, group, indexBody = false, postContent, showAudio = false } = $props();
	const { collections } = getContext("data");
	const { readableDate, resolveAssets, getReplyParent, getAvatarUrl, renderAuthors } = getContext("functions");

	const sourceIcons = {
		bluesky: "fa-brands fa-bluesky",
		fediverse: "fa-brands fa-mastodon",
		github: "fa-brands fa-github",
		npm: "fa-brands fa-npm",
		youtube: "fa-brands fa-youtube",
		letterboxd: "fa-brands fa-letterboxd",
		blog: "fa-regular fa-newspaper",
		podcast: "fa-solid fa-podcast",
		hackernews: "fa-brands fa-hacker-news",
	};
	const iconOnlySources = new Set(["bluesky", "fediverse", "npm", "youtube", "hackernews"]);
	const countLabels = [
		{ key: "likes", label: "like", icon: "fa-regular fa-heart" },
		{ key: "reposts", label: "repost", icon: "fa-solid fa-retweet" },
		{ key: "quotes", label: "quote", icon: "fa-solid fa-quote-left" },
		{ key: "points", label: "point", icon: "fa-solid fa-arrow-up" },
		{ key: "comments", label: "comment", icon: "fa-regular fa-comments" },
		{ key: "downloads", label: "download", icon: "fa-solid fa-download" },
	];

	// Posts without content (e.g. npm releases) show their description instead
	let html = $derived(resolveAssets(postContent || post.content, post));
	// GitHub and npm titles link to the repository or release
	let repoUrl = $derived(["github", "npm"].includes(post.data.metadata.type) ? post.data.metadata.url : undefined);
	let replyParent = $derived(group.posts.map(p => getReplyParent(collections.all, p.data.metadata.url)).find(Boolean));
	// npm downloads are for the whole package in the past year
	let counts = $derived({ ...getCounts(group.posts), downloads: post.data.metadata.type === "npm" ? post.data.counts?.downloads : 0 });
	// Source of the other half of a cross-post
	let crosspostType = $derived(group.posts.map(p => p.data.metadata.type).find(type => type !== post.data.metadata.type));
	let authorIcon = $derived(getPostProduct(post));
	let shownAuthors = $derived((post.data.authors || []).filter(author => !isProductName(author, authorIcon)));
	let productAuthor = $derived(post.data.authors?.find(author => isProductName(author, authorIcon)));
	let avatarUrl = $derived(getAvatarUrl(collections.all, shownAuthors[0]?.url));
	let replyCount = $derived(getComments(group.posts).length);
	// Podcast episodes without an item link use their audio enclosure as the URL
	let audioUrl = $derived(showAudio && /\.(mp3|m4a|aac|oga|ogg|opus|wav)$/i.test(URL.parse(post.data.metadata.url)?.pathname) ? post.data.metadata.url : undefined);
	// Blog posts link to their Open Graph image instead of showing the full post, except short changelog entries
	let openGraphImage = $derived(post.data.metadata.type === "blog" && !post.inputPath.includes("/fontawesome-changelog/") ? `https://v1.opengraph.11ty.dev/${encodeURIComponent(post.data.metadata.url)}/medium/` : undefined);

	function plural(count, singular, pluralForm = `${singular}s`) {
		return `${count.toLocaleString("en-US")} ${count === 1 ? singular : pluralForm}`;
	}
</script>
<article class={["post", `post--${post.data.metadata.type}`, { "post--crosspost": crosspostType }]} data-npm-package={post.data.metadata.type === "npm" ? post.data.metadata.name : null} data-npm-version={post.data.metadata.type === "npm" ? post.data.metadata.version : null} style:--crosspost-accent={crosspostType ? `var(--${crosspostType})` : null}>
	<div class="post-meta">
		{#each group.posts.filter(p => !iconOnlySources.has(p.data.metadata.type)) as p}<a href={p.url} class={["post-source", `post-source--${p.data.metadata.type}`]}>{p.data.sourceLabel || p.data.sectionTitle}</a>{/each}
		{#if replyParent}<span>In reply to <a href={replyParent.url}>{replyParent.data.sectionTitle} post</a></span>{/if}
	</div>
	{#if post.data.showTitle}<h2 class="post-title">{#if repoUrl}<a href={repoUrl}><i class={sourceIcons[post.data.metadata.type]}></i>{post.data.title}</a>{:else}<a href={post.url}>{post.data.title}</a>{/if}</h2>{/if}
	{#if post.data.metadata.media?.featuredImage}{#if post.data.metadata.type === "youtube" && post.data.metadata.url}<a href={post.data.metadata.url} class="post-image-link"><img src={post.data.metadata.media.featuredImage} class="post-image" alt="Watch {post.data.title} on YouTube" loading="lazy" decoding="async"></a>{:else}<img src={post.data.metadata.media.featuredImage} class="post-image" alt="" loading="lazy" decoding="async">{/if}{/if}
	{#if audioUrl}<audio controls preload="metadata" src={audioUrl} class="post-audio"></audio>{/if}
	<div class="post-content" data-pagefind-body={indexBody ? "" : null}>{#if openGraphImage}<a href={post.data.metadata.url}><img src={openGraphImage} class="post-image" width="1200" height="630" alt={post.data.title} loading="lazy" decoding="async"></a>{:else if html?.trim() || !post.data.description}{@html html}{:else}<p>{post.data.description}</p>{/if}</div>
	<div class="post-footer">
		<span class="post-author">
			{#if authorIcon}{#if productAuthor?.url}<a href={productAuthor.url} class={["author-icon", `author-icon--${authorIcon.key}`]} title={authorIcon.label}><i class={authorIcon.icon}></i><span class="visually-hidden">{authorIcon.label}</span></a>{:else}<span class={["author-icon", `author-icon--${authorIcon.key}`]} title={authorIcon.label}><i class={authorIcon.icon}></i><span class="visually-hidden">{authorIcon.label}</span></span>{/if}{/if}
			{#if avatarUrl}<img src={avatarUrl} class="post-avatar" width="24" height="24" alt="" loading="lazy" decoding="async">{/if}
			{#if shownAuthors.length}<span>{@html renderAuthors(shownAuthors)}</span>{/if}
			<a href={post.url} class="post-date"><time datetime={post.date.toISOString()} title={readableDate(post.date)}>{post.date.toLocaleString("en-US", { dateStyle: "medium", timeZone: "UTC" })}</time></a>
		</span>
		<span class="post-links">
			<span class="post-counts">
				{#if replyCount}<a href="{post.url}#replies-title" title={plural(replyCount, "reply", "replies")}><i class="fa-regular fa-comment"></i><span aria-hidden="true">{replyCount}</span><span class="visually-hidden">{plural(replyCount, "reply", "replies")}</span></a>{/if}
				{#each countLabels as { key, label, icon }}{@const countIcon = key === "likes" && post.data.metadata.type === "youtube" ? "fa-regular fa-thumbs-up" : icon}{#if counts[key] && !(key === "comments" && replyCount)}<span title={plural(counts[key], label)}><i class={countIcon}></i><span aria-hidden="true">{counts[key].toLocaleString("en-US")}</span><span class="visually-hidden">{plural(counts[key], label)}</span></span>{/if}{/each}
			</span>
			{#each group.posts as p}<a href={p.data.metadata.url} class="post-original" style:--accent="var(--{p.data.metadata.type})" title="View on {p.data.sectionTitle}"><i class={sourceIcons[p.data.metadata.type]}></i><span class="visually-hidden">Original on {p.data.sectionTitle}</span></a>{/each}
		</span>
	</div>
</article>
<style>
:global {
	.post-audio { display: block; width: 100%; margin-block: 3rem; }
	.post-counts { display: inline-flex; flex-wrap: wrap; gap: .25rem .75rem; }
	.post-links > a { display: inline-flex; align-items: center; gap: .35em; }
	.post-links { margin-left: auto; justify-content: flex-end; }
	.post-original svg { color: var(--accent); font-size: 1.35em; }
	.post-counts svg, .post-links svg { height: 1em; overflow: visible; vertical-align: -.125em; }
	.post-counts svg { margin-right: .35em; }
	symbol { overflow: visible; }
	.post-author { display: inline-flex; align-items: center; gap: .5rem; }
	.post-avatar { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; background: var(--border); }
	.author-icon { display: inline-flex; flex-shrink: 0; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 13px; }
	.author-icon svg { height: 1em; }
	.post-footer a.author-icon { color: #fff; }
	.author-product { color: var(--accent); font-weight: 600; }
	/* Beats the inherited link colors in post footers and reply headers */
	:is(.post-footer, .reply-meta) a.author-product[href] { color: var(--accent); text-decoration: none; }
	.author-icon--font { --accent: #548cd8; }
	.author-icon--web { --accent: #f36945; }
	.author-icon--build { --accent: #00a776; }
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}
}
</style>
