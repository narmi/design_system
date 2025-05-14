/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Table from "./";

export const Overview = () => (
  <Table
    colVisibility={["*", "m", "*", "m"]}
    colLayout={{
      s: () => "2fr 1fr",
      m: (cols) => `repeat(${cols}, 1fr)`,
    }}
  >
    <Table.Body>
      <Table.Row>
        <Table.Cell>Enzo</Table.Cell>
        <Table.Cell>$12.45</Table.Cell>
        <Table.Cell>Orange</Table.Cell>
        <Table.Cell>Long</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Basil</Table.Cell>
        <Table.Cell>$87.23</Table.Cell>
        <Table.Cell>White</Table.Cell>
        <Table.Cell>Compact</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cookie - longer intrinsic width</Table.Cell>
        <Table.Cell>$12.45</Table.Cell>
        <Table.Cell>Tan</Table.Cell>
        <Table.Cell>Wide</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default {
  title: "Components/Table",
  component: Table,
};
