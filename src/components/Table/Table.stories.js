import React from "react";
import Table from "components/Table";
import Card from "components/Card";
import { transfersGridData } from "../../helpers/storyHelpers";

export default {
  title: "Components/Table",
  component: Table,
};

const InGrid = (Story) => (
  <Card large>
    <Story />
    <div />
  </Card>
);

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

BasicTable.decorators = [InGrid];
