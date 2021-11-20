import React from "react";
import { render, container } from "@testing-library/react";
import Row, { VALID_GAP_SIZES } from "./";

describe("Row, RowItem", () => {
  it("Row has correct class according to `gapSize` prop", () => {
    VALID_GAP_SIZES.forEach((size) => {
      render(<Row gapSize={size} />);
      expect(container.firstChild).toHaveClass(`nds-row--${size}Gap`);
    });
  });

  it("RowItem has correct class according to `shrink` prop", () => {
    render(<Row.Item shrink />);
    expect(container.firstChild).toHaveClass("nds-row-item--shrink");
  });
});
