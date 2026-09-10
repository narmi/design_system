/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
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

/**
 * Interaction test verifying the slider thumb responds to keyboard input
 * and updates the value shown in the `<output>` element.
 */
export const KeyboardAdjusts = {
  name: "Interaction: Adjusts value with keyboard",
  render: () => (
    <Slider
      label="Price Range"
      lowerName="lower_price"
      higherName="higher_price"
      minValue={10}
      maxValue={120}
      defaultValue={[20, 50]}
      step={1}
    />
  ),
  play: async ({ canvas, userEvent }) => {
    const [lowerThumb] = canvas.getAllByRole("slider");
    const output = canvas.getByText(/between/i);
    expect(output).toHaveTextContent("Between 20 and 50");

    // move the lower thumb up by one step
    lowerThumb.focus();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => expect(output).toHaveTextContent("Between 21 and 50"));
  },
};

export const AsControlled = () => {
  const [value, setValue] = useState([20, 50]);
  return (
    <>
      <div className="fontSize--xl margin--bottom--xl">{`State in controlling component: ${value.join(" - ")}`}</div>
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
  );
};

export default {
  title: "Components/Slider",
  component: Slider,
};
