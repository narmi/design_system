import React, { useState, useRef } from 'react';
import { Modal, Button, PlainButton, RadioButtons } from 'design_system';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Components/Modal',
  decorators: [NdsStyles],
};

export const SampleModal = () => {
    const [open, setOpen] = useState(false);
    return ( 
    <div className="nds-typography">
        <Button onClick={()=>{setOpen(true)}}>Open Modal</Button>
        <Modal
            open={open}
            setOpen={setOpen}
        >
            <div style={{width: "500px"}}>
                <h4>Title</h4>
                <p>
                    This is an example of body text that a user could pass
                </p>
            </div>
    </Modal> 
  </div>
  )
}

export const AccountModal = () => {
    const [open, setOpen] = useState(true);
    const [deleteTransaction, setDeleteTransaction] = useState(false);
    const ref = useRef();
    return ( 
    <div className="nds-typography">
        <Button onClick={()=>{setOpen(true)}}>Open Modal</Button>
        <Modal
            open={open}
            setOpen={setOpen}
        >
            <div style={{width: "500px"}}>
                <h3 className="nds-sans">Delete your upcoming transaction</h3>
                <hr style={{border:"2px solid #1A4338"}}/>
                <div>
                    <p>
                        This is an example of body text that a user could pass
                    </p>
                    <RadioButtons
                        onChange={(e)=>{setDeleteTransaction(e.target.value === 'false' ? false: true)}}
                        initialvalue={deleteTransaction}
                        defaultValue={deleteTransaction}
                        name="setting_value"
                        options={{ True: true, False: false }}
                        ref={ref}
                    />
                </div>
                <div style={{display:"flex", flexDirection: "row", float:"right", alignItems:"center"}}>
                    <PlainButton onClick={()=>{console.log(false, ref); setOpen(false);}} style={{paddingRight:"16px", color: "rgb(var(--nds-primary-color))"}} type="plain">Cancel</PlainButton>
                    <Button disabled={deleteTransaction === false}>Yes, Delete</Button>
                </div>
            </div>
    </Modal> 
  </div>
  )
}