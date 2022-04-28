export default Checkbox;
/**
 * Narmi styled checkbox with built-in label.
 */
declare function Checkbox({ label, onChange, id, name, defaultChecked, checked, value, kind, ...rest }: {
    [x: string]: any;
    label: any;
    onChange?: () => void;
    id: any;
    name: any;
    defaultChecked: any;
    checked?: boolean;
    value: any;
    kind?: string;
}): JSX.Element;
declare namespace Checkbox {
    namespace propTypes {
        const label: any;
        const onChange: any;
        const id: any;
        const name: any;
        const defaultChecked: any;
        const checked: any;
        const value: any;
        const kind: any;
    }
}
