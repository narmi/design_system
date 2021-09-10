import React, { useState } from "react";
import { Modal, Button, PlainButton, RadioButtons, Toast } from "design_system";
import { NdsStyles } from "./decorators/decorators";

export default {
  title: "Components/Modal",
  decorators: [NdsStyles],
};

export const SimpleModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nds-typography">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal 
        open={open}
        handleClose={()=>{setOpen(false)}}
        header={"Title"}
      >
        <div style={{ width: "500px" }}>
          <p>This is an example of body text that a user could pass</p>
        </div>
      </Modal>
    </div>
  );
};

export const AccountModal = () => {
  const [open, setOpen] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [deleteTransaction, setDeleteTransaction] = useState(false);
  const actions = (
    <>
      <PlainButton
        onClick={() => { setOpen(false); }}
        style={{ paddingRight: "16px", color: "rgb(var(--nds-primary-color))" }}
        type="plain"
      >
        Cancel
      </PlainButton>
      <Button
        disabled={deleteTransaction === false}
        onClick={() => { setOpen(false); setSubmit(true);}}
      >Yes, Delete</Button>
    </>
  );
  return (
    <div className="nds-typography">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        actions={actions}
        handleClose={()=>{setOpen(false)}}
        header={"Delete your upcoming transaction"}
      >
        <div style={{ width: "500px" }}>
          <div>
            <p>This is an example of body text that a user could pass</p>
            <RadioButtons
              onChange={(e) => {
                setDeleteTransaction(e.target.value === "false" ? false : true);
              }}
              initialValue={false}
              name="setting_value"
              options={{ True: true, False: false }}
            />
          </div>
        </div>
      </Modal>
      <Toast open={submit} style={{left: "47%"}} message={"Toast"} type="success"/>
    </div>
  );
};
