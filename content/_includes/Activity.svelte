<script>
	import { getContext } from "svelte";

	let { groups, type } = $props();
	const { getActivity } = getContext("functions");

	let activity = $derived(getActivity(groups, type));
	let postCount = count => `${count.toLocaleString("en-US")} ${count === 1 ? "post" : "posts"}`;
	let monthName = (date, month) => date.toLocaleString("en-US", { month, timeZone: "UTC" });
	let monthYear = date => `${monthName(date, "long")} ${date.getUTCFullYear()}`;
	// Per-brand totals across all months, for the legend
	let sumSegments = (key, field) => activity.months.reduce((sum, { segments }) => sum + segments.find(segment => segment.key === key)[field], 0);
	let legend = $derived(activity.months[0].segments.map(({ key, label }) => ({ key, label, count: sumSegments(key, "count"), typeCount: sumSegments(key, "typeCount") })));
	// Consecutive months per year, for the year labels below the bars
	let years = $derived([...Map.groupBy(activity.months, ({ date }) => date.getUTCFullYear())].map(([year, months]) => ({ year, span: months.length })));
</script>
<figure class="activity">
	<figcaption class="activity-caption">{#if type}<span class="activity-legend-item activity-legend-item--total">Total <span class="activity-legend-count">{legend.reduce((sum, item) => sum + item.typeCount, 0).toLocaleString("en-US")}</span></span>{/if}{#each legend as { key, label, count, typeCount }}<span class={["activity-legend-item", `activity-segment--${key}`]}><span class="activity-legend"></span>{label} <span class="activity-legend-count">{(type ? typeCount : count).toLocaleString("en-US")}</span></span>{/each}</figcaption>
	<ol class="activity-months" style:--months={activity.months.length}>
		{#each activity.months as { date, count, segments }}{@const shown = type ? segments.reduce((sum, segment) => sum + segment.typeCount, 0) : count}<li class="activity-month" title="{postCount(shown)} in {monthYear(date)}">
			<span class="activity-track"><span class="activity-count" style:--level={shown / activity.max}>{shown ? shown.toLocaleString("en-US") : ""}</span><span class="activity-bar" style:height="{count / activity.max * 100}%">{#each segments as segment}{#if segment.typeCount}<span class={["activity-segment", `activity-segment--${segment.key}`]} style:flex-grow={segment.typeCount} title="{segment.label}: {postCount(segment.typeCount)} in {monthYear(date)}"></span>{/if}{/each}{#each segments as segment}{#if segment.count > segment.typeCount}<span class={["activity-segment", "activity-segment--other", `activity-segment--${segment.key}`]} style:flex-grow={segment.count - segment.typeCount} title="{segment.label}: {postCount(segment.count - segment.typeCount)} from other sources in {monthYear(date)}"></span>{/if}{/each}</span></span>
			<span class="activity-label"><span class="activity-label-full">{monthName(date, "short")}</span><span class="activity-label-short" aria-hidden="true">{monthName(date, "narrow")}</span></span>
		</li>{/each}
	</ol>
	<div class="activity-years" style:--months={activity.months.length} aria-hidden="true">{#each years as { year, span }}<span class="activity-year" style:grid-column="span {span}">{year}</span>{/each}</div>
</figure>
