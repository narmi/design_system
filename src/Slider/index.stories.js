/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Slider from "./";

const Template = (args) => <Slider {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Price Range",
  maxValue: 120,
  defaultValue: [20, 50],
  step: 1,
};

export const AsControlled = () => {
  const [value, setValue] = useState([20, 50]);
  return (
    <Slider
      label="Age"
      maxValue={120}
      step={1}
      value={value}
      onChange={setValue}
    />
  )
}

export default {
  title: "Components/Slider",
  component: Slider,
};
