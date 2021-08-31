import React, {useState} from 'react';
import { NdsStyles } from './decorators/decorators';
import { DateInput, TextInput } from 'design_system';

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

export const ColorInput = () => {
  const [color, setColor] = useState("#915F6D")
  return <div className={"nds-typography"}>
    <h1 style={{marginBottom: "1em"}}>Edit Primary Accessible Color</h1>
    <div style={{display: "flex", alignItems: "center"}}>
      <TextInput label={"Hex Code"} defaultValue="915F6D" onChange={(e)=>{setColor("#" + e.target.value);}}/>
      <span className="narmi-icon-solid-circle" style={{marginLeft: "20px", color:color, fontSize:"50px"}}></span>
    </div>
  </div>
}