import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ChevronUp, ChevronDown } from "react-feather";
import { deviceBreakpoints } from "../../globalStyles";

const hoverableStyles = css`
  visibility: hidden;
`;

export const StyledOverlay = styled.div`
  @media ${`(min-width: ${deviceBreakpoints.tablet})`} {
    position: absolute;
    background-color: var(--nds-white);
    border-radius: 4px;
    box-shadow: var(--nds-dropshadow-dark);
    box-sizing: border-box;
    top: 30px;
    left: ${(props) => (props.alignRight ? null : "0px")};
    z-index: 100;
    transform: translate(${(p) => p.shiftX}, ${(p) => p.shiftY});
    right: ${(props) =>
      props.alignRight ? "7px" : null}; // 7px to account for chevron
  }

  font-family: var(--nds-font-family);

  // start out invisible on hover
  ${(props) => (props.hoverable ? hoverableStyles : null)};
`;

export const StyledChevronDown = styled(ChevronDown)`
  margin-top: 3px;
  stroke-width: 1;
  color: var(--nds-grey-text);
`;

export const StyledChevronUp = styled(ChevronUp)`
  stroke-width: 2;
  color: var(--nds-primary-color);
`;

export const StyledLabel = styled.a`
  color: var(--nds-grey-text);
  color: ${(props) =>
    props.open ? "var(--nds-primary-color)" : "var(--nds-grey-text)"};
  font-weight: ${(props) => (props.open ? 600 : 400)};
  line-height: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
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

export const StyledWrapper = styled.span`
  // position: relative + position: absolute allows absolutely positioning child relative to parent
  position: relative;
  font-family: var(--nds-font-family);
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  &:hover ${StyledOverlay} {
    visibility: visible;
  }

  // hover to keep chevron and label bolded and highlighted when hovering the overlay
  &:hover ${StyledChevronDown} {
    stroke-width: ${(props) => (props.hoverable ? "2" : null)};
    color: ${(props) => (props.hoverable ? "var(--nds-primary-color)" : null)};
  }
  &:hover ${StyledLabel} {
    color: ${(p) => (p.hoverable ? "var(--nds-primary-color)" : null)};
    font-weight: ${(p) => (p.hoverable ? "600" : null)};
  }
`;

export const StyledTrigger = styled.div`
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
      return <StyledChevronUp size={18} />;
    }

    // default closed
    return <StyledChevronDown size={18} />;
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
