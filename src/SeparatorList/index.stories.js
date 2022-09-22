/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import SeparatorList from "./";

const Template = (args) => <SeparatorList {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  items: [
    <a className="fontColor--pine" href="#">
      Get Sample Email
    </a>,
    <a className="fontColor--pine" href="#">
      Edit
    </a>,
    <a className="fontColor--pine" href="#">
      More
    </a>,
  ],
};

export const AsBreadcrumbs = Template.bind({});
AsBreadcrumbs.args = {
  separator: "/",
  items: [
    <span className="fontColor--secondary">Account</span>,
    <span className="fontColor--secondary">Settings</span>,
    <span className="fontColor--primary">Email Preferences</span>,
  ],
};
AsBreadcrumbs.parameters = {
  docs: {
    description: {
      story:
        "The `separator` prop takes any string, allowing you to compose other types of delimited lists like breadcrumbs.",
    },
  },
};

export default {
  title: "Components/SeparatorList",
  component: SeparatorList,
};
