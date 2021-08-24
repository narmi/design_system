import React, { useState } from "react";
import { Modal, Button, PlainButton, RadioButtons, TextInput } from "design_system";
import { NdsStyles } from "./decorators/decorators";

export default {
  title: "Components/Modal",
  decorators: [NdsStyles],
};

export const AccountModal = () => {
  const [open, setOpen] = useState(true);
  const [deleteTransaction, setDeleteTransaction] = useState(false);
  const actions = (
    <>
      <PlainButton
        onClick={() => {
          setOpen(false);
        }}
        style={{ paddingRight: "16px", color: "rgb(var(--nds-primary-color))" }}
        type="plain"
      >
        Cancel
      </PlainButton>
      <Button disabled={deleteTransaction === false}>Yes, Delete</Button>
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
    </div>
  );
};

export const TransactionModal = () => {
    const [open, setOpen] = useState(true);
    const actions = (
      <>
        <PlainButton
          onClick={() => {
            setOpen(false);
          }}
          style={{ paddingRight: "16px", color: "rgb(var(--nds-primary-color))" }}
          type="plain"
        >
          Cancel
        </PlainButton>
        <Button >Yes, Delete</Button>
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
          header={"Stop Payment on a Check"}
        >
          <div style={{ width: "500px" }}>
                <TextInput style={{marginTop:"20px", marginBottom: "20px"}} label={"Check Number"}></TextInput>
                <TextInput style={{ marginBottom: "20px"}} label={"Amount"}></TextInput>
          </div>
        </Modal>
      </div>
    );
  };

  export const DeactivateUser = () => {
    const [open, setOpen] = useState(true);
    const actions = (
      <>
        <PlainButton
          onClick={() => {
            setOpen(false);
          }}
          style={{ paddingRight: "16px", color: "rgb(var(--nds-primary-color))" }}
          type="plain"
        >
          Cancel
        </PlainButton>
        <Button >Yes, Delete</Button>
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
          header={"Deactivate User"}
        >
          <div style={{ width: "500px" }}>
              <p>
                  Are you sure you want to deactivate this user? They will no longer be able to access their account.
              </p>
          </div>
        </Modal>
      </div>
    );
  };
