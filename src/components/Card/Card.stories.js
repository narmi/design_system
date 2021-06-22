import React from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Button from "components/Button";
import PlainButton from "components/PlainButton";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "react-feather";

export default {
  title: "Components/Card",
  component: Card,
};

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Template = (args) => <Card {...args} />;
const DefaultArgs = {
  title: (
    <div style={{ display: "flex" }}>
      <Typography>TITLE</Typography>
    </div>
  ),
};

export const BasicCard = Template.bind({});
BasicCard.args = {
  ...DefaultArgs,
  children: <div>This is a piece of text that explains something.</div>,
};

export const LineItemCard = Template.bind({});
LineItemCard.args = {
  ...DefaultArgs,
  title: (
    <StyledTitle>
      <Typography>TITLE</Typography>
      <PlainButton small>Button</PlainButton>
    </StyledTitle>
  ),
  children: <div>This is a piece of text that explains something.</div>,
};

export const OneButtonCard = Template.bind({});
OneButtonCard.args = {
  ...DefaultArgs,
  title: (
    <StyledTitle>
      <Typography>TITLE</Typography>
      <PlainButton small>Button</PlainButton>
    </StyledTitle>
  ),
};

const ArrowsIcon = () => {
  return (
    <div
      style={{
        color: "var(--nds-narmi-purple)",
        height: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ArrowRight /> <ArrowLeft style={{ marginTop: "-3px" }} />
    </div>
  );
};

export const MultipleButtons = Template.bind({});
MultipleButtons.args = {
  ...DefaultArgs,
  title: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        style={{ fontWeight: "600", color: "var(--nds-narmi-purple)" }}
      >
        TITLE
      </Typography>
      <ArrowsIcon />
    </div>
  ),
  children: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <PlainButton small>Button 1 </PlainButton>
      <PlainButton small>Button 2 </PlainButton>
      <PlainButton small>Button 3 </PlainButton>
    </div>
  ),
};

export const HoverCard = Template.bind({});
HoverCard.args = {
  title: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>TITLE</Typography>
      <Button
        style={{ color: "var(--nds-secondary-color)", padding: "0px" }}
        transparent={true}
        secondary={true}
      >
        Button
      </Button>
    </div>
  ),
  style: { border: "1px solid var(--nds-primary-color)" },
};
