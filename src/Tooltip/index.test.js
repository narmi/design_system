import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tooltip from "./";

const TIP_TEXT = "I am a tool for tips";
const CHILD_TEXT = "This has a tooltip";

const renderTooltip = () => {
  render(
    <Tooltip text={TIP_TEXT}>
      <p>{CHILD_TEXT}</p>
    </Tooltip>
  );
};

const getTrigger = () => screen.getByTestId("nds-tooltip-trigger");

describe("Tooltip", () => {
  it("renders children without errors", () => {
    renderTooltip();
    const children = screen.getByText(CHILD_TEXT, { selector: "p" });
    expect(children).toBeTruthy();
  });

  it("shows tooltip on mouseEnter", async () => {
    renderTooltip();
    const trigger = getTrigger();
    fireEvent.mouseEnter(trigger);
    const tip = await screen.findByText(TIP_TEXT);
    expect(tip).toBeInTheDocument();
  });

  it("shows tooltip on focus", async () => {
    renderTooltip();
    const trigger = getTrigger();
    fireEvent.focus(trigger);
    const tip = await screen.findByText(TIP_TEXT);
    expect(tip).toBeInTheDocument();
  });
});
