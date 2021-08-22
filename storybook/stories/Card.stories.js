import React from 'react';
import { Card } from 'design_system';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Components/Card',
  decorators: [NdsStyles],
};

export const TransferChoices = () => {
  return <div>
    <h1 style={{textAlign: "center", marginBottom: "1em"}}>How do you want to send money?</h1>
    <div className="storybook-3col">
      <Card className="nds-typography"
            title="Transfer"
            icon="repeat"
            hoverable="true">
        <p>Transfer funds to an internal or external account</p>
      </Card>
      <Card className="nds-typography"
            title="Bill pay"
            icon="bill"
            hoverable="true">
        <p>Pay a bill online or set up future payments</p>
      </Card>
      <Card className="nds-typography"
            title="Member to member"
            icon="group"
            hoverable="true">
        <p>Send money directly to another bank member</p>
      </Card>
    </div>
  </div>
}

