import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Meta } from "@storybook/react-vite";
import useDialog, { DialogDismissReason } from ".";
import Button from "../../../Button";
import TextInput from "../../../TextInput";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

export const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastReason, setLastReason] = useState<DialogDismissReason | null>(
    null,
  );

  const {
    dialogProps,
    backdropProps,
    titleProps,
    descriptionProps,
    closeButtonProps,
  } = useDialog({
    isOpen,
    onDismiss: (reason) => {
      setLastReason(reason);
      setIsOpen(false);
    },
  });

  return (
    <>
      <Button kind="secondary" onClick={() => setIsOpen(true)}>
        Open modal dialog
      </Button>
      <p className="margin--top--s">
        Last dismissed by: <code>{lastReason ?? "—"}</code>
      </p>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            {...backdropProps}
            style={{
              position: "fixed",
              inset: 0,
              display: "grid",
              placeItems: "center",
              background: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              {...dialogProps}
              className="bgColor--white padding--all--l rounded--all"
              style={{ width: "min(400px, 90vw)" }}
            >
              <div className="alignChild--left--center justifyContent--between">
                <h4 {...titleProps}>Rename account</h4>
                <button
                  {...closeButtonProps}
                  className="resetButton padding--all--xs"
                >
                  <span className="narmi-icon-x" aria-hidden="true" />
                </button>
              </div>
              <p {...descriptionProps} className="margin--y--s">
                Choose a nickname for this account. It only changes what you
                see.
              </p>
              <TextInput label="Nickname" />
              <div className="margin--top--l alignChild--right--center">
                <Button kind="primary" onClick={() => setIsOpen(false)}>
                  Save
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export const NonModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { dialogProps, titleProps, closeButtonProps } = useDialog({
    isOpen,
    isModal: false,
    initialFocus: "container",
    onDismiss: () => setIsOpen(false),
  });

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        kind="secondary"
        onMouseDown={(event: React.MouseEvent) => event.stopPropagation()}
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle filters
      </Button>
      {isOpen && (
        <div
          {...dialogProps}
          className="bgColor--white padding--all--l rounded--all"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "var(--space-xs)",
            width: "280px",
            boxShadow: "var(--elevation-high)",
          }}
        >
          <div className="alignChild--left--center justifyContent--between">
            <h5 {...titleProps}>Filters</h5>
            <button
              {...closeButtonProps}
              className="resetButton padding--all--xs"
            >
              <span className="narmi-icon-x" aria-hidden="true" />
            </button>
          </div>
          <p className="margin--y--s">
            Click outside or press Escape to close. The page behind stays
            scrollable.
          </p>
          <TextInput label="Search" />
        </div>
      )}
    </div>
  );
};

const meta: Meta = {
  title: "Hooks/Interaction/useDialog", // Show doc page not individual stories
  tags: ["autodocs", "!dev"],
  component: Overview,
};

export default meta;
