import React, { useEffect, useRef, useCallback } from "react";
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
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualAnchorRef = useRef<HTMLDivElement>(null);

  const { anchorProps, layerProps } = useDropdownLayer({
    isOpen,
    setIsOpen,
    matchWidth: false,
    placement: "bottom",
  });

  // Override the anchor ref to point to our virtual anchor element
  const { ref: _anchorRef, ...anchorRest } = anchorProps;
  const { ref: layerRef, ...layerRest } = layerProps;

  function handleContextMenuClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    event.preventDefault();
    // Position the virtual anchor at the mouse cursor
    if (virtualAnchorRef.current) {
      virtualAnchorRef.current.style.top = `${event.clientY}px`;
      virtualAnchorRef.current.style.left = `${event.clientX}px`;
    }
    setIsOpen(true);
  }

  function handleContextMenuKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
  ) {
    event.preventDefault();
    if (event.key === "F12" && event.ctrlKey) {
      // Position virtual anchor near the target element center
      if (virtualAnchorRef.current && parentRef.current) {
        const rect = parentRef.current.getBoundingClientRect();
        virtualAnchorRef.current.style.top = `${rect.top + rect.height / 2}px`;
        virtualAnchorRef.current.style.left = `${rect.left + rect.width / 2}px`;
      }
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

  const handleKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  const handleNativeContextMenu = useCallback((event: MouseEvent) => {
    if (!parentRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("contextmenu", handleNativeContextMenu);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("contextmenu", handleNativeContextMenu);
    };
  }, [handleKeyUp, handleNativeContextMenu]);

  return (
    <MenuTrigger
      isOpen={true}
      onOpenChange={(open) => {
        if (open) {
          setIsOpen(open);
        }
      }}
      data-testid={testId}
    >
      {/* Hidden zero-size element positioned at mouse cursor, used as CSS anchor */}
      <div
        ref={(el) => {
          (
            virtualAnchorRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = el;
          // Also assign to the anchorProps ref so useDropdownLayer tracks this element
          if (typeof anchorProps.ref === "function") {
            anchorProps.ref(el);
          } else if (anchorProps.ref) {
            (
              anchorProps.ref as React.MutableRefObject<HTMLElement | null>
            ).current = el;
          }
        }}
        {...(anchorRest as React.HTMLAttributes<HTMLDivElement>)}
        style={{
          ...anchorRest.style,
          position: "fixed",
          width: 0,
          height: 0,
          pointerEvents: "none" as const,
          overflow: "hidden",
        }}
        aria-hidden="true"
      />
      <div
        ref={parentRef}
        role="button"
        tabIndex={0}
        aria-label="Press Control + F12 to open the context menu"
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
