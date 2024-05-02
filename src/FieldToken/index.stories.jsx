import React from "react";
import FieldToken from ".";

const Template = (args) => <FieldToken {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  label: "Label",
};

export default {
  title: "Components/FieldToken",
  component: FieldToken,
};
