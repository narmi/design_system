/// <reference types="vitest/globals" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./setupTests.js"],
      css: false,
      coverage: {
        provider: "v8",
        include: ["src/**"],
        exclude: [
          "src/**/*.stories.*",
          "src/**/*.figma.tsx",
          "src/**/*.mdx",
          "src/examples/**",
          "src/icons/**",
          "src/fonts/**",
          "src/types/**",
          "src/**/*.d.ts",
        ],
        // Ratchet-only thresholds: `autoUpdate` raises these values in place
        // whenever a `npm run test:coverage` run exceeds them.
        // Never lower them by hand — add or extend tests instead.
        thresholds: {
          autoUpdate: true,
          statements: 51.4,
          branches: 41.6,
          functions: 40.67,
          lines: 51.77,
        },
      },
    },
  }),
);
