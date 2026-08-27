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
}

/** Attribute on the `<html>` element that opts into a CVD palette. */
export const CVD_ATTRIBUTE = "data-color-vision-deficiency";

/**
 * Style-dictionary source directory (under `tokens/semantic/`) holding a CVD
 * palette's primitive overrides. Derived from `value` by convention, mirroring
 * how `light-contrast-more/` ties to `COLOR_MODES.highContrast`.
 */
export const cvdSourceDir = ({ value }: ColorVisionDeficiency): string =>
  `cvd-${value}`;

/**
 * Color-vision-deficiency palettes. Unlike contrast, there is no OS media query
 * for CVD, so these are attribute-only modes driven by `CVD_ATTRIBUTE`.
 *
 * The override values live as style-dictionary sources in `tokens/semantic/cvd-*`
 * (one folder per `value`); they re-base the primitive `color.system.*` status
 * tokens so any consumer of `--color-*` picks up the CVD-safe value. This entry
 * only carries the selector/label metadata that has no home in a token JSON.
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
    // Values: tokens/semantic/cvd-red-green/color.json
    value: "red-green",
    aliases: ["protanopia", "deuteranopia"],
    label: "Protanopia / Deuteranopia (red–green)",
  },
  {
    // Blue–yellow deficiency. ALTERNATE colors chosen to be maximally
    // distinguishable *under tritanopia simulation*; success (lightest) and error
    // (darkest) at the lightness extremes, with a grayscale floor.
    // Verified: worst-case sim ΔE ≈ 32 (standard ≈ 4); all AA on their tint.
    // Values: tokens/semantic/cvd-tritanopia/color.json
    value: "tritanopia",
    aliases: [],
    label: "Tritanopia (blue–yellow)",
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
