import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

export interface AvatarProps {
  // aria-label for accessibility
  label: string;
  // Fixed height and width of the avatar. Default: "s".
  size?: "xs" | "s" | "m";
  // String to display in the avatar. If imgurl is provided, this will be ignored.
  initials?: string;
  // Optional: URL of the image to display in the avatar. If provided, initials will be ignored.
  imgurl?: string;
  // Optional: URL to navigate to when the avatar is clicked
  linkurl?: string;
  testId?: string;
}

const Avatar = ({
  label,
  size = "s",
  initials,
  imgurl,
  linkurl,
  testId,
}: AvatarProps) => {
  const backgroundImage = imgurl
    ? { backgroundImage: `url(${imgurl})`, backgroundSize: "cover" }
    : {};

  return (
    <AsElement
      elementType={linkurl ? "a" : "div"}
      href={linkurl}
      className={cc([
        "nds-typography",
        "nds-avatar",
        `nds-avatar--${size}`,
        "alignChild--center--center",
        "bgColor--theme--primary",
      ])}
      style={backgroundImage}
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
