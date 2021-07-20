import React from "react";

import RadioButtons from "components/RadioButtons";
import { Centered } from "../../decorators";

export default {
  title: "Components/RadioButtons",
  component: RadioButtons,
  decorators: [Centered],
};

const Template = (args) => <RadioButtons {...args} />;
const DefaultArgs = {};

export const Boolean = Template.bind({});
Boolean.args = {
  ...DefaultArgs,
  options: ["True", "False"],
};

export const ManyOptions = Template.bind({});
ManyOptions.args = {
  ...DefaultArgs,
  options: ["test1", "test2", "test3", "test4"],
};

export const Test = () => {return(<RadioButtons options={["True", "False"]} currentValue={"true"}></RadioButtons>)};
