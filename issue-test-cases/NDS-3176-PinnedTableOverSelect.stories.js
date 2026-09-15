/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useRef, useState } from "react";
import Table from "src/Table";
import TableSelect from "src/TableSelect";
import Select from "src/Select";

const storyDescription =
  "Reproduction for NDS-3176 (follow-up). Since 6.28.1 `useDropdownLayer` " +
  "no longer sets a z-index on the layer element (it used to be 4, or 9 " +
  "when `isPortalled`). The dropdown layer now relies on the " +
  "`%nds-dropdown-layer` placeholder for `z-index: 1`, and only when the " +
  "class carrying that placeholder is on the positioned layer element. " +
  "Table pinned columns are `position: sticky; z-index: 2`, so any dropdown " +
  "layer at z-index 1 (or auto) paints *underneath* them. " +
  "`PinnedColumnOverTableSelect`: `TableSelect` puts " +
  "`.nds-tableField-select-list` on the inner `ul`, not the layer `div`, so " +
  "the portalled layer has `z-index: auto`. " +
  "`PinnedColumnOverSelect`: a plain `Select` (fixed in 6.29.5 to put " +
  "`.nds-select-list` on the layer) still only gets `z-index: 1` and loses " +
  "to the pinned column. The scroll container is scrolled on mount so the " +
  "dropdown column is partially tucked under the pinned Name column. " +
  "Expected: the open menu paints above the pinned column. Actual: the " +
  "pinned cells of the rows below cover the left edge of the open menu.";

const STATUSES = ["Active", "Inactive", "On Leave", "Pending", "Terminated"];

const ROWS = [
  { id: 1, name: "John Doe", email: "john@example.com", dept: "Engineering" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", dept: "Marketing" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", dept: "Sales" },
  { id: 4, name: "Lisa Park", email: "lisa@example.com", dept: "Design" },
  { id: 5, name: "Tom Bradley", email: "tom@example.com", dept: "HR" },
];

/**
 * Scrolls the table's horizontal scroll container on mount so the Status
 * column sits partially beneath the pinned Name column. This is the state in
 * which the pinned column (z-index: 2) visibly covers the open dropdown.
 */
const useScrollUnderPinnedColumn = (scrollLeft) => {
  const wrapperRef = useRef(null);
  useLayoutEffect(() => {
    const container = wrapperRef.current?.querySelector(
      ".nds-table-scroll-container",
    );
    if (container) container.scrollLeft = scrollLeft;
  }, [scrollLeft]);
  return wrapperRef;
};

const Frame = ({ children, wrapperRef }) => (
  <div
    ref={wrapperRef}
    style={{
      background: "var(--bgColor-blueGrey)",
      padding: "16px",
      // Constrain width so the table actually scrolls horizontally
      maxWidth: "720px",
    }}
  >
    <p className="margin--bottom--m fontSize--s">
      The table is pre-scrolled so the <strong>Status</strong> column is partly
      under the pinned <strong>Name</strong> column. Open a Status dropdown in
      one of the upper rows and look at the left edge of the menu where it
      overlaps the pinned cells below it.
    </p>
    {children}
  </div>
);

export const PinnedColumnOverTableSelect = ({ scrollLeft }) => {
  const [statuses, setStatuses] = useState(
    // Pre-populate so the trigger (and therefore the width-matched menu) is
    // wide enough to straddle the pinned column edge.
    Object.fromEntries(ROWS.map((r) => [r.id, "Terminated"])),
  );
  const wrapperRef = useScrollUnderPinnedColumn(scrollLeft);

  return (
    <Frame wrapperRef={wrapperRef}>
      <Table
        kind="editable"
        pinColumns="start"
        colVisibility={["*", "*", "*", "*"]}
        colLayout={{
          s: "220px 260px 320px 320px",
          m: "220px 260px 320px 320px",
          l: "220px 260px 320px 320px",
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name (pinned)</Table.HeaderCell>
            <Table.HeaderCell>Status (TableSelect)</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ROWS.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>
                <TableSelect
                  id={`status-${row.id}`}
                  label="Status"
                  value={statuses[row.id]}
                  onChange={(value) =>
                    setStatuses((prev) => ({ ...prev, [row.id]: value }))
                  }
                >
                  {STATUSES.map((s) => (
                    <TableSelect.Item key={s} value={s}>
                      {s}
                    </TableSelect.Item>
                  ))}
                </TableSelect>
              </Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.dept}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Frame>
  );
};
PinnedColumnOverTableSelect.args = { scrollLeft: 80 };
PinnedColumnOverTableSelect.argTypes = {
  scrollLeft: {
    control: { type: "range", min: 0, max: 260, step: 10 },
    description:
      "Horizontal scroll applied to the table on mount. Larger values tuck more of the Status column under the pinned Name column.",
  },
};
PinnedColumnOverTableSelect.parameters = {
  docs: {
    description: {
      story:
        "`TableSelect` passes `isPortalled: true` and renders its layer into `document.body`. " +
        "Before 6.28.1 the hook gave that layer `z-index: 9`; now the layer `div` has no class and no z-index, " +
        "so the pinned column's `z-index: 2` sticky cells paint over the open menu.",
    },
  },
};

export const PinnedColumnOverSelect = ({ scrollLeft }) => {
  const wrapperRef = useScrollUnderPinnedColumn(scrollLeft);

  return (
    <Frame wrapperRef={wrapperRef}>
      <Table
        pinColumns="start"
        colVisibility={["*", "*", "*", "*"]}
        colLayout={{
          s: "220px 260px 320px 320px",
          m: "220px 260px 320px 320px",
          l: "220px 260px 320px 320px",
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name (pinned)</Table.HeaderCell>
            <Table.HeaderCell>Status (Select)</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ROWS.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>
                {/* Table cells are flex containers; stretch the Select so it
                    spans the column and can be tucked under the pinned one. */}
                <div style={{ width: "100%" }}>
                  <Select label="Status">
                    {STATUSES.map((s) => (
                      <Select.Item key={s} value={s} searchValue={s}>
                        {s}
                      </Select.Item>
                    ))}
                  </Select>
                </div>
              </Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.dept}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Frame>
  );
};
PinnedColumnOverSelect.args = { scrollLeft: 80 };
PinnedColumnOverSelect.argTypes = PinnedColumnOverTableSelect.argTypes;
PinnedColumnOverSelect.parameters = {
  docs: {
    description: {
      story:
        "A plain `Select` in a pinned-column table. As of 6.29.5 the `.nds-select-list` class is on the layer element, " +
        "giving it `z-index: 1` via `%nds-dropdown-layer`, which still loses to the pinned column's `z-index: 2`. " +
        "The pre-6.28.1 hook value of 4 would have painted above it.",
    },
  },
};

export default {
  title: "NDS-3176 Pinned table column over dropdown",
  tags: ["!autodocs", "NDS-3176"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};
