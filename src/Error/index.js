import React from "react";
import PropTypes from "prop-types";

const Error = ({ error, marginTop = "xxs" }) => {
  if (!error) return null;
  return (
    <div className={`nds-input-error margin--top--${marginTop}`}>
      <div className="fontSize--s margin--right--xxs narmi-icon-x-circle" />
      {error}
    </div>
  );
};
Error.propTypes = {
  error: PropTypes.string,
  marginTop: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl", "none"])
};

export default Error;