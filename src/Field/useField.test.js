import { renderHook } from "@testing-library/react";
import { useField } from "./useField";

describe("useField", () => {
  it("should generate an id if not provided", () => {
    const { result } = renderHook(() => useField({}));
    expect(result.current.id).toBeTruthy();
    expect(typeof result.current.id).toBe("string");
  });

  it("should use custom id if provided", () => {
    const { result } = renderHook(() => useField({ id: "custom-id" }));
    expect(result.current.id).toBe("custom-id");
  });

  it("should generate errorId based on id", () => {
    const { result } = renderHook(() => useField({ id: "test-field" }));
    expect(result.current.errorId).toBe("test-field-error");
  });

  it("should set hasError to true when errors are present", () => {
    const { result } = renderHook(() =>
      useField({ errors: ["Field is required"] }),
    );
    expect(result.current.hasError).toBe(true);
  });

  it("should set hasError to false when errors are empty", () => {
    const { result } = renderHook(() => useField({ errors: [] }));
    expect(result.current.hasError).toBe(false);
  });

  it("should return correct control props when no errors and not disabled", () => {
    const { result } = renderHook(() =>
      useField({ id: "test", errors: [], isDisabled: false }),
    );

    expect(result.current.controlProps).toEqual({
      id: "test",
      disabled: false,
      "aria-invalid": undefined,
      "aria-describedby": undefined,
    });
  });

  it("should set aria-invalid and aria-describedby when errors exist", () => {
    const { result } = renderHook(() =>
      useField({ id: "test", errors: ["Error 1", "Error 2"] }),
    );

    expect(result.current.controlProps["aria-invalid"]).toBe(true);
    expect(result.current.controlProps["aria-describedby"]).toBe("test-error");
  });

  it("should set disabled in controlProps when isDisabled is true", () => {
    const { result } = renderHook(() =>
      useField({ id: "test", isDisabled: true }),
    );

    expect(result.current.controlProps.disabled).toBe(true);
  });

  it("should handle default parameters correctly", () => {
    const { result } = renderHook(() => useField({}));

    expect(result.current.hasError).toBe(false);
    expect(result.current.controlProps.disabled).toBe(undefined);
    expect(result.current.controlProps["aria-invalid"]).toBe(undefined);
  });

  it("should work with all parameters provided", () => {
    const { result } = renderHook(() =>
      useField({
        id: "complete-field",
        errors: ["Required"],
        isDisabled: true,
      }),
    );

    expect(result.current.id).toBe("complete-field");
    expect(result.current.errorId).toBe("complete-field-error");
    expect(result.current.hasError).toBe(true);
    expect(result.current.controlProps.id).toBe("complete-field");
    expect(result.current.controlProps.disabled).toBe(true);
    expect(result.current.controlProps["aria-invalid"]).toBe(true);
  });
});

describe("useField label orchestration", () => {
  it("derives labelId from the field id", () => {
    const { result } = renderHook(() => useField({ id: "test-field" }));
    expect(result.current.labelId).toBe("test-field-label");
  });

  it("points at the visible label by default", () => {
    const { result } = renderHook(() =>
      useField({ id: "test", label: "Upload a document" }),
    );

    expect(result.current.showLabel).toBe(true);
    expect(result.current.labelProps).toEqual({
      "aria-labelledby": "test-label",
    });
  });

  it("names the control directly when showLabel is false", () => {
    const { result } = renderHook(() =>
      useField({ id: "test", label: "Upload a document", showLabel: false }),
    );

    expect(result.current.showLabel).toBe(false);
    expect(result.current.labelProps).toEqual({
      "aria-label": "Upload a document",
    });
    expect(result.current.labelProps["aria-labelledby"]).toBeUndefined();
  });

  it("still exposes labelId when showLabel is false", () => {
    const { result } = renderHook(() =>
      useField({ id: "test", label: "Upload", showLabel: false }),
    );
    expect(result.current.labelId).toBe("test-label");
  });
});
