import React from "react";
import Avatar from "./index";
import figma from "@figma/code-connect";

figma.connect(
  Avatar,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=356%3A20731",
  {
    props: {
      size: figma.enum("Size", {
        xs: "xs",
        s: "s",
        m: "m",
      }),
      kind: figma.enum("Kind", {
        Primary: "primary",
        Tonal: "tonal",
      }),
      initials: figma.enum("Kind", {
        Primary: figma.string("Initials"),
        Tonal: figma.string("Initials"),
      }),
      imgurl: figma.enum("Kind", {
        Image:
          "https://media.licdn.com/dms/image/v2/D4E0BAQHnVTkZjhvlQg/company-logo_200_200/company-logo_200_200/0/1680295112021?e=2147483647&v=beta&t=-4A2TRSHuDiBT_anhoqTULvjXfzVh7_vZApmdXUVzsc",
      }),
    },
    example: (props) => (
      <Avatar
        label="Avatar"
        size={props.size}
        kind={props.kind}
        initials={props.initials}
        imgurl={props.imgurl}
      />
    ),
  },
);
