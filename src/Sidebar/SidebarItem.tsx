import PropTypes from "prop-types";
import iconSelection from "src/icons/selection.json";
import React from "react";
import { IconName } from "../types/Icon.types";

interface SidebarItemProps {
  /** Click callback, with event object passed as argument */
  onClick?: React.EventHandler<React.SyntheticEvent>;
  /** Whether the tab is currently selected */
  isActive?: boolean;
  /** Label for the tab */
  label: string;
  /** Name of Narmi icon to place at the start of the label */
  startIcon: IconName;
  /** Name of Narmi icon to place at the end of the label */
  endIcon: IconName;
}

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
);

const SidebarItem: React.FC<SidebarItemProps> = () => <></>;

SidebarItem.propTypes = {
  /** Click callback, with event object passed as argument */
  onClick: PropTypes.func,
  /** Whether the tab is currently selected */
  isActive: PropTypes.bool,
  /** Label for the tab */
  label: PropTypes.string.isRequired,
  /** Name of Narmi icon to place at the start of the label */
  startIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Name of Narmi icon to place at the end of the label */
  endIcon: PropTypes.oneOf(VALID_ICON_NAMES),
};

SidebarItem.displayName = "Sidebar.Item";

export default SidebarItem;
