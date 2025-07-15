/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import cc from "classcat";
import type { CellProps } from "./Cell";
import type { HeaderCellProps } from "./HeaderCell";

export interface TableRowProps {
  children: React.ReactNode;
  onRowClick: () => void;
}

const Row = ({ children, onRowClick }: TableRowProps) => {
  const isInteractive = typeof onRowClick === "function";

  const handleRowClick = () => {
    if (isInteractive) {
      onRowClick();
    }
  };

  return (
    <div
      className={cc([
        "nds-table-row",
        {
          "nds-table-row--interactive": isInteractive,
        },
      ])}
      role="row"
      onClick={handleRowClick}
    >
      {/**
       * Render children in the order `Row` received them, but inject a
       * `_colIndex` prop so `Cell` can access its visibilty configuration.
       */}
      {React.Children.toArray(children).map((child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<CellProps | HeaderCellProps>,
            {
              key: i,
              _colIndex: i,
            },
          );
        }
        console.warn("Table.Row ecountered an unknown child");
        return child;
      })}
    </div>
  );
};

export default Row;
