export default Modal;
/**
 * **⚠️ DEPRECATED ⚠️**
 *
 * This component will be removed in a future release.
 * Please use `Dialog` instead to display a centered modal window.
 */
declare function Modal({ open, setOpen, handleClose, children, classes, maxWidth, header, actions, }: {
    open?: boolean;
    setOpen: any;
    handleClose: any;
    children: any;
    classes?: string;
    maxWidth: any;
    header: any;
    actions: any;
}): JSX.Element;
declare namespace Modal {
    namespace propTypes {
        const children: any;
        const header: any;
        const open: any;
        const setOpen: any;
        const handleClose: any;
        const actions: any;
        const classes: any;
        const maxWidth: any;
    }
}
