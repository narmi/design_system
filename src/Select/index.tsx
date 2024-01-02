/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelect } from "downshift";
import { useLayer } from "react-laag";
import cc from "classcat";
import DropdownTrigger from "../DropdownTrigger";
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";
import SelectCategory from "./SelectCategory";

interface SelectProps {
  /** unique id attribute of the input (used for `htmlFor`) */
  id: string;
  /** Label for the select control */
  label: string;
  /** Change callback. Called with value string from the selected item */
  onChange: (value: string) => void;
  /**
   * Sets selected item by value and makes the Select **fully controlled**.
   *
   * When passing a `value`, you must provide an `onChange` handler to update it
   */
  value?: string;
  /**
   * Function with signature `(userInputValue, selectItemNode) => {}`,
   * used to customize typeahead filtering behavior.
   * See "Changing Typeahead Behavior" story for example.
   */
  getTypeaheadString?: (
    userInputValue: string,
    selectedItemNode: React.ReactNode
  ) => void;
  /**
   * Use to set a default selection by passing the `value` prop
   * of one of the `<Select.Item>` children.
   * The Select will remain uncontrolled.
   */
  defaultValue?: string;
  /** Open the dropdown on render if `true` */
  defaultOpen?: boolean;
  /**
   * Error message.
   * When passed, this will cause the trigger to render in error state.
   */
  errorText?: string;
  children: React.ReactNode;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

const noop = () => {};

/**
 * @param {Object} item a Select.Item or Select.Action component
 * @returns {Boolean} true if the item is a Select.Action
 */
export const isAction = (item) => {
  let result = false;
  if (item && item.props) {
    result = "onSelect" in item.props;
  }
  return result;
};

/**
 * Sets the selected value in the DropdownTrigger.
 * A Select.Action should _not_ display as selected in the button.
 *
 * @param {Object} item the currently selected Select.Item or Select.Action
 * @returns {String|Node} The value to display in the trigger button
 */
export const getSelectedItemDisplay = (item) => {
  let result = "";
  if (item && !isAction(item)) {
    result = item.props.children;
  }
  return result;
};

/**
 * @param {String} value `value` of the Select.Item to get
 * @param {Array} items Select.Item nodes
 * @returns {ReactElement|String} the Select.Item elemenet found or an empty string
 */
export const getItemByValue = (value, items) => {
  const founditem = items
    .filter((item) => !isAction(item)) // action items are not selectable
    .filter(({ props }) => props.value === value)
    .pop();

  return founditem || "";
};

/**
 * @param {Object} item an item from `items`
 * @param {array} items downshift index `items`
 * @returns {Number} index of item
 */
export const getItemIndex = ({ props }, items) => {
  const values = items.map(({ props }) => props.value);
  return values.indexOf(props.value);
};

/**
 * @param {Object} highlightedIndex index of currently highlight item
 * @param {Array} categoryChildren child items in a given category
 * @param {Array} items downshift `items`
 * @returns {Boolean} if the provided item is in the category
 */
export const isHighlightedInCategory = (
  highlightedIndex,
  categoryChildren,
  items
) => {
  if (highlightedIndex < 0) return false;
  const highlightedValue = items[highlightedIndex].props.value;
  const categoryValues = categoryChildren.map((child) => child.props.value);
  return categoryValues.includes(highlightedValue);
};

/**
 * @param {Object} selectedItem
 * @param {Array} categoryChildren child items in a given category
 * @returns {Boolean} if the selected item is in the given cagetory children
 */
export const isSelectedItemInCategory = (selectedItem, categoryChildren) => {
  if (!selectedItem) return false;
  const selectedValue = selectedItem.props.value;
  const categoryValues = categoryChildren.map((child) => child.props.value);
  return categoryValues.includes(selectedValue);
};

/**
 * @param {Node} selectItem full react element of a select item
 * @param {String} userInput most recent thing a user typed while focused on input
 * @returns {String} the string to use for typeahead for each given `selectItem`
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultGetTypeAheadString = (userInput = "", selectItem) => {
  return selectItem.props.searchValue || selectItem.props.value;
};

/**
 * Accessible custom select control for giving users the ability to select one option from a list of options.
 * `Select` also supports the ability to pass in a `<Select.Action>` that acts as an option that only triggers a side effect.
 * Typeahead is enabled based on the `value` prop of `<Select.Item>` elements passed in.
 */
const Select: React.FC<SelectProps> & {
  Item: typeof SelectItem;
  Action: typeof SelectAction;
  Category: typeof SelectCategory;
} = ({
  id,
  label,
  children,
  onChange = noop,
  value,
  defaultValue,
  defaultOpen = false,
  getTypeaheadString = defaultGetTypeAheadString,
  errorText,
  testId,
}) => {
  let items = [];
  let categories = [];
  const [userInput, setUserInput] = useState(""); // most recent val the user typed while focused on this input

  const allChildren = React.Children.toArray(children);

  // If categories are being used, extract items from categories
  // @ts-expect-error React.Children iteration methods have typing issues
  if (allChildren.some(({ type }) => type.displayName === "Select.Category")) {
    // @ts-expect-error React.Children iteration methods have typing issues
    items = allChildren.flatMap(({ props }) =>
      React.Children.toArray(props.children)
    );
    // @ts-expect-error React.Children iteration methods have typing issues
    categories = allChildren.map(({ props }) => ({
      label: props.label,
      categoryChildren: React.Children.toArray(props.children),
    }));
  } else {
    items = allChildren;
  }

  const downshiftOpts = {
    id: id || `nds-select-${label}`,
    items,
    initialSelectedItem: defaultValue && getItemByValue(defaultValue, items),
    initialIsOpen: defaultOpen,
    itemToString: (item) => getTypeaheadString(userInput, item),
    onSelectedItemChange: ({ selectedItem }) => {
      // for Select.Action items, we only fire the side effect
      if (isAction(selectedItem)) {
        selectedItem.props.onSelect();
      } else {
        onChange(selectedItem.props ? selectedItem.props.value : "");
      }
    },

    // this allows us to subscribe to downshift events
    // so we can track user keyboard input
    // <https://www.downshift-js.com/use-select#state-reducer>
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      let isOpen = changes.isOpen;

      if (
        type === useSelect.stateChangeTypes.MenuKeyDownCharacter ||
        type === useSelect.stateChangeTypes.ToggleButtonKeyDownCharacter
      ) {
        const { inputValue } = changes;
        setUserInput(inputValue);
        isOpen = true;
      } else {
        setUserInput(""); // reset input after any other event
      }

      return {
        ...changes,
        isOpen,
      };
    },
  };

