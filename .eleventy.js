module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addPassthroughCopy("./src/js/");

	eleventyConfig.addWatchTarget("./src/js/");
	eleventyConfig.addWatchTarget("./src/css/");

	eleventyConfig.addPassthroughCopy("src/pics");
	eleventyConfig.addPassthroughCopy("src/favicon");


	return {
		markdownTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "public",
		},
	};
};

