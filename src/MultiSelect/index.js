/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelect } from "downshift";
import { useLayer } from "react-laag";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import MultiSelectItem from "./MultiSelectItem";

const MOCK_TOKENS = ["California", "Ohio", "Pissconsin"];

const noop = () => {};

export const stateReducer = (state, actionAndChanges) => {
  const { changes, type } = actionAndChanges;
  switch (type) {
    case useSelect.stateChangeTypes.MenuKeyDownEnter:
    case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
    case useSelect.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep menu open for users to select more
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
};

/**
 * Accessible multiple select control for giving users the ability to select
 * multiple options from a list of options. Typeahead is enabled based on
 * the `value` prop of `MultiSelect.Item` elements passed in. You may also
 * set a custom `searchValue` on each `MultiSelect.Item` for control
 * over typeahead behavior.
 */
const MultiSelect = ({
  id,
  label,
  children,
  onChange = noop,
  value,
  errorText,
  testId,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const items = React.Children.toArray(children);

  /** @see https://www.downshift-js.com/use-select */
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    id: id || `nds-multiselect-${label}`,
    items,
    stateReducer,
    itemToString: (item) => item.props.searchValue || item.props.value,
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) return;
      const index = selectedItems.indexOf(selectedItem);

      if (index > 0) {
        setSelectedItems([
          ...selectedItems.slice(0, index),
          ...selectedItem.slice(index + 1),
        ]);
      } else if (index === 0) {
        setSelectedItems([...selectedItems.slice(1)]);
      } else {
        setSelectedItems([...selectedItems, selectedItem]);
      }
      onChange(selectedItems);
    },
  });

  const hasSelectedItem = selectedItems.length > 0;
  const showMenu = isOpen && items.length > 0;

  /** @see https://github.com/everweij/react-laag#api-docs */
  const { renderLayer, triggerProps, triggerBounds, layerProps, layerSide } =
    useLayer({
      isOpen: showMenu,
      auto: true,
      snap: true,
      triggerOffset: 0,
      containerOffset: 0,
      placement: "bottom-start",
      possiblePlacements: ["top-start", "bottom-start"],
    });

  return (
    <div className="nds-multiselect" data-testid={testId}>
      <DropdownTrigger
        isOpen={showMenu}
        labelText={label}
        tokens={MOCK_TOKENS}
        labelProps={{ ...getLabelProps() }}
        errorText={errorText}
        {...getToggleButtonProps(triggerProps)}
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
              [`nds-select-list--active--${layerSide}`]: showMenu,
            },
          ])}
          {...getMenuProps(layerProps)}
          style={{
            width: triggerBounds?.width,
            transform: `translateY(${layerSide == "top" ? "3px" : "-3px"})`,
            ...layerProps.style,
          }}
        >
          {showMenu && (
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
                >
                  {hasSelectedItem && (
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
  /** unique id attribute of the input (used for `htmlFor`) */
  id: PropTypes.string.isRequired,
  /** Label for the select control */
  label: PropTypes.string.isRequired,
  /** Change callback. Called with value string from the selected item */
  onChange: PropTypes.func,
  /**
   * Sets selected item by value and makes the Select **fully controlled**.
   *
   * When passing a `value`, you must provide an `onChange` handler to update it
   */
  value: PropTypes.string,
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
};

MultiSelect.Item = MultiSelectItem;
export default MultiSelect;
