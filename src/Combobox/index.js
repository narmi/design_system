import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import iconSelection from "src/icons/selection.json";
import { useCombobox } from "downshift";
import { useLayer } from "react-laag";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import ComboboxCategory from "./ComboboxCategory";
import ComboboxAction from "./ComboboxAction";
import TextInput from "../TextInput";
import Row from "../Row";
import { getItemIndex } from "../Select";
import { createUseLayerContainer } from "src/util/dom";

const noop = () => {};

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

/**
 * @param {Object} item Combobox.{Action|Item|Heading} component
 * @returns {Boolean} true if the item is a Combobox.Action
 */
export const isAction = (item) => {
  let result = false;
  if (item && item.props) {
    result = "label" in item.props;
  }
  return result;
};

/**
 * @param {Object} component a Combobox.Item or Combobox.Heading component
 * @returns {Boolean} true if the item is a selectable Combobox.Item or Action
 */
export const isSelectable = (component) => {
  let result = false;
  if (component) {
    result = isAction(component) || "value" in component.props;
  }
  return result;
};

/**
 * @param {String} inputValue current value of the combobox input
 * @param {Number} highlightedIndex index of highlighted item from downshift
 * @param {Array} displayedItems list of all items currently displayed
 * @param {Array} categoryChildren list of items in category
 * @returns {Boolean} if the category should be forced open
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
 *
 * @param {Boolean} isOpen whether the combobox is open
 * @returns {React.ReactNode} chevron icon that toggles based on the open state of the combobox
 */
export const defaultRenderEndContent = (isOpen) => (
  <span
    className={`fontSize--l fontColor--primary narmi-icon-${
      isOpen ? "chevron-up" : "chevron-down"
    }`}
  />
);

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
  errorText,
  icon,
  testId,
  renderEndContent = defaultRenderEndContent,
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

  const itemToString = (item) =>
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
    reset,
  } = useCombobox({
    items: displayedItems,
    inputValue: inputValueProp,
    itemToString,

    // typeahead behavior is managed by this event callback
    onInputValueChange: ({ inputValue }) => {
      // If the user has cleared the input reset selection and state.
      if (inputValue.length === 0) {
        setDisplayedItems(items);
        reset();
        onInputChange("");
        return;
      }

      const itemMatchingInput = items.find(
        (item) =>
          inputValue === item.props.searchValue ||
          inputValue === item.props.value,
      );

      // once a selection is made, show all options in the dropdown
      if (itemMatchingInput) {
        setDisplayedItems(items);

        // filter by input value if filtering is enabled
      } else if (!disableFiltering) {
        const actionItems = items.filter(isAction);
        const filteredItems = filterItemsByInput(
          items.filter((item) => !isAction(item) && isSelectable(item)),
          inputValue.toLowerCase(),
        );
        setDisplayedItems([...filteredItems, ...actionItems]);
      }

      onInputChange(inputValue);
    },
    // <https://www.downshift-js.com/use-select#state-reducer>
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      const { selectedItem: previousSelectedItem } = state;
      const { selectedItem: newSelectedItem } = changes;

      // When users select an action, the selectedItem should not update.
      // The dropdown should close and any existing selection should be preserved.
      if (isAction(newSelectedItem)) {
        newSelectedItem.props.onSelect();
        return {
          ...changes,
          selectedItem: previousSelectedItem,
          inputValue: itemToString(previousSelectedItem),
          isOpen: false,
        };
      }

      // Clear input on blur if the user hasn't made a selection
      if (type === useCombobox.stateChangeTypes.InputBlur) {
        return {
          ...changes,
          inputValue: selectedItem ? itemToString(selectedItem) : "",
        };
      }

      // Change callback is invoked when the selectedItem changes.
      // Leave the dropdown open until user blurs the input.
      if (
        isSelectable(newSelectedItem) &&
        previousSelectedItem !== newSelectedItem
      ) {
        onChange(newSelectedItem.props.value);
        return {
          ...changes,
          isOpen: true,
        };
      }

      return changes;
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
      container: createUseLayerContainer,
    });

  // renders a single combobox item
  const renderItem = (item, index) => {
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
                    <span className="narmi-icon-check fontSize--l fontWeight--bold" />
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
  // options. In that case, Combobox should render a normal TextInput.
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
        data-testid={testId}
        {...triggerProps}
      >
        <TextInput
          error={errorText}
          label={label}
          value={inputValue}
          startIcon={icon}
          endContent={renderEndContent(isOpen)}
          {...getInputProps({
            onFocus: handleMenuToggle,
            onClick: handleMenuToggle,
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
                "nds-combobox-list--error": !!errorText,
              },
            ])}
            {...getMenuProps(layerProps)}
            style={{
              width: triggerBounds?.width || "auto",
              transform: `${errorText ? `translateY(${layerSide === "top" ? "0px" : "-22px"} )` : "none"}`,
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
  /** Function to render content at the end of the input.
   * Defaults to a function that renders a chevron icon that toggles based on the open state of the combobox.
   *
   * Signature: `(isOpen) => React.ReactNode`
   */
  renderEndContent: PropTypes.func,
};

Combobox.Item = ComboboxItem;
Combobox.Heading = ComboboxHeading;
Combobox.Category = ComboboxCategory;
Combobox.Action = ComboboxAction;
export default Combobox;
