/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import PropTypes from "prop-types";
import { useSelect } from "downshift";
import { useLayer } from "react-laag";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";
import SelectCategory from "./SelectCategory";

const noop = () => {};

// TODO: open category if current selection is in it
// TODO: update tests

/**
 * @param {Object} item a Select.Item or Select.Action component
 * @returns {Boolean} true if the item is a Select.Action
 */
export const isAction = (item) => {
  let result = false;
  if (item && item.props) {
    result = "onSelect" in item.props;
  }
  return result;
};

/**
 * Sets the selected value in the DropdownTrigger.
 * A Select.Action should _not_ display as selected in the button.
 *
 * @param {Object} item the currently selected Select.Item or Select.Action
 * @returns {String|Node} The value to display in the trigger button
 */
export const getSelectedItemDisplay = (item) => {
  let result = "";
  if (item && !isAction(item)) {
    result = item.props.children;
  }
  return result;
};

/**
 * @param {String} value `value` of the Select.Item to get
 * @param {Array} items Select.Item nodes
 * @returns {ReactElement|String} the Select.Item elemenet found or an empty string
 */
export const getItemByValue = (value, items) => {
  const founditem = items
    .filter((item) => !isAction(item)) // action items are not selectable
    .filter(({ props }) => props.value === value)
    .pop();

  return founditem || "";
};

/**
 * @param {Object} item an item from `items`
 * @param {array} items downshift index `items`
 * @returns {Number} index of item
 */
export const getItemIndex = ({ props }, items) => {
  const values = items.map(({ props }) => props.value);
  return values.indexOf(props.value);
};

/**
 * @param {Object} highlightedIndex index of currently highlight item
 * @param {Array} categoryChildren child items in a given category
 * @param {Array} items downshift `items`
 * @returns {Boolean} if the provided item is in the category
 */
export const isHighlightedInCategory = (
  highlightedIndex,
  categoryChildren,
  items
) => {
  if (highlightedIndex < 0) return false;
  const highlightedValue = items[highlightedIndex].props.value;
  const categoryValues = categoryChildren.map((child) => child.props.value);
  return categoryValues.includes(highlightedValue);
};

/**
 * @param {Object} selectedItem
 * @param {Array} categoryChildren child items in a given category
 * @returns {Boolean} if the selected item is in the given cagetory children
 */
export const isSelectedItemInCategory = (selectedItem, categoryChildren) => {
  if (!selectedItem) return false;
  const selectedValue = selectedItem.props.value;
  const categoryValues = categoryChildren.map((child) => child.props.value);
  return categoryValues.includes(selectedValue);
};

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
  errorText,
  testId,
}) => {
  let items = [];
  let categories = [];

  const allChildren = React.Children.toArray(children);

  // If categories are being used, extract items from categories
  if (allChildren.some(({ type }) => type.displayName === "Select.Category")) {
    items = allChildren.flatMap(({ props }) =>
      React.Children.toArray(props.children)
    );
    categories = allChildren.map(({ props }) => ({
      label: props.label,
      categoryChildren: React.Children.toArray(props.children),
    }));
  } else {
    items = allChildren;
  }

  const downshiftOpts = {
    id: id || `nds-select-${label}`,
    items,
    initialSelectedItem: defaultValue && getItemByValue(defaultValue, items),
    initialIsOpen: defaultOpen,
    itemToString: (item) => item.props.value || item.props.children, // typeahead string
    onSelectedItemChange: ({ selectedItem }) => {
      // for Select.Action items, we only fire the side effect
      if (isAction(selectedItem)) {
        selectedItem.props.onSelect();
      } else {
        onChange(selectedItem.props ? selectedItem.props.value : "");
      }
    },
  };

  // When `value` prop is passed, the Select becomes fully controlled and the
  // selected item is set programmitically by the consumer only
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
  } = useSelect(downshiftOpts);

  const hasCategories = categories.length > 0;
  const hasSelectedItem = selectedItem !== undefined && selectedItem.props;
  const showMenu = isOpen && items.length > 0;

  /** @see https://github.com/everweij/react-laag#api-docs */
  const { renderLayer, triggerProps, triggerBounds, layerProps, layerSide } =
    useLayer({
      isOpen: showMenu,
      auto: true,
      snap: true,
      triggerOffset: 0,
      containerOffset: 0,
      placement: "bottom-start",
      possiblePlacements: ["top-start", "bottom-start"],
    });

  const renderItem = (item, items) => {
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
            "nds-select-item--hasGutter": hasSelectedItem || hasCategories,
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
  };

  return (
    <div className="nds-select" data-testid={testId}>
      <DropdownTrigger
        isOpen={showMenu}
        labelText={label}
        displayValue={getSelectedItemDisplay(selectedItem)}
        labelProps={{ ...getLabelProps() }}
        errorText={errorText}
        {...getToggleButtonProps(triggerProps)}
        style={{
          ...triggerProps.style,
        }}
      />
      {renderLayer(
        <div
          className={cc([
            "nds-select-list",
            "bgColor--white",
            {
              "rounded--bottom": layerSide === "bottom",
              "rounded--top": layerSide === "top",
              [`nds-select-list--active--${layerSide}`]: showMenu,
            },
          ])}
          {...getMenuProps(layerProps)}
          style={{
            width: triggerBounds?.width,
            transform: `translateY(${layerSide == "top" ? "3px" : "-3px"})`,
            ...layerProps.style,
          }}
        >
          {showMenu &&
            hasCategories &&
            categories.map(({ label, categoryChildren }) => (
              <details
                key={label}
                className="nds-select-category"
                open={
                  isHighlightedInCategory(
                    highlightedIndex,
                    categoryChildren,
                    items
                  ) || isSelectedItemInCategory(selectedItem, categoryChildren)
                }
              >
                <summary className="fontWeight--bold alignChild--left--center padding--x--s padding--y-xs">
                  <span>{label}</span>
                  <span className="nds-category-icon narmi-icon-chevron-down" />
                  <span className="nds-category-icon narmi-icon-chevron-up" />
                </summary>
                <ul className="list--reset">
                  {categoryChildren.map((item) => renderItem(item, items))}
                </ul>
              </details>
            ))}
          {showMenu && !hasCategories && (
            <ul className="list--reset">
              {items.map((item) => renderItem(item, items))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  /** unique id attribute of the input (used for `htmlFor`) */
  id: PropTypes.string.isRequired,
  /** Label for the select control */
  label: PropTypes.string.isRequired,
  /** Change callback. Called with value string from the selected item */
  onChange: PropTypes.func,
  /**
   * Sets selected item by value and makes the Select **fully controlled**.
   *
   * When passing a `value`, you must provide an `onChange` handler to update it
   */
  value: PropTypes.string,
  /**
   * Use to set a default selection by passing the `value` prop
   * of one of the `<Select.Item>` children.
   * The Select will remain uncontrolled.
   */
  defaultValue: PropTypes.string,
  /** Open the dropdown on render if `true` */
  defaultOpen: PropTypes.bool,
  /**
   * Error message.
   * When passed, this will cause the trigger to render in error state.
   */
  errorText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

Select.Item = SelectItem;
Select.Action = SelectAction;
Select.Category = SelectCategory;
export default Select;