  // When `value` prop is passed, the Select becomes fully controlled and the
  // selected item is set programmitically by the consumer only
  if (value !== undefined) {
    // @ts-expect-error hook arg type in downshift is wrong
    downshiftOpts.selectedItem = getItemByValue(value, items);
  }

  /** @see https://www.downshift-js.com/use-select */
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    // @ts-expect-error hook arg type in downshift is wrong
  } = useSelect(downshiftOpts);

  const hasCategories = categories.length > 0;
  const hasSelectedItem = selectedItem !== undefined && selectedItem.props;
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

  const renderItem = (item, items) => {
    const index = getItemIndex(item, items);
    return (
      <li
        key={`item-${index}`}
        className={cc([
          "nds-select-item",
          "alignChild--left--center padding--x--s padding--y--xs",
          {
            "nds-select-item--highlighted": highlightedIndex === index,
            "rounded--top": index === 0,
            "rounded--bottom": index === items.length - 1,
            "nds-select-item--hasGutter": hasSelectedItem || hasCategories,
          },
        ])}
        {...getItemProps({ item, index })}
      >
        {hasSelectedItem && selectedItem.props.value === item.props.value && (
          <span className="narmi-icon-check fontSize--l fontWeight--bold" />
        )}
        {item}
      </li>
    );
  };

  const getDetailsProps = (categoryChildren) => {
    interface DetailsExtraProps {
      open?: boolean;
    }
    const detailsExtraProps: DetailsExtraProps = {};
    if (
      isHighlightedInCategory(highlightedIndex, categoryChildren, items) ||
      isSelectedItemInCategory(selectedItem, categoryChildren)
    ) {
      detailsExtraProps.open = true;
    }
    return detailsExtraProps;
  };

  return (
    <div className="nds-select" data-testid={testId}>
      <DropdownTrigger
        isOpen={showMenu}
        labelText={label}
        displayValue={getSelectedItemDisplay(selectedItem) || userInput}
        labelProps={{ ...getLabelProps() }}
        errorText={errorText}
        {...getToggleButtonProps(triggerProps)}
        style={{
          // @ts-expect-error missing in downshift types
          ...triggerProps.style,
        }}
      />
      {renderLayer(
        <div
          className={cc([
            "nds-select-list",
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
          {showMenu &&
            hasCategories &&
            categories.map(({ label, categoryChildren }) => (
              <details
                key={label}
                className="nds-select-category"
                {...getDetailsProps(categoryChildren)} // controls open state
              >
                <summary className="fontWeight--bold alignChild--left--center padding--x--s padding--y-xs">
                  <span id={`select-category-${label}`}>{label}</span>
                  <span className="nds-category-icon narmi-icon-chevron-down" />
                  <span className="nds-category-icon narmi-icon-chevron-up" />
                </summary>
                <ul
                  className="list--reset"
                  aria-labelledby={`select-category-${label}`}
                >
                  {categoryChildren.map((item) => renderItem(item, items))}
                </ul>
              </details>
            ))}
          {showMenu && !hasCategories && (
            <ul className="list--reset">
              {items.map((item) => renderItem(item, items))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
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
   * Function with signature `(userInputValue, selectItemNode) => {}`,
   * used to customize typeahead filtering behavior.
   * See "Changing Typeahead Behavior" story for example.
   */
  getTypeaheadString: PropTypes.func,
  /**
   * Use to set a default selection by passing the `value` prop
   * of one of the `<Select.Item>` children.
   * The Select will remain uncontrolled.
   */
  defaultValue: PropTypes.string,
  /** Open the dropdown on render if `true` */
  defaultOpen: PropTypes.bool,
  /**
   * Error message.
   * When passed, this will cause the trigger to render in error state.
   */
  errorText: PropTypes.string,
  // @ts-expect-error ts v5 doesn't recognize this as ReactNodeLike
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

Select.Item = SelectItem;
Select.Action = SelectAction;
Select.Category = SelectCategory;
export default Select;
