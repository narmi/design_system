import React, { useState } from "react";
import Drawer from "./";
import Button from "../Button";
import Popover from "../Popover";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isDialogOpen}
        onUserDismiss={() => setIsDialogOpen(false)}
      >
        {args.children}
      </Drawer>
    </>
  );
};

const InteractiveTemplate = (args) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
          setIsDialogOpen(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isDialogOpen}
        onUserDismiss={() => setIsDialogOpen(false)}
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
        <Button type="secondary">Click to show Popover</Button>
      </Popover>
    </div>
  ),
};

export default {
  title: "Components/Drawer",
  component: Drawer,
  parameters: { actions: { argTypesRegex: null } },
};
