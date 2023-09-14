import React from "react";
import PropTypes from "prop-types";
import {
  Menu as ReachMenu,
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
} from "@reach/menu-button";
import iconSelection from "src/icons/selection.json";
import MenuButtonItem from "./MenuButtonItem";

const noop = () => {};

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
);

/**
 * Keyboard navigable popover menu following the
 * [WIA-ARIA "MenuButton" pattern](https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton).
 */
const MenuButton = ({
  label,
  testId,
  triggerIcon = "more-vertical",
  children,
}) => {
  return (
    <ReachMenu data-testId={testId} className="nds-menubutton">
      <ReachMenuButton className="nds-menubutton-trigger button--reset">
        <span className={`narmi-icon-${triggerIcon}`} title={label} />
      </ReachMenuButton>
      <ReachMenuList className="bgColor--white rounded--all padding--y--xxs">
        {React.Children.map(children, (child) => (
          <ReachMenuItem
            className="padding--y--xs padding--x--s"
            onSelect={child.props.onSelect || noop}
          >
            {child}
          </ReachMenuItem>
        ))}
      </ReachMenuList>
    </ReachMenu>
  );
};

MenuButton.propTypes = {
  /** Accessible label for the menu trigger (e.g. "Transaction Actions")*/
  label: PropTypes.string.isRequired,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Name of NDS icon */
  triggerIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** MenuButton.Item children */
  children: PropTypes.arrayOf(PropTypes.node),
};

MenuButton.Item = MenuButtonItem;
export default MenuButton;
