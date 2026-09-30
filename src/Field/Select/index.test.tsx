import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FieldSelect } from "./index";
import FieldSelectItem from "./SelectItem";

/**
 * Focused on the shared field scaffolding — label wiring, helper text and the
 * error live region — which is what `FieldErrors` now owns on this component's
 * behalf. Keyboard navigation and dropdown positioning are covered by the
 * Storybook play functions.
 */
describe("Field.Select", () => {
  const renderField = (
    props: Partial<React.ComponentProps<typeof FieldSelect>> = {},
  ) =>
    render(
      <FieldSelect label="Country" value="" onChange={() => {}} {...props}>
        <FieldSelectItem value="us">United States</FieldSelectItem>
        <FieldSelectItem value="ca">Canada</FieldSelectItem>
      </FieldSelect>,
    );

  const errorRegion = (container: HTMLElement) =>
    container.querySelector(".nds-field-errors") as HTMLElement;

  it("renders the selected value", () => {
    renderField({ value: "ca" });
    expect(screen.getByText("Canada")).toBeInTheDocument();
  });

  it("renders the placeholder when nothing is selected", () => {
    renderField({ placeholder: "Choose one" });
    expect(screen.getByText("Choose one")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    renderField({ renderHelperText: () => <span>Where you bank</span> });
    expect(screen.getByText("Where you bank")).toBeInTheDocument();
  });

  it("opens and selects an item", async () => {
    const onChange = vi.fn();
    renderField({ onChange });

    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("United States"));

    expect(onChange).toHaveBeenCalledWith("us");
  });

  describe("error region", () => {
    // The region's own contract lives in `src/Field/Errors`. What matters
    // here is that Field.Select feeds it and points the control at it —
    // the control being a button, not an input.
    it("renders errors and wires the control to them", () => {
      const { container } = renderField({
        id: "country",
        errors: ["Required"],
      });
      const control = screen.getByRole("combobox");

      expect(errorRegion(container)).toHaveTextContent("Required");
      expect(control).toHaveAttribute("aria-invalid", "true");
      expect(control).toHaveAttribute("aria-describedby", "country-error");
    });

    it("sets the error class on the root", () => {
      const { container } = renderField({ errors: ["Required"] });
      expect(container.querySelector(".nds-field")).toHaveClass(
        "nds-field--hasError",
      );
    });
  });

  it("disables the control", () => {
    const { container } = renderField({ isDisabled: true });

    expect(screen.getByRole("combobox")).toBeDisabled();
    expect(container.querySelector(".nds-field")).toHaveClass(
      "nds-field--isDisabled",
    );
  });
});
