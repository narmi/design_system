import React from "react";
import Input from "components/Input";
import { Centered } from "../../decorators";

import { Info } from "react-feather";

export default {
  title: "Components/Input",
  component: Input,
  decorators: [Centered],
};

const Template = (args) => <Input {...args} />;
export const Initial = Template.bind({});
Initial.args = {
  label: "Label",
  id: "testInput",
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...Initial.args,
  disabled: true,
  value: "This input is disabled",
};
export const FullyControlled = Template.bind({});
FullyControlled.args = {
  ...Initial.args,
  value: "This value can be set",
};
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Initial.args,
  placeholder: "Your placeholder text",
};
export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...Initial.args,
  defaultValue: "Your text here",
};
export const WithDecoration = Template.bind({});
WithDecoration.args = {
  ...Initial.args,
  decoration: (
    <div style={{cursor: "pointer"}} onClick={() => alert("Clicked info!")}>
      <Info size={12} color="#8c8c8c" />
    </div>
  ),
};
export const WithError = Template.bind({});
WithError.args = {
  ...Initial.args,
  defaultValue: "me@dotcom",
  error: "Please provide a valid email address",
};
export const Date = Template.bind({});
Date.args = {
  ...Initial.args,
  label: "Date",
  type: "date",
};
export const Phone = Template.bind({});
Phone.args = {
  ...Initial.args,
  label: "Phone Number",
  type: "tel",
  placeholder: "(xxx) xxx-xxxx",
  pattern: "([0-9]{3}) [0-9]{3}-[0-9]{4}",
};
