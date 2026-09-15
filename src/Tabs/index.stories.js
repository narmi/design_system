import React, { useState } from "react";
import PropTypes from "prop-types";
import { expect, waitFor } from "storybook/test";
import Tabs from "./";
import TabsList from "./TabsList";
import TabsPanel from "./TabsPanel";
import TabsTab from "./TabsTab";
import Count from "../Count";

const Template = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
      <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="snowLeopard">
      <div className="padding--all--s">️❄️🐆</div>
    </Tabs.Panel>
  </Tabs>
);

export const Overview = Template.bind({});
Overview.args = {
  onTabChange: () => {},
};

export const DefaultSelectedTab = Template.bind({});
DefaultSelectedTab.args = {
  defaultSelectedIndex: 1,
};

export const ResponsiveTabs = (args) => (
  <div
    style={{
      display: "flex",
      width: 200,
      flexDirection: "column",
    }}
  >
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
        <Tabs.Tab label="Bird" tabId="bird" />
        <Tabs.Tab label="Cat" tabId="cat" />
        <Tabs.Tab label="Dog" tabId="dog" />
        <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
        <Tabs.Tab
          label="My absolute favorite animal of all time"
          tabId="penguin"
        />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="bird">
        <div className="padding--all--s">🐦🐦🐦</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="cat">
        <div className="padding--all--s">🐈🐈🐈</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="dog">
        <div className="padding--all--s">🐕🐕🐕</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="snowLeopard">
        <div className="padding--all--s">️❄️🐆</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="penguin">
        <div className="padding--all--s">️🐧🐧🐧</div>
      </Tabs.Panel>
    </Tabs>
  </div>
);

// Shared markup for the overflow/arrow-scroll stories below. Reproduces the
// Manage Users / Limits scenario: a fixed-width container (so overflow is
// deterministic) holding default-variant tabs that end with a long label.
const LimitsTabs = ({ width = 360, ...args }) => (
  <div style={{ display: "flex", width, flexDirection: "column" }}>
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab label="ACH transfer" tabId="achTransfer" />
        <Tabs.Tab label="ACH send" tabId="achSend" />
        <Tabs.Tab label="Instant" tabId="instant" />
        <Tabs.Tab label="Domestic wires" tabId="domesticWires" />
        <Tabs.Tab label="International wires" tabId="internationalWires" />
      </Tabs.List>
      <Tabs.Panel tabId="achTransfer">
        <div className="padding--all--s">ACH transfer limits</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="achSend">
        <div className="padding--all--s">ACH send limits</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="instant">
        <div className="padding--all--s">Instant limits</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="domesticWires">
        <div className="padding--all--s">Domestic wire limits</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="internationalWires">
        <div className="padding--all--s">International wire limits</div>
      </Tabs.Panel>
    </Tabs>
  </div>
);

LimitsTabs.propTypes = {
  /** Width of the fixed-size container the tabs are rendered into */
  width: PropTypes.number,
};

export const ResponsiveTabsWithArrowScroll = (args) => <LimitsTabs {...args} />;
ResponsiveTabsWithArrowScroll.parameters = {
  docs: {
    description: {
      story:
        "Reproduces the Manage Users / Limits scenario: default-variant tabs that overflow and end with a long label ('International wires'). Use the right arrow to page to the end and confirm the final tab is fully visible rather than clipped under the fade. The fade clears because start/end detection reads live scroll metrics; resting alignment is CSS `scroll-snap-type: x proximity`. jsdom implements neither, so the interaction tests below cover it in a real browser.",
    },
  },
};

/* -------------------------------------------------------------------------
 * Interaction tests
 *
 * These deliberately cover only what the jsdom suite in `index.test.js`
 * structurally cannot: real text metrics, real scroll ranges, and real
 * element geometry. jsdom reports 0 for every layout property and implements
 * neither scrolling nor scroll-snap, so the assertions below are the only
 * automated proof that the overflow behavior actually works.
 *
 * Note there is no assertion that the list comes to rest on a tab boundary.
 * The list uses `scroll-snap-type: x proximity`, and `proximity` explicitly
 * does not guarantee snapping -- the browser snaps only within an
 * implementation-defined threshold. Asserting alignment would be testing a
 * promise the CSS does not make.
 * ---------------------------------------------------------------------- */

