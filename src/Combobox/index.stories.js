/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Combobox from "./";
import ComboboxItem from "./ComboboxItem";
import ComboboxHeading from "./ComboboxHeading";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const Template = (args) => <Combobox {...args} />;

const children = [
  <Combobox.Heading text="Lol, states!" />,
  ...states.map((state) => (
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
