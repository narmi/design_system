import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  stories: [
    "../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../tokens/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    // Dev-only issue test case stories, excluded from production builds
    // (storybook build sets NODE_ENV=production)
    ...(process.env.NODE_ENV !== "production"
      ? [
          {
            directory: "../issue-test-cases",
            files: "**/*.stories.@(js|jsx|ts|tsx)",
            titlePrefix: "Issue Test Cases",
          },
        ]
      : []),
  ],

  addons: [
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
    // Add aliases for imports to resolve correctly in Vite
    config.resolve.alias = {
      ...config.resolve.alias,
      helpers: path.resolve(__dirname, "helpers"),
      dist: path.resolve(__dirname, "../dist"),
      src: path.resolve(__dirname, "../src"),
    };

    // Vite 8 uses LightningCSS for CSS minification. Enable error
    // recovery to strip invalid CSS hacks from third-party deps
    // (e.g. flatpickr's `@media (min-width: 0\0)` IE hack).
    config.css = {
      ...config.css,
      lightningcss: {
        ...config.css?.lightningcss,
        errorRecovery: true,
      },
    };

    return config;
  },
};
