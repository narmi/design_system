import React from "react";
import Button from "./index";
import figma from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=339-2986&m=dev",
  {
    props: {
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      kind: figma.enum("Color", {
        Brand: "primary",
        Primary: "primary",
        Secondary: "secondary",
        Tertiary: "tonal",
      }),
      size: figma.enum("Size", {
        s: "xs",
        base: "s",
        l: "m",
      }),
      startIcon: figma.boolean("Show start icon", {
        true: figma.instance<string>("Start icon"),
        false: undefined,
      }),
      endIcon: figma.boolean("Show end icon", {
        true: figma.instance<string>("End icon"),
        false: undefined,
      }),
      label: figma.boolean("Show text", {
        true: figma.string("Button text"),
        false: undefined,
      }),
    },
    example: ({ disabled, kind, size, startIcon, endIcon, label }) => (
      <Button
        disabled={disabled}
        kind={kind}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        label={label}
      />
    ),
  },
);
