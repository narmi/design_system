/**
 * This is not a complete list of HTML elements;
 * only the elements we want to support in `as` props.
 */
export const VALID_ELEMENTS: string[];
export default AsElement;
/**
 * Utility to conditionally render different HTML elements
 * in our components. Useful for exposing `as` props:
 *
 * `<Row as="ul"><Row.Item as="li" /></Row>
 *
 * @usage <AsElement elementName="ul" otherProp="this gets passed through">
 */
declare function AsElement({ elementType, children, ...rest }: {
    [x: string]: any;
    elementType?: string;
    children: any;
}): JSX.Element;
declare namespace AsElement {
    namespace propTypes {
        const elementType: any;
        const children: any;
    }
}
