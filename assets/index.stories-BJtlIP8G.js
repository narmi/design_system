import{e}from"./iframe-DMeW4f5A.js";import{B as o}from"./index-yfVt3Zh8.js";import{i as c}from"./selection-CAkQuomx.js";import{R as n}from"./index-CsFqSLwX.js";import{S as s}from"./index-T-IyUuYd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-BRiMLSo8.js";import"./index-DcK3ZpCe.js";import"./index-BF6Ykcz1.js";import"./downshift.esm-DFom70cy.js";import"./extends-DDykod_l.js";import"./tslib.es6-rrx6G-_s.js";import"./index-C49j9oz3.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-BZVqZAt_.js";import"./index-DR_9rwmU.js";const l=c.icons.map(t=>t.properties.name),p=t=>e.createElement(o,t),a=p.bind({});a.args={label:"Submit"};const r=()=>e.createElement("div",{style:{maxWidth:"640px"}},e.createElement(s,{id:"overdraft",label:"Use overdraft protection?"},e.createElement(s.Item,{value:"Yes"},"Yes"),e.createElement(s.Item,{value:"No"},"No")),e.createElement(o,{label:"Learn more about overdraft protection",kind:"plain",onClick:()=>{alert("button click")}}));r.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}};const m=()=>e.createElement(n,{alignItems:"center",justifyContent:"end"},e.createElement(n.Item,{shrink:!0},e.createElement(o,{kind:"negative",label:"Cancel"})),e.createElement(n.Item,{shrink:!0},e.createElement(o,{kind:"primary",label:"Confirm"})));m.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}};const i=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(o,{label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(o,{kind:"secondary",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(o,{kind:"tonal",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(o,{kind:"plain",label:`${t} Button`,size:t})))))),C={title:"Components/Button",component:o,argTypes:{startIcon:{options:["",...l]},endIcon:{options:["",...l]}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "640px"
}}>
    <Select id="overdraft" label="Use overdraft protection?">
      <Select.Item value="Yes">Yes</Select.Item>
      <Select.Item value="No">No</Select.Item>
    </Select>
    <Button label="Learn more about overdraft protection" kind="plain" onClick={() => {
    alert("button click");
  }} />
  </div>`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" justifyContent="end">
    <Row.Item shrink>
      <Button kind="negative" label="Cancel" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="primary" label="Confirm" />
    </Row.Item>
  </Row>`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="secondary" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="tonal" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="plain" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
  </>`,...i.parameters?.docs?.source}}};const N=["Overview","PlainButton","ConfirmAndCancel","ButtonSizes"];export{i as ButtonSizes,m as ConfirmAndCancel,a as Overview,r as PlainButton,N as __namedExportsOrder,C as default};
