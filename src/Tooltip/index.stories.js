import React from "react";
import Tooltip from "./";

const Template = (args) => <Tooltip {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  text: "I am a tooltip, which is a tool for tips",
  children: (
    <p style={{ background: "pink", maxWidth: "300px" }}>
      tooltip trigger area
    </p>
  ),
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
