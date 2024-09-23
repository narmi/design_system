import React from "react";
import PropTypes from "prop-types";

const ErrorLine = ({ errorLine, marginTop = "xxs" }) => {
  if (!errorLine) return null;
  return (
    <div className={`nds-input-error margin--top--${marginTop}`}>
      <div className="fontSize--s margin--right--xxs narmi-icon-x-circle" />
      {errorLine}
    </div>
  );
};
ErrorLine.propTypes = {
  error: PropTypes.string,
  marginTop: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl", "none"])
};

const Error = ({ error, marginTop = "xxs" }) => {
  if (!error) return null;
  if (Array.isArray(error)) {
    return (
      <div className="nds-input-errorlist">
        {error.map((errorLine, index) => (
          <ErrorLine key={index} errorLine={errorLine} marginTop={index ? marginTop : "xxs"} />
        ))}
      </div>
    );
  }
  return <ErrorLine errorLine={error} marginTop={marginTop} />;
};
Error.propTypes = {
  error: PropTypes.oneOf([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  marginTop: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl", "none"])
};


export default Error;
