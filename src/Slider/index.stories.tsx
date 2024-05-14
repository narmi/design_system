/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Slider from "./index";

const Template = (args) => <Slider {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Price Range",
  lowerName: "lower_price",
  higherName: "higher_price",
  minValue: 10,
  maxValue: 120,
  defaultValue: [20, 50],
  step: 1,
};

export const AsControlled = () => {
  const [value, setValue] = useState([20, 50]);
  return (
    <>
      <div className="fontSize--l margin--bottom--xl">{`State in controlling component: ${value.join(" - ")}`}</div>
      <Slider
        lowerName="lower_age"
        higherName="higher_age"
        label="Age"
        maxValue={120}
        step={1}
        value={value}
        onChange={setValue}
      />
    </>
  )
}

export default {
  title: "Components/Slider",
  component: Slider,
}
