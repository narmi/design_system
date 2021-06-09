import React from "react";
import Card from "components/Card";
import { Centered } from "../../decorators";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [Centered],
};

const Template = (args) => <Card {...args} />;
const DefaultArgs = {
};

export const LineItemCard = Template.bind({});
LineItemCard.args = {
  ...DefaultArgs,
};
