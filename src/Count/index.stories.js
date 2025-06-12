/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Row from "../Row";
import Count, { VALID_KINDS } from "./";

const Template = (args) => <Count {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  value: 12,
};

export const Kinds = () => (
  <Row alignItems="center" gapSize="xs">
    {VALID_KINDS.map((k, i) => (
      <React.Fragment key={`${k}-${i}`}>
        <Row.Item key={`${k}-${i}`} shrink>
          <Count kind={k} value={i + 1} />
        </Row.Item>
        <Row.Item shrink>
          <div
            style={{ textTransform: "capitalize" }}
            className="padding--right--xl"
          >
            {k}
          </div>
        </Row.Item>
      </>
    ))}
  </Row>
);

export default {
  title: "Components/Count",
  component: Count,
};
