import React from "react";
import { VALID_ICON_NAMES } from "../icons/iconNames";

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

export { VALID_ICON_NAMES };

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- used for enforcing type checking
const ContextMenuItem = (props: ContextMenuItemProps) => <></>;

ContextMenuItem.displayName = "MenuButton.Item";

export default ContextMenuItem;
