import React from "react";
import Tooltip from "./";
import Button from "../Button";
import TextInput from "../TextInput";

const Template = (args) => <Tooltip {...args} />;

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

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
