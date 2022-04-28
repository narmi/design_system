export const Overview: any;
export function DebugView(): JSX.Element;
export namespace DebugView {
    namespace parameters {
        namespace docs {
            namespace description {
                const story: string;
            }
        }
    }
}
export function SectionHeaderExample(): JSX.Element;
export namespace SectionHeaderExample {
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
export function JustifyingContent(): JSX.Element;
export namespace JustifyingContent {
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
export function AsProp(): JSX.Element;
export namespace AsProp {
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
    export { Row as component };
    export namespace subcomponents {
        export { RowItem };
    }
    export namespace argTypes {
        namespace children {
            const control: boolean;
        }
    }
}
export default _default;
import Row from "./";
import RowItem from "./RowItem";