const SUBPIXEL_TOLERANCE_PX = 1;

/**
 * Resolves once `el` has stopped scrolling.
 *
 * The list sets `scroll-behavior: smooth`, so every assertion after a click
 * races the animation. This polls `scrollLeft` until it holds steady across
 * several consecutive frames.
 *
 * Deliberately not the `scrollend` event (support is patchy outside Chromium
 * and these also run in the Storybook UI) and deliberately not a fixed
 * `setTimeout` (flaky under CI load).
 */
const waitForScrollEnd = (el) =>
  new Promise((resolve) => {
    const FRAMES_REQUIRED = 3;
    let lastLeft = el.scrollLeft;
    let stableFrames = 0;

    const check = () => {
      if (el.scrollLeft === lastLeft) {
        stableFrames += 1;
        if (stableFrames >= FRAMES_REQUIRED) {
          resolve();
          return;
        }
      } else {
        stableFrames = 0;
        lastLeft = el.scrollLeft;
      }
      requestAnimationFrame(check);
    };

    requestAnimationFrame(check);
  });

const getTabList = (canvas) => canvas.getByRole("tablist");
const getLeftArrow = (canvas) =>
  canvas.getByRole("button", { name: "Scroll tabs left" });
const getRightArrow = (canvas) =>
  canvas.getByRole("button", { name: "Scroll tabs right" });

/**
 * Waits for the tabs to settle into responsive mode. Web fonts load
 * asynchronously and change text widths, which can flip the overflow verdict,
 * so no interaction test may assume the arrows are present at mount.
 */
const waitForArrows = async (canvas) => {
  await waitFor(() => expect(getRightArrow(canvas)).toBeEnabled());
  return getTabList(canvas);
};

/** Clicks the right arrow until it disables, i.e. the end of the scroll. */
const pageToEnd = async (canvas, userEvent, tabList) => {
  // Bounded so a regression that never reaches the end fails loudly rather
  // than hanging the test runner.
  for (let i = 0; i < 10; i += 1) {
    if (getRightArrow(canvas).disabled) return;
    await userEvent.click(getRightArrow(canvas));
    await waitForScrollEnd(tabList);
  }
  throw new Error("Right arrow never became disabled; the end was not reached");
};

/**
 * The regression this whole change exists for. Arrow state used to be derived
 * from a cached width that reserved space for both arrows whether or not they
 * were rendered, which understated the scroll range: the end was never
 * detected, the trailing fade never cleared, and the last tab sat clipped
 * underneath it. jsdom has no layout engine, so this is only provable here.
 */
export const InteractionLastTabFullyVisible = {
  name: "Interaction: Last tab is fully visible at the end",
  render: () => <LimitsTabs />,
  play: async ({ canvas, userEvent }) => {
    const tabList = await waitForArrows(canvas);
    await pageToEnd(canvas, userEvent, tabList);

    // The trailing fade must be gone, otherwise it is painted over the last tab.
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowRight");

    const lastTab = canvas.getByRole("tab", { name: "International wires" });
    expect(lastTab.getBoundingClientRect().right).toBeLessThanOrEqual(
      tabList.getBoundingClientRect().right + SUBPIXEL_TOLERANCE_PX,
    );
  },
};

/**
 * Arrow enablement and the fade masks must track the real scroll position at
 * both limits and in between.
 */
