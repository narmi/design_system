import { renderHook } from "@testing-library/react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

const setCSSSupports = (supports: typeof CSS.supports) => {
  Object.defineProperty(globalThis, "CSS", {
    configurable: true,
    value: { supports },
  });
};

describe("useSupportsAnchorPositioning", () => {
  const originalCSS = globalThis.CSS;

  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    Object.defineProperty(globalThis, "CSS", {
      configurable: true,
      value: originalCSS,
    });
  });

  it("uses a false server snapshot", async () => {
    setCSSSupports(vi.fn().mockReturnValue(true));
    const { default: useSupportsAnchorPositioning } = await import(".");

    const TestComponent = () =>
      createElement("div", null, String(useSupportsAnchorPositioning()));

    expect(renderToString(createElement(TestComponent))).toContain("false");
  });

  it.each([
    [true, true],
    [false, false],
  ])(
    "uses the CSS.supports result for client snapshots (%s)",
    async (supportsResult, expected) => {
      setCSSSupports(vi.fn().mockReturnValue(supportsResult));
      const { default: useSupportsAnchorPositioning } = await import(".");

      const { result } = renderHook(() => useSupportsAnchorPositioning());

      expect(result.current).toBe(expected);
    },
  );
});
