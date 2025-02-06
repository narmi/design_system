import cc from "classcat";
import React from "react";

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
   */
  kind?:
    | "plain"
    | "elevated"
    | "toggle"
    | "button"
    | "bordered"
    | "interactive";
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
}: ContentCardProps) => {
  const isInteractive = ["interactive", "toggle", "button"].some(
    (interactiveKinds) => kind === interactiveKinds,
  );
  const isToggle = isInteractive && kind !== "button";

  const getInteractiveProps = () => {
    const props: Record<string, unknown> = {};
    if (isInteractive) {
      props.role = "button";
      props.onClick = onClick;
      props.tabIndex = "0";
      props.onKeyUp = (e) => {
        const { key } = e;
        // space and Enter should be accepted for both
        // toggle and button types
        if (key === "Enter" || key === " ") {
          onClick(e);
        }
      };
    }
    if (isToggle) {
      props["aria-pressed"] = isSelected;
    }
    return props;
  };

  return (
    <div
      data-testid={testId || "ndsContentCard"}
      className={cc([
        "nds-contentCard",
        `nds-contentCard--${kind}`,
        `padding--all--${paddingSize}`,
        `rounded--all--${radiusSize} bgColor--white`,
        { "button--reset": isInteractive },
      ])}
      {...getInteractiveProps()}
    >
      {children}
    </div>
  );
};

// leaving this prop type validation for onClick. It is better than TypeScript
// at checking for required props and conditional props.
ContentCard.propTypes = {
  onClick: (props, propName) => {
    const isInteractive = ["interactive", "toggle", "button"].some(
      (kind) => kind === props.kind,
    );
    // must be a function
    if (isInteractive && typeof props[propName] != "function") {
      return new Error("ContentCard: `onClick` must be a function");
    }
    // onClick required for interactive types
    if (isInteractive && props[propName] === undefined) {
      return new Error(
        "ContentCard: `onClick` is required for `interactive` type",
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