export const InteractionArrowStateTracksScrollLimits = {
  name: "Interaction: Arrow state tracks scroll limits",
  render: () => <LimitsTabs />,
  play: async ({ canvas, userEvent }) => {
    const tabList = await waitForArrows(canvas);

    // At the start: nothing hidden to the left.
    expect(getLeftArrow(canvas)).toBeDisabled();
    expect(getRightArrow(canvas)).toBeEnabled();
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowLeft");
    expect(tabList).toHaveClass("nds-tabs-tabsList--overflowRight");

    // One page in, content is hidden on both sides.
    await userEvent.click(getRightArrow(canvas));
    await waitForScrollEnd(tabList);
    expect(tabList.scrollLeft).toBeGreaterThan(0);
    expect(getLeftArrow(canvas)).toBeEnabled();
    expect(tabList).toHaveClass("nds-tabs-tabsList--overflowLeft");

    // At the end: nothing hidden to the right.
    await pageToEnd(canvas, userEvent, tabList);
    expect(getRightArrow(canvas)).toBeDisabled();
    expect(getLeftArrow(canvas)).toBeEnabled();
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowRight");
    expect(tabList).toHaveClass("nds-tabs-tabsList--overflowLeft");

    // ...and back to the start again.
    while (!getLeftArrow(canvas).disabled) {
      await userEvent.click(getLeftArrow(canvas));
      await waitForScrollEnd(tabList);
    }
    expect(tabList.scrollLeft).toBeLessThanOrEqual(SUBPIXEL_TOLERANCE_PX);
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowLeft");
  },
};

/**
 * The arrows hold their columns and toggle `disabled` instead of unmounting.
 * If they unmounted at the scroll limits, the list's width would change, which
 * feeds back into the overflow decision that renders the arrows in the first
 * place -- the oscillation that `ARROW_RESERVE_PX` exists to damp.
 */
export const InteractionTabListWidthIsStable = {
  name: "Interaction: Tab list width is stable while paging",
  render: () => <LimitsTabs />,
  play: async ({ canvas, userEvent }) => {
    const tabList = await waitForArrows(canvas);
    const widthAtStart = tabList.clientWidth;

    await userEvent.click(getRightArrow(canvas));
    await waitForScrollEnd(tabList);
    expect(tabList.clientWidth).toBe(widthAtStart);

    await pageToEnd(canvas, userEvent, tabList);
    expect(tabList.clientWidth).toBe(widthAtStart);

    // Both arrows stay in the document at both limits, so focus is never
    // destroyed underneath a user clicking toward the end.
    expect(getLeftArrow(canvas)).toBeInTheDocument();
    expect(getRightArrow(canvas)).toBeInTheDocument();
  },
};

/**
 * The inverse case: when everything fits there is no responsive mode, no
 * arrows, and no fade.
 */
export const InteractionNoArrowsWhenContentFits = {
  name: "Interaction: Non-overflowing tabs render no arrows",
  render: () => <LimitsTabs width={900} />,
  play: async ({ canvas }) => {
    const tabList = getTabList(canvas);

    await waitFor(() =>
      expect(
        canvas.queryByRole("button", { name: "Scroll tabs right" }),
      ).not.toBeInTheDocument(),
    );
    expect(
      canvas.queryByRole("button", { name: "Scroll tabs left" }),
    ).not.toBeInTheDocument();

    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowLeft");
    expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowRight");
  },
};

export const ResponsiveSegmentedTabs = (args) => (
  <div
    style={{
      display: "flex",
      width: 300,
      flexDirection: "column",
    }}
  >
    <Tabs kind="segmented" {...args}>
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
        <Tabs.Tab label="Bird" tabId="bird" />
        <Tabs.Tab label="Cat" tabId="cat" />
        <Tabs.Tab label="Dog" tabId="dog" />
        <Tabs.Tab label="Snow leopard" tabId="snowLeopard" />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="bird">
        <div className="padding--all--s">🐦🐦🐦</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="cat">
        <div className="padding--all--s">🐈🐈🐈</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="dog">
        <div className="padding--all--s">🐕🐕🐕</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="snowLeopard">
        <div className="padding--all--s">️❄️🐆</div>
      </Tabs.Panel>
    </Tabs>
  </div>
);

