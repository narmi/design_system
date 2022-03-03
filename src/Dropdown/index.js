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
const Dropdown = ({error, ...props}) => {
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
        error={error}
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
  onChange: () => {},
};
Dropdown.propTypes = {
  /** Initial label shown in input */
  triggerLabel: PropTypes.string.isRequired,
  /** Array of elements to render as items in the dropdown */
  children: PropTypes.array,
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
  /** Optional error message that displays an error state when passed */
  error: PropTypes.string,
};

export default Dropdown;
