import React from "react";
import CollapsibleCard from "./index";
import figma from "@figma/code-connect";

figma.connect(
  CollapsibleCard,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=965%3A1859",
  {
    props: {
      subtitle: figma.boolean("Show Description", {
        true: figma.string("Description"),
        false: undefined,
      }),
      title: figma.boolean("Show Title", {
        true: figma.string("Title"),
        false: "",
      }),
      statusText: figma.enum("state", {
        default: undefined,
        hover: undefined,
        disabled: false,
        active: undefined,
        "Status Text": <>Accepts any DOM node</>,
      }),
      isDisabled: figma.enum("state", {
        default: false,
        hover: false,
        disabled: true,
        active: false,
        "Status Text": false,
      }),
      isOpen: figma.enum("state", {
        default: false,
        hover: false,
        disabled: false,
        active: true,
        "Status Text": false,
      }),
    },
    example: (props) => (
      // You may also render custom header content
      // using the `renderHeader` prop.
      <CollapsibleCard {...props}>Collapsible Card Content</CollapsibleCard>
    ),
  },
);
