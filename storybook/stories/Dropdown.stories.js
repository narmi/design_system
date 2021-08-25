import React, { useState } from 'react';
import { Modal, Button, Dropdown, TextInput } from 'design_system';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Components/Dropdown',
  decorators: [NdsStyles],
};

{/* <AccountSelector
field="from_account"
label="From"
accounts={accounts.map((a) => Account.deserialize(a))}
/> */}

export const BasicDropdown = () => {
    return <Dropdown />
}

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