/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import Item from "./Item";
import Popover from "../Popover";
import AutoComplete from "./AutoComplete";
import { AutoCompleteItem } from "./AutoComplete";

export interface AutocompleteModalProps {
  /** Input label */
  inputLabel: string;
  /** Trigger element */
  trigger: React.ReactNode | ((isActive: boolean) => React.ReactNode);
  /** AutocompleteModal.Item children */
  children: React.ReactNode[];
  /** Selection change event callback */
  onChange?: (value: string) => void;
  /** Input change event callback - called with value of selected item */
  onInputChange?: (value: string) => void;
  /** Optional pinned footer conent; use for action buttons */
  footerContent?: React.ReactNode;
}

/**
 * A simplified Combobox component that renders in a Popup.
 * Useful for inline editing of things like table items where we want to
 * provide an autocomplete of possible values.
 *
 * Allows single selection only. The selected value will be rendered in the
 * trigger area.
 */
const AutocompleteModal = ({
  inputLabel,
  children,
  trigger,
  onChange = () => {},
  onInputChange = () => {},
  footerContent,
}: AutocompleteModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<React.ReactElement | null>(
    null,
  );
  const items = React.Children.toArray(children);

  const handleSelection = (item) => {
    setIsOpen(false);
    setSelectedItem(item);
    onChange(item.props.value);
  };

  const togglePopover = () => {
    setIsOpen((o) => !o);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Popover
        isOpen={isOpen}
        onUserDismiss={closePopover}
        onUserEnable={togglePopover}
        alignment="center"
        side="top"
        autoFocus={true}
        hasShadow={false}
        content={
          <div className="nds-autocompleteModal-positionedEl">
            <AutoComplete
              items={items as AutoCompleteItem[]}
              label={inputLabel}
              onChange={handleSelection}
              onInputChange={onInputChange}
              footerContent={footerContent}
              selectedItem={selectedItem as AutoCompleteItem}
            />
          </div>
        }
      >
        <span style={{ cursor: "pointer" }}>
          {typeof trigger === "function" ? trigger(isOpen) : trigger}
        </span>
      </Popover>
    </>
  );
};

AutocompleteModal.Item = Item;
export default AutocompleteModal;
