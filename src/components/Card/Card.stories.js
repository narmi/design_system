import React from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Button from "components/Button";
import { ArrowLeft, ArrowRight } from "react-feather";
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
  title: (
    <div style={{ display: "flex", paddingTop: "11px" }}>
      <Typography>TITLE</Typography>
    </div>
  ),
  children: <div>This is a piece of text that explains something.</div>,
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
  children: <div>This is a piece of text that explains something.</div>,
};

export const MuliButtons = Template.bind({});
MuliButtons.args = {
  ...DefaultArgs,
  title: (
    <div
      style={{
        display: "flex",
        "align-items": "center",
      }}
    >
      <Typography style={{ fontWeight: "600", color: "#2A4494" }}>
        TITLE
      </Typography>
      <div
        style={{
          color: "#2A4494",
          height: "30px",
          display: "flex",
          "flex-direction": "column",
        }}
      >
        <ArrowRight /> <ArrowLeft style={{ marginTop: "-3px" }} />
      </div>
    </div>
  ),
  children: (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        left: "0",
        width: "70px",
      }}
    >
      <Button
        style={{ color: "var(--nds-secondary-color)" }}
        transparent={true}
        secondary={true}
      >
        Button 1
      </Button>
      <Button
        style={{ color: "var(--nds-secondary-color)" }}
        transparent={true}
        secondary={true}
      >
        Button 2
      </Button>
      <Button
        style={{ color: "var(--nds-secondary-color)" }}
        transparent={true}
        secondary={true}
      >
        Button 3
      </Button>
    </div>
  ),
};
