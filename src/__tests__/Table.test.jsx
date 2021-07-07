/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, getByRole, getByTestId } from "@testing-library/react";
import Table from "components/Table";
import PlainButton from "components/PlainButton";

const sampleGridData = [
  [
    {
      column: "DESCRIPTION",
      content: (
        <div>
          <span>Transfer to Noble Bank-34232 </span>
          <span>October 30, 2020</span>
        </div>
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
        <div>
          <span>Bill to Waterworks-4534 </span>
          <span>October 23, 2020</span>
        </div>
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
        <div>
          <span>Transfer to Melanie Abrazado </span>
          <span>October 20, 2020</span>
        </div>
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
        <div>
          <span>Transfer to Melanie Abrazado </span>
          <span>October 21, 2020</span>
        </div>
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

describe("Table Sorting", () => {
  it("Table should be renered initially by user specified order, \
      then by ascending order by the Amount column, \
      then in descending order by the Amount column", () => {
        
    const { queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );

    // table should initially render in user-specified order
    let selectedColumn = queryAllByTestId("col1");
    let columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual(["-$1000", "-$123.45", "-$80", "-$130"]);

    // clicking ascending option for Amount should sort the table in ascending 
    // order by Amount
    let sortOption = queryByTestId("AMOUNT_ASC");
    sortOption.click();
    columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual(["-$80", "-$123.45", "-$130", "-$1000"]);

    // clicking descending option for Amount should sort the table in descending 
    // order by Amount
    sortOption = queryByTestId("AMOUNT_DESC");
    sortOption.click();
    columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual(["-$1000", "-$130", "-$123.45", "-$80"]);
  });
});

describe("Active descending sort followed by reset", () => {
  it("Table renders in user specified order, \
      then ordered by Description in alphebetical order, \
      then reset to the user specified order, \
      then ordered by Description in reverse alphebetical order, \
      then ordered by Amoun in descending order ", () => {

    const { queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );

    // table should initially render in user-specified order
    let selectedColumn = queryAllByTestId("col0");
    let columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020", 
      "Bill to Waterworks-4534 October 23, 2020", 
      "Transfer to Melanie Abrazado October 20, 2020", 
      "Transfer to Melanie Abrazado October 21, 2020"
    ]);

    // clicking the Description Ascending order option should render the grid 
    // in alphabetical order by Description
    let sortOption = queryByTestId("DESCRIPTION_ASC");
    sortOption.click();
    columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual([
      "Bill to Waterworks-4534 October 23, 2020",
      "Transfer to Melanie Abrazado October 20, 2020",
      "Transfer to Melanie Abrazado October 21, 2020",
      "Transfer to Noble Bank-34232 October 30, 2020"
    ]);
    
    // repeating the click on the Description Ascending order option should reset 
    // the table to the original user-specified order
    sortOption.click();
    columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020", 
      "Bill to Waterworks-4534 October 23, 2020", 
      "Transfer to Melanie Abrazado October 20, 2020", 
      "Transfer to Melanie Abrazado October 21, 2020"
    ]);

    // clicking the Description Descending order option should render the grid in 
    // reverse alphabetical order by Description
    sortOption = queryByTestId("DESCRIPTION_DESC");
    sortOption.click();
    columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020",
      "Transfer to Melanie Abrazado October 20, 2020",
      "Transfer to Melanie Abrazado October 21, 2020",
      "Bill to Waterworks-4534 October 23, 2020"
    ]);

    // clicking descending option for Amount should sort the table in descending 
    // order by Amount
    sortOption = queryByTestId("AMOUNT_DESC");
    sortOption.click();
    selectedColumn = queryAllByTestId("col1");
    columnValues = selectedColumn.map((cell) => cell.textContent);
    expect(columnValues).toEqual([ 
      "-$1000", "-$130", "-$123.45", "-$80" 
    ]);
  });
});
