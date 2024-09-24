/**
 * Please replace this solution with CSS `color-contrast()` if it ever
 * becomes widely supported across browsers.
 * <https://caniuse.com/mdn-css_types_color_color-contrast>
 */
import { useEffect, useState } from "react";
import parse from "color-parse";

const THRESHOLD = 140;

const isLight = ([r, g, b]): boolean => {
  const yiqBrightness = (r * 299 + g * 587 + b * 114) / 1000;
  return yiqBrightness > THRESHOLD;
};

interface UseContrastColorOptions {
  backgroundVar: "--theme-primary" | "--theme-secondary" | "--theme-tertiary";
  textLevel?: "heading" | "primary" | "secondary" | "hint";
}

/**
 * Calculates a text contrast color for a given background.
 *
 * @usage
 * ```
 * const { getTextProps } = useContrastColor({ backgroundVar: "--theme--primary" });
 * ```
 *
 * ```
 * <span {...getTextProps()}>{label}</span>
 * ```
 */
const useContrastColor = ({
  backgroundVar,
  textLevel = "heading", // white/black by deault
}: UseContrastColorOptions) => {
  const [color, setColor] = useState(`var(--font-color-${textLevel}-inverted`);

  useEffect(() => {
    const rgb = parse(
      getComputedStyle(document.body).getPropertyValue(backgroundVar),
    ).values;
    // @ts-expect-error parse is not typed
    if (isLight(rgb)) {
      setColor(`var(--font-color-${textLevel}`);
    }
  });

  return {
    /**
     * @returns props to spread on an element to give it contrast text
     */
    getTextProps: () => ({
      style: { color },
    }),
  };
};

export default useContrastColor;
