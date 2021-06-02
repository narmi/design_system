import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { X } from "react-feather";

import ButtonGroup from "components/ButtonGroup";

const StyledOverlay = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--nds-grey-scrim-light);
  z-index: 999;
`;

const StyledCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);

  background-color: var(--nds-white);

  width: ${(props) => (props.large ? "500px" : "375px")};
  max-height: 600px;
  overflow-y: scroll;

  padding: 40px;
  box-sizing: content-box;

  // scrolls on overflow
  // TODO: is max-height right? Hillary

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledBody = styled.div`
  overflow-y: scroll;
  max-height: 100%;
  width: 100%;

  font-family: var(--nds-font-family);
  font-size: 16px;
  font-weight: 400;

  margin-bottom: 40px;
`;

const StyledHeader = styled.div`
  font-family: var(--nds-font-family);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 28px;
  color: var(--nds-black);
  width: 100%;

  padding-bottom: ${(props) => (props.titleUnderline ? "6px" : "8px")};
  box-sizing: content-box;

  // border and extra bottom padding if titleUnderline provided
  border-bottom: ${(props) =>
    props.titleUnderline ? "2px solid var(--nds-primary-color)" : null};
  margin-bottom: ${(props) => (props.titleUnderline ? "20px" : null)};
`;

const StyledActionBar = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
`;

const StyledIcon = styled.span`
  position: fixed;
  top: 16px;
  right: 16px;
`;

const Modal = ({ title, titleUnderline, children, ...rest }) => {
  return (
    <StyledOverlay>
      <StyledCard {...rest}>
        <StyledIcon>
          <X size={12} />
        </StyledIcon>
        <StyledHeader titleUnderline={titleUnderline}>{title}</StyledHeader>
        <StyledBody>{children}</StyledBody>
        <StyledActionBar>
          <ButtonGroup />
        </StyledActionBar>
      </StyledCard>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleUnderline: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Modal.defaultProps = {
  title: "",
  titleUnderline: false,
  large: false,
};

export default Modal;
