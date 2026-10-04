import React, { useState, useMemo, useEffect, type ReactElement } from "react";
import { useCombobox } from "downshift";
import cc from "classcat";
import { useField } from "../useField";
import useDropdownLayer from "../../hooks/useDropdownLayer";
import { FieldErrors } from "../Errors/index";
import Row from "../../Row";
import FieldComboboxItem from "./ComboboxItem";

import type { FieldBaseProps, FieldDecorationProps } from "../types";
import type { FieldComboboxItemProps } from "./ComboboxItem";

export interface FieldComboboxProps
  extends FieldBaseProps, Pick<FieldDecorationProps, "startIcon"> {
  /** Currently selected value (controlled). Empty string when nothing is selected. */
  value: string;
  /** Called with the new value when the selection changes, or `""` when it's cleared */
  onChange: (value: string) => void;
  /** Placeholder text when the input is empty */
  placeholder?: string;
  /** Field.Combobox.Item elements */
  children: React.ReactNode;
}

const { stateChangeTypes } = useCombobox;

/** Text shown in the input for an item, and matched against as the user types */
const getItemText = ({ props }: ReactElement<FieldComboboxItemProps>) =>
  props.searchValue ??
  (typeof props.children === "string" ? props.children : props.value);

/**
 * Field.Combobox renders a text input that filters a list of options,
 * styled consistently with Field.Text and Field.Select.
 * It uses downshift's `useCombobox` for keyboard navigation and ARIA,
 * and `useDropdownLayer` for dropdown positioning.
 *
 * Typing highlights the first matching option, and Enter, Tab or clicking
 * away selects it. Leaving the field with text that matches nothing puts
 * back the current selection; emptying the input clears it.
 */
