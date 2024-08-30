import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import iconSelection from "src/icons/selection.json";
import AsElement from "src/util/AsElement";
import Row from "src/Row";
import Spinner from "./Spinner";

export const VALID_ICON_NAMES = iconSelection?.icons.map(
  (icon) => icon.properties.name,
);

/**
 * Narmi style action buttons.
 *
 * Button renders as a `button` element by default, but can render as an `a` element
 * via the `as` prop.
 *
 * This component supports rest props; any additional props on button will be
 * passed through to the root node of `Button`.
 */
const Button = ({
  isLoading = false,
  disabled = false,
  kind = "primary",
  type,
  size = "m",
  startIcon = null,
  endIcon = null,
  testId,
  children,
  label,
  onClick = () => {},
  as = "button",
  ariaLabel = null,
  ...otherProps
}) => {
  const isButtonElement = as === "button";

  // support legacy method of passing label as children
  let buttonLabel = label;
  if (!buttonLabel) {
    buttonLabel = children;
  }

  const Icon = ({ name }) => (
    <div className="alignChild--center--center">
      <i
        role="img"
        aria-label={ariaLabel || name}
        className={`narmi-icon-${name}`}
      />
    </div>
  );

  Icon.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return (
    <AsElement
      elementType={as}
      tabIndex={0}
      onClick={onClick}
      type={type}
      {...otherProps}
      className={cc([
        "nds-typography",
        "nds-button",
        `nds-button--${kind}`,
        `nds-button--${size}`,
        {
          resetButton: as === "button",
          "nds-button--disabled": disabled,
          "nds-button--loading": isLoading,
        },
      ])}
      disabled={(isButtonElement && disabled) || isLoading ? true : undefined}
      aria-label={ariaLabel || buttonLabel}
      data-testid={testId || "nds-button"}
    >
      <div className="nds-button-content">
        {isLoading && (
          <div className="nds-button-spinner">
            <Spinner
              color={kind !== "primary" ? "var(--color-lightGrey)" : undefined}
            />
          </div>
        )}
        <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
          <Row gapSize="s" alignItems="center">
            {startIcon && (
              <Row.Item shrink>
                <Icon name={startIcon} />
              </Row.Item>
            )}
            <Row.Item>
              <span className="nds-button-label">{buttonLabel}</span>
            </Row.Item>
            {endIcon && (
              <Row.Item shrink>
                <Icon name={endIcon} />
              </Row.Item>
            )}
          </Row>
        </div>
      </div>
    </AsElement>
  );
};

Button.propTypes = {
  /**
   * The html element to render as the root node of `Button`.
   *
   * When rendering as an "a" you **MUST** pass an `href` attribute
   * for the anchor to be valid.
   */
  as: PropTypes.oneOf(["a", "button"]),
  /** Renders the button label */
  label: PropTypes.string,
  /** disables the button when set to `true` */
  disabled: PropTypes.bool,
  /** disables the button and adds a loading spinner when set to `true` */
  isLoading: PropTypes.bool,
  /** style of button to render */
  kind: PropTypes.oneOf([
    "primary",
    "secondary",
    "tonal",
    "negative",
    "menu",
    "plain",
  ]),
  /** type attribute of button element */
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  /** size variant of button */
  size: PropTypes.oneOf(["xs", "s", "m"]),
  /** Click callback, with event object passed as argument */
  onClick: PropTypes.func,
  /** Name of Narmi icon to place at the start of the label */
  startIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Name of Narmi icon to place at the end of the label */
  endIcon: PropTypes.oneOf(VALID_ICON_NAMES),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
  /** Optional value for setting the aria-label. If unset label will be used. */
  ariaLabel: PropTypes.string,
  /**
   * **⚠️ DEPRECATED**
   *
   * Passing children to render the button label will be removed
   * in a future release. Use the `label` prop instead.
   */
  children: PropTypes.node,
};

export default Button;
