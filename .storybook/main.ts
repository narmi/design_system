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
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  features: {
    strict: true,
  },
};
