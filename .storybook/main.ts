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

  async viteFinal(config, { configType }) {
    // Handle JSX in .js files
    config.esbuild = {
      ...config.esbuild,
      loader: "jsx",
      include: /(src|tokens)\/.*\.js$/,
    };

    // Add aliases for imports to resolve correctly in Vite
    config.resolve.alias = {
      ...config.resolve.alias,
      helpers: path.resolve(__dirname, "helpers"),
      dist: path.resolve(__dirname, "../dist"),
      src: path.resolve(__dirname, "../src"),
    };

    return config;
  },
};
