import React from "react";
import Table from "components/Table";
import Card from "components/Card";
import { transfersGridData, adminGridData } from "./storyHelpers";

export default {
  title: "Components/Table",
  component: Table,
};

const InGrid = (Story) => (
  <Card large>
    <Story />
  </Card>
);

const Template = (args) => <Table {...args} />;
const DefaultArgs = {
  title: "Scheduled transactions",
  hoverable: true,
  gridData: transfersGridData,
};

export const Basic = Template.bind({});
Basic.args = {
  ...DefaultArgs,
  sortableHeaders: ["DESCRIPTION", "AMOUNT"]
};
Basic.decorators = [InGrid];

export const adminTable = Template.bind({});
adminTable.args = {
  ...DefaultArgs,
  title: "User Roles",
  gridData: adminGridData,
  sortableHeaders: ["Name", "Last Login"]
};
adminTable.decorators = [InGrid];