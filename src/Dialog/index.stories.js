import React, { useState } from "react";
import Dialog from "./";
import Button from "../Button";
import { DialogLayout } from "../../.storybook/Layouts";

const BaseTemplate = (args) => <Dialog {...args} />;
const InteractiveTemplate = (args) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        {...args}
        isOpen={isDialogOpen}
        onUserDismiss={() => {
          setIsDialogOpen(false);
        }}
        footer={
          <div style={{ textAlign: "right" }}>
            <Button
              onClick={() => {
                setIsDialogOpen(false);
              }}
            >
              Close Dialog
            </Button>
          </div>
        }
      />
    </>
  );
};

export const Overview = BaseTemplate.bind({});
Overview.args = {
  isOpen: false,
  title: "Dialog title",
  children: <p>Dialog content</p>,
  footer: (
    <div style={{ textAlign: "right" }}>
      <Button>Accept</Button>
    </div>
  ),
  headerStyle: "bordered",
  onUserDismiss: () => {},
  width: "500px",
};
Overview.argTypes = {
  footer: { control: false }, // hide control for `footer` prop
};

export const UsingWithState = InteractiveTemplate.bind({});
UsingWithState.args = {
  title: "Dialog controlled by external state",
  children: <p>Dialog content</p>,
};
UsingWithState.parameters = {
  docs: {
    description: {
      story:
        "The `Dialog` will render open our closed based on the `isOpen` prop passed in. Use the `onUserDismiss` callback to determine when to change the value of `isOpen`.",
    },
  },
};

export const ScrollingContent = InteractiveTemplate.bind({});
ScrollingContent.args = {
  title: "Resize your window",
  children: (
    <>
      <p>
        This content area will become scrollable whenever the content overflows
        its container.
      </p>
      <p>
        Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est
        ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo
        nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero est
        quidem consequatur At voluptatum debitis et laborum ducimus aut eaque
        eligendi.
      </p>
      <p>
        Ut alias eligendi ut dolorem eius rem consectetur ullam et natus nihil.
        Et maiores dolores hic nesciunt quibusdam ut laboriosam earum qui quas
        sapiente in molestiae accusantium.
      </p>
      <p>
        Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
        eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
        voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui
        sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis
        quia?
      </p>
    </>
  ),
};
ScrollingContent.parameters = {
  docs: {
    description: {
      story:
        "The `Dialog` will grow in height to fit content until it reaches edges of the viewport, at which point, the content area will become scrollable and a gradient border appears betwen the footer and content area.",
    },
  },
};

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    children: { control: false },
    onUserDismiss: { action: "user dismiss" },
  },
  parameters: {
    docs: {
      page: DialogLayout,
    },
  },
};
