import React from "react";
import Modal, { useModal } from "components/Modal";
import Button from "components/Button";
import { Centered } from "../../decorators";
import { Info } from "react-feather";

export default {
  title: "Components/Modal",
  component: Modal,
  decorators: [],
};

const ControlledModal = (props) => {
  const { openModal, closeModal, ModalComponent } = useModal({
    defaultOpen: true,
  });
  const onSuccess = () => {
    props.onSuccess && props.onSuccess();
    closeModal();
  };
  const onCancel = () => {
    props.onCancel && props.onCancel();
    closeModal();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Button onClick={openModal}>Open modal</Button>
      </div>
      <ModalComponent {...props} onSuccess={onSuccess} onCancel={onCancel} />
    </>
  );
};

const Template = (args) => <ControlledModal {...args} />;

export const Small = Template.bind({});
Small.args = {
  large: false,
  title: "Title text",
  titleUnderline: true,
  children: [
    <div>
      Some text. Some text. Some text. Some text. Some text. Some text. Some
      text. Some text. Some text. Some text. Some text. Some text.
    </div>,
  ],
};
export const Large = Template.bind({});
Large.args = {
  ...Small.args,
  large: true,
  children: [
    <div>
      Some text. Some text. Some text. Some text. Some text. Some text. Some
      text. Some text. Some text. Some text. Some text. Some text. Some text.
      Some text. Some text. Some text. Some text. Some text. Some text. Some
      text. Some text. Some text. Some text. Some text.
    </div>,
  ],
};
export const OverflowingText = Template.bind({});
OverflowingText.args = {
  ...Small.args,
  large: true,
  children: [
    <div>
      {[...Array(10).keys()].map((k) => (
        <p>
          Some text. Some text. Some text. Some text. Some text. Some text. Some
          text. Some text. Some text. Some text. Some text. Some text. Some
          text. Some text. Some text. Some text. Some text. Some text. Some
          text. Some text. Some text. Some text. Some text. Some text.
        </p>
      ))}
    </div>,
  ],
  cancelLabel: "Cancel",
  successLabel: "Submit",
  onSuccess: () => alert("Modal success callback!"),
  onCancel: () => alert("Modal cancel callback!"),
};
export const WithTitleUnderline = Template.bind({});
WithTitleUnderline.args = {
  ...Small.args,
  large: true,
  titleUnderline: true,
  cancelLabel: "Cancel",
  successLabel: "Submit",
};

export const ActionCallbacks = Template.bind({});
ActionCallbacks.args = {
  ...Small.args,
  large: true,
  titleUnderline: true,
  cancelLabel: "Cancel",
  successLabel: "Submit",
  onSuccess: () => alert("Modal success callback!"),
  onCancel: () => alert("Modal cancel callback!"),
};

export const AdditionalActions = Template.bind({});
AdditionalActions.args = {
  ...Small.args,
  large: true,
  titleUnderline: true,
  leftActions: [
    { action: () => alert("Action callback!"), title: "Callback" },
    { action: () => alert("Action callback 2!"), title: "Callback 2" },
  ],
};

export const MixedActions = Template.bind({});
MixedActions.args = {
  ...Small.args,
  large: true,
  titleUnderline: true,
  successLabel: "Submit",
  onSuccess: () => alert("Modal success callback!"),
  onCancel: () => alert("Modal cancel callback!"),
  leftActions: [{ action: () => alert("Action callback!"), title: "Callback" }],
};
