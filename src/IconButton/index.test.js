import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IconButton from "./";

const getIconButton = () => screen.getByTestId("nds-icon-button");

const LABEL = "info";

describe("IconButton", () => {
  it("has correct attributes for default props", () => {
    render(<IconButton label={LABEL} name="info" />);
    const iconButton = getIconButton();
    expect(iconButton).toBeInTheDocument();
    expect(iconButton).toHaveClass("nds-icon-button--plain");
  });

  it("fires click callback", () => {
    const handleClick = jest.fn();
    render(<IconButton label={LABEL} name="info" onClick={handleClick} />);
    const iconButton = getIconButton();
    expect(handleClick).not.toHaveBeenCalled();
    fireEvent.click(iconButton);
    expect(handleClick).toHaveBeenCalled();
  });

  it("applies correct styling for `disabled`", () => {
    render(<IconButton label={LABEL} name="info" disabled={true} />);
    const iconButton = getIconButton();
    expect(iconButton).toHaveClass("nds-icon-button--disabled");
  });

  it.each(["xs", "s", "m", "l"])(
    "has expected classes for `%s` size",
    (size) => {
      render(<IconButton label={LABEL} name="info" size={size} />);
      const iconButton = getIconButton();
      expect(iconButton).toHaveClass(`fontSize--${size}`);
    }
  );

  it.each(["plain", "primary", "secondary"])(
    "has expected classes for %s button",
    (kind) => {
      render(<IconButton label={LABEL} name="info" kind={kind} />);
      const iconButton = getIconButton();
      expect(iconButton).toHaveClass(`nds-icon-button--${kind}`);
    }
  );
});
