/**
 * TO VIEW THIS STORY LOCALLY:
 * change the file name from `.stories-hidden.js` to `.stories.js`.
 *
 * This component is still in development, so we can't publish the docs publicly yet.
 */

/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Table from "./";
import MenuButton from "../MenuButton";
import Checkbox from "../Checkbox";

export const Overview = () => (
  <div className="padding--all bgColor--blueGrey">
    <div className="margin--bottom--xl">
      <Table
        colVisibility={["*", "m", "*", "l"]}
        colLayout={{
          s: "invalid lol", // falls back to even 1fr cols
          m: "repeat(3, 1fr)",
          l: "2fr max-content 1fr 1fr",
        }}
      >
        <Table.Body>
          <Table.Row>
            <Table.Cell>Enzo</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$142.35</code>
            </Table.Cell>
            <Table.Cell>
              <strong>Orange</strong>
            </Table.Cell>
            <Table.Cell>Long</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Basil</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$132.99</code>
            </Table.Cell>
            <Table.Cell>
              <strong>White</strong>
            </Table.Cell>
            <Table.Cell>Compact</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cookie</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$249.15</code>
            </Table.Cell>
            <Table.Cell>
              <strong>Tan</strong>
            </Table.Cell>
            <Table.Cell>Wide</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    <div className="margin--bottom--xl">
      <Table
        colVisibility={Array(3).fill("*")}
        colLayout={{
          s: "1fr max-content max-content",
          m: "1fr max-content max-content",
          l: "minmax(300px, 1fr) minmax(max-content, 1fr) max-content",
        }}
      >
        <Table.Body>
          <Table.Row
            onRowClick={() => {
              alert("Enzo");
            }}
          >
            <Table.Cell>Enzo</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$142.35</code>
            </Table.Cell>
            <Table.Cell>
              <strong>Orange</strong>
            </Table.Cell>
          </Table.Row>
          <Table.Row
            onRowClick={() => {
              alert("Basil");
            }}
          >
            <Table.Cell>Basil</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$132.99</code>
            </Table.Cell>
            <Table.Cell>
              <strong>White</strong>
            </Table.Cell>
          </Table.Row>
          <Table.Row
            onRowClick={() => {
              alert("Cookie");
            }}
          >
            <Table.Cell>Cookie</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$249.15</code>
            </Table.Cell>
            <Table.Cell>
              <strong>Tan</strong>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    <div className="margin--bottom--xl">
      <h4 className="padding--bottom--xs">
        Table where button is hidden on mobile
      </h4>
      <Table
        colVisibility={[
          "*", // Cat Name
          "*", // Amount
          "m", // Color
          "*", // Shape
          "m", // Edit button
        ]}
        colLayout={{
          // The number of column tracks you define should match
          // the number of columns visible at the given breakpoint
          s: "2fr max-content 1fr", // [Cat Name] [Amount] [Shape]
          m: "repeat(4, 1fr) min-content", // [Cat Name (1)] [Amount (2)] [Color (3)] [Shape (4)] [Edit]
          l: "repeat(4, 1fr) min-content", // [Cat Name (1)] [Amount (2)] [Color (3)] [Shape (4)] [Edit]
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Cat Name</Table.HeaderCell>
            <Table.HeaderCell
              onClick={() => {
                alert("sort");
              }}
            >
              Amount
            </Table.HeaderCell>
            <Table.HeaderCell>Color</Table.HeaderCell>
            <Table.HeaderCell>Shape</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Enzo</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$142.35</code>
            </Table.Cell>
            <Table.Cell>
              <strong>Orange</strong>
            </Table.Cell>
            <Table.Cell>Long</Table.Cell>
            <Table.Cell>
              <button>Edit</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Basil</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$132.99</code>
            </Table.Cell>
            <Table.Cell>
              <strong>White</strong>
            </Table.Cell>
            <Table.Cell>Compact</Table.Cell>
            <Table.Cell>
              <button>Edit</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cookie</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$249.15</code>
            </Table.Cell>
            <Table.Cell>
              <strong>Tan</strong>
            </Table.Cell>
            <Table.Cell>Wide</Table.Cell>
            <Table.Cell>
              <button>Edit</button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </div>
);

export const Specimen = () => (
  <Table
    colVisibility={["m", "*", "*", "*", "m", "m", "m", "l", "l", "l", "l", "m"]}
    colLayout={{
      s: "repeat(3, 1fr)",
      m: "min-content repeat(6, 1fr) min-content",
      l: "min-content repeat(10, 1fr) min-content",
    }}
  >
    <Table.Body>
      {Array(16)
        .fill(true)
        .map((_, i) => (
          <Table.Row key={i} onRowClick={() => {}}>
            <Table.Cell>
              <Checkbox kind="table" label="Select Row" name={`row-${i}`} />
            </Table.Cell>
            {Array(10)
              .fill("Content")
              .map((v) => (
                <Table.Cell>{v}</Table.Cell>
              ))}
            <Table.Cell>
              <MenuButton label="Row actions">
                <MenuButton.Item value="edit" label="Edit" />
                <MenuButton.Item value="delete" label="Delete" />
                <MenuButton.Item value="report" label="Report" />
              </MenuButton>
            </Table.Cell>
          </Table.Row>
        ))}
    </Table.Body>
  </Table>
);

export default {
  title: "Components/Table",
  component: Table,
};
