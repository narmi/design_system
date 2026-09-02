import { resolveDropZoneState } from "./state";

describe("resolveDropZoneState", () => {
  it("defaults to undefined with no inputs", () => {
    expect(resolveDropZoneState({})).toBeUndefined();
  });

  it("reports each state in isolation", () => {
    expect(resolveDropZoneState({ isDisabled: true })).toBe("disabled");
    expect(resolveDropZoneState({ isDragActive: true })).toBe("dragActive");
  });

  it("lets disabled beat drag state", () => {
    expect(resolveDropZoneState({ isDisabled: true, isDragActive: true })).toBe(
      "disabled",
    );
  });
});
