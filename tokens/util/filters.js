/**
 * style-dictionary filters used in config
 */

const filters = [
  // filter that passes only the tokens that should be in rgbColor.css dist
  // includes only base colors
  {
    name: "rgbColorFilter",
    matcher: ({ attributes }) => {
      const { category, type, item } = attributes;
      const isColor = category === "color";
      const isBaseColor = type === "narmi";
      const isOffsetColor = new RegExp(/[0-9]/).test(item);

      return isColor && isBaseColor && !isOffsetColor;
    },
  },
];

module.exports = filters;
