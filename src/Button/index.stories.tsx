import React from "react";
import Button, { BUTTON_KINDS } from "./";
import { VALID_ICON_NAMES } from "../icons/iconNames";
import Row from "../Row";
import Select from "../Select";
import type { IconName } from "../types/Icon.types";

const Template = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Submit",
};

export const PlainButton = () => (
  <div style={{ maxWidth: "640px" }}>
    <Select id="overdraft" label="Use overdraft protection?">
      <Select.Item value="Yes">Yes</Select.Item>
      <Select.Item value="No">No</Select.Item>
    </Select>
    <Button
      label="Learn more about overdraft protection"
      kind="plain"
      onClick={() => {
        alert("button click");
      }}
    />
  </div>
);
PlainButton.parameters = {
  docs: {
    description: {
      story:
        'A Button of `kind="plain"` is a button styled to look like a link.',
    },
  },
};

export const AiButton = () => (
  <Button kind="ai" label="Ask Anything" startIcon="sparkle" />
);
AiButton.parameters = {
  docs: {
    description: {
      story:
        'A Button of `kind="ai"` is used for AI-related actions. It renders with a white background, amethyst text, and an animated rotating gradient border.',
    },
  },
};

export const ConfirmAndCancel = () => (
  <Row alignItems="center" justifyContent="end">
    <Row.Item shrink>
      <Button kind="negative" label="Cancel" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="primary" label="Confirm" />
    </Row.Item>
  </Row>
);
ConfirmAndCancel.parameters = {
  docs: {
    description: {
      story:
        "When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right.",
    },
  },
};

export const ButtonKinds = () => (
  <>
    {BUTTON_KINDS.map((kind) => (
      <div className="margin--bottom--m" key={kind}>
        <Button kind={kind} label={kind} />
      </div>
    ))}
  </>
);
ButtonKinds.parameters = {
  docs: {
    description: {
      story: [
        "`Button` supports the following kinds:",
        "",
        "- `primary`: filled with the theme color. The main action of a view; use one per view.",
        "- `secondary`: outlined in the theme color. An alternative action shown alongside a `primary` button.",
        "- `tertiary`: neutral outline. A low emphasis action that should not carry theme color.",
        "- `tonal`: tinted theme fill. Less emphasis than `primary`, more than `tertiary`.",
        "- `negative`: styled as a link. The negating half of a confirm/cancel pair.",
        "- `plain`: styled as a link. For inline actions within content.",
        "- `ai`: for AI related actions. Renders an amethyst label with an animated gradient border.",
      ].join("\n"),
    },
  },
};

export const ButtonSizes = () => (
  <>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="secondary" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="tonal" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="plain" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map((size) => (
          <Row.Item key={size}>
            <Button kind="ai" label={`${size} Button`} size={size} />
          </Row.Item>
        ))}
      </Row>
    </div>
  </>
);

export const FullWidthButton = () => (
  <div style={{ maxWidth: "400px" }}>
    <div className="margin--bottom--m">
      <Button endIcon="arrow-right" label="Continue" isFullWidth />
    </div>
    <div className="margin--bottom--m">
      <Button
        kind="tonal"
        startIcon="camera"
        label="Take a picture"
        isFullWidth
      />
    </div>
  </div>
);
FullWidthButton.parameters = {
  docs: {
    description: {
      story:
        "When `isFullWidth` is `true`, the button expands to fill the width of its container. Useful for stacked actions in narrow layouts such as mobile views or sidebars.",
    },
  },
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    // Storybook can only infer a select for `kind` while docgen reports the
    // union behind it. When `ButtonKind` was a standalone type alias, docgen
    // reported the opaque alias name instead and the control degraded to a
    // free text input (NDS-3274). Listing the options explicitly keeps the
    // control correct however the type is expressed.
    kind: { options: BUTTON_KINDS, control: { type: "select" } },
    startIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
    endIcon: { options: ["", ...(VALID_ICON_NAMES as IconName)] },
  },
};
