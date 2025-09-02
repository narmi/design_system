/* eslint-disable jsx-a11y/no-autofocus */
import React, { useMemo } from "react";
import cc from "classcat";
import { useCombobox } from "downshift";
import { useLayer } from "react-laag";
import Row from "../Row";
import TableInput from "../TableInput";
import Item from "./Item";
export type { TableAutocompleteItemProps } from "./Item";
import { createUseLayerContainer } from "../util/dom";

export type TableAutocompleteItem = React.ReactElement;

export interface TableAutocompleteProps {
  /** Input label for accessibility */
  label: string;
  /**
   * TableAutocomplete.Item children
   * Children must be an array of TableAutocomplete.Item components.
   */
  children: TableAutocompleteItem[];
  /** Selection change event callback - called with value of selected item */
  onChange?: (value: string) => void;
  /** Input change event callback */
  onInputChange?: (value: string) => void;
  /** Optional custom filter function for items. Signature: (items, inputValue) => filteredItems[] */
  filterItemsByInput?: (
    items: TableAutocompleteItem[],
    inputValue: string,
  ) => TableAutocompleteItem[];
  /** Optional pinned footer content; use for action buttons */
  footerContent?: React.ReactNode;
  /** Input placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** Optional controlled input value */
  inputValue?: string;
  /** Whether the input has an error */
  hasError?: boolean;
}

export const itemToString = (item: TableAutocompleteItem | null) =>
  item?.props.searchValue || item?.props.value || "";

export const filterItems = (
  items: TableAutocompleteItem[],
  inputValue: string,
) =>
  items.filter((item) =>
    itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase()),
  );

/**
 * A simplified Combobox component for table inline editing.
 * Useful for inline editing of table items where we want to
 * provide an autocomplete of possible values with a native input.
 *
 * Allows single selection only.
 */
const TableAutocomplete = ({
  label,
  children,
  onChange = () => {},
  onInputChange = () => {},
  filterItemsByInput = filterItems,
  footerContent,
  placeholder,
  isDisabled = false,
  hasError = false,
  inputValue,
}: TableAutocompleteProps) => {
  const isControlled = inputValue !== undefined;

  const allItems = useMemo(
    () => React.Children.toArray(children) as TableAutocompleteItem[],
    [children],
  );

  // For controlled mode, compute displayed items from inputValue
  // For uncontrolled mode, let downshift manage the filtering via stateReducer
  const [filteredItems, setFilteredItems] =
    React.useState<TableAutocompleteItem[]>(allItems);

  // Keep filteredItems in sync with allItems when uncontrolled
  React.useEffect(() => {
    if (!isControlled) {
      setFilteredItems(allItems);
    }
  }, [allItems, isControlled]);
  const itemsToDisplay = isControlled
    ? inputValue?.length > 0
      ? filterItemsByInput(allItems, inputValue)
      : allItems
    : filteredItems;

  // Compute selected item from inputValue if controlled
  const selectedItem = useMemo(() => {
    if (!isControlled || !inputValue) return null;
    return allItems.find((item) => itemToString(item) === inputValue) || null;
  }, [inputValue, allItems, isControlled]);

  /** @see https://www.downshift-js.com/use-combobox */
  const {
    highlightedIndex,
    getMenuProps,
    getInputProps,
    getItemProps,
    isOpen,
  } = useCombobox({
    items: itemsToDisplay,
    selectedItem,
    inputValue,
    onInputValueChange({ inputValue: downshiftInputValue }) {
      // For uncontrolled mode, handle filtering here
      if (!isControlled) {
        setFilteredItems(
          downshiftInputValue?.length > 0
            ? filterItemsByInput(allItems, downshiftInputValue)
            : allItems,
        );
      }
      onInputChange(downshiftInputValue || "");
    },
    onSelectedItemChange({ selectedItem: newSelectedItem }) {
      if (newSelectedItem) {
        onChange(newSelectedItem.props.value);
      }
    },
    itemToString(item: TableAutocompleteItem | null) {
      if (React.isValidElement(item)) {
        return itemToString(item as TableAutocompleteItem);
      }
      return "";
    },
  });

  /** @see https://github.com/everweij/react-laag#api-docs */
  const { renderLayer, triggerProps, layerProps, triggerBounds } = useLayer({
    isOpen,
    overflowContainer: true,
    auto: true,
    snap: true,
    placement: "bottom-start",
    possiblePlacements: ["top-start", "bottom-start"],
    preferY: "bottom",
    triggerOffset: 2,
    container: createUseLayerContainer,
  });

  return (
    <div className="nds-tableAutocomplete">
      <div {...triggerProps} style={{ display: "inline-block" }}>
        <TableInput
          label={label}
          placeholder={!isDisabled ? placeholder : undefined}
          isDisabled={isDisabled}
          hasError={hasError}
          {...getInputProps({
            "aria-labelledby": undefined, // use underlying aria-label
          })}
        />
      </div>
      {isOpen &&
        renderLayer(
          <div
            className={cc(["nds-tableAutocomplete-dropdown", "rounded--all"])}
            {...layerProps}
            style={{
              ...layerProps.style,
              width: triggerBounds?.width || "max-content",
            }}
          >
            <ul
              className="nds-tableAutocomplete-menu list--reset rounded--all"
              {...getMenuProps()}
            >
              {itemsToDisplay.length === 0 && !selectedItem && (
                <li
                  className="nds-tableAutocomplete-item padding--x--s padding--y--xs"
                  role="status"
                  aria-live="polite"
                >
                  No results found
                </li>
              )}
              {itemsToDisplay.map((item, index) => (
                <li
                  className={cc([
                    "nds-tableAutocomplete-item",
                    "padding--x--s padding--y--xs",
                    {
                      "nds-tableAutocomplete-item--highlighted":
                        highlightedIndex === index,
                    },
                  ])}
                  key={item?.props.value}
                  {...getItemProps({ item, index })}
                >
                  <Row>
                    <Row.Item>{item}</Row.Item>
                    {selectedItem &&
                      selectedItem.props.value === item.props.value && (
                        <Row.Item as="span" shrink>
                          <span className="narmi-icon-check fontSize--l fontWeight--bold" />
                        </Row.Item>
                      )}
                  </Row>
                </li>
              ))}
            </ul>
            {footerContent && (
              <div className="nds-tableAutocomplete-footer padding--x--s padding--y--xs border--top">
                {footerContent}
              </div>
            )}
          </div>,
        )}
    </div>
  );
};
TableAutocomplete.Item = Item;
export default TableAutocomplete;
