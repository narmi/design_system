import React from "react";
import Select from "./";

const Template = (args) => <Select {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Favorite icon",
  children: [
    <Select.Item value="coffee">
      <span className="narmi-icon-coffee padding--right--xs" /> Coffee
    </Select.Item>,
    <Select.Item value="film">
      <span className="narmi-icon-film padding--right--xs" /> Film
    </Select.Item>,
    <Select.Item value="truck">
      <span className="narmi-icon-truck padding--right--xs" /> Truck
    </Select.Item>,
    <Select.Action
      onSelect={() => {
        alert("side effect triggered - no option selected");
      }}
    >
      <span className="fontColor--pine fontWeight--bold">
        <span className="narmi-icon-plus padding--right--xs" /> Add new icon
      </span>
    </Select.Action>,
  ],
};

// using as a form element
// a `hidden` input can work natively in a `form`, or as a bridge to a form library of your choice.
// state + setting hidden input value

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    children: { control: false },
  },
};
