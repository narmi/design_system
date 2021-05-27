import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ChevronUp, ChevronDown } from "react-feather";
import { deviceBreakpoints } from "../../globalStyles";

const StyledPopover = styled.div`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    position: absolute;
    background-color: var(--nds-white);
    border-radius: 4px;
    box-shadow: var(--nds-dropshadow-dark);
    box-sizing: border-box;
    top: 30px;
    left: -0px;
    transform: translate(${(p) => p.shiftX}, ${(p) => p.shiftY});
  }

  font-family: var(--nds-font-family);

  // start out invisible on hover
  ${(props) => (props.hoverable ? hoverableStyles : null)};
`;
const hoverableStyles = css`
  visibility: hidden;
  transition: visibility 0.5s ease-in;
`;

const StyledWrapper = styled.span`
  // position: relative + position: absolute allows absolutely positioning child relative to parent
  position: relative;
  font-family: var(--nds-font-family);

  &:hover ${StyledPopover} {
    visibility: visible;
  }
`;

const Popover = ({ label, hoverable, shiftX, shiftY, children, ...rest }) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    if (hoverable) return;
    setOpen(!open);
  };

  const chevron = () => {
    if (hoverable) {
      return <ChevronDown size={18} />;
    }
    if (open) {
      return <ChevronUp size={18} />;
    }

    // default closed
    return <ChevronDown size={18} />;
  };

  return (
    <StyledWrapper hoverable={hoverable}>
      <span onClick={toggleOpen}>
        {label ? `${label} ` : null}
        {chevron()}
      </span>
      {open || hoverable ? (
        <StyledPopover
          shiftX={shiftX}
          shiftY={shiftY}
          hoverable={hoverable}
          {...rest}
        >
          {children}
        </StyledPopover>
      ) : null}
    </StyledWrapper>
  );
};

// TODO:
// - open/close transition/animation
// - custom Triggers (needs both triggerOpen and triggerClosed)

Popover.propTypes = {
  hoverable: PropTypes.bool,
  label: PropTypes.string,
  // popover position; eg "50%" or "-10px"
  shiftX: PropTypes.string,
  shiftY: PropTypes.string,
  // accept either a list of nodes or object categories:[nodes]
  // or accept children directly
  children: PropTypes.node,
};

Popover.defaultProps = {
  hoverable: false,
  label: null,
  shiftX: "0%",
  shiftY: "0%",
};

export default Popover;
