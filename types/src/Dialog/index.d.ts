export default Dialog;
/**
 * Renders a centered modal dialog with an overlay
 *
 * This component uses a `ReactDOM` portal to render it as a direct
 * child of `document.body`.
 */
declare function Dialog({ isOpen, onUserDismiss, title, headerStyle, children, footer, width, }: {
    isOpen?: boolean;
    onUserDismiss?: () => void;
    title: any;
    headerStyle?: string;
    children: any;
    footer: any;
    width?: string;
}): JSX.Element;
declare namespace Dialog {
    namespace propTypes {
        const children: any;
        const title: any;
        const footer: any;
        const headerStyle: any;
        const isOpen: any;
        const onUserDismiss: any;
        const width: any;
    }
}
