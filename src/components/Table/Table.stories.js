import React from "react";
import Table from "components/Table";
import Typography from "components/Typography";
import PlainButton from "components/PlainButton";

export default {
  title: "Components/Table",
  component: Table,
};

const DescriptionDiv = (props) => {
  return (
    <div
      style={{ display: "flex", "flex-direction": "column", width: "220px" }}
    >
      <Typography style={{ "font-size": "16px" }}>{props.transfer}</Typography>
      <Typography
        style={{ "font-size": "14px", color: "var(--nds-grey-placeholder)" }}
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
  gridData: [
    [
      {
        column: "DESCRIPTION",
        content: (
          <DescriptionDiv
            transfer={"Transfer to Noble Bank-3432"}
            date={"October 30, 2020"}
          />
        ),
        key: "url-item",
      },
      {
        column: "AMOUNT",
        content: "-$1000",
        sortKey: -1000,
      },
      {
        content: <PlainButton small>Delete</PlainButton>,
        key: "url-item",
      },
    ],
    [
      {
        column: "DESCRIPTION",
        content: (
          <DescriptionDiv
            transfer={"Bill to Waterworks-4534"}
            date={"October 23, 2020"}
          />
        ),
        key: "url-item",
      },
      {
        column: "AMOUNT",
        content: "-$123.45",
        sortKey: -123.45,
      },
      {
        content: <PlainButton small>Delete</PlainButton>,
        key: "url-item",
      },
    ],
    [
      {
        column: "DESCRIPTION",
        content: (
          <DescriptionDiv
            transfer={"Transfer to Melanie Abrazado"}
            date={"October 20, 2020"}
          />
        ),
        key: "url-item",
      },
      {
        column: "AMOUNT",
        content: "-$80",
        sortKey: -80,
      },
      {
        content: <PlainButton small>Delete</PlainButton>,
        key: "url-item",
      },
    ],
  ],
};

export const BasicTable = Template.bind({});
BasicTable.args = {
  ...DefaultArgs,
};
