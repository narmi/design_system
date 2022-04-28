export default TextInput;
/**
 * Narmi flavored text input with floating label
 */
declare function TextInput(props: any): JSX.Element;
declare namespace TextInput {
    namespace propTypes {
        const label: any;
        const onChange: any;
        const onBlur: any;
        const defaultValue: any;
        const multiline: any;
        const formatter: any;
    }
    namespace defaultProps {
        const multiline_1: boolean;
        export { multiline_1 as multiline };
        export function formatter_1(x: any): any;
        export { formatter_1 as formatter };
    }
}
