import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select, {
  isAction,
  getSelectedItemDisplay,
  getItemByValue,
  getItemIndex,
  isHighlightedInCategory,
  isSelectedItemInCategory,
} from "./";

const MOCK_ITEMS = [
  <Select.Item key=".0" value="uno">
    one
  </Select.Item>,
  <Select.Item key=".1" value="dos">
    two
  </Select.Item>,
  <Select.Item key=".2" value="tres">
    three
  </Select.Item>,
  <Select.Item key=".3" value="quatro">
    four
  </Select.Item>,
];

const MOCK_CATEGORIES = [
  { label: "Below Two", categoryChildren: [...MOCK_ITEMS].slice(0, 2) },
  { label: "Above Two", categoryChildren: [...MOCK_ITEMS].slice(2, 2) },
];

describe("Select", () => {
  /**
   * Most of the complexity of this component is in `DropdownTrigger` and
   * `useSelect` from downshift, which have their own test coverage.
   */

  it("isAction: detects action items correctly", () => {
    expect(isAction(<Select.Item value="foo" />)).toBe(false);
    expect(isAction(<Select.Action onSelect={() => {}} />)).toBe(true);
    expect(isAction(null)).toBe(false);
    expect(isAction(undefined)).toBe(false);
    expect(isAction("")).toBe(false);
  });

  it("getSelectedItemDisplay: only returns non-action items", () => {
    const kids = "test";
    const item = <Select.Item value="foo">{kids}</Select.Item>;
    const action = <Select.Action onSelect={() => {}}>{kids}</Select.Action>;
    expect(getSelectedItemDisplay(item)).toBeTruthy();
    expect(getSelectedItemDisplay(action)).toBeFalsy();
  });

  it("getItemByValue: gets correct item from list by value or an empty string", () => {
    const MOCK_ITEM_FOO = <Select.Item value="foo"></Select.Item>;
    const MOCK_ITEM_BAR = <Select.Item value="bar"></Select.Item>;
    expect(getItemByValue("foo", [MOCK_ITEM_BAR, MOCK_ITEM_FOO])).toBe(
      MOCK_ITEM_FOO,
    );
    expect(getItemByValue("doesNotExist", [MOCK_ITEM_BAR, MOCK_ITEM_FOO])).toBe(
      "",
    );
  });

  it("getItemIndex: gets expected index of item by its value", () => {
    const item = (
      <Select.Item key=".2" value="tres">
        three
      </Select.Item>
    );
    expect(getItemIndex(item, MOCK_ITEMS)).toBe(2);
  });

  it("isHighlightedInCategory: correctly determines which category a highlighted item is in", () => {
    const firstCategoryChildren = MOCK_CATEGORIES[0].categoryChildren;
    expect(isHighlightedInCategory(-1, firstCategoryChildren, MOCK_ITEMS)).toBe(
      false,
    ); // no item highlighted
    expect(isHighlightedInCategory(1, firstCategoryChildren, MOCK_ITEMS)).toBe(
      true,
    ); // second item is in first category
    expect(isHighlightedInCategory(3, firstCategoryChildren, MOCK_ITEMS)).toBe(
      false,
    ); // fourth item is NOT in first category
  });

  it("isSelectedItemInCategory: correctly determines if the selected item is in a given category", () => {
    const firstCategoryChildren = MOCK_CATEGORIES[0].categoryChildren;
    expect(isSelectedItemInCategory(MOCK_ITEMS[3], firstCategoryChildren)).toBe(
      false,
    );
    expect(isSelectedItemInCategory(MOCK_ITEMS[0], firstCategoryChildren)).toBe(
      true,
    );
  });

  it("renders as expected with basic props", () => {
    render(
      <Select id="accountField" label="Account Type">
        <Select.Item value="checking"></Select.Item>
        <Select.Item value="savings"></Select.Item>
      </Select>,
    );

    expect(screen.getByText("Account Type")).toBeInTheDocument();
    expect(screen.getByRole("listbox")).toBeEmptyDOMElement();
  });

  it("dropdown opens, selection works, and onChange is fired correctly", () => {
    const handleChange = jest.fn();
    render(
      <Select label="Account Type" onChange={handleChange}>
        <Select.Item value="checking">Checking</Select.Item>
        <Select.Item value="savings">Savings</Select.Item>
      </Select>,
    );

    // open the dropdown
    const trigger = screen.getByText("Account Type");
    fireEvent.click(trigger);
    expect(handleChange).not.toHaveBeenCalled();

    // dropdown should be open
    const checkingItem = screen.getByText("Checking");
    expect(checkingItem).toBeInTheDocument();

    // clicking should select the time and fire the onChange event
    fireEvent.click(checkingItem);
    expect(handleChange).toHaveBeenCalledWith("checking");
  });

  it("defaultValue sets selection in trigger correctly", () => {
    render(
      <Select label="Account Type" defaultValue="savings">
        <Select.Item value="checking">Checking</Select.Item>
        <Select.Item value="savings">Savings</Select.Item>
      </Select>,
    );
    expect(screen.getByText("Savings")).toBeInTheDocument();
  });

  it("default open works", () => {
    render(
      <Select label="Account Type" defaultOpen>
        <Select.Item value="checking">Checking</Select.Item>
        <Select.Item value="savings">Savings</Select.Item>
      </Select>,
    );
    expect(screen.getByText("Savings")).toBeInTheDocument();
  });

  it("does not treat action items as selected; fires side effect for action", () => {
    const handleChange = jest.fn();
    const sideEffect = jest.fn();
    render(
      <Select id="accountField" label="Account Type" onChange={handleChange}>
        <Select.Item value="checking">Checking</Select.Item>
        <Select.Item value="savings">Savings</Select.Item>
        <Select.Action onSelect={sideEffect}>Action</Select.Action>
      </Select>,
    );

    // open the dropdown
    const trigger = screen.getByText("Account Type");
    fireEvent.click(trigger);
    expect(handleChange).not.toHaveBeenCalled();

    // dropdown should be open
    const actionItem = screen.getByText("Action");
    expect(actionItem).toBeInTheDocument();

    // clicking the action item should not select the item
    // the side effect of the action item should be called
    fireEvent.click(actionItem);
    expect(handleChange).not.toHaveBeenCalled();
    expect(sideEffect).toHaveBeenCalled();

    // dropdown should be closed at this point, so the text "Action"
    // should no longer be in the DOM (including in the trigger label)
    expect(screen.queryByText("Action")).not.toBeInTheDocument();
  });
});
