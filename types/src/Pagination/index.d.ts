export function _getAttributes(totalPages: number, selectedPage?: number, segmentSize?: number): any;
export default Pagination;
/**
 * Component that allows users to navigate between pages of information.
 * Your application is responsible for setting the total number of pages and
 * responding to the `onPageChange` callback.
 *
 * The component will handle which page numbers to render, next and previous arrows,
 * and conditionally rendering first and last pages.
 *
 * If your pagination setup expectes a fully controlled component, you may set `defaultSelectedPage` on every `onPageChange` call.
 */
declare function Pagination({ onPageChange, totalPages, defaultSelectedPage, }: {
    onPageChange?: () => void;
    totalPages?: number;
    defaultSelectedPage?: number;
}): JSX.Element;
declare namespace Pagination {
    namespace propTypes {
        const totalPages: any;
        const defaultSelectedPage: any;
        const onPageChange: any;
    }
}
