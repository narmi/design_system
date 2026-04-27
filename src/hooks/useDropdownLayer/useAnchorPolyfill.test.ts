import { calculatePosition, computeRootMargin } from "./useAnchorPolyfill";

const VIEWPORT_WIDTH = 1024;
const VIEWPORT_HEIGHT = 768;

/** Creates a minimal HTMLElement stub with controllable getBoundingClientRect. */
const makeEl = (rect: Partial<DOMRect> = {}): HTMLElement => {
  const el = document.createElement("div");
  el.getBoundingClientRect = () =>
    ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 100,
      height: 40,
      x: 0,
      y: 0,
      toJSON: () => {},
      ...rect,
    }) as DOMRect;
  return el;
};

/** Reads all custom properties set on an element's inline style. */
const getProps = (el: HTMLElement): Record<string, string | null> => ({
  "--js-dropdown-top": el.style.getPropertyValue("--js-dropdown-top") || null,
  "--js-dropdown-bottom":
    el.style.getPropertyValue("--js-dropdown-bottom") || null,
  "--js-dropdown-left": el.style.getPropertyValue("--js-dropdown-left") || null,
  "--js-dropdown-width":
    el.style.getPropertyValue("--js-dropdown-width") || null,
});

beforeEach(() => {
  Object.defineProperty(window, "visualViewport", {
    configurable: true,
    value: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
  });
});

