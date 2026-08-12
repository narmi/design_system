import { isAnchorLayoutValid } from ".";

const anchorRect = {
  width: 100,
  left: 20,
  bottom: 70,
};

describe("isAnchorLayoutValid", () => {
  it("accepts a layer aligned below the anchor", () => {
    expect(
      isAnchorLayoutValid(anchorRect, {
        width: 100,
        left: 20,
        top: 70,
      }),
    ).toBe(true);
  });

  it.each([
    ["width", { width: 0, left: 20, top: 70 }],
    ["horizontal position", { width: 100, left: 0, top: 70 }],
    ["vertical position", { width: 100, left: 20, top: 0 }],
  ])("rejects an incorrect %s", (_description, layerRect) => {
    expect(isAnchorLayoutValid(anchorRect, layerRect)).toBe(false);
  });

  it("allows subpixel layout differences", () => {
    expect(
      isAnchorLayoutValid(anchorRect, {
        width: 99.5,
        left: 20.5,
        top: 70.5,
      }),
    ).toBe(true);
  });
});
