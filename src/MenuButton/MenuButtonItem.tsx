import React from "react";
import PropTypes from "prop-types";
import iconSelection from "../icons/selection.json";
import Row from "../Row";
import { IconName } from "../types/Icon.types";

interface MenuButtonItemProps {
  /** Display label for menu item */
  label: string;
  /** Selection handler */
  onSelect: () => void;
  /** Optional start icon for menu item */
  startIcon: IconName;
}

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
);

const MenuButtonItem: React.FC<MenuButtonItemProps> = ({
  label,
  startIcon,
}) => (
  <Row gapSize="s">
    {startIcon && (
      <Row.Item shrink>
        <span className={`narmi-icon-${startIcon}`} />
      </Row.Item>
    )}
    <Row.Item>{label}</Row.Item>
  </Row>
);

MenuButtonItem.propTypes = {
  /** Display label for menu item */
  label: PropTypes.string.isRequired,
  /** Selection handler */
  onSelect: PropTypes.func.isRequired,
  /** Optional start icon for menu item */
  // @ts-expect-error TS doesn't infer union type from oneOf
  startIcon: PropTypes.oneOf(VALID_ICON_NAMES),
};

MenuButtonItem.displayName = "MenuButton.Item";

export default MenuButtonItem;
