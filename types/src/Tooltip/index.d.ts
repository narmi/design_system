export default Tooltip;
/**
 * Renders a text-only tooltip on hover or focus of a trigger.
 *
 * The tooltip will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */
declare function Tooltip({ side, text, children, wrapperDisplay, maxWidth, }: {
    side?: string;
    text: any;
    children: any;
    wrapperDisplay?: string;
    maxWidth?: string;
}): JSX.Element;
declare namespace Tooltip {
    namespace propTypes {
        const children: any;
        const text: any;
        const side: any;
        const wrapperDisplay: any;
        const maxWidth: any;
    }
}
