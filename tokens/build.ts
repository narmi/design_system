/**
 * Design token build script.
 * Uses style-dictionary v5 to compile token sources into platform distributions.
 */
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import StyleDictionary from "style-dictionary";
import type { Config } from "style-dictionary/types";
import {
  transforms as sdTransforms,
  formats as sdFormats,
} from "style-dictionary/enums";
import { transforms } from "./hooks/transforms.mjs";
import { filters } from "./hooks/filters.mjs";
import { formats } from "./hooks/formats.mjs";
import { COLOR_MODES } from "./constants.js";
import { buildModeCSS } from "./modes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const getBuildPath = (subdir: string): string =>
  `${path.resolve(root, "dist/tokens")}/${subdir}/`;

// ─── Transform groups ────────────────────────────────────────────────────────

const CSS_TRANSFORMS = [
  sdTransforms.attributeCti,
  sdTransforms.colorCss,
  "custom/name/kebab",
  "custom/value/alpha",
];

// ─── Source paths ────────────────────────────────────────────────────────────

const baseSources = [
  path.resolve(__dirname, "primitives/**/*.json"),
  path.resolve(__dirname, "semantic/light/**/*.json"),
];

const modeContrastMoreSources = [
  path.resolve(__dirname, "semantic/light-contrast-more/**/*.json"),
];

// ─── Shared hooks ────────────────────────────────────────────────────────────

const sharedHooks = { transforms, filters, formats };

// ─── Base config ─────────────────────────────────────────────────────────────

const baseConfig: Config = {
  source: baseSources,
  hooks: sharedHooks,
  platforms: {
    json: {
      buildPath: getBuildPath("json"),
      files: [{ destination: "tokens.json", format: sdFormats.jsonNested }],
    },
    css: {
      basePxFontSize: 16,
      transforms: [...CSS_TRANSFORMS, "custom/value/pxToRem"],
      buildPath: getBuildPath("css"),
      files: [
        { destination: "tokens.css", format: sdFormats.cssVariables },
        { destination: "tokens.scss", format: sdFormats.cssVariables },
      ],
      options: { outputReferences: true },
    },
    cssRgbColors: {
      transforms: [
        sdTransforms.attributeCti,
        "custom/name/rgbList",
        "custom/value/rgbList",
      ],
      buildPath: getBuildPath("css"),
      files: [
        {
          filter: "rgbColorFilter",
          destination: "rgbColors.css",
          format: sdFormats.cssVariables,
        },
        {
          filter: "rgbColorFilter",
          destination: "rgbColors.scss",
          format: sdFormats.cssVariables,
        },
      ],
    },
    manifest: {
      transforms: CSS_TRANSFORMS,
      buildPath: getBuildPath("js"),
      files: [{ destination: "manifest.js", format: "custom/cjs-nested" }],
    },
    manifestES6: {
      transforms: CSS_TRANSFORMS,
      buildPath: getBuildPath("js"),
      files: [{ destination: "manifest.esm.js", format: "custom/esm-nested" }],
    },
    jsColorsModule: {
      transforms: [...CSS_TRANSFORMS, sdTransforms.namePascal],
      buildPath: getBuildPath("js"),
      files: [
        {
          filter: "isColor",
          destination: "colors.js",
          format: sdFormats.javascriptModuleFlat,
        },
      ],
    },
    jsColorsES6: {
      transforms: [...CSS_TRANSFORMS, sdTransforms.namePascal],
      buildPath: getBuildPath("js"),
      files: [
        {
          filter: "isColor",
          destination: "colors.esm.js",
          format: sdFormats.javascriptEs6,
        },
      ],
    },
    reactNativeWeb: {
      transforms: [
        sdTransforms.attributeCti,
        "custom/value/native-unitless",
        "custom/value/native-number",
      ],
      buildPath: getBuildPath("js"),
      files: [
        { destination: "reactNativeWeb.js", format: "custom/cjs-nested" },
      ],
    },
  },
};

// ─── High contrast mode config ───────────────────────────────────────────────

const modeConfig: Config = {
  source: modeContrastMoreSources,
  hooks: {
    transforms,
    filters,
    actions: {
      "append-high-contrast": {
        do: (dictionary) => {
          const modeBlock = buildModeCSS({
            mediaQuery: COLOR_MODES.highContrast.mediaQuery,
            selector: COLOR_MODES.highContrast.selector,
            tokens: dictionary.allTokens,
          });
          const cssDir = getBuildPath("css");
          fs.appendFileSync(`${cssDir}tokens.css`, modeBlock);
          fs.appendFileSync(`${cssDir}tokens.scss`, modeBlock);
        },
        undo: () => {},
      },
    },
  },
  platforms: {
    cssMode: {
      basePxFontSize: 16,
      transforms: [...CSS_TRANSFORMS, "custom/value/pxToRem"],
      buildPath: getBuildPath("css"),
      actions: ["append-high-contrast"],
      files: [],
    },
  },
};

// ─── Build ───────────────────────────────────────────────────────────────────

async function main() {
  const sdBase = new StyleDictionary(baseConfig);
  await sdBase.buildAllPlatforms();

  const sdMode = new StyleDictionary(modeConfig);
  await sdMode.buildAllPlatforms();
}

main();
