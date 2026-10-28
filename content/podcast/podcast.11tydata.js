export default {
	"tags": "podcast",
	"layout": "postlayout.svelte",
	"sectionTitle": "Podcast",
	"sourceLabel": "Podcast Awesome",
	"showTitle": true,
	"eleventyComputed": {
		// Imported as `rss`
		"metadata": {
			"type": "podcast"
		}
	}
}
