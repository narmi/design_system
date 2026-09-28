import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuButton from "./";

const renderMenu = (onSelect = vi.fn()) =>
  render(
    <MenuButton label="Actions" testId="menu">
      <MenuButton.Item label="Edit" onSelect={onSelect} />
      <MenuButton.Item label="Delete" onSelect={vi.fn()} />
    </MenuButton>,
  );

describe("MenuButton", () => {
  it("opens the menu when the trigger is clicked", () => {
    renderMenu();
    const trigger = screen.getByRole("combobox", { name: "Actions" });
    expect(screen.queryByRole("option", { name: "Edit" })).toBeNull();
    fireEvent.click(trigger);
    expect(screen.getByRole("option", { name: "Edit" })).toBeInTheDocument();
  });

  it("calls the item onSelect handler when an item is clicked", () => {
    const onSelect = vi.fn();
    renderMenu(onSelect);
    fireEvent.click(screen.getByRole("combobox", { name: "Actions" }));
    fireEvent.click(screen.getByRole("option", { name: "Edit" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("does not propagate the trigger click to ancestor elements", () => {
    const parentClick = vi.fn();
    render(
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div onClick={parentClick}>
        <MenuButton label="Actions">
          <MenuButton.Item label="Edit" onSelect={vi.fn()} />
        </MenuButton>
      </div>,
    );
    const trigger = screen.getByRole("combobox", { name: "Actions" });
    fireEvent.click(trigger);
    expect(parentClick).not.toHaveBeenCalled();
    // the menu still opens
    expect(screen.getByRole("option", { name: "Edit" })).toBeInTheDocument();
  });
});
