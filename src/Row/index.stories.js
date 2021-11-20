import React from "react";
import Row from "./";

const Template = (args) => <Row {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: [
    <Row.Item shrink>
      <img alt="demo image" src="https://via.placeholder.com/40" />
    </Row.Item>,
    <Row.Item>
      The image row item is set to <code>shrink</code> to content width. This
      item grows to fill remaining space. Adjust the `gapSize` prop on `Row` to
      adjust the gutters between items.
    </Row.Item>,
  ],
};

// TODO: story of setting gap size
// TODO: story of custom gap sizes using `none`

// TODO: find out how storybook primary/sub components docs work
// TODO: find out how to use the storybook CSS boxes addon
export default {
  title: "Components/Row",
  component: Row,
};
