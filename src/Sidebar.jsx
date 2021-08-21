import React from "react";
import PropTypes from "prop-types";
import { X } from "react-feather";

const Sidebar = (props) => {
  const [open, setOpen] = React.useState(false);
  const openSidebar = () => {
    setOpen(true);
  };

  const closeSidebar = () => {
    setOpen(false);
  };
  return (
    <div className={"nds-sidebar"}>
      <div onClick={openSidebar} style={{position: "relative", display: "flex", alignItems: "center"}}>{props.icon}</div>
      <span className="nds-sidebar-mobile-scrim" open={open}> </span>
      <div className={"nds-sidebar-content"} open={open} {...props} slidefromright={props.slideFromRight}>
        <span className="nds-sidebar-close" slidefromright={props.slideFromRight}>
          <X onClick={closeSidebar} />
        </span>
        {props.children}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  icon: PropTypes.node,
  slideFromRight: PropTypes.bool,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Sidebar.defaultProps = {
  slideFromRight: false,
};

export default Sidebar;
