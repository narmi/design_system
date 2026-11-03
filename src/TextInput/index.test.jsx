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
    it("links the error message to the input via aria-describedby", () => {
      render(<TextInput id="first" label="First name" error="Required" />);
      const input = screen.getByLabelText("First name");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveAttribute("aria-describedby", "first-error");
      expect(input).toHaveAttribute("data-error", "Required");
      expect(input).toHaveAccessibleDescription("Required");
    });

    it("links the error message to the textarea via aria-describedby", () => {
      render(<TextInput id="notes" label="Notes" error="Required" multiline />);
      const textarea = screen.getByLabelText("Notes");
      expect(textarea).toHaveAttribute("aria-invalid", "true");
      expect(textarea).toHaveAttribute("aria-describedby", "notes-error");
      expect(textarea).toHaveAccessibleDescription("Required");
    });

    it("generates an error id when the input has no id", () => {
      render(<TextInput label="First name" error="Required" />);
      const input = screen.getByLabelText("First name");
      const errorId = input.getAttribute("aria-describedby");
      expect(errorId).toBeTruthy();
      expect(document.getElementById(errorId)).toHaveTextContent("Required");
    });

    it("describes the input with every error in a list", () => {
      render(
        <TextInput
          id="first"
          label="First name"
          error={["Required", "Too short"]}
        />,
      );
      expect(screen.getByLabelText("First name")).toHaveAccessibleDescription(
        "Required Too short",
      );
    });

    it("omits aria-invalid and aria-describedby when there is no error", () => {
      render(<TextInput id="first" label="First name" />);
      const input = screen.getByLabelText("First name");
      expect(input).not.toHaveAttribute("aria-invalid");
      expect(input).not.toHaveAttribute("aria-describedby");
    });

    it("keeps aria-invalid but drops aria-describedby when renderError is false", () => {
      render(
        <TextInput
          id="first"
          label="First name"
          error="Required"
          renderError={false}
        />,
      );
      const input = screen.getByLabelText("First name");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).not.toHaveAttribute("aria-describedby");
    });

    it("points aria-describedby at the error over a consumer-supplied value", () => {
      render(
        <TextInput
          id="first"
          label="First name"
          error="Required"
          aria-describedby="hint"
        />,
      );
      expect(screen.getByLabelText("First name")).toHaveAttribute(
        "aria-describedby",
        "first-error",
      );
    });

    it("keeps consumer-supplied aria attributes when there is no error", () => {
      render(
        <TextInput
          id="first"
          label="First name"
          aria-invalid
          aria-describedby="hint"
        />,
      );
      const input = screen.getByLabelText("First name");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveAttribute("aria-describedby", "hint");
    });
  });
});
