export default Toggle;
/**
 * Checkbox behavior with the visual treatment of a physical toggle switch.
 */
declare function Toggle({ defaultActive, onChange, labelledBy, label, }: {
    defaultActive?: boolean;
    onChange?: () => void;
    labelledBy: any;
    label: any;
}): JSX.Element;
declare namespace Toggle {
    namespace propTypes {
        const onChange: any;
        const defaultActive: any;
        const label: any;
        const labelledBy: any;
    }
}
