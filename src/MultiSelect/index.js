/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useMemo, useEffect, Children } from "react";
import PropTypes from "prop-types";
import { useSelect, useMultipleSelection } from "downshift";
import { useLayer } from "react-laag";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import Button from "../Button";
import MultiSelectItem from "./MultiSelectItem";
import FieldToken from "../FieldToken";
import Row from "../Row";
import { createUseLayerContainer } from "src/util/dom";

const noop = () => {};

/**
 * @param item JSX node
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
 * Default summary formatter function.
 *
 * Receives an object with:
 *   - selectedItems: Array of currently selected item React elements.
 *   - getSelectedItemProps: Helper function for token props.
 *   - removeSelectedItem: Function to remove a token.
 *   - disabled: Flag indicating if the component is disabled.
 *   - label: Placeholder text when no items are selected.
 *
 * If no items are selected, returns the label.
 * Otherwise, returns a container with FieldToken components.
 * Each token displays the tokenLabel (if provided) or falls back to the string value.
 */
const defaultSummaryFormatter = ({
  selectedItems,
  getSelectedItemProps,
  removeSelectedItem,
  disabled,
  label,
}) => {
  if (selectedItems.length === 0) {
    return label;
  }
  return (
    <div className="nds-multiselect-tokensList">
      {selectedItems.map((item, i) => {
        const tokenLabel = item.props.tokenLabel || itemToString(item);
        return (
          <FieldToken
            key={`${i}-${tokenLabel}`}
            label={tokenLabel}
            onDismiss={() => removeSelectedItem(item)}
            disabled={disabled}
            {...getSelectedItemProps({ selectedItem: item, i })}
          />
        );
      })}
    </div>
  );
};

/**
 * Accessible multiple select control for giving users the ability to select
 * multiple options from a list of options.
 *
 * Typeahead is enabled based on the `value` prop of `MultiSelect.Item`
 * elements passed in. You may also set a custom `searchValue`
 * on each `MultiSelect.Item` for control over typeahead behavior.
 *
 * - isClearable: if true, a "Clear all" button is rendered on the right side of the input.
 * - clearLabel: overridable text for the clear all button.
 * - summaryFormatter: an optional function that receives the number of selected items and an array of labels,
 *         and returns a string summary.
 */
const MultiSelect = ({
  name,
  label,
  children,
  // If selectedItems is defined it is controlled; otherwise uncontrolled.
  selectedItems: selectedItemsProp,
  onSelectedItemsChange: onChangeProp = noop,
  disabled = false,
  fieldValue,
  errorText,
  testId,
  clearLabel = "Clear all",
  isClearable = false,
  /**
   * Function to format the summary content.
   * Receives an object with:
   *   { selectedItems, getSelectedItemProps, removeSelectedItem, disabled, label }
   * Must return a React node.
   */
  summaryFormatter = defaultSummaryFormatter,
}) => {
  // Convert children to an array for easier processing.
  const items = useMemo(() => Children.toArray(children), [children]);

  // Determine if the component is controlled.
  const isControlled = selectedItemsProp !== undefined;

  /** @see https://www.downshift-js.com/use-multiple-selection/#usage-with-select  */
  const {
    getSelectedItemProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useMultipleSelection({
    initialSelectedItems: getSelectedItems(selectedItemsProp || [], items),
    stateReducer: (state, actionAndChanges) => {
      const { type, changes, selectedItem } = actionAndChanges;
      let newSelectedItems = [...new Set(changes.selectedItems)];

      switch (type) {
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          newSelectedItems = newSelectedItems.filter(
            ({ props: { value } }) => value !== selectedItem.props.value,
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

  // Only sync internal state if the component is controlled.
  useEffect(() => {
    if (isControlled) {
      const newSelectedItems = getSelectedItems(selectedItemsProp, items);
      setSelectedItems(newSelectedItems);
    }
  }, [isControlled, selectedItemsProp, items, setSelectedItems]);

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
    // Set selectedItem to null because multi-selection is managed separately.
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
      // Toggle selection when an item is clicked or activated via keyboard.
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
      container: createUseLayerContainer,
    });

  /**
   * Render the Clear All button if clearable and there are selected items.
   * Instead of using absolute positioning, we render it inline so that
   * the flexbox layout of the trigger naturally reserves space.
   */
  const triggerEndContent = useMemo(() => {
    if (isClearable && selectedItems.length > 0) {
      return (
        <span className="nds-multiselect-clearAll">
          <Button
            kind="plain"
            size="xs"
            onClick={(e) => {
              e.stopPropagation();
              if (isControlled) {
                onChangeProp([]);
              } else {
                setSelectedItems([]);
              }
            }}
          >
            {clearLabel}
          </Button>
        </span>
      );
    }
    return null;
  }, [
    isClearable,
    selectedItems,
    isControlled,
    onChangeProp,
    setSelectedItems,
    clearLabel,
  ]);

  // Remove dynamic padding because the flex layout now handles spacing.
  // We simply use triggerProps.style as provided.
  const triggerStyle = triggerProps.style;

  /**
   * Generate the content for the trigger using the summaryFormatter.
   * The formatter receives an object with the relevant arguments.
   */
  const triggerLabelContent = useMemo(() => {
    return summaryFormatter({
      selectedItems,
      getSelectedItemProps,
      removeSelectedItem,
      disabled,
      label,
    });
  }, [
    selectedItems,
    getSelectedItemProps,
    removeSelectedItem,
    disabled,
    label,
    summaryFormatter,
  ]);

  return (
    <div className="nds-multiselect" data-testid={testId}>
      {/* Hidden input for form submissions */}
      <input
        type="hidden"
        name={name}
        id={name}
        value={fieldValue || selectedItems.map(itemToString).join(",")}
      />
      <div {...triggerProps}>
        <DropdownTrigger
          disabled={disabled}
          isOpen={isOpen}
          labelText={triggerLabelContent}
          endContent={triggerEndContent}
          errorText={errorText}
          labelProps={{
            ...getLabelProps(),
            style: {
              ...getLabelProps().style,
              ...(isClearable ? { display: "block", paddingRight: 80 } : {}),
            },
          }}
          {...getToggleButtonProps()}
          style={{ ...triggerStyle, padding: "4px 90px 4px 8px" }}
        />
      </div>
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
            transform: `translateY(${layerSide === "top" ? "3px" : "-3px"})`,
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
                    },
                  ])}
                  {...getItemProps({ item, index })}
                  role="option"
                  aria-selected={isSelected(selectedItems, item).toString()}
                >
                  <Row as="span">
                    <Row.Item as="span">{item}</Row.Item>
                    {isSelected(selectedItems, item) && (
                      <Row.Item as="span" shrink>
                        <span className="narmi-icon-check fontSize--l fontWeight--bold" />
                      </Row.Item>
                    )}
                  </Row>
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
  /** If true, renders a "Clear all" button on the right side of the trigger */
  isClearable: PropTypes.bool,
  /** Optional label override for the clear all button */
  clearLabel: PropTypes.string,
  /**
   * Optional function to format the summary text when kind is "summary".
   * The function is passed the number of selected items and an array of labels,
   * and returns a string summary.
   */
  summaryFormatter: PropTypes.func,
};

MultiSelect.Item = MultiSelectItem;
export default MultiSelect;