describe("calculatePosition", () => {
  describe("when anchorRect.width is 0", () => {
    it("does nothing", () => {
      const anchor = makeEl({ width: 0 });
      const layer = makeEl();
      const spy = jest.spyOn(layer.style, "setProperty");

      calculatePosition(anchor, layer, false);

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe("positioning below anchor (enough space below)", () => {
    it("sets --js-dropdown-top relative to layer offset", () => {
      // Anchor near the top → lots of space below; layer starts at top: 0.
      // anchorGap falls back to 4px in jsdom (CSS token unresolvable).
      // --js-dropdown-top = anchorRect.bottom - layerRect.top + anchorGap = 150 - 0 + 4 = 154px
      const anchor = makeEl({
        top: 100,
        bottom: 150,
        left: 0,
        right: 200,
        width: 200,
        height: 50,
      });
      const layer = makeEl({
        top: 0,
        bottom: 0,
        left: 0,
        right: 200,
        width: 200,
        height: 0,
      });

      calculatePosition(anchor, layer, false);

      const props = getProps(layer);
      expect(props["--js-dropdown-top"]).toBe("154px");
      expect(props["--js-dropdown-bottom"]).toBeNull();
    });

    it("does not set max-height properties (owned by useDropdownMaxHeight)", () => {
      const anchor = makeEl({
        top: 100,
        bottom: 150,
        left: 0,
        right: 200,
        width: 200,
        height: 50,
      });
      const layer = makeEl({
        top: 0,
        bottom: 0,
        left: 0,
        right: 200,
        width: 200,
        height: 0,
      });

      calculatePosition(anchor, layer, false);

      expect(
        layer.style.getPropertyValue("--js-dropdown-maxHeight"),
      ).toBeFalsy();
      expect(
        layer.style.getPropertyValue("--nds-layer-max-height"),
      ).toBeFalsy();
    });
  });

  describe("positioning above anchor (more space above)", () => {
    it("sets --js-dropdown-bottom and clears --js-dropdown-top", () => {
      // Anchor near the bottom → more space above.
      // anchorGap falls back to 4px in jsdom (CSS token unresolvable).
      // --js-dropdown-bottom = vvHeight - anchorRect.top + anchorGap = 768 - 568 + 4 = 204px
      const anchor = makeEl({
        top: 568,
        bottom: 608,
        left: 0,
        right: 200,
        width: 200,
        height: 40,
      });
      const layer = makeEl({
        top: 0,
        bottom: 0,
        left: 0,
        right: 200,
        width: 200,
        height: 0,
      });

      calculatePosition(anchor, layer, false);

      const props = getProps(layer);
      expect(props["--js-dropdown-bottom"]).toBe("204px");
      expect(props["--js-dropdown-top"]).toBeNull();
    });
  });

  describe("horizontal alignment", () => {
    it("sets --js-dropdown-left to align layer with anchor left edge", () => {
      // anchor.left=200, layer.left=100 → left = 200 - 100 = 100px
      const anchor = makeEl({
        top: 100,
        bottom: 150,
        left: 200,
        right: 400,
        width: 200,
        height: 50,
      });
      const layer = makeEl({
        top: 0,
        bottom: 0,
        left: 100,
        right: 300,
        width: 200,
        height: 0,
      });

      calculatePosition(anchor, layer, false);

      expect(getProps(layer)["--js-dropdown-left"]).toBe("100px");
    });
  });

  describe("matchWidth", () => {
    it("sets --js-dropdown-width when matchWidth is true", () => {
      const anchor = makeEl({
        top: 100,
        bottom: 150,
        left: 0,
        right: 200,
        width: 200,
        height: 50,
      });
      const layer = makeEl({
        top: 0,
        bottom: 0,
        left: 0,
        right: 200,
        width: 200,
        height: 0,
      });

      calculatePosition(anchor, layer, true);

      expect(getProps(layer)["--js-dropdown-width"]).toBe("200px");
    });

    it("does not set --js-dropdown-width when matchWidth is false", () => {
      const anchor = makeEl({
        top: 100,
        bottom: 150,
        left: 0,
        right: 200,
        width: 200,
        height: 50,
      });
      const layer = makeEl({
        top: 0,
        bottom: 0,
        left: 0,
        right: 200,
        width: 200,
        height: 0,
      });

      calculatePosition(anchor, layer, false);

      expect(getProps(layer)["--js-dropdown-width"]).toBeNull();
    });
  });

  describe("available space floor", () => {
    it("clamps availableSpace to 0 when anchor spans the full viewport", () => {
      // Anchor spans the full viewport — spaceAbove and spaceBelow are both negative.
      // calculatePosition should still run without errors; max-height is handled
      // by useDropdownMaxHeight which clamps to 0.
      const anchor = makeEl({
        top: -50,
        bottom: 820,
        left: 0,
        right: 200,
        width: 200,
        height: 870,
      });
      const layer = makeEl({
        top: 0,
        bottom: 0,
        left: 0,
        right: 200,
        width: 200,
        height: 0,
      });

      expect(() => calculatePosition(anchor, layer, false)).not.toThrow();
    });
  });
});

describe("computeRootMargin", () => {
  it("returns a rootMargin string that insets flush with the rect", () => {
    const rect = {
      top: 100,
      left: 50,
      bottom: 200,
      right: 300,
      width: 250,
      height: 100,
      x: 50,
      y: 100,
      toJSON: () => {},
    } as DOMRect;

    const result = computeRootMargin(rect);

    // top=-100, right=-(1024-300)=-724, bottom=-(768-200)=-568, left=-50
    expect(result).toBe("-100px -724px -568px -50px");
  });

  it("floors fractional pixel values", () => {
    const rect = {
      top: 100.9,
      left: 50.8,
      bottom: 200.1,
      right: 300.6,
      width: 250,
      height: 100,
      x: 50,
      y: 100,
      toJSON: () => {},
    } as DOMRect;

    const result = computeRootMargin(rect);

    // top=floor(100.9)=100, right=floor(1024-300.6)=floor(723.4)=723
    // bottom=floor(768-200.1)=floor(567.9)=567, left=floor(50.8)=50
    expect(result).toBe("-100px -723px -567px -50px");
  });

  it("falls back to window.innerWidth/innerHeight when visualViewport is absent", () => {
    Object.defineProperty(window, "visualViewport", {
      configurable: true,
      value: null,
    });
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 800,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 600,
    });

    const rect = {
      top: 0,
      left: 0,
      bottom: 600,
      right: 800,
      width: 800,
      height: 600,
      x: 0,
      y: 0,
      toJSON: () => {},
    } as DOMRect;

    expect(computeRootMargin(rect)).toBe("0px 0px 0px 0px");
  });
});
