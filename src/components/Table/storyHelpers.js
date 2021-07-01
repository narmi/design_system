import React from "react";
import Typography from "components/Typography";
import PlainButton from "components/PlainButton";

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

export const transfersGridData = [
  [
    {
      column: "DESCRIPTION",
      content: (
        <DescriptionDiv
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
        <DescriptionDiv
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
        <DescriptionDiv
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
        <DescriptionDiv
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

export const adminGridData = [
  [
    {
      column: "Name",
      content: <Typography>Maria Borges</Typography>,
      sortKey: "Maria Borges",
    },
    {
      column: "email",
      content: <Typography>mariajoseluisborges@narmitech.com</Typography>,
    },
    {
      column: "role",
      content: <Typography>Collaborator</Typography>,
    },
    {
      column: "status",
      content: <Typography>Active</Typography>,
    },
    {
      column: "Last Login",
      content: <Typography>07/01/20</Typography>,
      sortKey: "07/04/20",
    },
  ],
  [
      {
          column: "Name",
          content: <Typography>Angela Davis</Typography>,
          sortKey: "Angela Davis",
        },
        {
          column: "email",
          content: <Typography>angeladavis@narmitech.com</Typography>,
        },
        {
          column: "role",
          content: <Typography>Admin</Typography>,
        },
        {
          column: "status",
          content: <Typography>Active</Typography>,
        },
        {
          column: "Last Login",
          content: <Typography>07/04/20</Typography>,
          sortKey: "07/04/20",
        },
  ],
  [
      {
          column: "Name",
          content: <Typography>Junot Diaz</Typography>,
          sortKey: "Junot Diaz",
        },
        {
          column: "email",
          content: <Typography>junotdiaz@narmitech.com</Typography>,
        },
        {
          column: "role",
          content: <Typography>Viewer</Typography>,
        },
        {
          column: "status",
          content: <Typography>Active</Typography>,
        },
        {
          column: "Last Login",
          content: <Typography>07/12/20</Typography>,
          sortKey: "07/12/20",
        },
  ],
  [
      {
          column: "Name",
          content: <Typography>Aminatou Sow</Typography>,
          sortKey: "Aminatou Sow",
        },
        {
          column: "email",
          content: <Typography>aminatousow@narmitech.com</Typography>,
        },
        {
          column: "role",
          content: <Typography>Collaborator</Typography>,
        },
        {
          column: "status",
          content: <Typography>Active</Typography>,
        },
        {
          column: "Last Login",
          content: <Typography>10/24/19</Typography>,
          sortKey: "10/24/19",
        },
  ],
  [
      {
          column: "Name",
          content: <Typography>Zadie Smith</Typography>,
          sortKey: "Zadie Smith",
        },
        {
          column: "email",
          content: <Typography>zadiesmith@narmitech.com</Typography>,
        },
        {
          column: "role",
          content: <Typography>Collaborator</Typography>,
        },
        {
          column: "status",
          content: <Typography>Active</Typography>,
        },
        {
          column: "Last Login",
          content: <Typography>04/29/20</Typography>,
          sortKey: "04/29/20",
        },
  ]
];