import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import iconSelection from "src/icons/selection.json";

export const VALID_ICON_NAMES = iconSelection.icons.map(
  (icon) => icon.properties.name
);

/**
 * Narmi style Icon Button.
 *
 * Icon Button renders a button with a central Narmi icon
 *
 * This component supports rest props; any additional props on icon button will be
 * passed through to button element.
 */
const IconButton = ({
  disabled = false,
  kind = "plain",
  size = "m",
  testId = "nds-icon-button",
  label,
  name,
  onClick = () => {},
}) => {
  return (
    <button
      tabIndex={0}
      onClick={onClick}
      className={cc([
        "nds-typography",
        "nds-icon-button",
        `nds-icon-button--${kind}`,
        `fontSize--${size}`,
        {
          "nds-icon-button--disabled": disabled,
        },
      ])}
      disabled={disabled}
      aria-label={label}
      data-testid={testId}
    >
      <span aria-label={name} className={`narmi-icon-${name}`} />
    </button>
  );
};

IconButton.propTypes = {
  /** Name of Narmi icon */
  name: PropTypes.oneOf(VALID_ICON_NAMES).isRequired,
  /** Renders the icon button label */
  label: PropTypes.string,
  /** disables the icon button when set to `true` */
  disabled: PropTypes.bool,
  /** style of icon button to render */
  kind: PropTypes.oneOf(["primary", "secondary", "negative", "plain"]),
  /** size variant of icon button */
  size: PropTypes.oneOf(["xs", "s", "m", "l"]),
  /** Click callback, with event object passed as argument */
  onClick: PropTypes.func,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** className for adding classNames to the icon button  */
  className: PropTypes.string,
};

export default IconButton;
