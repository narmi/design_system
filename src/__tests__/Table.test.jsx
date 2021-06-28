/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByRole } from '@testing-library/react';
import Table from 'components/Table';
import PlainButton from "components/PlainButton";

const sampleGridData = [
  [
    {
      column: "DESCRIPTION",
      content: (
        <div
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
        <div
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
        <div
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
        <div
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

describe('Table Sorting', () => {
  it('By Amount', () => {
    const {getByText, queryAllByTestId} = render(<Table title={"test"} gridData={sampleGridData}/>);
    const amountHeader = getByText('AMOUNT');
    let amountColumn = queryAllByTestId("col1");
    let amountColumnValues = amountColumn.map(cell => cell.textContent);
    expect(amountColumnValues).toEqual([ '-$1000', '-$123.45', '-$80', '-$130' ]);
    amountHeader.click(); // trigger sort
    amountColumnValues = amountColumn.map(cell => cell.textContent);
    expect(amountColumnValues).toEqual([ '-$80', '-$123.45', '-$130', '-$1000' ]);
  })
});