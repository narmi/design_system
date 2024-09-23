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

export const DefaultIconButtonSizes = () => (
  <Row alignItems="center">
    <Row.Item shrink>
      <IconButton kind="action" label="Default Action Button" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="plain" label="Default Plain Button" name="info" />
    </Row.Item>
  </Row>
);

export const ActionIconButtonSizes = () => (
  <Row alignItems="center">
    <Row.Item shrink>
      <IconButton
        kind="action"
        label="X-Small Button"
        textSize="xs"
        name="info"
      />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Small Button" textSize="s" name="info" />
    </Row.Item>
    <Row.Item shrink>
      <IconButton
        kind="action"
        label="Medium Button"
        textSize="m"
        name="info"
      />
    </Row.Item>
    <Row.Item shrink>
      <IconButton kind="action" label="Large Button" textSize="l" name="info" />
    </Row.Item>
  </Row>
);

export const PlainIconButtonSizes = () => (
  <>
    <Row alignItems="center">
      <Row.Item shrink>
        <IconButton
          kind="plain"
          label="X-Small Button"
          textSize="xs"
          name="info"
        />
      </Row.Item>
      <Row.Item shrink>
        <IconButton
          kind="plain"
          label="Small Button"
          textSize="s"
          name="info"
        />
      </Row.Item>
      <Row.Item shrink>
        <IconButton
          kind="plain"
          label="Medium Button"
          textSize="m"
          name="info"
        />
      </Row.Item>
      <Row.Item shrink>
        <IconButton
          kind="plain"
          label="Large Button"
          textSize="l"
          name="info"
        />
      </Row.Item>
    </Row>
  </>
);

export const IconButtonAsAnchor = () => (
  <>
    <IconButton
      as="a"
      kind="plain"
      label="Link button"
      textSize="xs"
      name="info"
      href="/"
    />
  </>
);

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    name: { options: ["", ...VALID_ICON_NAMES] },
    size: { options: ["xs", "s", "m", "l"] },
    kind: { options: ["plain", "action", "themed"] },
  },
};
