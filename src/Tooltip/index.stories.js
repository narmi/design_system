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
  <div style={{ position: "relative" }}>
    <TextInput label="Account Number" />
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "16px",
        transform: "translateY(-44%)",
      }}
    >
      <Tooltip text="If you don't have an account number, enter your customer ID">
        <span className="narmi-icon-info"></span>
      </Tooltip>
    </div>
  </div>
);

WithTextInput.parameters = {
  docs: {
    description: {
      story:
        "Tooltip can be used in a TextInput by composing an absolutely positioned narmi icon as the Tooltip trigger.",
    },
  },
};

export const ControlledTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseLeave={(event) => {
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
        "Tooltip can be used in a TextInput by composing an absolutely positioned narmi icon as the Tooltip trigger.",
    },
  },
};

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};
