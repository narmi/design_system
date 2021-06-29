import React from "react";
import Table from "components/Table";
import Typography from "components/Typography";
import { transfersGridData } from "../../helpers/sampleData.js"
import PlainButton from "components/PlainButton";

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
