import React from "react";
import Error from "./";

const Template = (args) => (
  <div className="border--top alignChild--left--top">
    <Error {...args} />
  </div>
);

export const Overview = Template.bind({});
Overview.args = {
  error: "Required.",
};

export default {
  title: "Components/Error",
  component: Error,
};
  