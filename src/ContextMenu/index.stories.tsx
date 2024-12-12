import React from "react";
import ContextMenu from "./index";

const Template = (args) => <ContextMenu {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: (
    <h1
      style={{
        border: "1px dashed black",
      }}
    >
      Context Menu
    </h1>
  ),
  menuItems: [
    <ContextMenu.Item
      key="edit"
      startIcon="edit-2"
      label="Edit"
      id="random-edit-uuid"
      onSelect={(label, id) => {
        alert(`Label: ${label} - ID: ${id}`);
      }}
    />,
    <ContextMenu.Item
      key="screenshot"
      startIcon="camera"
      label="Screenshot"
      id="screenshot"
      onSelect={(label, id) => {
        alert(`Label: ${label} - ID: ${id}`);
      }}
    />,
    <ContextMenu.Item
      key="deposit"
      startIcon="bank"
      label="Deposit"
      id="deposit"
      onSelect={(label, id) => {
        alert(`Label: ${label} - ID: ${id}`);
      }}
    />,
  ],
};

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
};
