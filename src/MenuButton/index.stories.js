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
  renderTrigger: (isOpen) => (
    <span className="button--reset fontColor--azul fontWeight--semibold">
      More options...{" "}
      <span
        className={`padding--right narmi-icon-corner-${isOpen ? "right-up" : "left-down"}`}
      />
    </span>
  ),
};
CustomTrigger.parameters = {
  docs: {
    description: {
      story:
        "You may use the `renderTrigger` render prop as an alternative to passing in a `triggerIcon`. In this example, we use the `isOpen` argument to conditionally set an icon in the render function.",
    },
  },
};

export const AutomaticPositioning = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      outline: "1px dotted hotpink",
    }}
  >
    <MenuButton label="Menu button on right side of viewport">
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
  </div>
);
AutomaticPositioning.parameters = {
  docs: {
    description: {
      story:
        "We often render a MenuButton on the right hand of the viewport. The popover menu will reposition itself so it it always visible.",
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

export const WithEndIcons = () => (
  <MenuButton label="Menu button on right side of viewport">
    <MenuButton.Item
      key="edit"
      endIcon="edit-2"
      label="Edit"
      onSelect={() => {
        alert("edit handler");
      }}
    />
    <MenuButton.Item
      key="screenshot"
      endIcon="camera"
      label="Screenshot"
      onSelect={() => {
        alert("screenshot handler");
      }}
    />
    <MenuButton.Item
      key="deposit"
      endIcon="bank"
      label="Deposit"
      onSelect={() => {
        alert("deposit handler");
      }}
    />
  </MenuButton>
);

export default {
  title: "Components/MenuButton",
  component: MenuButton,
  argTypes: {
    triggerIcon: { options: ["", ...VALID_ICON_NAMES] },
  },
};
