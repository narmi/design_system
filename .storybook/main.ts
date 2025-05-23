const path = require("path");

module.exports = {
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  stories: [
    "../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../tokens/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
  ],

  addons: [
    {
      name: "@storybook/addon-essentials",
      options: { strict: true },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
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

  docs: {},
};
