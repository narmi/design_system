import { createContext } from "react";

export type TabsKind = "default" | "segmented";

interface TabsContextProps {
  tabIds: string[];
  setTabIds: (ids: string[]) => void;

  currentIndex: number;
  hasPanels: boolean;
  setHasPanels: (hasPanels: boolean) => void;

  changeTabs: (index: string) => void;
  tabsListRef: React.RefObject<HTMLElement>;

  isResponsive: boolean;
  setIsResponsive: (isResponsive: boolean) => void;

  kind: TabsKind;
}

const TabsContext = createContext<TabsContextProps>({
  // list of tabIds set by TabsList
  tabIds: [],
  setTabIds: () => {},

  // index of tab in source order that is currently selected
  currentIndex: 0,

  // only set if there is a TabsPanel present inside Tabs.
  // used to determine when to add aria labelling attributes
  hasPanels: false,
  setHasPanels: () => {},

  // allows any consumer of this context to change tabs by id
  changeTabs: () => {},
  tabsListRef: null,

  isResponsive: false,
  setIsResponsive: () => {},

  kind: "default",
});

export default TabsContext;
