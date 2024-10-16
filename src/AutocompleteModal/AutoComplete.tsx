/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import cc from "classcat";
import { useCombobox } from "downshift";
import TextInput from "../TextInput";
import Row from "../Row";

export type AutoCompleteItem = React.ReactElement;

export interface AutoCompleteProps {
  /** Input label */
  label: string;
  /** ComboboxModal.Item children */
  items: AutoCompleteItem[];
  selectedItem: AutoCompleteItem | null;
  /** Selection change event callback */
  onChange?: (item: AutoCompleteItem) => void;
  /** Input change event callback */
  onInputChange?: (e: string) => void;
  /** Optional pinned footer conent; use for action buttons */
  footerContent?: React.ReactNode;
}

export const itemToString = (item: AutoCompleteItem) => item.props.value || "";

export const filterItems = (items: AutoCompleteItem[], inputValue: string) =>
  items.filter((item) =>
    itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase()),
  );

/**
 * A simplified Combobox component that renders in a Popup.
 * Useful for inline editing of things like table items where we want to
 * provide an autocomplete of possible values.
 *
 * Allows single selection only. The selected value is controlled, allowing the selection to render in the trigger.
 * trigger area.
 */
const AutoComplete = ({
  label,
  items: allItems,
  selectedItem: selectedItemProp,
  onChange = () => {},
  onInputChange = () => {},
  footerContent,
}: AutoCompleteProps) => {
  const [items, setItems] = useState(allItems);
  const {
    selectedItem,
    highlightedIndex,
    getComboboxProps,
    getMenuProps,
    getInputProps,
    getItemProps,
  } = useCombobox({
    items,
    initialSelectedItem: selectedItemProp,
    initialInputValue: "",
    onInputValueChange({ inputValue }) {
      setItems(
        inputValue?.length > 0 ? filterItems(allItems, inputValue) : allItems,
      );
      onInputChange(inputValue);
    },
    onSelectedItemChange({ selectedItem }) {
      if (selectedItem) {
        onChange(selectedItem);
      }
    },
    itemToString(item: React.ReactNode) {
      // @ts-expect-error downshift has an odd type for `item` here
      return itemToString(item);
    },
  });

  return (
    <div
      className={cc(["nds-autocompleteModal-autocomplete", "rounded--all"])}
      {...getComboboxProps()}
    >
      <div className="nds-autocompleteModal-input">
        <TextInput label={label} {...getInputProps()} />
      </div>
      <ul
        className="nds-autocompleteModal-menu list--reset"
        {...getMenuProps()}
      >
        {items.length === 0 && !selectedItem && (
          <li className="nds-autocompleteModal-item padding--x--s padding--y--xs">
            No results found
          </li>
        )}
        {items.map((item, index) => (
          <li
            className={cc([
              "nds-autocompleteModal-item",
              "padding--x--s padding--y--xs",
              {
                "nds-autocompleteModal-item--highlighted":
                  highlightedIndex === index,
              },
            ])}
            key={`${item?.props.value}-${index}`}
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
        <div className="nds-autocompleteModal-footer padding--all--s border--top">
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
