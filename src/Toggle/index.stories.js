import React from "react";
import Toggle from "./";
import Row from "../Row";

const Template = (args) => <Toggle {...args} />;

export const Overview = Template.bind({});

export const WithLabel = () => (
  <Toggle defaultActive={true} label="Include hidden accounts" />
);

export const WithCustomLabel = () => (
  <div className="padding--y--xs border--top">
    <Row alignItems="center">
      <Row.Item>
        <label id="my-custom-label">Custom label on the left</label>
      </Row.Item>
      <Row.Item shrink>
        <Toggle labelledBy="my-custom-label" />
      </Row.Item>
    </Row>
  </div>
);

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    children: { table: { disable: true } },
    onChange: { action: "clicked" },
  },
};
