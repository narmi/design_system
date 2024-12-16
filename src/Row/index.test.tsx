import React from "react";
import { render } from "@testing-library/react";
import Row from "./";

describe("Row", () => {
  it("has correct default styles for alignment and gap size", () => {
    const { container } = render(
      <Row>
        <Row.Item />
      </Row>,
    );
    expect(container.firstChild).toHaveStyle("align-items: flex-start");
    expect(container.firstChild).toHaveStyle("justify-content: flex-start");
    expect(container.firstChild).toHaveStyle("gap: var(--space-l)");
  });

  it("has correct override styles for center alignment", () => {
    const { container } = render(
      <Row alignItems="center">
        <Row.Item />
      </Row>,
    );
    expect(container.firstChild).toHaveStyle("align-items: center");
  });

  it("has correct override styles for 'end' justification", () => {
    const { container } = render(
      <Row justifyContent="end">
        <Row.Item />
      </Row>,
    );
    expect(container.firstChild).toHaveStyle("justify-content: flex-end");
  });

  it("has correct override styles for gap shirt size values", () => {
    (["xxs", "xs", "s", "m", "l", "xl"] as const).forEach((size) => {
      const { container } = render(
        <Row gapSize={size}>
          <Row.Item />
        </Row>,
      );
      expect(container.firstChild).toHaveStyle(`gap: var(--space-${size})`);
    });
  });

  it("has correct override styles for 'none' gap size", () => {
    const { container } = render(
      <Row gapSize="none">
        <Row.Item />
      </Row>,
    );
    expect(container.firstChild).toHaveStyle("gap: 0");
  });
});

describe("RowItem", () => {
  it("has shrink variant class when `shrink` is true", () => {
    const { container } = render(<Row.Item shrink />);
    expect(container.firstChild).toHaveClass("nds-row-item--shrink");
  });

  it("does NOT have shrink variant class when `shrink` is false", () => {
    const { container } = render(<Row.Item />);
    expect(container.firstChild).not.toHaveClass("nds-row-item--shrink");
  });
});
