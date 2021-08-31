import React, { useEffect, useState } from 'react';
import { NdsStyles } from './decorators/decorators';
import { TextInput } from 'design_system';

export default {
  title: 'Components/ColorInput',
  decorators: [NdsStyles],
};

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