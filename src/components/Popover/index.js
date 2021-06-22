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
    z-index: 100;
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

const StyledChevronDown = styled(ChevronDown)`
  margin-top: 3px;
`;

const StyledLabel = styled.a`
  color: var(--nds-grey-text);
  font-weight: 400;
  display: inline-block;
  align-items: center;
  color: ${(props) => (props.open ? "var(--nds-primary-color)" : null)};
  ${StyledPopover} ~ & {
    color: var(--nds-primary-color);
  }
  ::before {
    display: block;
    content: attr(data-text);
    font-weight: 600;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    @media ${`(max-width: ${deviceBreakpoints.tablet})`} {
      background-color: red;
      display: None;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  &:hover ${StyledChevronDown} {
    stroke-width: 3;
    color: var(--nds-primary-color);
  }
  &:hover ${StyledLabel} {
    color: var(--nds-primary-color);
    font-weight: 600;
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
      return <StyledChevronDown size={18} />;
    }
    if (open) {
      return <ChevronUp size={18} />;
    }

    // default closed
    return <ChevronDown size={18} />;
  };

  return (
    <StyledWrapper hoverable={hoverable}>
      <StyledDiv onClick={toggleOpen}>
        <StyledLabel data-text={label} open={open} hoverable={hoverable}>
          {label}
        </StyledLabel>
        {chevron()}
      </StyledDiv>
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
  label: PropTypes.node,
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
