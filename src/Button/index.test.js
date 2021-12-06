import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./";

const LABEL = "Submit";

const getButton = () => screen.getByTestId("nds-button");

describe("Button", () => {
  it("has correct attributes for default props", () => {
    render(<Button label={LABEL} />);
    const button = getButton();
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("role", "button");
    expect(button).toHaveClass("nds-button--primary");
  });

  it("has epxected classes for primary button as='button'", () => {
    render(<Button as="button" label={LABEL} />);
    const button = getButton();
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute("role", "button");
  });

  it("fires click callback as anchor", () => {
    const handleClick = jest.fn();
    render(<Button label={LABEL} onClick={handleClick} />);
    const button = getButton();
    expect(handleClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("applies correct styling for `disabled`", () => {
    render(<Button label={LABEL} disabled={true} />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--disabled");
  });

  it("applies correct attribute for `disabled` when as='butotn'", () => {
    render(<Button as="button" label={LABEL} disabled={true} />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--disabled");
    expect(button).toHaveAttribute("disabled");
  });

  it("has expected classes for secondary button", () => {
    render(<Button label={LABEL} type="secondary" />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--secondary");
  });

  it("has expected classes for menu button", () => {
    render(<Button label={LABEL} type="menu" />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--menu");
  });

  it("has expected classes for plain button", () => {
    render(<Button label={LABEL} type="plain" />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--plain");
  });
});
