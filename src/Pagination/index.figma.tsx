import React from "react";
import Pagination from "./index";
import figma from "@figma/code-connect";

figma.connect(
  Pagination,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=427%3A11732",
  {
    props: {
      selectedPage: figma.enum("Style", {
        Default: 1,
        DefaultSmall: 1,
        End: 7,
        Middle: 5,
        Start: 3,
      }),
      totalPages: figma.enum("Style", {
        Default: 10,
        DefaultSmall: 3,
        End: 10,
        Middle: 10,
        Start: 10,
      }),
    },
    example: (props) => <Pagination {...props} />,
  },
);
