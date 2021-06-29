import React from "react";
import Card from "components/Card";
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
  title: "TITLE",
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
      <span>TITLE</span>
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
      <span>TITLE</span>
      <PlainButton small>Button</PlainButton>
    </StyledTitle>
  ),
};

const ArrowsIcon = () => {
  return (
    <div
      style={{
        color: "var(--nds-primary-color)",
        height: "20px",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={() => alert("Clicked icon!")}
    >
      <ArrowRight viewBox="0 0 16 20" /> <ArrowLeft viewBox="0 0 24 20" style={{ marginTop: "-3px", }} />
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
      <span style={{ fontWeight: "600", color: "var(--nds-primary-color)" }}>
        TITLE
      </span>
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
