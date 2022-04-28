export default SeparatorList;
/**
 * Takes a list of elements and places a visual separator between items.
 */
declare function SeparatorList({ separator, items }: {
    separator?: string;
    items?: any[];
}): JSX.Element;
declare namespace SeparatorList {
    namespace propTypes {
        const items: any;
        const separator: any;
    }
}
