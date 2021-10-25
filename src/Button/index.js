import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Button = forwardRef(({ disabled, type, ...props }, ref) => {
  const className = `nds-button nds-typography ${type}${
    disabled ? " disabled" : ""
  }`;
  return (
    <a ref={ref} className={className} {...props} tabIndex="0">
      <div className="nds-button-content">{props.children}</div>
    </a>
  );
});

Button.propTypes = {
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
