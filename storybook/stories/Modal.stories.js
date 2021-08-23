import React, {useRef, useState} from 'react';
import { Modal, Button, Card, PlainButton } from 'design_system';
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
            // onCancel={handleCancel}
            // onSuccess={handleCancel}
        >
            <div style={{width: "500px", padding: "40px"}}>
                <h4>Title</h4>
                <p>
                    By clicking &quot;Continue,&quot; you acknowledge that you&apos;re
                    leaving Aqua's online banking platform.{" "}
                    Aqua assumes no liability for the products, services,
                    content, policies, or security of third party sites.
                </p>
            </div>
    </Modal> 
  </div>
  )
}