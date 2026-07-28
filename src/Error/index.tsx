import React from "react";
import PropTypes from "prop-types";

type MarginTop = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none";

interface ErrorLineProps {
  errorLine?: string | null;
  marginTop?: MarginTop;
}

const ErrorLine = ({ errorLine, marginTop = "xxs" }: ErrorLineProps) => {
  if (!errorLine) return null;
  return (
    <div className={`nds-input-error margin--top--${marginTop}`}>
      <div className="fontSize--s margin--right--xxs narmi-icon-x-circle" />
      {errorLine}
    </div>
  );
};
ErrorLine.propTypes = {
  errorLine: PropTypes.string,
  marginTop: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl", "none"]),
};

interface ErrorProps {
  /**
   * Error message(s) to display. Falsy values (including `null`) render
   * nothing, which lets callers pass nullable state directly.
   */
  error?: string | string[] | null;
  marginTop?: MarginTop;
}

const Error = ({ error, marginTop = "xxs" }: ErrorProps) => {
  if (!error) return null;
  if (Array.isArray(error)) {
    return (
      <div className="nds-input-errorlist" aria-live="polite">
        {error.map((errorLine, index) => (
          <ErrorLine
            key={errorLine}
            errorLine={errorLine}
            marginTop={index ? marginTop : "xxs"}
          />
        ))}
      </div>
    );
  }
  return <ErrorLine errorLine={error} marginTop={marginTop} />;
};
Error.propTypes = {
  error: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  marginTop: PropTypes.oneOf(["xxs", "xs", "s", "m", "l", "xl", "xxl", "none"]),
};

export default Error;
