import React, { useState } from "react";
import PropTypes from "prop-types";

const Popover = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return(
        <div style={{position: "relative"}} {...props}>
        <div className="nds-popover-container">
            <style>
                {`
                 .nds-popover-container{
                    --overlay-x: ${props.x};
                    --overlay-y: ${props.y};
                 }
                `}
            </style>
            <span className="nds-typography">{props.label}</span>
            <span className={`narmi-icon-chevron-${popoverOpen ? "up" : "down"} ${props.hoverable ? "hover" : ""} `} 
                  onClick={()=>{!props.hoverable ? setPopoverOpen(!popoverOpen) : null}}
                  />
            <div style={{top: props.y, left:props.x}} className={`nds-popover-list ${popoverOpen ? "open" : "closed"} ${props.hoverable ? "hover" : ""}`}>
                {props.listRender(props.children)}
            </div>
        </div>
        </div>
    );
}

Popover.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    listRender: PropTypes.func,
    hoverable: PropTypes.bool,
    x: PropTypes.string,
    y: PropTypes.string,
};

Popover.defaultProps = {
    label: "",
    listRender: (x) => x,
    x: "30px",
    y: "56px",
};

export default Popover