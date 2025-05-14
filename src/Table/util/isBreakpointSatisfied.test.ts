import { isBreakpointSatisfied } from "./isBreakpointSatisfied";

describe("isBreakpointSatisfied", () => {
  it("should always return true with minRequired is a wildcard", () => {
    expect(isBreakpointSatisfied("*", "s")).toBe(true);
    expect(isBreakpointSatisfied("*", "m")).toBe(true);
    expect(isBreakpointSatisfied("*", "l")).toBe(true);
  });
  it("should return false when minRequired is below current breakpoint", () => {
    expect(isBreakpointSatisfied("s", "m")).toBe(false);
    expect(isBreakpointSatisfied("m", "l")).toBe(false);
  });
  it("should return true when viewport is larger than minRequired", () => {
    expect(isBreakpointSatisfied("s", "m")).toBe(true);
    expect(isBreakpointSatisfied("s", "l")).toBe(true);
    expect(isBreakpointSatisfied("m", "l")).toBe(true);
  });
});
