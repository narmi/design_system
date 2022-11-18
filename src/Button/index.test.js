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
    expect(button).not.toHaveAttribute("role", "button"); // should be a button element
    expect(button).toHaveClass("nds-button--primary");
    expect(button).toHaveClass("resetButton");
  });

  it("has expected classes for primary button as='a'", () => {
    render(<Button as="a" label={LABEL} />);
    const button = getButton();
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("resetButton");
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

  it("applies correct attribute for `disabled` when as='button'", () => {
    render(<Button as="button" label={LABEL} disabled={true} />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--disabled");
    expect(button).toHaveAttribute("disabled");
  });

  it("has expected classes for `xs` size", () => {
    render(<Button label={LABEL} size="xs" />);
    const button = getButton();
    expect(button).toHaveClass("fontSize--xs");
  });

  it("has expected classes for `s` size", () => {
    render(<Button label={LABEL} size="s" />);
    const button = getButton();
    expect(button).toHaveClass("fontSize--s");
  });

  it("has expected classes for `m` size", () => {
    render(<Button label={LABEL} size="m" />);
    const button = getButton();
    expect(button).toHaveClass("fontSize--m");
  });

  it("has expected classes for `l` size", () => {
    render(<Button label={LABEL} size="l" />);
    const button = getButton();
    expect(button).toHaveClass("fontSize--l");
  });

  it("has expected classes for secondary button", () => {
    render(<Button label={LABEL} kind="secondary" />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--secondary");
  });

  it("has expected classes for menu button", () => {
    render(<Button label={LABEL} kind="menu" />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--menu");
  });

  it("has expected classes for plain button", () => {
    render(<Button label={LABEL} kind="plain" />);
    const button = getButton();
    expect(button).toHaveClass("nds-button--plain");
  });

  it("renders startIcon when passed", () => {
    const iconName = "anchor";
    render(<Button label={LABEL} startIcon={iconName} />);
    const icon = screen.getByLabelText(iconName);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass(`narmi-icon-${iconName}`);
  });

  it("renders endIcon when passed", () => {
    const iconName = "star";
    render(<Button label={LABEL} endIcon={iconName} />);
    const icon = screen.getByLabelText(iconName);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass(`narmi-icon-${iconName}`);
  });
});
