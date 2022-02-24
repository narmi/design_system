import React, { useState } from "react";
import Tag from "./";
import Button from "../Button";
import TextInput from "../TextInput";

const Template = (args) => <Tag {...args} />;
const InteractiveTemplate = (args) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  return (
    <div
      onClick={() => {
        setIsDialogOpen(!isDialogOpen);
      }}
    >
      {isDialogOpen ? (
        <Tag
          label={"My cool tag"}
          kind={"dismissible"}
          onDismiss={() => {
            setIsDialogOpen(false);
          }}
        ></Tag>
      ) : (
        <button
          onClick={() => {
            setIsDialogOpen(true);
          }}
        >
          make tag come back
        </button>
      )}
    </div>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  kind: "subdued",
  onDismiss: () => {
    console.log('click')
  },
  label: "My cool tag",
};
Overview.argTypes = {
  content: { control: false },
};

export const UsingWithState = InteractiveTemplate.bind({});
UsingWithState.args = {
  title: "Dialog controlled by external state",
  children: <div>Dialog content</div>,
};

const OutlineTag = (args) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  return (
        <Tag
          label={"My cool tag"}
          kind={"outline"}
          onDismiss={() => {
           
          }}
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
