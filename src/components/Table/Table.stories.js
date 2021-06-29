import React from "react";
import Table from "components/Table";
import Typography from "components/Typography";
import { transfersGridData } from "../../helpers/sampleData.js"
import PlainButton from "components/PlainButton";

export default {
  title: "Components/Table",
  component: Table,
};

const DescriptionDiv = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "220px" }}>
      <Typography style={{ fontSize: "16px" }}>{props.transfer}</Typography>
      <Typography
        style={{ fontSize: "14px", color: "var(--nds-grey-placeholder)" }}
      >
        {props.date}
      </Typography>
    </div>
  );
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
