export const Overview: any;
export const PlainButton: any;
export function ConfirmAndCancel(): JSX.Element;
export namespace ConfirmAndCancel {
    namespace parameters {
        namespace docs {
            namespace description {
                const story: string;
            }
        }
    }
}
declare namespace _default {
    export const title: string;
    export { Button as component };
    export namespace argTypes {
        namespace onClick {
            const action: string;
        }
        namespace children {
            const control: boolean;
        }
        namespace startIcon {
            const options: any[];
        }
        namespace endIcon {
            const options_1: any[];
            export { options_1 as options };
        }
    }
}
export default _default;
import Button from "./";
