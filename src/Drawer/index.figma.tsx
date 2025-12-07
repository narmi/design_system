import React from "react";
import figma from "@figma/code-connect";
import Drawer from "./index";
import Row from "../Row";
import Button from "../Button";
import type { IconName } from "../types/Icon.types";

figma.connect(
  Drawer,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=509%3A4536",
  {
    props: {
      footer: figma.boolean("Show Footer", {
        true: (
          <Row justifyContent="end">
            <Row.Item shrink>
              <Button
                kind="secondary"
                startIcon={"close" as IconName}
                label="Close"
              />
            </Row.Item>
            <Row.Item shrink>
              <Button kind="primary" label="Confirm" />
            </Row.Item>
          </Row>
        ),
        false: undefined,
      }),
      showClose: figma.boolean("Show Close"),
    },
    example: (props) => (
      <Drawer isOpen={true} {...props}>
        Drawer Content
      </Drawer>
    ),
  },
);
