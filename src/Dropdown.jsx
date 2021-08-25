import React, { useState } from "react";
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
        <div onClick={onClose}></div>
        <div aria-modal aria-hidden tabIndex={-1} role="dialog" {...rest}>
          <div>{children}</div>
        </div>
      </>
    ) : null;
  };

  
const Dropdown = (props) => {
    /*
     * Dropdown menu
     * usage:
     *   <Dropdown
     *     triggerLabel={props.label}
     *     triggerValue={props.value}
     *     {...props}
     *   >
     *     <ContentToShowOnExpand />
     *   </Dropdown>
     */
    const [open, setOpen] = useState(props.defaultOpen);
  
    const openDropdown = () => {
      setOpen(true);
    };
    const closeDropdown = () => {
      setOpen(false);
    };
  
    // const childrenList = Array.isArray(props.children)
    //   ? props.children
    //   : [props.children];
  
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
            label={"props.triggerLabel"}
            value={"props.triggerValue"}
          />
          <DropdownMenu
            open={open}
            onClose={closeDropdown}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                borderRadius: "4px",
                border: "1px solid var(--nds-primary-color)",
              }}
            >
              {/* {childrenList.map(
                (child, i) =>
                  React.cloneElement(child, {
                    closeDropdown,
                    key: i,
                  }) 
                  // mutate our children to have these extra props
              )} */}
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
    triggerLabel: PropTypes.string.isRequired,
    triggerValue: PropTypes.string,
  };
  
  
  export default Dropdown;