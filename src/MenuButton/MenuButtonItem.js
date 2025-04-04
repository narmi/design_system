/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import iconSelection from "src/icons/selection.json";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

const MenuButtonItem = ({ label, startIcon, endIcon, onSelect }) => <></>;

MenuButtonItem.propTypes = {
  /** Display label for menu item */
  label: PropTypes.string.isRequired,
  /** Selection handler */
  onSelect: PropTypes.func.isRequired,
  /** Optional start icon for menu item */
  startIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Optional end icon for menu item */
  endIcon: PropTypes.oneOf(VALID_ICON_NAMES),
};

MenuButtonItem.displayName = "MenuButton.Item";

export default MenuButtonItem;
