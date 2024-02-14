import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import Row from "../Row";

const noop = () => {};

/**
 * Inline system message, for a sepcific region of a page.
 * The `isActive` prop is used to hide and show the Alert to ensure the Alert
 * is always rendered in an [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
 * for accessibility.
 */
const Alert = ({
  isActive = false,
  isDismissable = true,
  onUserDismiss = noop,
  kind = "info",
  icon = null,
  children,
}) => {
  const iconName = kind === "success" ? "check" : "info";

  return (
    <div aria-live="polite">
      {isActive && (
        <div
          className={cc([
            "nds-alert",
            `nds-alert--${kind}`,
            "rounded--all",
            "padding--all",
          ])}
        >
          <Row gapSize="s">
            <Row.Item shrink>
              <span className={`nds-alert-icon narmi-icon-${icon || iconName}`} />
            </Row.Item>
            <Row.Item>{children}</Row.Item>
            {isDismissable && (
              <Row.Item shrink>
                <button
                  className="nds-alert-close resetButton"
                  aria-label="close"
                  onClick={onUserDismiss}
                  data-testid="nds-alert-close"
                >
                  <span className="narmi-icon-x"></span>
                </button>
              </Row.Item>
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  /** The alert is only visible when this prop is set to `true` */
  isActive: PropTypes.bool,
  /** Renders a dismiss button when `true` */
  isDismissable: PropTypes.bool,
  /** Callback for user dismissal actions */
  onUserDismiss: PropTypes.func,
  /** Variant of Alert to use */
  kind: PropTypes.oneOf(["info", "error", "success", "warn"]),
  /** Override the default icon of the alert */
  icon: PropTypes.string,
  /** Message content of the Alert */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Alert;
