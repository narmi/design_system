export default Input;
declare function Input({ id, label, icon, disabled, multiline, decoration, error, search, onClick, style, children, ...props }: {
    [x: string]: any;
    id: any;
    label: any;
    icon: any;
    disabled: any;
    multiline?: boolean;
    decoration: any;
    error: any;
    search: any;
    onClick: any;
    style: any;
    children: any;
}): JSX.Element;
declare namespace Input {
    namespace propTypes {
        const id: any;
        const label: any;
        const icon: any;
        const decoration: any;
        const multiline: any;
        const disabled: any;
        const search: any;
        const onClick: any;
        const style: any;
        const error: any;
        const children: any;
    }
}
