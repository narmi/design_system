/* eslint-disable jsx-a11y/no-autofocus */
import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import cc from "classcat";
import { useSelect } from "downshift";
import useDropdownLayer from "../hooks/useDropdownLayer";
import DropdownTrigger from "../DropdownTrigger";
import Row from "../Row";
import Item, { TableSelectItemProps } from "./Item";

export type TableSelectItem = React.ReactElement<TableSelectItemProps>;

export interface TableSelectProps {
  /** Input Id / name */
  id: string;
  /** Input label for accessibility */
  label: string;
  /**
   * TableSelect.Item children
   * Children must be an array of TableSelect.Item components.
   */
  children: TableSelectItem[];
  /** Controlled selected value */
  value?: string;
  /** Selection change event callback - called with value of selected item */
  onChange?: (value: string) => void;
  /** Optional pinned footer content; use for action buttons */
  renderFooter?: () => React.ReactNode;
  /** Whether the input is disabled */
  isDisabled?: boolean;
  /** Whether the input has an error */
  hasError?: boolean;
}

export const itemToString = (item: TableSelectItem | null) =>
  item?.props.value || "";

interface TableSelectComponent extends React.ForwardRefExoticComponent<
  TableSelectProps & React.RefAttributes<HTMLInputElement>
> {
  Item: typeof Item;
}

/**
 * Table Field in the form of a select dropdown.
 * This component forward `ref` to the underlying hidden input.
 */
// eslint-disable-next-line react/display-name
const TableSelect = React.forwardRef<HTMLInputElement, TableSelectProps>(
  (
    {
      id,
      label,
      children,
      value,
      onChange = () => {},
      isDisabled = false,
      hasError = false,
    },
    ref,
  ) => {
    // TableSelect.Item children are fully managed by useSelect
    const items = useMemo(
      () => React.Children.toArray(children) as TableSelectItem[],
      [children],
    );

    const isControlled = value !== undefined;
    const controlledSelectedItem = isControlled
      ? items.find((item) => item.props.value === value) || null
      : undefined;

    /** @see https://www.downshift-js.com/use-select */
    const {
      selectedItem,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items,
      ...(isControlled && { selectedItem: controlledSelectedItem }),
      id: id || `nds-tableField-select-${label}`,
      itemToString,
      onSelectedItemChange: ({ selectedItem }) => {
        onChange(selectedItem ? itemToString(selectedItem) : "");
      },
    });

    const { anchorProps, layerProps } = useDropdownLayer({
      isOpen,
      setIsOpen: () => {},
      matchWidth: true,
      isPortalled: true,
    });

    const hasSelectedItem = selectedItem !== null && selectedItem.props;

    const layerContent = (
      <div {...(layerProps as React.HTMLAttributes<HTMLDivElement>)}>
        <ul
          {...getMenuProps()}
          className={cc([
            "nds-tableField-select-list",
            "list--reset",
            "bgColor--white",
          ])}
        >
          {items.map((item, index) => (
            <li
              key={`${item.props.value}-${index}`}
              className={cc([
                "nds-tableField-select-item",
                "alignChild--left--center padding--x--s padding--y--xs",
                {
                  "nds-tableField-select-item--highlighted":
                    highlightedIndex === index,
                  "nds-tableField-select-item--selected": selectedItem === item,
                },
              ])}
              {...getItemProps({ item, index })}
            >
              <Row as="span">
                <Row.Item as="span">{item}</Row.Item>
                {hasSelectedItem &&
                  selectedItem.props.value === item.props.value && (
                    <Row.Item as="span" shrink>
                      <span className="narmi-icon-check fontSize--xl fontWeight--bold" />
                    </Row.Item>
                  )}
              </Row>
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div
        className={cc([
          "nds-tableField-select",
          {
            "nds-tableField-select--open": isOpen,
          },
        ])}
      >
        <input
          ref={ref}
          type="hidden"
          name={id}
          id={id}
          value={selectedItem ? itemToString(selectedItem) : ""}
        />
        <div {...(anchorProps as React.HTMLAttributes<HTMLDivElement>)}>
          <DropdownTrigger
            kind="table"
            isOpen={isOpen}
            hasError={hasError}
            disabled={isDisabled}
            // The easist way to ensure consistent height is to always have one char rendering.
            // We allow the text size to determine sizing for all table fields.
            renderDisplayValue={
              selectedItem
                ? () =>
                    selectedItem.props.children || itemToString(selectedItem)
                : () => "\u00A0"
            }
            labelProps={{ ...getLabelProps() }}
            {...getToggleButtonProps()}
            aria-label={label}
          />
        </div>
        {ReactDOM.createPortal(layerContent, document.body)}
      </div>
    );
  },
) as unknown as TableSelectComponent; // Narrowing type to attach Item component
TableSelect.displayName = "TableSelect";
TableSelect.Item = Item;
export default TableSelect;
