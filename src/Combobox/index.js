import React, { useState } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import iconSelection from "src/icons/selection.json";
import { useCombobox } from "downshift";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import TextInput from "../TextInput";

const noop = () => {};

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
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
  children,
  disableFiltering = false,
  errorText,
  icon,
  testId,
}) => {
  const childArray = React.Children.toArray(children);

  // Initial items includes all children that are
  // `Combobox.Item` or `Combobox.Heading` children
  const initialItems =
    childArray.length < 1
      ? []
      : childArray.filter(({ props }) => "value" in props || "text" in props);

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
    inputValue: controlledInputValue,
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
  });

  // It is possible that a consumer may have nothing to pass to `children`.
  // For example, if an API response hasn't completed to load in the autocomplete
  // options. In that case, Cobmobox should render a normal TextInput.
  if (initialItems.length < 1) {
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

  const hasSelectedItem = !!selectedItem;

  return (
    <div
      className={cc(["nds-combobox", { "nds-combobox--active": isOpen }])}
      {...getComboboxProps()}
      data-testid={testId}
    >
      <TextInput
        error={errorText}
        label={label}
        value={inputValue}
        startIcon={icon}
        endIcon={isOpen ? "chevron-up" : "chevron-down"}
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
   * Error message.
   * When passed, this will cause the input to render in error state.
   */
  errorText: PropTypes.string,
  /** Name of icon to place at the start of the input */
  icon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

Combobox.Item = ComboboxItem;
Combobox.Heading = ComboboxHeading;
export default Combobox;
