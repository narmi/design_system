import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

/**
 * Child component of `Row`.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shrink to content width.
 */
const Avatar = ({
  label = "",
  size = "m",
  initials = "",
  imgurl = "",
  linkurl = "",
  testId,
}: {
  label?: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
  initials?: string;
  imgurl?: string;
  linkurl?: string;
  testId?: string;
}) => {
  if (initials && imgurl) {
    console.warn(
      "Avatar component received both initials and imgurl props. Defaulting to imgurl.",
    );
  }
  if (!initials && !imgurl) {
    throw new Error(
      "Avatar component requires either initials or imgurl prop.",
    );
  }
  return (
    <AsElement
      elementType={linkurl ? "a" : "div"}
      className={cc([
        "nds-typography",
        "nds-avatar",
        // `nds-avatar--${size}`,
        "alignChild--center--center",
        "bgColor--theme--primary",
      ])}
      aria-label={label}
      data-testid={testId}
    >
      {initials}
    </AsElement>
  );
};

Avatar.propTypes = {
  /**
   * When `true`, the row item shrinks to content size of its children.
   * Otherwise, the item will expand to fill remaining space in the row.
   */
  label: PropTypes.string,
  /** The html element to render as the root node of `Row` */
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
  /** Optional: controls className while maintaining default nds-row-item styling if left unspecified */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** Optional value for `data-testid` attribute */
  testId: PropTypes.string,
};

export default Avatar;
