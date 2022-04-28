export default Row;
/**
 * Basic flexbox helper that arranges content into a non-wrapping row.
 * `Row` will grow to fill the width of its parent container.
 * Items of `Row` will grow to fit remaining space by default.
 * When a `Row.Item` has a boolean prop of `shrink`, it will shirnk to content width.
 */
declare function Row({ alignItems, justifyContent, gapSize, as, children, }: {
    alignItems?: string;
    justifyContent?: string;
    gapSize?: string;
    as?: string;
    children: any;
}): JSX.Element;
declare namespace Row {
    export namespace propTypes {
        const gapSize: any;
        const alignItems: any;
        const justifyContent: any;
        const as: any;
        const children: any;
    }
    export { RowItem as Item };
}
import RowItem from "./RowItem";
