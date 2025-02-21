import React, { useState } from "react";
import Drawer from "./";
import Button from "../Button";
import Popover from "../Popover";
import Dialog from "../Dialog";
import Row from "../Row";
import ContextMenu from "../ContextMenu";
import MenuButton from "../MenuButton";
import Select from "../Select";

const CONTENTS = [
  <>
    <h2>Title #1</h2>
    <div>Content #1 of 4</div>
  </>,
  <>
    <h2>Title #2</h2>
    <div>Content #2 of 4</div>
  </>,
  <>
    <h2>Title #3</h2>
    <div>Content #3 of 4</div>
  </>,
  <>
    <h2>Title #4</h2>
    <div>Content #4 of 4</div>
  </>,
];

const BaseTemplate = (args) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isDrawerOpen}
        onUserDismiss={() => setIsDrawerOpen(false)}
      >
        {args.children}
      </Drawer>
    </>
  );
};

const InteractiveTemplate = (args) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [contentIdxToDisplay, setContentIdxToDisplay] = useState(0);

  const onPrev = () => {
    if (contentIdxToDisplay > 0)
      return () => setContentIdxToDisplay(contentIdxToDisplay - 1);
    return null;
  };
  const onNext = () => {
    if (contentIdxToDisplay < CONTENTS.length - 1)
      return () => setContentIdxToDisplay(contentIdxToDisplay + 1);
    return null;
  };

  return (
    <>
      <Button
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isDrawerOpen}
        onUserDismiss={() => setIsDrawerOpen(false)}
        onNext={onNext()}
        onPrev={onPrev()}
      >
        {CONTENTS[contentIdxToDisplay]}
      </Drawer>
    </>
  );
};

export const Overview = InteractiveTemplate.bind({});

export const WithNavigation = InteractiveTemplate.bind({});

WithNavigation.parameters = {
  docs: {
    description: {
      story:
        "The navigation buttons become disabled if the respective `onNext` or `onPrev` props are null. ",
    },
  },
};

export const ScrollingContentWithoutNavigation = BaseTemplate.bind({});
ScrollingContentWithoutNavigation.args = {
  showControls: false,
  children: (
    <>
      <h3>
        This content area will become scrollable whenever the content overflows
        its container
      </h3>
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
ScrollingContentWithoutNavigation.parameters = {
  docs: {
    description: {
      story:
        "The Drawer will render open or closed based on the isOpen prop passed in. Use the onUserDismiss callback to determine when to change the value of isOpen.",
    },
  },
};

export const WithoutClose = BaseTemplate.bind({});
WithoutClose.args = {
  showClose: false,
};
WithoutClose.parameters = {
  docs: {
    description: {
      story:
        "The Drawer will hide the close button when `showClose` is set to false.",
    },
  },
};

export const ContentWithPopover = BaseTemplate.bind({});
ContentWithPopover.args = {
  showControls: false,
  children: (
    <div
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Popover content={<div className="padding--all--m">📦 Any content</div>}>
        <Button kind="secondary">Click to show Popover</Button>
      </Popover>
    </div>
  ),
};

export const ContentWithDialog = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogWithContextMenuOpen, setIsDialogWithContextMenuOpen] =
    useState(false);
  const [isDialogWithSelectOpen, setIsDialogWithSelectOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsDrawerOpen(true);
        }}
        label="Open Drawer"
      />
      <Drawer
        isOpen={isDrawerOpen}
        onUserDismiss={() => setIsDrawerOpen(false)}
      >
        <div style={{ marginBottom: "var(--space-l)" }}>
          <Button
            label="Open Dialog with ContextMenu"
            onClick={() => {
              setIsDialogWithContextMenuOpen(true);
            }}
          />
        </div>

        <Button
          label="Open Dialog with Select"
          onClick={() => {
            setIsDialogWithSelectOpen(true);
          }}
        />

        <Dialog
          title="Dialog launched from a Drawer"
          isOpen={isDialogWithContextMenuOpen}
          onUserDismiss={() => {
            setIsDialogWithContextMenuOpen(false);
          }}
        >
          <p>Dialog with ContextMenu overlapping a Drawer</p>
          <ContextMenu
            menuItems={[
              <MenuButton.Item
                key="edit"
                id="random-edit-uuid"
                label="Edit"
                onSelect={() => {}}
                startIcon="edit-2"
              />,
              <MenuButton.Item
                key="screenshot"
                id="screenshot"
                label="Screenshot"
                onSelect={() => {}}
                startIcon="camera"
              />,
            ]}
          >
            <h1
              style={{
                border: "1px dashed black",
              }}
            >
              Context Menu
            </h1>
          </ContextMenu>
        </Dialog>
        <Dialog
          title="Dialog launched from a Drawer"
          isOpen={isDialogWithSelectOpen}
          onUserDismiss={() => {
            setIsDialogWithSelectOpen(false);
          }}
        >
          <p>Dialog with Select overlapping a Drawer</p>
          <Select id="overviewStory" label="Favorite icon">
            <Select.Item value="coffee">
              <span className="narmi-icon-coffee padding--right--xs" /> Coffee
            </Select.Item>
            <Select.Item value="film">
              <span className="narmi-icon-film padding--right--xs" /> Film
            </Select.Item>
            <Select.Item value="truck">
              <span className="narmi-icon-truck padding--right--xs" /> Truck
            </Select.Item>
            <Select.Item value="blob">
              <span className="narmi-icon-blob padding--right--xs" /> Blob
            </Select.Item>
          </Select>
        </Dialog>
      </Drawer>
    </>
  );
};

