<script module>
	export const data = {
		layout: "layout.svelte",
		title: "Popular posts",
		eleventyExcludeFromCollections: true,
		permalink: "/popular/",
	};
</script>
<script>
	import { getContext } from "svelte";
	import Post from "./_includes/Post.svelte";

	let { collections } = $props();
	const { getPopularGroups } = getContext("functions");
</script>
<h1 class="page-title">Popular posts</h1>
<p class="summary">Top 30 by likes, reposts, quotes, points, and replies combined.</p>
<ol class="feed">
	{#each getPopularGroups(collections.postGroups, 30) as group}<li><Post post={group.primary} {group} /></li>{/each}
</ol>
