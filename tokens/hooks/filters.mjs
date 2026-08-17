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
    // Raw hue primitives (red/green/amber/blue.dark|light) are only consumed via
    // the semantic color.system.* tokens, which produce the real --rgb-* vars.
    // Excluding them here avoids colliding --rgb-dark / --rgb-light output.
    const isRawHue = ["red", "green", "amber", "blue"].includes(type);
    return isColor && !isOffsetColor && !isDeniedColor && !isRawHue;
  },
  isColor: ({ attributes }) => attributes.category === "color",
};
