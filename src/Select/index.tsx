/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useMemo } from "react";
import { useSelect, UseSelectProps } from "downshift";
import useDropdownLayer from "../hooks/useDropdownLayer";

import cc from "classcat";
import Row from "../Row";
import DropdownTrigger from "../DropdownTrigger";
import Error from "../Error";
import SelectItem, { SelectItemProps } from "./SelectItem";
import SelectAction, { SelectActionProps } from "./SelectAction";
import SelectCategory, { SelectCategoryProps } from "./SelectCategory";

const noop = () => {};

type SelectItemElement = React.ReactElement<SelectItemProps>;
type SelectActionElement = React.ReactElement<SelectActionProps>;
type SelectCategoryElement = React.ReactElement<SelectCategoryProps>;
type SelectChild = SelectItemElement | SelectActionElement;

/**
 * @param item a Select.Item or Select.Action component
 * @returns true if the item is a Select.Action
 */
export const isAction = (
  item: React.ReactNode,
): item is SelectActionElement => {
  let result = false;
  if (item && typeof item === "object" && "props" in item) {
    result = "onSelect" in item.props;
  }
  return result;
};

/**
 * Sets the selected value in the DropdownTrigger.
 * A Select.Action should _not_ display as selected in the button.
 *
 * @param item the currently selected Select.Item or Select.Action
 * @returns The value to display in the trigger button
 */
export const getSelectedItemDisplay = (
  item: SelectChild | "" | null | undefined,
): React.ReactNode => {
  let result: React.ReactNode = "";
  if (item && !isAction(item)) {
    result = item.props.children;
  }
  return result;
};

/**
 * @param value `value` of the Select.Item to get
 * @param items Select.Item nodes
 * @returns the Select.Item element found or an empty string
 */
export const getItemByValue = (
  value: string,
  items: SelectChild[],
): SelectItemElement | "" => {
  const foundItem = items
    .filter((item): item is SelectItemElement => !isAction(item)) // action items are not selectable
    .filter(({ props }) => props.value === value)
    .pop();

  return foundItem || "";
};

type IndexableItemElement = React.ReactElement<{
  value?: string;
  searchValue?: string;
  onSelect?: () => void;
}>;

/**
 * @param item an item from `items`
 * @param items downshift index `items`
 * @returns index of item
 */
export const getItemIndex = (
  item: IndexableItemElement,
  items: IndexableItemElement[],
) => {
  let result = 0;
  if (isAction(item)) {
    result = items
      .map(({ props }) => props.onSelect)
      .indexOf(item.props.onSelect);
  } else {
    result = items.map(({ props }) => props.value).indexOf(item.props.value);
  }
  return result;
};

/**
 * @param highlightedIndex index of currently highlight item
 * @param categoryChildren child items in a given category
 * @param items downshift `items`
 * @returns if the provided item is in the category
 */
export const isHighlightedInCategory = (
  highlightedIndex: number,
  categoryChildren: SelectItemElement[],
  items: SelectChild[],
) => {
  if (highlightedIndex < 0) return false;
  const highlightedValue = items[highlightedIndex].props.value;
  const categoryValues: (string | undefined)[] = categoryChildren.map(
    (child) => child.props.value,
  );
  return categoryValues.includes(highlightedValue);
};

/**
 * @param selectedItem
 * @param categoryChildren child items in a given category
 * @returns if the selected item is in the given category children
 */
export const isSelectedItemInCategory = (
  selectedItem: SelectChild | "" | null,
  categoryChildren: SelectItemElement[],
) => {
  if (!selectedItem || isAction(selectedItem)) return false;
  const selectedValue = selectedItem.props.value;
  const categoryValues = categoryChildren.map((child) => child.props.value);
  return categoryValues.includes(selectedValue);
};

/**
 * @param selectItem full react element of a select item
 * @param userInput most recent thing a user typed while focused on input
 * @returns the string to use for typeahead for each given `selectItem`
 */
const defaultGetTypeAheadString = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userInput = "",
  selectItem: SelectItemElement,
) => {
  if (isAction(selectItem)) return "";
  return selectItem.props.searchValue || selectItem.props.value;
};

interface SelectCategoryConfig {
  label?: string;
  categoryChildren: SelectItemElement[];
  kind?: SelectCategoryProps["kind"];
  isFlat?: boolean;
}

