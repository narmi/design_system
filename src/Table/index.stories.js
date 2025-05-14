/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Table from "./";

export const Overview = () => (
  <>
    <div className="margin--bottom--xl">
      <Table
        colVisibility={["*", "m", "*", "l"]}
        colLayout={{
          s: "2fr 1fr",
          m: "1fr 1fr 1fr",
          l: "300px min-content 1fr 1fr",
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
        colVisibility={["*", "*", "*"]}
        colLayout={{
          s: "1fr min-content 1fr",
          m: "minmax(500px, 600px) 1fr 1fr",
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
          </Table.Row>
          <Table.Row>
            <Table.Cell>Basil</Table.Cell>
            <Table.Cell>
              <code className="fontColor--azul">$132.99</code>
            </Table.Cell>
            <Table.Cell>
              <strong>White</strong>
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
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </>
);

export default {
  title: "Components/Table",
  component: Table,
};
