import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderCell from "./HeaderCell";
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
  it("disables collapsed header buttons in animated mode", () => {
    const onClick = vi.fn();

    renderHeaderCell({ isAnimated: true, colVisibility: ["none"], onClick });

    // Collapsed cells stay in the DOM but are `aria-hidden`, which both
    // excludes them from the default accessibility tree and empties their
    // accessible name. Query with `hidden: true` (and no name) to reach the
    // intentionally inaccessible header button.
    const header = screen.getByRole("columnheader", { hidden: true });
    expect(header).toBeDisabled();

    fireEvent.click(header);
    expect(onClick).not.toHaveBeenCalled();
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
