import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Combobox, {
  isSelectable,
  shouldOpenCategory,
  getVisibleChildrenByCategory,
} from "./";
import { options_states } from "./util";

const LABEL = "Select your state";

const STATE_ITEMS = options_states.map((state) => (
  <Combobox.Item value={state} key={state}>
    {state}
  </Combobox.Item>
));

const MOCK_ITEMS = [
  <Combobox.Item key=".0" value="uno">
    one
  </Combobox.Item>,
  <Combobox.Item key=".1" value="dos">
    two
  </Combobox.Item>,
  <Combobox.Item key=".2" value="tres">
    three
  </Combobox.Item>,
  <Combobox.Item key=".3" value="quatro">
    four
  </Combobox.Item>,
];

const MOCK_DISPLAYED_ITEMS = [...MOCK_ITEMS];
const MOCK_CATEGORY_CHILDREN = [...MOCK_ITEMS].slice(0, 2);

describe("Combobox", () => {
  describe("getVisibleChildrenByCategory", () => {
    it("returns all children when list is not filtered", () => {
      const actual = getVisibleChildrenByCategory(
        MOCK_DISPLAYED_ITEMS,
        MOCK_CATEGORY_CHILDREN,
      );
      expect(actual).toStrictEqual(MOCK_CATEGORY_CHILDREN);
    });

    it("returns only visible children when first child is filtered out", () => {
      const actual = getVisibleChildrenByCategory(
        [...MOCK_DISPLAYED_ITEMS].slice(1, 4), // items: dos, tres, quatro
        MOCK_CATEGORY_CHILDREN, // contains: uno, dos
      );
      const expected = [MOCK_CATEGORY_CHILDREN[1]];
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("shouldOpenCategory", () => {
    it("opens category if a child is highlighted", () => {
      const actual = shouldOpenCategory(
        "",
        1,
        MOCK_DISPLAYED_ITEMS,
        MOCK_CATEGORY_CHILDREN,
      );
      expect(actual).toBe(true);
    });

    it("does NOT open category if no children highlighted", () => {
      const actual = shouldOpenCategory(
        "",
        3,
        MOCK_DISPLAYED_ITEMS,
        MOCK_CATEGORY_CHILDREN,
      );
      expect(actual).toBe(false);
    });

    it("opens category if filtering is active", () => {
      const actual = shouldOpenCategory(
        "tre",
        -1,
        MOCK_DISPLAYED_ITEMS,
        MOCK_CATEGORY_CHILDREN,
      );
      expect(actual).toBe(true);
    });

    it("does NOT open category if filtering is not active", () => {
      const actual = shouldOpenCategory(
        "",
        -1,
        MOCK_DISPLAYED_ITEMS,
        MOCK_CATEGORY_CHILDREN,
      );
      expect(actual).toBe(false);
    });
  });

  it("isSelectable: detects selectable options correctly", () => {
    expect(isSelectable(<Combobox.Heading text="just a heading" />)).toBe(
      false,
    );
    expect(
      isSelectable(
        <Combobox.Item value="selectable item">selectable item</Combobox.Item>,
      ),
    ).toBe(true);
  });

  it("renders as expected with basic props", () => {
    render(<Combobox label={LABEL}>{STATE_ITEMS}</Combobox>);
    expect(screen.getByText(LABEL)).toBeInTheDocument();
    expect(screen.getByRole("listbox")).toBeEmptyDOMElement();
  });

  it("dropdown opens, selection works, and onChange is fired correctly", () => {
    const handleChange = jest.fn();
    render(
      <Combobox label={LABEL} onChange={handleChange}>
        {STATE_ITEMS}
      </Combobox>,
    );

    // open the dropdown
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.focus(input);

    // dropdown should be open with state options visible
    const nyItem = screen.getByText("New York");
    expect(nyItem).toBeInTheDocument();

    // clicking the item will make `useCombobox` update the selected item,
    // and our onChange handler should fire with the new value
    fireEvent.click(nyItem);
    expect(handleChange).toHaveBeenCalledWith("New York");
  });

  it("options list is filtered as user types; original list is restored when input is cleared", () => {
    render(<Combobox label={LABEL}>{STATE_ITEMS}</Combobox>);

    // open the dropdown and type in the input
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.focus(input);

    // all 50 state options should be visible before the user types
    expect(screen.getAllByRole("option")).toHaveLength(50);

    // "new" in input should filter list to the 4 states beginning with "new"
    fireEvent.change(input, { target: { value: "new" } });
    expect(screen.getAllByRole("option")).toHaveLength(4);

    // if the input is cleared out, and we re-open the dropdown,
    // the original list should be restored
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.focus(input);
    expect(screen.getAllByRole("option")).toHaveLength(50);
  });

  it("input should auto-fill last selection on blur", async () => {
    const handleChange = jest.fn();
    render(
      <Combobox label={LABEL} onChange={handleChange}>
        {STATE_ITEMS}
      </Combobox>,
    );

    // open the dropdown
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.focus(input);

    // dropdown should be open with state options visible
    const nyItem = screen.getByText("New York");

    // clicking the item will make `useCombobox` update the selected item,
    // and our onChange handler should fire with the new value
    fireEvent.click(nyItem);
    expect(handleChange).toHaveBeenCalledWith("New York");

    // user backspaces some of the input, but doesn't totally clear selection
    (input, { target: { value: "New Y" } });

    // when the user blurs away from the input, it should fill itself with the
    // last selected value (New York)
    userEvent.type(input, "New Y");

    expect(screen.getByDisplayValue("New York")).toBeInTheDocument();
  });

  it("should not update input value in uncontrolled manner when `inputValue` is passed", () => {
    const value = "Initial value unhandled by parent state";
    render(
      <Combobox label={LABEL} inputValue={value}>
        {STATE_ITEMS}
      </Combobox>,
    );
    const input = screen.getByPlaceholderText(LABEL);
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "New value" } });
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it("should not clear `selectedItem` when an action is clicked", () => {
    const LABEL_ACTION = "Add a new state";
    render(
      <Combobox label={LABEL}>
        <Combobox.Item value="New York" />
        <Combobox.Item value="California" />
        <Combobox.Action onSelect={() => {}} label={LABEL_ACTION} />
      </Combobox>,
    );

    const input = screen.getByPlaceholderText(LABEL);

    // open the dropdown
    fireEvent.focus(input);
    const nyItem = screen.getByText("New York");
    const actionItem = screen.getByText(LABEL_ACTION);

    // Select an item
    fireEvent.click(nyItem);

    // Blur the input
    fireEvent.blur(input);

    // On reopening the input, the selectedItem should still be selected
    fireEvent.focus(input);
    expect(input.value).toBe("New York");

    // Now click on an action. The same item should still be selected.
    fireEvent.click(actionItem);
    expect(input.value).toBe("New York");
  });
});
