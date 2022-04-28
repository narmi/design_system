export default RadioButtons;
/**
The Narmi RadioButtons component expects an "options" Prop, which is an object where the keys are the radiobutton
labels and the values are the radiobutton values. An "initialvalue" Prop can be passed to set a default checked
radiobutton.

```
  <RadioButtons
    initialValue={"secondValue"}
    options={{ "First Label": "firstValue", "Second Label": "secondValue" }}
  />
```
*/
declare function RadioButtons({ options, name, initialValue, kind, onChange, ...containerProps }: {
    [x: string]: any;
    options: any;
    name: any;
    initialValue: any;
    kind?: string;
    onChange?: () => void;
}): JSX.Element;
declare namespace RadioButtons {
    namespace propTypes {
        const options: any;
        const name: any;
        const initialValue: any;
        const onChange: any;
        const kind: any;
    }
}
