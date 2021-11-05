/**
 * style-dictionary filters used in config
 */

const filters = [
  // filter that passes only the tokens that should be in rgbColor.css dist
  // includes: color tokens
  // excludes: denylist colors, brand offset colors, theme colors, text colors
  {
    name: "rgbColorFilter",
    matcher: ({ attributes }) => {
      const { category, type, item } = attributes;
      const isColor = category === "color";
      const isThemeColor = type === "theme";
      const isOffsetColor = new RegExp(/[0-9]/).test(item);
      const isDeniedColor = type === "background" && item === "white"; // avoids naming collision with base color white

      return isColor && !isOffsetColor && !isThemeColor && !isDeniedColor;
    },
  },
];

module.exports = filters;
