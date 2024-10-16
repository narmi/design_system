/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import AutocompleteModal from "./";
import Button from "../Button";

// FIXME: code and story for `footerContent`
// FIXME: code and story for render prop trigger

export const Overview = () => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  const trigger = <span>{selectedValue}</span>;
  return (
    <div style={{ margin: "8rem" }}>
      <AutocompleteModal
        inputLabel="Assignee"
        trigger={trigger}
        onChange={(val) => setSelectedValue(val)}
      >
        <AutocompleteModal.Item value="Unassigned" />
        <AutocompleteModal.Item value="Chris" />
        <AutocompleteModal.Item value="Nikhil" />
        <AutocompleteModal.Item value="James" />
        <AutocompleteModal.Item value="Phil" />
        <AutocompleteModal.Item value="Batman" />
        <AutocompleteModal.Item value="Reshav" />
        <AutocompleteModal.Item value="Ethan" />
        <AutocompleteModal.Item value="Xihao" />
        <AutocompleteModal.Item value="Alana" />
        <AutocompleteModal.Item value="Yaro" />
        <AutocompleteModal.Item value="Jeff" />
        <AutocompleteModal.Item value="Johnathan" />
      </AutocompleteModal>
    </div>
  );
};

export const WithAction = () => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  const trigger = <span>{selectedValue}</span>;
  return (
    <div style={{ margin: "8rem" }}>
      <AutocompleteModal
        inputLabel="Asignee"
        trigger={trigger}
        onChange={(val) => setSelectedValue(val)}
        footerContent={
          <Button kind="plain" label="Add a new employee" startIcon="plus" />
        }
      >
        <AutocompleteModal.Item value="Unassigned" />
        <AutocompleteModal.Item value="Chris" />
        <AutocompleteModal.Item value="Nikhil" />
        <AutocompleteModal.Item value="James" />
        <AutocompleteModal.Item value="Phil" />
        <AutocompleteModal.Item value="Batman" />
        <AutocompleteModal.Item value="Reshav" />
        <AutocompleteModal.Item value="Ethan" />
        <AutocompleteModal.Item value="Xihao" />
        <AutocompleteModal.Item value="Alana" />
        <AutocompleteModal.Item value="Yaro" />
        <AutocompleteModal.Item value="Jeff" />
        <AutocompleteModal.Item value="Johnathan" />
      </AutocompleteModal>
    </div>
  );
};

export const TriggerRenderProp = () => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  const trigger = (isActive) => (
    <div
      className="padding--all--xxs rounded--all"
      style={{ background: isActive ? "yellow" : "transparent" }}
    >
      {selectedValue}
    </div>
  );
  return (
    <div style={{ margin: "8rem" }}>
      <AutocompleteModal
        inputLabel="Asignee"
        trigger={trigger}
        onChange={(val) => setSelectedValue(val)}
        footerContent={
          <Button kind="plain" label="Add a new employee" startIcon="plus" />
        }
      >
        <AutocompleteModal.Item value="Unassigned" />
        <AutocompleteModal.Item value="Chris" />
        <AutocompleteModal.Item value="Nikhil" />
        <AutocompleteModal.Item value="James" />
        <AutocompleteModal.Item value="Phil" />
        <AutocompleteModal.Item value="Batman" />
        <AutocompleteModal.Item value="Reshav" />
        <AutocompleteModal.Item value="Ethan" />
        <AutocompleteModal.Item value="Xihao" />
        <AutocompleteModal.Item value="Alana" />
        <AutocompleteModal.Item value="Yaro" />
        <AutocompleteModal.Item value="Jeff" />
        <AutocompleteModal.Item value="Johnathan" />
      </AutocompleteModal>
    </div>
  );
};
TriggerRenderProp.parameters = {
  docs: {
    description: {
      story:
        "The `trigger` prop takes either a ReactNode, or a render function. The render function makes the active state of the popover available to the trigger for conditional styling.",
    },
  },
};

export default {
  title: "Components/AutocompleteModal",
  component: AutocompleteModal,
};
