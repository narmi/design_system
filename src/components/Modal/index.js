import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { X } from "react-feather";

import Button from "components/Button";

const StyledOverlay = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--nds-grey-scrim-light);
  z-index: 999;

  cursor: pointer;
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
  cursor: pointer;
  position: fixed;
  top: 16px;
  right: 16px;
`;

export const useModal = ({ defaultOpen, onOpen, onCancel, ...rest }) => {
  /*
   * export a ModalComponent that can be rendered, and the handlers to open/close it
   *
   * Usage:
   * [openModal, closeModal, ModalComponent] = useModal()
   *
   * <Button onClick={openModal}>Open</Button>
   * <ModalComponent>Modal content</ModalComponent>
   */
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const openModal = () => {
    setIsOpen(true);
    if (onOpen) {
      onOpen();
    }
  };
  const closeModal = () => {
    setIsOpen(false);
    if (onCancel) {
      onCancel();
    }
  };

  const ModalComponent = (modalProps) => (
    <Modal open={isOpen} onOpen={onOpen} onCancel={closeModal} {...rest} {...modalProps} />
  );

  return {
    openModal,
    closeModal,
    ModalComponent,
  };
};

useModal.propTypes = {
  defaultOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onCancel: PropTypes.func,
};

const Modal = ({
  modalElement,
  open,
  large,
  title,
  titleUnderline,
  successLabel,
  cancelLabel,
  onSuccess,
  onCancel,
  children,
  ...rest
}) => {
  /*
   * render a Modal element inside a Portal, if open={true}
   */
  return open
    ? ReactDOM.createPortal(
        <>
          <StyledOverlay onClick={onCancel}></StyledOverlay>
          <StyledCard
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            {...rest}
          >
            <StyledIcon>
              <X size={12} onClick={onCancel} />
            </StyledIcon>
            <StyledHeader titleUnderline={titleUnderline}>{title}</StyledHeader>
            <StyledBody>{children}</StyledBody>
            <StyledActionBar>
              {cancelLabel ? (
                <Button secondary onClick={onCancel} label={cancelLabel} />
              ) : null}
              {successLabel ? (
                <Button primary onClick={onSuccess} label={successLabel} />
              ) : null}
            </StyledActionBar>
          </StyledCard>
        </>,
        modalElement
      )
    : null;
};

Modal.propTypes = {
  modalElement: PropTypes.node,
  open: PropTypes.bool, // optional override for forcing open
  large: PropTypes.bool,
  title: PropTypes.node,
  titleUnderline: PropTypes.bool,
  successLabel: PropTypes.node,
  cancelLabel: PropTypes.node,
  onCancel: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Modal.defaultProps = {
  modalElement: document.body, // mount modal Portal on body if no element provided
  open: false,
  large: false,
  title: "",
  titleUnderline: false,
  successLabel: null,
  cancelLabel: null,
  onSuccess: null,
  onCancel: null,
};

export default Modal;
