import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

const Button = ({ disabled, type, children, className, ...props }) => (
  <a
    {...props}
    className={cc([
      "nds-typography",
      "nds-button",
      `nds-button--${type}`,
      {
        "nds-button--disabled": disabled,
      },
      className,
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
  /**
   * ️**⚠️ DEPRECATED**
   *
   * Support for passing custom `className` strings will be removed in
   * a future release.
   * Please use the `type` prop to determine the button style instead.
   */
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: "primary",
};

export default Button;
