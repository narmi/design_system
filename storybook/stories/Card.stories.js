import React, {useRef, useState} from 'react';
import { Button, Card, PlainButton } from 'design_system';
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


export const Form = () => {
  const [selected, setSelected] = useState("admin");
  const hiddenInput = useRef(null);

  return <div className={"nds-typography"} style={{maxWidth: "50em"}}>
    <h4 className="nds-sans" style={{marginBottom: "0"}}>Access Level</h4>
    <hr style={{marginBottom: "1em"}} />
    <input type="hidden" value={selected} ref={hiddenInput} />
    <div className="storybook-3col" style={{margin: "0 auto"}}>
      <Card title="Admin" icon="user" hoverable="true"
            selected={selected === "admin"}
            onClick={() => setSelected("admin")}>
        <p>Full access including adding new users</p>
      </Card>
      <Card title="Collaborator" icon="group" hoverable="true"
            selected={selected === "collaborator"}
            onClick={() => setSelected("collaborator")}>
        <p>Customize your teammate's access</p>
      </Card>
      <Card title="Viewer" icon="eye" hoverable="true"
            selected={selected === "viewer"}
            onClick={() => setSelected("viewer")}>
        <p>View information on selected accounts</p>
      </Card>
    </div>
    <div style={{textAlign: "right", marginTop: "1em"}}>
      <a className={"nds-plain-button"} style={{marginRight: "1em"}}>Cancel</a>
      &nbsp;
      <Button onClick={() => alert(`The current value of the form input is ${hiddenInput.current.value}`)}>Submit</Button>
    </div>
  </div>
}

