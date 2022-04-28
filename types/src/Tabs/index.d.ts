export default Tabs;
/**
 * Component that handles tabs and tab panels based on WAI-ARIA [best practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)
 * for the "tabs" design pattern.
 *
 * The `Tabs` component mananges its own state, changing the visible tab panel based
 * on user events. Use the `onTabChange` callback to add any custom behaviors.
 */
declare function Tabs({ children, defaultSelectedIndex, selectedIndex, onTabChange, hasBorder, }: {
    children: any;
    defaultSelectedIndex?: number;
    selectedIndex?: any;
    onTabChange?: () => void;
    hasBorder?: boolean;
}): JSX.Element;
declare namespace Tabs {
    export namespace propTypes {
        const children: any;
        const defaultSelectedIndex: any;
        const selectedIndex: any;
        const onTabChange: any;
        const hasBorder: any;
    }
    export { TabsList as List };
    export { TabsTab as Tab };
    export { TabsPanel as Panel };
}
import TabsList from "./TabsList";
import TabsTab from "./TabsTab";
import TabsPanel from "./TabsPanel";
