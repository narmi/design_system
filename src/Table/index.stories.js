/**
 * TO VIEW THIS STORY LOCALLY:
 * change the file name from `.stories-hidden.js` to `.stories.js`.
 *
 * This component is still in development, so we can't publish the docs publicly yet.
 */

/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React, { useState } from "react";
import Table from "./";
import TableInput from "../TableInput";
import TableAutocomplete from "../TableAutocomplete";
import TableDateInput from "../TableDateInput";
import TableSelect from "../TableSelect";

export const Overview = (args) => (
  <Table
    colVisibility={["*", "*", "m", "m", "*"]}
    colLayout={{
      s: "repeat(2, 1fr) min-content",
      m: "repeat(4, 1fr) min-content",
      l: "repeat(4, 1fr) min-content",
    }}
    {...args}
  >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Department</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>john@example.com</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
        <Table.Cell>Engineering</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>jane@example.com</Table.Cell>
        <Table.Cell>User</Table.Cell>
        <Table.Cell>Marketing</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bob Johnson</Table.Cell>
        <Table.Cell>bob@example.com</Table.Cell>
        <Table.Cell>Manager</Table.Cell>
        <Table.Cell>Sales</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const ColumnVisibility = () => (
  <Table
    colVisibility={["*", "*", "m", "*", "*"]}
    colLayout={{
      s: "repeat(4, 1fr)",
      m: "repeat(4, 1fr) min-content",
      l: "repeat(4, 1fr) min-content",
    }}
  >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Col 1</Table.HeaderCell>
        <Table.HeaderCell>Col 2</Table.HeaderCell>
        <Table.HeaderCell>Col 3 (hidden on small)</Table.HeaderCell>
        <Table.HeaderCell>Col 4</Table.HeaderCell>
        <Table.HeaderCell>Col 5</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Data 1</Table.Cell>
        <Table.Cell>Data 2</Table.Cell>
        <Table.Cell>Data 3 (hidden on small)</Table.Cell>
        <Table.Cell>Data 4</Table.Cell>
        <Table.Cell>Data 5</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>More 1</Table.Cell>
        <Table.Cell>More 2</Table.Cell>
        <Table.Cell>More 3 (hidden on small)</Table.Cell>
        <Table.Cell>More 4</Table.Cell>
        <Table.Cell>More 5</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
ColumnVisibility.parameters = {
  docs: {
    description: {
      story:
        "This table has a colVisibility value of `['*', '*', 'm', '*', '*']`, where the middle column is only shown at `m` viewports or larger.",
    },
  },
};

export const ColumnLayout = () => (
  <Table
    colVisibility={["*", "*", "*", "*"]}
    colLayout={{
      s: "2fr 1fr 1fr max-content",
      m: "minmax(200px, 1fr) max-content 1fr min-content",
      l: "minmax(300px, 2fr) max-content 1fr min-content",
    }}
  >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>MacBook Pro 16-inch with M3 Max chip</Table.Cell>
        <Table.Cell>$3,999.00</Table.Cell>
        <Table.Cell>Laptops</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>iPhone 15 Pro</Table.Cell>
        <Table.Cell>$999.00</Table.Cell>
        <Table.Cell>Phones</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>AirPods Pro (2nd generation)</Table.Cell>
        <Table.Cell>$249.00</Table.Cell>
        <Table.Cell>Audio</Table.Cell>
        <Table.Cell>
          <button>Edit</button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
ColumnLayout.parameters = {
  docs: {
    description: {
      story:
        "Grid layouts configured per breakpoint using `colLayout`:\n\n" +
        "- **Small**: `2fr 1fr 1fr max-content`\n" +
        "- **Medium**: `minmax(200px, 1fr) max-content 1fr min-content`\n" +
        "- **Large**: `minmax(300px, 2fr) max-content 1fr min-content`",
    },
  },
};

export const RowSpacing = (args) => <Overview {...args} />;
RowSpacing.args = {
  rowDensity: "compact",
};
RowSpacing.parameters = {
  docs: {
    description: {
      story:
        "Use the `rowDensity` prop to adjust the vertical spacing between rows.",
    },
  },
};

export const ClickableHeaders = () => (
  <Table
    colVisibility={["*", "*", "*"]}
    colLayout={{
      s: "1fr 1fr 1fr",
      m: "2fr 1fr 1fr",
      l: "2fr 1fr 1fr",
    }}
  >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell onClick={() => alert("Name column clicked!")}>
          Name
        </Table.HeaderCell>
        <Table.HeaderCell onClick={() => alert("Role column clicked!")}>
          Role
        </Table.HeaderCell>
        <Table.HeaderCell onClick={() => alert("Department column clicked!")}>
          Department
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
        <Table.Cell>Engineering</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>User</Table.Cell>
        <Table.Cell>Marketing</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bob Johnson</Table.Cell>
        <Table.Cell>Manager</Table.Cell>
        <Table.Cell>Sales</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
ClickableHeaders.parameters = {
  docs: {
    description: {
      story:
        "Header cells can be made interactive by passing an `onClick` handler. When clicked, they render as buttons and are announced by screen readers. Consumers are responsible for implementing any sorting or filtering behavior in the data passed to `Table`.",
    },
  },
};

export const AllEditableInputTypes = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "",
      startDate: "2023-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "",
      email: "jane@example.com",
      department: "Marketing",
      startDate: "",
      status: "",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "",
      department: "",
      startDate: "2022-06-01",
      status: "Active",
    },
  ]);

  const updateData = (id, key, value) => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)),
    );
  };

  const departments = ["Engineering", "Marketing", "Sales", "Design", "HR"];

  return (
    <Table
      kind="editable"
      colVisibility={["*", "*", "*", "*", "*"]}
      colLayout={{
        s: "1fr 1fr 1fr min-content",
        m: "1fr 1fr 1fr 1fr 1fr",
        l: "1fr 1fr 1fr 1fr 1fr",
      }}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name (Input)</Table.HeaderCell>
          <Table.HeaderCell>Email (Input)</Table.HeaderCell>
          <Table.HeaderCell>Department (Autocomplete)</Table.HeaderCell>
          <Table.HeaderCell>Start Date (DateInput)</Table.HeaderCell>
          <Table.HeaderCell>Status (Select)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>
              <TableInput
                label="Employee name"
                value={row.name}
                onChange={(event) =>
                  updateData(row.id, "name", event.target.value)
                }
                placeholder="Enter name"
              />
            </Table.Cell>
            <Table.Cell>
              <TableInput
                label="Email address"
                value={row.email}
                onChange={(event) =>
                  updateData(row.id, "email", event.target.value)
                }
                placeholder="Enter email"
                type="email"
              />
            </Table.Cell>
            <Table.Cell>
              <TableAutocomplete
                label="Department"
                inputValue={row.department}
                onInputChange={(value) =>
                  updateData(row.id, "department", value)
                }
                onChange={(value) => updateData(row.id, "department", value)}
              >
                {departments.map((dept) => (
                  <TableAutocomplete.Item key={dept} value={dept}>
                    {dept}
                  </TableAutocomplete.Item>
                ))}
              </TableAutocomplete>
            </Table.Cell>
            <Table.Cell>
              <TableDateInput
                label="Start date"
                value={row.startDate}
                onChange={(value) => updateData(row.id, "startDate", value)}
                placeholder="YYYY-MM-DD"
              />
            </Table.Cell>
            <Table.Cell>
              <TableSelect
                id={`status-${row.id}`}
                label="Status"
                value={row.status}
                onChange={(value) => updateData(row.id, "status", value)}
              >
                <TableSelect.Item value="Active">Active</TableSelect.Item>
                <TableSelect.Item value="Inactive">Inactive</TableSelect.Item>
                <TableSelect.Item value="Pending">Pending</TableSelect.Item>
              </TableSelect>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
AllEditableInputTypes.parameters = {
  docs: {
    description: {
      story:
        "This table demonstrates all available editable input types: `TableInput` for text fields, `TableAutocomplete` for searchable selections, `TableDateInput` for date picking, and `TableSelect` for dropdown selections. The table includes rows with partially filled data to show empty state behavior.",
    },
  },
};

export default {
  title: "Components/Table",
  component: Table,
};
