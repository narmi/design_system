import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { X } from "react-feather";

import Button from "components/Button";
import PlainButton from "components/PlainButton";
import { deviceBreakpoints } from "../../globalStyles";

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

  width: 100%;
  max-width: ${(props) => (props.large ? "500px" : "385px")};
  max-height: 600px;
  overflow-y: scroll;

  padding: 40px;
  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    width: auto;
    max-height: 100%;
    min-height: 366px;
    height: ${(props) => (props.large ? "90vh" : "50vh")};

    border-radius: 8px;
    bottom: 0;
    left: 0;
    top: unset;
    transform: unset;
  }
`;

const StyledBody = styled.div`
  overflow-y: scroll;
  max-height: 100%;
  width: 100%;

  font-family: var(--nds-font-family);
  font-size: 16px;
  font-weight: 400;

  color: var(--nds-grey-text);

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    max-height: unset;
  }
`;

const StyledHeader = styled.div`
  font-family: var(--nds-font-family);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 28px;
  color: var(--nds-black);
  width: 100%;

  padding-bottom: 8px;
  margin-bottom: ${(props) => (props.titleUnderline ? "20px" : null)};
  box-sizing: content-box;

  // border and extra bottom padding if titleUnderline provided
  border-bottom: ${(props) =>
    props.titleUnderline ? "2px solid var(--nds-primary-color)" : null};
  margin-bottom: ${(props) => (props.titleUnderline ? "8px" : null)};
`;

const StyledActionBar = styled.div`
  width: 100%;
  margin-bottom: 4px;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    // Large modals on mobile have a vertical ActionBar
    flex-flow: ${(p) => (p.large ? "column-reverse nowrap" : null)};
  }
`;

const StyledActionBarRight = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  > * {
    margin-left: 16px;
  }

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    // Large modals on mobile display centered Actions
    justify-content: ${(p) => (p.large ? "center" : null)};

    > * {
      margin-left: ${(p) => (p.large ? "unset" : null)};
      margin-bottom: ${(p) => (p.large ? "16px" : null)};
    }
  }
`;

const StyledActionBarLeft = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  > *:not(:last-child) {
    padding-right: 12px;
    border-right: 1px solid var(--nds-grey-disabled);
    margin-right: 12px;
  }

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    // Large modals on mobile display centered Actions
    padding-right: ${(p) => (p.large ? 0 : null)};
    justify-content: ${(p) => (p.large ? "center" : null)};
  }
`;

const StyledIcon = styled.span`
  cursor: pointer;
  position: fixed;
  top: 12px;
  right: 12px;

  @media ${`(max-width: ${deviceBreakpoints.mobileMax})`} {
    top: 20px;
    right: 20px;
    visibility: ${(props) => (props.large ? "visible" : "hidden")};
  }
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
    <Modal
      open={isOpen}
      onOpen={onOpen}
      onCancel={closeModal}
      {...rest}
      {...modalProps}
    />
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
  leftActions,
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
            large={large}
            {...rest}
          >
            <StyledIcon large={large}>
              <X size={20} onClick={onCancel} />
            </StyledIcon>
            <StyledHeader titleUnderline={titleUnderline}>{title}</StyledHeader>
            <StyledBody>{children}</StyledBody>
            {(leftActions && leftActions.length > 0) ||
            successLabel ||
            cancelLabel ? (
              <StyledActionBar large={large}>
                <StyledActionBarLeft large={large}>
                  {leftActions.map((action, idx) => (
                    <PlainButton small key={idx} onClick={action.action}>
                      {action.title}
                    </PlainButton>
                  ))}
                </StyledActionBarLeft>
                <StyledActionBarRight large={large}>
                  {cancelLabel ? (
                    <Button
                      secondary
                      transparent
                      onClick={onCancel}
                      label={cancelLabel}
                    />
                  ) : null}
                  {successLabel ? (
                    <Button primary onClick={onSuccess} label={successLabel} />
                  ) : null}
                </StyledActionBarRight>
              </StyledActionBar>
            ) : null}
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
  leftActions: PropTypes.array, // list of {action: () => (), title: 'Title'} actions
  successLabel: PropTypes.node,
  cancelLabel: PropTypes.node,
  onCancel: PropTypes.func,
  children: PropTypes.node, // numbers, string, DOM elements, arrays, fragments, ...
};

Modal.defaultProps = {
  modalElement: document.body, // mount modal Portal on body if no element provided
  open: false,
  large: false,
  title: "",
  titleUnderline: false,
  leftActions: [],
  successLabel: null,
  cancelLabel: null,
  onSuccess: null,
  onCancel: null,
};

export default Modal;
