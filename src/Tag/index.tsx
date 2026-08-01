import React from "react";
import cc from "classcat";

const noop = () => {};

export interface TagProps {
  /** Variant of Tag. The "dismissible" kind is deprecated in favor of the dismissible property. */
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
   * (only applicable for `dismissible` kind)
   */
  onDismiss?: () => void;
  /** Whether the tag is dismissible */
  dismissible?: boolean;
  /** Label content of tag. */
  label?: React.ReactNode;
  /** Optional value for `data-testid` attribute */
  testId?: string;
}

/**
 * ⚠️ DEPRECATED - Will be removed in a future release. Use `Chip` instead.
 *
 * A rounded rectangle inline label.
 * The user has the option of firing a callback for 'dismissible' Tags.
 *
 * @deprecated Will be removed in a future release. Use `Chip` instead.
 */
const Tag = ({
  kind = "subdued",
  onDismiss = noop,
  dismissible,
  label,
  testId,
}: TagProps) => {
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
            if (key === "Enter" || key === " ") {
              onDismiss();
            }
          }}
        />
      )}
    </div>
  );
};

export default Tag;
