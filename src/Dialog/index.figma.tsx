import React from "react";
import Dialog from "./index";
import figma from "@figma/code-connect";

figma.connect(
  Dialog,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=380-4091&m=dev",
  {
    props: {
      // The best mapping of the Figma "Modal header"
      // component we can do with existing Dialog props
      headerProps: figma.nestedProps("Modal header", {
        headerStyle: figma.enum("Type", {
          Default: "bordered",
          "Icon & helper text": "plain",
        }),
        title: figma.textContent("Modal header"),
      }),
      footer: figma.instance("Modal footer"),
      children: figma.children("*"),
    },
    example: ({ headerProps, footer, children }) => (
      <Dialog
        isOpen={true}
        title={headerProps.title}
        headerStyle={headerProps.headerStyle}
        footer={children}
        onUserDismiss={() => {}}
      >
        {footer}
      </Dialog>
    ),
  },
);
