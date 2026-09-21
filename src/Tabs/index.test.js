import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Tabs from "./";

const TAB_NAMES = ["Tab One", "Tab Two", "Tab Three"];
const TAB_IDS = ["uno", "dos", "tres"];
const PANEL_CONTENTS = ["Panel One", "Panel Two", "Panel Three"];
const SELECTED_ATTR = "data-selected";
const SELECTED_CLASS = "nds-tabs-tabItem--selected";

/**
 * @returns {Object} panel elements returned by `screen`
 */
const getPanels = () => ({
  firstPanel: screen.getByText(PANEL_CONTENTS[0]).closest(".nds-tabs-panel"),
  secondPanel: screen.getByText(PANEL_CONTENTS[1]).closest(".nds-tabs-panel"),
  thirdPanel: screen.getByText(PANEL_CONTENTS[2]).closest(".nds-tabs-panel"),
});

/**
 * @returns {Object} tab button elements returned by `screen`
 */
const getTabs = () => ({
  firstTab: screen.getByText(TAB_NAMES[0]),
  secondTab: screen.getByText(TAB_NAMES[1]),
  thirdTab: screen.getByText(TAB_NAMES[2]),
});

const renderTabsWithPanels = (args) =>
  render(
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab label={TAB_NAMES[0]} tabId={TAB_IDS[0]} />
        <Tabs.Tab label={TAB_NAMES[1]} tabId={TAB_IDS[1]} />
        <Tabs.Tab label={TAB_NAMES[2]} tabId={TAB_IDS[2]} />
      </Tabs.List>
      <Tabs.Panel tabId={TAB_IDS[0]}>{PANEL_CONTENTS[0]}</Tabs.Panel>
      <Tabs.Panel tabId={TAB_IDS[1]}>{PANEL_CONTENTS[1]}</Tabs.Panel>
      <Tabs.Panel tabId={TAB_IDS[2]}>{PANEL_CONTENTS[2]}</Tabs.Panel>
    </Tabs>,
  );

const renderTabsWithoutPanels = (args) =>
  render(
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab label={TAB_NAMES[0]} tabId={TAB_IDS[0]} />
        <Tabs.Tab label={TAB_NAMES[1]} tabId={TAB_IDS[1]} />
        <Tabs.Tab label={TAB_NAMES[2]} tabId={TAB_IDS[2]} />
      </Tabs.List>
    </Tabs>,
  );

