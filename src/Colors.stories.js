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
`;

const Squares = (props) => {
  const byCategory = props.colors.reduce((acc, el) => {
    acc[el["category"]] = acc[el["category"]] || []
    acc[el["category"]].push(el)
    return acc
  }, {})

  return Object.entries(byCategory).map(([cat, colors]) => (
    <div style={{display: "flex", flexFlow: "row wrap", width: "100%", marginBottom: "24px"}}>
      <Typography h1 style={{marginBottom: "8px"}}>{cat}</Typography>
      <div style={{display: "flex", width: "100%"}}>
        {colors.map(c => <div style={{display: "flex", flexFlow: "column wrap",
          alignItems: "center", width: "120px", marginRight: "20px"}}>
          <Square color={c.css} title={c.title} style={{marginBottom: "8px"}} />
          <Typography style={{textAlign: "center"}}>{c.title}</Typography>
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
    {css: "--nds-primary-color-light", title: "Subdued 20%", category: "Subdued"},
    {css: "--nds-primary-color-lighter", title: "Subdued 10%", category: "Subdued"},
    {css: "--nds-primary-color-lightest", title: "Subdued 5%", category: "Subdued"},
    {css: "--nds-messaging-green", title: "Green", category: "Messaging"},
    {css: "--nds-messaging-green-light", title: "Light Green", category: "Messaging"},
    {css: "--nds-messaging-yellow", title: "Yellow", category: "Messaging"},
    {css: "--nds-messaging-yellow-light", title: "Light Yellow", category: "Messaging"},
    {css: "--nds-messaging-red", title: "Red", category: "Messaging"},
    {css: "--nds-messaging-red-light", title: "Light Red", category: "Messaging"},
    {css: "--nds-grey-text", title: "Grey", category: "Elements"},
    {css: "--nds-grey-placeholder", title: "Light Grey", category: "Elements"},
    {css: "--nds-grey-disabled", title: "Lightest Grey", category: "Elements"},
  ],
};

export const Colors = Template.bind({})
Colors.args = {
  ...DefaultArgs,
}


