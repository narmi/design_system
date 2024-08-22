import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import iconSelection from "src/icons/selection.json";
import { useCombobox } from "downshift";
import { useLayer } from "react-laag";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import ComboboxCategory from "./ComboboxCategory";
import TextInput from "../TextInput";
import Error from "../Error";
import { getItemIndex } from "../Select";

const noop = () => {};

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

/**
 * @param {Object} component a Combobox.Item or Combobox.Heading component
 * @returns {Boolean} true if the item is a selectable Combobox.Item
 */
export const isSelectable = (component) => {
  let result = false;
  if (component) {
    result = "value" in component.props;
  }
  return result;
};

/**
 * @param {String} inputValue current value of the combobox input
 * @param {Number} highlightedIndex index of highlighted item from downshift
 * @param {Array} displayedItems list of all items currently displayed
 * @param {Array} categoryChildren list of items in category
 * @returns {Boolean} if the category should be fored open
 */
export const shouldOpenCategory = (
  inputValue,
  highlightedIndex,
  displayedItems,
  categoryChildren,
  selectedItem,
) => {
  let result = false;

  // an item in the category is currently highlighted
  if (highlightedIndex > -1 && displayedItems.length > 0) {
    const highlightedValue = displayedItems[highlightedIndex].props.value;
    const categoryValues = categoryChildren.map((child) => child.props.value);
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
 * @param {Array} displayedItems currently displayed combobox items
 * @param {Array} categoryChildren items in category
 * @returns {Array} [] containing which category items should be visible
 */
export const getVisibleChildrenByCategory = (
  displayedItems,
  categoryChildren,
) => {
  const categoryValues = categoryChildren.map((child) => child.props.value);
  return categoryValues.reduce((visibleItems, value) => {
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
 * @param {Array} items all selectable Combobox.Item children
 * @param {String} inputValue lowercase value of input
 * @returns {Array} Combobox.Item children, filtered by the input value
 */
export const defaultFilterItemsByInput = (items, inputValue) =>
  items.filter((item) => {
    const query = item.props.searchValue || item.props.value;
    return query.toLowerCase().startsWith(inputValue);
  });

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
  inputValue: controlledInputValue,
  filterItemsByInput = defaultFilterItemsByInput,
  children,
  disableFiltering = false,
  errorText,
  icon,
  testId,
  inputEndContent,
}) => {
  const allChildren = React.Children.toArray(children);
  const hasCategories = allChildren.some(
    ({ type }) => type.displayName === ComboboxCategory.displayName,
  );
  let categories = [];
  let items =
    allChildren.length < 1
      ? []
      : allChildren.filter(({ props }) => "value" in props || "text" in props);

  // If categories are being used, `items` is populated by the children of each category
  if (hasCategories) {
    items = allChildren.flatMap(({ props }) =>
      React.Children.toArray(props.children),
    );
    categories = allChildren.map(({ props }) => ({
      label: props.label,
      categoryChildren: React.Children.toArray(props.children),
    }));
  } else {
    items = allChildren;
  }

  const [displayedItems, setDisplayedItems] = useState(items);
  const [clearOnNextInput, setClearOnNextInput] = useState(false);

  const {
    isOpen,
    selectedItem,
    getInputProps,
    getComboboxProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    inputValue,
    setInputValue,
    openMenu,
    reset,
  } = useCombobox({
    items: displayedItems,
    inputValue: controlledInputValue,
    itemToString: (item) => item.props.searchValue || item.props.value,
    onInputValueChange: ({ inputValue }) => {
      // Typeahead behavior - we adjust the list of available options passed
      // into `useCombobox` by filtering the initial items list from input value
      if (!disableFiltering) {
        const filteredItems = filterItemsByInput(
          items.filter(isSelectable),
          inputValue.toLowerCase(),
        );
        setDisplayedItems(filteredItems);
      }

      // reset all downshift state when the input is cleared
      if (inputValue.length === 0) {
        setDisplayedItems(items); // restore original list in dropdown
        reset(); // clear any active selections
      }

      onInputChange(inputValue);
    },
    onSelectedItemChange: ({ selectedItem }) => {
      let newSelection = "";
      if (selectedItem) {
        newSelection = selectedItem.props.value;
      }
      onChange(newSelection);
      onInputChange(newSelection);
    },
    // <https://www.downshift-js.com/use-select#state-reducer>
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      let inputValue = changes.inputValue;

      // if there's already a selected item when the user revisists the input,
      // wipe away the old input value so they can start typing right away.
      // (selection is preserved until user picks another item)
      if (
        type === useCombobox.stateChangeTypes.InputChange &&
        clearOnNextInput &&
        hasSelectedItem &&
        changes.inputValue.length > state.inputValue.length
      ) {
        inputValue = changes.inputValue.slice(-1); // the last character the user typed
        setClearOnNextInput(false);
      }

      return {
        ...changes,
        inputValue,
      };
    },
  });

  const hasSelectedItem = !!selectedItem;

  // react-laag positioning engine for autocomplete popup
  const { renderLayer, triggerProps, layerProps, triggerBounds, layerSide } =
    useLayer({
      isOpen,
      overflowContainer: true,
      auto: true,
      snap: true,
      placement: "bottom-start",
      possiblePlacements: ["top-start", "bottom-start"],
      preferY: "bottom",
      triggerOffset: -3,
      containerOffset: 16,
    });

  // renders a single combobox item
  const renderItem = (item, index) => {
    let itemJsx = (
      <li
        key={`${item}-${index}`}
        className={cc([
          "nds-combobox-heading",
          "alignChild--left--center padding--x--s padding--y--xs",
        ])}
      >
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
              "padding--y--xs": !hasCategories,
              "nds-combobox-item--highlighted": highlightedIndex === index,
              "rounded--top": index === 0,
              "rounded--bottom": index === displayedItems.length - 1,
              "nds-combobox-item--hasGutter": hasSelectedItem,
            },
          ])}
          {...getItemProps({ item, index })}
        >
          {hasSelectedItem && selectedItem.props.value === item.props.value && (
            <span className="narmi-icon-check fontSize--l fontWeight--bold" />
          )}
          {item}
        </li>
      );
    }

    return itemJsx;
  };

  // renders category including all child items
  const renderCategory = ({ label, categoryChildren }) => {
    const detailsProps = {};
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
    if (!isOpen) {
      // Reset filtered items every time user refocuses.
      // Subsequent changes in the input will re-filter the list.
      openMenu();
      if (hasSelectedItem) {
        setDisplayedItems(items.filter(isSelectable));
      }
    }
  };

  // It is possible that a consumer may have nothing to pass to `children`.
  // For example, if an API response hasn't completed to load in the autocomplete
  // options. In that case, Cobmobox should render a normal TextInput.
  if (items.length < 1) {
    return (
      <TextInput
        error={errorText}
        label={label}
        startIcon={icon}
        onChange={onInputChange}
        value={inputValue}
      />
    );
  }

  return (
    <>
      <div
        className={cc(["nds-combobox", { "nds-combobox--active": isOpen }])}
        {...getComboboxProps(triggerProps)}
        data-testid={testId}
      >
        <TextInput
          label={label}
          value={inputValue}
          startIcon={icon}
          endContent={
            inputEndContent === undefined ? (
            <span
              className={`fontSize--l fontColor--primary narmi-icon-${
                isOpen ? "chevron-up" : "chevron-down"
              }`}
            />) : inputEndContent
          }
          {...getInputProps({
            onFocus: () => {
              if (hasSelectedItem) {
                setClearOnNextInput(true);
              }
              handleMenuToggle();
            },
            onClick: handleMenuToggle,
            onBlur: () => {
              // If the user has selected an option, we should
              // always set that as the input value when they leave the input
              if (hasSelectedItem) {
                setInputValue(
                  selectedItem.props.searchValue || selectedItem.props.value,
                );
              }
            },
          })}
        />
        {renderLayer(
          <ul
            className={cc([
              "nds-combobox-list",
              "list--reset bgColor--white border--right bottom border--left",
              {
                "nds-combobox-list--active":
                  isOpen && displayedItems.length > 0,
                "nds-combobox-list--bottom": layerSide === "bottom",
                "nds-combobox-list--top": layerSide === "top",
              },
            ])}
            {...getMenuProps(layerProps)}
            style={{
              width: triggerBounds?.width || "auto",
              ...layerProps.style,
            }}
          >
            {isOpen &&
              (hasCategories
                ? categories.map(renderCategory)
                : displayedItems.map(renderItem))}
          </ul>,
        )}
      </div>
      <Error error={errorText} />
    </>
  );
};

