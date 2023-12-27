/* eslint-disable no-unused-vars */
import { createContext } from "react";

const TabsContext = createContext({
  tabsContainerRef: null,

  // list of tabIds set by TabsList
  tabIds: [],
  setTabIds: (tabIds) => {},

  // index of tab in source order that is currently selected
  currentIndex: 0,

  // only set if there is a TabsPanel present inside Tabs.
  // used to determine when to add aria labelling attributes
  hasPanels: false,
  setHasPanels: (hasPanels) => {},

  // allows any consumer of this context to change tabs by id
  changeTabs: (tabId) => {},
  tabsListRef: null,

  isResponsive: false,
  setIsResponsive: (isResponsive) => {},
});

export default TabsContext;
