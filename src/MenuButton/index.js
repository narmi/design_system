import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import { useLayer } from "react-laag";
import {
  Button as AriaButton,
  Menu,
  MenuItem,
  MenuTrigger,
} from "react-aria-components";
import iconSelection from "src/icons/selection.json";
import MenuButtonItem from "./MenuButtonItem";
import Row from "../Row";

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
  triggerIcon = "more-vertical",
  showDropdownIndicator = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = React.Children.toArray(children);
  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    auto: true,
    onOutsideClick: () => {
      setIsOpen(false);
    },
    preferX: "right",
    preferY: "bottom",
    placement: "bottom-start",
  });

  const handleKeyUp = ({ key }) => {
    if (key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

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
      (item) => labelToItemId(item.props.label) === itemId,
    );
    selectedItem.props.onSelect();
    setIsOpen(false);
  };

  return (
    <MenuTrigger
      isOpen={isOpen}
      onOpenChange={(o) => {
        if (o) {
          setIsOpen(true);
        }
      }}
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
          <div className="nds-menubutton-popover" {...layerProps}>
            <Menu
              onAction={handleOnSelect}
              className="nds-menubutton-menu rounded--all elevation--high"
              // autoFocus is required to enter the menu focus trap when
              // the menu popover opens
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
            >
              {menuItems.map((child, childIndex) => {
                const itemId = labelToItemId(child.props.label);
                return (
                  <MenuItem
                    key={itemId}
                    id={itemId}
                    value={itemId}
                    startIcon={child.props.startIcon}
                    endIcon={child.props.endIcon}
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
                          "rounded--bottom":
                            childIndex === menuItems.length - 1,
                        },
                      ])
                    }
                  >
                    <Row gapSize="s">
                      {child.props.startIcon && (
                        <Row.Item shrink>
                          <span
                            className={`narmi-icon-${child.props.startIcon}`}
                          />
                        </Row.Item>
                      )}
                      <Row.Item>{child.props.label}</Row.Item>
                      {child.props.endIcon && (
                        <Row.Item shrink>
                          <span
                            className={`narmi-icon-${child.props.endIcon}`}
                          />
                        </Row.Item>
                      )}
                    </Row>
                  </MenuItem>
                );
              })}
            </Menu>
          </div>,
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
