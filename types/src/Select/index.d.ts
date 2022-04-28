export function isAction(item: any): boolean;
export function getSelectedItemDisplay(item: any): string | Node;
export function getItemByValue(value: string, items: any[]): ReactElement | string;
export default Select;
/**
 * Accessible custom select control for giving users the ability to select one option from a list of options.
 * `Select` also supports the ability to pass in a `<Select.Action>` that acts as an option that only triggers a side effect.
 * Typeahead is enabled based on the `value` prop of `<Select.Item>` elements passed in.
 */
declare function Select({ label, children, onChange, value, defaultValue, defaultOpen, errorText, }: {
    label: any;
    children: any;
    onChange?: () => void;
    value: any;
    defaultValue: any;
    defaultOpen?: boolean;
    errorText: any;
}): JSX.Element;
declare namespace Select {
    export namespace propTypes {
        const label: any;
        const onChange: any;
        const value: any;
        const defaultValue: any;
        const defaultOpen: any;
        const errorText: any;
        const children: any;
    }
    export { SelectItem as Item };
    export { SelectAction as Action };
}
import SelectItem from "./SelectItem";
import SelectAction from "./SelectAction";
