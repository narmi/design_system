import React, { useState, useEffect } from "react";
import TextInput  from "./TextInput";
import PropTypes from "prop-types";


const Chevron = ({ open, setOpen }) => {
    const style = { position: "absolute", top: "12px", right: "13px" };
    if (!open) {
      return <span className={"narmi-icon-chevron-up"} 
      onClick={setOpen.bind(null, true)} 
      style={style} 
      />;
    }
    return (
      <span
        onClick={setOpen.bind(null, false)}
        className={"narmi-icon-chevron-down"}
        style={{ ...style, zIndex: 1000 }}
      />
    );
  };
  Chevron.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
  };

  
const DropdownMenu = ({ open, onClose, children, ...rest }) => {
    /*
     * Expand and display the dropdown options, if open=true
     */
    return open ? (
      <>
        <div className="nds-dropdown-overlay" onClick={onClose}></div>
        <div className="nds-dropdown-menu" aria-modal aria-hidden tabIndex={-1} role="dialog" {...rest}>
          <div className="nds-body123">{children}</div>
        </div>
      </>
    ) : null;
  };

  
const Dropdown = (props) => {
    const [open, setOpen] = useState(props.defaultOpen);
    const [value, setValue] = useState("");
    useEffect(()=>{
        if(props.closeDropDown===true){
            closeDropdown();
        }
    },[props.closeDropDown]);
  
    const openDropdown = () => {
      setOpen(true);
    };
    const closeDropdown = () => {
      setOpen(false);
    };
    
    const childrenList = Array.isArray(props.children)
      ? props.children
      : [props.children, "test"];
  
    return (
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onKeyDown={(event) => {
            if (["Tab", "Escape"].includes(event.key)) closeDropdown();
          }}
        >
          <TextInput
            onChange={() => null}
            onFocus={openDropdown}
            label={props.triggerLabel}
            value={value}
          />
          <DropdownMenu
            open={open}
            onClose={closeDropdown}
            style={{
              position: "absolute",
              top: "0px",
              left: "0px", // because of border
            }}
          >
            <div
              style={{
                borderRadius: "4px",
                border: "1px solid var(--nds-primary-color)",
              }}
              className="nds-typography"
            >
              {childrenList.map(
                (child, i) =>
                    React.cloneElement(child, {
                        className: "nds-menu-item",
                        onClick: child.props.onClick ? child.props.onClick : ()=>{setValue(child.props.children); closeDropdown();},
                        key: i,
                    })
              )}
            </div>
          </DropdownMenu>
          <Chevron open={open} setOpen={setOpen} />
        </div>
    );
  }
  
  Dropdown.defaultProps = {
    defaultOpen: false,
  };
  Dropdown.propTypes = {
    children: PropTypes.any,
    defaultOpen: PropTypes.bool,
    closeDropDown: PropTypes.bool,
    triggerLabel: PropTypes.string.isRequired,
    triggerValue: PropTypes.string,
  };
  
  
  export default Dropdown;