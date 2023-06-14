import React from "react";
import IconButton, { VALID_ICON_NAMES } from "./";
import Row from "../Row";

const Template = (args) => <IconButton {...args} />;

export const PlainIconButton = Template.bind({});

PlainIconButton.args = {
  label: "Edit",
  kind: "plain",
  name: "info",
};

PlainIconButton.parameters = {
  docs: {
    description: {
      story:
        'An Icon Button of `kind="plain"` is a button styled to look like a plain icon.',
    },
  },
};

export const IconButtonSizes = () => (
  <Row alignItems="center">
    <Row.Item shrink>
      <IconButton kind="plain" label="X-Small Button" size="xs" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="plain" label="Small Button" size="s" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="plain" label="Medium Button" size="m" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="plain" label="Large Button" size="l" name="info" />
    </Row.Item>
  </Row>
);

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    name: { options: ["", ...VALID_ICON_NAMES] },
    size: { options: ["xs", "s", "m", "l"] },
  },
};
