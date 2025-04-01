import React from "react";
import cc from "classcat";
import Row from "../Row";
import Button, { ButtonProps } from "../Button";
import MenuButton from "../MenuButton";
import Popover from "../Popover";

const noop = () => {};

interface SplitButtonProps extends ButtonProps {
  children: React.ReactNode; // FIXME: set it up
}

/**
 * FIXME: write description
 */
const SplitButton = ({ ...otherProps }: SplitButtonProps) => {
  const renderTrigger = (isOpen) => (
    <button className="button--reset">
      <span className={`narmi-icon-chevron-${isOpen ? "up" : "down"}`} />
    </button>
  );

  return (
    <div className="nds-splitButton">
      <Row gapSize="none">
        <Row.Item shrink>
          <Button {...otherProps} />
        </Row.Item>
        <Row.Item shrink>{renderTrigger(false)}</Row.Item>
      </Row>
    </div>
  );
};

export default SplitButton;
