import React from "react";
import { render, screen } from "@testing-library/react";
import Cell from "./Cell";
import Row from "./Row";
import ColVisibilityContext, {
  type ColVisibilityContextProps,
} from "./util/colVisibilityContext";

type Visibility = ColVisibilityContextProps["colVisibility"];

const renderRow = (colVisibility: Visibility, isAnimated = true) => (
  <ColVisibilityContext.Provider
    value={{ currentBreakpoint: "l", colVisibility, isAnimated }}
  >
    <Row>
      <Cell>
        <button type="button">Hidden edit</button>
      </Cell>
      <Cell>
        <button type="button">Visible edit</button>
      </Cell>
    </Row>
  </ColVisibilityContext.Provider>
);

describe("Cell", () => {
  it("makes collapsed cells inert in animated mode", () => {
    render(renderRow(["none", "*"]));

    const [hidden, visible] = screen.getAllByRole("cell", { hidden: true });
    expect(hidden).toHaveAttribute("inert");
    expect(hidden).toHaveAttribute("aria-hidden", "true");
    expect(visible).not.toHaveAttribute("inert");
  });

  it("removes inert when the column is shown again", () => {
    const { rerender } = render(renderRow(["none", "*"]));
    rerender(renderRow(["*", "*"]));

    for (const cell of screen.getAllByRole("cell")) {
      expect(cell).not.toHaveAttribute("inert");
    }
  });

  it("moves focus to a visible control in the row when a focused cell collapses", () => {
    const { rerender } = render(renderRow(["*", "*"]));

    const hiddenEdit = screen.getByRole("button", { name: "Hidden edit" });
    hiddenEdit.focus();
    expect(hiddenEdit).toHaveFocus();

    rerender(renderRow(["none", "*"]));

    expect(screen.getByRole("button", { name: "Visible edit" })).toHaveFocus();
  });

  it("blurs focus when no visible control remains in the row", () => {
    const { rerender } = render(renderRow(["*", "none"]));

    const hiddenEdit = screen.getByRole("button", { name: "Hidden edit" });
    hiddenEdit.focus();

    rerender(renderRow(["none", "none"]));

    expect(document.body).toHaveFocus();
  });
});
