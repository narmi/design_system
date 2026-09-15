import React from "react";
import cc from "classcat";

export interface SeparatorListProps {
  items: React.ReactNode[];
  separator?: string;
  /** CSS color value applied to the separator character */
  separatorColor?: string;
  noWrap?: boolean;
  testId?: string;
}

/**
 * Takes a list of elements and places a visual separator between items.
 */
const SeparatorList: React.FC<SeparatorListProps> = ({
  separator = "|",
  separatorColor = "var(--font-color-secondary)",
  noWrap = false,
  items = [],
  testId,
}) => (
  <ul
    className={cc([
      "list--reset nds-typography nds-separatorList",
      { "nds-separatorList--noWrap": noWrap },
    ])}
    // @ts-expect-error CSSProperties does not include custom CSS properties
    style={{ "--nds-separatorList-separator-color": separatorColor }}
    data-testid={testId}
  >
    {items
      .filter((item) => item !== null && item !== undefined)
      .map((item, i, filteredItems) => {
        const itemProps = {};
        if (i !== filteredItems.length - 1) {
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
