import React from "react";
import SplitButton from "./index";
import figma from "@figma/code-connect";

figma.connect(
  SplitButton,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=356-22006&m=dev",
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
      startIcon: figma.boolean("Show Start Icon", {
        true: figma.instance<string>("Start Icon"),
        false: undefined,
      }),
      endIcon: figma.boolean("Show End Icon", {
        true: figma.instance<string>("End Icon"),
        false: undefined,
      }),
      label: figma.string("Button Text"),
    },
    example: ({ disabled, kind, size, startIcon, endIcon, label }) => (
      <SplitButton
        disabled={disabled}
        kind={kind}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        label={label}
      >
        {/**
         * SplitButton also provides a SplitButton.Poppover
         * if the popover contains arbitrary content instead of a menu.
         */}
        <SplitButton.Menu>
          <SplitButton.MenuItem label="Edit" onSelect={() => {}} />
          <SplitButton.MenuItem label="Delete" onSelect={() => {}} />
        </SplitButton.Menu>
      </SplitButton>
    ),
  },
);
