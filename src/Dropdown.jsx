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
        <style>
            {`
                .nds-overlay123 {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background-color: transparent;
                    z-index: 999;
                    cursor: pointer;
                }
                .nds-card123 {
                    z-index: 1000;
                    position: absolute;
                    background-color: white;
                    width: 100%;
                    min-height: 100%;
                    box-sizing: content-box;
                    display: flex;
                    flex-flow: column nowrap;
                    border: 1px solid #1a4338;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .nds-body123 {
                    overflow-y: auto;
                    max-height: 100%;
                    width: 100%;
                }
            `}
        </style>
        <div className="nds-overlay123" onClick={onClose}></div>
        <div className="nds-card123" aria-modal aria-hidden tabIndex={-1} role="dialog" {...rest}>
          <div className="nds-body123">{children}</div>
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
          <style>
              {`
                .nds-menu-item {
                padding-top: 5px;
                padding-left: 12px;
                padding-bottom: 5px; 
                width: 100%;
                }
                .nds-menu-item:hover {
                    background: rgba(26, 67, 56, 0.05);
                }
                .nds-plain-button:hover {
                    text-decoration: none;
                }
              `}
          </style>
          <TextInput
            onChange={() => null}
            onFocus={openDropdown}
            label={props.triggerLabel}
            value={props.triggerValue}
          />
          <DropdownMenu
            open={open}
            onClose={closeDropdown}
            style={{
              position: "absolute",
              top: "9px",
              left: "-2px", // because of border
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
                  <div key={i} className="nds-menu-item">
                    {
                        React.cloneElement(child, {
                            closeDropdown,
                        })
                    }
                  </div>
                  // mutate our children to have these extra props
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
    closeDropDown: PropTypes.func,
    triggerLabel: PropTypes.string.isRequired,
    triggerValue: PropTypes.string,
  };
  
  
  export default Dropdown;