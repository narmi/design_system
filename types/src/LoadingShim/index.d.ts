export default LoadingShim;
/**
 * Used to wrap a block of loadable content. When `isLoading` is set to true,
 * the content area will have an overlay and loading animation.
 */
declare function LoadingShim({ isLoading, children }: {
    isLoading?: boolean;
    children: any;
}): JSX.Element;
declare namespace LoadingShim {
    namespace propTypes {
        const children: any;
        const isLoading: any;
    }
}
