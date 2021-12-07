import React from "react";
import Popover from "./";
import Button from "../Button";
import TextInput from "../TextInput";

const Template = (args) => <Popover {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  content: <div className="padding--all--m">📦 Any content</div>,
  children: <Button type="secondary">Click to show Popover</Button>,
};
Overview.argTypes = {
  content: { control: false },
};

export default {
  title: "Components/Popover",
  component: Popover,
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
