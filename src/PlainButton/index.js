/* eslint-disable */ // deprecated; will remove this file in a future release
import React from "react";

/**
 * ⚠️ DEPRECATED ⚠️
 * This component will be removed in a future release.
 * Use `<Button type="plain">` instead.
 */
const PlainButton = (props) => {
  return (
    <a {...props} className="nds-plain-button">
      {props.children ? props.children : ""}
    </a>
  );
};

export default PlainButton;
