import React from "react";
import PropTypes from "prop-types";

interface ErrorProps {
  error?: string;
  marginTop?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none";
}

const Error = ({ error, marginTop = "xxs" }: ErrorProps) => {
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
  marginTop: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl", "none"]),
};

export default Error;
