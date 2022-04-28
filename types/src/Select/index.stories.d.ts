export const Overview: any;
export const DefaultSelection: any;
export const ErrorState: any;
export const WithAction: any;
export function InAForm(): JSX.Element;
export namespace InAForm {
    namespace parameters {
        namespace docs {
            namespace description {
                const story: string;
            }
        }
    }
}
export function Controlled(): JSX.Element;
export namespace Controlled {
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
export function InADialog(args: any): JSX.Element;
export namespace InADialog {
    namespace args {
        export const label: string;
        export { children };
    }
}
declare namespace _default {
    export const title: string;
    export { Select as component };
    export namespace subcomponents {
        export { SelectItem };
        export { SelectAction };
    }
    export namespace argTypes {
        export namespace children_1 {
            const control: boolean;
        }
        export { children_1 as children };
        export namespace onChange {
            const action: string;
        }
    }
}
export default _default;
declare const children: JSX.Element[];
import Select from "./";
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";
