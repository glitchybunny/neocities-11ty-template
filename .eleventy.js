module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");

  return {
    htmlTemplateEngine: "liquid",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "www",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
  };
};