export const WithFooter = (args) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
      <Drawer
        isOpen={isDrawerOpen}
        onUserDismiss={() => setIsDrawerOpen(false)}
        footer={
          <Row alignItems="center" justifyContent="space-between">
            <Row.Item shrink>
              <Button kind="negative" label="Cancel" />
            </Row.Item>
            <Row.Item shrink>
              <Button kind="primary" label="Save" />
            </Row.Item>
          </Row>
        }
        {...args}
      >
        <h3>
          This content area will become scrollable whenever the content
          overflows its container
        </h3>
        <p>
          Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est
          ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo
          nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero
          est quidem consequatur At voluptatum debitis et laborum ducimus aut
          eaque eligendi.
        </p>
        <p>
          Ut alias eligendi ut dolorem eius rem consectetur ullam et natus
          nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum
          qui quas sapiente in molestiae accusantium.
        </p>
        <p>
          Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
          eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
          voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt
          qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut
          facilis quia?
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est
          ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo
          nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero
          est quidem consequatur At voluptatum debitis et laborum ducimus aut
          eaque eligendi.
        </p>
        <p>
          Ut alias eligendi ut dolorem eius rem consectetur ullam et natus
          nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum
          qui quas sapiente in molestiae accusantium.
        </p>
        <p>
          Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
          eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
          voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt
          qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut
          facilis quia?
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea fugiat dolore quo possimus adipisci est
          ipsum libero ab dolores minima ut facere rerum? Aut vitae sint ut nemo
          nisi ut tempore voluptas. Eum adipisci quasi eum praesentium libero
          est quidem consequatur At voluptatum debitis et laborum ducimus aut
          eaque eligendi.
        </p>
        <p>
          Ut alias eligendi ut dolorem eius rem consectetur ullam et natus
          nihil. Et maiores dolores hic nesciunt quibusdam ut laboriosam earum
          qui quas sapiente in molestiae accusantium.
        </p>
        <p>
          Ut ducimus amet quo deleniti repellendus in illo eaque 33 nihil quis
          eveniet deleniti qui sapiente quia At repellendus veritatis. Qui
          voluptatem culpa et fugit debitis ut fugit quidem sit omnis deserunt
          qui sequi placeat. Non voluptatem molestiae et explicabo voluptas ut
          facilis quia?
        </p>
      </Drawer>
    </>
  );
};

export const LazyLoadedContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
      <Drawer
        isOpen={isDrawerOpen}
        onUserDismiss={() => setIsDrawerOpen(false)}
      >
        {({ isVisible }) => {
          if (!isVisible) {
            return null;
          }
          return (
            <div>
              <h2>Lazy Loaded Content</h2>
              <p>Content that was loaded after the Drawer was opened</p>
            </div>
          );
        }}
      </Drawer>
    </>
  );
};
LazyLoadedContent.parameters = {
  docs: {
    description: {
      story:
        "The Drawer component accepts a render prop for its children with argument `isVisible`. This can be used to lazy load content or to render content conditionally.",
    },
  },
};

export default {
  title: "Components/Drawer",
  component: Drawer,
  parameters: { actions: { argTypesRegex: null } },
};
