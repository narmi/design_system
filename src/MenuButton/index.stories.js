import React, { useState } from "react";
import MenuButton, { VALID_ICON_NAMES } from "./";
import Dialog from "../Dialog";

const Template = (args) => <MenuButton {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  label: "Overview example",
  children: [
    <MenuButton.Item
      key="edit"
      startIcon="edit-2"
      label="Edit"
      onSelect={() => {
        alert("edit handler");
      }}
    />,
    <MenuButton.Item
      key="screenshot"
      startIcon="camera"
      label="Screenshot"
      onSelect={() => {
        alert("screenshot handler");
      }}
    />,
    <MenuButton.Item
      key="deposit"
      startIcon="bank"
      label="Deposit"
      onSelect={() => {
        alert("deposit handler");
      }}
    />,
  ],
};

export const InADialog = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <button
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        Open Dialog
      </button>
      <Dialog isOpen={isOpen} title="Dialog with a MenuButton">
        <p>Check out this menubutton</p>
        <MenuButton label="In a dialog menubutton">
          <MenuButton.Item
            key="edit"
            startIcon="edit-2"
            label="Edit"
            onSelect={() => {
              alert("edit handler");
            }}
          />
          <MenuButton.Item
            key="screenshot"
            startIcon="camera"
            label="Screenshot"
            onSelect={() => {
              alert("screenshot handler");
            }}
          />
          <MenuButton.Item
            key="deposit"
            startIcon="bank"
            label="Deposit"
            onSelect={() => {
              alert("deposit handler");
            }}
          />
        </MenuButton>
      </Dialog>
    </>
  );
};

export default {
  title: "Components/MenuButton",
  component: MenuButton,
  argTypes: {
    triggerIcon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
