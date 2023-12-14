import cc from "classcat";
import PropTypes from "prop-types";
import React from "react";

interface ContentCardProps {
  /** Accepts any content as children */
  children: React.ReactNode | React.ReactNode[];
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
   * `interactive`: rounded rect with border, hover styles, and click handler
   *
   * `bordered`: flat, rounded rect with border
   */
  kind?: "plain" | "elevated" | "interactive" | "bordered";
  /**
   * Amount of border radius to add on all sides of card.
   */
  radiusSize?: "s" | "m" | "l";
  /**
   * Only valid for `interactive` card type.
   * Callback for card click event.
   */
  onClick?: React.EventHandler<React.SyntheticEvent>;
  /**
   * Only applicable for `interactive` type.
   * Renders card in visually selected state with appropriate attributes.
   */
  isSelected?: boolean;
  /** Optional value for `data-testid` attribute */
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
  const isInteractive = kind === "interactive";

  return (
    <div
      data-testid={testId || "ndsContentCard"}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-pressed={isInteractive ? isSelected : undefined}
      onClick={isInteractive ? onClick : undefined}
      onKeyUp={
        isInteractive
          ? ({ key }) => {
              if (key === "Enter") {
                onClick();
              }
            }
          : undefined
      }
      className={cc([
        "nds-contentCard",
        `nds-contentCard--${kind}`,
        `padding--all--${paddingSize}`,
        `rounded--all--${radiusSize} bgColor--white`,
        { "button--reset": isInteractive },
      ])}
    >
      {children}
    </div>
  );
};

ContentCard.propTypes = {
  /** Accepts any content as children */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /**
   * Amount of padding to add on all sides of card.
   * For custom padding control, use `none` and compose your own element(s)
   * in ContentCard children.
   */
  paddingSize: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "none"]),
  /**
   * Kind of card to render.
   *
   * `plain`: flat, rounded rect
   *
   * `elevated`: rounded rect with shadow
   *
   * `interactive`: rounded rect with border, hover styles, and click handler
   *
   * `bordered`: flat, rounded rect with border
   */
  kind: PropTypes.oneOf(["plain", "elevated", "interactive", "bordered"]),
  /**
   * Amount of border radius to add on all sides of card.
   */
  radiusSize: PropTypes.oneOf(["s", "m", "l"]),
  /**
   * Only valid for `interactive` card type.
   * Callback for card click event.
   */
  onClick: (props, propName) => {
    const isInteractive = props.type === "interactive";
    // must be a function
    if (isInteractive && typeof props[propName] != "function") {
      return new Error("ContentCard: `onClick` must be a function");
    }
    // onClick required for `interactive` type
    if (isInteractive && props[propName] === undefined) {
      return new Error(
        "ContentCard: `onClick` is required for `interactive` type"
      );
    }
    // onClick invalid for non-interactive types
    if (props[propName] == "function" && !isInteractive) {
      return new Error(
        "ContentCard: `onClick` is only valid for `interactive` type"
      );
    }
  },
  /**
   * Only applicable for `interactive` type.
   * Renders card in visually selected state with appropriate attributes.
   */
  isSelected: PropTypes.bool,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default ContentCard;
