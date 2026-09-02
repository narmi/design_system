import React from "react";
import { render, screen } from "@testing-library/react";
import TimelineEvent from "./";

describe("TimelineEvent", () => {
  it("renders children content", () => {
    render(<TimelineEvent>Event content</TimelineEvent>);
    expect(screen.getByText("Event content")).toBeInTheDocument();
  });

  it("composes a Callout when detailList is provided", () => {
    const { container } = render(
      <TimelineEvent
        detailList={[
          { label: "Amount", description: "$1,250.00" },
          { label: "Account", description: "Checking 1234" },
        ]}
      >
        <h4>Payment processed</h4>
      </TimelineEvent>,
    );
    // children still render alongside the composed Callout
    expect(screen.getByText("Payment processed")).toBeInTheDocument();
    expect(container.querySelector(".nds-callout")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("$1,250.00")).toBeInTheDocument();
  });

  it("does NOT render a Callout when detailList is omitted", () => {
    const { container } = render(<TimelineEvent>Just content</TimelineEvent>);
    expect(container.querySelector(".nds-callout")).not.toBeInTheDocument();
  });

  it("does NOT render a Callout when detailList is empty", () => {
    const { container } = render(
      <TimelineEvent detailList={[]}>Just content</TimelineEvent>,
    );
    expect(container.querySelector(".nds-callout")).not.toBeInTheDocument();
  });

  it("renders the correct node modifier classes for kind", () => {
    const { container, rerender } = render(
      <TimelineEvent kind="pending">Pending</TimelineEvent>,
    );
    expect(
      container.querySelector(".nds-timeline-event--pending"),
    ).toBeInTheDocument();

    rerender(<TimelineEvent kind="divided">Divided</TimelineEvent>);
    expect(
      container.querySelector(".nds-timeline-event--divided"),
    ).toBeInTheDocument();
  });
});
