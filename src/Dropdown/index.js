import React, { useState, useEffect } from "react";
import TextInput from "TextInput";
import PropTypes from "prop-types";

const Chevron = ({ open, setOpen }) => {
  if (open) {
    return (
      <span
        className={"nds-dropdown-chevron narmi-icon-chevron-up"}
        onClick={setOpen.bind(null, false)}
      />
    );
  }
  return (
    <span
      onClick={setOpen.bind(null, true)}
      className={"nds-dropdown-chevron narmi-icon-chevron-down"}
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
    <div className="nds-dropdown-menu">
      <div className="nds-dropdown-overlay" onClick={onClose}></div>
      <div
        className="nds-dropdown-menu-items"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
        {...rest}
      >
        {children}
      </div>
    </div>
  ) : null;
};

const Dropdown = (props) => {
  const [open, setOpen] = useState(props.defaultOpen);
  const [value, setValue] = useState(props.defaultValue || "");

  useEffect(() => {
    if (value === undefined && props.defaultValue) {
      setValue(props.defaultValue);
    }
  }, []);
  useEffect(() => {
    if (props.closeDropDown === true) {
      closeDropdown();
    }
  }, [props.closeDropDown]);

  const openDropdown = () => {
    setOpen(true);
  };
  const closeDropdown = () => {
    setOpen(false);
  };

  const childrenList = Array.isArray(props.children)
    ? props.children.flat()
    : props.children.flat();

  const { multiline, style, ...nativeElementProps } = props;
  return (
    <div
      onKeyDown={(event) => {
        if (["Tab", "Escape"].includes(event.key)) closeDropdown();
      }}
      className="nds-dropdown"
      field="test"
    >
      <TextInput
        onClick={() => {
          setOpen(true);
        }}
        value={value}
        field={props.field}
        label={props.triggerLabel}
        readOnly
      />
      <DropdownMenu open={open} onClose={closeDropdown}>
        <div className="nds-dropdown-children nds-typography">
          {childrenList.map((child, i) =>
            React.cloneElement(child, {
              className: "nds-dropdown-item",
              onClick: child.props.onClick
                ? child.props.onClick
                : () => {
                    setValue(child.props.children);
                    props.onChange(child.props.children);
                    closeDropdown();
                  },
              key: i,
            })
          )}
        </div>
      </DropdownMenu>
      <Chevron open={open} setOpen={setOpen} />
    </div>
  );
};

Dropdown.defaultProps = {
  defaultOpen: false,
  onChange: () => {
    null;
  },
};
Dropdown.propTypes = {
  children: PropTypes.any,
  defaultOpen: PropTypes.bool,
  onChange: PropTypes.func,
  closeDropDown: PropTypes.bool,
  triggerLabel: PropTypes.string.isRequired,
  triggerValue: PropTypes.string,
};

export default Dropdown;
