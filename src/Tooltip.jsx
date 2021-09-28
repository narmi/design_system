import React from "react";

const Tooltip = (props) => {
  return (
      <div className="tooltip" style={{width:props.targetWidth, height:props.targetHeight}}>
            <span style={{top: props.top, left:props.left}} className={`nds-typography tooltiptext tooltip-${props.direction}`}>
                {props.children}
            </span>
      </div>
  );
};

export default Tooltip;
