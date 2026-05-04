import React, { useEffect } from "react";
import { MenuTrigger, Menu, MenuItem } from "react-aria-components";
import cc from "classcat";
import ContextMenuItem from "./ContextMenuItem";
import Row from "../Row";
import useDropdownLayer from "../hooks/useDropdownLayer";

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
  const [anchorPosition, setAnchorPosition] = React.useState({
    top: 0,
    left: 0,
  });

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen,
    matchWidth: false,
    placement: "bottom",
  });

  const { ref: layerRef, ...layerRest } = layerProps;

  function handleContextMenuClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    event.preventDefault();
    setAnchorPosition({ top: event.clientY, left: event.clientX });
    setIsOpen(true);
  }

  function handleContextMenuKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
  ) {
    if (event.key === "F12" && event.ctrlKey) {
      event.preventDefault();
      const rect = event.currentTarget.getBoundingClientRect();
      setAnchorPosition({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
      setIsOpen(true);
    }
  }

  const handleOnSelect = (itemId: React.Key) => {
    const selectedItem = menuItems.find((item) => item.props.id === itemId);

    if (selectedItem?.props.onSelect) {
      selectedItem.props.onSelect(
        selectedItem.props.label,
        selectedItem.props.id,
      );
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleDismiss = (event: MouseEvent) => {
      const layer =
        typeof layerRef === "object"
          ? (layerRef as React.RefObject<HTMLElement>)?.current
          : null;
      if (layer && !layer.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = ({ key }: KeyboardEvent) => {
      if (key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleDismiss);
    window.addEventListener("keyup", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleDismiss);
      window.removeEventListener("keyup", handleEscape);
    };
  }, [isOpen]);

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
      {/* 1x1px invisible element positioned at mouse cursor, used as CSS anchor */}
      <div
        ref={anchorProps.ref as React.Ref<HTMLDivElement>}
        style={{
          ...anchorProps.style,
          position: "fixed",
          top: anchorPosition.top,
          left: anchorPosition.left,
          width: 1,
          height: 1,
          pointerEvents: "none" as const,
          opacity: 0,
        }}
        aria-hidden="true"
      />
      <div
        role="button"
        tabIndex={0}
        aria-label="Press Control + F12 to open the context menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onContextMenu={handleContextMenuClick}
        onKeyDown={handleContextMenuKeyDown}
      >
        {children}
      </div>
      <div
        ref={layerRef as React.Ref<HTMLDivElement>}
        className="nds-context-menu-popover"
        {...(layerRest as React.HTMLAttributes<HTMLDivElement>)}
      >
        {isOpen && (
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
        )}
      </div>
    </MenuTrigger>
  );
}

ContextMenu.Item = ContextMenuItem;

export default ContextMenu;
