import React, { useState } from "react";
import cc from "classcat";
import Button, { ButtonProps } from "../Button";
import MenuButton from "../MenuButton";
import Popover from "../Popover";

const noop = () => {};

interface SplitButtonProps extends ButtonProps {
  children: React.ReactNode; // FIXME: set it up
  kind: "primary" | "secondary" | "tonal";
  size: "xs" | "s" | "m";
}

/**
 * FIXME: write description
 */
const SplitButton = ({ kind, size, ...otherProps }: SplitButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nds-splitButton">
      <Button size={size} kind={kind} {...otherProps} />
      <button
        className={cc([
          "nds-splitButton-action",
          `nds-splitButton-action--${kind}`,
          `nds-splitButton-action--${size}`,
          "button--reset alignChild--center--center",
        ])}
      >
        <span className={`narmi-icon-chevron-${isOpen ? "up" : "down"}`} />
      </button>
    </div>
  );
};

export default SplitButton;
