import React from "react";
import cc from "classcat";
import { IconName } from "../../types";

interface SeparatorListProps {
  items: React.ReactNode[];
  separator?: string;
  noWrap?: boolean;
  testId?: string;
  icon?: IconName;
}

/**
 * Takes a list of elements and places a visual separator between items.
 */
const SeparatorList: React.FC<SeparatorListProps> = ({
  separator = "|",
  noWrap = false,
  items = [],
  testId,
  icon,
}) => (
  <ul
    className={cc([
      "list--reset nds-typography nds-separatorList",
      { "nds-separatorList--noWrap": noWrap },
    ])}
    data-testid={testId}
  >
    {items.map((item, i) => {
      const itemProps = {};
      if (i !== items.length - 1) {
        itemProps["data-separator"] = separator;
      }
      return (
        <li key={`${i}-${separator}`} {...itemProps}>
          {item} {icon}
        </li>
      );
    })}
  </ul>
);

export default SeparatorList;
