import React from "react";
import PropTypes from "prop-types";
import { useSelect } from "downshift";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";

// TODO: test in a modal

const noop = () => {};

/**
 * @param {Object} item a Select.Item or Select.Action component
 * @returns {Boolean} true if the item is a Select.Action
 */
export const isAction = (item) => {
  let result = false;
  if (item) {
    result = item.type.name === "SelectAction";
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
 * Accessible custom select control for giving users the ability to select one option from a list of options.
 * `Select` also supports the ability to pass in a `<Select.Action>` that acts as an option that only triggers a side effect.
 * Typeahead is enabled based on the `value` prop of `<Select.Item>` elements passed in.
 */
const Select = ({
  label,
  children,
  onChange = noop,
  defaultValue,
  defaultOpen = false,
  errorText,
}) => {
  // only include valid Select children in options items
  const items = React.Children.toArray(children).filter((child) =>
    ["SelectItem", "SelectAction"].includes(child.type.name)
  );

  const defaultSelectedItem = items
    .filter((item) => !isAction(item)) // action items may not be selected by default
    .filter((item) => item.props.value === defaultValue)
    .pop();

  /** @see https://www.downshift-js.com/use-select */
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    defaultSelectedItem,
    initialIsOpen: defaultOpen,
    itemToString: (item) => item.props.value || item.props.children, // typeahead string
    onSelectedItemChange: ({ selectedItem }) => {
      // for Select.Action items, we only fire the side effect
      if (isAction(selectedItem)) {
        selectedItem.props.onSelect();
      } else {
        onChange(selectedItem.props.value);
      }
    },
  });

  return (
    <div className="nds-select">
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
                },
              ])}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

Select.propTypes = {
  /** Label for the select control */
  label: PropTypes.string.isRequired,
  /** Change callback. Called with value string from the selected item */
  onChange: PropTypes.func,
  /**
   * Use to set a default selection by passing the `value` prop
   * of one of the `<Select.Item>` children.
   */
  defaultValue: PropTypes.string,
  /** Open the dropdown on render if `true` */
  defaultOpen: PropTypes.bool,
  /**
   * Error message.
   * When passed, this will cause the trigger to render in error state.
   */
  errorText: PropTypes.string,
};

Select.Item = SelectItem;
Select.Action = SelectAction;
export default Select;
