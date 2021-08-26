import React from 'react';
import { NdsStyles } from './decorators/decorators';
import { DateInput, TextInput } from 'design_system';

export default {
  title: 'Components/Inputs',
  decorators: [NdsStyles],
};

export const Inputs = () => {
  const [singleLine, setSingle] = React.useState("narmi");
  const [multiLine, setMulti] = React.useState("puppies are really cute and so are kittens and baby penguins");

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
      <TextInput label={"CAPS-LOCK TEXT"} onChange={e => setSingle(e.target.value)} format={textFormatter} value={singleLine}/>
      <TextInput name="multiLine" multiline={true} format={textFormatter} onChange={e => setMulti(e.target.value)} value={multiLine}/>
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