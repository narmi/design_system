import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Combobox, { isSelectable } from "./";
import { options_states } from "./util";

const LABEL = "Select your state";
const CHILDREN = options_states.map((state) => (
  <Combobox.Item value={state} key={state}>
    {state}
  </Combobox.Item>
));

describe("Combobox", () => {
  it("isSelectable: detects selectable options correctly", () => {
    expect(isSelectable(<Combobox.Heading text="just a heading" />)).toBe(
      false
    );
    expect(
      isSelectable(
        <Combobox.Item value="selectable item">selectable item</Combobox.Item>
      )
    ).toBe(true);
  });

  it("renders as expected with basic props", () => {
    render(<Combobox label={LABEL}>{CHILDREN}</Combobox>);
    expect(screen.getByText(LABEL)).toBeInTheDocument();
    expect(screen.getByRole("listbox")).toBeEmptyDOMElement();
  });

  it("dropdown opens, selection works, and onChange is fired correctly", () => {
    const handleChange = jest.fn();
    render(
      <Combobox label={LABEL} onChange={handleChange}>
        {CHILDREN}
      </Combobox>
    );

    // open the dropdown
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.click(input);

    // dropdown should be open with state options visible
    const nyItem = screen.getByText("New York");
    expect(nyItem).toBeInTheDocument();

    // clicking the item will make `useCombobox` update the selected item,
    // and our onChange handler should fire with the new value
    fireEvent.click(nyItem);
    expect(handleChange).toHaveBeenCalledWith("New York");
  });

  it("options list is filtered as user types; original list is restored when input is cleared", () => {
    render(<Combobox label={LABEL}>{CHILDREN}</Combobox>);

    // open the dropdown and type in the input
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.click(input);

    // all 50 state options should be visible before the user types
    expect(screen.getAllByRole("option")).toHaveLength(50);

    // "new" in input should filter list to the 4 states beginning with "new"
    fireEvent.change(input, { target: { value: "new" } });
    expect(screen.getAllByRole("option")).toHaveLength(4);

    // if the input is cleared out, and we re-open the dropdown,
    // the original list should be restored
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(input);
    expect(screen.getAllByRole("option")).toHaveLength(50);
  });

  it("input should auto-fill last selection on blur", () => {
    const handleChange = jest.fn();
    render(
      <Combobox label={LABEL} onChange={handleChange}>
        {CHILDREN}
      </Combobox>
    );

    // open the dropdown
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.click(input);

    // dropdown should be open with state options visible
    const nyItem = screen.getByText("New York");

    // clicking the item will make `useCombobox` update the selected item,
    // and our onChange handler should fire with the new value
    fireEvent.click(nyItem);
    expect(handleChange).toHaveBeenCalledWith("New York");

    // user backspaces some of the input, but doesn't totally clear selection
    fireEvent.change(input, { target: { value: "New Y" } });

    // when the user blurs away from the input, it should fill itself with the
    // last selected value (New York)
    fireEvent.blur(input);
    expect(screen.getByDisplayValue("New York")).toBeInTheDocument();
  });

  it("should not update input value in uncontrolled manner when `inputValue` is passed", () => {
    const value = "Initial value unhandled by parent state";
    render(
      <Combobox label={LABEL} inputValue={value}>
        {CHILDREN}
      </Combobox>
    );
    const input = screen.getByPlaceholderText(LABEL);
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "New value" } });
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });
});
