import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronUp, ChevronDown } from "react-feather";
import styled from "styled-components";
import Input from "components/Input";

const OVERLAY_Z_INDEX = 999;

const StyledTransparentOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: transparent;
  z-index: ${OVERLAY_Z_INDEX};
  cursor: pointer;
`;

const StyledCard = styled.div`
  z-index: ${OVERLAY_Z_INDEX+1};
  position: absolute;
  background-color: var(--nds-white);
  width: 100%;
  box-sizing: content-box;
  display: flex;
  flex-flow: column nowrap;
`;

const StyledBody = styled.div`
  overflow-y: auto;
  max-height: 100%;
  width: 100%;
`;

const DropdownMenu = ({ open, onClose, children, ...rest }) => {
  /*
   * display the dropdown options, if open={true}
   */
  return open ? (
    <>
      <StyledTransparentOverlay onClick={onClose}></StyledTransparentOverlay>
      <StyledCard aria-modal aria-hidden tabIndex={-1} role="dialog" {...rest}>
        <StyledBody>{children}</StyledBody>
      </StyledCard>
    </>
  ) : null;
};

DropdownMenu.propTypes = {
  open: PropTypes.bool, // optional override for forcing open
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
  onClose: PropTypes.func,
};

const Chevron = ({ open, setOpen }) => {
  const style = { position: "absolute", top: "6px", right: "13px" };
  if (!open) {
    return <ChevronDown onClick={setOpen.bind(null, true)} style={style} />;
  }
  return (
    <ChevronUp
      onClick={setOpen.bind(null, false)}
      style={{ ...style, zIndex: OVERLAY_Z_INDEX+1 }}
    />
  );
};
Chevron.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default function Dropdown(props) {
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
    : [props.children];

  return (
    <>
      <div
        style={{ position: "relative", cursor: "pointer" }}
        onKeyDown={(event) => {
          if(["Tab", "Escape"].includes(event.key)) closeDropdown();
        }}
      >
        <Input
          onChange={() => null}
          onFocus={openDropdown}
          label={props.triggerLabel}
          value={props.triggerValue}
          style={{ padding: "2px", border: "none" }}
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
            {childrenList.map((child) =>
              React.cloneElement(child, {
                closeDropdown,
                key: child,
              }) // mutate our children to have these extra props
            )}
          </div>
        </DropdownMenu>
        <Chevron open={open} setOpen={setOpen} />
      </div>
    </>
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
