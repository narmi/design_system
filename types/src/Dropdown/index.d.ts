export default Dropdown;
/**
 * **⚠️ DEPRECATED ⚠️**
 *
 * This component will be removed in a future release.
 * Please use `Select` instead
 */
declare function Dropdown({ error, ...props }: {
    [x: string]: any;
    error: any;
}): JSX.Element;
declare namespace Dropdown {
    namespace defaultProps {
        const defaultOpen: boolean;
        function onChange(): void;
    }
    namespace propTypes {
        export const triggerLabel: any;
        export const children: any;
        export const field: any;
        const defaultOpen_1: any;
        export { defaultOpen_1 as defaultOpen };
        const onChange_1: any;
        export { onChange_1 as onChange };
        export const onClose: any;
        export const closeDropDown: any;
        export const error: any;
    }
}
