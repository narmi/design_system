import React, { useState } from "react";
import Tag from "./";

const Template = (args) => <Tag {...args} />;
const InteractiveTemplate = (args) => {
  const [isTagVisible, setTagVisible] = useState(true);
  return (
    <div
    >
      {isTagVisible ? (
        <Tag
          label={"My cool tag"}
          kind={"dismissible"}
          onDismiss={() => {
            setTagVisible(false);
          }}
        ></Tag>
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
  label: "My cool tag",
};
Overview.argTypes = {
  content: { control: false },
};

export const UsingWithState = InteractiveTemplate.bind({});

const OutlineTag = () => {
  return (
        <Tag
          label={"My cool tag"}
          kind={"outline"}
        ></Tag>
  );
};

export const TagOutline = OutlineTag.bind({});

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
