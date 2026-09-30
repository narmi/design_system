import React from "react";
import { render, screen } from "@testing-library/react";
import { FieldText } from "./index";

/**
 * Focused on the shared field scaffolding — label wiring, helper text and the
 * error live region — which is what `FieldErrors` now owns on this component's
 * behalf. Input behaviour and masking are covered by the Storybook play
 * functions.
 */
describe("Field.Text", () => {
  const renderField = (
    props: Partial<React.ComponentProps<typeof FieldText>> = {},
  ) =>
    render(
      <FieldText label="Amount" value="" onChange={() => {}} {...props} />,
    );

  const errorRegion = (container: HTMLElement) =>
    container.querySelector(".nds-field-errors") as HTMLElement;

  const getInput = (container: HTMLElement) =>
    container.querySelector("input") as HTMLInputElement;

  it("binds the label to the input", () => {
    const { container } = renderField({ id: "amount" });

    expect(getInput(container).id).toBe("amount");
    expect(screen.getByLabelText("Amount")).toBe(getInput(container));
  });

  it("renders helper text", () => {
    renderField({ renderHelperText: () => <span>Up to $500</span> });
    expect(screen.getByText("Up to $500")).toBeInTheDocument();
  });

  describe("error region", () => {
    // The region's own contract lives in `src/Field/Errors`. What matters
    // here is that Field.Text feeds it and points the input at it.
    it("renders errors and wires the input to them", () => {
      const { container } = renderField({ id: "amount", errors: ["Required"] });
      const input = getInput(container);

      expect(errorRegion(container)).toHaveTextContent("Required");
      expect(input).toHaveAttribute("aria-invalid", "true");
      expect(input).toHaveAttribute("aria-describedby", "amount-error");
    });

    it("sets the error class on the root", () => {
      const { container } = renderField({ errors: ["Required"] });
      expect(container.querySelector(".nds-field")).toHaveClass(
        "nds-field--hasError",
      );
    });
  });

  it("disables the input", () => {
    const { container } = renderField({ isDisabled: true });

    expect(getInput(container)).toBeDisabled();
    expect(container.querySelector(".nds-field")).toHaveClass(
      "nds-field--isDisabled",
    );
  });
});
