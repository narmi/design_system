/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelect, useMultipleSelection } from "downshift";
import { useLayer } from "react-laag";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import MultiSelectItem from "./MultiSelectItem";

// :TIX:FIXME:
// -? Consider making the dropdown take `content` instead of `tokens`

const noop = () => {};

/**
 * @param item JXS node
 * @returns string
 */
const itemToString = (item) =>
  !item?.props ? "" : item.props.searchValue || item.props.value;
const itemsToStrings = (items) => items.map(itemToString);

/**
 * Check an item component against the tokens list to see if it's currentlly selected
 */
const isSelected = (selectedItem, item) => selectedItem === item;

/**
 * Get new list of `MenuSelect.item` components that are selected after
 * user dismisses a token.
 * @param {Array} newTokenLabels
 * @param {Array} selectedItems
 * @returns Array
 */
export const getUpdatedSelection = (newTokenLabels, selectedItems) =>
  selectedItems.filter((item) => newTokenLabels.includes(itemToString(item)));

/**
 * Accessible multiple select control for giving users the ability to select
 * multiple options from a list of options.
 *
 * Typeahead is enabled based on the `value` prop of `MultiSelect.Item`
 * elements passed in. You may also set a custom `searchValue`
 * on each `MultiSelect.Item` for control over typeahead behavior.
 */
const MultiSelect = ({
  name,
  label,
  children,
  onSelectedItemsChange: onChangeProp = noop,
  errorText,
  testId,
}) => {
  const items = React.Children.toArray(children);

  /** @see https://www.downshift-js.com/use-multiple-selection/#usage-with-select  */
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({ initialSelectedItems: [] });

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
    selectedItem: null,
    id: name || `nds-multiselect-${label}`,
    items,
    itemToString,
    stateReducer: (state, actionAndChanges) => {
      const { changes: newChanges, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...newChanges,
            isOpen: true, // keep menu open for users to select more
            highlightedIndex: state.highlightedIndex, // keep highlight in place
          };
        default:
          return newChanges;
      }
    },
    onStateChange: ({ type, selectedItem: newSelectedItem }) => {
      switch (type) {
        case useSelect.stateChangeTypes.MenuBlur:
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            addSelectedItem(newSelectedItem);
          }
          return;
        default:
          return;
      }
    },
  });

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

  const hasSelectedItem = selectedItems.length > 0;
  const tokens = [...new Set(itemsToStrings(selectedItems))];

  const handleTokensChange = (newTokenLabels) => {
    console.info(
      `tokens change with: ${JSON.stringify(newTokenLabels, null, 2)}`,
    );
  };

  return (
    <div className="nds-multiselect" data-testid={testId}>
      <DropdownTrigger
        isOpen={showMenu}
        labelText={label}
        tokens={tokens}
        onTokensChange={handleTokensChange}
        errorText={errorText}
        labelProps={{ ...getLabelProps() }}
        {...getToggleButtonProps({
          ...triggerProps,
          ...getDropdownProps({ preventKeyAction: isOpen }),
        })}
        style={{
          ...triggerProps.style,
        }}
      />
      {renderLayer(
        <div
          className={cc([
            "nds-multiselect-list",
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
          {showMenu && (
            <ul className="list--reset">
              {items.map((item, index) => (
                <li
                  key={`item-${index}`}
                  className={cc([
                    "nds-multiselect-item",
                    "alignChild--left--center padding--x--s padding--y--xs",
                    {
                      "nds-select-item--highlighted":
                        highlightedIndex === index,
                      "rounded--top": index === 0,
                      "rounded--bottom": index === items.length - 1,
                      "nds-select-item--hasGutter": hasSelectedItem,
                    },
                  ])}
                  {...getItemProps({ item, index })}
                >
                  {isSelected(selectedItem, item) && (
                    <span className="narmi-icon-check fontSize--l fontWeight--bold" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>,
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  /** unique name attribute for the input (used for `id` and `name`) */
  name: PropTypes.string.isRequired,
  /** Label for the select control */
  label: PropTypes.string.isRequired,
  /**
   * Change callback for user actions that select or deselect items.
   * Called with an array of selected item values.
   */
  onSelectedItemsChange: PropTypes.func,
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

MultiSelect.Item = MultiSelectItem;
export default MultiSelect;
