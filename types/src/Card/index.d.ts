export default Card;
/**
 * Optionally clickable outlined content card
 *
 * **⚠️ DEPRECATED ⚠️**
 *
 * This component will be removed in a future release.
 * Please use `ContentCard` instead
 */
declare function Card(props: any): JSX.Element;
declare namespace Card {
    namespace propTypes {
        const title: any;
        const children: any;
        const button: any;
        const icon: any;
        const iconSize: any;
        const hoverable: any;
        const selected: any;
        const classes: any;
        const onClick: any;
    }
    namespace defaultProps {
        const hoverable_1: boolean;
        export { hoverable_1 as hoverable };
        const selected_1: boolean;
        export { selected_1 as selected };
        const icon_1: string;
        export { icon_1 as icon };
        const iconSize_1: string;
        export { iconSize_1 as iconSize };
        const classes_1: string;
        export { classes_1 as classes };
        export { noop as onClick };
    }
}
declare function noop(): void;
