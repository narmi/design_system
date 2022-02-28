const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      src: path.resolve(__dirname, "../src"),
      dist: path.resolve(__dirname, "../dist"),
      helpers: path.resolve(__dirname, "helpers"),
    };
    return config;
  },
};