export const FieldCombobox = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  startIcon,
  errors = [],
  isDisabled = false,
  renderHelperText,
  children,
}: FieldComboboxProps) => {
  const { errorId, labelId, controlProps } = useField({
    id,
    errors,
    isDisabled,
  });
  const [filterText, setFilterText] = useState("");

  // downshift's items are the item values, so they keep a stable identity
  // across renders; the elements are looked up by value.
  const itemsByValue = useMemo(
    () =>
      new Map(
        React.Children.toArray(children)
          .filter((child): child is ReactElement<FieldComboboxItemProps> =>
            React.isValidElement(child),
          )
          .map((item) => [item.props.value, item]),
      ),
    [children],
  );

  const itemToString = (itemValue: string | null) => {
    const item = itemValue ? itemsByValue.get(itemValue) : undefined;
    return item ? getItemText(item) : "";
  };

  const getMatches = (text: string) =>
    [...itemsByValue.keys()].filter((itemValue) =>
      itemToString(itemValue).toLowerCase().startsWith(text.toLowerCase()),
    );

  const getFirstMatchIndex = (text?: string) =>
    text && getMatches(text).length ? 0 : -1;

  const displayedValues = getMatches(filterText);
  const selectedItem = itemsByValue.has(value) ? value : null;

  const {
    isOpen,
    inputValue,
    highlightedIndex,
    setHighlightedIndex,
    setInputValue,
    closeMenu,
    getLabelProps,
    getInputProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useCombobox({
    items: displayedValues,
    selectedItem,
    itemToString,
    inputId: controlProps.id,
    labelId,
    onSelectedItemChange: ({ selectedItem: next }) => onChange(next ?? ""),
    // Show every option again the next time the menu opens
    onIsOpenChange: ({ isOpen: nextIsOpen }) => {
      if (!nextIsOpen) setFilterText("");
    },
    stateReducer: (state, { type, changes }) => {
      let next = changes;
      switch (type) {
        // Highlight the first match as the user types, so Enter or Tab selects it
        case stateChangeTypes.InputChange:
          return {
            ...changes,
            highlightedIndex: getFirstMatchIndex(changes.inputValue),
          };
        // Clicking back into the input (e.g. to move the caret) keeps the menu open
        case stateChangeTypes.InputClick:
          return state.isOpen ? state : changes;
        // Like Field.Select, Escape only closes the menu; it never clears the field
        case stateChangeTypes.InputKeyDownEscape:
          if (!state.isOpen) return state;
          break;
        // A new value from the parent closes the menu, so a stale highlight can't override it
        case stateChangeTypes.ControlledPropUpdatedSelectedItem:
          return { ...changes, isOpen: false, highlightedIndex: -1 };
        // Select the highlighted match (downshift skips this on click-away),
        // or clear the selection if the input was emptied
        case stateChangeTypes.InputBlur:
        case stateChangeTypes.InputKeyDownEnter:
          next = {
            ...changes,
            selectedItem:
              displayedValues[state.highlightedIndex] ??
              (state.inputValue ? changes.selectedItem : null),
          };
      }
      // Whenever the menu closes, the input shows the selection, dropping unmatched text
      return state.isOpen && next.isOpen === false
        ? { ...next, inputValue: itemToString(next.selectedItem ?? null) }
        : next;
    },
  });

  // The highlight is an index into the shown options, so when they change under
  // an open menu (added, removed or renamed), highlight the first match again
  const displayedKey = displayedValues.join("\n");
  useEffect(() => {
    if (isOpen) setHighlightedIndex(getFirstMatchIndex(filterText));
  }, [displayedKey]);

  // While closed, show the selected item, even if the parent rejected a change
  // or renamed it. Waits a tick so an accepted change doesn't flash the old text.
  const selectedText = itemToString(selectedItem);
  useEffect(() => {
    if (isOpen || inputValue === selectedText) return;
    const timer = setTimeout(() => setInputValue(selectedText));
    return () => clearTimeout(timer);
  }, [isOpen, inputValue, selectedText]);

  // Disabling the field while it's open closes the menu, so its options can't be picked
  useEffect(() => {
    if (isDisabled) closeMenu();
  }, [isDisabled]);

  // Hide the layer when nothing matches, rather than showing an empty box
  const isMenuVisible = isOpen && displayedValues.length > 0;

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen: isMenuVisible,
    ariaPopupType: "listbox",
  });

  return (
    <div
      className={cc([
        "nds-field",
        {
          "nds-field--isDisabled": isDisabled,
          "nds-field--hasError": errors.length > 0,
        },
      ])}
    >
      <Row alignItems="center">
        <Row.Item>
          <label className="nds-field-label" {...getLabelProps()}>
            {label}
          </label>
        </Row.Item>
        <Row.Item shrink>
          <div className="fontColor--secondary fontSize--s">
            {renderHelperText?.()}
          </div>
        </Row.Item>
      </Row>

      <div
        className="nds-field-input-box"
        ref={anchorProps.ref as React.Ref<HTMLDivElement>}
        style={anchorProps.style}
      >
        <Row alignItems="center" gapSize="xs">
          {startIcon && (
            <Row.Item shrink>
              <i
                role="img"
                className={`narmi-icon-${startIcon}`}
                aria-hidden="true"
              />
            </Row.Item>
          )}

          <Row.Item>
            <input
              {...getInputProps({
                ...controlProps,
                placeholder,
                // Filter in the same render as downshift's own input change
                onChange: (e) => setFilterText(e.currentTarget.value),
                // Tell screen readers the menu is closed when nothing matches
                "aria-expanded": isMenuVisible,
              })}
            />
          </Row.Item>

          <Row.Item shrink>
            {/* Mouse-only shortcut; the input itself opens the menu from the keyboard */}
            <button
              type="button"
              className="nds-field-combobox-toggle button--reset"
              aria-hidden="true"
              {...getToggleButtonProps({
                disabled: isDisabled,
                // Keep focus in the input rather than on this hidden button
                onMouseDown: (e) => e.preventDefault(),
              })}
            >
              <i
                className={`narmi-icon-chevron-${isMenuVisible ? "up" : "down"}`}
                aria-hidden="true"
              />
            </button>
          </Row.Item>
        </Row>
      </div>

      <div
        // The menu element is the one that scrolls, so downshift keeps the highlight in view
        {...getMenuProps({ ref: layerProps.ref as React.Ref<HTMLDivElement> })}
        className="nds-field-listbox nds-field-combobox-listbox"
        style={layerProps.style as React.CSSProperties}
      >
        <ul className="list--reset" role="presentation">
          {isOpen &&
            displayedValues.map((itemValue, index) => (
              <li
                key={itemValue}
                className={cc([
                  "nds-field-option",
                  {
                    "nds-field-option--highlighted": highlightedIndex === index,
                  },
                ])}
                {...getItemProps({ item: itemValue, index })}
              >
                {itemsByValue.get(itemValue)}
              </li>
            ))}
        </ul>
      </div>

      <FieldErrors id={errorId} errors={errors} />
    </div>
  );
};

FieldCombobox.displayName = "Field.Combobox";
FieldCombobox.Item = FieldComboboxItem;
