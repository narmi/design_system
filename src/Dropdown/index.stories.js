/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Dropdown from "./";
import Modal from "../Modal";
import TextInput from "../TextInput";
import Button from "../Button";

const Template = (args) => <Dropdown {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  triggerLabel: "Trigger Label",
  children: [<div>One</div>, <div>Two</div>, <div>Three</div>],
};

export const BasicExample = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Dropdown triggerLabel={"Accounts"} closeDropDown={modalOpen}>
        <div>Member 1</div>
        <div>Member 2</div>
        <Button
          type="plain"
          onClick={() => {
            setModalOpen(true);
          }}
          label="Link a new payee"
        />
      </Dropdown>
      <Modal
        open={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
      >
        <div style={{ width: "500px" }}>
          <h4>Title</h4>
          <p>This is an example of body text that a user could pass</p>
        </div>
      </Modal>
    </div>
  );
};

export const NewMemberDropDown = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(true);
  const actions = (
    <div className="nds-typography">
      <div className="padding--right--m">
        <Button
          onClick={() => {
            setModalOpen(false);
          }}
          type="plain"
          label="Cancel"
        />
      </div>
      <Button
        onClick={() => {
          setModalOpen(false);
        }}
        label="Add member"
      />
    </div>
  );
  return (
    <div>
      <Button
        onClick={() => {
          setError(!error);
        }}
        style={{ marginBottom: "20px" }}
      >
        {error ? "remove error" : "add error"}
      </Button>
      <Dropdown
        defaultValue={"Rowena Wick"}
        triggerLabel={"Members"}
        closeDropDown={modalOpen}
        error={error ? "Error message" : ""}
      >
        {["Rowena Wick", "Daya Zakim"].map((option, i) => (
          <div key={i}>{option}</div>
        ))}
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          type="plain"
          label="Add a new member"
        />
      </Dropdown>
      <Modal
        open={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
        header={"Add a new member"}
        actions={actions}
      >
        <div style={{ width: "500px" }} className="nds-typography">
          <TextInput
            label={"First Name"}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          />
          <TextInput label={"Last Name"} style={{ paddingBottom: "20px" }} />
          <TextInput
            label={"Account Number"}
            style={{ paddingBottom: "20px" }}
          />
          <TextInput
            label={"Relationship (i.e. sister)"}
            style={{ paddingBottom: "20px" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    children: { control: false },
    onChange: { action: "change" },
    onClose: { action: "close" },
  },
};
