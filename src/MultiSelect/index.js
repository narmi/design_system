/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
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
 *
 * - kind: determines if the input shows "tokens" (default) or a summary.
 *         When kind === "summary", the selected tokens are not rendered; instead
 *         a summary string is displayed.
 * - isClearable: if true, a "Clear all" button is rendered on the right side of the input.
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
  kind = "tokens", // "tokens" or "summary"
  isClearable = false,
  summaryFormatter,
}) => {
  const items = React.Children.toArray(children);

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

  // Only sync internal state if the component is controlled.
  React.useEffect(() => {
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
      container: createUseLayerContainer,
    });

  const renderTokens = () =>
    selectedItems.map((itemComponent, i) => {
      const tokenLabel =
        itemComponent.props.tokenLabel || itemToString(itemComponent);
      return (
        <div key={`${i}-${tokenLabel}`}>
          <FieldToken
            disabled={disabled}
            label={tokenLabel}
            onDismiss={() => removeSelectedItem(itemComponent)}
            {...getSelectedItemProps({
              selectedItem: itemComponent,
              i,
            })}
          />
        </div>
      );
    });

  const hasSelectedItems = selectedItems.length > 0;

  // Compute summary text for "summary" kind.
  let summaryText = "";
  if (kind === "summary") {
    if (typeof summaryFormatter === "function") {
      const selectedLabels = selectedItems.map(
        (item) => item.props.tokenLabel || itemToString(item),
      );
      summaryText = summaryFormatter(selectedItems.length, selectedLabels);
    } else {
      if (selectedItems.length === 0) {
        summaryText = label;
      } else if (selectedItems.length === items.length) {
        summaryText = "All selected";
      } else {
        summaryText = `${selectedItems.length} selected`;
      }
    }
  }

  let triggerLabelText;
  let triggerStartContent;
  if (kind === "summary") {
    triggerLabelText = (
      <div
        className={cc([
          { "padding--y--xs": hasSelectedItems },
          { "padding--right--xxl": isClearable },
        ])}
      >
        {summaryText}
      </div>
    );
  } else {
    triggerLabelText = hasSelectedItems ? undefined : label;
    triggerStartContent = (
      <div
        className={cc([
          "nds-multiselect-tokensList",
          { "padding--right--xxl": isClearable },
        ])}
      >
        {renderTokens()}
      </div>
    );
  }

  // Render clear all button if isClearable is true and there are selected items.
  const triggerEndContent =
    isClearable && hasSelectedItems ? (
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
          Clear all
        </Button>
      </span>
    ) : null;

  return (
    <div className="nds-multiselect" data-testid={testId}>
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
          labelText={triggerLabelText}
          startContent={triggerStartContent}
          endContent={triggerEndContent}
          errorText={errorText}
          labelProps={{ ...getLabelProps() }}
          {...getToggleButtonProps()}
          style={{
            ...triggerProps.style,
          }}
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
  /**
   * Determines whether the input displays tokens or a summary.
   * Use "tokens" to render selected items as tokens (default) or "summary" to render a summary string.
   */
  kind: PropTypes.oneOf(["tokens", "summary"]),
  /**
   * If true, renders a "Clear all" button on the right side of the input.
   */
  isClearable: PropTypes.bool,
  /**
   * Optional function to format the summary text when kind is "summary".
   * The function is passed the total number of selected items and an array of labels,
   * and should return a string.
   */
  summaryFormatter: PropTypes.func,
};

MultiSelect.Item = MultiSelectItem;
export default MultiSelect;
