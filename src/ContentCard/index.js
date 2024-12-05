import cc from "classcat";
import PropTypes from "prop-types";
import React from "react";

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
}) => {
  const isInteractive = ["interactive", "toggle", "button"].some(
    (interactiveKinds) => kind === interactiveKinds,
  );
  const isToggle = isInteractive && kind !== "button";

  const getInteractiveProps = () => {
    let props = {};
    if (isInteractive) {
      props.role = "button";
      props.onClick = onClick;
      props.tabIndex = "0";
      props.onKeyUp = ({ key }) => {
        // space and Enter should be accepted for both
        // toggle and button types
        if (key === "Enter" || key === " ") {
          onClick();
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
   * `toggle`: toggle button (checkbox-like)
   *
   * `button`: action button (button-like)
   *
   * `bordered`: flat, rounded rect with border
   */
  kind: PropTypes.oneOf(["plain", "elevated", "toggle", "button", "bordered"]),
  /**
   * Amount of border radius to add on all sides of card.
   */
  radiusSize: PropTypes.oneOf(["s", "m", "l"]),
  /**
   * Only valid for `interactive` card type.
   * Callback for card click event.
   */
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
  /**
   * Only applicable for `toggle` type.
   * Renders card in visually selected state with appropriate attributes.
   */
  isSelected: PropTypes.bool,
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default ContentCard;
