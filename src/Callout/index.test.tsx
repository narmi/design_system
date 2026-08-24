import React from "react";
import { render, screen } from "@testing-library/react";
import { Callout } from "./";

describe("Callout", () => {
  it("renders detailList labels and descriptions", () => {
    render(
      <Callout
        detailList={[
          { label: "Amount", description: "$1,250.00" },
          { label: "Account", description: "Checking 1234" },
        ]}
      />,
    );
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("$1,250.00")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Checking 1234")).toBeInTheDocument();
  });

  it("renders a label without a description", () => {
    const { container } = render(
      <Callout detailList={[{ label: "Submitted for review" }]} />,
    );
    expect(screen.getByText("Submitted for review")).toBeInTheDocument();
    expect(container.querySelectorAll(".nds-callout-list > li")).toHaveLength(
      1,
    );
  });

  it("applies the expected callout classes", () => {
    const { container } = render(
      <Callout detailList={[{ label: "Amount" }]} />,
    );
    expect(container.querySelector(".nds-callout")).toBeInTheDocument();
    expect(container.querySelector(".nds-callout-content")).toBeInTheDocument();
    expect(container.querySelector(".nds-callout-list")).toBeInTheDocument();
  });

  it("renders custom content via renderContent and skips the list", () => {
    const { container } = render(
      <Callout
        detailList={[{ label: "Ignored" }]}
        renderContent={() => <div>Custom content</div>}
      />,
    );
    expect(screen.getByText("Custom content")).toBeInTheDocument();
    expect(screen.queryByText("Ignored")).not.toBeInTheDocument();
    expect(
      container.querySelector(".nds-callout-list"),
    ).not.toBeInTheDocument();
  });

  it("renders an empty list when no detailList is provided", () => {
    const { container } = render(<Callout />);
    expect(container.querySelector(".nds-callout-list")).toBeInTheDocument();
    expect(container.querySelectorAll(".nds-callout-list > li")).toHaveLength(
      0,
    );
  });
});
