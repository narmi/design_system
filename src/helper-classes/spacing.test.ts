import { describe, it, expect } from "vitest";
import * as sass from "sass";

// Compile the helper stylesheet and assert on real output, since a broken
// interpolation produces valid-looking Sass that compiles to CSS browsers
// silently drop (e.g. `margin-direction: 0`).
const compiled = sass.compile("src/helper-classes/spacing.scss").css;

describe("spacing helper classes", () => {
  const properties = ["margin", "padding"];
  const directions = ["top", "right", "bottom", "left"];

  it.each(
    properties.flatMap((property) =>
      directions.map((direction) => [property, direction]),
    ),
  )("compiles .%s--%s--none to a real declaration", (property, direction) => {
    expect(compiled).toMatch(
      new RegExp(
        `\\.${property}--${direction}--none\\s*\\{\\s*` +
          `${property}-${direction}:\\s*0\\s*!important`,
      ),
    );
  });

  it("emits no misinterpolated property names", () => {
    expect(compiled).not.toMatch(/(margin|padding)-direction/);
  });
});
