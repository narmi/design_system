export default Tag;
/**
 * A rounded rectangle inline label.
 * The user has the option of firing a callback for 'dismissible' Tags.
 */
declare function Tag({ kind, onDismiss, label, }: {
    kind?: string;
    onDismiss?: () => void;
    label: any;
}): JSX.Element;
declare namespace Tag {
    namespace propTypes {
        const disableAutoPlacement: any;
        const kind: any;
        const onDismiss: any;
        const label: any;
    }
}
