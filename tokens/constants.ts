export interface ColorMode {
  mediaQuery?: string;
  selector: string;
  attribute: string;
  value: string;
}

export const COLOR_MODES = {
  highContrast: {
    mediaQuery: "(prefers-contrast: more)",
    selector: '[data-prefers-contrast="more"]',
    attribute: "data-prefers-contrast",
    value: "more",
  },
  standardContrast: {
    selector: '[data-prefers-contrast="less"]',
    attribute: "data-prefers-contrast",
    value: "less",
  },
} as const satisfies Record<string, ColorMode>;

export interface ColorVisionDeficiency {
  /**
   * The collapsed, user-facing value set on `CVD_ATTRIBUTE`. Red–green
   * deficiencies share one setting (`red-green`) rather than exposing the two
   * clinical names as separate settings.
   */
  value: string;
  /**
   * Additional attribute values that resolve to the same palette. The clinical
   * names are kept as aliases so a consumer that stores `protanopia` /
   * `deuteranopia` directly still matches (rendered as extra selectors).
   */
  aliases: string[];
  /** Human-readable label (used in Storybook / docs). */
  label: string;
  /**
   * Primitive overrides for this palette: CSS custom-property name (without the
   * leading `--`) → value. These override the primitive `--color-*` properties
   * directly, so any consumer using them picks up the CVD-safe value.
   */
  overrides: Record<string, string>;
}

/** Attribute on the `<html>` element that opts into a CVD palette. */
export const CVD_ATTRIBUTE = "data-color-vision-deficiency";

/**
 * Color-vision-deficiency palettes. Unlike contrast, there is no OS media query
 * for CVD, so these are attribute-only modes driven by `CVD_ATTRIBUTE`.
 *
 * Status colors are re-based per deficiency so meaning rides the axis that
 * survives. Non-color cues (icon/label) must still accompany every status —
 * color never carries the load alone.
 */
export const COLOR_VISION_DEFICIENCIES: ColorVisionDeficiency[] = [
  {
    // Red–green deficiencies. These are ALTERNATE colors chosen to be maximally
    // distinguishable *under protanopia/deuteranopia simulation* — not tweaks of
    // the standard status colors. Assigned so success (lightest) and error
    // (darkest) sit at the lightness extremes (the never-confuse pair is the most
    // separated). A grayscale floor keeps every status distinct by lightness too.
    // Verified: worst-case sim ΔE ≈ 26–29 (standard ≈ 11); all AA on their tint.
    // Meaning is carried by icon/label — color never carries the load alone.
    value: "red-green",
    aliases: ["protanopia", "deuteranopia"],
    label: "Protanopia / Deuteranopia (red–green)",
    overrides: {
      "color-successDark": "#6F6BAD",
      "color-successLight": "#F7F8FF",
      "color-infoDark": "#1A56B0",
      "color-infoLight": "#E9EFFB",
      "color-warnDark": "#6F004F",
      "color-warnLight": "#FFE9F4",
      "color-errorDark": "#4B0200",
      "color-errorLight": "#FFEBE7",
    },
  },
  {
    // Blue–yellow deficiency. ALTERNATE colors chosen to be maximally
    // distinguishable *under tritanopia simulation*; success (lightest) and error
    // (darkest) at the lightness extremes, with a grayscale floor.
    // Verified: worst-case sim ΔE ≈ 32 (standard ≈ 4); all AA on their tint.
    value: "tritanopia",
    aliases: [],
    label: "Tritanopia (blue–yellow)",
    overrides: {
      "color-successDark": "#E2004C",
      "color-successLight": "#FFF6F6",
      "color-infoDark": "#007654",
      "color-infoLight": "#D2FBE8",
      "color-warnDark": "#2200C3",
      "color-warnLight": "#EAF0FF",
      "color-errorDark": "#52001C",
      "color-errorLight": "#FFEAED",
    },
  },
];

/** All attribute selectors (value + aliases) that activate a CVD palette. */
export const cvdSelectors = ({
  value,
  aliases,
}: ColorVisionDeficiency): string[] =>
  [value, ...aliases].flatMap((v) => [
    `:root[${CVD_ATTRIBUTE}="${v}"]`,
    `[${CVD_ATTRIBUTE}="${v}"]`,
  ]);
