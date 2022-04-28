export const VALID_ICON_NAMES: any;
export default Button;
/**
 * Narmi style action buttons.
 *
 * Button renders as a `button` element by default, but can render as an `a` element
 * via the `as` prop.
 *
 * This component supports rest props; any additional props on button will be
 * passed through to the root node of `Button`.
 */
declare function Button({ disabled, kind, startIcon, endIcon, children, label, onClick, as, ...otherProps }: {
    [x: string]: any;
    disabled?: boolean;
    kind?: string;
    startIcon?: any;
    endIcon?: any;
    children: any;
    label: any;
    onClick?: () => void;
    as?: string;
}): JSX.Element;
declare namespace Button {
    namespace propTypes {
        const as: any;
        const label: any;
        const disabled: any;
        const kind: any;
        const onClick: any;
        const startIcon: any;
        const endIcon: any;
        const children: any;
    }
}