export const WithoutPanels = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>
);
WithoutPanels.parameters = {
  docs: {
    description: {
      story:
        "You can decouple tabs from content by omitting the panel components. Use the `onTabChange` callback to respond to user events.",
    },
  },
};

export const WithoutBorder = () => (
  <Tabs hasBorder={false}>
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>
);
WithoutBorder.parameters = {
  docs: {
    description: {
      story:
        "You can render tabs without a border via the `hasBorder` prop. This is useful when the element directly below the tabs list has a top border already.",
    },
  },
};

export const PaddedTabsList = () => (
  <Tabs>
    <Tabs.List xPadding="l">
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
  </Tabs>
);
PaddedTabsList.parameters = {
  docs: {
    description: {
      story:
        "You may offset the tabs from the edge using the `xPadding` prop on `Tabs.TabsList`.",
    },
  },
};

export const FullyControlledTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <Tabs
      selectedIndex={selectedTab}
      onTabChange={(index) => setSelectedTab(index)}
    >
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
    </Tabs>
  );
};
FullyControlledTabs.parameters = {
  docs: {
    description: {
      story:
        "Using the `selectedIndex` prop will make Tabs fully controlled. When using this prop, you **must** use the `onTabChange` callback to respond to user events and update the selected tab.",
    },
  },
};

export const Segmented = () => (
  <Tabs kind="segmented">
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
  </Tabs>
);
Segmented.parameters = {
  docs: {
    description: {
      story:
        "The `segmented` kind renders tabs as a segmented control, useful for toggling between views within the same context.",
    },
  },
};

export const SegmentedWithStatusIndicator = () => (
  <Tabs kind="segmented">
    <Tabs.List>
      <Tabs.Tab label="Apples" tabId="apple" hasStatusIndicator />
      <Tabs.Tab label="Oranges" tabId="orange" />
      <Tabs.Tab label="Pineapples" tabId="pineapple" hasStatusIndicator />
      <Tabs.Tab
        label="Very long label with indicator"
        tabId="test"
        hasStatusIndicator
      />
    </Tabs.List>
    <Tabs.Panel tabId="apple">
      <div className="padding--all--s">🍎🍎🍎</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="orange">
      <div className="padding--all--s">🍊🍊🍊</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="pineapple">
      <div className="padding--all--s">🍍🍍🍍</div>
    </Tabs.Panel>
    <Tabs.Panel tabId="test">
      <div className="padding--all--s">Test Content</div>
    </Tabs.Panel>
  </Tabs>
);
SegmentedWithStatusIndicator.parameters = {
  docs: {
    description: {
      story:
        "Segmented tabs with `hasStatusIndicator` on select tabs to show an update notification dot.",
    },
  },
};

