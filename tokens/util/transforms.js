/**
 * Custom transforms for style-dictionary.
 *
 * These transforms modify the output name or value of tokens in distributions
 * and are registered/referenced in the style dictionary config file.
 */

const tinycolor = require("tinycolor2");

/**
 * Used for filtering tokens in transform `matcher` functions.
 * Checks to see if any of the attribues in `arr` match the given token attribute.
 *
 * @param {Array} searchWords - list of attributes to match against token
 * @param {String} attribute - attribue from token to match against
 * @returns {Boolean}
 */
const _matchByAttribute = (searchWords, attribute) =>
  searchWords.some((s) => s == attribute);

/**
 *  Transforms that modify the output name of tokens
 */
const nameTransforms = [
  {
    // outputs full category,type,item name in kebab format
    // each CTI segment is camelCased by default by style-dictionary
    name: "custom/name/kebab-cti",
    type: "name",
    transformer: ({ attributes }) => {
      const { category, type, item } = attributes;
      return `${category}-${type}-${item}`;
    },
  },
  {
    // outputs type,item name in kebab format
    // FILTERED - only applies to some tokens (see matcher)
    name: "custom/name/kebab-ti",
    type: "name",
    matcher: ({ attributes }) =>
      _matchByAttribute(
        ["theme", "alpha", "space", "elevation"],
        attributes.type
      ),
    transformer: ({ attributes }) => {
      const { type, item } = attributes;
      return `${type}-${item}`;
    },
  },
  {
    // outputs category,item name in kebab format
    // FILTERED - only applies to some tokens (see matcher)
    name: "custom/name/kebab-ci",
    type: "name",
    matcher: ({ attributes }) =>
      _matchByAttribute(["narmi", "system"], attributes.type),
    transformer: ({ attributes }) => {
      const { category, item } = attributes;
      return `${category}-${item}`;
    },
  },
  {
    // custom naming for color-background properties
    // (color/background tokens only)
    name: "custom/name/bgColor",
    type: "name",
    matcher: ({ attributes }) => attributes.type === "background",
    transformer: ({ attributes }) => {
      const { item } = attributes;
      return `bgColor-${item}`;
    },
  },
  {
    // custom naming RGB list colors
    // (color only)
    name: "custom/name/rgbList",
    type: "name",
    matcher: ({ attributes }) => attributes.category === "color",
    transformer: ({ attributes }) => {
      const { type, item } = attributes;
      let result = `rgb-${item}`;
      if (type === "theme") {
        result = `theme-rgb-${item}`;
      }
      return result;
    },
  },
];

/**
 *  Transforms that modify the output value of tokens
 */
const valueTransforms = [
  {
    // preserves original value for alpha tokens instead of converting floats to hex colors
    name: "custom/value/alpha",
    type: "value",
    matcher: ({ attributes }) => attributes.type === "alpha",
    transformer: ({ original }) => original.value,
  },
  {
    // transforms a solid color into a list of its RGB components
    name: "custom/value/rgbList",
    type: "value",
    matcher: ({ attributes }) => attributes.category === "color",
    transformer: ({ original }) => {
      const { r, g, b } = tinycolor(original.value).toRgb();
      return `${r}, ${g}, ${b}`;
    },
  },
];

module.exports = [...nameTransforms, ...valueTransforms];
