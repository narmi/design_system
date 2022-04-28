export const Overview: any;
export function Example(): JSX.Element;
export function MultiLine(): JSX.Element;
export function AsColorInput(): JSX.Element;
export function Search(): JSX.Element;
declare namespace _default {
    export const title: string;
    export { TextInput as component };
    export namespace argTypes {
        namespace onChange {
            const action: string;
        }
        namespace onBlur {
            const action_1: string;
            export { action_1 as action };
        }
    }
}
export default _default;
import TextInput from "./";
