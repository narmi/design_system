import type { TransformedToken } from "style-dictionary/types";

interface BuildModeCSSOptions {
  mediaQuery: string;
  selector: string;
  tokens: TransformedToken[];
  /**
   * Optional attribute selector that, when present on `:root`, should suppress
   * the media-query override. This lets consumers (and Storybook) force a
   * "standard" contrast palette even when the OS reports `prefers-contrast: more`.
   */
  excludeSelector?: string;
}

/**
 * Generates CSS override blocks for a given mode.
 * Produces both a media query block and a data-attribute selector block.
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

  const mediaRootSelector = excludeSelector
    ? `:root:not(${excludeSelector})`
    : ":root";

  return [
    "",
    `@media ${mediaQuery} {`,
    `  ${mediaRootSelector} {`,
    vars,
    "  }",
    "}",
    "",
    `${selector} {`,
    vars,
    "}",
    "",
  ].join("\n");
}
