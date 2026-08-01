import React from "react";
import cc from "classcat";
import { useSelect } from "downshift";
import { VALID_ICON_NAMES } from "../icons/iconNames";
import MenuButtonItem, { MenuButtonItemProps } from "./MenuButtonItem";
import Row from "../Row";
import useDropdownLayer from "../hooks/useDropdownLayer";
import type { Placement } from "../hooks/useDropdownLayer";
import type { IconName } from "../types/Icon.types";

export { VALID_ICON_NAMES };

export const labelToItemId = (label: string) =>
  label.replace(/\s+/g, "-").toLowerCase();

type MenuItemElement = React.ReactElement<MenuButtonItemProps>;

export interface MenuButtonProps {
  /**
   * Accessible label for the menu trigger (e.g. "Transaction Actions").
   * Backs the trigger's `aria-label`; if omitted, it falls back to "Menu".
   */
  label?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Name of NDS icon to use as a trigger */
  triggerIcon?: IconName;
  /**
   * The root node of JSX passed in acts as the menu trigger.
   *
   * @deprecated use `renderTrigger` instead.
   */
  trigger?: React.ReactNode;
  /**
   * Render function for rendering a custom trigger element.
   * Called with `(isOpen)`, the open state of the menu.
   */
  renderTrigger?: (isOpen: boolean) => React.ReactNode;
  /** MenuButton.Item children */
  children?: React.ReactNode;
  /**
   * If true, a caret indicator is rendered as the end icon
   * within the trigger. The icon will change direction when
   * the expanded state of the menulist changes.
   */
  showDropdownIndicator?: boolean;
  /** Sets preferred side of the trigger the tooltip should appear */
  side?: Placement;
  /** Optional footer content to render below the menu items */
  footerItem?: MenuItemElement;
}

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
  children,
  footerItem,
}: MenuButtonProps) => {
  const menuItems = React.Children.toArray(children) as MenuItemElement[];
  const allItems = footerItem ? menuItems.concat(footerItem) : menuItems;

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    closeMenu,
  } = useSelect<MenuItemElement>({
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
    isPortalled: false,
  });

  const { ref: anchorRef, style: anchorStyle } = anchorProps;

  return (
    <div data-testid={testId} className="nds-menubutton">
      <button
        {...getToggleButtonProps({
          ref: anchorRef as React.Ref<HTMLButtonElement>,
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
        {...getMenuProps({
          ...layerProps,
        } as Parameters<typeof getMenuProps>[0])}
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

MenuButton.Item = MenuButtonItem;
export default MenuButton;
