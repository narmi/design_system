import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  typescript: {
    reactDocgen: "react-docgen-typescript",
    // `@joshwooding/vite-plugin-react-docgen-typescript` (used by
    // `@storybook/react-vite` for the `react-docgen-typescript` option) skips
    // any file that is not a root file of the resolved TypeScript project.
    //
    // It defaults to the root `tsconfig.json`, which is a build-only config
    // (`files: ["src/index.ts", "src/json.d.ts"]`). Under that config no `.tsx`
    // file qualifies, so every TypeScript component silently loses its docgen:
    // no controls and no prop descriptions in Storybook. Point it at
    // `tsconfig.check.json` instead, which covers all of `src/`.
    //
    // `scripts/checkDocgen.mjs` guards this in CI. Do not remove these options
    // without running `npm run check:docgen`.
    reactDocgenTypescriptOptions: {
      tsconfigPath: "tsconfig.check.json",
      // Explicit `include` avoids the plugin's default `**/*.tsx` glob, which
      // walks `node_modules` on every cold start.
      include: ["src/**/*.tsx"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.figma.tsx"],
    },
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
