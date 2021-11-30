import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Popover from "./";

const TRIGGER_TEXT = "Toggle Popover";
const CONTENT_TEXT = "Popover content";

const renderPopover = () => {
  render(
    <Popover content={<p>{CONTENT_TEXT}</p>}>
      <button>{TRIGGER_TEXT}</button>
    </Popover>
  );
};

const getTrigger = () => screen.getByTestId("nds-popover-trigger");

describe("Popover", () => {
  it("renders children without errors", () => {
    renderPopover();
    const children = screen.queryByText(TRIGGER_TEXT, { selector: "button" });
    expect(children).toBeTruthy();
  });

  it("shows popover on click", () => {
    renderPopover();
    const trigger = getTrigger();
    expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText(CONTENT_TEXT)).toBeInTheDocument();
  });

  it("shows popover on focus + enter", () => {
    renderPopover();
    const trigger = getTrigger();
    expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument();
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(screen.queryByText(CONTENT_TEXT)).toBeInTheDocument();
  });

  it("dismisses popover on outside click", () => {
    renderPopover();
    const trigger = getTrigger();
    expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText(CONTENT_TEXT)).toBeInTheDocument();
    fireEvent.click(document.body);
    expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument();
  });

  it("dismisses popover on escape key", () => {
    renderPopover();
    const trigger = getTrigger();
    expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByText(CONTENT_TEXT)).toBeInTheDocument();
    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument();
  });
});
