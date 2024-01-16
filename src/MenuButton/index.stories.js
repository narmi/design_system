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

export const CustomTrigger = Template.bind({});
CustomTrigger.args = {
  ...Overview.args,
  showDropdownIndicator: true,
  trigger: (
    <span className="button--reset fontColor--azul fontWeight--semibold">
      More options...
    </span>
  ),
};
CustomTrigger.parameters = {
  docs: {
    description: {
      story:
        "You may use the `trigger` prop as an alternative to passing in a `triggerIcon`. In this example, we pass in a custom `span` to act as the trigger. The `showDropdownIndicator` prop is enabled, causing `MenuButton` to render the chevron icons indicating menu open state.",
    },
  },
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
      <Dialog
        isOpen={isOpen}
        title="Dialog with a MenuButton"
        onUserDismiss={() => {
          setIsOpen(false);
        }}
      >
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
