import React from "react";
import cc from "classcat";
import Row from "../Row";
import Count from "../Count";
import AsElement from "../util/AsElement";
import type { IconName } from "../types/Icon.types";

export const VALID_KINDS = [
  "info",
  "success",
  "warn",
  "error",
  "primary",
  "secondary",
] as const;

interface ChipProps {
  /** String to render within chip */
  label: string;
  /** Variant of Chip */
  kind?: (typeof VALID_KINDS)[number];
  /** When an `onDismiss` handler is passed, the Chip will render a close button */
  onDismiss?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * When an `onClick` handler is passed, renders the entire Chip as a button.
   * OVERRIDES `onDismiss` - only one click target per chip is allowed.
   */
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  /** Icon by name, rendered at Chip start */
  startIcon?: IconName;
  /** Icon by name, rendered at Chip end */
  endIcon?: IconName;
  /** Displays a Count after the `label` */
  count?: string | number;
}

/**
 * Component for rendering status, filters, selection, and more.
 * A `Chip` may contain between 0 and 1 click targets - never more.
 *
 * Supersedes `Tag`.
 */
const Chip = ({
  label,
  kind = "primary",
  count,
  onDismiss,
  onClick,
  startIcon,
  endIcon,
}: ChipProps) => {
  const isButton = typeof onClick === "function";
  const isDismissable = !isButton && typeof onDismiss === "function";
  const countKind = kind === "primary" || kind === "secondary" ? "theme" : kind;

  return (
    <AsElement
      elementType={isButton ? "button" : "div"}
      className={cc([
        "nds-chip",
        "fontSize--s",
        `nds-chip--${kind}`,
        `fontColor--${kind}`,
        {
          "button--reset": isButton,
          "nds-chip--button": isButton,
        },
      ])}
    >
      <Row alignItems="center" gapSize="xs">
        {startIcon && (
          <Row.Item shrink>
            <span
              className={cc(["nds-chip-icon", `narmi-icon-${startIcon}`])}
            />
          </Row.Item>
        )}
        <Row.Item shrink>
          <div className="whiteSpace--truncate">{label}</div>
        </Row.Item>
        {count && (
          <Row.Item shrink>
            <Count kind={countKind} value={count} />
          </Row.Item>
        )}
        {endIcon && (
          <Row.Item shrink>
            <span className={cc(["nds-chip-icon", `narmi-icon-${endIcon}`])} />
          </Row.Item>
        )}
        {isDismissable && (
          <Row.Item shrink>
            <button
              onClick={onDismiss}
              className={cc([
                "nds-chip-dismiss",
                "nds-chip-icon",
                "button--reset",
                `fontColor--${kind}`,
              ])}
            >
              <span className="narmi-icon-x" />
            </button>
          </Row.Item>
        )}
      </Row>
    </AsElement>
  );
};

export default Chip;
