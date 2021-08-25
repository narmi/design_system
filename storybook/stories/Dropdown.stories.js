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
    return <Dropdown triggerLabel={"Accounts"}><p>yo</p></Dropdown>
}