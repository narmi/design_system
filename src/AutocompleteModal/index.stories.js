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
        <AutocompleteModal.Item value="Batman Robin" />
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

export const WithSearchValue = () => {
  return (
    <div style={{ margin: "8rem" }}>
      <AutocompleteModal
        inputLabel="Search"
        trigger={<Button label="Assign to" />}
        onChange={(val) => alert(`POST request with UUID ${val}`)}
      >
        <AutocompleteModal.Item
          value="dd0bb6a2-af23-4d5e-a2ae-8c57ecd6bc07"
          searchValue="Adam D."
        >
          Adam D.
        </AutocompleteModal.Item>
        <AutocompleteModal.Item
          value="ac6d94fc-fab2-4670-ae30-a8756955f563"
          searchValue="Adam U."
        >
          Adam U.
        </AutocompleteModal.Item>
        <AutocompleteModal.Item
          value="f24b720d-681d-40e9-bdfc-52a7e807aea5"
          searchValue="Ayesha"
        >
          Ayesha
        </AutocompleteModal.Item>
        <AutocompleteModal.Item
          value="d9f428ee-6287-4ac1-8e05-e7b5874a568d"
          searchValue="James"
        >
          James
        </AutocompleteModal.Item>
        <AutocompleteModal.Item
          value="aad8f0a4-2b2a-4540-8976-54c75e6b23d8"
          searchValue="Martin"
        >
          Martin
        </AutocompleteModal.Item>
      </AutocompleteModal>
    </div>
  );
};

export const WithAction = () => {
  const [selectedValue, setSelectedValue] = useState("Unassigned");
  const [items, setItems] = useState([
    "Unassigned",
    "Chris",
    "Nikhil",
    "James",
    "Phil",
    "Batman",
    "Reshav",
    "Ethan",
    "Xihao",
    "Alana",
    "Yaro",
    "Jeff",
    "Johnathan",
  ]);
  const trigger = <span>{selectedValue}</span>;

  const handleAdd = () => {
    const newItem = "Victor (NEW)";
    setItems((it) => [...it, newItem]);
  };

  return (
    <div style={{ margin: "8rem" }}>
      <AutocompleteModal
        inputLabel="Assignee"
        trigger={trigger}
        onChange={(val) => setSelectedValue(val)}
        footerContent={
          <Button
            kind="plain"
            label="Add a new employee"
            startIcon="plus"
            onClick={handleAdd}
          />
        }
      >
        {items.map((it, i) => (
          <AutocompleteModal.Item key={`${it}-${i}`} value={it} />
        ))}
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
        inputLabel="Assignee"
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
