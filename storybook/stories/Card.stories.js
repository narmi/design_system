import React, {useState} from 'react';
import { Card } from 'design_system';
import '../../dist/style.css';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Components/Card',
  decorators: [NdsStyles],
};

export const ThreeTransferChoices = () => {
  return <div>
    <h1 style={{textAlign: "center", marginBottom: "1em"}}>How do you want to send money?</h1>
    <div className="storybook-3col">
      <Card title="Transfer" icon="repeat" hoverable="true">
        <p>Transfer funds to an internal or external account</p>
      </Card>
      <Card title="Bill pay" icon="bill" hoverable="true">
        <p>Pay a bill online or set up future payments</p>
      </Card>
      <Card title="Member to member" icon="group" hoverable="true">
        <p>Send money directly to another bank member</p>
      </Card>
    </div>
  </div>
}

export const FourTransferChoices = () => {
  return <div>
    <h1 style={{textAlign: "center", marginBottom: "1em"}}>How do you want to send money?</h1>
    <div className="storybook-2col" style={{maxWidth: "35em", margin: "0 auto"}}>
      <Card title="Transfer" icon="repeat" hoverable="true">
        <p>Transfer funds to an internal or external account</p>
      </Card>
      <Card title="Bill pay" icon="bill" hoverable="true">
        <p>Pay a bill online or set up future payments</p>
      </Card>
      <Card title="Member to member" icon="group" hoverable="true">
        <p>Send money directly to another bank member</p>
      </Card>
      <Card title="Wire" icon="credit-card" hoverable="true">
        <p>Send money to anyone, for a fee</p>
      </Card>
    </div>
  </div>
}

export const Selection = () => {
  const [selected, setSelected] = useState("nothing");
  return <div>
    <h1 style={{textAlign: "center", marginBottom: "1em"}}>You've selected: {selected}</h1>
    <div className="storybook-2col" style={{maxWidth: "35em", margin: "0 auto"}}>
      <Card title="Transfer" icon="repeat" hoverable="true" onClick={() => setSelected("Transfer")}>
        <p>Transfer funds to an internal or external account</p>
      </Card>
      <Card title="Bill pay" icon="bill" hoverable="true" onClick={() => setSelected("Bill pay")}>
        <p>Pay a bill online or set up future payments</p>
      </Card>
    </div>
    <h5 style={{textAlign: "center", marginTop: "1em"}}>(Try clicking these cards!)</h5>
  </div>
}
