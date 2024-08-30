/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import PropTypes from "prop-types";
import { useSelect, useMultipleSelection } from "downshift";
import { useLayer } from "react-laag";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import MultiSelectItem from "./MultiSelectItem";
import FieldToken from "../FieldToken";

const noop = () => {};

/**
 * @param item JXS node
 * @returns string
 */
const itemToString = (item) =>
  !item?.props ? "" : item.props.searchValue || item.props.value;

/**
 * Check an item component against the tokens list to see if it's currently selected
 */
const isSelected = (selectedItems, item) =>
  selectedItems.map(itemToString).includes(itemToString(item));

/**
 * Gets full item element by its `value` prop
 */
const getSelectedItems = (values, items) =>
  items.filter((item) => values.includes(item.props.value));

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
  selectedItems: selectedItemsProp = [],
  onSelectedItemsChange: onChangeProp = noop,
  disabled = false,
  fieldValue,
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
  } = useMultipleSelection({
    initialSelectedItems: getSelectedItems(selectedItemsProp, items),
    stateReducer: (state, actionAndChanges) => {
      const { type, changes, selectedItem } = actionAndChanges;
      let newSelectedItems = [...new Set(changes.selectedItems)];

      switch (type) {
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          newSelectedItems = newSelectedItems.filter(
            // eslint-disable-next-line react/prop-types
            ({ props }) => props.value !== selectedItem.props.value,
          );
          onChangeProp(newSelectedItems.map(itemToString));
          return {
            ...changes,
            selectedItems: newSelectedItems,
          };
        case useMultipleSelection.stateChangeTypes.FunctionAddSelectedItem:
          onChangeProp(newSelectedItems.map(itemToString));
          return {
            ...changes,
            selectedItems: newSelectedItems,
          };
        default:
          return changes;
      }
    },
  });

  /** @see https://www.downshift-js.com/use-select */
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    disabled,
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
          if (isSelected(selectedItems, newSelectedItem)) {
            removeSelectedItem(newSelectedItem);
          } else if (newSelectedItem) {
            addSelectedItem(newSelectedItem);
          }
          return;
        default:
          return;
      }
    },
  });

  /** @see https://github.com/everweij/react-laag#api-docs */
  const { renderLayer, triggerProps, triggerBounds, layerProps, layerSide } =
    useLayer({
      isOpen,
      auto: true,
      snap: true,
      triggerOffset: 0,
      containerOffset: 0,
      placement: "bottom-start",
      possiblePlacements: ["top-start", "bottom-start"],
    });

  const hasSelectedItem = selectedItems.length > 0;

  const renderTokens = () =>
    selectedItems.map((itemComponent, i) => {
      const tokenLabel = itemToString(itemComponent);
      const isLastToken = i === selectedItems.length - 1;
      return (
        <span
          key={`${i}-${tokenLabel}`}
          className={cc([
            "padding--y--xs",
            {
              "padding--right--s": isLastToken,
              "padding--right--xs": !isLastToken,
            },
          ])}
        >
          <FieldToken
            disabled={disabled}
            label={tokenLabel}
            onDismiss={() => removeSelectedItem(itemComponent)}
            {...getSelectedItemProps({
              selectedItem: itemComponent,
              i,
            })}
          />
        </span>
      );
    });

  return (
    <div className="nds-multiselect" data-testid={testId}>
      <input
        type="hidden"
        name={name}
        id={name}
        value={fieldValue || selectedItems.map(itemToString).join(",")}
      />
      <DropdownTrigger
        disabled={disabled}
        isOpen={isOpen}
        labelText={label}
        startContent={renderTokens()}
        errorText={errorText}
        labelProps={{ ...getLabelProps() }}
        {...getToggleButtonProps(
          getDropdownProps({
            ...triggerProps,
          }),
        )}
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
              [`nds-select-list--active--${layerSide}`]: isOpen,
            },
          ])}
          {...getMenuProps(layerProps)}
          style={{
            width: triggerBounds?.width,
            transform: `translateY(${layerSide == "top" ? "3px" : "-3px"})`,
            ...layerProps.style,
          }}
        >
          {isOpen && (
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
                  role="option"
                  aria-selected={isSelected(selectedItems, item).toString()}
                >
                  {isSelected(selectedItems, item) && (
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
   * When passed, the MultiSelect becomes fully controlled.
   * Use `onSelectedItemsChange` to manage this value.
   */
  selectedItems: PropTypes.arrayOf(PropTypes.string),
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
  /**
   * Value for the input with the given `name` prop.
   * This should be the value of the field in the submitted form.
   */
  fieldValue: PropTypes.string,
  /**
   * Disables the input and all user interaction.
   * You may still pass in `selectedItems` if items need to be selected
   * when the input is disabled.
   */
  disabled: PropTypes.bool,
};

MultiSelect.Item = MultiSelectItem;
export default MultiSelect;
