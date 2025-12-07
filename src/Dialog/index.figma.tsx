import React from "react";
import figma from "@figma/code-connect";
import Dialog from "./index";
import Row from "../Row";
import Button from "../Button";
import SeparatorList from "../SeparatorList";
import type { IconName } from "../types/Icon.types";

// "Modal Header" example
figma.connect(
  Dialog,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=380-4019&m=dev",
  {
    props: {
      headerStyle: figma.enum("Header Style", {
        Default: "plain",
        Banner: "banner",
      }),
      footer: figma.children("*"),
    },
    example: ({ headerStyle }) => (
      <Dialog
        isOpen={true}
        title="Dialog Title"
        headerStyle={headerStyle}
        onUserDismiss={() => {}}
      >
        Dialog Content.
      </Dialog>
    ),
  },
);

// "Modal Footer" example
figma.connect(
  Dialog,
  "https://www.figma.com/design/nCjdO761StnkwNZHFmcrUu/Narmi-Design-System-v2?node-id=380-4016&m=dev",
  {
    props: {
      children: figma.children("*"),
      footer: figma.enum("Type", {
        Buttons: (
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
        "3 Buttons": (
          <Row>
            <Row.Item>
              <Button
                kind="secondary"
                startIcon={"close" as IconName}
                label="Button"
              />
            </Row.Item>
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
        "Buttons / T&C's": (
          <Row justifyContent="end">
            <Row.Item>
              <SeparatorList
                separator="・"
                items={[
                  <Button kind="plain" label="Terms" />,
                  <Button kind="plain" label="Privacy" />,
                ]}
              />
            </Row.Item>
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
      }),
    },
    example: ({ footer }) => (
      <Dialog
        isOpen={true}
        title="Dialog Title"
        footer={footer}
        onUserDismiss={() => {}}
      >
        Dialog Content
      </Dialog>
    ),
  },
);
