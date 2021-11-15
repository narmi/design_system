import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tooltip from "./";

const TIP_TEXT = "This is a tip about tools and/or a tool for showing tips.";

const _getTriggerEl = () => screen.getByTestId("nds-tooltip");

describe("Tooltip", () => {
  it("renders trigger wrapper and contents without errors", () => {
    render(
      <Tooltip text={TIP_TEXT}>
        <span>Trigger</span>
      </Tooltip>
    );
    const triggerEl = _getTriggerEl();
    expect(triggerEl).toBeTruthy();
  });

  it("shows tooltip on trigger mouseenter", async () => {
    render(
      <Tooltip text={TIP_TEXT}>
        <span>Trigger</span>
      </Tooltip>
    );
    const triggerEl = _getTriggerEl();
    fireEvent.mouseEnter(triggerEl);
    await expect(screen.findByText(TIP_TEXT)).toBeTruthy();
  });

  it("shows tooltip on trigger focus", async () => {
    render(
      <Tooltip text={TIP_TEXT}>
        <span>Trigger</span>
      </Tooltip>
    );
    const triggerEl = _getTriggerEl();
    fireEvent.focus(triggerEl);
    await expect(screen.findByText(TIP_TEXT)).toBeTruthy();
  });
});
