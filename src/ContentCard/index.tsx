import cc from "classcat";
import React from "react";

import Error from "../Error";
import DisabledShim from "../DisabledShim";

interface ContentCardProps {
  /** Accepts any content as children */
  children: React.ReactNode;
  /**
   * Amount of padding to add on all sides of card.
   * For custom padding control, use `none` and compose your own element(s)
   * in ContentCard children.
   */
  paddingSize?: "xs" | "s" | "m" | "l" | "xl" | "none";
  /**
   * Kind of card to render.
   *
   * `plain`: flat, rounded rect
   *
   * `elevated`: rounded rect with shadow
   *
   * `toggle`: toggle button (checkbox-like)
   *
   * `button`: action button (button-like)
   *
   * `bordered`: flat, rounded rect with border
   *
   * `ai`: card variant styled for AI-related content or features
   */
  kind?: "plain" | "elevated" | "toggle" | "button" | "bordered" | "ai";
  /**
   * Amount of border radius to add on all sides of card.
   */
  radiusSize?: "s" | "m" | "l";
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * Only applicable for `toggle` type.
   * Renders card in visually selected state with appropriate attributes.
   */
  isSelected?: boolean;
  /**
   * Only applicable for `toggle` type.
   * Renders card in visually selected state with appropriate attributes.
   */
  testId?: string;
  /**
   * Error state for `toggle` and `button` variants
   */
  error?: string;
  /**
   * Disables the card, preventing any click events.
   */
  isDisabled?: boolean;
  /** @deprecated Use `isDisabled` instead */
  disabled?: boolean;
}

/**
 * Narmi style content containers, with support for rendering as an interactive button.
 */
const ContentCard = ({
  kind = "plain",
  paddingSize = "l",
  onClick = () => {},
  isSelected = false,
  children,
  testId,
  radiusSize = "s",
  error,
  isDisabled: isDisabledProp,
  disabled: disabledProp,
}: ContentCardProps) => {
  const isDisabled = isDisabledProp ?? disabledProp ?? false;
  const isInteractive = ["toggle", "button"].some(
    (interactiveKinds) => kind === interactiveKinds,
  );
  const isToggle = isInteractive && kind !== "button";

  const getInteractiveProps = () => {
    const props: Record<string, unknown> = {};
    if (isInteractive) {
      props.role = "button";
      props.tabIndex = "0";

      if (!error) {
        props.onClick = onClick;
        props.onKeyUp = (e) => {
          const { key } = e;
          // space and Enter should be accepted for both
          // toggle and button types
          if (key === "Enter" || key === " ") {
            onClick(e);
          }
        };
      }
    }
    if (isToggle) {
      props["aria-pressed"] = isSelected;
    }
    return props;
  };

  const cardContent = (
    <div
      data-testid={testId || "ndsContentCard"}
      className={cc([
        "nds-contentCard",
        `nds-contentCard--${kind}`,
        `padding--all--${paddingSize}`,
        `rounded--all--${radiusSize} bgColor--white`,
        {
          "button--reset": isInteractive,
          "nds-contentCard--error": isInteractive && error,
          "nds-contentCard--disabled": isDisabled,
        },
      ])}
      {...getInteractiveProps()}
    >
      {children}
    </div>
  );

  return (
    <>
      {isInteractive ? (
        <DisabledShim isDisabled={isDisabled}>{cardContent}</DisabledShim>
      ) : (
        cardContent
      )}
      {error && <Error error={error} marginTop="s" />}
    </>
  );
};

// leaving this prop type validation for onClick. It is better than TypeScript
// at checking for required props and conditional props.
ContentCard.propTypes = {
  onClick: (props, propName) => {
    const isInteractive = ["toggle", "button"].some(
      (kind) => kind === props.kind,
    );
    // must be a function
    if (isInteractive && typeof props[propName] != "function") {
      return new Error("ContentCard: `onClick` must be a function");
    }
    // onClick required for interactive types
    if (isInteractive && props[propName] === undefined) {
      return new Error(
        "ContentCard: `onClick` is required for buttons and toggles.",
      );
    }
    // onClick invalid for non-interactive types
    if (props[propName] == "function" && !isInteractive) {
      return new Error(
        "ContentCard: `onClick` is only valid for `toggle` and `button` types",
      );
    }
  },
};

export default ContentCard;
