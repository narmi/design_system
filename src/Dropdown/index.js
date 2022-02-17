import React, { useState, useEffect } from "react";
import TextInput from "../TextInput";
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

/**
 * Combobox UI for filling an `input` value from a list of options
 */
const Dropdown = (props) => {
  const {
    children,
    closeDropDown: isDropdownClosed,
    defaultOpen,
    defaultValue,
    multiline,
    onChange = () => {},
    onClose = () => {},
    style,
    triggerLabel,
    value: nativeValue,
    ...nativeElementProps } = props;

  const [open, setOpen] = useState(defaultOpen);
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (value === undefined && defaultValue) {
      setValue(defaultValue);
    }
  }, []);

  useEffect(() => {
    if (isDropdownClosed === true) {
      closeDropdown();
    }
  }, [isDropdownClosed]);

  const closeDropdown = () => {
    setOpen(false);
    onClose();
  };

  const childrenList = Array.isArray(children)
    ? children.flat()
    : children;

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
        label={triggerLabel}
        {...nativeElementProps}
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
                    onChange(child.props.children);
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
  onChange: () => {},
};
Dropdown.propTypes = {
  /** Initial label shown in input */
  triggerLabel: PropTypes.string.isRequired,
  /** Array of elements to render as items in the dropdown */
  children: PropTypes.arrayOf(PropTypes.element),
  /** Sets `field` prop of internal `TextInput` */
  field: PropTypes.string,
  /** When true, the dropdown initially renders as open */
  defaultOpen: PropTypes.bool,
  /** Callback invoked when user selects a new value from the options list */
  onChange: PropTypes.func,
  /** Callback invoked when the dropdown closes*/
  onClose: PropTypes.func,
  /** When true, the dropdown is forced to close */
  closeDropDown: PropTypes.bool,
};

export default Dropdown;
