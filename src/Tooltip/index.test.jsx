import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tooltip from "./";

const TIP_TEXT = "I am a tool for tips";
const CHILD_TEXT = "This has a tooltip";

const renderTooltip = () => {
  render(
    <Tooltip text={TIP_TEXT}>
      <p>{CHILD_TEXT}</p>
    </Tooltip>,
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

  it("renders tooltip when isOpen is set to true", () => {
    render(
      <Tooltip text={TIP_TEXT} isOpen={true}>
        <p>{CHILD_TEXT}</p>
      </Tooltip>,
    );

    const tip = screen.getByText(TIP_TEXT);
    expect(tip).toBeInTheDocument();
  });

  it("does not render tooltip when isOpen is false and trigger is focused", async () => {
    render(
      <Tooltip text={TIP_TEXT} isOpen={false}>
        <p>{CHILD_TEXT}</p>
      </Tooltip>,
    );
    const trigger = getTrigger();
    fireEvent.focus(trigger);
    const tip = await screen.queryByText(TIP_TEXT);

    expect(tip).toBeNull();
  });

  it("makes the trigger focusable by default", () => {
    renderTooltip();
    expect(getTrigger()).toHaveAttribute("tabindex", "0");
  });

  it("removes the trigger from the tab order when focusable is false", () => {
    render(
      <Tooltip text={TIP_TEXT} focusable={false}>
        <button>{CHILD_TEXT}</button>
      </Tooltip>,
    );
    expect(getTrigger()).not.toHaveAttribute("tabindex");
  });

  it("still shows tooltip on focus of a child when focusable is false", async () => {
    render(
      <Tooltip text={TIP_TEXT} focusable={false}>
        <button>{CHILD_TEXT}</button>
      </Tooltip>,
    );
    fireEvent.focus(screen.getByRole("button", { name: CHILD_TEXT }));
    const tip = await screen.findByText(TIP_TEXT);
    expect(tip).toBeInTheDocument();
  });
});
