/**
 * Custom filters for style-dictionary.
 * Keys are filter names, values are filter functions.
 */
export const filters = {
  rgbColorFilter: ({ attributes }) => {
    const { category, type, item } = attributes;
    const isColor = category === "color";
    const isOffsetColor = /[0-9]/.test(item);
    const isDeniedColor = type === "background" && item === "white";
    return isColor && !isOffsetColor && !isDeniedColor;
  },
  isColor: ({ attributes }) => attributes.category === "color",
};
