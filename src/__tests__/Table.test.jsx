/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
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

describe("Table Sorting Amount Tests", () => {  
  it("Table should be renered initially by user specified order", () => {
    const { queryAllByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );
    let selectedColumn = queryAllByTestId("col1");
    let columnValues = selectedColumn.map((cell) => cell.textContent);

     // table should initially render in user-specified order
    expect(columnValues).toEqual(["-$1000", "-$123.45", "-$80", "-$130"]);
  });

  it("sorts by Amount in ascending order", () => {
    const { queryByTestId, queryAllByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );

    let sortOption = queryByTestId("AMOUNT_ASC");
    let selectedColumn = queryAllByTestId("col1");
    sortOption.click();
    let columnValues = selectedColumn.map((cell) => cell.textContent);

    // clicking ascending option for Amount should sort the table in ascending 
    // order by Amount
    expect(columnValues).toEqual(["-$80", "-$123.45", "-$130", "-$1000"]);
  });

  it("sorts by Amount in descending order", () => {
    const { queryByTestId, queryAllByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );

    let sortOption = queryByTestId("AMOUNT_DESC");
    let selectedColumn = queryAllByTestId("col1");
    sortOption.click();
    let columnValues = selectedColumn.map((cell) => cell.textContent);

    // clicking descending option for Amount should sort the table in descending 
    // order by Amount
    expect(columnValues).toEqual(["-$1000", "-$130", "-$123.45", "-$80"]);
  });
});

describe("Test Table Sorting states", () => {

  it("Table renders in user specified order", () => {
    const { queryAllByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );
    let selectedColumn = queryAllByTestId("col0");
    let columnValues = selectedColumn.map((cell) => cell.textContent);

    // table should initially render in user-specified order
    expect(columnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020", 
      "Bill to Waterworks-4534 October 23, 2020", 
      "Transfer to Melanie Abrazado October 20, 2020", 
      "Transfer to Melanie Abrazado October 21, 2020"
    ]);
  });

  it("sorts by description in alphabetical order", () => {
    const { queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );
    let sortOption = queryByTestId("DESCRIPTION_ASC");
    let selectedColumn = queryAllByTestId("col0");
    sortOption.click();
    let columnValues = selectedColumn.map((cell) => cell.textContent);

    // clicking the Description Ascending order option should render the grid 
    // in alphabetical order by Description
    expect(columnValues).toEqual([
      "Bill to Waterworks-4534 October 23, 2020",
      "Transfer to Melanie Abrazado October 20, 2020",
      "Transfer to Melanie Abrazado October 21, 2020",
      "Transfer to Noble Bank-34232 October 30, 2020"
    ]);
  });
    
  it("resets to original order on click", () => {
    const { queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );
    let sortOption = queryByTestId("DESCRIPTION_ASC");
    let selectedColumn = queryAllByTestId("col0");
    sortOption.click();
    sortOption.click();
    let columnValues = selectedColumn.map((cell) => cell.textContent);

    // repeating the click on the Description Ascending order option should reset 
    // the table to the original user-specified order
    expect(columnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020", 
      "Bill to Waterworks-4534 October 23, 2020", 
      "Transfer to Melanie Abrazado October 20, 2020", 
      "Transfer to Melanie Abrazado October 21, 2020"
    ]);
  });

  it("sorts by description in reverse order", () => {
    const { queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );
    let sortOption = queryByTestId("DESCRIPTION_DESC");
    let selectedColumn = queryAllByTestId("col0");
    sortOption.click();
    let columnValues = selectedColumn.map((cell) => cell.textContent);

    // clicking the Description Descending order option should render the grid in 
    // reverse alphabetical order by Description
    expect(columnValues).toEqual([
      "Transfer to Noble Bank-34232 October 30, 2020",
      "Transfer to Melanie Abrazado October 20, 2020",
      "Transfer to Melanie Abrazado October 21, 2020",
      "Bill to Waterworks-4534 October 23, 2020"
    ]);
  });

  it("sorts by Amount in descending order", () => {
    const { queryAllByTestId, queryByTestId } = render(
      <Table
        title={"test"}
        gridData={sampleGridData}
        sortableHeaders={["DESCRIPTION", "AMOUNT"]}
      />
    );
    let sortOption = queryByTestId("AMOUNT_DESC");
    sortOption.click();
    let selectedColumn = queryAllByTestId("col1");
    let columnValues = selectedColumn.map((cell) => cell.textContent);

    // clicking descending option for Amount should sort the table in descending 
    // order by Amount
    expect(columnValues).toEqual([ 
      "-$1000", "-$130", "-$123.45", "-$80" 
    ]);
  });
});