describe("Tabs", () => {
  it("renders tabs with tablist only without errors", () => {
    renderTabsWithoutPanels();
    TAB_NAMES.forEach((tabText) => {
      expect(screen.getByText(tabText)).toBeInTheDocument();
    });
  });

  it("renders tabs with tablist AND tabpanels without errors", () => {
    renderTabsWithPanels();
    TAB_NAMES.forEach((tabText) => {
      expect(screen.getByText(tabText)).toBeInTheDocument();
    });
    PANEL_CONTENTS.forEach((panelText) => {
      expect(screen.getByText(panelText)).toBeInTheDocument();
    });
  });

  it("defaults to first tab when no defaultSelectedId is specified", () => {
    renderTabsWithPanels();
    const { firstTab } = getTabs();
    const { firstPanel, secondPanel, thirdPanel } = getPanels();
    expect(firstTab.closest("li")).toHaveAttribute("aria-selected", "true");
    expect(firstPanel).not.toHaveAttribute("hidden");

    // make sure other panels are hidden
    [secondPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });
  });

  it("correctly sets default selected tab and its panel", () => {
    renderTabsWithPanels({ defaultSelectedIndex: 1 });
    const { firstTab, secondTab, thirdTab } = getTabs();
    const { firstPanel, secondPanel, thirdPanel } = getPanels();

    expect(secondTab.closest("li")).toHaveAttribute("aria-selected", "true");
    [firstTab, thirdTab].forEach((tab) => {
      expect(tab.closest("li")).toHaveAttribute("aria-selected", "false");
    });

    expect(secondPanel).not.toHaveAttribute("hidden");
    [firstPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });
  });

  it("changes tab selection and tabpanel with click", () => {
    const handleTabChange = vi.fn();
    renderTabsWithPanels({ onTabChange: handleTabChange });
    const { firstTab, secondTab, thirdTab } = getTabs();
    const { firstPanel, secondPanel, thirdPanel } = getPanels();

    expect(handleTabChange).not.toHaveBeenCalled();
    fireEvent.click(secondTab);
    expect(handleTabChange).toHaveBeenCalledWith(1);

    expect(secondTab.closest("li")).toHaveAttribute("aria-selected", "true");
    [firstTab, thirdTab].forEach((tab) => {
      expect(tab.closest("li")).toHaveAttribute("aria-selected", "false");
    });

    expect(secondPanel).not.toHaveAttribute("hidden");
    [firstPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });
  });

  it("changes selected tab and active tabpanel with arrow key", () => {
    const handleTabChange = vi.fn();
    renderTabsWithPanels({ onTabChange: handleTabChange });
    const { firstTab, secondTab, thirdTab } = getTabs();
    const { firstPanel, secondPanel, thirdPanel } = getPanels();

    // arrow to second tab
    expect(handleTabChange).not.toHaveBeenCalled();
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });
    expect(handleTabChange).toHaveBeenCalledWith(1);

    expect(secondTab.closest("li")).toHaveAttribute("aria-selected", "true");
    [firstTab, thirdTab].forEach((tab) => {
      expect(tab.closest("li")).toHaveAttribute("aria-selected", "false");
    });

    expect(secondPanel).not.toHaveAttribute("hidden");
    [firstPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });

    // arrow back to first tab
    fireEvent.keyDown(secondTab, { key: "ArrowLeft" });
    expect(handleTabChange).toHaveBeenCalledWith(0);

    expect(firstTab.closest("li")).toHaveAttribute("aria-selected", "true");
    [secondTab, thirdTab].forEach((tab) => {
      expect(tab.closest("li")).toHaveAttribute("aria-selected", "false");
    });

    expect(firstTab).not.toHaveAttribute("hidden");
    [secondPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });
  });

  it("does NOT change selected tab with arrow key when panels are NOT present", () => {
    const handleTabChange = vi.fn();
    renderTabsWithoutPanels({ onTabChange: handleTabChange });
    const { firstTab, secondTab, thirdTab } = getTabs();

    expect(handleTabChange).not.toHaveBeenCalled();
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });
    expect(handleTabChange).not.toHaveBeenCalled();

    expect(firstTab.closest("li")).toHaveAttribute(SELECTED_ATTR);
    [secondTab, thirdTab].forEach((tab) => {
      expect(tab.closest("li")).not.toHaveAttribute(SELECTED_ATTR);
    });
  });

  it("applies tabs design pattern aria attributes when panels are present", () => {
    renderTabsWithPanels();
    const { firstTab } = getTabs();
    const tabList = screen.getByTestId("nds-tablist");

    expect(tabList).toHaveAttribute("role", "tablist");
    expect(tabList).toHaveAttribute("tabIndex", "0");

    expect(firstTab.closest("li")).toHaveAttribute("role", "tab");
    expect(firstTab.closest("li")).toHaveAttribute("aria-controls");
  });

  it("does NOT apply tabs design pattern aria attributes when panels are NOT present", () => {
    renderTabsWithoutPanels();
    const { firstTab, secondTab, thirdTab } = getTabs();
    const tabList = screen.getByTestId("nds-tablist");

    expect(tabList).not.toHaveAttribute("role", "tablist");
    expect(tabList).not.toHaveAttribute("tabIndex", "0");

    [firstTab, secondTab, thirdTab].forEach((tab) => {
      expect(tab.closest("li")).not.toHaveAttribute("role", "tab");
      expect(tab.closest("li")).not.toHaveAttribute("aria-controls");
      expect(tab.closest("li")).not.toHaveAttribute("aria-selected");
    });
  });

  describe("Responsive arrow scrolling", () => {
    const MANY_TABS = Array.from({ length: 8 }, (_, i) => ({
      label: `Tab ${i + 1}`,
      id: `tab-${i + 1}`,
    }));

    const renderResponsiveTabs = () =>
      render(
        <Tabs>
          <Tabs.List>
            {MANY_TABS.map(({ label, id }) => (
              <Tabs.Tab key={id} label={label} tabId={id} />
            ))}
          </Tabs.List>
        </Tabs>,
      );

    // jsdom reports 0 for every layout metric, so the scroll range has to be
    // faked. `clientWidth` 300 within `scrollWidth` 900 gives a max scroll of
    // 600. Where the list comes to *rest* is CSS scroll-snap's job and isn't
    // observable here; what these tests cover is the state derived from the
    // scroll position.
    const CLIENT_WIDTH = 300;
    const SCROLL_WIDTH = 900;
    const MAX_SCROLL = SCROLL_WIDTH - CLIENT_WIDTH;

    const setScrollMetrics = (el, scrollLeft) => {
      Object.entries({
        clientWidth: CLIENT_WIDTH,
        scrollWidth: SCROLL_WIDTH,
        scrollLeft,
      }).forEach(([prop, value]) => {
        Object.defineProperty(el, prop, {
          configurable: true,
          writable: true,
          value,
        });
      });
    };

    // Applies scroll metrics and lets the component observe them. The scroll
    // handler coalesces through requestAnimationFrame, so wait out a frame —
    // the component's callback is queued first and therefore runs first.
    const scrollTo = async (el, scrollLeft) => {
      setScrollMetrics(el, scrollLeft);
      await act(async () => {
        fireEvent.scroll(el);
        await (typeof requestAnimationFrame === "function"
          ? new Promise((resolve) => requestAnimationFrame(resolve))
          : Promise.resolve());
      });
    };

    const leftArrow = () =>
      screen.getByRole("button", { name: "Scroll tabs left" });
    const rightArrow = () =>
      screen.getByRole("button", { name: "Scroll tabs right" });

    it("pages the tab list forward by one container width", async () => {
      renderResponsiveTabs();
      const tabList = screen.getByTestId("nds-tablist");
      const scrollBySpy = vi.fn();
      tabList.scrollBy = scrollBySpy;

      await scrollTo(tabList, 0);
      fireEvent.click(rightArrow());

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: CLIENT_WIDTH,
        behavior: "smooth",
      });
    });

    it("pages the tab list backward by one container width", async () => {
      renderResponsiveTabs();
      const tabList = screen.getByTestId("nds-tablist");
      const scrollBySpy = vi.fn();
      tabList.scrollBy = scrollBySpy;

      await scrollTo(tabList, 300);
      fireEvent.click(leftArrow());

      expect(scrollBySpy).toHaveBeenCalledWith({
        left: -CLIENT_WIDTH,
        behavior: "smooth",
      });
    });

    // The bug these cover: arrow/fade state used to be derived from a cached
    // width that reserved space for both arrows whether or not they were
    // rendered, which understated the real scroll range, so the end of the
    // list was never detected and the trailing fade stayed on top of the last
    // tab. jsdom has no layout engine, so the exact production arithmetic
    // can't be reproduced here; what these three cases pin down instead is the
    // *source of truth* — state must track live scrollLeft/scrollWidth/
    // clientWidth, not cached layout measurements. Swapping the live metrics
    // back for the cached ones fails the mid-scroll case below.
    it("disables the left arrow and drops the leading fade at the start", async () => {
      renderResponsiveTabs();
      const tabList = screen.getByTestId("nds-tablist");

      await scrollTo(tabList, 0);

      expect(leftArrow()).toBeDisabled();
      expect(rightArrow()).not.toBeDisabled();
      expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowLeft");
      expect(tabList).toHaveClass("nds-tabs-tabsList--overflowRight");
    });

    it("disables the right arrow and drops the trailing fade at the end", async () => {
      renderResponsiveTabs();
      const tabList = screen.getByTestId("nds-tablist");

      await scrollTo(tabList, MAX_SCROLL);

      expect(rightArrow()).toBeDisabled();
      expect(leftArrow()).not.toBeDisabled();
      expect(tabList).not.toHaveClass("nds-tabs-tabsList--overflowRight");
      expect(tabList).toHaveClass("nds-tabs-tabsList--overflowLeft");
    });

    it("enables both arrows and fades both edges mid-scroll", async () => {
      renderResponsiveTabs();
      const tabList = screen.getByTestId("nds-tablist");

      await scrollTo(tabList, 300);

      expect(leftArrow()).not.toBeDisabled();
      expect(rightArrow()).not.toBeDisabled();
      expect(tabList).toHaveClass("nds-tabs-tabsList--overflowLeft");
      expect(tabList).toHaveClass("nds-tabs-tabsList--overflowRight");
    });

    // Unmounting an arrow at a scroll limit would destroy focus underneath a
    // user clicking toward the end, and would change the list's width, which
    // feeds back into the overflow decision that renders the arrows.
    it("keeps both arrows mounted at both scroll limits", async () => {
      renderResponsiveTabs();
      const tabList = screen.getByTestId("nds-tablist");

      await scrollTo(tabList, 0);
      expect(leftArrow()).toBeInTheDocument();
      expect(rightArrow()).toBeInTheDocument();

      await scrollTo(tabList, MAX_SCROLL);
      expect(leftArrow()).toBeInTheDocument();
      expect(rightArrow()).toBeInTheDocument();
    });
  });

  describe("Controlled Tabs", () => {
    it("sets initial selected tab correctly when `selectedIndex` is passed", () => {
      renderTabsWithoutPanels({ selectedIndex: 1 });
      const { firstTab, secondTab, thirdTab } = getTabs();

      expect(secondTab.closest("li")).toHaveAttribute(SELECTED_ATTR);
      expect(secondTab.closest("li")).toHaveClass(SELECTED_CLASS);
      [firstTab, thirdTab].forEach((tab) => {
        expect(tab.closest("li")).not.toHaveAttribute(SELECTED_ATTR);
        expect(tab.closest("li")).not.toHaveClass(SELECTED_CLASS);
      });
    });

    it("does NOT change tab selection in uncontrolled manner when `selectedIndex` is passed", () => {
      const handleTabChange = vi.fn();
      renderTabsWithoutPanels({
        selectedIndex: 2,
        onTabChange: handleTabChange,
      });
      const { firstTab, secondTab, thirdTab } = getTabs();

      // third tab is set as selected initially
      expect(thirdTab.closest("li")).toHaveAttribute(SELECTED_ATTR);
      [firstTab, secondTab].forEach((tab) => {
        expect(tab.closest("li")).not.toHaveAttribute(SELECTED_ATTR);
      });

      // callback fired as expected, with the new tab index
      expect(handleTabChange).not.toHaveBeenCalled();
      fireEvent.click(firstTab);
      expect(handleTabChange).toHaveBeenCalledWith(0);

      // because this is in controlled mode and our handler doesn't update the
      // `selectedIndex` prop, the selected tab should NOT update,
      // leaving the third tab in a selected state
      expect(thirdTab.closest("li")).toHaveAttribute(SELECTED_ATTR);
      [firstTab, secondTab].forEach((tab) => {
        expect(tab.closest("li")).not.toHaveAttribute(SELECTED_ATTR);
      });
    });
  });
});
