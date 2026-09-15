import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CollapsibleCard from "./";

describe("CollapsibleCard", () => {
  it("renders title and subtitle, and hides children, when closed", () => {
    render(
      <CollapsibleCard isOpen={false} title="My title" subtitle="My subtitle">
        <p>card content</p>
      </CollapsibleCard>,
    );
    expect(screen.getByText("My title")).toBeInTheDocument();
    expect(screen.getByText("My subtitle")).toBeInTheDocument();
    expect(screen.queryByText("card content")).not.toBeInTheDocument();
  });

  it("renders children when `isOpen` is true", () => {
    render(
      <CollapsibleCard isOpen={true} title="My title">
        <p>card content</p>
      </CollapsibleCard>,
    );
    expect(screen.getByText("card content")).toBeInTheDocument();
  });

  it("fires onOpen when closed and onClose when open, via the header trigger", async () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();

    const { rerender } = render(
      <CollapsibleCard isOpen={false} onOpen={onOpen} onClose={onClose}>
        <p>c</p>
      </CollapsibleCard>,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();

    rerender(
      <CollapsibleCard isOpen={true} onOpen={onOpen} onClose={onClose}>
        <p>c</p>
      </CollapsibleCard>,
    );
    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("fires onDisabledClick instead of onOpen when `isDisabled`", async () => {
    const onOpen = vi.fn();
    const onDisabledClick = vi.fn();
    render(
      <CollapsibleCard
        isOpen={false}
        isDisabled
        onOpen={onOpen}
        onDisabledClick={onDisabledClick}
      >
        <p>c</p>
      </CollapsibleCard>,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onDisabledClick).toHaveBeenCalledTimes(1);
    expect(onOpen).not.toHaveBeenCalled();
  });

  it("renders a caret trigger that toggles the card", async () => {
    const onOpen = vi.fn();
    render(
      <CollapsibleCard isOpen={false} trigger="caret-end" onOpen={onOpen}>
        <p>c</p>
      </CollapsibleCard>,
    );
    const caret = screen.getByRole("button", { name: "Open" });
    await userEvent.click(caret);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("uses `renderTitle` in place of the default title, passing `isOpen`", () => {
    const renderTitle = vi.fn((isOpen: boolean) => (
      <span>{isOpen ? "custom open" : "custom closed"}</span>
    ));
    render(
      <CollapsibleCard isOpen={true} title="ignored" renderTitle={renderTitle}>
        <p>c</p>
      </CollapsibleCard>,
    );
    expect(screen.getByText("custom open")).toBeInTheDocument();
    expect(screen.queryByText("ignored")).not.toBeInTheDocument();
    expect(renderTitle).toHaveBeenCalledWith(true);
  });
});
