/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useMemo, useEffect, Children } from "react";
import {
  useSelect,
  useMultipleSelection,
  UseMultipleSelectionReturnValue,
} from "downshift";
import useDropdownLayer from "../hooks/useDropdownLayer";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import Button from "../Button";
import MultiSelectItem, { MultiSelectItemProps } from "./MultiSelectItem";
import FieldToken from "../FieldToken";
import Row from "../Row";

const noop = () => {};

type MultiSelectItemElement = React.ReactElement<MultiSelectItemProps>;

/**
 * @param item JSX node
 * @returns string
 */
const itemToString = (item: MultiSelectItemElement | null | undefined) =>
  !item?.props ? "" : item.props.searchValue || item.props.value;

/**
 * Check an item component against the tokens list to see if it's currently selected
 */
const isSelected = (
  selectedItems: MultiSelectItemElement[],
  item: MultiSelectItemElement | null | undefined,
) => selectedItems.map(itemToString).includes(itemToString(item));

/**
 * Gets full item element by its `value` prop
 */
const getSelectedItems = (values: string[], items: MultiSelectItemElement[]) =>
  items.filter((item) => values.includes(item.props.value));

/**
 * @param selectItem full react element of a select item
 * @param userInput most recent thing a user typed while focused on input
 * @returns the string to use for typeahead for each given `selectItem`
 */
const defaultGetTypeAheadString = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userInput = "",
  selectItem: MultiSelectItemElement,
) => {
  return selectItem.props.searchValue || selectItem.props.value;
};

export interface MultiSelectSummaryFormatterArgs {
  /** Currently selected item React elements */
  selectedItems: MultiSelectItemElement[];
  /** downshift helper for token props */
  getSelectedItemProps: UseMultipleSelectionReturnValue<MultiSelectItemElement>["getSelectedItemProps"];
  /** Removes a token */
  removeSelectedItem: (item: MultiSelectItemElement) => void;
  /** Flag indicating if the component is disabled */
  disabled: boolean;
  /** Placeholder text when no items are selected */
  label: string;
}

/**
 * Default summary formatter function.
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
}: MultiSelectSummaryFormatterArgs): React.ReactNode => {
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
            {...getSelectedItemProps({ selectedItem: item })}
          />
        );
      })}
    </div>
  );
};

export interface MultiSelectProps {
  /**
   * unique name attribute for the input (used for `id` and `name`).
   * The trigger id falls back to a value derived from `label`.
   */
  name?: string;
  /** Label for the select control */
  label: string;
  /** MultiSelect.Item children */
  children?: React.ReactNode;
  /**
   * When passed, the MultiSelect becomes fully controlled.
   * Use `onSelectedItemsChange` to manage this value.
   */
  selectedItems?: string[];
  /**
   * Change callback for user actions that select or deselect items.
   * Called with an array of selected item values.
   */
  onSelectedItemsChange?: (values: string[]) => void;
  /**
   * Disables the input and all user interaction.
   * You may still pass in `selectedItems` if items need to be selected
   * when the input is disabled.
   */
  disabled?: boolean;
  /**
   * Value for the input with the given `name` prop.
   * This should be the value of the field in the submitted form.
   */
  fieldValue?: string;
  /**
   * Error message.
   * When passed, this will cause the trigger to render in error state.
   */
  errorText?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Optional label override for the clear all button */
  clearLabel?: string;
  /** If true, renders a "Clear all" button on the right side of the trigger */
  isClearable?: boolean;
  /**
   * Optional function to format the summary content shown in the trigger.
   * Must return a React node.
   */
  summaryFormatter?: (args: MultiSelectSummaryFormatterArgs) => React.ReactNode;
  /**
   * Function with signature `(userInputValue, selectItemNode) => {}`,
   * used to customize typeahead filtering behavior.
   * See "Changing Typeahead Behavior" story for example.
   */
  getTypeaheadString?: (
    userInput: string,
    selectItem: MultiSelectItemElement,
  ) => string;
}

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
  summaryFormatter = defaultSummaryFormatter,
  getTypeaheadString = defaultGetTypeAheadString,
}: MultiSelectProps) => {
  // Convert children to an array for easier processing.
  const items = useMemo(
    () => Children.toArray(children) as MultiSelectItemElement[],
    [children],
  );

  // Determine if the component is controlled.
  const isControlled = selectedItemsProp !== undefined;

  /** @see https://www.downshift-js.com/use-multiple-selection/#usage-with-select  */
  const {
    getSelectedItemProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useMultipleSelection<MultiSelectItemElement>({
    initialSelectedItems: getSelectedItems(selectedItemsProp || [], items),
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;

      switch (type) {
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
        case useMultipleSelection.stateChangeTypes.FunctionAddSelectedItem:
          onChangeProp((changes.selectedItems ?? []).map(itemToString));
          return changes;
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
    inputValue,
    closeMenu,
  } = useSelect<MultiSelectItemElement>({
    id: name || `nds-multiselect-${label}`,
    items,
    itemToString: (item): string =>
      getTypeaheadString(inputValue || "", item as MultiSelectItemElement),
    stateReducer: (state, actionAndChanges) => {
      const { changes: newChanges, type } = actionAndChanges;
      switch (type) {
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
        case useSelect.stateChangeTypes.ItemClick:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
          if (isSelected(selectedItems, newSelectedItem)) {
            removeSelectedItem(newSelectedItem as MultiSelectItemElement);
          } else if (newSelectedItem) {
            addSelectedItem(newSelectedItem);
          }
          return;
        default:
          return;
      }
    },
  });

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen: (open) => {
      if (!open) closeMenu();
    },
    polyfillScrollBug: true,
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
      <div
        {...(anchorProps as React.HTMLAttributes<HTMLDivElement>)}
        ref={anchorProps.ref as React.Ref<HTMLDivElement>}
      >
        <DropdownTrigger
          disabled={disabled}
          isOpen={isOpen}
          labelText={triggerLabelContent}
          endContent={triggerEndContent}
          errorText={errorText}
          labelProps={{
            ...getLabelProps(),
            style: isClearable
              ? { display: "block", paddingRight: 80 }
              : undefined,
          }}
          {...getToggleButtonProps()}
        />
      </div>
      <div {...layerProps} ref={layerProps.ref as React.Ref<HTMLDivElement>}>
        <div
          className={cc([
            "nds-multiselect-list",
            "bgColor--white",
            {
              "nds-multiselect-list--error": !!errorText,
            },
          ])}
          {...getMenuProps()}
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
                  aria-selected={isSelected(selectedItems, item)}
                >
                  <Row as="span">
                    <Row.Item as="span">{item}</Row.Item>
                    {isSelected(selectedItems, item) && (
                      <Row.Item as="span" shrink>
                        <span className="narmi-icon-check fontSize--xl fontWeight--bold" />
                      </Row.Item>
                    )}
                  </Row>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

MultiSelect.Item = MultiSelectItem;
export default MultiSelect;
