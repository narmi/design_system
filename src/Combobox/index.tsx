import React, { useState, useRef, useMemo, useEffect } from "react";
import cc from "classcat";
import { VALID_ICON_NAMES } from "../icons/iconNames";
import { useCombobox } from "downshift";
import ComboboxItem, { ComboboxItemProps } from "./ComboboxItem";
import ComboboxHeading, { ComboboxHeadingProps } from "./ComboboxHeading";
import ComboboxCategory, { ComboboxCategoryProps } from "./ComboboxCategory";
import ComboboxAction, { ComboboxActionProps } from "./ComboboxAction";
import Error from "../Error";
import TextInput from "../TextInput";
import Row from "../Row";
import { getItemIndex } from "../Select";
import useDropdownLayer from "../hooks/useDropdownLayer";
import type { IconName } from "../types/Icon.types";

const noop = () => {};

export { VALID_ICON_NAMES };

type ComboboxItemElement = React.ReactElement<ComboboxItemProps>;
type ComboboxActionElement = React.ReactElement<ComboboxActionProps>;
type ComboboxHeadingElement = React.ReactElement<ComboboxHeadingProps>;
type ComboboxCategoryElement = React.ReactElement<ComboboxCategoryProps>;
type ComboboxChild =
  | ComboboxItemElement
  | ComboboxActionElement
  | ComboboxHeadingElement;

interface ComboboxCategoryConfig {
  label: string;
  categoryChildren: ComboboxChild[];
}

/**
 * @param item Combobox.{Action|Item|Heading} component
 * @returns true if the item is a Combobox.Action
 */
export const isAction = (
  item: React.ReactNode,
): item is ComboboxActionElement => {
  let result = false;
  if (item && typeof item === "object" && "props" in item) {
    result = "label" in (item.props as object);
  }
  return result;
};

/**
 * @param component a Combobox.Item or Combobox.Heading component
 * @returns true if the item is a selectable Combobox.Item or Action
 */
export const isSelectable = (component: ComboboxChild | null | undefined) => {
  let result = false;
  if (component) {
    result = isAction(component) || "value" in component.props;
  }
  return result;
};

/**
 * @param inputValue current value of the combobox input
 * @param highlightedIndex index of highlighted item from downshift
 * @param displayedItems list of all items currently displayed
 * @param categoryChildren list of items in category
 * @param selectedItem the currently selected item
 * @returns if the category should be forced open
 */
export const shouldOpenCategory = (
  inputValue: string | undefined,
  highlightedIndex: number,
  displayedItems: ComboboxChild[],
  categoryChildren: ComboboxChild[],
  selectedItem: ComboboxChild | null | undefined,
) => {
  let result = false;

  // an item in the category is currently highlighted
  if (highlightedIndex > -1 && displayedItems.length > 0) {
    const highlightedValue = displayedItems[highlightedIndex].props.value;
    const categoryValues: (string | undefined)[] = categoryChildren.map(
      (child) => child.props.value,
    );
    result = categoryValues.includes(highlightedValue);
  }

  // user is actively filtering; default all categories to open
  if (typeof inputValue === "string" && inputValue.length > 0) {
    result = true;
  }

  // the combobox has a selection; collapse all categories except the category
  // the selection belongs to
  if (selectedItem) {
    result = categoryChildren
      .map((child) => child.props.value)
      .includes(selectedItem.props.value);
  }

  return result;
};

/**
 * @param displayedItems currently displayed combobox items
 * @param categoryChildren items in category
 * @returns [] containing which category items should be visible
 */
export const getVisibleChildrenByCategory = (
  displayedItems: ComboboxChild[],
  categoryChildren: ComboboxChild[],
) => {
  const categoryValues = categoryChildren.map((child) => child.props.value);
  return categoryValues.reduce((visibleItems: ComboboxChild[], value) => {
    const visibleItem = displayedItems.find(
      (displayedItem) => value === displayedItem.props.value,
    );
    if (visibleItem) {
      visibleItems.push(visibleItem);
    }
    return visibleItems;
  }, []);
};

/**
 * @param items all selectable Combobox.Item children
 * @param inputValue lowercase value of input
 * @returns Combobox.Item children, filtered by the input value
 */
