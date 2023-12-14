import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";

const noop = () => {};

interface TagProps {
  /** Variant of Tag */
  kind?:
    | "subdued"
    | "subdued-secondary"
    | "dismissible"
    | "outline"
    | "success"
    | "warn"
    | "error";
  /**
   * Callback for user dismissal action
   * (only applicable for `dismissable` kind)
   */
  onDismiss?: () => void;
  /** Label text of tag */
  label?: string;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * A rounded rectangle inline label.
 * The user has the option of firing a callback for 'dismissible' Tags.
 */
const Tag = ({
  // outline, subdued, x-tag (cactus400) #7fbc5b; #7FBC5B oneof
  kind = "subdued",

  onDismiss = noop,
  label,
  testId,
}: TagProps) => {
  return (
    <div
      className={cc(["nds-typography", "nds-tag", `nds-tag--${kind}`])}
      data-testid={testId}
    >
      <div className="whiteSpace--truncate">{label}</div>
      {kind === "dismissible" && (
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
  /** Variant of Tag */
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
   * (only applicable for `dismissable` kind)
   */
  onDismiss: PropTypes.func,
  /** Label text of tag */
  label: PropTypes.string,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Tag;
