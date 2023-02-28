import React from "react";
import PropTypes from "prop-types";
import { useSelect } from "downshift";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";

const noop = () => {};

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
  // The menu should only render children that have `value` or `onSelect` prop
  const items = React.Children.toArray(
    children.filter(({ props }) => "value" in props || "onSelect" in props)
  );

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

  const hasSelectedItem = selectedItem !== undefined && selectedItem.props;

  return (
    <div className="nds-select" data-testid={testId}>
      <DropdownTrigger
        isOpen={isOpen}
        labelText={label}
        displayValue={getSelectedItemDisplay(selectedItem)}
        labelProps={{ ...getLabelProps() }}
        errorText={errorText}
        {...getToggleButtonProps()}
      />
      <ul
        className={cc([
          "nds-select-list",
          "list--reset bgColor--white rounded--all border--all",
          { "nds-select-list--active": isOpen },
        ])}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              key={`${item}${index}`}
              className={cc([
                "nds-select-item",
                "alignChild--left--center padding--x--s padding--y--xs",
                {
                  "nds-select-item--highlighted": highlightedIndex === index,
                  "rounded--top": index === 0,
                  "rounded--bottom": index === items.length - 1,
                  // make a left gutter for the checkmark if any item selected
                  "nds-select-item--hasGutter": hasSelectedItem,
                },
              ])}
              {...getItemProps({ item, index })}
            >
              {hasSelectedItem &&
                selectedItem.props.value === item.props.value && (
                  <span className="narmi-icon-check fontSize--l fontWeight--bold" />
                )}
              {item}
            </li>
          ))}
      </ul>
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
export default Select;
