module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["html"]);
    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
