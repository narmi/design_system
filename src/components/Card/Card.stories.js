import React from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "react-feather";

import Card from "components/Card";
import Button from "components/Button";
import List from "components/List";
import PlainButton from "components/PlainButton";
import Typography from "components/Typography";
import {Centered} from "../../decorators";


export default {
  title: "Components/Card",
  component: Card,
  decorators: [Centered],
};

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWithButton = () => (
  <StyledTitle>
    <span>Title</span>
    <PlainButton small>Button</PlainButton>
  </StyledTitle>
)

const TextContent = () => (
  <React.Fragment>
    <span>Text</span>
    <span>Text</span>
  </React.Fragment>
)

const Template = (args) => <Card {...args} />;
const DefaultArgs = {
  title: "Title",
};

export const WithTitleButton = Template.bind({});
WithTitleButton.args = {
  ...DefaultArgs,
  title: <TitleWithButton />,
};

export const WithBody = Template.bind({});
WithBody.args = {
  ...DefaultArgs,
  title: <TitleWithButton />,
  children: <div>This is a piece of text that explains something.</div>,
};

export const LineItemCard = Template.bind({});
LineItemCard.args = {
  ...DefaultArgs,
  title: <TitleWithButton />,
  children: <List
  divided
  hoverable={false}
  renderItem={(item) => <span style={{display: "flex", justifyContent: "space-between", padding: "8px 0px"}}>{item}</span>}
  items={[
    <TextContent />,
    <TextContent />,
  ]} />,
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
        color: "var(--nds-primary-color)",
      }}
    >
      <span>Title</span>
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
