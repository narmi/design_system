import React, { useState } from "react";
import cc from "classcat";
import Button, { ButtonProps } from "../Button";
import Popover from "../Popover";
import MenuButton from "../MenuButton";

// SplitButton-specific positioning options
// passed to `MenuButton` and `Popover`
const POPOPOVER_POSITION_PROPS = {
  side: "top",
  alignment: "start",
  offset: 6,
};

import SplitButtonPopover, {
  SplitButtonPopoverProps,
} from "./SplitButtonPopover";
import {
  SplitButtonMenu,
  SplitButtonMenuItem,
  SplitButtonMenuProps,
} from "./SplitButtonMenu";

interface SplitButtonProps extends ButtonProps {
  children:
    | React.ReactElement<SplitButtonPopoverProps>
    | React.ReactElement<SplitButtonMenuProps>;
  kind: "primary" | "secondary" | "tonal";
  size: "xs" | "s" | "m";
}

/**
 * A button group of exactly two buttons - one primary action and a button
 * that triggers a popover for more options.
 *
 * `SplitButton` accepts the same props as `Button`. The popover behavior is
 * controlled by the `SplitButton.[subcomponent]` component passed as children.
 */
const SplitButton = ({
  kind = "primary",
  size = "m",
  label,
  disabled,
  isLoading,
  children,
  ...otherProps
}: SplitButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const renderStaticTrigger = disabled || isLoading;

  const popoverComponent = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && child.type === SplitButton.Popover,
  );

  const menuComponent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === SplitButton.Menu,
  );

  const renderTrigger = (isOpen: boolean) => (
    <div
      className={cc([
        "nds-splitButton-action",
        "alignChild--center--center",
        `nds-splitButton-action--${kind}`,
        `nds-splitButton-action--${size}`,
        {
          "nds-splitButton-action--disabled": disabled,
          "nds-splitButton-action--loading": isLoading,
        },
      ])}
    >
      <span
        aria-label="More"
        className={`narmi-icon-chevron-${isOpen ? "up" : "down"}`}
      />
    </div>
  );

  return (
    <div className="nds-splitButton">
      {/** Main button */}
      <Button
        label={label}
        disabled={disabled}
        isLoading={isLoading}
        size={size}
        kind={kind}
        {...otherProps}
      />

      {renderStaticTrigger && renderTrigger(false)}

      {/** If a SplitButton.Popover is passed as children */}
      {!renderStaticTrigger &&
        popoverComponent &&
        React.isValidElement(popoverComponent) && (
          <Popover
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            // @ts-expect-error Popover is not TS yet
            renderTrigger={renderTrigger}
            isOpen={isOpen}
            onUserDismiss={() => setIsOpen(false)}
            onUserEnable={() => setIsOpen(true)}
            content={popoverComponent.props.children}
            {...POPOPOVER_POSITION_PROPS}
          />
        )}

      {/** If a SplitButton.Menu is passed as children */}
      {!renderStaticTrigger &&
        menuComponent &&
        React.isValidElement(menuComponent) && (
          <MenuButton
            renderTrigger={renderTrigger}
            {...POPOPOVER_POSITION_PROPS}
          >
            {React.Children.toArray(menuComponent.props.children).map(
              (item, i) =>
                React.isValidElement(item) ? (
                  <MenuButton.Item key={i} {...item.props} />
                ) : null,
            )}
          </MenuButton>
        )}
    </div>
  );
};

SplitButton.Popover = SplitButtonPopover;
SplitButton.Menu = SplitButtonMenu;
SplitButton.MenuItem = SplitButtonMenuItem;
export default SplitButton;
