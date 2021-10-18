import React from "react";

const Tooltip = (props) => {
  return (
      <div className="nds-tooltip" style={{width:props.targetWidth, height:props.targetHeight, top: props.top, left:props.left}}>
            <span className={`nds-typography nds-tooltiptext tooltip-${props.direction}`}>
                {props.children}
            </span>
      </div>
  );
};

export default Tooltip;
