export default LoadingSkeleton;
/**
 * Used to mask a limited block of loadable content. When `isLoading` is set to true,
 * the content area will be be replaced by a shadowed, skeletal imitation of the
 * pending content.
 */
declare function LoadingSkeleton({ children, isLoading, content, lines, showTitle, size, }: {
    children: any;
    isLoading?: boolean;
    content?: string;
    lines?: number;
    showTitle?: boolean;
    size?: string;
}): JSX.Element;
declare namespace LoadingSkeleton {
    namespace propTypes {
        const children: any;
        const isLoading: any;
        const content: any;
        const lines: any;
        const showTitle: any;
        const size: any;
    }
}
