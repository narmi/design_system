import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Combobox, {
  isSelectable,
  shouldOpenCategory,
  getVisibleChildrenByCategory,
} from "./";
import { options_states } from "./util";

const LABEL = "Select your state";

const STATE_ITEMS = options_states.map((state) => (
  <Combobox.Item key={state} value={state} searchValue={state}>
    {state}
  </Combobox.Item>
));

const MOCK_ITEMS = [
  <Combobox.Item key=".0" value="uno" searchValue="uno">
    one
  </Combobox.Item>,
  <Combobox.Item key=".1" value="dos" searchValue="dos">
    two
  </Combobox.Item>,
  <Combobox.Item key=".2" value="tres" searchValue="tres">
    three
  </Combobox.Item>,
  <Combobox.Item key=".3" value="quatro" searchValue="quatro">
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
        <Combobox.Item value="selectable item" searchValue="selectable item">
          selectable item
        </Combobox.Item>,
      ),
    ).toBe(true);
  });

  it("renders as expected with basic props", () => {
    render(<Combobox label={LABEL}>{STATE_ITEMS}</Combobox>);
    expect(screen.getByText(LABEL)).toBeInTheDocument();

    // The listbox is always in the DOM but hidden when closed.
    // We can't use getByRole when display: none because it's removed from the accessibility tree
    const listbox = document.querySelector('[role="listbox"]');
    expect(listbox).toBeInTheDocument();
    expect(listbox.closest("div")).toHaveStyle("display: none");
  });

  it("dropdown opens, selection works, and onChange is fired correctly", () => {
    const handleChange = vi.fn();
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

  it("keeps filtering after the browser translates the page", () => {
    render(<Combobox label={LABEL}>{STATE_ITEMS}</Combobox>);
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.focus(input);

    // Chrome Translate swaps each text node for a <font> element
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
    );
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      const font = document.createElement("font");
      font.textContent = node.data;
      node.replaceWith(font);
    });

    fireEvent.change(input, { target: { value: "new" } });
    expect(screen.getAllByRole("option")).toHaveLength(4);
  });

  it("input should auto-fill last selection on blur", async () => {
    const user = userEvent.setup();

    // The auto-fill behavior requires a controlled inputValue + onInputChange
    // pattern — handleBlur calls onInputChange(selectedItem) which the parent
    // must wire back into inputValue to actually restore the displayed value.
    const ControlledCombobox = () => {
      const [inputValue, setInputValue] = React.useState("");
      return (
        <Combobox
          label={LABEL}
          inputValue={inputValue}
          onInputChange={setInputValue}
        >
          {STATE_ITEMS}
        </Combobox>
      );
    };

    render(<ControlledCombobox />);

    // open the dropdown and select New York
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.focus(input);
    fireEvent.click(screen.getByText("New York"));

    // user backspaces some of the input, but doesn't totally clear the selection
    await user.type(input, "{Backspace>4}");
    expect(input.value).toBe("New ");

    // when the user blurs away from the input, it should auto-fill with the
    // last selected value (New York)
    fireEvent.blur(input);
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
        <Combobox.Item value="New York" searchValue="New York" />
        <Combobox.Item value="California" searchValue="California" />
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

  it("should call onChange with empty string when input is cleared", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Combobox label={LABEL} onChange={handleChange}>
        {STATE_ITEMS}
      </Combobox>,
    );

    // open the dropdown and select New York
    const input = screen.getByPlaceholderText(LABEL);
    fireEvent.focus(input);
    const nyItem = screen.getByText("New York");
    fireEvent.click(nyItem);
    expect(handleChange).toHaveBeenLastCalledWith("New York");

    // Clear the input (simulating backspace)
    await user.clear(input);

    // onChange should be called with empty string
    expect(handleChange).toHaveBeenLastCalledWith("");
  });

  describe("input filled from outside the dropdown", () => {
    // Mirrors a consumer that controls the input text and sets it from outside
    // the dropdown, e.g. after creating a new recipient in a drawer.
    /* eslint-disable react/prop-types */
    const PrefilledCombobox = ({
      onChange = () => {},
      prefill = "New York",
    }) => {
      const [inputValue, setInputValue] = React.useState("");
      return (
        <>
          <Combobox
            label={LABEL}
            onChange={onChange}
            inputValue={inputValue}
            onInputChange={setInputValue}
          >
            {STATE_ITEMS}
          </Combobox>
          <button type="button" onClick={() => setInputValue(prefill)}>
            fill from outside
          </button>
        </>
      );
    };
    /* eslint-enable react/prop-types */

    it("keeps the input and selects the matching item on blur", () => {
      const handleChange = vi.fn();
      render(<PrefilledCombobox onChange={handleChange} />);
      fireEvent.click(screen.getByText("fill from outside"));

      const input = screen.getByPlaceholderText(LABEL);
      fireEvent.focus(input);
      fireEvent.blur(input);

      expect(input.value).toBe("New York");
      expect(handleChange).toHaveBeenLastCalledWith("New York");

      // On reopening, the matching item is marked as selected
      fireEvent.focus(input);
      expect(screen.getByRole("option", { selected: true })).toHaveTextContent(
        "New York",
      );
    });

    it("still clears the input on blur when the text matches no item", () => {
      const handleChange = vi.fn();
      render(<PrefilledCombobox onChange={handleChange} prefill="Nowhere" />);
      fireEvent.click(screen.getByText("fill from outside"));

      const input = screen.getByPlaceholderText(LABEL);
      fireEvent.focus(input);
      fireEvent.blur(input);

      expect(input.value).toBe("");
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe("Combobox.Action in StrictMode", () => {
    // StrictMode replays reducers; an action invoked inside downshift's
    // `stateReducer` would run twice for a single user activation.
    const LABEL_ACTION = "Add a new state";
    const renderStrict = (props = {}) => {
      const onChange = vi.fn();
      const onSelect = vi.fn();
      render(
        <React.StrictMode>
          <Combobox label={LABEL} onChange={onChange} {...props}>
            <Combobox.Item value="New York" searchValue="New York" />
            <Combobox.Item value="California" searchValue="California" />
            <Combobox.Action onSelect={onSelect} label={LABEL_ACTION} />
          </Combobox>
        </React.StrictMode>,
      );
      return { onChange, onSelect, input: screen.getByPlaceholderText(LABEL) };
    };

    it("invokes the action exactly once on click", () => {
      const { onChange, onSelect, input } = renderStrict();

      fireEvent.focus(input);
      fireEvent.click(screen.getByText(LABEL_ACTION));

      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onChange).not.toHaveBeenCalled();
      expect(screen.queryByText(LABEL_ACTION)).not.toBeInTheDocument();
    });

    it("invokes the action exactly once on Enter", () => {
      const { onChange, onSelect, input } = renderStrict();

      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "Enter" });

      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onChange).not.toHaveBeenCalled();
      expect(screen.queryByText(LABEL_ACTION)).not.toBeInTheDocument();
    });

    it("preserves the previous selection after an action", () => {
      const { onChange, onSelect, input } = renderStrict();

      fireEvent.focus(input);
      fireEvent.click(screen.getByText("New York"));
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenLastCalledWith("New York");

      fireEvent.focus(input);
      fireEvent.click(screen.getByText(LABEL_ACTION));

      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(input.value).toBe("New York");
    });

    it("clears the selection exactly once with `clearSelectionOnAction`", () => {
      const { onChange, onSelect, input } = renderStrict({
        clearSelectionOnAction: true,
      });

      fireEvent.focus(input);
      fireEvent.click(screen.getByText("New York"));
      expect(onChange).toHaveBeenLastCalledWith("New York");

      fireEvent.focus(input);
      fireEvent.click(screen.getByText(LABEL_ACTION));

      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenLastCalledWith("");
      expect(input.value).toBe("");
    });

    it("invokes the action before notifying that the selection was cleared", () => {
      const calls = [];
      const { onChange, onSelect, input } = renderStrict({
        clearSelectionOnAction: true,
      });
      onChange.mockImplementation((value) => calls.push(`onChange:${value}`));
      onSelect.mockImplementation(() => calls.push("onSelect"));

      fireEvent.focus(input);
      fireEvent.click(screen.getByText("New York"));
      fireEvent.focus(input);
      fireEvent.click(screen.getByText(LABEL_ACTION));

      expect(calls).toEqual(["onChange:New York", "onSelect", "onChange:"]);
    });
  });
});
