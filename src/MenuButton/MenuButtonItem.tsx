/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { VALID_ICON_NAMES } from "src/icons/iconNames";

export { VALID_ICON_NAMES };

interface MenuButtonItemProps {
  /** Display label for menu item */
  label: string;
  /** Selection handler */
  onSelect: () => void;
  /** Optional start icon for menu item */
  startIcon?: string;
  /** Optional end icon for menu item */
  endIcon?: string;
}

const MenuButtonItem = ({ label, startIcon, endIcon, onSelect }: MenuButtonItemProps) => <></>;

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
