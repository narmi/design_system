import React, { useState } from "react";
import PropTypes from "prop-types";

const Popover = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return(
        <div className="nds-popover-container">
            <span className="nds-typography">{props.label}</span>
            <span className={`narmi-icon-chevron-${popoverOpen ? "up" : "down"} ${props.hoverable ? "hover" : ""} `} 
                  onClick={()=>{!props.hoverable ? setPopoverOpen(!popoverOpen) : null}}
                  />
            <div className={`nds-popover-list ${popoverOpen ? "open" : "closed"}`}>
                {props.listRender(props.children)}
            </div>
        </div>
    );
}

Popover.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    listRender: PropTypes.func,
    hoverable: PropTypes.bool,
};

Popover.defaultProps = {
    label: "",
    listRender: (x) => x,
};

export default Popover