export interface SelectProps {
  /**
   * unique id attribute of the input (used for `htmlFor`).
   * Defaults to a value derived from `label`.
   */
  id?: string;
  /** Label for the select control */
  label?: string;
  /** Change callback. Called with value string from the selected item */
  onChange?: (value: string) => void;
  /**
   * Sets selected item by value and makes the Select **fully controlled**.
   *
   * When passing a `value`, you must provide an `onChange` handler to update it
   */
  value?: string;
  /**
   * Function with signature `(userInputValue, selectItemNode) => {}`,
   * used to customize typeahead filtering behavior.
   * See "Changing Typeahead Behavior" story for example.
   */
  getTypeaheadString?: (
    userInput: string,
    selectItem: SelectItemElement,
  ) => string;
  /**
   * When `true`, selecting an action will clear any existing selection.
   */
  clearSelectionOnAction?: boolean;
  /**
   * Use to set a default selection by passing the `value` prop
   * of one of the `<Select.Item>` children.
   * The Select will remain uncontrolled.
   */
  defaultValue?: string;
  /** Open the dropdown on render if `true` */
  defaultOpen?: boolean;
  /**
   * Error message.
   * When passed, this will cause the trigger to render in error state.
   */
  errorText?: string;
  children?: React.ReactNode;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /**
   * When true, Select renders a disabled button with the appearance
   * of a disabled input. User interaction is disabled.
   */
  disabled?: boolean;
}

/**
 * Accessible custom select control for giving users the ability to select one option from a list of options.
 * `Select` also supports the ability to pass in a `<Select.Action>` that acts as an option that only triggers a side effect.
 * Typeahead is enabled based on the `value` prop of `<Select.Item>` elements passed in.
 */
