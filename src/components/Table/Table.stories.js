import React from "react";
import Table from "components/Table";
import Typography from "components/Typography";
import PlainButton from "components/PlainButton";
// import { Centered } from "../../decorators";

export default {
  title: "Components/Table",
  component: Table,
  // decorators: [Centered],
};

const DescriptionDiv = (props) => {
  return (
    <div
      style={{ display: "flex", "flex-direction": "column", width: "220px" }}
    >
      <Typography style={{ "font-size": "16px" }}>{props.transfer}</Typography>
      <Typography style={{ "font-size": "14px", color: "#8C8C8C" }}>
        {props.date}
      </Typography>
    </div>
  );
};

const Template = (args) => <Table {...args} />;
const DefaultArgs = {
  title: "Scheduled transactions",
  hover: true,
  gridData: [
    [
      {
        column: "DESCRPITION",
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
        content: <Typography>-$1000</Typography>,
        key: "url-item",
      },
      {
        content: <PlainButton small>Delete</PlainButton>,
        key: "url-item",
      },
    ],
    [
      {
        column: "DESCRPITION",
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
        content: <Typography>-$123.45</Typography>,
        key: "url-item",
      },
      {
        content: <PlainButton small>Delete</PlainButton>,
        key: "url-item",
      },
    ],
    [
      {
        column: "DESCRPITION",
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
        content: <Typography>-$80</Typography>,
        key: "url-item",
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
