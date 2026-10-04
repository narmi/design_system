import React, { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FieldCombobox } from "./index";
import FieldComboboxItem from "./ComboboxItem";

const STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
];

type FieldProps = React.ComponentProps<typeof FieldCombobox>;

/** Holds `value` in state, like a real form would */
const ControlledField = ({
  value: initialValue = "",
  onChange,
  ...props
}: Partial<FieldProps>) => {
  const [value, setValue] = useState(initialValue);
  return (
    <FieldCombobox
      label="State"
      value={value}
      onChange={(next) => {
        setValue(next);
        onChange?.(next);
      }}
      {...props}
    >
      {STATES.map(({ value, label }) => (
        <FieldComboboxItem key={value} value={value}>
          {label}
        </FieldComboboxItem>
      ))}
    </FieldCombobox>
  );
};

describe("Field.Combobox", () => {
  const renderField = (props: Partial<FieldProps> = {}) => {
    const onChange = vi.fn();
    const result = render(<ControlledField onChange={onChange} {...props} />);
    return { ...result, onChange, input: screen.getByRole("combobox") };
  };

  it("binds the label to the input", () => {
    const { input } = renderField({ id: "state" });

    expect(input.id).toBe("state");
    expect(screen.getByRole("combobox", { name: "State" })).toBe(input);
  });

  it("shows the selected item's text", () => {
    const { input } = renderField({ value: "CA" });
    expect(input).toHaveValue("California");
  });

  it("filters the options to what the user types", async () => {
    const { input } = renderField();

    await userEvent.type(input, "al");

    expect(
      screen.getAllByRole("option").map((option) => option.textContent),
    ).toEqual(["Alabama", "Alaska"]);
  });

  it("selects an option on click", async () => {
    const { input, onChange } = renderField();

    await userEvent.click(input);
    await userEvent.click(screen.getByRole("option", { name: "Colorado" }));

    expect(onChange).toHaveBeenCalledWith("CO");
    expect(input).toHaveValue("Colorado");
  });

  it("keeps the menu open and the text when clicking back into the input", async () => {
    const { input } = renderField();

    await userEvent.type(input, "al");
    await userEvent.click(input);

    expect(input).toHaveValue("al");
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  describe("typing then leaving the field", () => {
    it("selects the first match on Tab", async () => {
      const { input, onChange } = renderField();

      await userEvent.type(input, "co");
      await userEvent.tab();

      expect(onChange).toHaveBeenCalledWith("CO");
      expect(input).toHaveValue("Colorado");
    });

    it("selects the first match on Enter", async () => {
      const { input, onChange } = renderField();

      await userEvent.type(input, "ala{Enter}");

      expect(onChange).toHaveBeenCalledWith("AL");
      expect(input).toHaveValue("Alabama");
    });

    it("selects the first match on click-away", async () => {
      const { input, onChange } = renderField();

      await userEvent.type(input, "cal");
      await userEvent.click(document.body);

      expect(onChange).toHaveBeenCalledWith("CA");
      expect(input).toHaveValue("California");
    });

    it("selects the first match after the mouse leaves the list", async () => {
      const { input, onChange } = renderField();

      await userEvent.type(input, "a");
      await userEvent.hover(screen.getByRole("option", { name: "Alaska" }));
      await userEvent.unhover(screen.getByRole("listbox"));
      await userEvent.tab();

      expect(onChange).toHaveBeenCalledWith("AL");
    });

    it("puts back the selection when nothing matches", async () => {
      const { input, onChange } = renderField({ value: "CA" });

      await userEvent.clear(input);
      await userEvent.type(input, "zz");
      await userEvent.tab();

      expect(onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue("California");
    });

    it("clears the selection when the input is emptied", async () => {
      const { input, onChange } = renderField({ value: "CA" });

      await userEvent.clear(input);
      await userEvent.tab();

      expect(onChange).toHaveBeenCalledWith("");
      expect(input).toHaveValue("");
    });

    it("clears the selection when the input is emptied and Enter is pressed", async () => {
      const { input, onChange } = renderField({ value: "CA" });

      await userEvent.clear(input);
      await userEvent.keyboard("{Enter}");

      expect(onChange).toHaveBeenCalledWith("");
      expect(input).toHaveValue("");
    });
  });

  it("keeps the selection on Escape when the menu is closed", async () => {
    const { input, onChange } = renderField({ value: "CA" });

    await userEvent.tab();
    await userEvent.keyboard("{Escape}");

    expect(input).toHaveFocus();
    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue("California");
  });

  describe("props changing while the menu is open", () => {
    const renderWithProps = (value: string, states = STATES) => {
      const onChange = vi.fn();
      const field = (nextValue: string, nextStates: typeof STATES) => (
        <FieldCombobox label="State" value={nextValue} onChange={onChange}>
          {nextStates.map(({ value, label }) => (
            <FieldComboboxItem key={value} value={value}>
              {label}
            </FieldComboboxItem>
          ))}
        </FieldCombobox>
      );
      const { rerender } = render(field(value, states));
      return {
        onChange,
        input: screen.getByRole("combobox"),
        rerender: (nextValue: string, nextStates = states) =>
          rerender(field(nextValue, nextStates)),
      };
    };

    it("doesn't undo a new value from the parent", async () => {
      const { input, onChange, rerender } = renderWithProps("CA");

      await userEvent.click(input);
      rerender("AK");
      await userEvent.click(document.body);

      expect(onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue("Alaska");
    });

    it("doesn't select a different option when the options change", async () => {
      const { input, onChange, rerender } = renderWithProps("CO");

      await userEvent.click(input);
      rerender("CO", [{ value: "AZ", label: "Arizona" }, ...STATES]);
      await userEvent.click(document.body);

      expect(onChange).not.toHaveBeenCalled();
      expect(input).toHaveValue("Colorado");
    });

    it("doesn't select a different option when an option is renamed", async () => {
      const alStates = [
        { value: "AL", label: "Alabama" },
        { value: "AK", label: "Alaska" },
        { value: "AB", label: "Alberta" },
      ];
      const { input, onChange, rerender } = renderWithProps("", alStates);

      await userEvent.type(input, "al{ArrowDown}");
      rerender("", [{ value: "AL", label: "Florida" }, ...alStates.slice(1)]);
      await userEvent.tab();

      expect(onChange).toHaveBeenCalledWith("AK");
    });

    it("shows the selection again when the parent rejects a change", async () => {
      const { input, onChange } = renderWithProps("CA");

      await userEvent.click(input);
      await userEvent.click(screen.getByRole("option", { name: "Alabama" }));

      expect(onChange).toHaveBeenCalledWith("AL");
      expect(input).toHaveValue("California");
    });

    it("shows the new text when the selected option is renamed", async () => {
      const { input, rerender } = renderWithProps("CA");

      rerender(
        "CA",
        STATES.map((state) =>
          state.value === "CA" ? { ...state, label: "Calif." } : state,
        ),
      );

      await waitFor(() => expect(input).toHaveValue("Calif."));
    });
  });

  it("renders errors and wires the input to them", () => {
    const { container, input } = renderField({
      id: "state",
      errors: ["Required"],
    });

    expect(container.querySelector(".nds-field-errors")).toHaveTextContent(
      "Required",
    );
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", "state-error");
  });

  it("disables the input", () => {
    const { input } = renderField({ isDisabled: true });
    expect(input).toBeDisabled();
  });

  it("closes the menu when the field is disabled while open", async () => {
    const { input, rerender } = renderField();

    await userEvent.click(input);
    rerender(<ControlledField isDisabled />);

    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });

  it("tells screen readers the menu is closed when nothing matches", async () => {
    const { input } = renderField();

    await userEvent.type(input, "zz");

    expect(input).toHaveAttribute("aria-expanded", "false");
  });
});
