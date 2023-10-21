import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import {
  Menu as ReachMenu,
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
} from "@reach/menu-button";
import iconSelection from "src/icons/selection.json";
import Row from "../Row";
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
  trigger,
  triggerIcon = "more-vertical",
  showDropdownIndicator = false,
  children,
}) => {
  return (
    <ReachMenu data-testId={testId} className="nds-menubutton">
      {({ isExpanded }) => (
        <>
          <ReachMenuButton
            className={cc([
              "nds-menubutton-trigger",
              "button--reset",
              { "nds-menubutton-trigger--useHoverEffect": !trigger },
            ])}
          >
            <Row gapSize="xxs">
              <Row.Item>
                {trigger ? (
                  trigger
                ) : (
                  <span className={`narmi-icon-${triggerIcon}`} title={label} />
                )}
              </Row.Item>
              {showDropdownIndicator && (
                <Row.Item shrink>
                  {isExpanded ? (
                    <span className={`narmi-icon-chevron-up`} />
                  ) : (
                    <span className={`narmi-icon-chevron-down`} />
                  )}
                </Row.Item>
              )}
            </Row>
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
        </>
      )}
    </ReachMenu>
  );
};

MenuButton.propTypes = {
  /** Accessible label for the menu trigger (e.g. "Transaction Actions")*/
  label: PropTypes.string.isRequired,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Name of NDS icon to use as a trigger */
  triggerIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Custom element for trigger */
  trigger: PropTypes.node,
  /** MenuButton.Item children */
  children: PropTypes.arrayOf(PropTypes.node),
  /**
   * If true, a caret indicator is rendered as the end icon
   * within the trigger. The icon will change direction when
   * the expanded state of the menulist changes.
   */
  showDropdownIndicator: PropTypes.bool,
};

MenuButton.Item = MenuButtonItem;
export default MenuButton;
