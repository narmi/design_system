import React, { useState } from "react";
import { Modal, PlainButton, Dropdown } from "design_system";
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
        <div>Rowena Wick</div>
        <div>Daya Zakim</div>
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

export const PayeDropDown = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Dropdown triggerLabel={"Accounts"} closeDropDown={modalOpen}>
        {["test", "test2"].map((option) => (
          <div>{option}</div>
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
      >
        <div style={{ width: "500px" }}>
          <h4>Title</h4>
          <p>This is an example of body text that a user could pass</p>
        </div>
      </Modal>
    </div>
  );
};
