import React from "react";
import iconSelection from "src/icons/selection.json";

export interface ContextMenuItemProps {
  /** Display label for menu item */
  label: string;
  /** ID for menu item */
  id: string;
  /** Selection handler */
  onSelect?: (label: string, id: string) => void;
  /** Optional start icon for menu item */
  startIcon?: string;
}

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- used for enforcing type checking
const ContextMenuItem = (props: ContextMenuItemProps) => <></>;

ContextMenuItem.displayName = "MenuButton.Item";

export default ContextMenuItem;
