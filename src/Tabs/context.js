import { createContext } from "react";

const TabsContext = createContext({
  // list of tabIds set by TabsList
  tabIds: [],
  setTabIds: () => {},

  // index of tab in source order that is selected
  selectedIndex: 0,
  setSelectedIndex: () => {},

  // only set if there is a TabsPanel present inside Tabs.
  // used to determine when to add aria labelling attributes
  hasPanels: false,
  setHasPanels: () => {},

  // allows any consumer of this context to change tabs by id
  changeTabs: () => {},
});

export default TabsContext;
