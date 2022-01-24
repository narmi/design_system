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
  kind = "primary",
  label,
  onClick = () => {},
  as = "button",
  ...otherProps
}) => {
  const isButtonElement = as === "button";

  return (
    <AsElement
      role={isButtonElement ? undefined : "button"}
      elementType={as}
      onClick={onClick}
      {...otherProps}
      className={cc([
        "nds-typography",
        "nds-button",
        `nds-button--${kind}`,
        {
          resetButton: as === "button",
          "nds-button--disabled": disabled,
        },
      ])}
      disabled={isButtonElement && disabled ? true : undefined}
      data-testid="nds-button"
    >
      <div className="nds-button-content">{label}</div>
    </AsElement>
  );
};

Button.propTypes = {
  /** Renders the button label */
  label: PropTypes.string.isRequired,
  /** The html element to render as the root node of `Button` */
  as: PropTypes.oneOf(["a", "button"]),
  /** disables the button when set to `true` */
  disabled: PropTypes.bool,
  /** style of button to render */
  kind: PropTypes.oneOf(["primary", "secondary", "menu", "plain"]),
  /** Click callback, with event object passed as argument */
  onClick: PropTypes.func,
};

export default Button;
