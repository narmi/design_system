/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Combobox from "./";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";
import { options_states } from "./util";

const Template = (args) => <Combobox {...args} />;

const children = [
  <Combobox.Heading text="Lol, states!" />,
  ...options_states.map((state) => (
    <Combobox.Item value={state}>{state}</Combobox.Item>
  )),
];

export const Overview = Template.bind({});
Overview.args = {
  label: "Select your state",
  children,
};

export default {
  title: "Components/Combobox",
  component: Combobox,
  subcomponents: { ComboboxItem, ComboboxHeading },
  argTypes: {
    children: { control: false },
    onChange: { action: "Combobox change" },
  },
};
