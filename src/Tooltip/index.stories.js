import React, { useState } from "react";
import Tooltip from "./";
import Button from "../Button";
import TextInput from "../TextInput";

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
