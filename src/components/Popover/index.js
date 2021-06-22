import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ChevronUp, ChevronDown } from "react-feather";
import { deviceBreakpoints } from "../../globalStyles";

const hoverableStyles = css`
  visibility: hidden;
  transition: visibility 0.5s ease-in;
`;

const StyledOverlay = styled.div`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    position: absolute;
    background-color: var(--nds-white);
    border-radius: 4px;
    box-shadow: var(--nds-dropshadow-dark);
    box-sizing: border-box;
    top: 30px;
    left: ${(props) => (props.alignRight ? null : "-0px")};
    z-index: 100;
    transform: translate(${(p) => p.shiftX}, ${(p) => p.shiftY});
    right: ${(props) =>
      props.alignRight ? "7px" : null}; // 7px to account for chevron
  }

  font-family: var(--nds-font-family);

  // start out invisible on hover
  ${(props) => (props.hoverable ? hoverableStyles : null)};
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-top: 3px;
`;

const StyledLabel = styled.a`
  color: var(--nds-grey-text);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.open ? "var(--nds-primary-color)" : null)};
  ${StyledTrigger} ~ & {
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
      display: None;
    }
  }
`;

const StyledWrapper = styled.span`
  // position: relative + position: absolute allows absolutely positioning child relative to parent
  position: relative;
  font-family: var(--nds-font-family);
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover ${StyledOverlay} {
    visibility: visible;
  }

  // hover to keep chevron and label bolded and highlighted when hovering the overlay
  &:hover ${StyledChevronDown} {
    stroke-width: 3;
    color: var(--nds-primary-color);
  }
  &:hover ${StyledLabel} {
    color: var(--nds-primary-color);
    font-weight: 600;
  }
`;

const StyledTrigger = styled.div`
  display: flex;
  align-items: center;
`;

const Popover = ({
  label,
  hoverable,
  shiftX,
  shiftY,
  alignRight,
  children,
  ...rest
}) => {
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
      <StyledTrigger onClick={toggleOpen}>
        <StyledLabel data-text={label} open={open} hoverable={hoverable}>
          {label}
        </StyledLabel>
        {chevron()}
      </StyledTrigger>
      {open || hoverable ? (
        <StyledOverlay
          shiftX={shiftX}
          shiftY={shiftY}
          hoverable={hoverable}
          alignRight={alignRight}
          {...rest}
        >
          {children}
        </StyledOverlay>
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
  alignRight: PropTypes.bool,
  children: PropTypes.node,
};

Popover.defaultProps = {
  hoverable: false,
  label: null,
  alignRight: false,
  shiftX: "0%",
  shiftY: "0%",
};

export default Popover;