export const defaultFilterItemsByInput = (
  items: ComboboxItemElement[],
  inputValue: string,
) =>
  items.filter((item) => {
    const query = item.props.searchValue || item.props.value;
    return query.toLowerCase().startsWith(inputValue);
  });

/**
 *
 * @param isOpen whether the combobox is open
 * @returns chevron icon that toggles based on the open state of the combobox
 */
export const defaultRenderEndContent = (isOpen: boolean) => (
  <span
    className={`fontSize--xl fontColor--primary narmi-icon-${
      isOpen ? "chevron-up" : "chevron-down"
    }`}
  />
);

export interface ComboboxProps {
  /** Combobox.Item, Combobox.Action, Combobox.Heading, or Combobox.Category children */
  children: React.ReactNode;
  /** Label for the input */
  label: string;
  /** Change callback.
   * Called when an item is selected, with the `value` of the selected item.
   * Called with empty string when the user clears the input.
   */
  onChange?: (value: string) => void;
  /**
   * Sets value of the input in a controlled manner.
   * When using the `inputValue` prop, you **must** update it via the
   * `onInputChange` handler.
   */
  inputValue?: string;
  /** Input change callback. Called whenever the user updates the value of the input. */
  onInputChange?: (inputValue: string) => void;
  /**
   * Set to `true` to disable the default behavior of filtering the list
   * as the user types.
   */
  disableFiltering?: boolean;
  /**
   * When `true`, selecting an action will clear any existing selection.
   */
  clearSelectionOnAction?: boolean;
  /**
   * Optionally pass a function to customize filtering behavior
   *
   * Signature: `(items, inputValue) => [...filteredItems]`
   */
  filterItemsByInput?: (
    items: ComboboxItemElement[],
    inputValue: string,
  ) => ComboboxItemElement[];
  /**
   * Error message.
   * When passed, this will cause the input to render in error state.
   */
  errorText?: string;
  /** Name of icon to place at the start of the input */
  icon?: IconName;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Function to render content at the end of the input.
   * Defaults to a function that renders a chevron icon that toggles based on the open state of the combobox.
   *
   * Signature: `(isOpen) => React.ReactNode`
   */
  renderEndContent?: (isOpen: boolean) => React.ReactNode;
}

/**
 * Autocomplete input component following the accessible
 * [ARIA combobox pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role).
 *
 * Autocomplete options are defined by passing the `Combobox.Item` subcomponent
 * as children. To add heading dividers, use the `Combobox.Heading` subcomponent.
 *
 * By default options will be filtered down as the user types in the input. This
 * behavior can be disabled via the `disableFiltering` prop.
 */
