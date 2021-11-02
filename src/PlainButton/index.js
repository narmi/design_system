import React from "react";

const PlainButton = (props) => {
  return (
    <a {...props} className="nds-plain-button">
      {props.children ? props.children : ""}
    </a>
  );
};

export default PlainButton;