const Select = ({
  id,
  label,
  children,
  onChange = noop,
  value,
  defaultValue,
  defaultOpen = false,
  disabled = false,
  getTypeaheadString = defaultGetTypeAheadString,
  clearSelectionOnAction = false,
  errorText,
  testId,
}: SelectProps) => {
  let items: SelectChild[] = []; // List of all item types to pass to downshift state management
  let categories: SelectCategoryConfig[] = []; // Categories extracted from Select.Category children
  const options = useMemo(
    // All Select.Item options
    () =>
      React.Children.toArray(children).filter((item) => !isAction(item)) as (
        | SelectItemElement
        | SelectCategoryElement
      )[],
    [children],
  );
  const actions = React.Children.toArray(children).filter(isAction); // All Select.Action items
  const [userInput, setUserInput] = useState(""); // most recent val the user typed while focused on this input

  // If categories are being used, extract items from categories
  if (
    options.some(
      ({ type }) =>
        typeof type !== "string" &&
        "displayName" in type &&
        type.displayName === "Select.Category",
    )
  ) {
    const categoryElements = options as SelectCategoryElement[];
    items = [
      ...categoryElements.flatMap(
        ({ props }) =>
          React.Children.toArray(props.children) as SelectItemElement[],
      ),
      ...actions,
    ];
    categories = categoryElements.map(({ props }) => ({
      label: props.label,
      categoryChildren: React.Children.toArray(
        props.children,
      ) as SelectItemElement[],
      // eslint-disable-next-line react/prop-types
      kind: props.kind,
      // eslint-disable-next-line react/prop-types
      isFlat: props.isFlat,
    }));
  } else {
    items = [...(options as SelectItemElement[]), ...actions];
  }

  const downshiftOpts: UseSelectProps<SelectChild | ""> = {
    id: id || `nds-select-${label}`,
    items,
    initialSelectedItem: defaultValue && getItemByValue(defaultValue, items),
    initialIsOpen: defaultOpen,
    itemToString: (item) =>
      getTypeaheadString(userInput, item as SelectItemElement),
    onSelectedItemChange: ({ selectedItem }) => {
      // Actions are handled in the state reducer, so this only handles regular items
      if (selectedItem && !isAction(selectedItem)) {
        onChange(selectedItem.props ? selectedItem.props.value : "");
      }
    },

    // this allows us to subscribe to downshift events
    // so we can track user keyboard input
    // <https://www.downshift-js.com/use-select#state-reducer>
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      const { selectedItem: previousSelectedItem } = state;
      const { selectedItem: newSelectedItem } = changes;
      let isOpen = changes.isOpen;

      if (type === useSelect.stateChangeTypes.ToggleButtonKeyDownCharacter) {
        const { inputValue } = changes;
        setUserInput(inputValue ?? "");
        isOpen = true;
      } else {
        setUserInput(""); // reset input after any other event
      }

      // When an action is selected, execute it and handle clearing if needed
      if (isAction(newSelectedItem)) {
        newSelectedItem.props.onSelect();
        if (clearSelectionOnAction) {
          onChange(""); // allows controlled 'value' to be cleared
        }
        return {
          ...changes,
          selectedItem: clearSelectionOnAction ? null : previousSelectedItem,
          isOpen: false,
        };
      }

      return {
        ...changes,
        isOpen,
      };
    },
  };

  // When `value` prop is passed, the Select becomes fully controlled and the
  // selected item is set programmatically by the consumer only
  if (value !== undefined) {
    downshiftOpts.selectedItem = getItemByValue(value, items);
  }

  /** @see https://www.downshift-js.com/use-select */
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    closeMenu,
  } = useSelect(downshiftOpts);

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen: (open) => {
      if (!open) closeMenu();
    },
    polyfillScrollBug: true,
  });

  const hasCategories = categories.length > 0;
  const selectedItemValue =
    selectedItem !== null && selectedItem !== ""
      ? selectedItem.props.value
      : undefined;
  const showMenu = isOpen && items.length > 0;

  const renderItem = (item: SelectChild, items: SelectChild[]) => {
    const index = getItemIndex(item, items);
    return (
      <li
        key={`item-${index}`}
        className={cc([
          "nds-select-item",
          "alignChild--left--center padding--x--s padding--y--xs",
          {
            "nds-select-item--highlighted": highlightedIndex === index,
            "rounded--top": index === 0,
            "rounded--bottom": index === items.length - 1,
            "nds-select-item--hasGutter": hasCategories,
          },
        ])}
        {...getItemProps({ item, index })}
      >
        <Row as="span">
          <Row.Item as="span">{item}</Row.Item>
          {selectedItemValue !== undefined &&
            selectedItemValue === item.props.value && (
              <Row.Item as="span" shrink>
                <span className="narmi-icon-check fontSize--xl fontWeight--bold" />
              </Row.Item>
            )}
        </Row>
      </li>
    );
  };

  const getDetailsProps = (categoryChildren: SelectItemElement[]) => {
    const detailsExtraProps: { open?: boolean } = {};
    if (
      isHighlightedInCategory(highlightedIndex, categoryChildren, items) ||
      isSelectedItemInCategory(selectedItem, categoryChildren)
    ) {
      detailsExtraProps.open = true;
    }
    return detailsExtraProps;
  };

  return (
    <div className="nds-select" data-testid={testId}>
      <div
        {...(anchorProps as React.HTMLAttributes<HTMLDivElement>)}
        ref={anchorProps.ref as React.Ref<HTMLDivElement>}
      >
        <DropdownTrigger
          isOpen={showMenu}
          labelText={label}
          disabled={disabled}
          displayValue={getSelectedItemDisplay(selectedItem) || userInput}
          labelProps={{ ...getLabelProps() }}
          hasError={Boolean(errorText)}
          {...getToggleButtonProps()}
        />
      </div>
      <Error error={errorText} />

      <div {...layerProps} ref={layerProps.ref as React.Ref<HTMLDivElement>}>
        <div
          className={cc([
            "nds-select-list",
            "bgColor--white",
            {
              "nds-select-list--error": !!errorText,
            },
          ])}
          {...getMenuProps()}
        >
          {showMenu &&
            hasCategories &&
            categories.map(({ label, kind, categoryChildren, isFlat }) => {
              return isFlat ? (
                <>
                  {label && (
                    <h4
                      id={`select-category-${label}`}
                      className={cc([
                        "fontFamily--default",
                        "padding--x--s padding--y--xs",
                        {
                          [`select-category-title--label`]: kind === "label",
                          [`select-category-title--heading`]:
                            kind === "heading",
                        },
                      ])}
                    >
                      {label}
                    </h4>
                  )}
                  <ul
                    className="list--reset"
                    aria-labelledby={`select-category-${label}`}
                  >
                    {categoryChildren.map((item) => renderItem(item, items))}
                  </ul>
                </>
              ) : (
                <details
                  key={label}
                  className="nds-select-category"
                  {...getDetailsProps(categoryChildren)} // controls open state
                >
                  <summary
                    className={cc([
                      "alignChild--left--center",
                      "padding--x--s",
                      {
                        [`select-category-title--label`]: kind === "label",
                        [`select-category-title--heading`]:
                          kind === "heading" || !kind,
                      },
                    ])}
                  >
                    <span id={`select-category-${label}`}>{label}</span>
                    <span className="nds-category-icon narmi-icon-chevron-down" />
                    <span className="nds-category-icon narmi-icon-chevron-up" />
                  </summary>
                  <ul
                    className="list--reset"
                    aria-labelledby={`select-category-${label}`}
                  >
                    {categoryChildren.map((item) => renderItem(item, items))}
                  </ul>
                </details>
              );
            })}
          {showMenu && hasCategories && (
            <ul className="list--reset">
              {actions.map((action) => renderItem(action, items))}
            </ul>
          )}
          {showMenu && !hasCategories && (
            <ul className="list--reset">
              {(options as SelectItemElement[]).map((option) =>
                renderItem(option, items),
              )}
              {actions.map((action) => renderItem(action, items))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

Select.Item = SelectItem;
Select.Action = SelectAction;
Select.Category = SelectCategory;
export default Select;
