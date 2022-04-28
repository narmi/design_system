export const Overview: any;
export function LabelOnly(): JSX.Element;
export namespace LabelOnly {
    namespace parameters {
        namespace docs {
            namespace description {
                const story: string;
            }
        }
    }
}
export function ErrorState(): JSX.Element;
export namespace ErrorState {
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
export function ComposingWithPopover(): JSX.Element;
export namespace ComposingWithPopover {
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
declare namespace _default {
    export const title: string;
    export { DropdownTrigger as component };
    export namespace argTypes {
        namespace displayValue {
            const options: string[];
        }
    }
}
export default _default;
import DropdownTrigger from "./";
