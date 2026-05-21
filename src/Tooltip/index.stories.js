import React, { useState } from "react";
import Tooltip from "./";
import Button from "../Button";
import TextInput from "../TextInput";
import MenuButton from "../MenuButton";
import IconButton from "../IconButton";

const Template = (args) => (
  <div
    style={{
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Tooltip {...args} />
  </div>
);

export const Overview = Template.bind({});
Overview.args = {
  text: "I am a tooltip, which is a tool for tips",
  children: <Button>Button with a tooltip</Button>,
};

export const WithTextInput = () => (
  <TextInput
    label="Account Number"
    endContent={
      <Tooltip text="If you don't have an account number, enter your customer ID">
        <span className="narmi-icon-info"></span>
      </Tooltip>
    }
  />
);

WithTextInput.parameters = {
  docs: {
    description: {
      story:
        "Tooltip can be used in a TextInput by passing it as the endContent prop.",
    },
  },
};

export const WithTooltipAsMenuButtonTrigger = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  return (
    <MenuButton
      label="Menu button"
      side="top"
      // renderTrigger provides its open state.
      // The Tooltip now knows when to show or hide.
      renderTrigger={(isMenuOpen) => (
        <Tooltip isOpen={isTooltipOpen && !isMenuOpen} text="i am a tip">
          <IconButton
            kind="action"
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
            name="sparkle"
          />
        </Tooltip>
      )}
    >
      <MenuButton.Item label="Do something!" />
      <MenuButton.Item label="Do something else" />
      <MenuButton.Item label="Do another thing" />
    </MenuButton>
  );
};

export const ControlledTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <Tooltip
        isOpen={isOpen}
        text="Hover over anywhere else to close the tooltip."
      >
        Tooltip should be over me
      </Tooltip>
      <Button
        style={{ marginLeft: 8 }}
        onClick={() => {
          setIsOpen((newIsOpen) => !newIsOpen);
        }}
      >
        Click Me.
      </Button>
    </div>
  );
};

ControlledTooltip.parameters = {
  docs: {
    description: {
      story:
        "Tooltip can controlled to be open or closed by passing an optional isOpen property",
    },
  },
};

export const ScrollingBehavior = () => (
  <div
    style={{
      height: "300vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "120vh",
    }}
  >
    <Tooltip
      isOpen={true}
      text="This tooltip flips when scrolled to the top of the viewport"
    >
      <Button>Scroll down to see me flip</Button>
    </Tooltip>
  </div>
);

ScrollingBehavior.parameters = {
  docs: {
    description: {
      story:
        "(Must be viewed as a standalone page) Scroll the page so the trigger is near the top of the viewport. The tooltip will flip from top to bottom when there isn't enough space above.",
    },
  },
};

export const ArrowTracking = () => (
  <div
    style={{
      resize: "horizontal",
      overflow: "hidden",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      outline: "1px dashed hotpink",
      padding: "var(--space-l)",
      width: "100%",
      minWidth: "200px",
      height: "200px",
    }}
  >
    <Tooltip
      isOpen={true}
      text="This tooltip has enough text to cause a collision with the right edge of the viewport"
    >
      <Button>Trigger</Button>
    </Tooltip>
  </div>
);

ArrowTracking.parameters = {
  docs: {
    description: {
      story:
        "Demonstrates arrow tracking behavior near viewport edges. Drag the bottom-right resize handle to move the trigger away from the right edge and observe how the arrow does (or does not) stay aligned with the anchor.",
    },
  },
};

export const MultipleTooltips = () => (
  <div
    style={{
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "var(--space-xl)",
    }}
  >
    <div style={{ display: "flex", gap: "var(--space-l)" }}>
      <Tooltip text="Tooltip on top" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip text="Tooltip on the right" side="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip text="Tooltip on the bottom" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip text="Tooltip on the left" side="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
    <div
      style={{ display: "flex", gap: "var(--space-l)", alignItems: "center" }}
    >
      <Tooltip text="Icon button tooltip">
        <IconButton kind="action" name="info" />
      </Tooltip>
      <Tooltip text="This tooltip has a longer message to demonstrate text wrapping behavior within the tooltip container">
        <Button kind="secondary">Long text</Button>
      </Tooltip>
      <Tooltip text="Inline tooltip">
        <span style={{ textDecoration: "underline dotted", cursor: "help" }}>
          hover this text
        </span>
      </Tooltip>
    </div>
  </div>
);

MultipleTooltips.parameters = {
  docs: {
    description: {
      story:
        "Multiple tooltips can coexist on the same page. Each tooltip operates independently, showing on hover/focus of its own trigger element.",
    },
  },
};

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};
