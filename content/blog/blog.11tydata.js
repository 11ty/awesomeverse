export default {
	"tags": "blog",
	"layout": "postlayout.svelte",
	"sectionTitle": "Blog",
	"showTitle": true,
	"eleventyComputed": {
		// Post label, while `sectionTitle` stays “Blog” for the source page and search filter
		"sourceLabel": data => {
			if(data.page.inputPath.includes("/fontawesome-changelog/")) {
				return "Font Awesome Changelog";
			}
			if(data.page.inputPath.includes("/blog/fontawesome/")) {
				return "Blog Awesome";
			}
			if(data.page.inputPath.includes("/blog/buildawesome/")) {
				return "11ty Blog";
			}
			return data.sectionTitle;
		},
		// Imported as `atom`
		"metadata": {
			"type": "blog"
		}
	}
}
