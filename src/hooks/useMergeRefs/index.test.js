import { renderHook } from "@testing-library/react";
import { useMergeRefs } from "./index";

describe("useMergeRefs", () => {
  it("should return null when all refs are null/undefined", () => {
    const { result } = renderHook(() => useMergeRefs(null, undefined));
    expect(result.current).toBeNull();
  });

  it("should call function refs with the provided value", () => {
    const ref1 = jest.fn();
    const ref2 = jest.fn();
    const testValue = "test";

    const { result } = renderHook(() => useMergeRefs(ref1, ref2));

    if (typeof result.current === "function") {
      result.current(testValue);
    }

    expect(ref1).toHaveBeenCalledWith(testValue);
    expect(ref2).toHaveBeenCalledWith(testValue);
  });

  it("should set .current property on object refs", () => {
    const ref1 = { current: null };
    const ref2 = { current: null };
    const testValue = "test";

    const { result } = renderHook(() => useMergeRefs(ref1, ref2));

    if (typeof result.current === "function") {
      result.current(testValue);
    }

    expect(ref1.current).toBe(testValue);
    expect(ref2.current).toBe(testValue);
  });

  it("should handle mixed function and object refs", () => {
    const funcRef = jest.fn();
    const objRef = { current: null };
    const testValue = "test";

    const { result } = renderHook(() => useMergeRefs(funcRef, objRef));

    if (typeof result.current === "function") {
      result.current(testValue);
    }

    expect(funcRef).toHaveBeenCalledWith(testValue);
    expect(objRef.current).toBe(testValue);
  });

  it("should skip null/undefined refs in the middle", () => {
    const ref1 = jest.fn();
    const ref2 = jest.fn();
    const testValue = "test";

    const { result } = renderHook(() =>
      useMergeRefs(ref1, null, ref2, undefined),
    );

    if (typeof result.current === "function") {
      result.current(testValue);
    }

    expect(ref1).toHaveBeenCalledWith(testValue);
    expect(ref2).toHaveBeenCalledWith(testValue);
  });
});
