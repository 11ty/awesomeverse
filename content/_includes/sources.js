export const statSources = [
	{ key: "bluesky", label: "Bluesky", icon: "fa-brands fa-bluesky" },
	{ key: "fediverse", label: "Mastodon", icon: "fa-brands fa-mastodon" },
	{ key: "github", label: "GitHub", icon: "fa-brands fa-github" },
	{ key: "npm", label: "npm", icon: "fa-brands fa-npm" },
	{ key: "youtube", label: "YouTube", icon: "fa-brands fa-youtube" },
	{ key: "letterboxd", label: "Letterboxd", icon: "fa-brands fa-letterboxd" },
	{ key: "blog", label: "Blog", icon: "fa-regular fa-newspaper" },
	{ key: "hackernews", label: "Hacker News", icon: "fa-brands fa-hacker-news" },
	{ key: "total", label: "All" },
];

// Project accounts show a brand icon in place of their (inconsistent) avatars
const authorIcons = [
	{ key: "font", icon: "fa-brands fa-font-awesome", label: "Font Awesome", names: ["font awesome", "fortawesome"] },
	{ key: "web", icon: "fa-brands fa-web-awesome", label: "Web Awesome", names: ["web awesome", "shoelace-style"] },
	{ key: "build", icon: "fa-brands fa-build-awesome", label: "Build Awesome", names: ["build awesome (11ty)", "11ty", "zachleat", "zach leatherman"] },
];

export function getAuthorIcon(author) {
	let name = author?.name?.trim().toLowerCase();
	return authorIcons.find(({ names }) => names.includes(name));
}

// Projects, matched by the import output subfolder (e.g. `content/github/webawesome/`)
export const brands = [
	{ key: "build", label: "Build Awesome", folder: "buildawesome" },
	{ key: "web", label: "Web Awesome", folder: "webawesome" },
	{ key: "font", label: "Font Awesome", folder: "fontawesome" },
];

// The shared Font Awesome blog has no categories, so its posts (and Hacker News links to them) are matched by title or URL slug
const SHARED_BLOG_FOLDERS = { blog: "fontawesome", hackernews: "fontawesome-blog" };
const SHARED_BLOG_POSTS = [
	{ key: "build", pattern: /build[\s-]*awesome/i },
	{ key: "web", pattern: /web[\s-]*awesome|\/wa-/i },
];

function isSharedBlogPost(post) {
	let [, type, folder] = post.inputPath?.split("/").filter(segment => segment !== ".") || [];
	return SHARED_BLOG_FOLDERS[type] === folder;
}

export function getBrand(post) {
	let [, , folder] = post.inputPath?.split("/").filter(segment => segment !== ".") || [];
	let key = getPackageProductKey(post);
	if(!key && isSharedBlogPost(post)) {
		let text = [post.data.title, post.data.metadata?.url, post.data.metadata?.externalUrl];
		key = SHARED_BLOG_POSTS.find(({ pattern }) => text.some(str => pattern.test(str || "")))?.key;
	}
	if(key) {
		return brands.find(brand => brand.key === key);
	}
	return brands.find(brand => folder?.startsWith(brand.folder));
}

// Author name is redundant next to its project label
export function isProductName(author, product = getAuthorIcon(author)) {
	let name = author?.name?.replace(/\(.*\)/, "").trim().toLowerCase();
	return Boolean(product) && name === product.label.toLowerCase();
}

// npm packages belong to their project, whoever published them
function getPackageProductKey(post) {
	let name = post.data?.metadata?.type === "npm" && post.data.metadata.name;
	if(!name) {
		return;
	}
	if(name.startsWith("@11ty/") || name === "@awesome.me/buildawesome") {
		return "build";
	}
	if(name === "@awesome.me/webawesome" || name === "@awesome.me/astro-lit") {
		return "web";
	}
	if(name.startsWith("@fortawesome/")) {
		return "font";
	}
}

export function getPostProduct(post) {
	// Hacker News authors are commenters and shared blog posts are all by Font Awesome, so use the brand instead
	let key = getPackageProductKey(post) || (post.data.metadata?.type === "hackernews" || isSharedBlogPost(post) ? getBrand(post)?.key : undefined);
	return key ? authorIcons.find(icon => icon.key === key) : getAuthorIcon(post.data.authors?.[0]);
}
