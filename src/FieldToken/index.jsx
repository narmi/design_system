import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

const noop = () => {};

/**
 * Shared component to render "tokens" inside inputs, active filters,
 * or other user selections we want to tokenize.
 */
const FieldToken = ({ label, onDismiss = noop, testId }) => {
  return (
    <div
      role="listitem"
      className={cc([
        "nds-fieldToken",
        "padding--y--none",
        "padding--left--s",
        "padding--right--xs",
        "rounded--all--l",
        "fontSize--xs",
        "fontWeight--semibold",
      ])}
      data-testid={testId}
    >
      <div className="whiteSpace--truncate" style={{ userSelect: "none" }}>
        {label}
      </div>
      <div
        className="narmi-icon-x margin--left--xs"
        role="button"
        aria-label={`Remove ${label}`}
        tabIndex={0}
        onClick={() => {
          onDismiss(label);
        }}
        onKeyUp={({ key }) => {
          if (key === "Enter" || key == " ") {
            onDismiss(label);
          }
        }}
      />
    </div>
  );
};

FieldToken.propTypes = {
  /** Label text of tag. */
  label: PropTypes.string.isRequired,
  /**
   * Callback for user dismissal action,
   * called with token label as the argument
   */
  onDismiss: PropTypes.func,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default FieldToken;
