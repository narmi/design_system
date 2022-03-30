import React from "react";
import Checkbox from "./";

const Template = (args) => <Checkbox {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "I agree to receive spam",
  name: "spam",
};

export const MultipleCheckboxes = () => (
  <>
    <h3 className="margin--bottom">Permissions</h3>
    <Checkbox label="See statements and documents" name="view" />
    <Checkbox label="Make deposits" name="deposit" />
    <Checkbox label="Make withdraws" name="widthdraw" />
  </>
);

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: { action: "change" },
  },
};
