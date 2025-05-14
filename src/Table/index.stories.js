/* eslint-disable jsx-a11y/anchor-is-valid,react/jsx-key */
import React from "react";
import Table from "./";

export const Overview = () => (
  <Table colVisibility={[...Array(3).fill("*")]}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Enzo</Table.Cell>
        <Table.Cell>$12.45</Table.Cell>
        <Table.Cell>Orange</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Basil</Table.Cell>
        <Table.Cell>$87.23</Table.Cell>
        <Table.Cell>White</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Sammy - longer intrinsic width</Table.Cell>
        <Table.Cell>$12.45</Table.Cell>
        <Table.Cell>Yellow</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default {
  title: "Components/Table",
  component: Table,
};
