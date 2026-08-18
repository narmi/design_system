import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./";
import NavigationItem from "../NavigationItem";

describe("Navigation", () => {
  it("renders a nav landmark named by `label`", () => {
    render(
      <Navigation label="Roles">
        <NavigationItem itemId="admin" label="Admin" />
      </Navigation>,
    );
    expect(
      screen.getByRole("navigation", { name: "Roles" }),
    ).toBeInTheDocument();
  });

  it("marks the item whose itemId matches selectedId as current (controlled)", () => {
    render(
      <Navigation label="Roles" selectedId="editor">
        <NavigationItem itemId="admin" label="Admin" />
        <NavigationItem itemId="editor" label="Editor" />
        <NavigationItem itemId="viewer" label="Viewer" />
      </Navigation>,
    );
    expect(screen.getByRole("button", { name: "Editor" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("button", { name: "Admin" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("calls onSelect with the item's itemId when clicked", () => {
    const onSelect = vi.fn();
    render(
      <Navigation label="Roles" selectedId="admin" onSelect={onSelect}>
        <NavigationItem itemId="admin" label="Admin" />
        <NavigationItem itemId="editor" label="Editor" />
      </Navigation>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Editor" }));
    expect(onSelect).toHaveBeenCalledWith("editor");
  });

  it("fires the item's own onClick alongside onSelect", () => {
    const onSelect = vi.fn();
    const onClick = vi.fn();
    render(
      <Navigation label="Roles" selectedId="admin" onSelect={onSelect}>
        <NavigationItem itemId="editor" label="Editor" onClick={onClick} />
      </Navigation>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Editor" }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith("editor");
  });

  it("does not self-update in controlled mode without a selectedId change", () => {
    render(
      <Navigation label="Roles" selectedId="admin">
        <NavigationItem itemId="admin" label="Admin" />
        <NavigationItem itemId="editor" label="Editor" />
      </Navigation>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Editor" }));
    expect(screen.getByRole("button", { name: "Admin" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("button", { name: "Editor" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("owns selection state in uncontrolled mode via defaultSelectedId", () => {
    render(
      <Navigation label="Roles" defaultSelectedId="admin">
        <NavigationItem itemId="admin" label="Admin" />
        <NavigationItem itemId="editor" label="Editor" />
      </Navigation>,
    );
    expect(screen.getByRole("button", { name: "Admin" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    // No external state — the manager updates its own selection on click.
    fireEvent.click(screen.getByRole("button", { name: "Editor" }));
    expect(screen.getByRole("button", { name: "Editor" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("button", { name: "Admin" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("falls back to isSelected when used without a Navigation manager", () => {
    render(
      <>
        <NavigationItem label="Admin" isSelected />
        <NavigationItem label="Editor" />
      </>,
    );
    expect(screen.getByRole("button", { name: "Admin" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("button", { name: "Editor" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("ignores standalone isSelected when managed by Navigation", () => {
    render(
      <Navigation label="Roles" defaultSelectedId="editor">
        {/* isSelected is overridden by the manager's resolved selection */}
        <NavigationItem itemId="admin" label="Admin" isSelected />
        <NavigationItem itemId="editor" label="Editor" />
      </Navigation>,
    );
    expect(screen.getByRole("button", { name: "Admin" })).not.toHaveAttribute(
      "aria-current",
    );
    expect(screen.getByRole("button", { name: "Editor" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("renders items as links and puts aria-current on the anchor", () => {
    render(
      <Navigation label="Roles" selectedId="editor">
        <NavigationItem itemId="admin" label="Admin" href="/admin" />
        <NavigationItem itemId="editor" label="Editor" href="/editor" />
      </Navigation>,
    );
    const editor = screen.getByRole("link", { name: "Editor" });
    expect(editor).toHaveAttribute("href", "/editor");
    expect(editor).toHaveAttribute("aria-current", "page");
  });

  it("sanitizes unsafe hrefs", () => {
    render(
      <Navigation label="Roles">
        {/* eslint-disable-next-line no-script-url */}
        <NavigationItem itemId="x" label="Danger" href="javascript:alert(1)" />
      </Navigation>,
    );
    expect(screen.getByText("Danger").closest("a")).not.toHaveAttribute("href");
  });

  it("does not leak `itemId` as a DOM attribute", () => {
    render(
      <Navigation label="Roles" selectedId="admin">
        <NavigationItem itemId="admin" label="Admin" />
      </Navigation>,
    );
    const button = screen.getByRole("button", { name: "Admin" });
    expect(button).not.toHaveAttribute("itemId");
    expect(button).not.toHaveAttribute("value");
  });

  it("still passes a DOM id through to the control", () => {
    render(
      <Navigation label="Roles">
        <NavigationItem itemId="admin" label="Admin" id="admin-control" />
      </Navigation>,
    );
    expect(screen.getByRole("button", { name: "Admin" })).toHaveAttribute(
      "id",
      "admin-control",
    );
  });
});
