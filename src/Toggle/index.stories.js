import React from "react";
import Toggle from "./";
import Row from "../Row";

const Template = (args) => <Toggle {...args} />;

export const Overview = Template.bind({});

export const WithLabel = () => (
  <Toggle defaultActive={true} label="Include hidden accounts" />
);

// eslint doesn't have visibility of the `aria-labelledby` prop inside Toggle
/* eslint-disable jsx-a11y/label-has-associated-control */
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
/* eslint-enable jsx-a11y/label-has-associated-control */

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    children: { table: { disable: true } },
    onChange: { action: "clicked" },
  },
};
