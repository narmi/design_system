const path = require("path");

module.exports = {
  typescript: {
    reactDocgen: "react-docgen-typescript-plugin",
  },

  stories: ["../**/*.stories.@(mdx|js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    "@storybook/addon-mdx-gfm",
  ],

  webpackFinal: (config) => {
    config.resolve.alias = {
      src: path.resolve(__dirname, "../src"),
      dist: path.resolve(__dirname, "../dist"),
      helpers: path.resolve(__dirname, "helpers"),
    };
    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
