import React, { useState } from "react";
import cc from "classcat";
import Button, { ButtonProps } from "../Button";
import Popover from "../Popover";
import MenuButton from "../MenuButton";

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
  children,
  ...otherProps
}: SplitButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const popoverComponent = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && child.type === SplitButton.Popover,
  );

  const menuComponent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === SplitButton.Menu,
  );

  const renderTrigger = (isOpen: boolean) => (
    <div
      aria-label={`More options for ${label}`}
      className={cc([
        "nds-splitButton-action",
        `nds-splitButton-action--${kind}`,
        `nds-splitButton-action--${size}`,
        "alignChild--center--center",
      ])}
    >
      <span className={`narmi-icon-chevron-${isOpen ? "up" : "down"}`} />
    </div>
  );

  return (
    <div className="nds-splitButton">
      <Button label={label} size={size} kind={kind} {...otherProps} />

      {/** If a SplitButton.Popover is passed as children */}
      {popoverComponent && React.isValidElement(popoverComponent) && (
        <Popover
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          // @ts-expect-error Popover is not TS yet
          renderTrigger={renderTrigger}
          isOpen={isOpen}
          onUserDismiss={() => setIsOpen(false)}
          onUserEnable={() => setIsOpen(true)}
          content={popoverComponent.props.children}
          side="top"
          alignment="end"
        />
      )}

      {/** If a SplitButton.Menu is passed as children */}
      {menuComponent && React.isValidElement(menuComponent) && (
        <MenuButton renderTrigger={renderTrigger}>
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
