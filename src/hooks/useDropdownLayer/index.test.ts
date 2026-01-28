import { renderHook } from "@testing-library/react";
import type { CSSProperties } from "react";
import useDropdownLayer from "./index";

describe.skip("useDropdownLayer", () => {
  let originalCSSSupports: typeof CSS.supports;

  beforeAll(() => {
    originalCSSSupports = CSS.supports;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    CSS.supports = originalCSSSupports;
  });

  describe("when anchor positioning is SUPPORTED", () => {
    beforeEach(() => {
      CSS.supports = jest.fn().mockReturnValue(true);
    });

    it("should use CSS anchor positioning properties on layer element when open", () => {
      const { result } = renderHook(() => useDropdownLayer({ isOpen: true }));

      const layerStyle = result.current.layerProps.style as CSSProperties;

      expect(layerStyle).toMatchObject({
        position: "absolute",
        positionAnchor: expect.stringMatching(/^--nds-dropdown-anchor-/),
        positionArea: "bottom center",
        positionTryFallbacks: "flip-block",
        width: "anchor-size(width)",
        display: "block",
      });
    });

    it("should hide layer when closed", () => {
      const { result } = renderHook(() => useDropdownLayer({ isOpen: false }));

      const layerStyle = result.current.layerProps.style as CSSProperties;
      expect(layerStyle.display).toBe("none");
    });
  });

  describe("when anchor positioning is NOT SUPPORTED", () => {
    beforeEach(() => {
      CSS.supports = jest.fn().mockReturnValue(false);
    });

    it("should use polyfill styles on layer element when open", () => {
      const { result } = renderHook(() => useDropdownLayer({ isOpen: true }));

      const layerStyle = result.current.layerProps.style;

      expect(layerStyle).toMatchObject({
        position: "fixed",
        top: "var(--js-dropdown-top)",
        left: "var(--js-dropdown-left)",
        minWidth: "var(--js-dropdown-minWidth)",
        display: "block",
      });
    });

    it("should hide layer when closed", () => {
      const { result } = renderHook(() => useDropdownLayer({ isOpen: false }));

      const layerStyle = result.current.layerProps.style as CSSProperties;
      expect(layerStyle.display).toBe("none");
    });
  });
});
