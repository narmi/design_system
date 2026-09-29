import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Select, {
  isAction,
  getSelectedItemDisplay,
  getItemByValue,
  getItemIndex,
  isHighlightedInCategory,
  isSelectedItemInCategory,
  getTypeaheadMatch,
} from "./";

const MOCK_ITEMS = [
  <Select.Item key=".0" value="uno" searchValue="uno">
    one
  </Select.Item>,
  <Select.Item key=".1" value="dos" searchValue="dos">
    two
  </Select.Item>,
  <Select.Item key=".2" value="tres" searchValue="tres">
    three
  </Select.Item>,
  <Select.Item key=".3" value="quatro" searchValue="quatro">
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
    expect(isAction(<Select.Item value="foo" searchValue="foo" />)).toBe(false);
    expect(isAction(<Select.Action onSelect={() => {}} />)).toBe(true);
    expect(isAction(null)).toBe(false);
    expect(isAction(undefined)).toBe(false);
    expect(isAction("")).toBe(false);
  });

  it("getSelectedItemDisplay: only returns non-action items", () => {
    const kids = "test";
    const item = (
      <Select.Item value="foo" searchValue="foo">
        {kids}
      </Select.Item>
    );
    const action = <Select.Action onSelect={() => {}}>{kids}</Select.Action>;
    expect(getSelectedItemDisplay(item)).toBeTruthy();
    expect(getSelectedItemDisplay(action)).toBeFalsy();
  });

  it("getItemByValue: gets correct item from list by value or an empty string", () => {
    const MOCK_ITEM_FOO = (
      <Select.Item value="foo" searchValue="foo"></Select.Item>
    );
    const MOCK_ITEM_BAR = (
      <Select.Item value="bar" searchValue="bar"></Select.Item>
    );
    expect(getItemByValue("foo", [MOCK_ITEM_BAR, MOCK_ITEM_FOO])).toBe(
      MOCK_ITEM_FOO,
    );
    expect(getItemByValue("doesNotExist", [MOCK_ITEM_BAR, MOCK_ITEM_FOO])).toBe(
      "",
    );
  });

  it("getItemIndex: gets expected index of item by its value", () => {
    const item = (
      <Select.Item key=".2" value="tres" searchValue="tres">
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
        <Select.Item value="checking" searchValue="checking"></Select.Item>
        <Select.Item value="savings" searchValue="savings"></Select.Item>
      </Select>,
    );

    expect(screen.getByText("Account Type")).toBeInTheDocument();

    // The listbox is always in the DOM but hidden when closed.
    // We can't use getByRole when display: none because it's removed from the accessibility tree
    const listbox = document.querySelector('[role="listbox"]');
    expect(listbox).toBeInTheDocument();
    expect(listbox).toBeEmptyDOMElement();

    // The positioning wrapper div should have display: none when closed
    const wrapper = listbox.parentElement;
    expect(wrapper).toHaveStyle("display: none");
  });

  it("dropdown opens, selection works, and onChange is fired correctly", () => {
    const handleChange = vi.fn();
    render(
      <Select label="Account Type" onChange={handleChange}>
        <Select.Item value="checking" searchValue="checking">
          Checking
        </Select.Item>
        <Select.Item value="savings" searchValue="savings">
          Savings
        </Select.Item>
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
        <Select.Item value="checking" searchValue="checking">
          Checking
        </Select.Item>
        <Select.Item value="savings" searchValue="savings">
          Savings
        </Select.Item>
      </Select>,
    );
    expect(screen.getByText("Savings")).toBeInTheDocument();
  });

  it("default open works", () => {
    render(
      <Select label="Account Type" defaultOpen>
        <Select.Item value="checking" searchValue="checking">
          Checking
        </Select.Item>
        <Select.Item value="savings" searchValue="savings">
          Savings
        </Select.Item>
      </Select>,
    );
    expect(screen.getByText("Savings")).toBeInTheDocument();
  });

  it("does not treat action items as selected; fires side effect for action", () => {
    const handleChange = vi.fn();
    const sideEffect = vi.fn();
    render(
      <Select id="accountField" label="Account Type" onChange={handleChange}>
        <Select.Item value="checking" searchValue="checking">
          Checking
        </Select.Item>
        <Select.Item value="savings" searchValue="savings">
          Savings
        </Select.Item>
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

  describe("typeahead", () => {
    const STATES = [
      <Select.Item key=".0" value="Mississippi">
        Mississippi
      </Select.Item>,
      <Select.Item key=".1" value="Missouri">
        Missouri
      </Select.Item>,
      <Select.Item key=".2" value="Alabama">
        Alabama
      </Select.Item>,
    ];

    /** Types `str` at the (focused) trigger, one character event per letter */
    const typeahead = (trigger, str) => {
      for (const key of str) fireEvent.keyDown(trigger, { key });
    };

    const renderStates = (props = {}, children = STATES) => {
      const onChange = vi.fn();
      render(
        <Select label="State" onChange={onChange} {...props}>
          {children}
        </Select>,
      );
      return { onChange, trigger: screen.getByRole("combobox") };
    };

    it("previews the matched item in the trigger while typing", () => {
      const { trigger, onChange } = renderStates();
      typeahead(trigger, "mis");

      // the trigger shows the match, not the raw keystrokes
      expect(trigger).toHaveTextContent("Mississippi");
      expect(trigger).not.toHaveTextContent("mis");
      // previewing is not committing
      expect(onChange).not.toHaveBeenCalled();
    });

    it("keeps the preview after downshift's typeahead buffer expires", () => {
      vi.useFakeTimers();
      try {
        const { trigger, onChange } = renderStates();
        typeahead(trigger, "mis");
        expect(trigger).toHaveTextContent("Mississippi");

        // downshift clears its typeahead buffer 500ms after the last
        // keystroke. That resets `inputValue` but leaves the highlight — and
        // so the item a blur would commit — in place, so the trigger must
        // keep showing it.
        act(() => vi.advanceTimersByTime(1000));
        expect(trigger).toHaveTextContent("Mississippi");

        fireEvent.blur(trigger);
        expect(onChange).toHaveBeenCalledWith("Mississippi");
      } finally {
        vi.useRealTimers();
      }
    });

    it("commits the matched item on blur, and it persists", () => {
      const { trigger, onChange } = renderStates();
      typeahead(trigger, "mis");
      fireEvent.blur(trigger);

      expect(onChange).toHaveBeenCalledWith("Mississippi");
      expect(trigger).toHaveTextContent("Mississippi");
    });

    it("does not select when nothing matches", () => {
      const { trigger, onChange } = renderStates();
      typeahead(trigger, "zz");
      fireEvent.blur(trigger);

      expect(onChange).not.toHaveBeenCalled();
      expect(trigger).not.toHaveTextContent("Mississippi");
    });

    it("does not commit a stale highlight after a non-matching keystroke", () => {
      const { trigger, onChange } = renderStates();
      typeahead(trigger, "mis"); // Mississippi is highlighted
      typeahead(trigger, "zz"); // ...matches nothing
      fireEvent.blur(trigger);

      expect(onChange).not.toHaveBeenCalled();
    });

    it("leaves an existing selection untouched when nothing matches", () => {
      const { trigger, onChange } = renderStates({ defaultValue: "Alabama" });
      typeahead(trigger, "zz");
      fireEvent.blur(trigger);

      expect(onChange).not.toHaveBeenCalled();
      expect(trigger).toHaveTextContent("Alabama");
    });

    it("discards the typeahead on Escape", () => {
      const { trigger, onChange } = renderStates();
      typeahead(trigger, "mis");
      fireEvent.keyDown(trigger, { key: "Escape" });

      expect(trigger).not.toHaveTextContent("Mississippi");
      fireEvent.blur(trigger);
      expect(onChange).not.toHaveBeenCalled();
    });

    it("matches on searchValue when provided", () => {
      const { trigger } = renderStates({}, [
        <Select.Item key=".0" value="MO" searchValue="Missouri">
          Missouri (MO)
        </Select.Item>,
      ]);
      typeahead(trigger, "miss");
      expect(trigger).toHaveTextContent("Missouri (MO)");
    });

    it("never typeahead-selects a Select.Action", () => {
      const onSelect = vi.fn();
      const { trigger, onChange } = renderStates({}, [
        ...STATES,
        <Select.Action key=".a" onSelect={onSelect}>
          Add a state
        </Select.Action>,
      ]);
      typeahead(trigger, "add");
      fireEvent.blur(trigger);

      expect(onSelect).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
    });

    it("commits through the controlled `value` path", () => {
      const onChange = vi.fn();
      const Controlled = () => {
        const [value, setValue] = React.useState("");
        return (
          <Select
            label="State"
            value={value}
            onChange={(next) => {
              onChange(next);
              setValue(next);
            }}
          >
            {STATES}
          </Select>
        );
      };
      render(<Controlled />);
      const trigger = screen.getByRole("combobox");

      typeahead(trigger, "mis");
      fireEvent.blur(trigger);

      expect(onChange).toHaveBeenCalledWith("Mississippi");
      expect(trigger).toHaveTextContent("Mississippi");
    });

    it("getTypeaheadMatch: rejects a candidate that does not match", () => {
      const [mississippi] = STATES;
      expect(getTypeaheadMatch("mis", mississippi)).toBe(mississippi);
      expect(getTypeaheadMatch("zz", mississippi)).toBe(null);
      expect(getTypeaheadMatch("", mississippi)).toBe(null);
      expect(getTypeaheadMatch("mis", undefined)).toBe(null);
      expect(
        getTypeaheadMatch("add", <Select.Action onSelect={() => {}} />),
      ).toBe(null);
    });
  });
});