Combobox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** Label for the input */
  label: PropTypes.string.isRequired,
  /** Change callback. Called when an item is selected, with the `value` of the selected item */
  onChange: PropTypes.func,
  /**
   * Sets value of the input in a controlled manner.
   * When using the `inputValue` prop, you **must** update it via the
   * `onInputChange` handler.
   */
  inputValue: PropTypes.string,
  /** Input change callback. Called whenever the user updates the value of the input. */
  onInputChange: PropTypes.func,
  /**
   * Set to `true` to disable the default behavior of filtering the list
   * as the user types.
   */
  disableFiltering: PropTypes.bool,
  /**
   * Optionally pass a function to customize filtering behavior
   *
   * Signature: `(items, inputValue) => [...filteredItems]`
   */
  filterItemsByInput: PropTypes.func,
  /**
   * Error message.
   * When passed, this will cause the input to render in error state.
   */
  errorText: PropTypes.string,
  /** Name of icon to place at the start of the input */
  icon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Content to render at the end of the input. By default, a chevron that indicates whether
   * the dropdown is open or closed.
   */
  inputEndContent: PropTypes.node,
};

Combobox.Item = ComboboxItem;
Combobox.Heading = ComboboxHeading;
Combobox.Category = ComboboxCategory;
export default Combobox;
