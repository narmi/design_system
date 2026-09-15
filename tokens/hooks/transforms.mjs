import tinycolor from "tinycolor2";

/**
 * Custom transforms for style-dictionary.
 * Keys are transform names, values are transform definitions.
 */
export const transforms = {
  "custom/name/kebab": {
    type: "name",
    transform: ({ attributes }) => {
      const { category, type, item } = attributes;
      if (type === "background") return `bgColor-${item}`;
      if (["theme", "alpha", "space", "elevation"].includes(type))
        return `${type}-${item}`;
      if (["narmi", "system"].includes(type)) return `${category}-${item}`;
      return `${category}-${type}-${item}`;
    },
  },
  "custom/name/rgbList": {
    type: "name",
    filter: ({ attributes }) => attributes.category === "color",
    transform: ({ attributes }) => {
      const { type, item } = attributes;
      return type === "theme" ? `theme-rgb-${item}` : `rgb-${item}`;
    },
  },
  "custom/value/alpha": {
    type: "value",
    filter: ({ attributes }) => attributes.type === "alpha",
    transform: ({ original }) => original.value,
  },
  "custom/value/native-unitless": {
    type: "value",
    transform: ({ original }) => {
      const { value } = original;
      if (typeof value === "string" && value.includes("px")) {
        return value.replace("px", "");
      }
      return value;
    },
  },
  "custom/value/native-number": {
    type: "value",
    filter: ({ attributes }) =>
      ["radius", "size", "alpha", "lineHeight", "space"].some(
        (t) => attributes.type === t,
      ),
    transform: ({ original }) => parseFloat(original.value),
  },
  "custom/value/rgbList": {
    type: "value",
    filter: ({ attributes }) => attributes.category === "color",
    transform: ({ original }) => {
      const { r, g, b } = tinycolor(original.value).toRgb();
      return `${r}, ${g}, ${b}`;
    },
  },
  "custom/value/pxToRem": {
    type: "value",
    filter: ({ attributes }) => {
      const { category, type } = attributes;
      return (
        (type === "size" && category === "font") ||
        (type === "border" && category === "radius")
      );
    },
    transform: (token, options) => {
      const base = (options && options.basePxFontSize) || 16;
      const floatVal = parseFloat(token.value);
      if (floatVal === 0) return floatVal;
      return `${floatVal / base}rem`;
    },
  },
};
