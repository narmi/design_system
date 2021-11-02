/**
 * `style-dictionary` configuration
 */
const path = require("path");
const StyleDictionary = require("style-dictionary");
const transforms = require("./util/transforms");

//  we call this config from repo root, so __dirname will be root.
const getBuildPath = (subdir) => `${path.resolve("./dist/tokens")}/${subdir}/`;

// register all custom transforms with style dictionary
transforms.forEach((transform) => {
  StyleDictionary.registerTransform(transform);
});

const config = {
  source: [`${path.resolve("tokens/src")}/**/*.json`],
  platforms: {
    /**
     * Custom properties in a CSS file
     */
    css: {
      transforms: [
        "attribute/cti",
        "color/css",
        "custom/name/kebab-cti",
        "custom/name/kebab-ti",
        "custom/name/kebab-ci",
        "custom/name/bgColor",
        "custom/value/alpha",
      ],
      buildPath: getBuildPath("css"),
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
      options: { outputReferences: true },
    },
  },
};

module.exports = config;
