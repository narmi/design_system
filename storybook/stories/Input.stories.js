import React from 'react';
import { NdsStyles } from './decorators/decorators';
import { TextInput } from 'design_system'
export default {
  title: 'Components/Inputs',
  decorators: [NdsStyles],
};

export const Inputs = () => {
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
    </div>
  </div>
}