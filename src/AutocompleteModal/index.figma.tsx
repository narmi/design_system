import React from "react";
import figma from "@figma/code-connect";
import AutocompleteModal from "./index";
import Button from "../Button";
import type { IconName } from "../types/Icon.types";

figma.connect(
  AutocompleteModal,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=929%3A4410",
  {
    props: {
      trigger: <span>Click me to open modal</span>,
      footerContent: figma.enum("Style", {
        "With Action": (
          <Button
            kind="primary"
            label="Action Button"
            startIcon={"plus" as IconName}
          />
        ),
        "With Search Value": undefined,
      }),
    },
    example: (props) => (
      <AutocompleteModal inputLabel="Search" {...props}>
        <AutocompleteModal.Item value="0" searchValue="Unassigned">
          Item content
        </AutocompleteModal.Item>
        <AutocompleteModal.Item value="1" searchValue="Chris">
          Item content
        </AutocompleteModal.Item>
        <AutocompleteModal.Item value="2" searchValue="Will">
          Item content
        </AutocompleteModal.Item>
      </AutocompleteModal>
    ),
  },
);
