import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, type, children, ...props }) => {
  const className = `nds-button nds-typography ${type}${
    disabled ? " disabled" : ""
  }`;
  return (
    <a {...props} className={className}>
      <div className="nds-button-content">{children}</div>
    </a>
  );
};

Button.propTypes = {
  /** The children passed to `Button` are rendered as the button label */
  children: PropTypes.node.isRequired,
  /** disables the button when set to `true` */
  disabled: PropTypes.bool,
  /** type of button to render */
  type: PropTypes.oneOf(["menu", "primary"]),
};

Button.defaultProps = {
  disabled: false,
  type: "primary",
};

export default Button;
