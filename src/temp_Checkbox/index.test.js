import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./";

const LABEL = "test input";

const getElements = () => ({
  label: screen.getByText(LABEL),
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

  it("changes value on label click", () => {
    render(<Checkbox label={LABEL} />);
    const { label, input } = getElements();
    expect(input).not.toBeChecked();
    fireEvent.click(label);
    expect(input).toBeChecked();
  });

  it("shows correct initial state for defaultChecked", () => {
    render(<Checkbox label={LABEL} defaultChecked />);
    const { input } = getElements();
    expect(input).toBeChecked();
  });

  it("allows uncontrolled value changes if defaultChecked", () => {
    render(<Checkbox label={LABEL} defaultChecked />);
    const { input } = getElements();
    expect(input).toBeChecked();
    fireEvent.click(input);
    expect(input).not.toBeChecked();
  });

  it("fires onChange callback", () => {
    const handleChange = jest.fn();
    render(<Checkbox label={LABEL} onChange={handleChange} />);
    const { input } = getElements();
    expect(handleChange).not.toHaveBeenCalled();
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalled();
  });
});
