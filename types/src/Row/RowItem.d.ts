export default RowItem;
/**
 * Child component of `Row`.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.
 */
declare function RowItem({ shrink, as, children }: {
    shrink?: boolean;
    as?: string;
    children: any;
}): JSX.Element;
declare namespace RowItem {
    namespace propTypes {
        const shrink: any;
        const as: any;
        const children: any;
    }
}
