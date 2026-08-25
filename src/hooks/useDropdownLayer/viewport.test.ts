import { getVisibleBounds, getAvailableSpace } from "./viewport";

const setViewport = ({
  innerHeight,
  visualViewport,
}: {
  innerHeight: number;
  visualViewport: { height: number; offsetTop: number } | null;
}) => {
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: innerHeight,
  });
  Object.defineProperty(window, "visualViewport", {
    configurable: true,
    value: visualViewport,
  });
};

describe("getVisibleBounds", () => {
  it("coincides with the layout viewport when there is no keyboard or zoom", () => {
    setViewport({
      innerHeight: 768,
      visualViewport: { height: 768, offsetTop: 0 },
    });

    expect(getVisibleBounds()).toEqual({
      top: 0,
      bottom: 768,
      layoutHeight: 768,
    });
  });

  it("shrinks the visible bottom when the soft keyboard is open", () => {
    setViewport({
      innerHeight: 768,
      visualViewport: { height: 400, offsetTop: 0 },
    });

    expect(getVisibleBounds()).toEqual({
      top: 0,
      bottom: 400,
      layoutHeight: 768,
    });
  });

  it("offsets the visible region when the visual viewport is panned", () => {
    setViewport({
      innerHeight: 768,
      visualViewport: { height: 400, offsetTop: 200 },
    });

    expect(getVisibleBounds()).toEqual({
      top: 200,
      bottom: 600,
      layoutHeight: 768,
    });
  });

  it("falls back to the layout viewport when visualViewport is unavailable", () => {
    setViewport({ innerHeight: 600, visualViewport: null });

    expect(getVisibleBounds()).toEqual({
      top: 0,
      bottom: 600,
      layoutHeight: 600,
    });
  });
});

describe("getAvailableSpace", () => {
  it("measures space against the visible region, not the layout viewport", () => {
    setViewport({
      innerHeight: 768,
      visualViewport: { height: 400, offsetTop: 0 },
    });

    const { spaceAbove, spaceBelow } = getAvailableSpace(
      { top: 300, bottom: 340 },
      4,
      20,
    );

    // spaceAbove = 300 - 0 - 4 - 20; spaceBelow = 400 - 340 - 4 - 20
    expect(spaceAbove).toBe(276);
    expect(spaceBelow).toBe(36);
  });

  it("accounts for visual viewport pan on both sides", () => {
    setViewport({
      innerHeight: 768,
      visualViewport: { height: 400, offsetTop: 200 },
    });

    const { spaceAbove, spaceBelow } = getAvailableSpace(
      { top: 300, bottom: 340 },
      4,
      20,
    );

    // visible region is 200..600
    expect(spaceAbove).toBe(76);
    expect(spaceBelow).toBe(236);
  });
});
