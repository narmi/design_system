/// <reference types="vitest/globals" />
import { defineConfig, mergeConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import viteConfig from "./vite.config.js";

// Set PLAYWRIGHT_CHANNEL=chrome to run the `storybook` project against a
// locally installed Google Chrome instead of Playwright's downloaded Chromium
// (`pnpm exec playwright install chromium`).
const launchOptions = process.env.PLAYWRIGHT_CHANNEL
  ? { channel: process.env.PLAYWRIGHT_CHANNEL }
  : {};

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        // Unit tests (`*.test.*`) in jsdom. `pnpm run test`.
        {
          extends: true,
          test: {
            name: "unit",
            globals: true,
            environment: "jsdom",
            setupFiles: ["./setupTests.js"],
            css: false,
          },
        },
        // Every story, rendered in headless Chromium. Runs each story's
        // `play` function, then axe via @storybook/addon-a11y. A story with
        // axe violations fails unless it sets `parameters.a11y.test: "todo"`.
        // `pnpm run test:storybook`.
        {
          extends: true,
          plugins: [storybookTest({ configDir: ".storybook" })],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: playwright({ launchOptions }),
              instances: [{ browser: "chromium" }],
            },
          },
        },
      ],
    },
  }),
);
