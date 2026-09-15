import React, { useState } from "react";
import { expect, screen, waitFor } from "storybook/test";
import Dialog from "./";
import Button from "../Button";
import Popover from "../Popover";
import Alert from "../Alert";

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
  children: <div>Dialog content</div>,
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

/**
 * Stateful wrapper used by interaction stories, since `Dialog` is a
 * portaled component controlled by the `isOpen` prop.
 */
const InteractiveDialog = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog {...args} isOpen={isOpen} onUserDismiss={() => setIsOpen(false)}>
        <div>Dialog content</div>
      </Dialog>
    </>
  );
};

/**
 * Interaction test that opens the Dialog so Chromatic can snapshot the
 * open modal. The Dialog renders in a portal, so its content is queried
 * from the document via `screen`.
 */
export const Opens = {
  name: "Interaction: Opens on click",
  render: () => <InteractiveDialog title="Confirm action" />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /open dialog/i }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());
    expect(screen.getByText("Confirm action")).toBeVisible();
  },
};

/**
 * Interaction test verifying the close (X) button dismisses the Dialog.
 */
export const ClosesViaButton = {
  name: "Interaction: Closes via close button",
  render: () => <InteractiveDialog title="Confirm action" />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /open dialog/i }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());

    await userEvent.click(screen.getByRole("button", { name: /^close$/i }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  },
};

/**
 * Interaction test verifying the Escape key dismisses the Dialog.
 */
export const ClosesViaEscape = {
  name: "Interaction: Closes on Escape key",
  render: () => <InteractiveDialog title="Confirm action" />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /open dialog/i }));
    await waitFor(() => expect(screen.getByRole("dialog")).toBeVisible());

    await userEvent.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  },
};

export const UsingWithState = InteractiveTemplate.bind({});
UsingWithState.args = {
  title: "Dialog controlled by external state",
  children: <div>Dialog content</div>,
};
UsingWithState.parameters = {
  docs: {
    description: {
      story:
        "The `Dialog` will render open our closed based on the `isOpen` prop passed in. Use the `onUserDismiss` callback to determine when to change the value of `isOpen`.",
    },
  },
};
export const BannerType = InteractiveTemplate.bind({});
BannerType.args = {
  title:
    "This shows how the `title` will look like for the banner header style",
  headerStyle: "banner",
  width: "800px",
  children: (
    <>
      <h4 className="margin--top--l">Lorem ipsum</h4>
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
BannerType.parameters = {
  docs: {
    description: {
      story:
        "Works the same way as above, but its title is a banner instead. Note that the width might need to be set to be larger than the default depending on the length of title.",
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
      <input type="text" />
      <p>
        Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
        eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
        voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui
        sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis
        quia?
      </p>
      <p>
        Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
        eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
        voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui
        sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis
        quia?
      </p>
      <p>
        Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
        eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
        voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt qui
        sequi placeat. Non voluptatem molestiae et explicabo voluptas ut facilis
        quia?
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
        "The `Dialog` will grow in height to fit content until it reaches edges of the viewport, at which point, the content area will become scrollable and a gradient border appears between the footer and content area.",
    },
  },
};

export const FocusManagement = InteractiveTemplate.bind({});
FocusManagement.args = {
  title: "Tab through this Dialog",
  children: (
    <div>
      Focus will be trapped to{" "}
      <a target="blank" href="http://narmi.com">
        focusable elements
      </a>{" "}
      within the Dialog. Background content is marked as hidden via ARIA
      attributes.
    </div>
  ),
};
FocusManagement.parameters = {
  docs: {
    description: {
      story:
        "For accessibility purposes, only elements within the Dialog can be focused while the Dialog is open.",
    },
  },
};

export const PopoverDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <style>
        {`
        .popover-content > div:hover {
          cursor: pointer;
          background-color: rgba(26, 67, 56, 0.05);
        }
        `}
      </style>
      <Popover
        closeOnContentClick
        content={
          <div className="popover-content">
            <div
              className="padding--all--s"
              tabIndex="0"
              role="button"
              onClick={() => {
                setIsDialogOpen(true);
              }}
              onKeyDown={() => {}}
            >
              Open Modal
            </div>
            <div
              className="padding--all--s"
              tabIndex="0"
              role="button"
              onClick={() => {}}
              onKeyDown={() => {}}
            >
              Does Nothing
            </div>
          </div>
        }
      >
        <span className="narmi-icon-more-horizontal"></span>
      </Popover>
      <Dialog
        isOpen={isDialogOpen}
        title={`Remove account`}
        onUserDismiss={() => {
          setIsDialogOpen(false);
        }}
      >
        <Button
          onClick={() => {
            setIsDialogOpen(false);
          }}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};

export const WithNotification = InteractiveTemplate.bind({});
WithNotification.args = {
  title: "Dialog controlled by external state",
  children: <div>Dialog content</div>,
  notification: (
    <Alert kind="error" isActive={true}>
      This alert is pinned to the top of the dialog
    </Alert>
  ),
};

export default {
  title: "Components/Dialog",
  component: Dialog,
};
