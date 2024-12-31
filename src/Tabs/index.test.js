import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Tabs from "./";

const TAB_NAMES = ["Tab One", "Tab Two", "Tab Three"];
const TAB_IDS = ["uno", "dos", "tres"];
const PANEL_CONTENTS = ["Panel One", "Panel Two", "Panel Three"];
const SELECTED_CLASS = "nds-tabs-tabItem--selected";

/**
 * @returns {Object} panel elements returned by `screen`
 */
const getPanels = () => ({
  firstPanel: screen.getByText(PANEL_CONTENTS[0]),
  secondPanel: screen.getByText(PANEL_CONTENTS[1]),
  thirdPanel: screen.getByText(PANEL_CONTENTS[2]),
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
    expect(firstTab.parentElement).toHaveAttribute("aria-selected", "true");
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

    expect(secondTab.parentElement).toHaveAttribute("aria-selected", "true");
    [firstTab, thirdTab].forEach((tab) => {
      expect(tab.parentElement).toHaveAttribute("aria-selected", "false");
    });

    expect(secondPanel).not.toHaveAttribute("hidden");
    [firstPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });
  });

  it("changes tab selection and tabpanel with click", () => {
    const handleTabChange = jest.fn();
    renderTabsWithPanels({ onTabChange: handleTabChange });
    const { firstTab, secondTab, thirdTab } = getTabs();
    const { firstPanel, secondPanel, thirdPanel } = getPanels();

    expect(handleTabChange).not.toHaveBeenCalled();
    fireEvent.click(secondTab);
    expect(handleTabChange).toHaveBeenCalledWith(1);

    expect(secondTab.parentElement).toHaveAttribute("aria-selected", "true");
    [firstTab, thirdTab].forEach((tab) => {
      expect(tab.parentElement).toHaveAttribute("aria-selected", "false");
    });

    expect(secondPanel).not.toHaveAttribute("hidden");
    [firstPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });
  });

  it("changes selected tab and active tabpanel with arrow key", () => {
    const handleTabChange = jest.fn();
    renderTabsWithPanels({ onTabChange: handleTabChange });
    const { firstTab, secondTab, thirdTab } = getTabs();
    const { firstPanel, secondPanel, thirdPanel } = getPanels();

    // arrow to second tab
    expect(handleTabChange).not.toHaveBeenCalled();
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });
    expect(handleTabChange).toHaveBeenCalledWith(1);

    expect(secondTab.parentElement).toHaveAttribute("aria-selected", "true");
    [firstTab, thirdTab].forEach((tab) => {
      expect(tab.parentElement).toHaveAttribute("aria-selected", "false");
    });

    expect(secondPanel).not.toHaveAttribute("hidden");
    [firstPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });

    // arrow back to first tab
    fireEvent.keyDown(secondTab, { key: "ArrowLeft" });
    expect(handleTabChange).toHaveBeenCalledWith(0);

    expect(firstTab.parentElement).toHaveAttribute("aria-selected", "true");
    [secondTab, thirdTab].forEach((tab) => {
      expect(tab.parentElement).toHaveAttribute("aria-selected", "false");
    });

    expect(firstTab).not.toHaveAttribute("hidden");
    [secondPanel, thirdPanel].forEach((panel) => {
      expect(panel).toHaveAttribute("hidden");
    });
  });

  it("does NOT change selected tab with arrow key when panels are NOT present", () => {
    const handleTabChange = jest.fn();
    renderTabsWithoutPanels({ onTabChange: handleTabChange });
    const { firstTab, secondTab, thirdTab } = getTabs();

    expect(handleTabChange).not.toHaveBeenCalled();
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });
    expect(handleTabChange).not.toHaveBeenCalled();

    expect(firstTab.parentElement).toHaveClass(SELECTED_CLASS);
    [secondTab, thirdTab].forEach((tab) => {
      expect(tab.parentElement).not.toHaveClass(SELECTED_CLASS);
    });
  });

  it("applies tabs design pattern aria attributes when panels are present", () => {
    renderTabsWithPanels();
    const { firstTab } = getTabs();
    const tabList = screen.getByTestId("nds-tablist");

    expect(tabList).toHaveAttribute("role", "tablist");
    expect(tabList).toHaveAttribute("tabIndex", "0");

    expect(firstTab.parentElement).toHaveAttribute("role", "tab");
    expect(firstTab.parentElement).toHaveAttribute("aria-controls");
  });

  it("does NOT apply tabs design pattern aria attributes when panels are NOT present", () => {
    renderTabsWithoutPanels();
    const { firstTab, secondTab, thirdTab } = getTabs();
    const tabList = screen.getByTestId("nds-tablist");

    expect(tabList).not.toHaveAttribute("role", "tablist");
    expect(tabList).not.toHaveAttribute("tabIndex", "0");

    [firstTab, secondTab, thirdTab].forEach((tab) => {
      expect(tab.parentElement).not.toHaveAttribute("role", "tab");
      expect(tab.parentElement).not.toHaveAttribute("aria-controls");
      expect(tab.parentElement).not.toHaveAttribute("aria-selected");
    });
  });

  describe("Controlled Tabs", () => {
    it("sets initial selected tab correctly when `selectedIndex` is passed", () => {
      renderTabsWithoutPanels({ selectedIndex: 1 });
      const { firstTab, secondTab, thirdTab } = getTabs();

      expect(secondTab.parentElement).toHaveClass(SELECTED_CLASS);
      [firstTab, thirdTab].forEach((tab) => {
        expect(tab.parentElement).not.toHaveClass(SELECTED_CLASS);
      });
    });

    it("does NOT change tab selection in uncontrolled manner when `selectedIndex` is passed", () => {
      const handleTabChange = jest.fn();
      renderTabsWithoutPanels({
        selectedIndex: 2,
        onTabChange: handleTabChange,
      });
      const { firstTab, secondTab, thirdTab } = getTabs();

      // third tab is set as selected initially
      expect(thirdTab.parentElement).toHaveClass(SELECTED_CLASS);
      [firstTab, secondTab].forEach((tab) => {
        expect(tab.parentElement).not.toHaveClass(SELECTED_CLASS);
      });

      // callback fired as expected, with the new tab index
      expect(handleTabChange).not.toHaveBeenCalled();
      fireEvent.click(firstTab);
      expect(handleTabChange).toHaveBeenCalledWith(0);

      // because this is in controlled mode and our handler doesn't update the
      // `selectedIndex` prop, the selected tab should NOT update,
      // leaving the third tab in a selected state
      expect(thirdTab.parentElement).toHaveClass(SELECTED_CLASS);
      [firstTab, secondTab].forEach((tab) => {
        expect(tab.parentElement).not.toHaveClass(SELECTED_CLASS);
      });
    });
  });
});
