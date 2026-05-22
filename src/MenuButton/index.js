import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import { useSelect } from "downshift";
import iconSelection from "src/icons/selection.json";
import MenuButtonItem from "./MenuButtonItem";
import Row from "../Row";
import useDropdownLayer from "../hooks/useDropdownLayer";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

export const labelToItemId = (label) =>
  label.replace(/\s+/g, "-").toLowerCase();

/**
 * Keyboard navigable popover menu following the
 * [WIA-ARIA "MenuButton" pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton).
 */
const MenuButton = ({
  label = "Menu",
  testId,
  trigger,
  renderTrigger,
  triggerIcon = "more-vertical",
  showDropdownIndicator = false,
  side = "bottom",
  alignment = "start", // eslint-disable-line no-unused-vars
  offset = 2, // eslint-disable-line no-unused-vars
  children,
  footerItem,
}) => {
  const menuItems = React.Children.toArray(children);
  const allItems = footerItem ? menuItems.concat(footerItem) : menuItems;

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    closeMenu,
  } = useSelect({
    items: allItems,
    itemToString: (item) => item?.props?.label ?? "",
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        selectedItem.props.onSelect();
      }
    },
  });

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen: (open) => {
      if (!open) closeMenu();
    },
    matchWidth: false,
    placement: side,
  });

  const { ref: anchorRef, style: anchorStyle } = anchorProps;

  return (
    <div data-testid={testId} className="nds-menubutton">
      <button
        {...getToggleButtonProps({
          ref: anchorRef,
          style: anchorStyle,
          "aria-label": label,
          className: "button--reset nds-menubutton-ariaButton",
        })}
      >
        {typeof renderTrigger === "function" ? (
          renderTrigger(isOpen)
        ) : (
          <div
            className={cc([
              "nds-menubutton-trigger",
              {
                "nds-menubutton-trigger--useCssHover": !trigger,
                "nds-menubutton-trigger--hovered": !trigger && isOpen,
              },
            ])}
          >
            <Row gapSize="xxs">
              <Row.Item>
                {trigger ? (
                  trigger
                ) : (
                  <span className={`narmi-icon-${triggerIcon}`} />
                )}
              </Row.Item>
              {showDropdownIndicator && (
                <Row.Item shrink>
                  {isOpen ? (
                    <span className={`narmi-icon-chevron-up`} />
                  ) : (
                    <span className={`narmi-icon-chevron-down`} />
                  )}
                </Row.Item>
              )}
            </Row>
          </div>
        )}
      </button>
      <ul
        {...getMenuProps({ ...layerProps })}
        className={cc([
          "list--reset",
          "nds-menubutton-popover",
          { "nds-menubutton-menu rounded--all elevation--high": isOpen },
        ])}
      >
        {isOpen &&
          allItems.map((item, index) => {
            const isFooter = footerItem && index === allItems.length - 1;
            return (
              <li
                key={labelToItemId(item.props.label)}
                {...getItemProps({ item, index })}
                className={cc([
                  "nds-menubutton-item",
                  "padding--x--s padding--y--xs",
                  {
                    "nds-menubutton-item--highlighted":
                      highlightedIndex === index,
                    "rounded--top": index === 0,
                    "rounded--bottom": index === allItems.length - 1,
                    "padding--y--s padding--x--s border--top": isFooter,
                  },
                ])}
              >
                <Row gapSize="s">
                  {item.props.startIcon && (
                    <Row.Item shrink>
                      <span className={`narmi-icon-${item.props.startIcon}`} />
                    </Row.Item>
                  )}
                  <Row.Item>{item.props.label}</Row.Item>
                  {item.props.endIcon && (
                    <Row.Item shrink>
                      <span className={`narmi-icon-${item.props.endIcon}`} />
                    </Row.Item>
                  )}
                </Row>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

MenuButton.propTypes = {
  /** Accessible label for the menu trigger (e.g. "Transaction Actions")*/
  label: PropTypes.string.isRequired,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Name of NDS icon to use as a trigger */
  triggerIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /**
   * ⚠️ DEPRECATED - will be removed in a future release.
   * Use `renderTrigger` instead.
   */
  trigger: PropTypes.node,
  /**
   * Render function for rendering a custom trigger element.
   * Called with `(isOpen)`, the open state of the menu.
   */
  renderTrigger: PropTypes.func,
  /** MenuButton.Item children */
  children: PropTypes.arrayOf(PropTypes.node),
  /**
   * If true, a caret indicator is rendered as the end icon
   * within the trigger. The icon will change direction when
   * the expanded state of the menulist changes.
   */
  showDropdownIndicator: PropTypes.bool,
  /** Sets preferred side of the trigger the tooltip should appear */
  side: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** Sets preferred alignment of the tooltip relative to the trigger */
  alignment: PropTypes.oneOf(["start", "center", "end"]),
  /** Distance of Popover from trigger element in number of pixels */
  offset: PropTypes.number,
  /** Optional footer content to render below the menu items */
  footerItem: PropTypes.node,
};

MenuButton.Item = MenuButtonItem;
export default MenuButton;
