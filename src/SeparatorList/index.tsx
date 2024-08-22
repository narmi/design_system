import React from "react";
import cc from "classcat";

interface SeparatorListProps {
  items: React.ReactNode[];
  separator?: string;
  noWrap?: boolean;
  testId?: string;
}

/**
 * Takes a list of elements and places a visual separator between items.
 */
const SeparatorList: React.FC<SeparatorListProps> = ({
  separator = "|",
  noWrap = false,
  items = [],
  testId,
}) => (
  <ul
    className={cc([
      "list--reset nds-typography nds-separatorList",
      { "nds-separatorList--noWrap": noWrap },
    ])}
    data-testid={testId}
  >
    {items.map((item, i) => {
      const itemProps: any = {};
      if (i !== items.length - 1) {
        itemProps["data-separator"] = separator;
      }
      return (
        <li key={`${i}-${separator}`} {...itemProps}>
          {item}
        </li>
      );
    })}
  </ul>
);

export default SeparatorList;
