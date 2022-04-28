export default Popover;
/**
 * Generic Popover component. Renders a floating element that can contain any content,
 * positioned relatively to its triggering element.
 *
 * This Popover only appears on "click" (focus + activate or mouse click) interactions.
 * The Escape key and clicking outside of the Popover will dismiss it.
 * For a hover-based informative popover, use `Tooltip`.
 *
 * The popover will position itself based on the `side` prop, but will
 * automatically reposition to avoid collisions with viewport edges.
 */
declare function Popover({ side, content, children, wrapperDisplay, offset, disableAutoPlacement, matchTriggerWidth, }: {
    side?: string;
    content: any;
    children: any;
    wrapperDisplay?: string;
    offset?: number;
    disableAutoPlacement?: boolean;
    matchTriggerWidth?: boolean;
}): JSX.Element;
declare namespace Popover {
    namespace propTypes {
        const children: any;
        const content: any;
        const side: any;
        const wrapperDisplay: any;
        const offset: any;
        const matchTriggerWidth: any;
        const disableAutoPlacement: any;
    }
}
