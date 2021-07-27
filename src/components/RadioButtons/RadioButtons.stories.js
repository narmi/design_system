import React from "react";

import RadioButtons from "components/RadioButtons";
import { Centered } from "../../decorators";

export default {
  title: "Components/RadioButtons",
  component: RadioButtons,
  decorators: [Centered],
};

const Template = (args) => <RadioButtons {...args} />;
const DefaultArgs = {
  inputType: "setting_value",
};

export const Boolean = Template.bind({});
Boolean.args = {
  ...DefaultArgs,
  initialValue: true,
  options: [
    { label: "True", value: true },
    { label: "False", value: false },
  ],
};

export const ManyOptions = Template.bind({});
ManyOptions.args = {
  ...DefaultArgs,
  options: [
    { label: "test1", value: "test1" },
    { label: "test2", value: "test2" },
    { label: "test3", value: "test3" },
    { label: "test4", value: "test3" },
  ],
};


