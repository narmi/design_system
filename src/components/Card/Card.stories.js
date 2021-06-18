import React from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Button from "components/Button";
import { Centered } from "../../decorators";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [Centered],
};

const Template = (args) => <Card {...args} />;
const DefaultArgs = {};

export const CardTest = Template.bind({});
CardTest.args = {
  ...DefaultArgs,
  title: <Typography>TITLE</Typography>,
  children: <div>yo</div>,
};

export const LineItemCard = Template.bind({});
LineItemCard.args = {
  ...DefaultArgs,
  title: (
    <div
      style={{
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
      }}
    >
      <Typography>TITLE</Typography>
      <Button
        style={{ color: "var(--nds-secondary-color)" }}
        transparent={true}
        secondary={true}
      >
        Button
      </Button>
    </div>
  ),
  children: <div>yo</div>,
};
