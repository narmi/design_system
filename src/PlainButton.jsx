import React from "react";


const PlainButton = (props) => {
  return (
    <a className="nds-plain-button" {...props}>
      {props.children ? props.children : ""}
    </a>
  );
};

export default PlainButton;