const Combobox = ({
  label,
  onChange = noop,
  onInputChange = noop,
  inputValue: inputValueProp,
  filterItemsByInput = defaultFilterItemsByInput,
  children,
  disableFiltering = false,
  clearSelectionOnAction = false,
  errorText,
  icon,
  testId,
  renderEndContent = defaultRenderEndContent,
}: ComboboxProps) => {
  const allChildren = useMemo(
    () =>
      React.Children.toArray(children) as (
        | ComboboxChild
        | ComboboxCategoryElement
      )[],
    [children],
  );
  const hasCategories = allChildren.some(
    ({ type }) =>
      typeof type !== "string" &&
      "displayName" in type &&
      type.displayName === ComboboxCategory.displayName,
  );
  let categories: ComboboxCategoryConfig[] = [];
  let items: ComboboxChild[] =
    allChildren.length < 1
      ? []
      : (allChildren.filter(
          ({ props }) => "value" in props || "text" in props,
        ) as ComboboxChild[]);

  // If categories are being used, `items` is populated by the children of each category
  if (hasCategories) {
    const categoryElements = allChildren as ComboboxCategoryElement[];
    items = categoryElements.flatMap(
      ({ props }) => React.Children.toArray(props.children) as ComboboxChild[],
    );
    categories = categoryElements.map(({ props }) => ({
      label: props.label,
      categoryChildren: React.Children.toArray(
        props.children,
      ) as ComboboxChild[],
    }));
  } else {
    items = allChildren as ComboboxChild[];
  }

  const [displayedItems, setDisplayedItems] = useState(items);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInternalFocusChange = useRef(false);

  const itemToString = (item: ComboboxChild | null | undefined) =>
    item?.props?.searchValue || item?.props?.value || "";

  const {
    isOpen,
    selectedItem,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    inputValue,
    openMenu,
    closeMenu,
    reset,
  } = useCombobox({
    items: displayedItems,
    inputValue: inputValueProp,
    itemToString,

    // typeahead behavior is managed by this event callback
    onInputValueChange: ({ inputValue = "" }) => {
      // If the user has cleared the input reset selection and state.
      if (inputValue.length === 0) {
        setDisplayedItems(items);
        reset();
        onInputChange("");
        return;
      }

      // Filtering based on inputValue
      if (!disableFiltering) {
        const actionItems = items.filter(isAction);
        const filteredItems = filterItemsByInput(
          items.filter(
            (item): item is ComboboxItemElement =>
              !isAction(item) && isSelectable(item),
          ),
          inputValue.toLowerCase(),
        );
        setDisplayedItems([...filteredItems, ...actionItems]);
      }
      onInputChange(inputValue);
    },

    onSelectedItemChange: ({ selectedItem }) => {
      // Blur before value change to prevent mobile scroll-into-view (NDS-2906).
      // Mobile browsers scroll the viewport when a focused input's value
      // changes to a long string. Removing focus first eliminates the trigger,
      // then we restore focus without scrolling.
      isInternalFocusChange.current = true;
      inputRef.current?.blur();
      onChange(selectedItem ? (selectedItem.props.value ?? "") : "");
      closeMenu();
      inputRef.current?.focus({ preventScroll: true });
      isInternalFocusChange.current = false;
    },

    // <https://www.downshift-js.com/use-select#state-reducer>
    stateReducer: (state, actionAndChanges) => {
      const { changes } = actionAndChanges;
      const { selectedItem: previousSelectedItem } = state;
      const { selectedItem: newSelectedItem } = changes;

      // When users select an action, the selectedItem should not update.
      // The dropdown should close and any existing selection should be preserved.
      if (isAction(newSelectedItem)) {
        newSelectedItem.props.onSelect();
        return {
          ...changes,
          selectedItem: clearSelectionOnAction ? null : previousSelectedItem,
          inputValue: clearSelectionOnAction
            ? ""
            : itemToString(previousSelectedItem),
          isOpen: false,
        };
      }

      return changes;
    },
  });

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen: (open) => {
      if (!open) closeMenu();
    },
    polyfillScrollBug: true,
  });

  // Update displayed items passed to `useCombobox` when `items` change
  useEffect(() => {
    const isNotActivelyFiltering = !inputValue || inputValue.length === 0;
    if (isNotActivelyFiltering && items.length !== displayedItems.length) {
      setDisplayedItems(items);
    }
  }, [items, inputValue]);

  const hasSelectedItem = !!selectedItem;

  // renders a single combobox item
  const renderItem = (item: ComboboxChild, index: number) => {
    const isActionItem = isAction(item);
    let itemJsx = (
      <li key={`${item}-${index}`} className="alignChild--left--center">
        {item}
      </li>
    );

    if (isSelectable(item)) {
      itemJsx = (
        <li
          key={`${item}-${index}`}
          className={cc([
            "nds-combobox-item",
            "alignChild--left--center padding--x--s",
            {
              "nds-combobox-action": isActionItem,
              "padding--y--xs": !hasCategories,
              "nds-combobox-item--highlighted": highlightedIndex === index,
              "rounded--top": index === 0,
              "rounded--bottom": index === displayedItems.length - 1,
            },
          ])}
          {...getItemProps({ item, index })}
        >
          {isActionItem && (
            <Row as="span" gapSize="xxs">
              <Row.Item as="span" shrink>
                <span className="narmi-icon-plus fontWeight--bold" />
              </Row.Item>
              <Row.Item as="span">
                <span className="fontWeight--semibold">{item.props.label}</span>
              </Row.Item>
            </Row>
          )}
          {!isActionItem && (
            <Row as="span">
              <Row.Item as="span">{item}</Row.Item>
              {hasSelectedItem &&
                selectedItem.props.value === item.props.value && (
                  <Row.Item as="span" shrink>
                    <span className="narmi-icon-check fontSize--xl fontWeight--bold" />
                  </Row.Item>
                )}
            </Row>
          )}
        </li>
      );
    }

    return itemJsx;
  };

  // renders category including all child items
  const renderCategory = ({
    label,
    categoryChildren,
  }: ComboboxCategoryConfig) => {
    const detailsProps: { open?: boolean } = {};
    const visibleChildren = getVisibleChildrenByCategory(
      displayedItems,
      categoryChildren,
    );

    const showCategory = visibleChildren.length > 0;

    if (
      shouldOpenCategory(
        inputValue,
        highlightedIndex,
        displayedItems,
        categoryChildren,
        selectedItem,
      )
    ) {
      detailsProps.open = true;
    }

    return showCategory ? (
      <details
        key={label}
        className="nds-combobox-category"
        tabIndex={-1}
        {...detailsProps}
      >
        <summary
          className="fontWeight--bold alignChild--left--center padding--x--s padding--y-xs"
          onFocus={(e) => {
            e.target.blur();
          }}
        >
          <span id={`combobox-category-${label}`}>{label}</span>
          <span className="nds-category-icon narmi-icon-chevron-down" />
          <span className="nds-category-icon narmi-icon-chevron-up" />
        </summary>
        <ul
          className="list--reset"
          aria-labelledby={`combobox-category-${label}`}
        >
          {visibleChildren.map((item) =>
            renderItem(item, getItemIndex(item, displayedItems)),
          )}
        </ul>
      </details>
    ) : null;
  };

  const handleMenuToggle = () => {
    if (isInternalFocusChange.current) return;
    if (!isOpen) {
      // Reset filtered items every time user refocuses.
      // Subsequent changes in the input will re-filter the list.
      openMenu();
      if (hasSelectedItem) {
        setDisplayedItems(items.filter(isSelectable));
      }
    }
  };

  const handleBlur = () => {
    if (isInternalFocusChange.current) return;
    onInputChange(selectedItem ? itemToString(selectedItem) : "");
    if (highlightedIndex !== -1) {
      closeMenu();
    }
  };

  // It is possible that a consumer may have nothing to pass to `children`.
  // For example, if an API response hasn't completed to load in the autocomplete
  // options. In that case, Combobox should render a normal TextInput.
  if (items.length < 1) {
    return (
      <TextInput
        error={errorText}
        label={label}
        startIcon={icon}
        onChange={
          onInputChange as unknown as React.ChangeEventHandler<HTMLInputElement>
        }
        value={inputValue}
      />
    );
  }

  return (
    <>
      <div
        className={cc(["nds-combobox", { "nds-combobox--active": isOpen }])}
        data-testid={testId}
      >
        <div
          {...(anchorProps as React.HTMLAttributes<HTMLDivElement>)}
          ref={anchorProps.ref as React.Ref<HTMLDivElement>}
        >
          <TextInput
            error={errorText}
            renderError={false}
            label={label}
            value={inputValue}
            startIcon={icon}
            endContent={renderEndContent(isOpen)}
            {...getInputProps({
              ref: inputRef,
              onBlur: handleBlur,
              onFocus: handleMenuToggle,
              onClick: handleMenuToggle,
            })}
            onClick={handleMenuToggle}
          />
        </div>
        <Error error={errorText} />
        <div {...layerProps} ref={layerProps.ref as React.Ref<HTMLDivElement>}>
          <ul
            className={cc([
              "nds-combobox-list",
              "list--reset",
              "bgColor--white",
              {
                "nds-combobox-list--error": !!errorText,
              },
            ])}
            {...getMenuProps()}
          >
            {isOpen &&
              (hasCategories
                ? categories.map(renderCategory)
                : displayedItems.map(renderItem))}
          </ul>
        </div>
      </div>
    </>
  );
};

Combobox.Item = ComboboxItem;
Combobox.Heading = ComboboxHeading;
Combobox.Category = ComboboxCategory;
Combobox.Action = ComboboxAction;
export default Combobox;
