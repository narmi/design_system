import React from "react";
import styled from "styled-components";
import Popover from "components/Popover";
import Typography from "components/Typography";

import { Centered } from "../../decorators";
import { deviceBreakpoints } from "../../globalStyles";
import { NavMenu } from "./storyHelpers";

export default {
  title: "Components/Popover",
  component: Popover,
  decorators: [Centered],
};

const Template = (args) => <Popover {...args} />;

export const OnClick = Template.bind({});
OnClick.args = {
  hoverable: false,
  label: "Accounts",
  shiftX: "-40%",
  style: { padding: "8px" },
  children: <NavMenu divided horizontal />,
};
export const OnHover = Template.bind({});
OnHover.args = {
  hoverable: true,
  label: "Accounts",
  shiftX: "-40%",
  style: { padding: "8px" },
  children: <NavMenu divided horizontal />,
};
