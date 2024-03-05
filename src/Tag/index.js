import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

const noop = () => {};

/**
 * A rounded rectangle inline label.
 * The user has the option of firing a callback for 'dismissible' Tags.
 */
const Tag = ({
  kind = "subdued", // outline, subdued, x-tag (cactus400) #7fbc5b; #7FBC5B oneof
  onDismiss = noop,
  dismissible,
  label,
  testId,
}) => {
  return (
    <div
      className={cc(["nds-typography", "nds-tag", `nds-tag--${kind}`])}
      data-testid={testId}
    >
      <div className="whiteSpace--truncate">{label}</div>
      {(dismissible || kind === "dismissible") && (
        <div
          className="narmi-icon-x margin--left--xs"
          role="button"
          tabIndex={0}
          onClick={onDismiss}
          onKeyUp={({ key }) => {
            if (key === "Enter" || key == " ") {
              onDismiss();
            }
          }}
        />
      )}
    </div>
  );
};

Tag.propTypes = {
  /** Variant of Tag. The "dismissible" kind is deprecated in favor of the dismissible property. */
  kind: PropTypes.oneOf([
    "subdued",
    "subdued-secondary",
    "dismissible",
    "outline",
    "success",
    "warn",
    "error",
  ]),
  /**
   * Callback for user dismissal action
   * (only applicable for `dismissible` kind)
   */
  onDismiss: PropTypes.func,
  /** Whether the tag is dismissible */
  dismissible: PropTypes.bool,
  /** Label text of tag. */
  label: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Tag;
