import React from "react";
import Table from "components/Table";
import { transfersGridData } from "../../helpers/storyHelpers";

export default {
  title: "Components/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;
const DefaultArgs = {
  title: "Scheduled transactions",
  hoverable: true,
  gridData: transfersGridData,
};

export const BasicTable = Template.bind({});
BasicTable.args = {
  ...DefaultArgs,
};
