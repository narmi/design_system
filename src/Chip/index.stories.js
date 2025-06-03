/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Chip from "./";

const Template = (args) => <Chip {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

export const Composition = () => (
  <Chip label="Label">
    <Chip.Count count="5" />
    <Chip.Button icon="close" label="Close" onClick={() => {}} />
  </Chip>
);

export const WithProps = () => (
  <Chip
    label="label"
    count="5"
    onDismiss={() => {}}
    kind="info"
    startContent={null}
    endContent={null}
  />
);

export default {
  title: "Components/Chip",
  component: Chip,
};
