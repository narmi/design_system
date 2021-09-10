import React, { useState } from "react";
import { Modal, PlainButton, Dropdown, TextInput, Button } from "design_system";
import { NdsStyles } from "./decorators/decorators";

export default {
  title: "Components/Dropdown",
  decorators: [NdsStyles],
};

export const BasicDropdown = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Dropdown triggerLabel={"Accounts"} closeDropDown={modalOpen}>
        <div>Member 1</div>
        <div>Member 2</div>
        <PlainButton
          onClick={() => {
            setModalOpen(true);
          }}
          style={{ color: "rgb(var(--nds-primary-color))" }}
        >
          Link a new payee!
        </PlainButton>
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
  const actions = (
      <div className="nds-typography">
        <PlainButton
          onClick={() => { setModalOpen(false); }}
          style={{ paddingRight: "16px", color: "rgb(var(--nds-primary-color))" }}
          type="plain"
        >
          Cancel
        </PlainButton>
        <Button
          onClick={() => { setModalOpen(false); }}
        >Add member</Button>
      </div>
    );
  return (
    <div>
      <Dropdown defaultValue={"Rowena Wick"} triggerLabel={"Members"} closeDropDown={modalOpen}>
        {["Rowena Wick", "Daya Zakim"].map((option, i) => (
          <div key={i}>{option}</div>
        ))} 
        <PlainButton
          onClick={() => {
            setModalOpen(true);
          }}
          style={{ color: "rgb(var(--nds-primary-color))" }}
        >
          Add a new member
        </PlainButton>
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
          <TextInput label={"First Name"} style={{paddingTop: "20px", paddingBottom: "20px"}}/>
          <TextInput label={"Last Name"} style={{paddingBottom: "20px"}}/>
          <TextInput label={"Account Number"} style={{paddingBottom: "20px"}}/>
          <TextInput label={"Relationship (i.e. sister)"} style={{paddingBottom: "20px"}}/>
        </div>
      </Modal>
    </div>
  );
};
