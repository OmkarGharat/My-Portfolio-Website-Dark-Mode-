module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["html"]);
    eleventyConfig.addPassthroughCopy("css");
    // eleventyConfig.addPassthroughCopy("Common");
    // eleventyConfig.addPassthroughCopy("main-components/*.html");
    eleventyConfig.addPassthroughCopy("Main Components/**/*");

    return {
        dir: {
            input: ".",
            includes: "_includes", "main-components": "Main Components",
            output: "_site",
            templateFormats: ["njk", "html", "md", "liquid", /* others you need */]
        },
        htmlTemplateEngine: "njk"

    };
};
