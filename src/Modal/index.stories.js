import React, { useState } from "react";
import Modal from "./";
import Button from "../Button";
import PlainButton from "../PlainButton";
import RadioButtons from "../RadioButtons";

const Template = (args) => <Modal {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  header: "Modal Header",
  children: <p>Modal content</p>,
};

export const BasicExample = () => {
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
        handleClose={() => {
          setOpen(false);
        }}
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
      <Button
        disabled={deleteTransaction === false}
        onClick={() => {
          setOpen(false);
        }}
      >
        Yes, Delete
      </Button>
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
        handleClose={() => {
          setOpen(false);
        }}
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

export const ScrollableModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nds-typography">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Scrollable Modal
      </Button>
      <div style={{ width: "300px" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Modal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        header={"Title"}
      >
        <div style={{ width: "500px" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default {
  title: "Components/Modal (deprecated)",
  component: Modal,
};
