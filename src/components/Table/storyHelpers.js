import React from "react";
import Typography from "components/Typography";
import PlainButton from "components/PlainButton";

const DescriptionCol = (props) => {
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

export const transfersGridData = [
  [
    {
      column: "DESCRIPTION",
      content: (
        <DescriptionCol
          transfer={"Transfer to Noble Bank-3432"}
          date={"October 30, 2020"}
        />
      ),
      sortKey: "Transfer to Noble Bank-3432",
    },
    {
      column: "AMOUNT",
      content: "-$1000",
      sortKey: -1000,
    },
    {
      content: <PlainButton small>Delete</PlainButton>,
    },
  ],
  [
    {
      column: "DESCRIPTION",
      content: (
        <DescriptionCol
          transfer={"Bill to Waterworks-4534"}
          date={"October 23, 2020"}
        />
      ),
      sortKey: "Bill to Waterworks-4534",
    },
    {
      column: "AMOUNT",
      content: "-$123.45",
      sortKey: -123.45,
    },
    {
      content: <PlainButton small>Delete</PlainButton>,
    },
  ],
  [
    {
      column: "DESCRIPTION",
      content: (
        <DescriptionCol
          transfer={"Transfer to Melanie Abrazado"}
          date={"October 20, 2020"}
        />
      ),
      sortKey: "Transfer to Melanie Abrazado",
    },
    {
      column: "AMOUNT",
      content: "-$80",
      sortKey: -80,
    },
    {
      content: <PlainButton small>Delete</PlainButton>,
    },
  ],
  [
    {
      column: "DESCRIPTION",
      content: (
        <DescriptionCol
          transfer={"Transfer to Melanie Abrazado"}
          date={"October 21, 2020"}
        />
      ),
      sortKey: "Transfer to Melanie Abrazado",
    },
    {
      column: "AMOUNT",
      content: "-$130",
      sortKey: -130,
    },
    {
      content: <PlainButton small>Delete</PlainButton>,
    },
  ],
];
