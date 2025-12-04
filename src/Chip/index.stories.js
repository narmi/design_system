/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Row from "../Row";
import Chip, { VALID_KINDS } from "./";

const Template = (args) => <Chip {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  label: "Label",
  onDismiss: () => {},
  count: 5,
};

export const WithDismiss = () => (
  <>
    <p>
      When an <code>onDismiss</code> handler is passed, a close icon will render
      as a button at the end of the Chip
    </p>
    <Chip label="Dismissable" onDismiss={() => {}} />
  </>
);

export const AsButton = () => (
  <>
    <p>
      When an <code>onClick</code> handler is passed, the entire chip becomes
      clickable.
    </p>
    <Chip label="Clickable Chip" onClick={() => {}} />
  </>
);

export const WithBorder = () => (
  <>
    <p>
      When the <code>hasBorder</code> prop is set to true, a border will be
      rendered based on the `kind` of the Chip.
    </p>
    <Chip kind="warn" label="Bordered" hasBorder={true} />
  </>
);

export const CustomIcon = () => (
  <>
    <p>
      Chip accepts both a <code>startIcon</code> and <code>endIcon</code> prop.
    </p>
    <Chip
      kind="info"
      label="Trigger Dropdown"
      onClick={() => {}}
      endIcon="chevron-down"
    />
  </>
);

const storyIcons = ["anchor", "wifi", "sun", "phone-off", "moon", "music"];
export const Kinds = () => (
  <ul className="list--reset">
    {VALID_KINDS.map((k, i) => (
      <li key={`${k}-${i}`} className="margin--bottom">
        <Row alignItems="center" gapSize="xs">
          <Row.Item shrink>
            <Chip kind={k} label="Label" />
          </Row.Item>
          <Row.Item shrink>
            <Chip kind={k} label="Label" startIcon={storyIcons[i]} />
          </Row.Item>
          <Row.Item shrink>
            <Chip kind={k} label="Label" count="5" />
          </Row.Item>
          <Row.Item shrink>
            <Chip kind={k} {...Overview.args} />
          </Row.Item>
          <Row.Item shrink>
            <div
              style={{ textTransform: "capitalize" }}
              className="padding--right--xl"
            >
              {k}
            </div>
          </Row.Item>
        </Row>
      </li>
    ))}
  </ul>
);

export default {
  title: "Components/Chip",
  component: Chip,
};
