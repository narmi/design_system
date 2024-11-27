import React from "react";
import PropTypes from "prop-types";
import cc from "classcat";
import AsElement from "../util/AsElement";

export interface AvatarProps {
  /** aria-label for accessibility */
  label: string;
  /** Fixed height and width of the avatar. Default: "s". */
  size?: "xs" | "s" | "m";
  /** String to display in the avatar. If imgurl is provided, this will be ignored. */
  initials?: string;
  /** Optional: URL of the image to display in the avatar. If provided, initials will be ignored. */
  imgurl?: string;
  /** Optional: URL to navigate to when the avatar is clicked */
  linkurl?: string;
}

const Avatar = ({
  label,
  size = "s",
  initials,
  imgurl,
  linkurl,
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
    >
      {initials}
    </AsElement>
  );
};

export default Avatar;
