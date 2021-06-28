import React from "react";
import styled from "styled-components";

import Typography from "components/Typography";

export default {
  title: "About/Colors",
  component: Square,
  decorators: [],
};

const Square = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  background-color: ${props => props.color ? `var(${props.color})` : "var(--nds-narmi-purple)"};
  border-radius: 20px;
  margin-right: 20px;
`;

const Squares = (props) => {
  const byCategory = props.colors.reduce((acc, el) => {
    acc[el["category"]] = acc[el["category"]] || []
    acc[el["category"]].push(el)
    return acc
  }, {})

  return Object.entries(byCategory).map(([cat, colors]) => (
    <div style={{display: "flex", flexFlow: "row wrap", width: "100%", marginBottom: "20px"}}>
      <Typography h1>{cat}</Typography>
      <div style={{display: "flex", width: "100%"}}>
        {colors.map(c => <div style={{display: "flex", flexFlow: "column wrap", width: "140px"}}>
          <Square color={c.css} title={c.title} style={{marginBottom: "8px"}} />
          <Typography>{c.title}</Typography>
        </div>)}
      </div>
    </div>
  ))
}

const Template = (args) => <Squares {...args} />;
const DefaultArgs = {
  colors: [
    {css: "--nds-primary-color", title: "Primary Color", category: "Brand"},
    {css: "--nds-secondary-color", title: "Secondary Color", category: "Brand"},
    {css: "--nds-tertiary-color", title: "Tertiary Color", category: "Brand"},
    {css: "--nds-primary-color-light", title: "Primary Color - Subdued 20%", category: "Subdued"},
    {css: "--nds-primary-color-lighter", title: "Primary Color - Subdued 10%", category: "Subdued"},
    {css: "--nds-primary-color-lightest", title: "Primary Color - Subdued 5%", category: "Subdued"},
    {css: "--nds-messaging-green", title: "Messaging - Green", category: "Messaging"},
    {css: "--nds-messaging-green-light", title: "Messaging - Light Green", category: "Messaging"},
    {css: "--nds-messaging-yellow", title: "Messaging - Yellow", category: "Messaging"},
    {css: "--nds-messaging-yellow-light", title: "Messaging - Light Yellow", category: "Messaging"},
    {css: "--nds-messaging-red", title: "Messaging - Red", category: "Messaging"},
    {css: "--nds-messaging-red-light", title: "Messaging - Light Red", category: "Messaging"},
    {css: "--nds-grey-text", title: "Text - Grey", category: "Elements"},
    {css: "--nds-grey-placeholder", title: "Text - Light Grey", category: "Elements"},
    {css: "--nds-grey-disabled", title: "Text - Lightest Grey", category: "Elements"},
  ],
};

export const Colors = Template.bind({})
Colors.args = {
  ...DefaultArgs,
}


