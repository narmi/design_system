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

export const WithMenuButton = () => (
  <Tooltip text="I am telling you about this menu button">
    <MenuButton label="Menu button" side="top">
      <MenuButton.Item label="Do something" />
      <MenuButton.Item label="Do something else" />
      <MenuButton.Item label="Do another thing" />
    </MenuButton>
  </Tooltip>
);

export const WithMenuButtonWorkaround = () => {
  // only show the tooltip until the menu button is clicked,
  // then hide it until component is remounted.
  const [allowTooltip, setAllowTooltip] = useState(true);

  return (
    <Tooltip
      text="I am telling you about this menu button"
      isOpen={allowTooltip ? undefined : false}
    >
      <MenuButton
        label="Menu button"
        side="top"
        renderTrigger={() => (
          <IconButton
            kind="action"
            name="sparkle"
            onClick={() => setAllowTooltip(false)}
          />
        )}
      >
        <MenuButton.Item label="Do something!" />
        <MenuButton.Item label="Do something else" />
        <MenuButton.Item label="Do another thing" />
      </MenuButton>
    </Tooltip>
  );
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

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};
