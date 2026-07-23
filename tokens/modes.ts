import type { TransformedToken } from "style-dictionary/types";

interface BuildModeCSSOptions {
  mediaQuery: string;
  selector: string;
  tokens: TransformedToken[];
}

/**
 * Generates CSS override blocks for a given mode.
 * Produces both a media query block and a data-attribute selector block.
 */
export function buildModeCSS({
  mediaQuery,
  selector,
  tokens,
}: BuildModeCSSOptions): string {
  const vars = tokens
    .map((token) => `    --${token.name}: ${token.value};`)
    .join("\n");

  return [
    "",
    `@media ${mediaQuery} {`,
    "  :root {",
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
