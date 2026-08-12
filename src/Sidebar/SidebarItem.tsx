import { VALID_ICON_NAMES } from "../icons/iconNames";
import React from "react";
import type { IconName } from "../types/Icon.types";

export { VALID_ICON_NAMES };

export interface SidebarItemProps {
  /** Click callback, with event object passed as argument */
  onClick?: (event: React.MouseEvent) => void;
  /** Whether the tab is currently selected */
  isActive?: boolean;
  /** Label for the tab */
  label: string;
  /** Name of Narmi icon to place at the start of the label */
  startIcon?: IconName;
  /** Name of Narmi icon to place at the end of the label */
  endIcon?: IconName;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SidebarItem = (_props: SidebarItemProps) => <></>;

SidebarItem.displayName = "Sidebar.Item";

export default SidebarItem;
