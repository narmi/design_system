import React from "react";
import Row from "../Row";
import { NavigationItem } from "./";

const Template = (args) => (
  <div style={{ maxWidth: "600px" }}>
    <Row gapSize="l">
      <Row.Item>
        <NavigationItem {...args} isSelected={false} />
      </Row.Item>
      <Row.Item>
        <NavigationItem {...args} isSelected />
      </Row.Item>
    </Row>
  </div>
);

/**
 * A single navigation control. It always renders as a button, and the click
 * behavior is passed in explicitly via `onClick`. Each story shows the default
 * and selected states side by side.
 *
 * Content is provided via the `label` (and optional `detail`) slots rather than
 * `children`, so the component owns the wrapper spans and the button only ever
 * contains phrasing (inline) content.
 *
 * `NavigationItem` is valid anywhere — it renders no `li`, so it can sit
 * directly in a `nav` or be composed inside other components.
 */
export const Overview = Template.bind({});
Overview.args = {
  label: "Dashboard",
};

/**
 * A secondary line of text is provided via the `detail` slot. Both `label` and
 * `detail` are rendered as spans the component owns, so the button stays valid
 * even with two lines of content.
 */
export const WithDetail = Template.bind({});
WithDetail.args = {
  label: "Admin",
  detail: "2 users",
};

/**
 * `startContent` renders decorative content (e.g. an icon) before the control,
 * as a grid sibling — it is not part of the button's accessible label.
 */
export const WithStartContent = Template.bind({});
WithStartContent.args = {
  label: "Admin",
  startContent: <span className="narmi-icon-profile" aria-hidden="true" />,
};

/**
 * `endContent` renders as a grid sibling of the control, not as a child of it —
 * so a secondary action (e.g. a "more" affordance) never creates invalid nested
 * interactive elements.
 */
export const WithEndContent = Template.bind({});
WithEndContent.args = {
  label: "Admin",
  detail: "2 users",
  endContent: <span className="narmi-icon-lock" aria-hidden="true" />,
};

export default {
  title: "Components/NavigationItem",
  component: NavigationItem,
  argTypes: {
    label: { control: "text" },
    detail: { control: "text" },
    isSelected: { control: false },
    onClick: { action: "clicked", control: false },
    startContent: { control: false },
    endContent: { control: false },
    testId: { control: "text" },
  },
};
