import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderCell from "./HeaderCell";
import Row from "./Row";
import ColVisibilityContext from "./util/colVisibilityContext";

const renderHeaderCell = ({
  isAnimated,
  colVisibility,
  onClick,
}: {
  isAnimated: boolean;
  colVisibility: ["*" | "none"];
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}) =>
  render(
    <ColVisibilityContext.Provider
      value={{ currentBreakpoint: "l", colVisibility, isAnimated }}
    >
      <HeaderCell _colIndex={0} onClick={onClick}>
        Actions
      </HeaderCell>
    </ColVisibilityContext.Provider>,
  );

describe("HeaderCell", () => {
  it("makes collapsed header buttons inert in animated mode", () => {
    renderHeaderCell({ isAnimated: true, colVisibility: ["none"] });

    // Collapsed cells stay in the DOM but are `aria-hidden`, which both
    // excludes them from the default accessibility tree and empties their
    // accessible name. Query with `hidden: true` (and no name) to reach the
    // intentionally inaccessible header button.
    expect(screen.getByRole("columnheader", { hidden: true })).toHaveAttribute(
      "inert",
    );
  });

  it("moves focus to a visible header in the row when a focused header collapses", () => {
    const renderRow = (colVisibility: Array<"*" | "none">) => (
      <ColVisibilityContext.Provider
        value={{ currentBreakpoint: "l", colVisibility, isAnimated: true }}
      >
        <Row>
          <HeaderCell onClick={() => {}}>Hidden sort</HeaderCell>
          <HeaderCell onClick={() => {}}>Visible sort</HeaderCell>
        </Row>
      </ColVisibilityContext.Provider>
    );
    const { rerender } = render(renderRow(["*", "*"]));

    screen.getByRole("columnheader", { name: "Hidden sort" }).focus();
    rerender(renderRow(["none", "*"]));

    expect(
      screen.getByRole("columnheader", { name: "Visible sort" }),
    ).toHaveFocus();
  });

  it("keeps visible header buttons interactive", () => {
    const onClick = vi.fn();

    renderHeaderCell({ isAnimated: true, colVisibility: ["*"], onClick });

    const header = screen.getByRole("columnheader", { name: "Actions" });
    expect(header).not.toBeDisabled();

    fireEvent.click(header);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
