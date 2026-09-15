import React from "react";
import { render, screen } from "@testing-library/react";
import Chip from "./";

describe("Chip", () => {
  it("renders the label as non-selectable by default", () => {
    render(<Chip label="Status" />);
    const label = screen.getByText("Status");
    expect(label).toHaveClass("nds-chip-label");
    expect(label).not.toHaveClass("nds-chip-label--selectable");
  });

  it("makes the label selectable when isLabelSelectable is true", () => {
    render(<Chip label="Unknown Error" isLabelSelectable />);
    const label = screen.getByText("Unknown Error");
    expect(label).toHaveClass("nds-chip-label--selectable");
  });
});
