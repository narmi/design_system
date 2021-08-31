import React, {useRef, useState} from 'react';
import { Button, Card, PlainButton } from 'design_system';
import { NdsStyles } from './decorators/decorators';

export default {
  title: 'Components/Card',
  decorators: [NdsStyles],
};

export const ContentVarieties = () => {
  const [selected, setSelected] = useState("nothing");
  return <div className="nds-typography">
    <div className={"nds-grid"}>
      <div className={"nds-grid nds-span-7"} style={{alignContent: "flex-start"}}>
        <Card title="Title" classes={"nds-span-12"}>
          <PlainButton style={{display: "block", marginBottom: "8px", marginTop: "12px"}}>Button</PlainButton>
          <PlainButton style={{display: "block", marginBottom: "8px"}}>Button</PlainButton>
          <PlainButton style={{display: "block"}}>Button</PlainButton>
        </Card>
        <Card title="Title" classes={"nds-span-12"} button={<PlainButton>Button</PlainButton>} >
          <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
            <span>Text</span>
            <span style={{textAlign: "right"}}>Text</span>
          </div>
          <hr />
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <span>Text</span>
            <span style={{textAlign: "right"}}>Text</span>
          </div>
        </Card>
        <Card title="Title" classes={"nds-span-12"} button={<PlainButton>Button</PlainButton>} />
      </div>
      <div className={"nds-grid nds-span-5"} style={{alignContent: "flex-start"}}>
        <Card title="Title" icon="star" classes={"nds-span-12"}>
          This is a piece of text that explains something
        </Card>
        <Card title="Title" icon="star" hoverable classes={"nds-span-12"}>
          This is a hoverable piece of text that explains something
        </Card>
        <Card title="Title" icon="star" hoverable selected classes={"nds-span-12"}>
          This is a selected piece of text that explains something
        </Card>
      </div>
    </div>
  </div>
}

export const ThreeTransferChoices = () => {
  return <div className="nds-typography">
    <h1 style={{textAlign: "center", marginBottom: "1em"}}>How do you want to send money?</h1>
    <div className="nds-grid">
      <Card classes="nds-span-4 nds-span-tablet-6"
            title="Transfer" icon="repeat" hoverable>
        <p>Transfer funds to an internal or external account</p>
      </Card>
      <Card classes="nds-span-4 nds-span-tablet-6"
            title="Bill pay" icon="bill" hoverable>
        <p>Pay a bill online or set up future payments</p>
      </Card>
      <Card classes="nds-span-4 nds-span-tablet-6"
            title="Member to member" icon="group" hoverable>
        <p>Send money directly to another bank member</p>
      </Card>
    </div>
  </div>
}

export const FourTransferChoices = () => {
  return <div className="nds-typography">
    <h1 style={{textAlign: "center", marginBottom: "1em"}}>How do you want to send money?</h1>
    <div className="nds-grid" style={{maxWidth: "35em", margin: "0 auto"}}>
      <Card classes="nds-span-6" title="Transfer" icon="repeat" hoverable>
        <p>Transfer funds to an internal or external account</p>
      </Card>
      <Card classes="nds-span-6" title="Bill pay" icon="bill" hoverable>
        <p>Pay a bill online or set up future payments</p>
      </Card>
      <Card classes="nds-span-6" title="Member to member" icon="group" hoverable>
        <p>Send money directly to another bank member</p>
      </Card>
      <Card classes="nds-span-6" title="Wire" icon="credit-card" hoverable>
        <p>Send money to anyone, for a fee</p>
      </Card>
    </div>
  </div>
}

export const Selection = () => {
  const [selected, setSelected] = useState("nothing");
  return <div className="nds-typography">
    <h1 style={{textAlign: "center", marginBottom: "1em"}}>You've selected: {selected}</h1>
    <div className="nds-grid" style={{maxWidth: "35em", margin: "0 auto"}}>
      <Card classes="nds-span-6"
            title="Transfer" icon="repeat" hoverable
            onClick={() => setSelected("Transfer")}>
        <p>Transfer funds to an internal or external account</p>
      </Card>
      <Card classes="nds-span-6"
            title="Bill pay" icon="bill" hoverable
            onClick={() => setSelected("Bill pay")}>
        <p>Pay a bill online or set up future payments</p>
      </Card>
    </div>
    <h5 style={{textAlign: "center", marginTop: "1em"}}>(Try clicking these cards!)</h5>
  </div>
}


export const Form = () => {
  const [selected, setSelected] = useState("admin");
  const hiddenInput = useRef(null);

  return <div className="nds-typography" style={{maxWidth: "50em"}}>
    <h4 className="nds-sans" style={{marginBottom: "0"}}>Access Level</h4>
    <hr style={{marginBottom: "1em"}} />
    <input type="hidden" value={selected} ref={hiddenInput} />
    <div className="nds-grid" style={{margin: "0 auto"}}>
      <Card classes="nds-span-4 nds-span-tablet-6"
            title="Admin" icon="user" hoverable
            selected={selected === "admin"}
            onClick={() => setSelected("admin")}>
        <p>Full access including adding new users</p>
      </Card>
      <Card classes="nds-span-4 nds-span-tablet-6"
            title="Collaborator" icon="group" hoverable
            selected={selected === "collaborator"}
            onClick={() => setSelected("collaborator")}>
        <p>Customize your teammate's access</p>
      </Card>
      <Card classes="nds-span-4 nds-span-tablet-6"
            title="Viewer" icon="eye" hoverable
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

