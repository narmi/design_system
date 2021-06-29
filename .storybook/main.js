const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    // https://storybook.js.org/docs/react/configure/webpack
    config.resolve.alias.components = path.join(__dirname, "../src/components");
    return config;
  },
};
