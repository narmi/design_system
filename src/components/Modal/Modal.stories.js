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
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
        <Button onClick={openModal}>Open modal</Button>
      </div>
      <ModalComponent {...props} />
    </>
  )
}

const ControlledModalWithCallbacks = (props) => {
  const {openModal, closeModal, ModalComponent} = useModal({defaultOpen: true})
  const onSuccess = () => {
    alert("Modal success callback!")
    closeModal()
  }
  const onCancel = () => {
    alert("Modal cancel callback!")
    closeModal()
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
        <Button onClick={openModal}>Open modal</Button>
      </div>
      <ModalComponent onSuccess={onSuccess} onCancel={onCancel} {...props} />
    </>
  )
}

const Template = (args) => <ControlledModal {...args} />;
const TemplateWithCallbacks = args => <ControlledModalWithCallbacks {...args} />;

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
export const WithTitleAdornment = Template.bind({});
WithTitleAdornment.args = {
  ...Small.args,
  title: (
    <span style={{ display: "flex", alignItems: "center" }}>
      Title <Info size={14} style={{ marginLeft: "6px", marginTop: "1px" }} />
    </span>
  ),
};
export const WithTitleUnderline = Template.bind({});
WithTitleUnderline.args = {
  ...Small.args,
  titleUnderline: true,
};

export const ActionCallbacks = TemplateWithCallbacks.bind({});
ActionCallbacks.args = {
  ...Small.args,
  successLabel: "Submit",
  cancelLabel: "Cancel",
};
