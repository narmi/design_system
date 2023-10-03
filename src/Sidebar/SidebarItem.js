import PropTypes from "prop-types";
import iconSelection from "src/icons/selection.json";
import React from "react";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
);

const SidebarItem = ({ }) => {
  return (
    <>

    </>
  );
};

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
