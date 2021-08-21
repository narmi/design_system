import React from 'react';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';
import { TextInput } from 'design_system'
export default {
  title: 'Example/Inputs',
  decorators: [NdsStyles],
};

export const Inputs = () => {
  return <div className="storybook-example-list storybook-4col">
    <TextInput label={"Label"} />
    <TextInput label={"Label1"} />
    <TextInput label={"Label2"} />
    <TextInput label={"Label3"} />
    <TextInput label={"Label4"} />
    <TextInput label={"Label5"} />
    <TextInput label={"Label6"} />
    <TextInput label={"Label7"} />
  </div>
}