export const MultipleSegmentedTabs = () => (
  <div className="padding--all--m" style={{ display: "grid", gap: "1.5rem" }}>
    <Tabs kind="segmented">
      <Tabs.List>
        <Tabs.Tab label="Apples" tabId="apple" />
        <Tabs.Tab label="Oranges" tabId="orange" />
        <Tabs.Tab label="Pineapples" tabId="pineapple" />
      </Tabs.List>
      <Tabs.Panel tabId="apple">
        <div className="padding--all--s">🍎🍎🍎</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="orange">
        <div className="padding--all--s">🍊🍊🍊</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="pineapple">
        <div className="padding--all--s">🍍🍍🍍</div>
      </Tabs.Panel>
    </Tabs>

    <Tabs kind="segmented" defaultSelectedIndex={1}>
      <Tabs.List>
        <Tabs.Tab label="Birds" tabId="bird" />
        <Tabs.Tab label="Cats" tabId="cat" />
        <Tabs.Tab label="Dogs" tabId="dog" />
        <Tabs.Tab label="Snow leopards" tabId="snowLeopard" />
      </Tabs.List>
      <Tabs.Panel tabId="bird">
        <div className="padding--all--s">🐦🐦🐦</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="cat">
        <div className="padding--all--s">🐈🐈🐈</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="dog">
        <div className="padding--all--s">🐕🐕🐕</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="snowLeopard">
        <div className="padding--all--s">❄️🐆</div>
      </Tabs.Panel>
    </Tabs>

    <Tabs kind="segmented" defaultSelectedIndex={2}>
      <Tabs.List>
        <Tabs.Tab label="One" tabId="one" />
        <Tabs.Tab label="Two" tabId="two" />
        <Tabs.Tab label="Three" tabId="three" />
      </Tabs.List>
      <Tabs.Panel tabId="one">
        <div className="padding--all--s">1️⃣</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="two">
        <div className="padding--all--s">2️⃣</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="three">
        <div className="padding--all--s">3️⃣</div>
      </Tabs.Panel>
    </Tabs>
  </div>
);
MultipleSegmentedTabs.parameters = {
  docs: {
    description: {
      story:
        "Renders multiple `segmented` Tabs on the same page to verify that each instance's sliding pill resolves to its own selected tab. Since `anchor-name: --active` is declared at document scope, this story exists to confirm there is no cross-instance interference in practice (try changing the selected tab in each set and observe the pill).",
    },
  },
};

export const WithCustomLabelContent = () => (
  <div style={{ display: "grid", gap: "1.5rem" }}>
    <Tabs>
      <Tabs.List>
        <Tabs.Tab
          label="Inbox"
          tabId="inbox"
          renderStartContent={() => <span className="narmi-icon-mail" />}
          renderEndContent={(isSelected) => (
            <Count value={8} kind={isSelected ? "theme" : "neutral"} />
          )}
        />
        <Tabs.Tab
          label="Starred"
          tabId="starred"
          renderStartContent={() => <span className="narmi-icon-star" />}
          renderEndContent={(isSelected) => (
            <Count value={2} kind={isSelected ? "theme" : "neutral"} />
          )}
        />
        <Tabs.Tab
          label="Sent"
          tabId="sent"
          renderStartContent={() => <span className="narmi-icon-send" />}
        />
      </Tabs.List>
      <Tabs.Panel tabId="inbox">
        <div className="padding--all--s">Inbox</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="starred">
        <div className="padding--all--s">Starred</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="sent">
        <div className="padding--all--s">Sent</div>
      </Tabs.Panel>
    </Tabs>

    <Tabs kind="segmented">
      <Tabs.List>
        <Tabs.Tab
          label="Inbox"
          tabId="inbox"
          renderStartContent={() => <span className="narmi-icon-mail" />}
          renderEndContent={(isSelected) => (
            <Count value={8} kind={isSelected ? "theme" : "neutral"} />
          )}
        />
        <Tabs.Tab
          label="Starred"
          tabId="starred"
          renderStartContent={() => <span className="narmi-icon-star" />}
          renderEndContent={(isSelected) => (
            <Count value={2} kind={isSelected ? "theme" : "neutral"} />
          )}
        />
        <Tabs.Tab
          label="Sent"
          tabId="sent"
          renderStartContent={() => <span className="narmi-icon-send" />}
        />
      </Tabs.List>
      <Tabs.Panel tabId="inbox">
        <div className="padding--all--s">Inbox</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="starred">
        <div className="padding--all--s">Starred</div>
      </Tabs.Panel>
      <Tabs.Panel tabId="sent">
        <div className="padding--all--s">Sent</div>
      </Tabs.Panel>
    </Tabs>
  </div>
);
WithCustomLabelContent.parameters = {
  docs: {
    description: {
      story:
        "Use `renderStartContent` and `renderEndContent` on `Tabs.Tab` to render arbitrary inline-start / inline-end content such as an icon or a `Count`. Each render prop receives the tab's `isSelected` state, so content can respond to selection. Shown here with both the `default` and `segmented` kinds.",
    },
  },
};

export default {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: { TabsList, TabsTab, TabsPanel },
};
