import React, { useState } from 'react';
import { Modal, Button } from 'design_system';
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
            cancelLabel={"Cancel"}
            successLabel={"Continue"}
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