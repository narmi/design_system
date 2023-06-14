import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IconButton from "./";

const getIconButton = () => screen.getByTestId("nds-icon-button");

describe("IconButton", () => {
  it("has correct attributes for default props", () => {
    render(<IconButton label={LABEL} />);
    const iconButton = getIconButton();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("nds-icon-button--plain");
  });

  it("fires click callback", () => {
    const handleClick = jest.fn();
    render(<IconButton label={LABEL} onClick={handleClick} />);
    const iconButton = getIconButton();
    expect(handleClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("applies correct styling for `disabled`", () => {
    render(<IconButton label={LABEL} disabled={true} />);
    const iconButton = getIconButton();
    expect(button).toHaveClass("nds-icon-button--disabled");
  });

  it.each(["xs", "s", "m", "l"])(
    "has expected classes for `%s` size",
    (size) => {
      render(<IconButton label={LABEL} size={size} />);
      const iconButton = getIconButton();
      expect(button).toHaveClass(`fontSize--${size}`);
    }
  );

  it.each(["plain", "primary", "secondary"])(
    "has expected classes for %s button",
    (kind) => {
      render(<IconButton label={LABEL} kind={kind} />);
      const iconButton = getIconButton();
      expect(button).toHaveClass(`nds-button--${kind}`);
    }
  );
});
