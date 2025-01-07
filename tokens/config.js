/**
 * `style-dictionary` configuration
 */
const path = require("path");
const StyleDictionary = require("style-dictionary");
const transforms = require("./util/transforms");
const filters = require("./util/filters");
const formats = require("./util/formats");

//  we call this config from repo root, so __dirname will be root.
const getBuildPath = (subdir) => `${path.resolve("./dist/tokens")}/${subdir}/`;

// register all custom transforms
transforms.forEach((transform) => {
  StyleDictionary.registerTransform(transform);
});

// register all custom filters
filters.forEach((filter) => {
  StyleDictionary.registerFilter(filter);
});

// register all custom formats
formats.forEach((format) => {
  StyleDictionary.registerFormat(format);
});

const CSS_TRANSFORM_GROUP = [
  "attribute/cti",
  "color/css",
  "custom/name/kebab-cti",
  "custom/name/kebab-ti",
  "custom/name/kebab-ci",
  "custom/name/bgColor",
  "custom/value/alpha",
];

const config = {
  source: [`${path.resolve("tokens/src")}/**/*.json`],
  platforms: {
    json: {
      buildPath: getBuildPath("json"),
      files: [
        {
          destination: "tokens.json",
          format: "json/nested",
        },
      ],
    },

    /**
     * Custom properties in a CSS file
     */
    css: {
      basePxFontSize: 16,
      transforms: [...CSS_TRANSFORM_GROUP, "custom/value/pxToRem"],
      buildPath: getBuildPath("css"),
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
      options: { outputReferences: true },
    },

    /**
     * Custom properties for RGB lists in a CSS file
     * (only includes colors where rgba composition is permissable)
     */
    cssRgbColors: {
      transforms: [
        "attribute/cti",
        "custom/name/rgbList",
        "custom/value/rgbList",
      ],
      buildPath: getBuildPath("css"),
      files: [
        {
          filter: "rgbColorFilter",
          destination: "rgbColors.css",
          format: "css/variables",
        },
      ],
    },

    /**
     * manifest of all tokens, used for documentation
     */
    manifest: {
      transforms: CSS_TRANSFORM_GROUP,
      buildPath: getBuildPath("js"),
      files: [
        {
          destination: "manifest.js",
          format: "javascript/module",
        },
      ],
    },

    /**
     * Color tokens as properties in a javscript object, PascalCase
     */
    jsColorsModule: {
      transforms: [...CSS_TRANSFORM_GROUP, "name/cti/pascal"],
      buildPath: getBuildPath("js"),
      files: [
        {
          filter: "isColor",
          destination: "colors.js",
          format: "javascript/module-flat",
        },
      ],
    },

    /**
     * All tokens in a nested object es6 format
     */
    reactNativeWeb: {
      transforms: [
        "attribute/cti",
        "custom/value/native-unitless",
        "custom/value/native-number",
      ],
      buildPath: getBuildPath("js"),
      files: [
        {
          destination: "reactNativeWeb.js",
          format: "custom/es6-nested",
        },
      ],
    },
  },
};

module.exports = config;
