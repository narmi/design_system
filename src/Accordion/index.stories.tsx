/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Accordion from "./";
import Row from "../Row";

export const Overview = ({
  children = "This is the accordion content that can be expanded or collapsed.",
  ...otherProps
}) => {
  return (
    <Accordion
      renderSummary={(isOpen) => (
        <span>Click to {isOpen ? "collapse" : "expand"}</span>
      )}
      {...otherProps}
    >
      <div className="padding--y">{children}</div>
    </Accordion>
  );
};

export const WithCustomSummary = () => {
  return (
    <Accordion
      renderSummary={(isOpen) => (
        <div
          className={`alignChild--left--center padding--all--s bgColor--cloudGrey ${isOpen ? "rounded--top" : "rounded--all"}`}
        >
          <Row alignItems="center" justifyContent="space-between">
            <Row.Item>
              <strong>Account Details</strong>
            </Row.Item>
            <Row.Item shrink>
              <span className="fontSize--xs fontColor--charcoal">
                {isOpen ? "Hide" : "Show"} details
              </span>
            </Row.Item>
          </Row>
        </div>
      )}
    >
      <div className="padding--all bgColor--blueGrey rounded--bottom">
        <p>
          <strong>Account Number:</strong> 123456789
        </p>
        <p>
          <strong>Balance:</strong> $1,234.56
        </p>
        <p>
          <strong>Type:</strong> Checking
        </p>
      </div>
    </Accordion>
  );
};

export const WithFocusableContent = () => {
  return (
    <Accordion renderSummary={() => <span>Settings & Actions</span>}>
      <div className="padding--all">
        <p>
          Focusable elements are only reachable when the Accordion is open (
          <code>aria-hidden</code> controls this).
        </p>
        <div className="margin--top--s">
          <a href="#" className="margin--right--s">
            Learn more
          </a>
          <button type="button" className="margin--right--s">
            Edit Settings
          </button>
          <button type="button">Save Changes</button>
        </div>
        <div className="margin--top--s">
          <input type="text" placeholder="Search settings..." />
        </div>
      </div>
    </Accordion>
  );
};
WithFocusableContent.parameters = {
  docs: {
    description: {
      story:
        "Accordion content with focusable elements (links, buttons, inputs) to test keyboard navigation and accessibility when expanded/collapsed.",
    },
  },
};

export const ControlledMode = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="margin--bottom">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"} accordion externally
        </button>
      </div>

      <Accordion
        isOpen={isOpen}
        onUserToggle={setIsOpen}
        renderSummary={(isOpen) => (
          <Row alignItems="center" gapSize="xs">
            <Row.Item shrink>
              <span>{isOpen ? "▼" : "▶"}</span>
            </Row.Item>
            <Row.Item shrink>
              <span>Controlled Accordion</span>
            </Row.Item>
          </Row>
        )}
      >
        <div className="padding--all">
          This accordion state is controlled by the parent component. You can
          toggle it using the button above or by clicking this summary.
        </div>
      </Accordion>
    </div>
  );
};
ControlledMode.parameters = {
  docs: {
    description: {
      story:
        "When `isOpen` is provided, the accordion becomes controlled. The parent component must handle state updates via the `onUserToggle` callback.",
    },
  },
};

export const InitiallyOpen = () => {
  return (
    <Accordion
      isOpen={true}
      onUserToggle={() => {}}
      renderSummary={(isOpen) => (
        <Row alignItems="center" gapSize="xs">
          <Row.Item shrink>
            <span>{isOpen ? "▼" : "▶"}</span>
          </Row.Item>
          <Row.Item shrink>
            <span>This accordion starts open</span>
          </Row.Item>
        </Row>
      )}
    >
      This accordion is initially open and cannot be closed because the
      onUserToggle handler is empty.
    </Accordion>
  );
};
InitiallyOpen.parameters = {
  docs: {
    description: {
      story:
        "Example of an accordion that starts in the open state. Since onUserToggle is empty, it remains open.",
    },
  },
};

export default {
  title: "Components/Accordion",
  component: Accordion,
};
