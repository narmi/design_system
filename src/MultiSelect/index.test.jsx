import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MultiSelect from "./";

const renderMultiSelect = (props = {}) =>
  render(
    <MultiSelect label="Numbers" onSelectedItemsChange={() => {}} {...props}>
      <MultiSelect.Item value="uno">one</MultiSelect.Item>
      <MultiSelect.Item value="dos">two</MultiSelect.Item>
    </MultiSelect>,
  );

describe("MultiSelect", () => {
  it("selects with Enter and keeps the menu open for more selections", () => {
    const onSelectedItemsChange = vi.fn();
    renderMultiSelect({ onSelectedItemsChange });
    const trigger = screen.getByRole("combobox");

    fireEvent.click(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Enter" });

    expect(onSelectedItemsChange).toHaveBeenCalledWith(["uno"]);
    expect(screen.getByRole("listbox")).not.toBeEmptyDOMElement();

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(onSelectedItemsChange).toHaveBeenLastCalledWith(["uno", "dos"]);
  });

  it("selects with Space and keeps the menu open for more selections", () => {
    const onSelectedItemsChange = vi.fn();
    renderMultiSelect({ onSelectedItemsChange });
    const trigger = screen.getByRole("combobox");

    fireEvent.click(trigger);
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: " " });

    expect(onSelectedItemsChange).toHaveBeenCalledWith(["uno"]);
    expect(screen.getByRole("listbox")).not.toBeEmptyDOMElement();

    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: " " });
    expect(onSelectedItemsChange).toHaveBeenLastCalledWith(["uno", "dos"]);
  });

  it("selects on item click without closing the menu", () => {
    const onSelectedItemsChange = vi.fn();
    renderMultiSelect({ onSelectedItemsChange });
    const trigger = screen.getByRole("combobox");

    fireEvent.click(trigger);
    fireEvent.click(screen.getByText("two"));

    expect(onSelectedItemsChange).toHaveBeenCalledWith(["dos"]);
    expect(screen.getByRole("listbox")).not.toBeEmptyDOMElement();
  });
});
