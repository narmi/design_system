import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import { useCombobox } from "downshift";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import TextInput from "../TextInput";

const noop = () => {};

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
 * TK
 * TODO: story with section headings
 * TODO: dropdown indicator (ala Select)
 * TODO: default selection?
 * TODO: tests
 */
const Combobox = ({
  label,
  onChange = noop,
  children,
  disableFiltering = false,
  testId,
}) => {
  // Initial items includes all children that are
  // `Combobox.Item` or `Combobox.Heading` children
  const initialItems = React.Children.toArray(
    children.filter(({ props }) => "value" in props || "text" in props)
  );

  const [displayedItems, setDisplayedItems] = useState(initialItems);

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
    itemToString: (item) => item.props.value,
    onInputValueChange: ({ inputValue }) => {
      // Typeahead behavior - we adjust the list of available options passed
      // into `useCombobox` by filtering the initial items list from input value
      if (!disableFiltering) {
        const filteredItems = initialItems
          .filter(isSelectable)
          .filter((item) =>
            item.props.value.toLowerCase().startsWith(inputValue.toLowerCase())
          );

        setDisplayedItems(filteredItems);
      }

      // if the user clears the input...
      if (inputValue.length === 0) {
        setDisplayedItems(initialItems); // restore original list in dropdown
        reset(); // clear any active selections
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      let newSelection = "";
      if (selectedItem) {
        newSelection = selectedItem.props.value;
      }
      onChange(newSelection);
    },
  });

  const hasSelectedItem = !!selectedItem;

  return (
    <div
      className={cc(["nds-combobox", { "nds-combobox--active": isOpen }])}
      {...getComboboxProps()}
      data-testid={testId}
    >
      <TextInput
        label={label}
        value={inputValue}
        startIcon="search"
        {...getInputProps({
          onFocus: () => {
            if (!isOpen) {
              openMenu();
            }
          },
          onClick: () => {
            if (!isOpen) {
              openMenu();
            }
          },
          onBlur: () => {
            // If the user has selected an option, we should
            // always set that as the value of the input.
            if (hasSelectedItem) {
              setInputValue(selectedItem.props.value);
            }
          },
        })}
      />
      <ul
        className={cc([
          "nds-combobox-list",
          "list--reset bgColor--white rounded--bottom",
          "border--right border--bottom border--left",
          { "nds-combobox-list--active": isOpen },
        ])}
        {...getMenuProps()}
      >
        {isOpen &&
          displayedItems.map((item, index) => {
            let result = (
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
              result = (
                <li
                  key={`${item}-${index}`}
                  className={cc([
                    "nds-combobox-item",
                    "alignChild--left--center padding--x--s padding--y--xs",
                    {
                      "nds-combobox-item--highlighted":
                        highlightedIndex === index,
                      "rounded--top": index === 0,
                      "rounded--bottom": index === displayedItems.length - 1,
                      "nds-combobox-item--hasGutter": hasSelectedItem,
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
              );
            }

            return result;
          })}
      </ul>
    </div>
  );
};

Combobox.propTypes = {
  /** Label for the select control */
  label: PropTypes.string.isRequired,
  /** Change callback. Called when an item is selected, with the `value` of the selected item */
  onChange: PropTypes.func,
  /**
   * Set to `true` to disable the default behavior of filtering the list
   * as the user types.
   */
  disableFiltering: PropTypes.bool,
  /**
   * Error message.
   * When passed, this will cause the trigger to render in error state.
   */
  errorText: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  // TODO: startIcon
};

Combobox.Item = ComboboxItem;
Combobox.Heading = ComboboxHeading;
export default Combobox;
