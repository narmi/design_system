export default TabsContext;
declare const TabsContext: import("react").Context<{
    tabIds: any[];
    setTabIds: () => void;
    currentIndex: number;
    hasPanels: boolean;
    setHasPanels: () => void;
    changeTabs: () => void;
}>;
