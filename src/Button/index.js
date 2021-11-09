import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

const Button = ({ disabled, type, children, ...props }) => (
  <a
    {...props}
    className={cc([
      "nds-typography",
      "nds-button",
      `nds-button--${type}`,
      {
        "nds-button--disabled": disabled,
      },
    ])}
  >
    <div className="nds-button-content">{children}</div>
  </a>
);

Button.propTypes = {
  /** The children passed to `Button` are rendered as the button label */
  children: PropTypes.node.isRequired,
  /** disables the button when set to `true` */
  disabled: PropTypes.bool,
  /** type of button to render */
  type: PropTypes.oneOf(["primary", "secondary", "menu", "plain"]),
};

Button.defaultProps = {
  disabled: false,
  type: "primary",
};

export default Button;
