import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, type, ...props }) => {
  const className = `nds-button nds-typography ${type}${
    disabled ? " disabled" : ""
  }`;
  return (
    <a className={className} {...props}>
      <div className="nds-button-content">{props.children}</div>
    </a>
  );
};

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
