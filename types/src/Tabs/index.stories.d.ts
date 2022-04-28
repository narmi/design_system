export const Overview: any;
export const DefaultSelectedTab: any;
export function WithoutPanels(args: any): JSX.Element;
export namespace WithoutPanels {
    namespace parameters {
        namespace docs {
            namespace description {
                const story: string;
            }
        }
    }
}
export function WithoutBorder(): JSX.Element;
export namespace WithoutBorder {
    export namespace parameters_1 {
        export namespace docs_1 {
            export namespace description_1 {
                const story_1: string;
                export { story_1 as story };
            }
            export { description_1 as description };
        }
        export { docs_1 as docs };
    }
    export { parameters_1 as parameters };
}
export function PaddedTabsList(): JSX.Element;
export namespace PaddedTabsList {
    export namespace parameters_2 {
        export namespace docs_2 {
            export namespace description_2 {
                const story_2: string;
                export { story_2 as story };
            }
            export { description_2 as description };
        }
        export { docs_2 as docs };
    }
    export { parameters_2 as parameters };
}
export function FullyControlledTabs(): JSX.Element;
export namespace FullyControlledTabs {
    export namespace parameters_3 {
        export namespace docs_3 {
            export namespace description_3 {
                const story_3: string;
                export { story_3 as story };
            }
            export { description_3 as description };
        }
        export { docs_3 as docs };
    }
    export { parameters_3 as parameters };
}
declare namespace _default {
    export const title: string;
    export { Tabs as component };
    export namespace subcomponents {
        export { TabsList };
        export { TabsTab };
        export { TabsPanel };
    }
    export namespace argTypes {
        namespace onTabChange {
            const action: string;
        }
    }
}
export default _default;
import Tabs from "./";
import TabsList from "./TabsList";
import TabsTab from "./TabsTab";
import TabsPanel from "./TabsPanel";
