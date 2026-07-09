import React, { useState, useMemo, type ReactElement } from "react";
import { useSelect } from "downshift";
import cc from "classcat";
import { useField } from "../useField";
import useDropdownLayer from "../../hooks/useDropdownLayer";
import { FauxInput } from "../FauxInput/index";
import Error from "../../Error";
import FieldSelectItem from "./SelectItem";

import type { FieldProps } from "../types";
import type { FieldSelectItemProps } from "./SelectItem";

export interface FieldSelectProps extends Pick<
  FieldProps,
  "id" | "label" | "errors" | "isDisabled"
> {
  /** Currently selected value (controlled) */
  value: string;
  /** Called with the new value when selection changes */
  onChange: (value: string) => void;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Field.Select.Item elements */
  children: React.ReactNode;
}

/** Returns the item element whose `value` prop matches, or null */
const getItemByValue = (
  value: string,
  items: ReactElement<FieldSelectItemProps>[],
): ReactElement<FieldSelectItemProps> | null =>
  items.find((item) => item.props.value === value) ?? null;

/**
 * Field.Select renders a dropdown select styled consistently with Field.Text.
 * It uses downshift's `useSelect` for keyboard navigation and ARIA,
 * and `useDropdownLayer` for dropdown positioning.
 */
export const FieldSelect = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  errors = [],
  isDisabled = false,
  children,
}: FieldSelectProps) => {
  const { errorId, controlProps } = useField({ id, errors, isDisabled });
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child): child is ReactElement<FieldSelectItemProps> =>
          React.isValidElement(child),
      ),
    [children],
  );

  const selectedItem = getItemByValue(value, items);

  const {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useSelect({
    items,
    selectedItem,
    isOpen,
    onIsOpenChange: ({ isOpen: next }) => setIsOpen(next ?? false),
    onSelectedItemChange: ({ selectedItem: item }) => {
      if (item) onChange(item.props.value);
    },
    itemToString: (item) => (item ? item.props.value : ""),
  });

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen,
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
      <label className="nds-field-label" {...getLabelProps()}>
        {label}
      </label>

      <div
        ref={anchorProps.ref as React.Ref<HTMLDivElement>}
        style={anchorProps.style}
        aria-haspopup={
          anchorProps["aria-haspopup"] as React.AriaAttributes["aria-haspopup"]
        }
        aria-expanded={anchorProps["aria-expanded"]}
      >
        <FauxInput
          {...getToggleButtonProps()}
          {...controlProps}
          isActive={isOpen}
          isDisabled={isDisabled}
          hasError={errors.length > 0}
        >
          <span className="nds-field-select-value">
            {selectedItem ? selectedItem.props.children : placeholder}
          </span>
          <i
            className={`narmi-icon-chevron-${isOpen ? "up" : "down"}`}
            aria-hidden="true"
          />
        </FauxInput>
      </div>

      <div
        ref={layerProps.ref as React.Ref<HTMLDivElement>}
        style={layerProps.style as React.CSSProperties}
      >
        <ul {...getMenuProps()} className="nds-field-select-listbox">
          {isOpen &&
            items.map((item, index) => (
              <li
                key={item.props.value}
                className={cc([
                  "nds-field-select-item",
                  {
                    "nds-field-select-item--highlighted":
                      highlightedIndex === index,
                  },
                ])}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>

      <div className="nds-field-errors" id={errorId} aria-live="polite">
        {errors.map((error, i) => (
          <Error key={`${i}-${error}`} error={error} marginTop="none" />
        ))}
      </div>
    </div>
  );
};

FieldSelect.displayName = "Field.Select";
FieldSelect.Item = FieldSelectItem;
