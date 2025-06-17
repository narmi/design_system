import { isBreakpointSatisfied } from "./breakpoint";

describe("isBreakpointSatisfied", () => {
  it("should always return true when minRequired is a wildcard", () => {
    expect(isBreakpointSatisfied("*", "s")).toBe(true);
    expect(isBreakpointSatisfied("*", "m")).toBe(true);
    expect(isBreakpointSatisfied("*", "l")).toBe(true);
  });

  it("should return true for wildcard even when viewport is at smallest breakpoint", () => {
    expect(isBreakpointSatisfied("*", "s")).toBe(true);
  });

  it("should return false when minRequired is above current breakpoint", () => {
    expect(isBreakpointSatisfied("m", "s")).toBe(false);
    expect(isBreakpointSatisfied("l", "m")).toBe(false);
  });
  it("should return true when viewport is larger than minRequired", () => {
    expect(isBreakpointSatisfied("s", "m")).toBe(true);
    expect(isBreakpointSatisfied("s", "l")).toBe(true);
    expect(isBreakpointSatisfied("m", "l")).toBe(true);
  });
});
