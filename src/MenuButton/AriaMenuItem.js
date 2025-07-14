import React from "react";
import cc from "classcat";
import PropTypes from "prop-types";
import { MenuItem } from "react-aria-components";
import iconSelection from "src/icons/selection.json";
import Row from "../Row";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name,
);

const AriaMenuItem = ({
  id,
  label,
  startIcon,
  endIcon,
  roundedTop,
  roundedBottom,
  className,
}) => (
  <MenuItem
    key={id}
    id={id}
    value={id}
    startIcon={startIcon}
    endIcon={endIcon}
    /**
     * react-aria provides a className interface similar
     * to render props
     */
    className={({ isSelected, isFocused, isDisabled }) =>
      cc([
        "nds-menubutton-item",
        "padding--x--s padding--y--xs",
        {
          "nds-menubutton-item--highlighted": isSelected || isFocused,
          "nds-menubutton-item--disabled": isDisabled,
          "rounded--top": roundedTop,
          "rounded--bottom": roundedBottom,
          [className]: className,
        },
      ])
    }
  >
    <Row gapSize="s">
      {startIcon && (
        <Row.Item shrink>
          <span className={`narmi-icon-${startIcon}`} />
        </Row.Item>
      )}
      <Row.Item>{label}</Row.Item>
      {endIcon && (
        <Row.Item shrink>
          <span className={`narmi-icon-${endIcon}`} />
        </Row.Item>
      )}
    </Row>
  </MenuItem>
);

AriaMenuItem.propTypes = {
  /** Unique ID for the menu item */
  id: PropTypes.string.isRequired,
  /** Display label for menu item */
  label: PropTypes.string.isRequired,
  /** Optional start icon for the menu items */
  startIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Optional end icon for the menu items */
  endIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** If true, the item will have a rounded top border */
  roundedTop: PropTypes.bool,
  /** If true, the item will have a rounded bottom border */
  roundedBottom: PropTypes.bool,
  /** Optional className parameter passed to react-aria component */
  className: PropTypes.string,
};

export default AriaMenuItem;
