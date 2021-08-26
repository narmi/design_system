import React, {useRef, useState} from 'react';
import { NdsStyles } from './decorators/decorators';
import { DateInput, TextInput, Button } from 'design_system';

export default {
  title: 'Components/Inputs',
  decorators: [NdsStyles],
};

export const Inputs = () => {
  const textFormatter = (text) => {
    return text
      ? text.toUpperCase()
      : ""
  };


  return <div className={"nds-typography"}>
    <h1 style={{marginBottom: "1em"}}>Text Inputs</h1>
    <div className="storybook-4col">
      <TextInput label={"Label"} />
      <TextInput />
      <TextInput label={"Label"} defaultValue={"Text"} />
      <TextInput label={"Label"} defaultValue={"Text"} error={"Error message"} />
      <TextInput label={"Label"} defaultValue={"Disabled"} disabled />
      <TextInput label={"Phone number"} defaultValue={"(555) 867-5309"} type={"tel"} />
      <TextInput label={"Date"} defaultValue={"1989-01-10"} type={"date"} />
      <TextInput label={"CAPS-LOCK TEXT"} format={textFormatter} defaultValue={"narmi"}/>
      <TextInput name="multiLine" multiline={true} format={textFormatter} defaultValue={"puppies are really cute and so are kittens and baby penguins"}/>
    </div>
  </div>
}

export const FormattedInputValues = () => {
  const textFormatter = (text) => {
    return text
      ? text.toUpperCase()
      : ""
  };

  const [value, setValue] = useState(textFormatter("narmi"))

  return <div className={"nds-typography"}>
    <h1 style={{marginBottom: "1em"}}>Text Inputs</h1>
    <div className="storybook-4col">
      <TextInput onChange={(e) => setValue(e.target.value)} label={"CAPS-LOCK TEXT"} format={textFormatter} defaultValue={value}/>
      <Button onClick={() => {
        alert(`The value of the first text input is ${value}`)
      }}>Use that input's value</Button>
    </div>
  </div>
}

export const DateInputs = () => {
  return <div className={"nds-typography"}>
    <h1 style={{marginBottom: "1em"}}>Date Pickers</h1>
    <div className="storybook-4col">
      <DateInput label={"Date of Birth"} />
    </div>
  </div>
}