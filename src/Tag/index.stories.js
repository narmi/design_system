import React, { useState } from "react";
import Row from "../Row";
import Tag from "./";

const Template = (args) => <Tag {...args} />;
const InteractiveTemplate = (args) => {
  const [isTagVisible, setTagVisible] = useState(true);
  return (
    <div>
      {isTagVisible ? (
        <Tag
          label={"Label"}
          kind={"dismissible"}
          onDismiss={() => {
            setTagVisible(false);
          }}
          {...args}
        />
      ) : (
        <button
          onClick={() => {
            setTagVisible(true);
          }}
        >
          Make tag come back
        </button>
      )}
    </div>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  kind: "subdued",
  label: "Label",
};

export const UsingWithState = InteractiveTemplate.bind({});

export const TagWithText = () => (
  <Row alignItems="center" gapSize="s">
    <Row.Item shrink>
      <p>Transfer from Wells Fargo-9876</p>
    </Row.Item>
    <Row.Item shrink>
      <Tag label="Pending" kind="outline" />
    </Row.Item>
  </Row>
);
TagWithText.parameters = {
  docs: {
    description: {
      story: "The `Tag` is designed to match the height of default body text",
    },
  },
};

export default {
  title: "Components/Tag",
  component: Tag,
};
