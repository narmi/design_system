import React from "react";
import ContentCard from "./index";
import figma from "@figma/code-connect";

figma.connect(
  ContentCard,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=951-4727&m=dev",
  {
    props: {
      children: figma.children("*"),
    },
    example: ({ children }) => <ContentCard>{children}</ContentCard>,
  },
);
