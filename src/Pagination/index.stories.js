import React from "react";
import Pagination from "./";

const Template = (args) => <Pagination {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  totalPages: 40,
  defaultSelectedPage: 3,
};

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    onPageChange: { action: "page change" },
  },
};
