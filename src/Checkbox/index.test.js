import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./";

const LABEL = "test input";

const getElements = () => ({
  label: screen.getByText(LABEL).closest("label"),
  input: screen.getByLabelText(LABEL),
});

describe("Checkbox", () => {
  it("sets correct attributes from `name` and `id`", () => {
    const name = "testName";
    const id = "testId";
    render(<Checkbox label={LABEL} name={name} id={id} />);
    const { input } = getElements();
    expect(input).toHaveAttribute("id", id);
    expect(input).toHaveAttribute("name", name);
  });

  it("renders with expected classes for card kind", () => {
    render(<Checkbox label={LABEL} kind="card" />);
    const { label } = getElements();
    expect(label).toHaveClass("nds-checkbox--card");
    expect(label).toHaveClass("border--all");
  });

  it("changes value on label click", () => {
    render(<Checkbox label={LABEL} />);
    const { label, input } = getElements();
    expect(input).not.toBeChecked();
    expect(label).not.toHaveClass("nds-checkbox--checked");
    fireEvent.click(label);
    expect(input).toBeChecked();
    expect(label).toHaveClass("nds-checkbox--checked");
  });

  it("shows correct initial state for defaultChecked", () => {
    render(<Checkbox label={LABEL} defaultChecked />);
    const { label, input } = getElements();
    expect(input).toBeChecked();
    expect(label).toHaveClass("nds-checkbox--checked");
  });

  it("allows uncontrolled value changes if defaultChecked", () => {
    render(<Checkbox label={LABEL} defaultChecked />);
    const { label, input } = getElements();
    expect(input).toBeChecked();
    expect(label).toHaveClass("nds-checkbox--checked");
    fireEvent.click(input);
    expect(input).not.toBeChecked();
    expect(label).not.toHaveClass("nds-checkbox--checked");
  });

  it("fires onChange callback", () => {
    const handleChange = vi.fn();
    render(<Checkbox label={LABEL} onChange={handleChange} />);
    const { input } = getElements();
    expect(handleChange).not.toHaveBeenCalled();
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalled();
  });

  it("acts as fully controlled component with `checked` prop (no handler)", () => {
    render(<Checkbox label={LABEL} checked={false} />);
    const { input } = getElements();
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    // checkbox should remain unchecked unless the value of `checked` is updated
    expect(input).not.toBeChecked();
  });

  it("acts as fully controlled component with `checked` prop (with handler)", () => {
    const ControlledCheckboxWithHandler = () => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <Checkbox
          label={LABEL}
          checked={isChecked}
          onChange={() => setIsChecked((isChecked) => !isChecked)}
        />
      );
    };
    render(<ControlledCheckboxWithHandler />);
    const { input } = getElements();
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    // handler should update the checked state
    expect(input).toBeChecked();
  });

  it("renders markdown when `markdownLabel` prop is set", () => {
    render(<Checkbox markdownLabel="[Google](https://www.google.com/)" />);
    const a = screen.getByText("Google");
    expect(a.tagName).toBe("A");
  });

  it("renders a custom label element when `renderLabel` prop is set", () => {
    render(
      <Checkbox
        renderLabel={() => <button type="button">Button in a checkbox</button>}
      />,
    );
    const customElement = screen.getByRole("button");
    expect(customElement.innerHTML).toEqual("Button in a checkbox");
  });

  it("`renderLabel` provides the `isChecked` state to its custom element", () => {
    render(
      <Checkbox
        defaultChecked={false}
        renderLabel={(isChecked) => <p>{`checkbox state: ${isChecked}`}</p>}
      />,
    );
    const customElement = screen.getByText(/checkbox state:/);
    expect(customElement).toHaveTextContent("checkbox state: false");

    const input = screen.getByRole("checkbox");
    fireEvent.click(input);

    expect(customElement).toHaveTextContent("checkbox state: true");
  });
});
