import React from "react";
import Modal, {useModal} from "components/Modal";
import Button from "components/Button";
import { Centered } from "../../decorators";
import { Info } from "react-feather";

export default {
  title: "Components/Modal",
  component: Modal,
  decorators: [],
};

const ControlledModal = (props) => {
  const {openModal, closeModal, ModalComponent} = useModal({defaultOpen: true})
  const onSuccess = () => {
    props.onSuccess && props.onSuccess()
    closeModal()
  }
  const onCancel = () => {
    props.onCancel && props.onCancel()
    closeModal()
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
        <Button onClick={openModal}>Open modal</Button>
      </div>
      <ModalComponent {...props} onSuccess={onSuccess} onCancel={onCancel} />
    </>
  )
}

const Template = (args) => <ControlledModal {...args} />;

export const Small = Template.bind({});
Small.args = {
  large: false,
  title: "Title text",
  children: [
    <div>
      Some text. Some text. Some text. Some text. Some text. Some text. Some
      text. Some text. Some text. Some text. Some text. Some text.
    </div>
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
      Some text. Some text. Some text. Some text. Some text. Some text.
      Some text. Some text. Some text. Some text. Some text.
    </div>
  ],
};
export const WithTitleUnderline = Template.bind({});
WithTitleUnderline.args = {
  ...Small.args,
  titleUnderline: true,
};
export const WithTitleAdornment = Template.bind({});
WithTitleAdornment.args = {
  ...Small.args,
  title: (
    <span style={{ display: "flex", alignItems: "center" }}>
      Title <Info size={14} onClick={() => alert("Clicked info!")} style={{ marginLeft: "6px", marginTop: "1px", cursor: "pointer" }} />
    </span>
  ),
};

export const ActionCallbacks = Template.bind({});
ActionCallbacks.args = {
  ...Small.args,
  successLabel: "Submit",
  cancelLabel: "Cancel",
  onSuccess: () => alert("Modal success callback!"),
  onCancel: () => alert("Modal cancel callback!"),
};
