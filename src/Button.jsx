import React from "react";
import PropTypes from "prop-types";
import { deviceBreakpoints } from "global";


const Button = ({disabled, type, ...props}) => {
  const className = `nds-button nds-typography ${type}${disabled ? " disabled" : ""}`;
  return (
    <a className={className} {...props}>
      <div className="nds-button-content">{props.children}</div>
    </a>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: "primary",
};

export default Button;
