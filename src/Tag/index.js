import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import Row from "../Row";

const noop = () => {};

/**
 * A rounded rectangle inline label.
 * The user has the option of firing a callback for 'dismissible' Tags.
 */
const Tag = ({
  kind = "subdued", // outline, subdued, x-tag (cactus400) #7fbc5b; #7FBC5B oneof
  onDismiss = noop,
  label,
  testId,
}) => {
  return (
    <div
      className={cc(["nds-typography", "nds-tag", `nds-tag--${kind}`])}
      data-testid={testId}
    >
      <Row alignItems="center" gapSize="xxs">
        <Row.Item shrink>{label}</Row.Item>
        {kind === "dismissible" && (
          <Row.Item shrink>
            <span
              className="narmi-icon-x"
              role="button"
              tabIndex={0}
              onClick={onDismiss}
              onKeyUp={({ key }) => {
                if (key === "Enter" || key == " ") {
                  onDismiss();
                }
              }}
            />
          </Row.Item>
        )}
      </Row>
    </div>
  );
};

Tag.propTypes = {
  /** Variant of Tag */
  kind: PropTypes.oneOf(["subdued", "dismissible", "outline"]),
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
