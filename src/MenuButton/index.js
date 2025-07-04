import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import { useLayer } from "react-laag";
import { Button as AriaButton, Menu, MenuTrigger } from "react-aria-components";
import iconSelection from "src/icons/selection.json";
import MenuButtonItem from "./MenuButtonItem";
import MenuItem from "./AriaMenuItem";
import Row from "../Row";
import { createUseLayerContainer } from "src/util/dom";

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
  alignment = "start",
  offset = 2,
  children,
  footerItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = React.Children.toArray(children);
  const allItems = footerItem ? menuItems.concat(footerItem) : menuItems;
  const canToggleCloseRef = useRef(isOpen);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    canToggleCloseRef.current = false;
  }, [canToggleCloseRef]);

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    auto: true,
    onOutsideClick: closeMenu,
    placement: `${side}-${alignment}`,
    container: createUseLayerContainer,
    triggerOffset: offset,
  });

  const handleKeyUp = ({ key }) => {
    if (key === "Escape" && isOpen) {
      closeMenu();
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
    const selectedItem = allItems.find(
      (item) => labelToItemId(item.props.label) === itemId,
    );
    selectedItem.props.onSelect();
    closeMenu();
  };

  const pressButton = useCallback(() => {
    if (canToggleCloseRef.current) {
      closeMenu();
    } else {
      canToggleCloseRef.current = true;
    }
  }, [closeMenu]);

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
        className="button--reset nds-menubutton-ariaButton"
        {...triggerProps}
        onClick={pressButton}
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
                    label={child.props.label}
                    startIcon={child.props.startIcon}
                    endIcon={child.props.endIcon}
                    roundedTop={childIndex === 0}
                    roundedBottom={
                      childIndex === menuItems.length - 1 && !footerItem
                    }
                  />
                );
              })}
              {footerItem && (
                <MenuItem
                  className="padding--y--s padding--x--s border--top"
                  id={labelToItemId(footerItem.props.label)}
                  value={labelToItemId(footerItem.props.label)}
                  label={footerItem.props.label}
                  startIcon={footerItem.props.startIcon}
                  endIcon={footerItem.props.endIcon}
                  roundedBottom
                >
                  {footerItem}
                </MenuItem>
              )}
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
