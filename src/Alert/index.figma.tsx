import React from "react";
import Alert from "./index";
import figma from "@figma/code-connect";
import type { IconName } from "../types/Icon.types";

figma.connect(
  Alert,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=336-466&m=dev",
  {
    props: {
      // In code, we only allow control over the left icon
      icon: figma.boolean("Show left icon", {
        true: figma.instance("Left icon style"),
        false: undefined,
      }),

      // In code, it's not a "right icon"; it's a close button.
      isDismissable: figma.boolean("Show right icon"),

      kind: figma.enum("Color", {
        Success: "success",
        Warning: "warn",
        Default: "info",
        Danger: "error",
      }),
    },
    example: ({ icon, kind, isDismissable }) => (
      // Alert takes any JSX children to compose content
      <Alert icon={icon} kind={kind} isDismissable={isDismissable} />
    ),
  },
);
