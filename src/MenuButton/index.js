import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import {
  Button as AriaButton,
  Menu,
  MenuItem,
  MenuTrigger,
} from "react-aria-components";
import { useLayer } from "react-laag";
import iconSelection from "src/icons/selection.json";
import MenuButtonItem from "./MenuButtonItem";
import Row from "../Row";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
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
  triggerIcon = "more-vertical",
  showDropdownIndicator = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = React.Children.toArray(children);

  const closePopover = () => {
    setIsOpen(false);
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const { renderLayer, layerProps, triggerProps } = useLayer({
    isOpen,
    onOutsideClick: closePopover,
    onDisappear: closePopover,
    auto: true,
    placement: "bottom-start",
    possiblePlacements: ["bottom-start", "bottom-end", "top-start", "top-end"],
    referX: "right",
    preferY: "bottom",
    container: typeof document !== "undefined" ? document.body : undefined,
    triggerOffset: 2,
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyUp);
    };
  }, [handleKeyUp]);

  /**
   * react-aria only supports `onAction` at the `Menu` level.
   * This handler finds the corresponding `onSelect` of the
   * relevant `MenuButton.Item` and calls it.
   */
  const handleOnSelect = (itemId) => {
    const selectedItem = menuItems.find(
      (item) => labelToItemId(item.props.label) === itemId
    );
    selectedItem.props.onSelect();
    closePopover();
  };

  return (
    <MenuTrigger
      isOpen={isOpen}
      onOpenChange={(o) => setIsOpen(o)}
      data-testid={testId}
      className="nds-menubutton"
    >
      <AriaButton
        aria-label={label}
        className="button--reset"
        {...triggerProps}
      >
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
      </AriaButton>
      {isOpen &&
        renderLayer(
          <div {...layerProps} className="nds-menubutton-popover">
            <Menu
              onAction={handleOnSelect}
              className="nds-menubutton-menu rounded--all elevation--high"
            >
              {menuItems.map((child, childIndex) => (
                <MenuItem
                  key={labelToItemId(child.props.label)}
                  id={labelToItemId(child.props.label)}
                  /**
                   * react-aria provides a className interface similar
                   * to render props
                   */
                  className={({ isSelected, isFocused, isDisabled }) =>
                    cc([
                      "nds-menubutton-item",
                      "padding--x--s padding--y--xs",
                      {
                        "nds-menubutton-item--highlighted":
                          isSelected || isFocused,
                        "nds-menubutton-item--disabled": isDisabled,
                        "rounded--top": childIndex === 0,
                        "rounded--bottom": childIndex === menuItems.length - 1,
                      },
                    ])
                  }
                >
                  {child}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
    </MenuTrigger>
  );
};

MenuButton.propTypes = {
  /** Accessible label for the menu trigger (e.g. "Transaction Actions")*/
  label: PropTypes.string.isRequired,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Name of NDS icon to use as a trigger */
  triggerIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Custom element for trigger */
  trigger: PropTypes.node,
  /** MenuButton.Item children */
  children: PropTypes.arrayOf(PropTypes.node),
  /**
   * If true, a caret indicator is rendered as the end icon
   * within the trigger. The icon will change direction when
   * the expanded state of the menulist changes.
   */
  showDropdownIndicator: PropTypes.bool,
};

MenuButton.Item = MenuButtonItem;
export default MenuButton;
