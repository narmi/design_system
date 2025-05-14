/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import type { CellProps } from "./Cell";

const noop = () => {};

interface TableRowProps {
  children: React.ReactNode;
  onRowClick: () => void;
}

const Row = ({ children, onRowClick = noop }: TableRowProps) => (
  <div role="row" onClick={onRowClick}>
    {/**
     * Render children in the order `Row` received them, but inject a
     * `_colIndex` prop so `Cell` can access its visibilty configuration.
     */}
    {React.Children.toArray(children).map((child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<CellProps>, {
          key: i,
          _colIndex: i,
        });
      }
      console.warn("Table.Row ecountered an unknown child");
      return child;
    })}
  </div>
);

export default Row;
