import React from "react";
import cc from "classcat";
import AsElement from "../util/AsElement";
import Row from "../Row";
import Spinner from "./Spinner";
import type { IconName } from "../types/Icon.types";

interface ButtonProps {
  /** Renders the button label */
  label: string;
  /** style of button to render */
  kind?: "primary" | "secondary" | "tonal" | "negative" | "menu" | "plain";
  /** Click callback, with event object passed as argument */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * The html element to render as the root node of `Button`.
   *
   * When rendering as an "a" you **MUST** pass an `href` attribute
   * for the anchor to be valid.
   */
  as?: "a" | "button";
  /** disables the button when set to `true` */
  disabled?: boolean;
  /** disables the button and adds a loading spinner when set to `true` */
  isLoading?: boolean;
  /** type attribute of button element */
  type?: "submit" | "button" | "reset";
  /** size variant of button */
  size?: "xs" | "s" | "m";
  /** Name of Narmi icon to place at the start of the label */
  startIcon?: IconName | null;
  /** Name of Narmi icon to place at the end of the label */
  endIcon?: IconName | null;
  /** Optional value for `data-testid` attribute */
  testId?: string;
  /** Optional value for setting the aria-label. If unset label will be used. */
  ariaLabel?: string | null;
  /**
   * **⚠️ DEPRECATED**
   *
   * Passing children to render the button label will be removed
   * in a future release. Use the `label` prop instead.
   */
  children?: React.ReactNode | string | undefined;
  [x: string]: unknown; // spread props
}

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
}: ButtonProps) => {
  const isButtonElement = as === "button";

  // support legacy method of passing label as children for now
  const buttonLabel = label || children;

  const Icon = ({ name }: { name: string }) => (
    <div className="alignChild--center--center">
      <i
        role="img"
        aria-label={ariaLabel || name}
        className={`narmi-icon-${name}`}
      />
    </div>
  );

  const gapSizeMap = {
    xs: "xs",
    s: "xs",
    m: "s",
  } as const;

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
          <Row gapSize={gapSizeMap[size]} alignItems="center">
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

export default Button;
