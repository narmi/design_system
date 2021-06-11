import React from "react";
import Modal from "components/Modal";
import Button from "components/Button";
import { Centered } from "../../decorators";
import { Info } from "react-feather";

export default {
  title: "Components/Modal",
  component: Modal,
  decorators: [],
};

const Template = (args) => <Modal {...args} />;

export const Small = Template.bind({});
Small.args = {
  open: true,
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
