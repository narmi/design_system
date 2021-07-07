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
  it("By Amount", () => {
    const { getByText, queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );

    // test initial table render
    let amountColumn = queryAllByTestId("col1");
    let amountSortOption = queryByTestId("AMOUNT0");
    let amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual(["-$1000", "-$123.45", "-$80", "-$130"]);

    // sort ascending
    amountSortOption.click();
    amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual(["-$80", "-$123.45", "-$130", "-$1000"]);

    // reverse sort / sort descending
    amountSortOption = queryByTestId("AMOUNT1");
    amountSortOption.click();
    amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual(["-$1000", "-$130", "-$123.45", "-$80"]);
  });
});

describe("Active descending sort followed by reset", () => {
  it("Name then by Amount", () => {
    const { getByText, queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );

    // test initial table render
    let amountColumn = queryAllByTestId("col0");
    let amountSortOption = queryByTestId("DESCRIPTION0");
    let amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020", 
      "Bill to Waterworks-4534 October 23, 2020", 
      "Transfer to Melanie Abrazado October 20, 2020", 
      "Transfer to Melanie Abrazado October 21, 2020"
    ]);

    // sort ascending
    amountSortOption.click();
    amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual([
      "Bill to Waterworks-4534 October 23, 2020",
      "Transfer to Melanie Abrazado October 20, 2020",
      "Transfer to Melanie Abrazado October 21, 2020",
      "Transfer to Noble Bank-34232 October 30, 2020"
    ]);
    
    // reset order
    amountSortOption.click();
    amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020", 
      "Bill to Waterworks-4534 October 23, 2020", 
      "Transfer to Melanie Abrazado October 20, 2020", 
      "Transfer to Melanie Abrazado October 21, 2020"
    ]);

    // descending order
    amountSortOption = queryByTestId("DESCRIPTION1");
    amountSortOption.click();
    amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020",
      "Transfer to Melanie Abrazado October 20, 2020",
      "Transfer to Melanie Abrazado October 21, 2020",
      "Bill to Waterworks-4534 October 23, 2020"
    ]);

    // click descending option for Amount 
    amountSortOption = queryByTestId("AMOUNT1");
    amountSortOption.click();
    amountColumn = queryAllByTestId("col1");
    amountColumnValues = amountColumn.map((cell) => cell.textContent);
    expect(amountColumnValues).toEqual([ 
      "-$1000", "-$130", "-$123.45", "-$80" 
    ]);
  });
});
