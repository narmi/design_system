import{e}from"./iframe-CiLiZB3F.js";import{B as a}from"./index-BIoLrqxZ.js";import{i as d}from"./selection-CAkQuomx.js";import{R as n}from"./index-BVFBu_KW.js";import{S as l}from"./index-D_syGwkE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RvS1aOr8.js";import"./AsElement-tCgE9bJG.js";import"./index-C3c3J1Vh.js";import"./downshift.esm-DiqI3dMK.js";import"./extends-DDykod_l.js";import"./index-DBrdrwkb.js";import"./index-Chjiymov.js";import"./tslib.es6-rrx6G-_s.js";import"./index-C-EmfT6V.js";import"./raf-schd.esm-CmoV45_-.js";import"./index-CiJMswbN.js";import"./index-CW8FGsmy.js";const c=d.icons.map(t=>t.properties.name),p=t=>e.createElement(a,t),o=p.bind({});o.args={label:"Submit"};const r=()=>e.createElement("div",{style:{maxWidth:"640px"}},e.createElement(l,{id:"overdraft",label:"Use overdraft protection?"},e.createElement(l.Item,{value:"Yes"},"Yes"),e.createElement(l.Item,{value:"No"},"No")),e.createElement(a,{label:"Learn more about overdraft protection",kind:"plain",onClick:()=>{alert("button click")}}));r.parameters={docs:{description:{story:'A Button of `kind="plain"` is a button styled to look like a link.'}}};const i=()=>e.createElement(a,{kind:"ai",label:"Ask Anything",startIcon:"sparkle"});i.parameters={docs:{description:{story:'A Button of `kind="ai"` is used for AI-related actions. It renders with a white background, amethyst text, and an animated rotating gradient border.'}}};const s=()=>e.createElement(n,{alignItems:"center",justifyContent:"end"},e.createElement(n.Item,{shrink:!0},e.createElement(a,{kind:"negative",label:"Cancel"})),e.createElement(n.Item,{shrink:!0},e.createElement(a,{kind:"primary",label:"Confirm"})));s.parameters={docs:{description:{story:"When presenting the user with positive/negative options, use the `negative` button for the negating action and `primary` for confirm. The confirming action should always be on the right."}}};const m=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"secondary",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"tonal",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"plain",label:`${t} Button`,size:t}))))),e.createElement("div",{className:"margin--bottom--l"},e.createElement(n,{alignItems:"center"},["m","s","xs"].map(t=>e.createElement(n.Item,{key:t},e.createElement(a,{kind:"ai",label:`${t} Button`,size:t})))))),A={title:"Components/Button",component:a,argTypes:{startIcon:{options:["",...c]},endIcon:{options:["",...c]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  maxWidth: "640px"
}}>
    <Select id="overdraft" label="Use overdraft protection?">
      <Select.Item value="Yes">Yes</Select.Item>
      <Select.Item value="No">No</Select.Item>
    </Select>
    <Button label="Learn more about overdraft protection" kind="plain" onClick={() => {
    alert("button click");
  }} />
  </div>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'() => <Button kind="ai" label="Ask Anything" startIcon="sparkle" />',...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Row alignItems="center" justifyContent="end">
    <Row.Item shrink>
      <Button kind="negative" label="Cancel" />
    </Row.Item>
    <Row.Item shrink>
      <Button kind="primary" label="Confirm" />
    </Row.Item>
  </Row>`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <>
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
    <div className="margin--bottom--l">
      <Row alignItems="center">
        {["m", "s", "xs"].map(size => <Row.Item key={size}>
            <Button kind="ai" label={\`\${size} Button\`} size={size} />
          </Row.Item>)}
      </Row>
    </div>
  </>`,...m.parameters?.docs?.source}}};const $=["Overview","PlainButton","AiButton","ConfirmAndCancel","ButtonSizes"];export{i as AiButton,m as ButtonSizes,s as ConfirmAndCancel,o as Overview,r as PlainButton,$ as __namedExportsOrder,A as default};
