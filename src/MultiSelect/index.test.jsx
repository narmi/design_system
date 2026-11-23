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

  describe("notifications in StrictMode", () => {
    // StrictMode replays reducers; a change callback invoked inside
    // downshift's `stateReducer` would run twice for a single user action.
    const renderStrict = (props = {}) => {
      const onSelectedItemsChange = vi.fn();
      render(
        <React.StrictMode>
          <MultiSelect
            label="Numbers"
            onSelectedItemsChange={onSelectedItemsChange}
            {...props}
          >
            <MultiSelect.Item value="uno">one</MultiSelect.Item>
            <MultiSelect.Item value="dos">two</MultiSelect.Item>
          </MultiSelect>
        </React.StrictMode>,
      );
      return { onSelectedItemsChange, trigger: screen.getByRole("combobox") };
    };

    it("notifies exactly once per item click", () => {
      const { onSelectedItemsChange, trigger } = renderStrict();

      fireEvent.click(trigger);
      fireEvent.click(screen.getByText("two"));
      expect(onSelectedItemsChange).toHaveBeenCalledTimes(1);
      expect(onSelectedItemsChange).toHaveBeenLastCalledWith(["dos"]);

      fireEvent.click(screen.getByText("one"));
      expect(onSelectedItemsChange).toHaveBeenCalledTimes(2);
      expect(onSelectedItemsChange).toHaveBeenLastCalledWith(["dos", "uno"]);

      // clicking a selected item deselects it
      fireEvent.click(screen.getByText("two"));
      expect(onSelectedItemsChange).toHaveBeenCalledTimes(3);
      expect(onSelectedItemsChange).toHaveBeenLastCalledWith(["uno"]);
    });

    it("notifies exactly once per keyboard selection", () => {
      const { onSelectedItemsChange, trigger } = renderStrict();

      fireEvent.click(trigger);
      fireEvent.keyDown(trigger, { key: "ArrowDown" });
      fireEvent.keyDown(trigger, { key: "Enter" });
      expect(onSelectedItemsChange).toHaveBeenCalledTimes(1);
      expect(onSelectedItemsChange).toHaveBeenLastCalledWith(["uno"]);

      fireEvent.keyDown(trigger, { key: "ArrowDown" });
      fireEvent.keyDown(trigger, { key: " " });
      expect(onSelectedItemsChange).toHaveBeenCalledTimes(2);
      expect(onSelectedItemsChange).toHaveBeenLastCalledWith(["uno", "dos"]);
    });

    it("notifies exactly once when a token is dismissed", () => {
      const { onSelectedItemsChange, trigger } = renderStrict();

      fireEvent.click(trigger);
      fireEvent.click(screen.getByText("two"));
      expect(onSelectedItemsChange).toHaveBeenCalledTimes(1);

      fireEvent.click(screen.getByRole("button", { name: "Remove dos" }));
      expect(onSelectedItemsChange).toHaveBeenCalledTimes(2);
      expect(onSelectedItemsChange).toHaveBeenLastCalledWith([]);
    });
  });
});
