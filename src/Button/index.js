import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

/**
 * Narmi style action buttons.
 *
 * Button renders as an `a` element by default, but can render as a `button` element
 * via the `as` prop.
 *
 * This component supports rest props; any additional props on button will be
 * passed through to the root node of `Button`.
 */
const Button = ({
  disabled = false,
  type = "primary",
  children,
  label,
  className,
  onClick = () => {},
  as = "button",
  ...otherProps
}) => {
  const isButtonElement = as === "button";

  // support legacy method of passing label as children
  let buttonLabel = label;
  if (!buttonLabel) {
    buttonLabel = children;
  }

  return (
    <AsElement
      role={isButtonElement ? undefined : "button"}
      elementType={as}
      onClick={onClick}
      {...otherProps}
      className={cc([
        "nds-typography",
        "nds-button",
        `nds-button--${type}`,
        {
          resetButton: as === "button",
          "nds-button--disabled": disabled,
        },
        className,
      ])}
      disabled={isButtonElement && disabled ? true : undefined}
      data-testid="nds-button"
    >
      <div className="nds-button-content">{buttonLabel}</div>
    </AsElement>
  );
};

Button.propTypes = {
  /** The html element to render as the root node of `Button` */
  as: PropTypes.oneOf(["a", "button"]),
  /** Renders the button label */
  label: PropTypes.string,
  /** disables the button when set to `true` */
  disabled: PropTypes.bool,
  /** type of button to render */
  type: PropTypes.oneOf(["primary", "secondary", "menu", "plain"]),
  /** Click callback, with event object passed as argument */
  onClick: PropTypes.func,
  /**
   * ️**⚠️ DEPRECATED**
   *
   * Support for passing custom `className` strings will be removed in
   * a future release.
   * Please use the `type` prop to determine the button style instead.
   */
  className: PropTypes.string,
  /**
   * **⚠️ DEPRECATED**
   *
   * Passing children to render the button label will be removed
   * in a future release. Use the `label` prop instead.
   */
  children: PropTypes.node,
};

export default Button;
