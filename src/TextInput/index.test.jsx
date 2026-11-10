import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "./";

describe("TextInput", () => {
  it("Basic Test to verify TextInput behaves as an Html input", () => {
    render(
      <TextInput data-testid={1} label={"Label"} defaultValue={"Default"} />,
    );
    const basicInput = screen.getByTestId(1);
    expect(basicInput.value).toEqual("Default");

    fireEvent.change(basicInput, { target: { value: "User input text" } });
    expect(basicInput.value).toEqual("User input text");
  });

  it("Formatter prop test", () => {
    render(
      <TextInput
        id="test"
        label={"Test Quotes"}
        formatter={(text) => text.replace("“", '"').replace("”", '"')}
      />,
    );
    const smartQuoteInput = screen.getByLabelText("Test Quotes");

    fireEvent.change(smartQuoteInput, {
      target: { value: "“this is a test”" },
    });

    expect(smartQuoteInput.value).toBe("“this is a test”");

    fireEvent.blur(smartQuoteInput);

    expect(smartQuoteInput.value).toBe('"this is a test"');
  });

  it("No Formatter prop test", () => {
    render(<TextInput id="test" label={"Test Quotes"} />);
    const basicInput = screen.getByLabelText("Test Quotes");

    fireEvent.change(basicInput, { target: { value: "“this is a test”" } });

    expect(basicInput.value).toBe("“this is a test”");
  });

  it("multiline with label sets placeholder attribute", () => {
    render(<TextInput label={"Label"} multiline />);
    const multilineInput = screen.getByPlaceholderText("Label");
    expect(multilineInput).toBeInTheDocument();
  });

  it("uses the default multiline maxLines value", () => {
    render(<TextInput label={"Label"} multiline />);
    const multilineInput = screen.getByLabelText("Label");
    const multilineGrid = multilineInput.closest(".nds-input-multiline-grid");

    expect(multilineGrid).not.toBeNull();
    expect(multilineGrid.style.getPropertyValue("--nds-input-max-lines")).toBe(
      "8",
    );
  });

  it("uses a custom multiline maxLines value", () => {
    render(<TextInput label={"Label"} multiline maxLines={4} />);
    const multilineInput = screen.getByLabelText("Label");
    const multilineGrid = multilineInput.closest(".nds-input-multiline-grid");

    expect(multilineGrid).not.toBeNull();
    expect(multilineGrid.style.getPropertyValue("--nds-input-max-lines")).toBe(
      "4",
    );
  });

  describe("error accessibility", () => {
    it("describes the input with its error message", () => {
      render(<TextInput id="first" label="First name" error="Required" />);
      const input = screen.getByLabelText("First name");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveAttribute("aria-describedby", "first-error");
      expect(input).toHaveAccessibleDescription("Required");
      // e2e tests rely on data-error (NDS-839)
      expect(input).toHaveAttribute("data-error", "Required");
    });

    it("describes the textarea with its error message", () => {
      render(<TextInput label="Notes" error="Required" multiline />);
      const textarea = screen.getByLabelText("Notes");
      expect(textarea).toHaveAttribute("aria-invalid", "true");
      expect(textarea).toHaveAccessibleDescription("Required");
    });

    it("links the error when the input has no id", () => {
      render(<TextInput label="First name" error="Required" />);
      expect(screen.getByLabelText("First name")).toHaveAccessibleDescription(
        "Required",
      );
    });

    it("describes the input with every error in a list", () => {
      render(
        <TextInput label="First name" error={["Required", "Too short"]} />,
      );
      expect(screen.getByLabelText("First name")).toHaveAccessibleDescription(
        "Required Too short",
      );
    });

    it("describes the input with the character limit error", () => {
      render(<TextInput label="Code" maxLength={3} defaultValue="12345" />);
      const input = screen.getByLabelText("Code");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveAccessibleDescription("Exceeds character limits.");
    });

    it("keeps a consumer-supplied description alongside the error", () => {
      render(
        <>
          <TextInput
            id="first"
            label="First name"
            error="Required"
            aria-describedby="hint"
          />
          <p id="hint">As shown on your ID</p>
        </>,
      );
      expect(screen.getByLabelText("First name")).toHaveAccessibleDescription(
        "As shown on your ID Required",
      );
    });

    it("adds nothing when there is no error", () => {
      render(<TextInput label="First name" aria-describedby="hint" />);
      const input = screen.getByLabelText("First name");
      expect(input).not.toHaveAttribute("aria-invalid");
      expect(input).toHaveAttribute("aria-describedby", "hint");
    });

    it("marks the input invalid without a description when renderError is false", () => {
      render(
        <TextInput label="First name" error="Required" renderError={false} />,
      );
      const input = screen.getByLabelText("First name");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).not.toHaveAttribute("aria-describedby");
    });
  });
});
