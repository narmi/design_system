import type { TransformedToken } from "style-dictionary/types";

/**
 * The subset of a token this module needs. Structurally compatible with
 * style-dictionary's `TransformedToken` (so `dictionary.allTokens` works), while
 * also accepting plain override maps that never pass through the SD pipeline
 * (e.g. the inline color-vision-deficiency palettes).
 */
type ModeToken = Pick<TransformedToken, "name"> & { value: string | number };

interface BuildModeCSSOptions {
  /**
   * Optional OS-level media query (e.g. `(prefers-contrast: more)`). When
   * omitted, only the attribute-selector block is emitted — used for modes
   * that have no OS signal, such as color-vision deficiencies.
   */
  mediaQuery?: string;
  /**
   * One or more attribute selectors that opt into this mode. When multiple
   * selectors are provided they share a single block (comma-separated), which
   * lets deficiencies with an identical palette (protanopia + deuteranopia)
   * reuse one set of overrides.
   */
  selector: string | string[];
  tokens: ModeToken[];
  /**
   * Optional attribute selector that, when present on `:root`, should suppress
   * the media-query override. This lets consumers (and Storybook) force a
   * "standard" contrast palette even when the OS reports `prefers-contrast: more`.
   */
  excludeSelector?: string;
}

/**
 * Generates CSS override blocks for a given mode.
 *
 * Always emits an attribute-selector block. When `mediaQuery` is provided it
 * additionally emits a media-query block so the mode can follow an OS
 * preference.
 *
 * When `excludeSelector` is provided, the media-query block is scoped to
 * `:root:not(<excludeSelector>)` so an explicit user preference can opt out
 * of the OS-driven override.
 */
export function buildModeCSS({
  mediaQuery,
  selector,
  tokens,
  excludeSelector,
}: BuildModeCSSOptions): string {
  const vars = tokens
    .map((token) => `    --${token.name}: ${token.value};`)
    .join("\n");

  const attributeSelector = Array.isArray(selector)
    ? selector.join(",\n")
    : selector;

  const mediaBlock = mediaQuery
    ? [
        "",
        `@media ${mediaQuery} {`,
        `  ${excludeSelector ? `:root:not(${excludeSelector})` : ":root"} {`,
        vars,
        "  }",
        "}",
      ]
    : [];

  return [...mediaBlock, "", `${attributeSelector} {`, vars, "}", ""].join(
    "\n",
  );
}
