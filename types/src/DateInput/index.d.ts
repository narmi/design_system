export default DateInput;
/**
 * Single day picker.
 * Composes NDS input with a [flatpickr](http://flatpickrjs.org) calendar UI.
 */
declare function DateInput({ disableDates, minDate, dateFormat, altInput, altFormat, defaultDate, onChange: onChangeProp, ...props }: {
    [x: string]: any;
    disableDates: any;
    minDate: any;
    dateFormat: any;
    altInput: any;
    altFormat: any;
    defaultDate: any;
    onChange?: () => void;
}): JSX.Element;
declare namespace DateInput {
    namespace propTypes {
        const label: any;
        const onChange: any;
        const disableDates: any;
        const minDate: any;
        const altFormat: any;
        const altInput: any;
        const defaultDate: any;
        const dateFormat: any;
    }
    namespace defaultProps {
        export function onChange_1(): void;
        export { onChange_1 as onChange };
        const disableDates_1: any[];
        export { disableDates_1 as disableDates };
        const dateFormat_1: string;
        export { dateFormat_1 as dateFormat };
    }
}
