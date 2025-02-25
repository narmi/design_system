import React, { useEffect } from "react";
import { MenuTrigger, Menu, MenuItem } from "react-aria-components";
import { useLayer, useMousePositionAsTrigger } from "react-laag";
import cc from "classcat";
import ContextMenuItem from "./ContextMenuItem";
import Row from "../Row";
import { createUseLayerContainer } from "../util/dom";

export interface ContextMenuProps {
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** ContextMenu.Item children */
  menuItems: React.ReactElement[];
  /** React element for enabling custom context menu */
  children: React.ReactNode;
}

/**
 * ContextMenu is a wrapper component that provides a custom context menu for the children element.
 *
 * The menu can be trigger by right-clicking on the element or by pressing Control + F12.
 */
function ContextMenu({ menuItems, testId, children }: ContextMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMouseOverEventEnabled, setIsMouseOverEventEnabled] =
    React.useState(true);
  const { handleMouseEvent, trigger, parentRef } = useMousePositionAsTrigger({
    enabled: isMouseOverEventEnabled,
  });

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    auto: true,
    onOutsideClick: () => {
      setIsOpen(false);
      setIsMouseOverEventEnabled(true);
    },
    preferX: "right",
    preferY: "bottom",
    placement: "bottom-start",
    trigger,
    container: createUseLayerContainer,
  });

  function handleContextMenuClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    event.preventDefault();
    setIsOpen(true);
    setIsMouseOverEventEnabled(false);
  }

  function handleContextMenuKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
  ) {
    event.preventDefault();
    if (event.key === "F12" && event.ctrlKey) {
      setIsOpen(true);
      setIsMouseOverEventEnabled(false);
    }
  }

  const handleOnSelect = (itemId) => {
    const selectedItem = menuItems.find((item) => item.props.id === itemId);

    selectedItem.props.onSelect(
      selectedItem.props.label,
      selectedItem.props.id,
    );
    setIsOpen(false);
    setIsMouseOverEventEnabled(true);
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Escape" && isOpen) {
      setIsOpen(false);
      setIsMouseOverEventEnabled(true);
    }
  };

  const handleNativeContextMenu = (event: MouseEvent) => {
    if (!parentRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
      setIsMouseOverEventEnabled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    // Right click event listener
    window.addEventListener("contextmenu", handleNativeContextMenu);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("contextmenu", handleNativeContextMenu);
    };
  }, [handleKeyUp]);
  return (
    <MenuTrigger
      isOpen={true}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          setIsOpen(isOpen);
        }
      }}
      data-testid={testId}
    >
      <div
        ref={parentRef}
        role="button"
        tabIndex={0}
        aria-label="Press Control + F12 to open the context menu"
        onContextMenu={handleContextMenuClick}
        onKeyDown={handleContextMenuKeyDown}
        onMouseMove={handleMouseEvent}
        {...triggerProps}
      >
        {children}
      </div>
      {isOpen &&
        renderLayer(
          <div className="nds-context-menu-popover" {...layerProps}>
            <Menu
              onAction={handleOnSelect}
              className="nds-context-menu rounded--all elevation--high"
            >
              {menuItems.map((menuItem, menuItemIndex) => {
                return (
                  <MenuItem
                    key={menuItem.props.id}
                    id={menuItem.props.id}
                    value={menuItem.props.id}
                    className={({ isSelected, isFocused, isDisabled }) =>
                      cc([
                        "nds-context-menu-item",
                        "padding--x--s padding--y--xs",
                        {
                          "nds-context-menu-item--highlighted":
                            isSelected || isFocused,
                          "nds-context-menu-item--disabled": isDisabled,
                          "rounded--top": menuItemIndex === 0,
                          "rounded--bottom":
                            menuItemIndex === menuItems.length - 1,
                        },
                      ])
                    }
                  >
                    <Row gapSize="s">
                      {menuItem.props.startIcon && (
                        <Row.Item shrink>
                          <span
                            className={`narmi-icon-${menuItem.props.startIcon}`}
                          />
                        </Row.Item>
                      )}
                      <Row.Item>{menuItem.props.label}</Row.Item>
                    </Row>
                  </MenuItem>
                );
              })}
            </Menu>
          </div>,
        )}
    </MenuTrigger>
  );
}

ContextMenu.Item = ContextMenuItem;

export default ContextMenu;
