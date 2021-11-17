/**
 * `style-dictionary` configuration
 */
const path = require("path");
const StyleDictionary = require("style-dictionary");
const transforms = require("./util/transforms");
const filters = require("./util/filters");

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
    /**
     * Custom properties in a CSS file
     */
    css: {
      transforms: CSS_TRANSFORM_GROUP,
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
     * Scss variables (maps)
     */
    scssVariables: {
      transforms: CSS_TRANSFORM_GROUP,
      buildPath: getBuildPath("scss"),
      files: [
        {
          destination: "variables.scss",
          format: "scss/map-deep",
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
  },
};

module.exports = config;
