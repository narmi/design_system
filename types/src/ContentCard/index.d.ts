export default ContentCard;
/**
 * Narmi style content containers, with support for rendering as an interactive button.
 */
declare function ContentCard({ type, paddingSize, onClick, isSelected, children, }: {
    type?: string;
    paddingSize?: string;
    onClick?: () => void;
    isSelected?: boolean;
    children: any;
}): JSX.Element;
declare namespace ContentCard {
    namespace propTypes {
        const children: any;
        const paddingSize: any;
        const type: any;
        function onClick(props: any, propName: any): Error;
        const isSelected: any;
    }
}
