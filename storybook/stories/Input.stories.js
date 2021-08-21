import React from 'react';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';
import { TextInput } from 'design_system'

export default {
  title: 'Components/Inputs',
  decorators: [NdsStyles],
};

export const Inputs = () => {
  return <div className={"nds-typography"}>
    <h1>Text Inputs</h1>
    <div className="storybook-example-list storybook-4col nds-typography">
      <TextInput label={"Label"} />
      <TextInput />
      <TextInput label={"Label"} value={"Text"} />
      <TextInput label={"Label"} value={"Text"} error={"Error message"} />
      <TextInput label={"Label"} value={"Disabled"} disabled />
      <TextInput label={"Phone number"} value={"(555) 867-5309"} type={"tel"} />
      <TextInput label={"Date"} value={"1989-01-10"} type={"date"} />
    </div>
  </div>
}