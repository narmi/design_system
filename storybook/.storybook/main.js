const path = require("path");

module.exports = {
  stories: [
    "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      dist: path.resolve(__dirname, "../../dist"),
    };
    return config;
  },
};
